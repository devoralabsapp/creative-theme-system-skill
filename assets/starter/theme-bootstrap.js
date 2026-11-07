(() => {
  const config=window.STUDIO_THEMES;
  const resolveTheme=id=>config.aliases?.[id]||id;
  const valid=id=>config.themes.some(theme=>theme.id===id);
  let stored;try{stored=resolveTheme(localStorage.getItem(config.storageKey));}catch{}
  const requested=resolveTheme(new URLSearchParams(location.search).get('theme'));
  const id=valid(requested)?requested:valid(stored)?stored:config.defaultTheme;
  const theme=config.themes.find(item=>item.id===id);
  document.documentElement.dataset.theme=id;
  document.documentElement.dataset.workspace=String((theme.styleFamily||theme.family)!=='studio');
  document.documentElement.dataset.family=theme.styleFamily||theme.family;
  document.documentElement.dataset.tone=theme.tone;
  document.documentElement.dataset.edition=theme.edition||'';
  const root=document.documentElement;root.dataset.expansion=String(theme.expansion===true);root.dataset.composition=theme.composition||'';root.dataset.material=theme.material||'';root.dataset.cardLayout=theme.cardLayout||'';
})();
