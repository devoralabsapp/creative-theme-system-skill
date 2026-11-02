import fs from 'node:fs';
import vm from 'node:vm';
const read=p=>fs.readFileSync(p,'utf8'),context={window:{}};vm.runInNewContext(read('assets/starter/theme-registry.js'),context);vm.runInNewContext(read('assets/starter/expansion/themes.js'),context);
const reg=context.window.STUDIO_THEMES,active=context.window.THEME_EXPANSION,base=JSON.parse(read('docs/expansion/baseline-registry.json')),errors=[];
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b),ids=reg.themes.map(t=>t.id);
if(!same(reg.themes.filter(t=>!t.expansion),base.themes))errors.push('Original metadata/order changed');
for(const key of ['defaultTheme','storageKey','familyOrder'])if(!same(reg[key],base[key]))errors.push('Changed '+key);
for(const key of ['id','composition'])if(new Set(active.map(t=>t[key])).size!==active.length)errors.push('Duplicate '+key);
if(active.length!==reg.themes.filter(t=>t.expansion).length)errors.push('Runtime/registry mismatch');
for(const t of active){const m=reg.themes.find(m=>m.id===t.id);if(!m||m.composition!==t.composition||m.material!==t.material||m.cardLayout!==t.cards)errors.push('Metadata mismatch '+t.id);for(const p of [`assets/starter/assets/expansion/${t.id}.svg`,`assets/starter/assets/previews/${t.id}.jpg`,`docs/screenshots/design-lab/${t.id}.jpg`,`references/expansion-${t.phase}.md`])if(!fs.existsSync(p))errors.push('Missing '+p);if(!read('assets/starter/expansion/renderers.js').includes(t.composition+':t=>'))errors.push('Missing explicit composition '+t.id);if(!read('assets/starter/expansion/system.css').includes('.ex-layout-'+t.composition)&&!read('assets/starter/expansion/system.css').includes('.ex-'+t.composition+'-'))errors.push('Missing composition CSS '+t.id);if(!read(`references/expansion-${t.phase}.md`).includes(t.difference))errors.push('Missing distinction recipe '+t.id);}
for(const file of ['README.md','SKILL.md','docs/THEME_EXPANSION_AUDIT.md','docs/THEME_EXPANSION_MASTER_PLAN.md','docs/THEME_CATALOG.md','docs/THEME_IMPLEMENTATION_GUIDE.md','docs/THEME_EXPANSION_PROGRESS.md']){if(!fs.existsSync(file)){errors.push('Missing deliverable '+file);continue;}for(const match of read(file).matchAll(/\]\(([^\s)]+)\)/g)){const link=match[1];if(/^[a-z]+:|^#/.test(link))continue;const target=link.split('#')[0];if(target&&!fs.existsSync(new URL(target,'file://'+process.cwd()+'/'+file).pathname))errors.push('Broken documentation reference '+file+': '+target);}}
for(const id of ids)if(!read('docs/THEME_CATALOG.md').includes('`'+id+'`'))errors.push('Missing catalog entry '+id);
if(!read('README.md').includes('**'+ids.length+' themes.'))errors.push('Stale README count');
const sac=ids.indexOf('sac-01');if(!same(ids.slice(sac+1,sac+12),base.themes.map(t=>t.id).slice(sac+1,sac+12)))errors.push('Volume Five placement changed');
console.log(JSON.stringify({ok:!errors.length,original:base.themes.length,expansion:active.length,total:ids.length,errors},null,2));if(errors.length)process.exitCode=1;
