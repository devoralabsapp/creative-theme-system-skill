/* Verify shared design identity plus independent, working catalog content. */
const fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
const root=path.resolve(__dirname,'..'),exe=process.env.CHROMIUM_EXECUTABLE||path.join(os.homedir(),'Library/Caches/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-mac-x64/chrome-headless-shell'),base=process.env.DEMO_URL||'http://127.0.0.1:4183',reg=JSON.parse(fs.readFileSync(path.join(root,'assets/starter/theme-registry.js'),'utf8').match(/=\s*([\s\S]*);/)[1]),out=path.join(root,'.qa/catalog-parity');fs.mkdirSync(out,{recursive:true});
const chosen=new Set(['retro','mono-os','sac-01','chapter-desk','halloween','christmas','tet','black-friday','pixel-riot','deco-society','mission-control','bento-kitchen','tatami-house','cloud-pet','xerox-club','index-bureau','noir-dispatch','cutout-dept']);
const results={themeCount:reg.themes.length,identities:[],responsive:[],flows:[],errors:[],consoleErrors:[],assets:[]},assert=(v,s)=>{if(!v)throw Error(s);};let browser;
(async()=>{browser=await chromium.launch({executablePath:exe});const context=await browser.newContext({viewport:{width:1440,height:960},reducedMotion:'reduce'}),lab=await context.newPage(),web=await context.newPage();for(const p of [lab,web]){p.on('pageerror',e=>results.consoleErrors.push(e.message));p.on('response',r=>{if(r.url().startsWith(base)&&r.status()>399)results.assets.push({url:r.url(),status:r.status()});});}
const identity=p=>p.evaluate(()=>{const style=getComputedStyle(document.documentElement);return {structure:[...document.querySelector('#workspace').children].filter(e=>!e.classList.contains('catalog-anchor')&&!e.dataset.siteHeading).slice(0,4).map(e=>e.className),tokens:Object.fromEntries(['background','surface','foreground','muted','accent','on-accent','display','font','mono','radius','shadow'].map(k=>[k,style.getPropertyValue('--lab-'+k).trim()]))};});
function findCatalogOverlaps(){
  const overlaps=[];
  for(const cover of document.querySelectorAll('.cover.catalog-cover-slot')){
    const image=cover.querySelector('.catalog-cover').getBoundingClientRect();
    for(const label of cover.querySelectorAll('strong,.meta')){
      const range=document.createRange();
      range.selectNodeContents(label);
      const intersects=[...range.getClientRects()].some(rect=>
        rect.left<image.right && rect.right>image.left &&
        rect.top<image.bottom && rect.bottom>image.top
      );
      if(intersects)overlaps.push({type:'cover text',text:label.textContent});
    }
  }
  const rail=document.querySelector('.chapter-rail');
  if(rail){
    const bounds=rail.getBoundingClientRect();
    for(const button of rail.querySelectorAll('.filters button')){
      const rect=button.getBoundingClientRect();
      if(rect.left<bounds.left+3 || rect.right>bounds.right-3){
        overlaps.push({type:'reading rail filter',text:button.textContent});
      }
    }
  }
  return overlaps;
}
for(const t of reg.themes){try{await Promise.all([lab.goto(base+'/lab/index.html?theme='+t.id+'&embed=1',{waitUntil:'domcontentloaded'}),web.goto(base+'/website.html?theme='+t.id+'&embed=1',{waitUntil:'domcontentloaded'})]);await lab.locator('#workspace>*').first().waitFor();await web.locator('#products .product').first().waitFor();await Promise.all([lab.evaluate(()=>document.fonts.ready),web.evaluate(()=>document.fonts.ready)]);const [a,b]=await Promise.all([identity(lab),identity(web)]);assert(JSON.stringify(a)===JSON.stringify(b),'composition/palette mismatch '+JSON.stringify({a,b}));results.identities.push({id:t.id,...b});const site=await web.evaluate(id=>window.STUDIO_SITES[id],t.id);assert(await web.locator('#products .product').count()===6,'six subject entries');assert(await web.locator('.wordmark').textContent()===site.brand,'subject brand');assert((await web.locator('h1').first().textContent()).replace(/\s+/g,' ').trim()===site.headline.replaceAll('|',' '),'subject headline');
for(const width of [320,390,768,1024,1440]){await web.setViewportSize({width,height:960});await web.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));const layout=await web.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,narrow:[...document.querySelectorAll('#products .ex-card-copy,#products .card-copy,#products .v5-record-copy')].filter(e=>e.getBoundingClientRect().width<125).map(e=>({width:e.getBoundingClientRect().width,text:e.textContent.slice(0,60)})),bad:[...document.querySelectorAll('h1,h2,h3,p,button,input,select')].filter(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width&&r.height&&s.visibility!=='hidden'&&!e.closest('[hidden],[aria-hidden=true],dialog:not([open]),.sheet-scroll')&&(r.left< -2||r.right>innerWidth+2);}).map(e=>({tag:e.tagName,text:(e.innerText||'').slice(0,60),left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right}))}));const overlaps=await web.evaluate(findCatalogOverlaps);
if(overlaps.length)results.errors.push({id:t.id,type:'overlap',width,overlaps});
results.responsive.push({id:t.id,...layout});if(layout.scroll>width+2||layout.bad.length||layout.narrow.length)results.errors.push({id:t.id,type:'overflow',...layout});if(chosen.has(t.id)&&width===320)await web.screenshot({path:path.join(out,t.id+'-mobile.png'),fullPage:true});}
if(chosen.has(t.id)){await web.evaluate(()=>scrollTo(0,0));await lab.screenshot({path:path.join(out,t.id+'-lab.jpg'),type:'jpeg',quality:88});await web.screenshot({path:path.join(out,t.id+'-website.jpg'),type:'jpeg',quality:88});}
await web.locator('[data-action=filter][data-filter=a]').first().click();assert(await web.locator('#products .product').count()===3,'first category filter');await web.locator('[data-action=filter][data-filter=b]').first().click();assert(await web.locator('#products .product').count()===3,'second category filter');await web.locator('[data-action=filter][data-filter=all]').first().click();await web.locator('#search').fill(site.items[2].title);assert(await web.locator('#products .product').count()===1,'query filter');await web.locator('#products [data-action=read]').first().click();assert(await web.locator('#demo-title').textContent()===site.items[2].title,'actual subject entry dialog');await web.locator('#demo-image').evaluate(e=>e.decode());assert(await web.locator('#demo-image').evaluate(e=>e.complete&&e.naturalWidth>0),'preview artwork loaded');assert((await web.locator('#demo-image').getAttribute('src')).includes('sites/'+t.id+'/3.svg'),'topic-specific artwork');assert(await web.locator('#demo-detail').textContent()===site.items[2].detail,'entry detail');const save=web.locator('#demo-save'),pressed=await save.getAttribute('aria-pressed');await save.click();assert(await save.getAttribute('aria-pressed')!==pressed,'save preview');await web.keyboard.press('Escape');await web.locator('#demo-dialog').waitFor({state:'hidden'});await web.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));await web.locator('#search').fill('');await web.locator('#sort').selectOption('name');assert(await web.locator('#products .product').first().getAttribute('data-product-id')===String([...site.items].sort((a,b)=>a.title.localeCompare(b.title))[0].id),'name order');await web.locator('#search').fill('nothing matches zzz');assert(await web.locator('#empty').isVisible(),'empty state');await web.locator('#reset').click();assert(await web.locator('#products .product').count()===6,'reset');results.flows.push(t.id);
}catch(e){results.errors.push({id:t.id,type:'exception',message:e.message});}console.log(t.id,results.errors.some(e=>e.id===t.id)?'FINDINGS':'checked');fs.writeFileSync(path.join(out,'result.json'),JSON.stringify(results,null,2));}
await browser.close();console.log(JSON.stringify({themes:results.identities.length,responsive:results.responsive.length,flows:results.flows.length,errors:results.errors.length,consoleErrors:results.consoleErrors.length,missingAssets:results.assets.length}));if(results.errors.length||results.consoleErrors.length||results.assets.length)process.exitCode=1;})().catch(async e=>{console.error(e);if(browser)await browser.close();process.exitCode=1;});
