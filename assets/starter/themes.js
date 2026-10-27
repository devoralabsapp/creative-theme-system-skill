(() => {
  const config=window.STUDIO_THEMES,select=document.querySelector('#theme-select');
  const byId=new Map(config.themes.map(theme=>[theme.id,theme]));
  select.replaceChildren();
  const familyLabels={studio:'Studio themes',workspace:'Creative workspace themes',seasonal:'Holiday themes',creative:'Creative Lab themes'};
  for(const family of config.familyOrder||Object.keys(familyLabels)){
    const group=document.createElement('optgroup');group.label=familyLabels[family];
    config.themes.filter(theme=>theme.family===family).forEach(theme=>{
      const option=document.createElement('option');option.value=theme.id;option.textContent=theme.name;group.append(option);
    });select.append(group);
  }
  const heroNodes=[document.querySelector('#hero-title'),document.querySelector('.hero-copy>.eyebrow'),document.querySelector('.hero-copy>p'),document.querySelector('.hero-note')];
  const originalHero=heroNodes.map(node=>node.innerHTML);
  const holidays={
    halloween:['Little things.<br><em>A little strange.</em>','HALLOWEEN / THE CURIOSITY CABINET','For curious plans, peculiar discoveries and stories that stay with you after dark.','Keep the wonderfully unexpected.'],
    christmas:['Good things.<br><em>Wrapped with care.</em>','CHRISTMAS / THE GIVING ROOM','Thoughtful resources for small moments, warm gatherings and a little room to create.','A little thought goes a long way.'],
    tet:['Welcome<br><em>new beginnings.</em>','TẾT / A FRESH CHAPTER','Gather what matters. Make room for fresh plans, familiar warmth and good things to grow.','Fresh starts. Good fortune. Room to grow.'],
    'black-friday':['BIG IDEAS.<br><em>BLACK FRIDAY.</em>','THE CREATIVE EDIT / DEVORA EDITION','A bold collection of tools for the plans you are making and the things you want to create.','Find your next good direction.']
  };
  function decorateHoliday(id){const copy=holidays[id];heroNodes.forEach((node,index)=>node.innerHTML=copy?copy[index]:originalHero[index]);if(copy)document.querySelector('.holiday-scene').src=`assets/holidays/${id}.svg`;}
  function applyTheme(id,{save=true,url=true}={}){
    const theme=byId.get(id)||byId.get(config.defaultTheme),root=document.documentElement;
    decorateHoliday(theme.id);
    root.dataset.theme=theme.id;root.dataset.workspace=String((theme.styleFamily||theme.family)!=='studio');root.dataset.family=theme.styleFamily||theme.family;root.dataset.tone=theme.tone;select.value=theme.id;
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
