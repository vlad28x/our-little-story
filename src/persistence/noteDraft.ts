import type { SaveV1 } from '../state/types';
import type { StorageLike } from './storage';
import { normalizeNote,noteLength } from './notes';
export type NoteDraft={attemptId:string;questionId:'s2.q6';text:string};
export function readNoteDraft(storage:StorageLike,key:string,attemptId:string):string{
  const raw=storage.getItem(`${key}:note-draft`);if(!raw)return '';
  const value:unknown=JSON.parse(raw);
  if(!value||typeof value!=='object'||Array.isArray(value))return '';
  const d=value as Record<string,unknown>;
  return d.attemptId===attemptId&&d.questionId==='s2.q6'&&typeof d.text==='string'&&noteLength(d.text)<=280&&normalizeNote(d.text)===d.text?d.text:'';
}
export function writeNoteDraft(storage:StorageLike,key:string,draft:NoteDraft){
  if(noteLength(draft.text)>280)throw new Error('Слишком длинная заметка');
  storage.setItem(`${key}:note-draft`,JSON.stringify(draft));
}
export function clearFinishedDraft(storage:StorageLike,key:string,save:SaveV1){
  const raw=storage.getItem(`${key}:note-draft`);if(!raw)return;
  try{
    const d=JSON.parse(raw) as NoteDraft;
    const runs=[save.campaign.active,save.trial?.run];
    if(!runs.some(r=>r?.attemptId===d.attemptId&&r.nodeId==='c6.note'))storage.removeItem(`${key}:note-draft`);
  }catch{storage.removeItem(`${key}:note-draft`);}
}
