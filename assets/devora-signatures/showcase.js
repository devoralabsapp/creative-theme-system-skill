/* All interactions are local to each fictional showcase. No network or storage. */
document.querySelectorAll('.dv-preview').forEach(root=>{
 const views=root.querySelectorAll('[data-view]');
 root.querySelectorAll('[data-view-button]').forEach(button=>button.addEventListener('click',()=>{
  views.forEach(view=>{view.hidden=view.dataset.view!==button.dataset.viewButton;});
  root.querySelectorAll('[data-view-button]').forEach(peer=>peer.setAttribute('aria-pressed',String(peer===button)));
 }));
 const createDialog=root.querySelector('[data-create-dialog]');
 const form=root.querySelector('[data-create-form]');
 const input=root.querySelector('[data-idea-name]');
 const error=root.querySelector('[data-error]');
 root.querySelector('[data-create]').addEventListener('click',()=>{form.reset();error.textContent='';input.removeAttribute('aria-invalid');createDialog.showModal();input.focus();});
 root.querySelector('[data-cancel]').addEventListener('click',()=>createDialog.close());
 input.addEventListener('input',()=>{error.textContent='';input.removeAttribute('aria-invalid');});
 const add=(tag,className,text)=>{const e=document.createElement(tag);if(className)e.className=className;if(text)e.textContent=text;return e;};
 form.addEventListener('submit',event=>{
  event.preventDefault();const name=input.value.trim();
  if(!name){error.textContent='Give your idea a name.';input.setAttribute('aria-invalid','true');input.focus();return;}
  const list=root.querySelector('[data-project-list]'),number=String(list.children.length+1).padStart(2,'0');
  const isSignal=root.dataset.theme==='devora-signal';
  const article=add('article',isSignal?'dv-signal-row':'dv-folio-card');
  const title=add('h3','',name),desc=add('p','','A fresh idea, added to this preview.');
  const open=add('button','dv-open cursor-interaction',isSignal?'↗':'Explore project ↗');open.type='button';open.dataset.open=name;open.setAttribute('aria-label','Open '+name);
  if(isSignal){const copy=add('div');copy.append(title,desc);article.append(add('span','dv-meta',number),copy,add('span','dv-status','◇ Exploring'),open);}
  else article.append(add('span','dv-card-number',number+' / NEW IDEA'),title,desc,add('span','dv-tag','◇ Exploring'),open);
  list.append(article);const count=root.querySelector('[data-count]');if(count)count.textContent=number+' PROJECTS';
  root.querySelector('[data-toast]').textContent='Added “'+name+'” to this preview.';createDialog.close();
 });
 const detail=root.querySelector('[data-detail-dialog]');
 root.addEventListener('click',event=>{const button=event.target.closest('[data-open]');if(button&&root.contains(button)){root.querySelector('[data-detail-title]').textContent=button.dataset.open;detail.showModal();}});
 root.querySelector('[data-detail-close]').addEventListener('click',()=>detail.close());
 const slug=root.querySelector('[data-slug]'),help=root.querySelector('.dv-help'),feedback=root.querySelector('[data-kit-feedback]');
 const validate=()=>{const valid=/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug.value);slug.setAttribute('aria-invalid',String(!valid));help.textContent=valid?'Use lowercase letters, numbers and hyphens.':'Use a slug such as devora-notes.';help.className=valid?'dv-help':'dv-help dv-error';return valid;};
 slug.addEventListener('input',validate);
 root.querySelector('[data-save]').addEventListener('click',()=>{if(validate())feedback.textContent='✓ Changes accepted in this demo.';else{feedback.textContent='Check the project slug before saving.';slug.focus();}});
 root.querySelector('[data-reset]').addEventListener('click',()=>{slug.value='devora-notes';root.querySelector('[data-project-name]').value='Devora Notes';root.querySelector('.dv-check input').checked=true;validate();feedback.textContent='One clear primary action. Quiet secondary choices.';});
});
