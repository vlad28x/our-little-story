import type { NoteChapter,SaveV1 } from '../state/types';
import type { QuestionId } from '../engine/types';
import type { StorageLike } from './storage';
import { normalizeNote,noteLength } from './notes';
import { normalizeWord } from './words';
type Target='campaign'|'trial';
export type NoteDraft={attemptId:string;questionId:QuestionId;text:string;chapter?:NoteChapter;target?:Target;selection?:string|null};
type Entry={kind:'note';chapter:NoteChapter;attemptId:string;questionId:QuestionId;text:string;selection?:string|null}|{kind:'word';chapter:8;attemptId:string;labelId:'s2.word8';text:string};
type Drafts={formatVersion:4;campaign?:Entry;trial?:Entry};
function valid(x:unknown):x is Entry{
 if(!x||typeof x!=='object'||Array.isArray(x))return false;const d=x as Entry;
 if(typeof d.attemptId!=='string'||!/^[a-zA-Z0-9_-]{1,64}$/.test(d.attemptId)||typeof d.text!=='string'||Object.keys(d).some(k=>!['kind','chapter','attemptId','questionId','labelId','text','selection'].includes(k)))return false;
 return d.kind==='note'?[6,7,8,9,10].includes(d.chapter)&&d.questionId===`s2.r3.q${d.chapter}`&&noteLength(d.text)<=4096&&(d.selection===undefined||d.selection===null||['preset.1','preset.2','custom'].includes(d.selection))&&normalizeNote(d.text)===d.text:d.kind==='word'&&d.chapter===8&&d.labelId==='s2.word8'&&noteLength(d.text)<=24&&normalizeWord(d.text)===d.text;
}
function read(storage:StorageLike,key:string):Drafts{
 const raw=storage.getItem(`${key}:note-draft`),out:Drafts={formatVersion:4};if(!raw)return out;
 const d=JSON.parse(raw);
 if(d?.formatVersion===4||d?.formatVersion===3||d?.formatVersion===2){for(const t of ['campaign','trial'] as const){const entry=d.formatVersion===2&&d[t]?{...d[t],kind:'note'}:d[t];if(valid(entry))out[t]=entry;}}return out;
}
export function readNoteDraft(storage:StorageLike,key:string,attemptId:string,target:Target='campaign',chapter:NoteChapter=6):string{
 const d=read(storage,key)[target];if(d?.kind==='note'&&d.attemptId===attemptId&&d.chapter===chapter)return d.text;
 const raw=storage.getItem(`${key}:note-draft`);if(!raw)return '';const old=JSON.parse(raw),entry={...old,kind:'note',chapter:6};return old?.formatVersion===undefined&&valid(entry)&&entry.attemptId===attemptId&&chapter===6?entry.text:'';
}
export function writeNoteDraft(storage:StorageLike,key:string,draft:NoteDraft){
 const entry:Entry={kind:'note',chapter:draft.chapter??6,attemptId:draft.attemptId,questionId:draft.questionId,text:draft.text,...(draft.selection!==undefined?{selection:draft.selection}:{})};if(!valid(entry))throw Error('Некорректный черновик');const d=read(storage,key);d[draft.target??'campaign']=entry;storage.setItem(`${key}:note-draft`,JSON.stringify(d));
}
export function readWordDraft(storage:StorageLike,key:string,attemptId:string,target:Target){const d=read(storage,key)[target];return d?.kind==='word'&&d.attemptId===attemptId?d.text:'';}
export function writeWordDraft(storage:StorageLike,key:string,attemptId:string,target:Target,text:string){const entry:Entry={kind:'word',chapter:8,labelId:'s2.word8',attemptId,text:normalizeWord(text)};if(!valid(entry))throw Error('Слово длиннее24 символов');const d=read(storage,key);d[target]=entry;storage.setItem(`${key}:note-draft`,JSON.stringify(d));}
export function clearFinishedDraft(storage:StorageLike,key:string,save:SaveV1){
 try{
  const raw=storage.getItem(`${key}:note-draft`);if(!raw)return;const old=JSON.parse(raw),d=read(storage,key);
  for(const target of ['campaign','trial'] as const){
   const run=target==='campaign'?save.campaign.active:save.trial?.run;
   const entry={...old,kind:'note',chapter:6};if(old?.formatVersion===undefined&&valid(entry)&&run?.attemptId===entry.attemptId&&run?.nodeId==='c6.r3.note')d[target]=entry;
   const value=d[target];if(value&&!(run?.attemptId===value.attemptId&&run.chapter===value.chapter&&run.nodeId===(value.kind==='word'?'c8.r3.word.custom':`c${value.chapter}.r3.note`)))delete d[target];
  }
  if(d.campaign||d.trial)storage.setItem(`${key}:note-draft`,JSON.stringify(d));else storage.removeItem(`${key}:note-draft`);
 }catch{storage.removeItem(`${key}:note-draft`);}
}

export function readNoteSelection(storage:StorageLike,key:string,attemptId:string,target:Target='campaign',chapter:NoteChapter=6):string|null{
 const entry=read(storage,key)[target];
 if(entry?.kind==='note'&&entry.attemptId===attemptId&&entry.chapter===chapter)return entry.selection===undefined?(entry.text?'custom':null):entry.selection;
 return readNoteDraft(storage,key,attemptId,target,chapter)?'custom':null;
}
