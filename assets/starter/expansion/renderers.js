/* Expansion compositions receive the existing Lab controller's escaped data/actions. */
window.createExpansionRenderers=function(ui){
 const {brand,newButton,openButton,saveButton,toolbar,foot,visible,current,projects,esc,badge,empty}=ui;
 const intro=t=>`<section class="ex-intro"><span class="ex-kicker">${esc(t.style.toUpperCase())} / DEVORALABS</span><h1>${t.title.split('|').map(esc).join('<br>')}</h1><p>${esc(t.tagline)}</p></section>`;
 const art=t=>`<figure class="ex-art"><img src="${ui.assetBase||'../assets/'}expansion/${t.id}.svg" width="800" height="640" alt="" aria-hidden="true"><figcaption>ORIGINAL STUDY / ${esc(t.name.toUpperCase())}</figcaption></figure>`;
 const feature=(t,label='IN FOCUS')=>{const p=current();return `<article class="ex-feature"><span class="ex-kicker">${label} / ${String(p.id).padStart(2,'0')}</span><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p><span class="ex-state">${esc(p.category)} / ${badge(p)}</span><div class="ex-actions">${openButton(p,'Read project ↗','primary')}${saveButton(p)}</div></article>`;};
 const nav=()=>`<nav class="ex-index" aria-label="Select a project">${projects.map(p=>`<button type="button" data-action="select" data-id="${p.id}" aria-pressed="${p.id===current().id}"><span>${String(p.id).padStart(2,'0')}</span><strong>${esc(p.title)}</strong></button>`).join('')}</nav>`;
 const facts=()=>`<aside class="ex-facts"><div><strong>${String(projects.length).padStart(2,'0')}</strong><span>Projects</span></div><div><strong>${String(projects.filter(p=>p.saved).length).padStart(2,'0')}</strong><span>Saved ideas</span></div><div><strong>${String(visible().length).padStart(2,'0')}</strong><span>In this view</span></div></aside>`;
 const note=()=>`<article class="ex-reading"><span class="ex-kicker">FROM THE WORKING NOTE</span><h2>${esc(current().title)}</h2>${current().note.split('\n\n').slice(0,2).map(p=>`<p>${esc(p)}</p>`).join('')}${openButton(current(),'Continue reading ↗','primary')}</article>`;
 const items=t=>visible().length?`<div class="ex-cards ex-cards-${t.cards}" data-projects>${visible().map((p,i)=>`<article class="ex-card" data-project-id="${p.id}"><div class="ex-card-mark" aria-hidden="true"><span>${String(p.id).padStart(2,'0')}</span><i></i></div><div class="ex-card-copy"><span class="ex-kicker">${esc(p.category.toUpperCase())}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><span class="ex-state">${badge(p)}</span><div class="ex-actions">${openButton(p)}${saveButton(p)}</div></div></article>`).join('')}</div>`:empty();
 const A=art,I=intro,F=feature,N=nav,C=facts,R=note;
 // Compositions are explicit arrangements. No theme owns a second project store.
 const compose={
  wall:t=>`<div class="ex-wall-title">${I(t)}</div><div class="ex-wall-art">${A(t)}</div><div class="ex-wall-note">${F(t,'PINNED TO THE WALL')}</div>`,
  cabinet:t=>`${I(t)}<div class="ex-cabinet-object">${A(t)}</div><div class="ex-cabinet-note">${F(t,'ON THE TURNTABLE')}</div>${N()}`,
  portal:t=>`${I(t)}<div class="ex-portal-center">${A(t)}</div>${F(t,'THROUGH THE PORTAL')}${C()}`,
  horizon:t=>`${I(t)}<div class="ex-horizon-scene">${A(t)}</div><div class="ex-horizon-ticket">${F(t,'ON THE HORIZON')}${C()}</div>`,
  matrix:t=>`${I(t)}${A(t)}${F(t,'A PIECE TO BEGIN WITH')}${C()}`,
  panorama:t=>`<div class="ex-panorama-sky">${A(t)}</div><div class="ex-panorama-copy">${I(t)}</div><div class="ex-panorama-note">${F(t,'A FRESH DIRECTION')}</div>`,
  console:t=>`<div class="ex-console-title">${I(t)}</div><div class="ex-console-shell"><div class="ex-console-art">${A(t)}</div>${F(t,'SELECTED MEMORY')}${N()}</div>`,
  fracture:t=>`${I(t)}<div class="ex-fracture-image">${A(t)}</div><div class="ex-fracture-note">${F(t,'A NEW POINT OF DEPARTURE')}</div>${C()}`,
  void:t=>`${I(t)}<div class="ex-void-mark">${A(t)}</div><div class="ex-void-note">${F(t,'ONE THOUGHT')}</div>`,
  threshold:t=>`<div class="ex-threshold-art">${A(t)}</div>${I(t)}<div class="ex-threshold-note">${F(t,'THROUGH THE DOORWAY')}</div>`,
  island:t=>`${I(t)}<div class="ex-island-art">${A(t)}</div><div class="ex-island-focus">${F(t,'ON YOUR MIND')}</div>${C()}`,
  objects:t=>`${I(t)}<div class="ex-object-plinth">${A(t)}</div><div class="ex-object-note">${F(t,'TAKING SHAPE')}</div>${N()}`,
  display:t=>`${I(t)}<div class="ex-display-frame">${A(t)}</div><div class="ex-display-label">${F(t,'ANOTHER REFLECTION')}${C()}</div>`,
  layers:t=>`${I(t)}<div class="ex-layer-back">${A(t)}</div><div class="ex-layer-front">${F(t,'IN CLEAR VIEW')}</div>${N()}`,
  module:t=>`<div class="ex-module-type">${I(t)}</div><div class="ex-module-art">${A(t)}</div><div class="ex-module-note">${F(t,'FORM / FUNCTION')}</div>${C()}`,
  shelf:t=>`<aside class="ex-shelf-index">${N()}</aside><div class="ex-shelf-main">${I(t)}${F(t,'CLOSE AT HAND')}</div><div class="ex-shelf-object">${A(t)}</div>`,
  billboard:t=>`<div class="ex-billboard-type">${I(t)}</div><div class="ex-billboard-art">${A(t)}</div>${F(t,'SIGNAL FOUND')}${N()}`,
  control:t=>`<aside class="ex-control-index">${N()}</aside><div class="ex-control-primary">${I(t)}${F(t,'CURRENT DIRECTION')}</div><div class="ex-control-scope">${A(t)}${C()}</div>`,
  culture:t=>`${I(t)}<div class="ex-culture-dish">${A(t)}</div><div class="ex-culture-note">${F(t,'A THOUGHT TAKING ROOT')}</div>${C()}`,
  dispatch:t=>`<div class="ex-dispatch-lead">${I(t)}${F(t,'THE CURRENT THREAD')}</div><div class="ex-dispatch-window">${A(t)}</div><aside class="ex-dispatch-index">${N()}</aside>`,
  orbit:t=>`${I(t)}<div class="ex-orbit-object">${A(t)}</div><div class="ex-orbit-pod">${F(t,'YOUR NEXT SMALL LEAP')}</div>${N()}`,
  reading:t=>`<aside class="ex-reading-margin">${I(t)}${N()}</aside><div class="ex-reading-column">${R()}</div><div class="ex-reading-art">${A(t)}</div>`,
  news:t=>`<div class="ex-news-mast">${I(t)}</div><div class="ex-news-lead">${F(t,'THE LEAD STORY')}${R()}</div><div class="ex-news-art">${A(t)}</div><aside class="ex-news-index">${N()}${C()}</aside>`,
  spread:t=>`<div class="ex-spread-title">${I(t)}</div><div class="ex-spread-art">${A(t)}</div><div class="ex-spread-note">${F(t,'IN THIS EDITION')}</div>`,
  pocket:t=>`${I(t)}<div class="ex-pocket-friend">${A(t)}</div><div class="ex-pocket-note">${F(t,'A LITTLE THOUGHT TO KEEP')}</div>${N()}`,
  sketch:t=>`<div class="ex-sketch-title">${I(t)}</div><div class="ex-sketch-page">${A(t)}</div><div class="ex-sketch-note">${F(t,'FROM THE SKETCHBOOK')}${R()}</div>`,
  comic:t=>`<div class="ex-comic-heading">${I(t)}</div><div class="ex-comic-scene">${A(t)}</div><div class="ex-comic-caption">${F(t,'MEANWHILE, ON YOUR DESK')}</div>${C()}`,
  storybook:t=>`${I(t)}<div class="ex-storybook-door">${A(t)}</div><div class="ex-storybook-chapter">${F(t,'THE NEXT CHAPTER')}${N()}</div>`,
  window:t=>`<div class="ex-window-title">${I(t)}</div><div class="ex-window-scene">${A(t)}</div><div class="ex-window-note">${F(t,'ON THE KITCHEN TABLE')}${C()}</div>`,
  herbarium:t=>`<div class="ex-herbarium-type">${I(t)}${F(t,'A SMALL DISCOVERY')}</div><div class="ex-herbarium-plate">${A(t)}</div>${N()}`,
  workshop:t=>`<aside class="ex-workshop-index">${N()}</aside>${I(t)}<div class="ex-workshop-vessel">${A(t)}</div><div class="ex-workshop-note">${F(t,'ON THE WORKBENCH')}</div>`,
  bento:t=>`${I(t)}<div class="ex-bento-focus">${F(t,'THE MAIN INGREDIENT')}</div><div class="ex-bento-study">${A(t)}</div><div class="ex-bento-facts">${C()}</div>${N()}`,
  mosaic:t=>`<div class="ex-mosaic-type">${I(t)}</div><div class="ex-mosaic-art">${A(t)}</div><div class="ex-mosaic-note">${F(t,'ONE GOOD PIECE')}</div><div class="ex-mosaic-facts">${C()}</div>`,
  fullbleed:t=>`<div class="ex-fullbleed-landscape">${A(t)}</div><div class="ex-fullbleed-title">${I(t)}</div><div class="ex-fullbleed-note">${F(t,'THE NEXT PART OF THE STORY')}</div>`,
  terrace:t=>`<aside class="ex-terrace-copy">${I(t)}${N()}</aside><div class="ex-terrace-land">${A(t)}</div><div class="ex-terrace-note">${F(t,'A DIFFERENT LAYER')}</div>`,
  constellation:t=>`${I(t)}<div class="ex-constellation-map">${A(t)}</div><div class="ex-constellation-note">${F(t,'A CONNECTION TO FOLLOW')}</div>${N()}`,
  isometric:t=>`<div class="ex-isometric-copy">${I(t)}${F(t,'THE NEXT BUILDING BLOCK')}</div><div class="ex-isometric-world">${A(t)}</div>${C()}`,
  salon:t=>`<div class="ex-salon-title">${I(t)}</div><div class="ex-salon-art">${A(t)}</div><div class="ex-salon-note">${F(t,'THE SELECTED EDITION')}</div>${N()}`,
  botanic:t=>`<div class="ex-botanic-vine">${A(t)}</div><div class="ex-botanic-copy">${I(t)}${F(t,'A GROWING THOUGHT')}</div>${C()}`,
  diagonal:t=>`<div class="ex-diagonal-type">${I(t)}</div><div class="ex-diagonal-art">${A(t)}</div><div class="ex-diagonal-work">${F(t,'A THOUGHT IN CONSTRUCTION')}${N()}</div>`,
  cathedral:t=>`<div class="ex-cathedral-title">${I(t)}</div><div class="ex-cathedral-window">${A(t)}</div><div class="ex-cathedral-note">${F(t,'BEHIND THE NEXT DOOR')}</div>`,
  dream:t=>`<div class="ex-dream-window">${A(t)}</div><div class="ex-dream-copy">${I(t)}</div><div class="ex-dream-thought">${F(t,'AN UNEXPECTED BEGINNING')}</div>${N()}`,
  gesture:t=>`${I(t)}<div class="ex-gesture-paint">${A(t)}</div><div class="ex-gesture-note">${F(t,'FOLLOW THE MARK')}</div>`,
  aurora:t=>`<aside class="ex-aurora-index">${N()}</aside><div class="ex-aurora-main">${I(t)}${F(t,'YOUR NEXT STEP')}</div><div class="ex-aurora-glow">${A(t)}${C()}</div>`,
  ledger:t=>`<aside class="ex-ledger-stats">${C()}${N()}</aside><div class="ex-ledger-copy">${I(t)}${F(t,'SELECTED RECORD')}</div><div class="ex-ledger-art">${A(t)}</div>`,
  blackout:t=>`<div class="ex-blackout-title">${I(t)}</div><div class="ex-blackout-light">${A(t)}</div><div class="ex-blackout-note">${F(t,'THE THOUGHT IN FRONT OF YOU')}</div>`,
  optical:t=>`${I(t)}<div class="ex-optical-study">${A(t)}</div><div class="ex-optical-caption">${F(t,'A SHIFT IN PERSPECTIVE')}</div>${C()}`,
  swiss:t=>`<div class="ex-swiss-title">${I(t)}</div><div class="ex-swiss-index">${N()}</div><div class="ex-swiss-study">${A(t)}</div><div class="ex-swiss-note">${F(t,'A PRECISE BEGINNING')}</div>`,
  cloud:t=>`${I(t)}<div class="ex-cloud-friend">${A(t)}</div><div class="ex-cloud-tray">${F(t,'A THOUGHT TO HOLD')}</div>${C()}`,
  current:t=>`<div class="ex-current-type">${I(t)}</div><div class="ex-current-wave">${A(t)}</div><div class="ex-current-note">${R()}</div>`,
  array:t=>`<div class="ex-array-title">${I(t)}</div><div class="ex-array-note">${F(t,'THE NEXT GOOD THING')}</div><div class="ex-array-art">${A(t)}</div><div class="ex-array-counts">${C()}</div>${N()}`
 };
 return Object.fromEntries((window.THEME_EXPANSION||[]).map(t=>[t.id,()=>`<div class="ex-theme ex-layout-${t.composition} ex-material-${t.material}"><header class="ex-mast">${brand()}<span class="ex-kicker">${esc(t.name.toUpperCase())} / WORKING COLLECTION</span>${newButton()}</header><div class="ex-compose">${compose[t.composition](t)}</div>${toolbar()}<div class="ex-section"><h2>The working collection</h2><span class="ex-kicker">${visible().length} PROJECTS IN VIEW / OPEN A NOTE TO BEGIN</span></div>${items(t)}${foot()}</div>`]));
};
