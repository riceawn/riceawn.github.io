import fs from 'node:fs';
const sources = JSON.parse(fs.readFileSync('content/sources.json','utf8').replace(/^\uFEFF/,''));
const apps = JSON.parse(fs.readFileSync('content/apps.json','utf8'));
const links = new Map();
for (const app of apps) {
  links.set(app.privacy, `/privacy/${app.slug}/`);
  if(app.support && app.support !== app.privacy) links.set(app.support, `/support/${app.slug}/`);
}
for (const app of apps) for(const kind of ['privacy','support']) {
  const source = sources.find(s=>s.id===app[kind] && (kind==='privacy' ? /privacy/.test(s.filename) : /support/.test(s.filename)));
  if(!source) continue;
  let body=fs.readFileSync(`content/source/${source.local}`,'utf8');
  body=body.replace(/(?:riceawn\.studio|biaaaa\.games|biaaaa\.lu)@gmail\.com/g,'contact@riceawn.com')
    .replace(/\b(?:Rice Awn Studio|Riceawn Games|Rice Awn Games|Rice Awn)(?! LLC)\b/g,'Rice Awn LLC')
    .replace(/https:\/\/gist\.github\.com\/tianyulu1013\/([a-f0-9]+)(?:#[\w-]+)?/g,(url,id)=>links.get(id)||url)
    .replace(/\(privacy-policy\.html\)/g,`(/privacy/${app.slug}/)`)
    .replace(/\(https:\/\/github\.com\/tianyulu1013\/sudokublocks\/issues\)/g,`(/support/${app.slug}/)`);
  if(kind==='privacy') {
    body=body.replace(/^.*(?:Last [Uu]pdated|Effective Date|^Effective October).*$/gm,'');
    body=body.replace(/^# .+\n/, '');
    body=`# ${app.name} — Privacy Policy\n\nLast updated: October 31, 2026\n\nProvider: **Rice Awn LLC**  \nContact: **contact@riceawn.com**\n\n${body.trim()}\n`;
    body=body.replace(/This policy is hosted on GitHub Gist, and visiting it is subject to GitHub’s privacy practices\./g,'This policy is hosted on GitHub Pages. GitHub processes website visits under its own privacy practices.')
      .replace(/If this policy is hosted on GitHub Gist, visiting the page also involves GitHub's processing/g,"This policy is hosted on GitHub Pages. Visiting the page involves GitHub's processing");
  }
  if(kind==='support' && app.slug==='jelly-mingle') body=body.replace(/^Jelly Mingle Support/m,'# Jelly Mingle Support').replace(/^Restore a purchase$/m,'## Restore a purchase');
  if(kind==='support' && app.slug==='dice-roller') body=body.replace(/^Dice Roller: 3D Simulator — Support/m,'# Dice Roller: 3D Simulator — Support').replace(/^(Contact Us|Restore Purchases|Billing and Refunds|Privacy)$/gm,'## $1');
  if(kind==='support' && app.slug==='bubble-level') body=body.replace('No. All orientation and leveling calculations are performed 100% locally in your device\'s memory. We do not track, collect, or store your sensor data.', 'Orientation and leveling calculations are performed locally on your device. Advertising and purchase services may process other information as described in the Privacy Policy.');
  fs.mkdirSync(`content/${kind}`,{recursive:true});
  fs.writeFileSync(`content/${kind}/${app.slug}.md`,body);
}
console.log('Prepared 12 policies and 7 existing support documents.');
