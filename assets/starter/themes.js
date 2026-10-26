(() => {
  const config=window.STUDIO_THEMES,select=document.querySelector('#theme-select');
  const byId=new Map(config.themes.map(theme=>[theme.id,theme]));
  select.replaceChildren();
  const familyLabels={studio:'Studio themes',workspace:'Creative workspace themes',seasonal:'Holiday themes'};
  for(const family of ['studio','workspace','seasonal']){
    const group=document.createElement('optgroup');group.label=familyLabels[family];
    config.themes.filter(theme=>theme.family===family).forEach(theme=>{
      const option=document.createElement('option');option.value=theme.id;option.textContent=theme.name;group.append(option);
    });select.append(group);
  }
  function applyTheme(id,{save=true,url=true}={}){
    const theme=byId.get(id)||byId.get(config.defaultTheme),root=document.documentElement;
    root.dataset.theme=theme.id;root.dataset.workspace=String(theme.family==='workspace'||theme.family==='seasonal');root.dataset.family=theme.family;root.dataset.tone=theme.tone;select.value=theme.id;
    document.querySelector('#design-description').textContent=theme.description;
    document.querySelector('#theme-status').textContent=`Selected theme: ${theme.name}`;
    document.querySelector('meta[name="theme-color"]').setAttribute('content',theme.color);
    const workspace=theme.workspace||['','',''];
    ['workspace-title','workspace-path','workspace-status'].forEach((key,index)=>document.getElementById(key).textContent=workspace[index]);
    if(save){try{localStorage.setItem(config.storageKey,theme.id);}catch{}}
    if(url){const next=new URL(location.href);next.searchParams.set('theme',theme.id);try{history.replaceState(null,'',next);}catch{}}
  }
  select.addEventListener('change',()=>applyTheme(select.value));
  window.addEventListener('popstate',()=>applyTheme(new URLSearchParams(location.search).get('theme'),{url:false}));
  applyTheme(document.documentElement.dataset.theme,{save:false,url:false});
})();
