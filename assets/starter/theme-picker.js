/* Searchable picker; the existing shell selector remains the selection authority. */
(() => {
 const config=window.STUDIO_THEMES,select=document.getElementById('explorer-theme');
 const trigger=document.getElementById('theme-picker-trigger'),panel=document.getElementById('theme-picker');
 const search=document.getElementById('theme-picker-search'),list=document.getElementById('theme-picker-list');
 const empty=document.getElementById('theme-picker-empty'),results=document.getElementById('theme-picker-results');
 const families={studio:'Studio',workspace:'Workspace',seasonal:'Holiday',creative:'Creative Lab'};
 const byId=new Map(config.themes.map(theme=>[theme.id,theme]));
 let open=false,visible=[],activeId=null;

 function swatch(element,theme){element.style.backgroundColor=theme.color;element.style.setProperty('--swatch-ink',theme.tone==='dark'?'#FFFFFF':'#181818');}
 function position(){
  if(!open)return;
  const rect=trigger.getBoundingClientRect(),width=Math.min(424,innerWidth-24),top=Math.max(rect.bottom+10,(window.visualViewport?.offsetTop||0)+12);
  const bottom=Math.min(innerHeight,window.visualViewport?visualViewport.offsetTop+visualViewport.height:innerHeight);
  panel.style.width=width+'px';panel.style.left=Math.max(12,Math.min(rect.right-width,innerWidth-width-12))+'px';
  panel.style.top=top+'px';panel.style.maxHeight=Math.max(100,bottom-top-12)+'px';
 }
 function setActive(id,{scroll=false}={}){
  activeId=id;
  for(const option of list.querySelectorAll('[role="option"]'))option.classList.toggle('is-active',option.dataset.themeId===id);
  if(!id){search.removeAttribute('aria-activedescendant');return;}
  const option=document.getElementById('picker-option-'+id);search.setAttribute('aria-activedescendant',option.id);
  if(scroll){const row=option.getBoundingClientRect(),bounds=list.getBoundingClientRect();if(row.top<bounds.top+25)list.scrollTop-=bounds.top+25-row.top;else if(row.bottom>bounds.bottom)list.scrollTop+=row.bottom-bounds.bottom;}
 }
 function renderOptions(){
  const query=search.value.trim().toLowerCase();
  visible=config.themes.filter(theme=>`${theme.name} ${theme.id} ${theme.description} ${families[theme.family]} ${theme.tone}`.toLowerCase().includes(query));
  list.replaceChildren();
  for(const family of config.familyOrder||Object.keys(families)){
   const label=families[family];
   const themes=visible.filter(theme=>theme.family===family);if(!themes.length)continue;
   const group=document.createElement('div');group.className='picker-group';group.setAttribute('role','group');group.setAttribute('aria-labelledby','picker-group-'+family);
   const heading=document.createElement('div');heading.className='picker-group-heading';heading.id='picker-group-'+family;heading.textContent=label;
   const count=document.createElement('span');count.textContent=themes.length;heading.append(count);group.append(heading);
   for(const theme of themes){
    const option=document.createElement('div');option.className='picker-option';option.id='picker-option-'+theme.id;option.dataset.themeId=theme.id;option.setAttribute('role','option');option.setAttribute('aria-selected',String(select.value===theme.id));
    const color=document.createElement('span');color.className='theme-swatch option-swatch';color.setAttribute('aria-hidden','true');swatch(color,theme);
    const copy=document.createElement('span');copy.className='picker-option-copy';const name=document.createElement('strong');name.textContent=theme.name;const description=document.createElement('small');description.textContent=theme.description;copy.append(name,description);
    const check=document.createElement('span');check.className='picker-check';check.textContent='✓';check.setAttribute('aria-hidden','true');option.append(color,copy,check);group.append(option);
   }
   list.append(group);
  }
  empty.hidden=visible.length!==0;list.hidden=visible.length===0;
  results.textContent=`${visible.length} ${visible.length===1?'theme':'themes'}${query?' found':' to explore'}`;
  const next=visible.some(theme=>theme.id===activeId)?activeId:visible.some(theme=>theme.id===select.value)?select.value:visible[0]?.id;
  setActive(next||null);list.scrollTop=0;
 }
 function sync(){
  const theme=byId.get(select.value);if(!theme)return;
  document.getElementById('explorer-theme-name').textContent=theme.name;
  document.getElementById('theme-picker-family').textContent=families[theme.family]+' collection';
  swatch(document.getElementById('theme-picker-swatch'),theme);
  trigger.setAttribute('aria-label',`Choose theme: ${theme.name}`);
  trigger.title=theme.name;
  if(open)renderOptions();
 }
 function closed({focus=false}={}){
  open=false;panel.classList.remove('is-open');trigger.setAttribute('aria-expanded','false');search.setAttribute('aria-expanded','false');search.removeAttribute('aria-activedescendant');
  if(focus)trigger.focus({preventScroll:true});
 }
 function close({focus=false}={}){
  if(typeof panel.hidePopover==='function'&&panel.matches(':popover-open'))panel.hidePopover();
  closed({focus});
 }
 function show(){
  open=true;search.value='';activeId=select.value;panel.classList.add('is-open');trigger.setAttribute('aria-expanded','true');search.setAttribute('aria-expanded','true');
  position();renderOptions();
  if(typeof panel.showPopover==='function')panel.showPopover();
  search.focus({preventScroll:true});setActive(activeId,{scroll:true});
 }
 function choose(id){
  if(!byId.has(id))return;
  close({focus:true});select.value=id;select.dispatchEvent(new Event('change',{bubbles:true}));
 }
 trigger.addEventListener('click',()=>open?close({focus:true}):show());
 trigger.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp'].includes(event.key)){event.preventDefault();if(!open)show();}});
 search.addEventListener('input',()=>{activeId=null;renderOptions();});
 search.addEventListener('keydown',event=>{
  if(!['ArrowDown','ArrowUp','Home','End','Enter'].includes(event.key))return;
  if(event.key==='Enter'){event.preventDefault();if(activeId)choose(activeId);return;}
  if(!visible.length)return;event.preventDefault();const index=visible.findIndex(theme=>theme.id===activeId);
  const next=event.key==='Home'?0:event.key==='End'?visible.length-1:event.key==='ArrowDown'?Math.min(index+1,visible.length-1):Math.max(index-1,0);
  setActive(visible[next].id,{scroll:true});
 });
 panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();close({focus:true});}else if(event.key==='Tab')close();});
 list.addEventListener('pointerdown',event=>{if(event.target.closest('[role="option"]'))event.preventDefault();});
 list.addEventListener('click',event=>{const option=event.target.closest('[data-theme-id]');if(option)choose(option.dataset.themeId);});
 list.addEventListener('pointermove',event=>{const option=event.target.closest('[data-theme-id]');if(option)setActive(option.dataset.themeId);});
 document.getElementById('theme-picker-reset').addEventListener('click',()=>{search.value='';activeId=null;renderOptions();search.focus({preventScroll:true});});
 panel.addEventListener('toggle',event=>{if(event.newState==='closed')closed();});
 document.addEventListener('pointerdown',event=>{if(open&&!panel.contains(event.target)&&!trigger.contains(event.target))close();});
 window.addEventListener('blur',()=>{if(open&&document.activeElement?.tagName==='IFRAME')close();});
 window.addEventListener('resize',position);window.addEventListener('scroll',position,{passive:true});
 window.visualViewport?.addEventListener('resize',position);
 select.addEventListener('theme:sync',sync);select.addEventListener('change',sync);
 select.hidden=true;trigger.hidden=false;document.querySelector('label[for="explorer-theme"]').htmlFor=trigger.id;
 document.querySelector('.picker-total').textContent=config.themes.length+' styles';
 sync();
})();
