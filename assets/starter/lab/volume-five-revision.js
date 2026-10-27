/* Five additional compositions in the Volume Five collection. */
window.createVolumeFiveRevision = function (ui, layout) {
 const {brand,newButton,openButton,saveButton,toolbar,foot,current,projects,esc,badge}=ui;
 const {art,header,selected,collection,heading}=layout;
 function pixel(){
  const p=current();
  return `${header('PIXEL RIOT','SMALL IDEAS / BIG CHARACTER')}
   <div class="pixel-heading"><span class="eyebrow">NO PERFECT SHAPES REQUIRED.</span><h1>GOOD IDEAS.<br><em>ODD SHAPES.</em></h1><p>A little offbeat. Entirely yours.<br>Keep the thought that does not quite fit.</p></div>
   <div class="pixel-console"><div class="pixel-console-bar"><span>DEVORA / IDEA INVENTORY</span><span>${String(projects.length).padStart(2,'0')} OPEN POSSIBILITIES</span></div><div class="pixel-main"><div class="pixel-feature"><span class="pixel-label">IN YOUR POCKET / ${String(p.id).padStart(2,'0')}</span><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p><div class="v5-actions">${openButton(p,'Open this idea ↗','primary')}${saveButton(p)}</div><div class="pixel-direction"><span class="meta">KEEP THE GOOD WEIRD.</span><button type="button" data-action="next">Next idea →</button></div></div><div class="pixel-scene">${art('pixel-riot')}<span>ORIGINAL PIXEL STUDY / NO. 045</span></div></div><nav class="pixel-inventory" aria-label="Select a project">${projects.map(item=>`<button type="button" data-action="select" data-id="${item.id}" aria-pressed="${p.id===item.id}"><span class="pixel-slot-icon" aria-hidden="true"></span><span class="meta">${String(item.id).padStart(2,'0')}</span><strong>${esc(item.title)}</strong></button>`).join('')}</nav></div>
   ${toolbar()}${heading('YOUR NEXT GOOD WEIRD.','OPEN / KEEP / MAKE IT YOURS')}${collection('pixel-records')}${foot()}`;
 }
 function cutout(){
  return `${header('CUTOUT DEPT.','PUT THINGS TOGETHER DIFFERENTLY')}
   <div class="cutout-title"><span class="eyebrow">PERFECT IS NOT THE POINT.</span><h1>Cut loose.<br><span>Make <em>a mess.</em></span></h1><div class="cutout-caption"><span aria-hidden="true">↗</span><p>A little instinct. A useful accident.<br>Something you could only make your way.</p></div></div>
   <div class="cutout-board"><div class="cutout-collage">${art('cutout-dept')}<span class="meta">NO TEMPLATE FOR A GOOD IDEA.</span></div><div class="cutout-feature">${selected('A GOOD PIECE TO START WITH')}<span class="cutout-stamp">KEEP<br>MAKING.</span></div></div>
   ${toolbar()}${heading('The good bits.','CUT / KEEP / RECOMBINE')}${collection('cutout-records')}${foot()}`;
 }
 function overprint(){
  return `${header('OVERPRINT STUDIO','ROOM FOR ANOTHER LAYER')}
   <div class="overprint-poster"><div class="overprint-copy"><span class="eyebrow">AN INDEPENDENT PRINT OF MIND.</span><h1>MAKE<br><em>YOUR</em><br>MARK.</h1><p>Start with a thought.<br>Give it a little more character.</p></div><div class="overprint-image">${art('overprint-studio')}<span class="overprint-edition">DEVORA / ORIGINAL EDITION 047</span></div></div>
   <div class="overprint-focus">${selected('NEXT ON THE PRESS')}<div class="overprint-swatches" aria-hidden="true"><i></i><i></i><i></i></div></div>
   ${toolbar()}${heading('Work with a little character.','IDEAS / LAYERS / POSSIBILITIES')}${collection('overprint-records')}${foot()}`;
 }
 function carbon(){
  const p=current();
  return `${header('CARBON BUREAU','KEEP A RECORD OF WHAT COMES NEXT')}
   <div class="carbon-intro"><span class="eyebrow">OPEN FILES. OPEN POSSIBILITIES.</span><p>Unfinished is a perfectly good filing system.</p></div>
   <div class="carbon-folder"><div class="carbon-folder-tab">DEVORA / WORKING FILES</div><div class="carbon-desk"><aside class="carbon-index"><div class="carbon-index-title"><span>FILE INDEX</span><strong>${String(projects.length).padStart(2,'0')}</strong></div>${projects.map(item=>`<button type="button" data-action="select" data-id="${item.id}" aria-pressed="${p.id===item.id}"><span>${String(item.id).padStart(2,'0')}</span>${esc(item.title)}<i aria-hidden="true">↗</i></button>`).join('')}<p class="meta">A PLACE FOR EVERY<br>UNFINISHED THOUGHT.</p></aside><article class="carbon-sheet"><div class="carbon-sheet-meta"><span class="eyebrow">FILE ${String(p.id).padStart(2,'0')} / ${esc(p.category.toUpperCase())}</span><span class="carbon-status">${badge(p)}</span></div><h1>${esc(p.title)}</h1><p class="carbon-summary">${esc(p.summary)}</p><div class="carbon-note">${esc(p.note.split('\n\n')[0])}</div><div class="v5-actions">${openButton(p,'Open the full file ↗','primary')}${saveButton(p)}</div><div class="carbon-proof">${art('carbon-bureau')}<span>FILED UNDER<br><b>POSSIBLE.</b></span></div></article></div></div>
   ${toolbar()}${heading('Other things on file.','WORKING RECORDS / SESSION EDITION')}${collection('carbon-records')}${foot()}`;
 }
 function frame(){
  const p=current(),next=projects.find(item=>item.id!==p.id);
  return `${header('FRAME SHIFT','A DIFFERENT POINT OF VIEW')}
   <div class="frameshift-heading"><div><span class="eyebrow">THE NEXT VERSION STARTS HERE.</span><h1>See it<br><em>differently.</em></h1></div><p>Keep the part that makes you curious.<br>Give the next idea a little room.</p><span class="frameshift-mark" aria-hidden="true">↗</span></div>
   <div class="frameshift-room"><aside class="frameshift-index"><span class="eyebrow">THE SHOT LIST</span>${projects.map(item=>`<button type="button" data-action="select" data-id="${item.id}" aria-pressed="${p.id===item.id}"><span>${String(item.id).padStart(2,'0')}</span>${esc(item.title)}</button>`).join('')}</aside><div class="frameshift-screen"><div class="frameshift-screen-head"><span>IN FOCUS</span><span>ENTRY ${String(p.id).padStart(2,'0')}</span></div>${art('frame-shift')}<div class="frameshift-screen-foot"><strong>${esc(p.title)}</strong>${openButton(p,'Open note ↗','primary')}</div></div><aside class="frameshift-notes"><span class="eyebrow">DIRECTOR’S NOTES</span><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p>${saveButton(p)}<div class="frameshift-next"><span class="meta">ANOTHER PERSPECTIVE</span><button type="button" data-action="select" data-id="${next.id}">${esc(next.title)} ↗</button></div></aside></div>
   ${toolbar()}${heading('Ideas in the making.','THE WORKING CUT / YOUR COLLECTION')}${collection('frameshift-records')}${foot()}`;
 }
 return {'pixel-riot':pixel,'cutout-dept':cutout,'overprint-studio':overprint,'carbon-bureau':carbon,'frame-shift':frame};
};
