import {cpSync,existsSync,lstatSync,mkdirSync,readdirSync,realpathSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const args=process.argv.slice(2);
if(args.length!==1){console.error('Usage: node scripts/create_demo.mjs <new-empty-directory>');process.exit(2);}
const source=fileURLToPath(new URL('../assets/starter/',import.meta.url)),destination=path.resolve(args[0]);
if(existsSync(destination)){
  const info=lstatSync(destination);
  if(info.isSymbolicLink()||!info.isDirectory()||readdirSync(destination).length){console.error('Destination must be an empty directory; existing files are unchanged.');process.exit(1);}
}
const relative=path.relative(source,destination);
if(relative===''||(!relative.startsWith('..'+path.sep)&&relative!=='..'&&!path.isAbsolute(relative))){console.error('Destination must be outside the bundled starter.');process.exit(1);}
mkdirSync(destination,{recursive:true});
cpSync(source,destination,{recursive:true,errorOnExist:true,force:false});
console.log(JSON.stringify({directory:realpathSync(destination),themes:11,next:'Run scripts/validate_demo.mjs with this directory, then scripts/serve.mjs.'}));
