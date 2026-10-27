/* Same-origin bridge for the two retained previews. No cross-origin data access. */
(() => {
 const embedded=window.parent!==window&&new URLSearchParams(location.search).get('embed')==='1';
 const selector=document.getElementById('lab-theme')||document.getElementById('theme-select');if(!selector)return;
 const valid=id=>window.STUDIO_THEMES.themes.some(theme=>theme.id===id);
 const base=document.body.dataset.previewBase||'./';
 function updateLinks(){document.querySelectorAll('[data-preview-link]').forEach(link=>{const url=new URL(base,location.href);url.searchParams.set('theme',selector.value);if(link.dataset.previewLink==='website')url.searchParams.set('view','website');link.href=url.href;});}
 updateLinks();selector.addEventListener('change',updateLinks);
 if(!embedded)return;
 document.documentElement.dataset.embedded='true';
 const send=message=>window.parent.postMessage(message,location.origin==='null'?'*':location.origin);
 let scheduled=false,lastHeight=0;
 function measure(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;const height=Math.ceil(document.body.getBoundingClientRect().height);if(height>=100&&height!==lastHeight){lastHeight=height;send({type:'theme-preview:height',height});}});}
 new ResizeObserver(measure).observe(document.body);window.addEventListener('load',measure);document.fonts.ready.then(measure);
 selector.addEventListener('change',()=>{send({type:'theme-preview:theme',theme:selector.value});measure();});
 window.addEventListener('message',event=>{
  if(event.source!==window.parent||event.origin!==location.origin||!event.data)return;const message=event.data;
  if(message.type==='theme-explorer:theme'&&valid(message.theme)&&selector.value!==message.theme){selector.value=message.theme;selector.dispatchEvent(new Event('change',{bubbles:true}));}
  if(message.type==='theme-explorer:measure'){lastHeight=0;measure();}else if(message.type==='theme-explorer:theme')measure();
  if(message.type==='theme-explorer:viewport'&&Number.isFinite(message.top)&&message.top>=0&&message.top<100000&&Number.isFinite(message.height)&&message.height>=120&&message.height<10000){document.documentElement.style.setProperty('--preview-dialog-top',message.top+'px');document.documentElement.style.setProperty('--preview-dialog-height',message.height+'px');}
  if(message.type==='theme-explorer:anchor'&&typeof message.hash==='string'&&/^#[a-zA-Z][\w-]*$/.test(message.hash)){document.fonts.ready.then(()=>{const target=document.getElementById(message.hash.slice(1));if(target)send({type:'theme-preview:anchor',hash:message.hash,offset:target.getBoundingClientRect().top+window.scrollY});});}
  if(message.type==='theme-explorer:scroll'){const button=document.querySelector('.back-top');if(button)button.hidden=!(message.offset>650);}
 });
 new MutationObserver(records=>{if(records.some(record=>record.target.open))send({type:'theme-preview:dialog-open'});}).observe(document.body,{attributes:true,subtree:true,attributeFilter:['open']});
 document.addEventListener('click',event=>{
  if(event.target.closest('.back-top')){event.preventDefault();event.stopImmediatePropagation();send({type:'theme-preview:top'});return;}
  const link=event.target.closest('a[href^="#"]');if(!link)return;const hash=link.getAttribute('href');const target=hash==='#'?document.body:document.getElementById(hash.slice(1));if(!target)return;
  event.preventDefault();send({type:'theme-preview:anchor',hash,offset:target.getBoundingClientRect().top+window.scrollY});
 },true);
 send({type:'theme-preview:ready'});measure();
})();
