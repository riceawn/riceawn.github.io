export const escape = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function inline(s){
  const saved=[];
  const keep=s=>`\u0000${saved.push(s)-1}\u0000`;
  s=escape(s).replace(/\[([^\]]+)\]\(([^\s)]+)\)/g,(_,label,url)=>{
    if(!/^(https?:\/\/|mailto:|\/)/.test(url)) throw Error('Unsupported link: '+url);
    return keep(`<a href="${url}">${label}</a>`);
  }).replace(/`([^`]+)`/g,(_,v)=>keep(`<code>${v}</code>`));
  s=s.replace(/https?:\/\/[^\s<>]+/g,u=>keep(`<a href="${u}">${u}</a>`))
    .replace(/\bcontact@riceawn\.com\b/g,()=>keep('<a href="mailto:contact@riceawn.com">contact@riceawn.com</a>'))
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
  return s.replace(/\u0000(\d+)\u0000/g,(_,i)=>saved[i]);
}
export function markdown(body){
  const out=[]; let para=[]; let list=null; let n=0; const headings=[];
  const flush=()=>{if(para.length){out.push(`<p>${inline(para.join('\n')).replace(/ {2}\n/g,'<br>')}</p>`);para=[];}};
  const close=()=>{if(list){out.push(`</${list}>`);list=null;}};
  for(const line of body.split(/\r?\n/)){
    const h=line.match(/^(#{1,6})\s+(.+)/); const li=line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)/);
    if(h){flush();close(); if(h[1].length===1) continue; const level=Math.max(2,h[1].length); const id='section-'+(++n); headings.push({id,title:h[2].replace(/\*|`/g,''),level});out.push(`<h${level} id="${id}">${inline(h[2])}</h${level}>`);}
    else if(/^\s*---+\s*$/.test(line)){flush();close();}
    else if(li){flush();const type=/^\s*\d+\./.test(line)?'ol':'ul';if(list!==type){close();list=type;out.push(`<${type}>`);}out.push(`<li>${inline(li[1])}</li>`);}
    else if(!line.trim()){flush();close();}
    else{close();para.push(line);}
  }
  flush();close();return {html:out.join('\n'),headings};
}
