/* The overview is a registry-derived gallery, not another theme provider. */
(() => {
 const config=window.STUDIO_THEMES,search=document.getElementById('all-search'),filters=document.getElementById('all-filters'),collections=document.getElementById('all-collections');
 const families={
  studio:{name:'Studio',description:'Distinct ways to set the mood. From quiet, natural spaces to playful color and elegant dark rooms.'},
  workspace:{name:'Workspace',description:'Familiar tools, reimagined. Editors, workbooks, creative canvases and organized personal spaces.'},
  seasonal:{name:'Holiday',description:'Character for every occasion. Moonlit curiosities, wrapped gifts, fresh beginnings and a bold Black Friday edit.'},
  creative:{name:'Creative Lab',description:'A little less expected. Material studies, editorial experiments and the Devoralabs personal signatures.'}
 };
 const familyOrder=config.familyOrder||Object.keys(families);
 let family='all';const entries=[];
 document.getElementById('all-total').textContent=config.themes.length;
 for(const [id,name] of [['all','All themes'],...familyOrder.map(id=>[id,families[id].name])]){
  const button=document.createElement('button');button.type='button';button.dataset.familyFilter=id;button.setAttribute('aria-pressed',String(id==='all'));button.append(document.createTextNode(name));
  const count=document.createElement('span');count.textContent=id==='all'?config.themes.length:config.themes.filter(theme=>theme.family===id).length;button.append(count);filters.append(button);
 }
 let index=0;
 for(const id of familyOrder){
  const info=families[id];
  const themes=config.themes.filter(theme=>theme.family===id),section=document.createElement('section');section.className='all-collection';section.setAttribute('aria-labelledby','all-heading-'+id);
  const heading=document.createElement('header');heading.className='all-collection-heading';
  const number=document.createElement('span');number.className='all-collection-index';number.textContent=String(++index).padStart(2,'0');number.setAttribute('aria-hidden','true');
  const copy=document.createElement('div'),title=document.createElement('h2'),count=document.createElement('span'),description=document.createElement('p');title.id='all-heading-'+id;title.textContent=info.name;count.className='all-collection-count';count.textContent=themes.length;title.append(count);description.textContent=info.description;copy.append(title,description);heading.append(number,copy);
  const grid=document.createElement('div');grid.className='all-grid';section.append(heading,grid);collections.append(section);
  for(const theme of themes){
   const article=document.createElement('article');article.className='theme-tile';article.dataset.themeId=theme.id;
   const link=document.createElement('a');link.className='theme-card';link.href=`./?theme=${encodeURIComponent(theme.id)}`;link.dataset.openTheme=theme.id;link.setAttribute('aria-label',`Open ${theme.name} in Design Lab`);
   const preview=document.createElement('div');preview.className='theme-card-image';preview.style.backgroundColor=theme.color;
   const image=document.createElement('img');image.src=`assets/previews/${theme.id}.jpg`;image.width=960;image.height=640;image.alt=theme.name+' — Design Lab preview';image.loading='lazy';image.decoding='async';
   const selected=document.createElement('span');selected.className='theme-card-selected';selected.textContent='✓ Selected';selected.hidden=true;preview.append(image,selected);
   const body=document.createElement('div');body.className='theme-card-body';const row=document.createElement('div');row.className='theme-card-title';const name=document.createElement('h3');name.textContent=theme.name;
   const tone=document.createElement('span');tone.className='theme-card-tone';tone.textContent=theme.tone==='dark'?'Dark':'Light';row.append(name,tone);
   const detail=document.createElement('p');detail.textContent=theme.description;
   const footer=document.createElement('span');footer.className='theme-card-link';footer.append(document.createTextNode('Open Design Lab'));const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');footer.append(arrow);
   body.append(row,detail,footer);link.append(preview,body);article.append(link);grid.append(article);entries.push({theme,article,link,selected,section});
  }
 }
 function syncSelection(){const selected=document.getElementById('explorer-theme').value;for(const entry of entries){const current=entry.theme.id===selected;entry.link.classList.toggle('is-selected',current);entry.selected.hidden=!current;if(current)entry.link.setAttribute('aria-current','true');else entry.link.removeAttribute('aria-current');}}
 function filter(){
  const query=search.value.trim().toLowerCase();let count=0,groupCount=0;
  for(const {theme,article} of entries){const matches=(family==='all'||theme.family===family)&&`${theme.name} ${theme.id} ${theme.description} ${families[theme.family].name} ${theme.tone}`.toLowerCase().includes(query);article.hidden=!matches;if(matches)count++;}
  for(const section of collections.children){const shown=section.querySelectorAll('.theme-tile:not([hidden])').length;section.hidden=shown===0;section.querySelector('.all-collection-count').textContent=shown;if(shown)groupCount++;}
  for(const button of filters.children)button.setAttribute('aria-pressed',String(button.dataset.familyFilter===family));
  document.getElementById('all-empty').hidden=count!==0;
  document.getElementById('all-results').textContent=`Showing ${count} ${count===1?'theme':'themes'} across ${groupCount} ${groupCount===1?'collection':'collections'}.`;
 }
 filters.addEventListener('click',event=>{const button=event.target.closest('[data-family-filter]');if(!button)return;family=button.dataset.familyFilter;filter();});
 search.addEventListener('input',filter);
 document.getElementById('all-reset').addEventListener('click',()=>{family='all';search.value='';filter();search.focus({preventScroll:true});});
 document.getElementById('explorer-theme').addEventListener('theme:sync',syncSelection);
 syncSelection();filter();
})();
