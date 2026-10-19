import { getChapter } from '../src/content/chapters';
import type { Run } from '../src/engine/types';
import type { SaveV1 } from '../src/state/types';
import { createHash } from 'node:crypto';

// Build an actual old envelope: changing only the version label would leave
// fields that the old client never wrote, and should be rejected by validation.
export function legacyContent(save:SaveV1,version:number):SaveV1{
  const legacy=structuredClone(save) as unknown as Record<string,unknown>;
  delete legacy.privateNotes;delete legacy.localNoteRevision;
  delete (legacy.collection as Record<string,unknown>).bonuses;legacy.contentVersion=version;
  return legacy as unknown as SaveV1;
}

// Synthetic pre-removal format. No player exports or personal choices are fixtures.
export function withLegacyJournal(save:SaveV1){
  function attach(run:Run){
    const chapter=getChapter(run.chapter)!;
    const journal=Object.values(chapter.nodes).flatMap(node=>node.kind==='dialogue'
      ?node.lines.map((line,index)=>({...line,key:`${node.id}:${index}`,nodeId:node.id}))
      :[]).slice(0,52);
    return {...run,journal};
  }
  return {...save,campaign:{...save.campaign,active:save.campaign.active?attach(save.campaign.active):null},trial:save.trial?{...save.trial,run:attach(save.trial.run)}:null};
}

export function legacyCloudData(save:SaveV1){
  const raw=JSON.stringify({...withLegacyJournal(save),continuation:null}),data:Record<string,string>={};let count=0;
  for(let start=0;start<raw.length;){let end=Math.min(start+3500,raw.length);if(end<raw.length&&/[\uD800-\uDBFF]/.test(raw[end-1])&&/[\uDC00-\uDFFF]/.test(raw[end]))end--;data[`five_meetings_v1_a_${count++}`]=raw.slice(start,end);start=end;}
  data.five_meetings_v1_head=JSON.stringify({version:1,current:{slot:'a',count,length:raw.length,hash:createHash('sha256').update(raw).digest('hex')},previous:null});return data;
}
