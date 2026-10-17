import type { Chapter, NodeId } from './types';
import { assetManifest } from '../content/assetManifest';
export function validateContent(chapter:Chapter):string[] {
  const errors:string[]=[];const seen=new Set<NodeId>();
  function walk(id:NodeId,stack:NodeId[]) {
    const n=chapter.nodes[id];if(!n){errors.push(`Missing node ${id}`);return;}
    if(stack.includes(id)){errors.push(`Cycle ${id}`);return;}
    if(seen.has(id))return;seen.add(id);
    if(n.id!==id)errors.push(`ID mismatch ${id}`);
    if('scene' in n)for(const asset of [n.scene.background,n.scene.character])if(!assetManifest[asset])errors.push(`Missing asset ${asset}`);
    let next:NodeId[]=[];
    if(n.kind==='dialogue'){if(!n.lines.length)errors.push(`No lines ${id}`);next=[n.next];}
    if(n.kind==='choice'){if(!n.choices.length||n.choices.every(c=>c.when?.length))errors.push(`No default choice ${id}`);if(new Set(n.choices.map(c=>c.id)).size!==n.choices.length)errors.push(`Duplicate choice ${id}`);next=n.choices.map(c=>c.next);}
    if(n.kind==='route')next=[...n.cases.map(c=>c.next),n.fallback];
    if(n.kind==='minigame')next=[n.next];
    for(const target of next)walk(target,[...stack,id]);
  }
  walk(chapter.entry,[]);
  for(const id of Object.keys(chapter.nodes))if(!seen.has(id as NodeId))errors.push(`Unreachable ${id}`);
  if(![...seen].some(id=>chapter.nodes[id].kind==='end'))errors.push('No ending');
  return errors;
}
