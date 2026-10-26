(() => {
  const config=window.STUDIO_THEMES;
  const valid=id=>config.themes.some(theme=>theme.id===id);
  let stored;try{stored=localStorage.getItem(config.storageKey);}catch{}
  const requested=new URLSearchParams(location.search).get('theme');
  const id=valid(requested)?requested:valid(stored)?stored:config.defaultTheme;
  const theme=config.themes.find(item=>item.id===id);
  document.documentElement.dataset.theme=id;
  document.documentElement.dataset.workspace=String(theme.family==='workspace'||theme.family==='seasonal');
  document.documentElement.dataset.family=theme.family;
  document.documentElement.dataset.tone=theme.tone;
})();
