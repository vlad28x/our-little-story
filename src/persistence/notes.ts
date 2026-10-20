import type { SaveV1 } from '../state/types';
import { episodeChapters,episodes } from '../content/season2';

export function normalizeNote(text:string){return Array.from(text.normalize('NFC').replace(/\r\n?/g,'\n')).filter(char=>{const code=char.codePointAt(0)!;return code===9||code===10||code>=32&&code!==127;}).join('');}
export function noteLength(text:string){return Array.from(text).length;}
export function validNote(text:string){return !!text.trim()&&noteLength(text)<=280&&normalizeNote(text)===text;}
// Old cloud snapshots omitted personal text. Fill only missing slots belonging
// to the selected story's exact attempt; remote edits and deletion tombstones win.
// Callers supply only the current Telegram account's device cache/valid backup.
export function preserveLocalNotes(remote:SaveV1,local:SaveV1):SaveV1{
  const merged=structuredClone(remote);let changed=false;
  for(const chapter of episodeChapters)for(const target of ['campaign','trial'] as const){
    const active=target==='campaign'?remote.campaign.active:remote.trial?.run;
    const record=target==='campaign'?remote.campaign.records[chapter]:remote.lastResult?.source==='trial'&&remote.lastResult.chapter===chapter?remote.lastResult.episodeRecord:undefined;
    const context=active?.chapter===chapter?active:record;
    const note=local.privateNotes[chapter]?.[target];
    if(!merged.privateNotes[chapter]?.[target]&&note&&note.attemptId===context?.attemptId&&context.story[episodes[chapter].noteKey]==='saved'){
      (merged.privateNotes[chapter]??={})[target]=structuredClone(note);changed=true;
    }
    if(chapter===8){const word=local.privateWords[target];if(!merged.privateWords[target]&&word&&word.attemptId===context?.attemptId&&context.story.c8Word==='custom'){
      merged.privateWords[target]=structuredClone(word);changed=true;
    }}
  }
  if(changed)merged.localNoteRevision=Math.max(remote.localNoteRevision,local.localNoteRevision);
  return merged;
}

export const preserveLocalPrivateData=preserveLocalNotes;
