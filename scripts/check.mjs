import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('docs');
const files=fs.readdirSync(root,{recursive:true}).filter(f=>f.endsWith('.html'));
let links=0;
for(const file of files){const text=fs.readFileSync(path.join(root,file),'utf8');assert.equal((text.match(/<h1[ >]/g)||[]).length,1,file+' must have one h1');assert(!/@gmail\.com|Rice Awn Studio|Riceawn Games|Rice Awn Games|gist\.github\.com/.test(text),file+' contains old identity or Gist link');assert(!/undefined|\u0000/.test(text),file+' has rendering error');for(const [,url]of text.matchAll(/(?:href|src)="([^"]+)"/g)){if(!url.startsWith('/')&&!url.startsWith('#'))continue;const [pathname,hash]=url.split('#');let target=pathname?path.join(root,pathname):path.join(root,file);if(target.endsWith(path.sep)||fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');assert(fs.existsSync(target),file+' broken link '+url);if(hash){const t=fs.readFileSync(target,'utf8');assert(t.includes(`id="${hash}"`),file+' missing anchor '+url);}links++;}}
assert.equal(fs.readFileSync('content/app-ads.txt','utf8'),fs.readFileSync('docs/app-ads.txt','utf8'));
assert.equal(files.length,29);
assert.equal(fs.readFileSync('docs/CNAME','utf8').trim(),'riceawn.com');
console.log(`PASS: ${files.length} pages, ${links} internal links, one h1 per page, identity/email cleanup, preserved app-ads.txt and domain.`);
