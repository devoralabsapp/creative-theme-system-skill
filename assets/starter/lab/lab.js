/* Original fictional workspace. All changes stay in memory; no network writes. */
(() => {
 const themes=window.STUDIO_THEMES.themes;
 const themeIds=themes.map(theme=>theme.id);
 const descriptions={
  'index-bureau':['INDEX / BUREAU','An open index of unfinished work.'],
  'specimen-press':['SPECIMEN / PRESS','Independent ideas, carefully collected.'],
  'grid-assembly':['GRID / ASSEMBLY','A place to put things together.'],
  'margin-notes':['MARGIN / NOTES','Keep a little room for the unexpected.'],
  'afterhours-fm':['AFTERHOURS / FM','A creative queue for your next good idea.'],
  'chapter-desk':['CHAPTER / DESK','Good ideas deserve another chapter.'],
  'mono-os':['MONO / OS','A small desktop for a clear head.']
 };
 const projects=[
  {id:1,title:'Field Notes',category:'Observations',status:'active',saved:true,summary:'Notice the small things before they become the important things.',note:'A useful idea often begins as an ordinary observation. Write down what you noticed before you decide what it means.\n\nThis notebook is a place for half-formed questions, useful details and the connections that appear between them. Keep the first version simple enough to revisit.\n\nThe next step: choose one observation and turn it into a small experiment.'},
  {id:2,title:'Quiet Hours',category:'Routines',status:'active',saved:false,summary:'Make a little space for one thing at a time.',note:'A quieter working day is built from small decisions. Leave one clear task on the desk. Let the next task wait until this one has somewhere to land.\n\nTry a short session with a clear stopping point. Record what helped and what interrupted you. Change the routine around the work, rather than shaping the work around a complicated routine.'},
  {id:3,title:'The Useful Index',category:'Collections',status:'exploring',saved:true,summary:'A collection that helps you find the thread again.',note:'Collecting is only the beginning. The value of an index is the path it opens back to something worth using.\n\nGive each entry a plain title and a short reason for keeping it. Let categories grow from the collection instead of designing an empty taxonomy.\n\nStart with a handful of entries. Test whether you can find the right one without remembering its exact name.'},
  {id:4,title:'Small Experiments',category:'Prototypes',status:'active',saved:false,summary:'Test the question before you polish the answer.',note:'A small experiment is a way to learn something specific. Name the question, choose the simplest useful test and decide what you would change after seeing the result.\n\nThe first prototype does not have to look finished. It should make the decision easier to understand. Keep a short record of the surprises.'},
  {id:5,title:'Everyday Systems',category:'Practice',status:'exploring',saved:false,summary:'Build a system small enough to use on an ordinary day.',note:'The best system is one you can maintain when the day becomes busy. Look for the smallest repeated action that makes tomorrow easier.\n\nA clear place for the next step often matters more than a complete plan. Leave a note for your future self and make the return path obvious.'},
  {id:6,title:'A Place to Begin',category:'Sketches',status:'exploring',saved:true,summary:'An open page for the next direction worth following.',note:'Beginning can be a practical act. Open a page, give the question a name and leave enough room for a different answer.\n\nThis is a fictional project used to explore the interface. Replace the sample with a real idea when adapting the theme to your product.'}
 ];
 const root=document.getElementById('workspace'),select=document.getElementById('lab-theme'),announcement=document.getElementById('lab-announcement');
 const state={theme:window.STUDIO_THEMES.defaultTheme,filter:'all',query:'',selected:1};
 const themeInfo=()=>themes.find(theme=>theme.id===state.theme);
 const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const badge=p=>p.status==='active'?'● In progress':'◇ Exploring';
 const visible=()=>projects.filter(p=>(state.filter==='all'||state.filter==='active'&&p.status==='active'||state.filter==='saved'&&p.saved)&&`${p.title} ${p.category} ${p.summary}`.toLowerCase().includes(state.query.toLowerCase().trim()));
 const current=()=>projects.find(p=>p.id===state.selected)||projects[0];
 const meta=p=>`ENTRY ${String(p.id).padStart(2,'0')} / ${esc(p.category.toUpperCase())}`;
 const brand=()=>'<div class="wordmark"><span class="brand-glyph" aria-hidden="true"></span>devoralabs</div>';
 const newButton=()=>'<button class="primary" type="button" data-action="new">New project +</button>';
 const openButton=(p,label='Read note ↗',className='read-link')=>`<button type="button" class="${className}" data-action="read" data-id="${p.id}">${label}</button>`;
 const saveButton=p=>`<button class="save-button" type="button" data-action="save" data-id="${p.id}" aria-pressed="${p.saved}" aria-label="${p.saved?'Unsave':'Save'} ${esc(p.title)}">${p.saved?'✓ Saved':'+ Save'}</button>`;
 function filters(){return `<div class="filters" role="group" aria-label="Filter projects">${[['all','All projects'],['active','In progress'],['saved','Saved']].map(([value,label])=>`<button type="button" data-action="filter" data-filter="${value}" aria-pressed="${state.filter===value}">${label}</button>`).join('')}</div>`;}
 const search=()=>`<label class="search">Find a project<input type="search" value="${esc(state.query)}" placeholder="Search the collection…" data-search aria-label="Search projects"></label>`;
 const toolbar=()=>`<div class="toolbar">${filters()}${search()}</div>`;
 const foot=()=>`<footer class="screen-foot"><span class="meta">${projects.length} PROJECTS / ${projects.filter(p=>p.saved).length} SAVED / ${visible().length} SHOWN</span><span class="meta">${descriptions[state.theme]?.[0]||esc(themeInfo().name.toUpperCase())} · SESSION EDITION</span></footer>`;
 const empty=()=>'<div class="empty-state"><h2>No projects in this view.</h2><p>Try a different search or return to the full collection.</p><button type="button" data-action="reset">Show all projects</button></div>';
 const renderers=window.createStudioRenderers({brand,newButton,openButton,saveButton,toolbar,foot,visible,current,projects,esc,meta,badge,empty,filters,search,themeInfo});
 function render(focus){root.innerHTML=renderers[state.theme]();if(focus?.search){const input=root.querySelector('[data-search]');input.focus({preventScroll:true});try{input.setSelectionRange(focus.start,focus.end);}catch{}}else if(focus?.action){const target=root.querySelector(`[data-action="${focus.action}"]${focus.id?`[data-id="${focus.id}"]`:''}${focus.filter?`[data-filter="${focus.filter}"]`:''}`)||root.querySelector('[data-action="filter"]');target?.focus({preventScroll:true});}}
 function applyTheme(id){state.theme=themeIds.includes(id)?id:window.STUDIO_THEMES.defaultTheme;document.documentElement.dataset.theme=state.theme;select.value=state.theme;{const root=document.documentElement,theme=themeInfo();root.dataset.workspace=String((theme.styleFamily||theme.family)!=='studio');root.dataset.family=theme.styleFamily||theme.family;root.dataset.tone=theme.tone;root.dataset.edition=theme.edition||'';root.dataset.expansion=String(theme.expansion===true);root.dataset.composition=theme.composition||'';root.dataset.material=theme.material||'';root.dataset.cardLayout=theme.cardLayout||'';}render();const url=new URL(location.href);url.searchParams.set('theme',state.theme);history.replaceState(null,'',url);document.title=`${themes.find(t=>t.id===state.theme).name} — Devoralabs Design Lab`;try{localStorage.setItem(window.STUDIO_THEMES.storageKey,state.theme);}catch{}}
 const familyLabels={studio:'Studio themes',workspace:'Workspace themes',seasonal:'Holiday themes',creative:'Creative Lab themes'};
 for(const family of window.STUDIO_THEMES.familyOrder||Object.keys(familyLabels)){const group=document.createElement('optgroup');group.label=familyLabels[family];for(const theme of themes.filter(t=>t.family===family)){const option=document.createElement('option');option.value=theme.id;option.textContent=theme.name;group.append(option);}select.append(group);}
 document.querySelector('.lab-count').textContent=`${themes.length} THEMES / ONE COLLECTION`;
 select.addEventListener('change',()=>{applyTheme(select.value);announcement.textContent=`Selected theme: ${themes.find(t=>t.id===state.theme).name}`;});
 window.addEventListener('popstate',()=>applyTheme(new URLSearchParams(location.search).get('theme')));
 const createDialog=document.getElementById('idea-dialog'),readDialog=document.getElementById('read-dialog'),form=document.getElementById('idea-form'),nameInput=document.getElementById('idea-name'),error=document.getElementById('idea-error');
 let opener=null,reading=null;
 function closeFocus(){render(opener);opener=null;}
 createDialog.addEventListener('close',closeFocus);readDialog.addEventListener('close',closeFocus);
 function openRead(p){reading=p;state.selected=p.id;document.getElementById('read-title').textContent=p.title;document.getElementById('read-summary').textContent=p.summary;document.getElementById('read-meta').textContent=`ENTRY ${String(p.id).padStart(2,'0')} / ${p.category.toUpperCase()}`;document.getElementById('read-body').textContent=p.note;const save=document.getElementById('read-save');save.textContent=p.saved?'Unsave project':'Save project';save.setAttribute('aria-pressed',String(p.saved));readDialog.showModal();}
 document.addEventListener('click',event=>{
  const button=event.target.closest('button[data-action]');if(!button)return;
  const action=button.dataset.action,id=Number(button.dataset.id),p=projects.find(item=>item.id===id),focus={action,id:id||undefined,filter:button.dataset.filter};
  if(action==='new'){opener=focus;form.reset();error.textContent='';nameInput.removeAttribute('aria-invalid');createDialog.showModal();nameInput.focus();}
  if(action==='close-create')createDialog.close();if(action==='close-read')readDialog.close();
  if(action==='read'&&p){opener=focus;openRead(p);}
  if(action==='save'&&p){p.saved=!p.saved;render(focus);announcement.textContent=`${p.saved?'Saved':'Unsaved'} ${p.title}.`;}
  if(action==='toggle-save'&&reading){reading.saved=!reading.saved;button.textContent=reading.saved?'Unsave project':'Save project';button.setAttribute('aria-pressed',String(reading.saved));announcement.textContent=`${reading.saved?'Saved':'Unsaved'} ${reading.title}.`;}
  if(action==='select'&&p){state.selected=p.id;render(focus);announcement.textContent=`Selected ${p.title}.`;}
  if(action==='filter'){state.filter=button.dataset.filter;render(focus);announcement.textContent=`${visible().length} projects shown.`;}
  if(action==='reset'){state.filter='all';state.query='';render({action:'filter',filter:'all'});announcement.textContent='Showing all projects.';}
  if(action==='next'||action==='previous'){const list=visible();if(!list.length)return;let index=list.findIndex(item=>item.id===state.selected);index=(index+(action==='next'?1:-1)+list.length)%list.length;state.selected=list[index].id;render(focus);announcement.textContent=`Selected ${list[index].title}.`;}
 });
 root.addEventListener('input',event=>{if(!event.target.matches('[data-search]'))return;state.query=event.target.value;render({search:true,start:event.target.selectionStart,end:event.target.selectionEnd});announcement.textContent=`${visible().length} projects shown.`;});
 nameInput.addEventListener('input',()=>{error.textContent='';nameInput.removeAttribute('aria-invalid');});
 form.addEventListener('submit',event=>{event.preventDefault();const title=nameInput.value.trim();if(!title){error.textContent='Give this project a title.';nameInput.setAttribute('aria-invalid','true');nameInput.focus();return;}const note=document.getElementById('idea-note').value.trim();projects.push({id:projects.length+1,title,category:'New idea',status:'exploring',saved:false,summary:note?note.slice(0,130):'A new direction, waiting to take shape.',note:note||'An open page for your next idea. Added to this preview session.'});createDialog.close();announcement.textContent=`Added ${title} to this session.`;});
 applyTheme(document.documentElement.dataset.theme||new URLSearchParams(location.search).get('theme'));
})();
