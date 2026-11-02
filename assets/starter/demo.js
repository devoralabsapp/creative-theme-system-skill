/* Product data stays independent of Lab projects; both views share theme compositions. */
(() => {
 const config=window.STUDIO_THEMES,root=document.getElementById('workspace');
 const sites=window.STUDIO_SITES,sessions=new Map();
 let site,products,state,renderers;
 function activate(id){
  site=sites[id];if(!site)throw Error('Missing website subject: '+id);
  if(!sessions.has(id))sessions.set(id,{products:site.items.map(p=>({...p,image:`sites/${id}/${p.id}`,status:'concept',saved:false,note:p.summary+'\n\n'+p.detail})),state:{theme:id,filter:'all',query:'',sort:'curated',selected:1}});
  ({products,state}=sessions.get(id));
  renderers=window.createStudioRenderers({brand,newButton,openButton,saveButton,toolbar,foot,visible,current,projects:products,esc,meta,badge,empty,filters,search,themeInfo,assetBase:'assets/'});
 }
 const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const themeInfo=()=>config.themes.find(t=>t.id===state.theme)||config.themes.find(t=>t.id===config.defaultTheme);
 const visible=()=>{const shown=products.filter(p=>(state.filter==='all'||p.kind===state.filter)&&`${p.title} ${p.category}`.toLowerCase().includes(state.query.trim().toLowerCase()));if(state.sort==='name')shown.sort((a,b)=>a.title.localeCompare(b.title));if(state.sort==='price-low')shown.sort((a,b)=>a.rank-b.rank);if(state.sort==='price-high')shown.sort((a,b)=>b.rank-a.rank);return shown;};
 const current=()=>products.find(p=>p.id===state.selected)||products[0];
 const brand=()=>`<div class="wordmark" data-site-copy><span class="brand-glyph" aria-hidden="true"></span>${esc(site.brand)}</div>`;
 const newButton=()=>`<a class="primary catalog-browse" data-site-copy href="#collection">${esc(site.collection)} ↗</a>`;
 const openButton=(p,label='',className='read-link')=>`<button type="button" class="${className}" data-site-copy data-action="read" data-id="${p.id}" data-product="${esc(p.title)}" aria-label="${esc(site.action)}: ${esc(p.title)}">${label==='↗'?'↗':esc(site.action)+' ↗'}</button>`;
 const saveButton=p=>`<button class="save-button" data-site-copy type="button" data-action="save" data-id="${p.id}" aria-pressed="${p.saved}" aria-label="${p.saved?'Unsave':'Save'} ${esc(p.title)}">${p.saved?'✓ Saved':'+ Save'}</button>`;
 const filters=()=>`<div class="filters" data-site-copy role="group" aria-label="Filter ${esc(site.noun)}">${[['all','All'],['a',site.categories[0]],['b',site.categories[1]]].map(([id,label])=>`<button type="button" class="filter${state.filter===id?' active':''}" data-action="filter" data-filter="${id}" aria-pressed="${state.filter===id}">${esc(label)}</button>`).join('')}</div>`;
 const search=()=>`<div class="catalog-find" data-site-copy><label class="search">Find<input id="search" data-search type="search" value="${esc(state.query)}" placeholder="Search ${esc(site.noun)}…" aria-label="Search ${esc(site.noun)}"></label><label class="catalog-sort">Order<select id="sort" aria-label="Sort ${esc(site.noun)}">${[['curated','Featured first'],['price-low','Entry number: low to high'],['price-high','Entry number: high to low'],['name','Name: A to Z']].map(([id,label])=>`<option value="${id}"${state.sort===id?' selected':''}>${label}</option>`).join('')}</select></label></div>`;
 const toolbar=()=>`<div class="toolbar">${filters()}${search()}</div>`;
 const foot=()=>`<footer class="screen-foot" data-site-copy><span class="meta" id="product-count" role="status" aria-live="polite">${products.length} ENTRIES / ${products.filter(p=>p.saved).length} SAVED / ${visible().length} SHOWN</span><span class="meta">${esc(site.brand.toUpperCase())} · ${esc(site.topic.toUpperCase())}</span></footer>`;
 const empty=()=>`<div id="products" data-projects data-site-copy><div class="empty-state" id="empty" role="status"><h2>No ${esc(site.noun)} found.</h2><p>Try another search or browse both categories.</p><button type="button" id="reset" data-action="reset">Show all ${esc(site.noun)}</button></div></div>`;
 const meta=p=>`${String(p.id).padStart(2,'0')} / ${p.category.toUpperCase()}`;
 const badge=()=> 'Concept edition';
 // Keep each composition's inline emphasis, line breaks and heading geometry.
 function replaceHeading(node,value){
  const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT),leaves=[];let text;
  while((text=walker.nextNode()))if(text.nodeValue.trim())leaves.push(text);
  const parts=value.split('|'),words=parts.join(' ').split(/\s+/);
  if(!leaves.length){node.textContent=words.join(' ');return;}
  leaves.forEach((leaf,i)=>{const from=Math.floor(i*words.length/leaves.length),to=Math.floor((i+1)*words.length/leaves.length);leaf.nodeValue=(parts.length===leaves.length?parts[i]:words.slice(from,to).join(' '))+(i<leaves.length-1?' ':'');});
 }
 function decorate(){
  const protectedText=new Set(products.flatMap(p=>[p.title,p.summary,p.detail,p.note,p.category,p.category.toUpperCase(),meta(p),badge(p)]));
  const headline=root.querySelector('h1');if(headline)replaceHeading(headline,site.headline);
  for(const node of root.querySelectorAll('h2,h3'))if(!node.closest('[data-site-copy]')&&!protectedText.has(node.textContent.trim()))node.textContent=site.collection;
  let introduced=false;
  for(const node of root.querySelectorAll('p'))if(!node.closest('[data-site-copy]')&&!protectedText.has(node.textContent.trim())){node.textContent=introduced?`Discover ${site.categories.join(' and ').toLowerCase()} from ${site.brand}.`:site.intro;introduced=true;}
  if(!headline){const h=document.createElement('h1');h.className='sr-only';h.dataset.siteHeading='true';h.textContent=site.headline.replaceAll('|',' ');root.append(h);}
  for(const image of root.querySelectorAll('img[src]'))if(/assets\/(expansion|volume-five|holidays)\//.test(image.getAttribute('src')))image.src=`assets/sites/${site.id}/scene.svg`;
  for(const node of root.querySelectorAll('.eyebrow,.ex-kicker,.holiday-kicker,figcaption')){
   if(node.closest('[data-site-copy],[data-project-id]')||protectedText.has(node.textContent.trim()))continue;
   node.textContent=node.closest('.ex-feature,.v5-selected,.featured-copy')?`FEATURED / ${current().category.toUpperCase()}`:site.topic.toUpperCase();
  }
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let text;
  while((text=walker.nextNode())){
   const parent=text.parentElement,value=text.nodeValue.trim();
   if(!value||parent.closest('[data-site-copy],h1,h2,h3,p,.eyebrow,.ex-kicker,.holiday-kicker,figcaption')||protectedText.has(value))continue;
   if(/^[\d\s/.,→↗✓+✳≡▤✿✦—-]+$/.test(value))continue;
   if(parent.closest('[data-action=select]')&&products.some(p=>value.includes(p.title)))continue;
   if(/Saved ideas?|saved entries|bookmark/i.test(value))text.nodeValue=value.replace(/Saved ideas?/gi,'Saved entries');
   else if(/Previous idea|Next idea/.test(value))text.nodeValue=value.replace('idea','entry');
   else if(/Switching themes preserves/.test(value))text.nodeValue='Each website keeps its own session.';
   else if(/Changes last until refresh/.test(value))text.nodeValue='Saved until this page is refreshed.';
   else if(/\b(?:DEVORA|DEVORALABS|WORKING|IDEAS?|PROJECTS?|NOTES?|COLLECTION|ORIGINAL|EDITION|SESSION|UNFINISHED|THOUGHT|POSSIBILIT|SIX|YOUR|A PLACE|SELECTED|IN FOCUS|FILED UNDER|ANOTHER|WORKSPACE)\b/i.test(value)){
    if(parent.matches('th,dt'))text.nodeValue=/category/i.test(value)?'Category':/bookmark/i.test(value)?'Saved':'Entry';
    else if(value.length<4)continue;
    else text.nodeValue=/\d/.test(value)?`${visible().length} ${site.noun.toUpperCase()}`:site.brand.toUpperCase();
   }
  }
  for(const node of root.querySelectorAll('.ex-state')){const id=Number(node.closest('[data-project-id]')?.dataset.projectId),entry=products.find(p=>p.id===id)||current();node.textContent=`${entry.category} / Concept edition`;}
  const countLabel=root.querySelector('.ex-facts>div:first-child>span');if(countLabel)countLabel.textContent=site.noun;
  for(const record of root.querySelectorAll('[data-project-id]')){
   const entry=products.find(p=>p.id===Number(record.dataset.projectId));if(!entry)continue;
   const mark=record.querySelector('.cover,.book-object,.v5-record-art');
   if(mark){const labels=mark.querySelectorAll('.meta,small');labels.forEach((node,i)=>node.textContent=i===0?`${site.brand.toUpperCase()} / ${String(entry.id).padStart(2,'0')}`:entry.category.toUpperCase());}
  }
  for(const node of root.querySelectorAll('[aria-label]'))if(node.getAttribute('aria-label')==='Select a project')node.setAttribute('aria-label',`Select from ${site.noun}`);
  document.getElementById('workspace').setAttribute('aria-label',`${site.brand} — ${site.topic}`);
  document.querySelector('#story summary').textContent=`About ${site.brand}`;
  document.querySelector('#story p').textContent=`${site.intro} This fictional ${site.topic.toLowerCase()} demonstrates the ${themeInfo().name} visual theme.`;
  document.querySelector('#how-it-works p').textContent=`Search ${site.noun}, explore ${site.categories.join(' or ').toLowerCase()}, and open an entry for its details. Save favorites for this visit. Each website keeps its own search, filters and saved entries; refreshing clears them.`;
  document.querySelector('#demo-dialog .dialog-meta').textContent=site.brand.toUpperCase()+' / CONCEPT PREVIEW';
  const collection=root.querySelector('[data-projects]');if(collection)collection.id='products';
  const anchor=document.createElement('span');anchor.id='collection';anchor.className='catalog-anchor';(root.querySelector('.toolbar,.catalog-find')||collection||root.firstElementChild).before(anchor);
  for(const record of root.querySelectorAll('[data-project-id]')){const p=products.find(p=>p.id===Number(record.dataset.projectId));if(!p)continue;record.classList.add('product');record.dataset.productId=p.id;const title=record.querySelector('h3,strong');if(title)title.classList.add('product-title');const mark=record.querySelector('.cover,.book-object,.v5-record-art,.ex-card-mark');if(mark){mark.classList.add('catalog-cover-slot');const image=document.createElement('img');image.className='catalog-cover';image.src=`assets/${p.image}.svg`;image.alt=`${site.topic}: ${p.title}`;image.loading='lazy';mark.append(image);}}
  for(const button of root.querySelectorAll('button[data-action=read]')){const p=products.find(p=>p.id===Number(button.dataset.id));if(p){button.dataset.product=p.title;button.setAttribute('aria-label',`${site.action}: ${p.title}`);}}
 }
 function render(focus){root.innerHTML=renderers[state.theme]();decorate();if(focus?.search){const input=root.querySelector('#search');input.focus({preventScroll:true});try{input.setSelectionRange(focus.start,focus.end);}catch{}}else if(focus?.sort)root.querySelector('#sort')?.focus({preventScroll:true});else if(focus?.action)root.querySelector(`[data-action="${focus.action}"]${focus.id?`[data-id="${focus.id}"]`:''}${focus.filter?`[data-filter="${focus.filter}"]`:''}`)?.focus({preventScroll:true});}
 const announcement=document.getElementById('catalog-announcement'),dialog=document.getElementById('demo-dialog');let reading=null,opener=null;
 const announce=message=>announcement.textContent=message;
 function open(p,focus){reading=p;opener=focus;state.selected=p.id;document.getElementById('demo-title').textContent=p.title;const image=document.getElementById('demo-image');image.src=`assets/${p.image}.svg`;image.alt=`${site.topic}: ${p.title}`;document.getElementById('demo-category').textContent=p.category;document.getElementById('demo-summary').textContent=p.summary;document.getElementById('demo-detail').textContent=p.detail;const save=document.getElementById('demo-save');save.textContent=p.saved?'Unsave entry':'Save entry';save.setAttribute('aria-pressed',String(p.saved));dialog.showModal();}
 root.addEventListener('click',event=>{const button=event.target.closest('[data-action]');if(!button)return;const action=button.dataset.action,id=Number(button.dataset.id),p=products.find(p=>p.id===id),focus={action,id:id||undefined,filter:button.dataset.filter};if(action==='read'&&p)open(p,focus);if(action==='save'&&p){p.saved=!p.saved;render(focus);announce(`${p.saved?'Saved':'Unsaved'} ${p.title}.`);}if(action==='select'&&p){state.selected=p.id;render(focus);announce(`Selected ${p.title}.`);}if(action==='filter'){state.filter=button.dataset.filter;render(focus);announce(`${visible().length} entries shown.`);}if(action==='reset'){state.filter='all';state.query='';state.sort='curated';render({action:'filter',filter:'all'});announce('Showing all entries.');}if(action==='next'||action==='previous'){const list=visible();if(list.length){let index=list.findIndex(p=>p.id===state.selected);state.selected=list[(index+(action==='next'?1:-1)+list.length)%list.length].id;render(focus);}}});
 root.addEventListener('input',event=>{if(!event.target.matches('#search'))return;state.query=event.target.value;render({search:true,start:event.target.selectionStart,end:event.target.selectionEnd});announce(`${visible().length} entries shown.`);});
 root.addEventListener('change',event=>{if(event.target.matches('#sort')){state.sort=event.target.value;render({sort:true});announce('Entry order updated.');}});
 document.getElementById('close-demo').addEventListener('click',()=>dialog.close());document.getElementById('demo-save').addEventListener('click',event=>{if(!reading)return;reading.saved=!reading.saved;event.target.textContent=reading.saved?'Unsave entry':'Save entry';event.target.setAttribute('aria-pressed',String(reading.saved));});dialog.addEventListener('close',()=>{render(opener);opener=null;});
 const top=document.querySelector('.back-top');window.addEventListener('scroll',()=>top.hidden=scrollY<650,{passive:true});top.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'}));
 function reveal(hash){if(!/^#[a-zA-Z][\w-]*$/.test(hash||''))return;const target=document.getElementById(hash.slice(1));if(target?.matches('details'))target.open=true;}
 document.querySelector('.catalog-footer').addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(link)reveal(link.hash);});reveal(location.hash);
 window.addEventListener('message',event=>{if(event.source===parent&&event.origin===location.origin&&event.data?.type==='theme-explorer:anchor')reveal(event.data.hash);});
 window.WEBSITE_DEMO={setTheme(id){if(sites[id]){if(dialog.open){opener=null;reading=null;dialog.close();}activate(id);render();}}};activate(document.documentElement.dataset.theme||config.defaultTheme);render();
})();
