import fs from 'node:fs';
const apps=JSON.parse(fs.readFileSync('content/apps.json'));
const sources=JSON.parse(fs.readFileSync('content/sources.json','utf8').replace(/^\uFEFF/,''));
const rows=[['App','Type','Original URL','New URL','Migration status']];
for(const a of apps)for(const kind of ['privacy','support']){
  const s=sources.find(s=>s.id===a[kind]&&s.filename.includes(kind));
  rows.push([a.name,kind,s?s.url+'#file-'+s.filename.replace(/\./g,'-'):'',`https://riceawn.com/${kind}/${a.slug}/`,'Not migrated in app/store']);
}
fs.writeFileSync('MIGRATION.csv', rows.map(r=>r.map(v=>'"'+v.replaceAll('"','""')+'"').join(',')).join('\n'));
