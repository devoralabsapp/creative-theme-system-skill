import {existsSync,readFileSync} from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

const args=process.argv.slice(2);if(args.length!==1){console.error('Usage: node scripts/validate_demo.mjs <demo-directory>');process.exit(2);}
const root=path.resolve(args[0]),errors=[];
const files=['index.html','website.html','explorer.css','explorer.js','all-themes.css','all-themes.js','theme-picker.js','assets/devoralabs-mark.svg','preview-bridge.css','preview-bridge.js','styles.css','themes.css','workspace-themes.css','additional-themes.css','holiday-tokens.css','holiday-themes.css','creative-themes.css','sac-theme.css','devora-press-theme.css','devora-duo-theme.css','avant-theme.css','demo.css','theme-registry.js','theme-bootstrap.js','themes.js','demo.js','lab/index.html','lab/tokens.css','lab/profiles.css','lab/profile-layouts.css','lab/holiday-layouts.css','lab/lab.css','lab/lab.js','lab/volume-five.js','lab/volume-five-layouts.css','volume-five-tokens.css','volume-five-themes.css','volume-five-catalog.js','volume-five-preview.html','lab/volume-five-revision.js','lab/volume-five-revision.css','volume-five-revision.css','pixel-riot.css'];
for(const file of files)if(!existsSync(path.join(root,file)))errors.push(`Missing ${file}`);
for(const id of ['halloween','christmas','tet','black-friday'])if(!existsSync(path.join(root,'assets/holidays',id+'.svg')))errors.push(`Missing holiday scene: ${id}`);
let registry;
try{
  const raw=readFileSync(path.join(root,'theme-registry.js'),'utf8'),match=raw.match(/^window\.STUDIO_THEMES\s*=\s*([\s\S]*);\s*$/);
  if(!match)throw new Error('Registry must be a JSON object assigned to window.STUDIO_THEMES.');
  registry=JSON.parse(match[1]);
  const ids=registry.themes.map(theme=>theme.id),families=['studio','workspace','seasonal','creative'];
  if(registry.familyOrder!==undefined&&(!Array.isArray(registry.familyOrder)||registry.familyOrder.length!==families.length||new Set(registry.familyOrder).size!==families.length||registry.familyOrder.some(family=>!families.includes(family))))errors.push('Family order must list each registered family once.');
  if(ids.length!==new Set(ids).size)errors.push('Duplicate theme IDs.');
  if(!ids.includes(registry.defaultTheme))errors.push('Default theme missing from registry.');
  if(typeof registry.storageKey!=='string'||!registry.storageKey)errors.push('Storage key missing.');
  const css=['themes.css','workspace-themes.css','additional-themes.css','creative-themes.css','sac-theme.css','devora-press-theme.css','devora-duo-theme.css','avant-theme.css','holiday-themes.css','volume-five-themes.css','volume-five-revision.css','pixel-riot.css'].map(file=>readFileSync(path.join(root,file),'utf8')).join('\n');
  for(const theme of registry.themes){
    if(!existsSync(path.join(root,'assets/previews',theme.id+'.jpg')))errors.push(`Missing overview preview: ${theme.id}`);
    if(!/^[a-z][a-z0-9-]*$/.test(theme.id))errors.push(`Invalid ID: ${theme.id}`);
    if(!theme.name||!theme.description||!/^#[a-f\d]{6}$/i.test(theme.color)||!['light','dark'].includes(theme.tone)||!['studio','workspace','seasonal','creative'].includes(theme.family))errors.push(`Invalid metadata: ${theme.id}`);
    if(theme.edition==='volume-five'&&!existsSync(path.join(root,'assets/volume-five',theme.id+'.svg')))errors.push(`Missing Volume Five scene: ${theme.id}`);
    if(theme.styleFamily!==undefined&&!families.includes(theme.styleFamily))errors.push(`Invalid style family: ${theme.id}`);
    if(theme.family==='workspace'&&(!Array.isArray(theme.workspace)||theme.workspace.length!==3||theme.workspace.some(value=>typeof value!=='string')))errors.push(`Invalid workspace: ${theme.id}`);
    if(theme.id!=='botanical'&&!css.includes(`[data-theme="${theme.id}"]`))errors.push(`Missing scoped CSS for ${theme.id}`);
  }
  if(!css.includes('prefers-reduced-motion'))errors.push('Reduced-motion support missing.');
}catch(error){errors.push(error.message);}
if(existsSync(path.join(root,'index.html'))){
  const html=readFileSync(path.join(root,'website.html'),'utf8');
  for(const relative of ['index.html','website.html','lab/index.html','volume-five-preview.html']){const source=path.join(root,relative);if(!existsSync(source))continue;for(const match of readFileSync(source,'utf8').matchAll(/(?:src|href)="([^"#?]+)"/g)){if(!/^[a-z]+:/i.test(match[1])&&!existsSync(path.resolve(path.dirname(source),match[1])))errors.push(`Broken local reference in ${relative}: ${match[1]}`);}}
  for(const id of ['theme-select','design-description','theme-status','products','search','sort','demo-dialog','demo-title','close-demo'])if(!html.includes(`id="${id}"`))errors.push(`Missing UI element #${id}`);
}
for(const file of ['planner','journal','ocean','garden','flowers','seed','water','sunflower','butterfly'])if(!existsSync(path.join(root,'assets',file+'.svg')))errors.push(`Missing sample SVG: ${file}`);
for(const file of files.filter(file=>file.endsWith('.js'))){if(!existsSync(path.join(root,file)))continue;const result=spawnSync(process.execPath,['--check',path.join(root,file)],{encoding:'utf8'});if(result.status!==0)errors.push(`Syntax check failed: ${file}\n${result.stderr||result.error}`);}
console.log(JSON.stringify({ok:errors.length===0,themeCount:registry?.themes?.length??0,errors},null,2));if(errors.length)process.exitCode=1;
