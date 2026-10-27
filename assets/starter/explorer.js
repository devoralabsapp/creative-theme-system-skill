(() => {
 const config=window.STUDIO_THEMES,byId=new Map(config.themes.map(theme=>[theme.id,theme]));
 const frames={lab:document.getElementById('lab-preview'),website:document.getElementById('website-preview')};
 const tabs=[...document.querySelectorAll('.explorer-tabs [data-view]')],views=tabs.map(tab=>tab.dataset.view),status=document.getElementById('preview-status');
 const names={all:'All Themes',lab:'Design Lab',website:'Website Demo'};
 const ready={lab:false,website:false},scrollPositions={all:0,lab:0,website:0};let state={theme:config.defaultTheme,view:'lab'},scrollPending=false,pendingRestore=null,anchorApplied=false;
 const themeSelect=document.getElementById('explorer-theme');
 const familyLabels={studio:'Studio themes',workspace:'Workspace themes',seasonal:'Holiday themes',creative:'Creative Lab themes'};
 for(const family of config.familyOrder||Object.keys(familyLabels)){const group=document.createElement('optgroup');group.label=familyLabels[family];for(const theme of config.themes.filter(t=>t.family===family)){const option=document.createElement('option');option.value=theme.id;option.textContent=theme.name;group.append(option);}themeSelect.append(group);}
 const valid=id=>byId.has(id),validView=view=>views.includes(view)?view:'lab';
 function fromUrl(){const q=new URLSearchParams(location.search);let stored;try{stored=localStorage.getItem(config.storageKey);}catch{}return {theme:valid(q.get('theme'))?q.get('theme'):valid(stored)?stored:config.defaultTheme,view:validView(q.get('view'))};}
 function send(view,message){frames[view]?.contentWindow?.postMessage(message,location.origin==='null'?'*':location.origin);}
 function remember(){try{localStorage.setItem(config.storageKey,state.theme);}catch{}}
 function viewport(){const frame=frames[state.view];if(!frame)return;const rect=frame.getBoundingClientRect(),header=document.querySelector('.explorer-header').getBoundingClientRect().bottom;const top=Math.max(0,header-rect.top),bottom=Math.min(frame.clientHeight,innerHeight-rect.top);send(state.view,{type:'theme-explorer:viewport',top:top+16,height:Math.max(160,bottom-top-32)});}
 function updateUrl({push=false}={}){const url=new URL(location.href);url.searchParams.set('theme',state.theme);if(state.view!=='lab')url.searchParams.set('view',state.view);else url.searchParams.delete('view');history[push?'pushState':'replaceState'](null,'',url);}
 function render(){
  document.documentElement.dataset.previewView=state.view;
  tabs.forEach(tab=>{const selected=tab.dataset.view===state.view;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!selected;});
  document.querySelector('.explorer-context').hidden=state.view==='all';
  const theme=byId.get(state.theme);themeSelect.value=state.theme;document.getElementById('explorer-theme-name').textContent=theme.name;document.getElementById('explorer-theme-count').textContent=`${config.themes.length} themes`;
  themeSelect.dispatchEvent(new Event('theme:sync'));
  document.title=`${names[state.view]} — Devoralabs Theme Explorer`;
  status.hidden=state.view==='all'||ready[state.view];status.textContent=`Loading ${names[state.view]}…`;
  for(const view of ['lab','website'])if(ready[view])send(view,{type:'theme-explorer:theme',theme:state.theme});
  if(ready[state.view]&&!anchorApplied&&/^#[a-zA-Z][\w-]*$/.test(location.hash)){anchorApplied=true;send(state.view,{type:'theme-explorer:anchor',hash:location.hash});}
  requestAnimationFrame(()=>{
   if(state.view==='all'){if(pendingRestore!==null){window.scrollTo({top:pendingRestore,behavior:'instant'});pendingRestore=null;}return;}
   send(state.view,{type:'theme-explorer:measure'});viewport();
  });
 }
 function setView(view,{url=true}={}){const next=validView(view);if(next!==state.view){scrollPositions[state.view]=scrollY;pendingRestore=scrollPositions[next];}state.view=next;render();if(url)updateUrl();}
 function chooseTheme(id,{view=state.view,push=false}={}){
  if(!valid(id))return;
  const next=validView(view);if(next!==state.view)scrollPositions[state.view]=scrollY;
  state={theme:id,view:next};pendingRestore=next==='all'?null:0;scrollPositions.lab=0;scrollPositions.website=0;
  window.scrollTo({top:0,behavior:'instant'});remember();render();updateUrl({push});
 }
 themeSelect.addEventListener('change',()=>chooseTheme(themeSelect.value));
 document.getElementById('all-panel').addEventListener('click',event=>{
  const link=event.target.closest('a[data-open-theme]');if(!link||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  if(!valid(link.dataset.openTheme))return;event.preventDefault();chooseTheme(link.dataset.openTheme,{view:'lab',push:true});document.getElementById('lab-tab').focus({preventScroll:true});
 });
 tabs.forEach(tab=>{
  tab.addEventListener('pointerdown',event=>{if(event.button===0){event.preventDefault();tab.focus({preventScroll:true});}});
  tab.addEventListener('click',()=>setView(tab.dataset.view));
 });
 document.querySelector('.explorer-tabs').addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const index=views.indexOf(state.view),step=event.key==='ArrowLeft'?-1:1;
  const next=event.key==='Home'?views[0]:event.key==='End'?views.at(-1):views[(index+step+views.length)%views.length];setView(next);tabs.find(tab=>tab.dataset.view===next).focus({preventScroll:true});
 });
 window.addEventListener('message',event=>{
  if(event.origin!==location.origin)return;const view=Object.keys(frames).find(name=>event.source===frames[name].contentWindow);if(!view||!event.data||typeof event.data!=='object')return;const message=event.data;
  if(message.type==='theme-preview:ready'){ready[view]=true;send(view,{type:'theme-explorer:theme',theme:state.theme});render();}
  if(message.type==='theme-preview:height'&&message.theme===state.theme&&Number.isFinite(message.height)&&message.height>=100&&message.height<100000){frames[view].height=String(Math.ceil(message.height));if(view===state.view&&pendingRestore!==null){window.scrollTo({top:pendingRestore,behavior:'instant'});pendingRestore=null;}if(view===state.view)viewport();}
  if(message.type==='theme-preview:dialog-open'&&view===state.view)viewport();
  if(message.type==='theme-preview:scroll-intent'&&view===state.view&&message.theme===state.theme)pendingRestore=null;
  if(message.type==='theme-preview:anchor'&&view===state.view&&Number.isFinite(message.offset)){anchorApplied=true;const header=document.querySelector('.explorer-header').getBoundingClientRect().height,top=frames[view].getBoundingClientRect().top+scrollY+Math.max(0,message.offset)-header;window.scrollTo({top:Math.max(0,top),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});if(typeof message.hash==='string'&&/^#[a-zA-Z][\w-]*$/.test(message.hash)){const url=new URL(location.href);url.hash=message.hash;history.replaceState(null,'',url);}}
  if(message.type==='theme-preview:top'&&view===state.view)window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});
 });
 window.addEventListener('scroll',()=>{if(scrollPending||!frames[state.view])return;scrollPending=true;requestAnimationFrame(()=>{scrollPending=false;const frame=frames[state.view];if(!frame)return;const offset=Math.max(0,-frame.getBoundingClientRect().top);send(state.view,{type:'theme-explorer:scroll',offset});viewport();});},{passive:true});
 window.addEventListener('resize',viewport);
 for(const type of ['wheel','touchstart'])window.addEventListener(type,()=>{pendingRestore=null;},{passive:true});
 window.addEventListener('popstate',()=>{const next=fromUrl();scrollPositions[state.view]=scrollY;pendingRestore=scrollPositions[next.view];state=next;anchorApplied=false;remember();render();tabs.find(tab=>tab.dataset.view===state.view).focus({preventScroll:true});});
 history.scrollRestoration='manual';state=fromUrl();
 frames.lab.src=`lab/index.html?theme=${encodeURIComponent(state.theme)}&embed=1`;
 frames.website.src=`website.html?theme=${encodeURIComponent(state.theme)}&embed=1`;
 render();
})();
