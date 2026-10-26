/* Fictional catalog for visual QA. No checkout, forms or external product links. */
(() => {
  const names=['Adventure Planner','Everyday Journal','Ocean Stories','Garden Notes','Flower Stories','Little Seed Stories','Water Stories','Sunflower Stories','Butterfly Stories'];
  const images=['planner','journal','ocean','garden','flowers','seed','water','sunflower','butterfly'];
  const products=names.map((name,index)=>({name,image:images[index],category:index<2?'planners':'stories',rank:index<2?2:1}));
  const grid=document.querySelector('#products'),search=document.querySelector('#search'),sort=document.querySelector('#sort');let filter='all';
  function render(){
    const query=search.value.trim().toLocaleLowerCase(),shown=products.filter(p=>(filter==='all'||p.category===filter)&&p.name.toLocaleLowerCase().includes(query));
    if(sort.value==='name')shown.sort((a,b)=>a.name.localeCompare(b.name));
    if(sort.value==='price-low')shown.sort((a,b)=>a.rank-b.rank);
    if(sort.value==='price-high')shown.sort((a,b)=>b.rank-a.rank);
    grid.replaceChildren();
    shown.forEach(product=>{
      const article=document.createElement('article');article.className='product';
      const imageButton=document.createElement('button');imageButton.className='product-image';imageButton.dataset.product=product.name;imageButton.setAttribute('aria-label',`Preview sample: ${product.name}`);
      const image=document.createElement('img');image.src=`assets/${product.image}.svg`;image.alt=`Fictional sample cover: ${product.name}`;image.loading='lazy';
      const badge=document.createElement('span');badge.className='product-label';badge.textContent='FICTIONAL SAMPLE';
      const arrow=document.createElement('span');arrow.className='product-open';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');imageButton.append(image,badge,arrow);
      const meta=document.createElement('div');meta.className='product-meta';
      const copy=document.createElement('div'),category=document.createElement('span'),heading=document.createElement('h3'),price=document.createElement('span');
      category.className='product-category';category.textContent=product.category==='planners'?'Sample planner':'Sample story';heading.textContent=product.name;price.className='product-price';price.textContent='Demo';copy.append(category,heading);meta.append(copy,price);
      const description=document.createElement('p');description.className='product-desc';description.textContent='Fictional content for visual theme testing.';
      article.append(imageButton,meta,description);grid.append(article);
    });
    document.querySelector('#empty').hidden=shown.length!==0;document.querySelector('#product-count').textContent=`${shown.length} fictional sample${shown.length===1?'':'s'}`;
  }
  function setFilter(next){filter=next;document.querySelectorAll('.filter').forEach(button=>{const active=button.dataset.filter===next;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});render();}
  document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>setFilter(button.dataset.filter)));search.addEventListener('input',render);sort.addEventListener('change',render);
  document.querySelector('#reset').addEventListener('click',()=>{search.value='';sort.value='curated';setFilter('all');});
  const dialog=document.querySelector('#demo-dialog');grid.addEventListener('click',event=>{const button=event.target.closest('[data-product]');if(button){document.querySelector('#demo-title').textContent=button.dataset.product;dialog.showModal();}});document.querySelector('#close-demo').addEventListener('click',()=>dialog.close());
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.header nav');
  function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  const top=document.querySelector('.back-top');window.addEventListener('scroll',()=>top.hidden=window.scrollY<650,{passive:true});top.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));document.querySelector('#year').textContent=new Date().getFullYear();render();
})();
