import { getChapter } from '../src/content/chapters';
import { getChapter as getLegacyChapter } from '../src/content/chapters';
import type { Run } from '../src/engine/types';
import type { SaveV1 } from '../src/state/types';
import { createHash } from 'node:crypto';

// Build an actual old envelope: changing only the version label would leave
// fields that the old client never wrote, and should be rejected by validation.
export function legacyContent(save:SaveV1,version:number):SaveV1{
  const legacy=prePolishSnapshot(save) as unknown as Record<string,unknown>;
  delete legacy.continuation10;delete legacy.privateWords;delete legacy.privateNotes;delete legacy.localNoteRevision;
  delete (legacy.collection as Record<string,unknown>).bonuses;legacy.contentVersion=version;
  delete (legacy.collection as Record<string,unknown>).memories;delete (legacy.collection as Record<string,unknown>).secrets;
  return legacy as unknown as SaveV1;
}

// Expected state of an actual pre-2026-10-23 client, before envelope migration.
export function prePolishSnapshot(save:SaveV1):SaveV1{
  const old=structuredClone(save);
  function beforePolish(value:unknown){
    if(!value||typeof value!=='object')return;
    const item=value as Record<string,unknown>;delete item.c4Goodbye;
    // The old client started at the door and had only six table lines.
    if(item.nodeId==='c1.prologue'||item.nodeId==='c1.before')item.nodeId='c1.entry';
    if(Array.isArray(item.journal)){
      const chapter=getLegacyChapter(item.chapter as Run['chapter']);
      item.journal=item.journal.filter(entry=>chapter?.nodes[(entry as {nodeId:Run['nodeId']}).nodeId]);
    }
    if(['c1.inside','c1.table','c3.pad.ready','c5.return'].includes(String(item.nodeId))&&typeof item.lineIndex==='number'){
      const node=getLegacyChapter(item.chapter as Run['chapter'])?.nodes[item.nodeId as Run['nodeId']];
      if(node?.kind==='dialogue')item.lineIndex=Math.min(item.lineIndex,node.lines.length-1);
    }
    for(const child of Object.values(item))beforePolish(child);
  }
  beforePolish(old);
  return old;
}

// Synthetic pre-removal format. No player exports or personal choices are fixtures.
export function withLegacyJournal(save:SaveV1){
  function attach(run:Run){
    const chapter=getChapter(run.chapter,run.story)!;
    const journal=Object.values(chapter.nodes).flatMap(node=>node.kind==='dialogue'
      ?node.lines.map((line,index)=>({...line,key:`${node.id}:${index}`,nodeId:node.id}))
      :[]).slice(0,52);
    return {...run,journal};
  }
  return {...save,campaign:{...save.campaign,active:save.campaign.active?attach(save.campaign.active):null},trial:save.trial?{...save.trial,run:attach(save.trial.run)}:null};
}

export function legacyCloudData(save:SaveV1){
  const raw=JSON.stringify({...save,continuation:null}),data:Record<string,string>={};let count=0;
  for(let start=0;start<raw.length;){let end=Math.min(start+3500,raw.length);if(end<raw.length&&/[\uD800-\uDBFF]/.test(raw[end-1])&&/[\uDC00-\uDFFF]/.test(raw[end]))end--;data[`five_meetings_v1_a_${count++}`]=raw.slice(start,end);start=end;}
  data.five_meetings_v1_head=JSON.stringify({version:1,current:{slot:'a',count,length:raw.length,hash:createHash('sha256').update(raw).digest('hex')},previous:null});return data;
}

// Synthetic inverse used only to exercise version-specific pre-swap importers.
// It never writes player storage or creates a second playable order.
export function order20Input(save:SaveV1):SaveV1{
 const old=structuredClone(save);const move=(id:number)=>id===3?4:id===4?3:id;
 old.unlocked=old.unlocked.map(id=>move(id) as typeof id).sort((a,b)=>a-b);
 for(const card of old.collection.cards)card.chapter=move(card.chapter) as typeof card.chapter;
 if(old.campaign.completed.includes(4)){
  const sky=old.campaign.records[3]!,game=old.campaign.records[4]!,prior=old.campaign.records[2]!.story;
  const gameKeys=['controllerReaction','teamName','kitchenStyle','kitchenResult','gameAftercare'] as const;
  const skyKeys=['c4Edition','bench','constellation','bond','wish','c4Goodbye'] as const;
  const pick=(story:typeof prior,keys:readonly (keyof typeof prior)[])=>Object.fromEntries(keys.filter(k=>story[k]!==undefined).map(k=>[k,story[k]]));
  const gameStory={...prior,...pick(game.story,gameKeys)},skyStory={...gameStory,...pick(sky.story,skyKeys)};
  old.campaign.records[3]={...game,story:gameStory};old.campaign.startStates[3]=structuredClone(prior);
  old.campaign.records[4]={...sky,story:skyStory};old.campaign.startStates[4]=structuredClone(gameStory);
  if(old.lastResult&&[3,4].includes(old.lastResult.chapter))old.lastResult.chapter=move(old.lastResult.chapter) as typeof old.lastResult.chapter;
 }
 if(save.campaign.records[3]?.story.bond){
  const strip=(value:unknown)=>{if(!value||typeof value!=='object')return;const item=value as Record<string,unknown>;delete item.c4Edition;Object.values(item).forEach(strip);};strip(old);
 }
 return {...old,contentVersion:20} as unknown as SaveV1;
}
