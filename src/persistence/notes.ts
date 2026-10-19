import type { SaveV1 } from '../state/types';

export function normalizeNote(text:string){return Array.from(text.normalize('NFC').replace(/\r\n?/g,'\n')).filter(char=>{const code=char.codePointAt(0)!;return code===9||code===10||code>=32&&code!==127;}).join('');}
export function noteLength(text:string){return Array.from(text).length;}
export function validNote(text:string){return !!text.trim()&&noteLength(text)<=280&&normalizeNote(text)===text;}
// Cloud snapshots contain no personal text. Preserve only this scoped device's
// slots; views must match the attempt ID before showing any note.
export function preserveLocalNotes(remote:SaveV1,local:SaveV1):SaveV1{
  return {...remote,privateNotes:structuredClone(local.privateNotes),localNoteRevision:local.localNoteRevision};
}
