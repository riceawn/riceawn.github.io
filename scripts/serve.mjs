import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('docs');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.svg':'image/svg+xml','.txt':'text/plain','.xml':'application/xml'};
http.createServer((req,res)=>{let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}let file=path.resolve(root,'.'+name);if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403).end();return;}if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');const found=fs.existsSync(file);if(!found)file=path.join(root,'404.html');res.writeHead(found?200:404,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
