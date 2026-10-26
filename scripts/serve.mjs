import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {existsSync,realpathSync} from 'node:fs';
import path from 'node:path';

const args=process.argv.slice(2);let rootArg='.',port=4173;
for(let i=0;i<args.length;i++){if(args[i]==='--port'){port=Number(args[++i]);}else if(i===0){rootArg=args[i];}else{console.error('Usage: node scripts/serve.mjs <directory> [--port 4173]');process.exit(2);}}
if(!Number.isInteger(port)||port<1||port>65535||!existsSync(rootArg)){console.error('Use an existing directory and a valid port.');process.exit(2);}
const root=realpathSync(rootArg),inside=file=>{const rel=path.relative(root,file);return rel!==''&&!rel.startsWith('..'+path.sep)&&rel!=='..'&&!path.isAbsolute(rel);};
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8','.png':'image/png'};
const server=http.createServer(async(req,res)=>{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});return res.end();}
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname.includes('\0')||pathname.includes('\\')||pathname.split('/').some(part=>part.startsWith('.'))){res.writeHead(403);return res.end();}
    const requested=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!inside(requested)){res.writeHead(403);return res.end();}
    const file=await import('node:fs/promises').then(fs=>fs.realpath(requested));
    if(!inside(file)||!(await stat(file)).isFile()){res.writeHead(403);return res.end();}
    const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:data);
  }catch(error){res.writeHead(error instanceof URIError?400:404);res.end('Not found');}
});
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
