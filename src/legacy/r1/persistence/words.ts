import type { Run,StoryState } from '../engine/types';
import type { SaveV1 } from '../state/types';
export function normalizeWord(text:string){return text.normalize('NFC').replace(/[\r\n\t]+/g,' ').replace(/\p{Cc}/gu,'').trim();}
export function validWord(text:string){return !!text&&Array.from(text).length<=24&&normalizeWord(text)===text;}
export function wordLabel(save:SaveV1,chapter:number,story:StoryState,mode:'campaign'|'trial',attemptId?:string){
 const kind=story.c8Word;if(!kind||kind==='none')return undefined;
 if(kind!=='custom')return {minute:'Ещё минутку',slow:'Без спешки',taks:'Такс'}[kind];
 const target=chapter===8?mode:'campaign',id=chapter===8?attemptId:save.campaign.records[8]?.attemptId,word=save.privateWords[target];
 return word&&word.attemptId===id&&word.status==='saved'?word.text:'Наше слово';
}
export function activeWordLabel(save:SaveV1,run:Run,mode:'campaign'|'trial'){return wordLabel(save,run.chapter,run.story,mode,run.attemptId);}
