(() => {
 const config=window.STUDIO_THEMES,byId=new Map(config.themes.map(theme=>[theme.id,theme]));
 const frames={lab:document.getElementById('lab-preview'),website:document.getElementById('website-preview')};
 const tabs=[...document.querySelectorAll('[data-view]')],status=document.getElementById('preview-status');
 const ready={lab:false,website:false},scrollPositions={lab:0,website:0};let state={theme:config.defaultTheme,view:'lab'},scrollPending=false,pendingRestore=null,anchorApplied=false;
 const themeSelect=document.getElementById('explorer-theme');
 for(const [family,label] of [['studio','Studio themes'],['workspace','Workspace themes'],['seasonal','Holiday themes'],['creative','Creative Lab themes']]){const group=document.createElement('optgroup');group.label=label;for(const theme of config.themes.filter(t=>t.family===family)){const option=document.createElement('option');option.value=theme.id;option.textContent=theme.name;group.append(option);}themeSelect.append(group);}
 const valid=id=>byId.has(id);const validView=view=>view==='website'?'website':'lab';
 function fromUrl(){const q=new URLSearchParams(location.search);let stored;try{stored=localStorage.getItem(config.storageKey);}catch{}return {theme:valid(q.get('theme'))?q.get('theme'):valid(stored)?stored:config.defaultTheme,view:validView(q.get('view'))};}
 function send(view,message){frames[view].contentWindow?.postMessage(message,location.origin==='null'?'*':location.origin);}
 function remember(){try{localStorage.setItem(config.storageKey,state.theme);}catch{}}
 function viewport(){const frame=frames[state.view],rect=frame.getBoundingClientRect(),header=document.querySelector('.explorer-header').getBoundingClientRect().bottom;const top=Math.max(0,header-rect.top),bottom=Math.min(frame.clientHeight,innerHeight-rect.top);send(state.view,{type:'theme-explorer:viewport',top:top+16,height:Math.max(160,bottom-top-32)});}
 function updateUrl(){const url=new URL(location.href);url.searchParams.set('theme',state.theme);if(state.view==='website')url.searchParams.set('view','website');else url.searchParams.delete('view');history.replaceState(null,'',url);}
 function render(){
  tabs.forEach(tab=>{const selected=tab.dataset.view===state.view;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!selected;});
  const theme=byId.get(state.theme);themeSelect.value=state.theme;document.getElementById('explorer-theme-name').textContent=theme.name;document.getElementById('explorer-theme-count').textContent=`${config.themes.length} themes`;
  document.title=`${state.view==='lab'?'Design Lab':'Website Demo'} — Devoralabs Theme Explorer`;
  status.hidden=ready[state.view];status.textContent=`Loading ${state.view==='lab'?'Design Lab':'Website Demo'}…`;
  for(const view of ['lab','website'])if(ready[view])send(view,{type:'theme-explorer:theme',theme:state.theme});
  if(ready[state.view]&&!anchorApplied&&/^#[a-zA-Z][\w-]*$/.test(location.hash)){anchorApplied=true;send(state.view,{type:'theme-explorer:anchor',hash:location.hash});}
  requestAnimationFrame(()=>{send(state.view,{type:'theme-explorer:measure'});viewport();});
 }
 function setView(view,{url=true}={}){if(validView(view)!==state.view){scrollPositions[state.view]=scrollY;pendingRestore=scrollPositions[validView(view)];}state.view=validView(view);render();if(url)updateUrl();}
 themeSelect.addEventListener('change',()=>{if(!valid(themeSelect.value))return;state.theme=themeSelect.value;pendingRestore=0;scrollPositions.lab=0;scrollPositions.website=0;window.scrollTo({top:0,behavior:'instant'});remember();render();updateUrl();});
 tabs.forEach(tab=>{
  tab.addEventListener('pointerdown',event=>{if(event.button===0){event.preventDefault();tab.focus({preventScroll:true});}});
  tab.addEventListener('click',()=>setView(tab.dataset.view));
 });
 document.querySelector('.explorer-tabs').addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?'lab':event.key==='End'?'website':state.view==='lab'?'website':'lab';setView(next);tabs.find(tab=>tab.dataset.view===next).focus({preventScroll:true});
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
 window.addEventListener('scroll',()=>{if(scrollPending)return;scrollPending=true;requestAnimationFrame(()=>{scrollPending=false;const offset=Math.max(0,-frames[state.view].getBoundingClientRect().top);send(state.view,{type:'theme-explorer:scroll',offset});viewport();});},{passive:true});
 window.addEventListener('resize',viewport);
 // A real scroll gesture takes priority over a still-pending tab/theme restoration.
 for(const type of ['wheel','touchstart'])window.addEventListener(type,()=>{pendingRestore=null;},{passive:true});
 window.addEventListener('popstate',()=>{state=fromUrl();anchorApplied=false;render();});
 state=fromUrl();
 frames.lab.src=`lab/index.html?theme=${encodeURIComponent(state.theme)}&embed=1`;
 frames.website.src=`website.html?theme=${encodeURIComponent(state.theme)}&embed=1`;
 render();
})();
