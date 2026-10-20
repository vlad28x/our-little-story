import { councilRounds } from '../content/betweenLines';
import type { CouncilAction,CouncilAnswers,CouncilDraft,CouncilResult } from '../engine/types';
const object=(x:unknown):x is Record<string,unknown>=>!!x&&typeof x==='object'&&!Array.isArray(x);
function exact(x:Record<string,unknown>,ks:string[]){return Object.keys(x).length===ks.length&&Object.keys(x).every(k=>ks.includes(k));}
export function validAnswers(x:unknown):x is CouncilAnswers{return Array.isArray(x)&&x.length<=3&&x.every((a,i)=>councilRounds[i].answers.some(v=>v.id===a));}
export function reaction(d:CouncilDraft){const i=d.answers.length-1;return councilRounds[i]?.answers.find(a=>a.id===d.answers[i])?.lines??[];}
export function initialCouncil():CouncilDraft{return {kind:'between-lines',answers:[],phase:'choose',lineIndex:0};}
export function validCouncilDraft(x:unknown):x is CouncilDraft{
 if(!object(x)||!exact(x,['kind','answers','phase','lineIndex'])||x.kind!=='between-lines'||!validAnswers(x.answers)||!Number.isInteger(x.lineIndex))return false;
 const n=x.answers.length,i=x.lineIndex as number;
 return x.phase==='choose'?n<=2&&i===0:x.phase==='complete'?n===3&&i===0:x.phase==='reply'&&n>=1&&i>=0&&i<reaction(x as CouncilDraft).length;
}
export function validCouncilResult(x:unknown):x is CouncilResult{return object(x)&&exact(x,['kind','outcome','answers'])&&x.kind==='between-lines'&&validAnswers(x.answers)&&(x.outcome==='completed'?x.answers.length===3:x.outcome==='skipped'&&x.answers.length<=2);}
export function betweenLinesReduce(d:CouncilDraft,a:CouncilAction):CouncilDraft{
 if(!validCouncilDraft(d))return d;
 if(a.kind==='answer'&&d.phase==='choose'&&councilRounds[d.answers.length].answers.some(v=>v.id===a.answer))return {kind:'between-lines',answers:[...d.answers,a.answer] as CouncilAnswers,phase:'reply',lineIndex:0};
 if(a.kind==='next-line'&&d.phase==='reply')return d.lineIndex+1<reaction(d).length?{...d,lineIndex:d.lineIndex+1}:{...d,phase:d.answers.length===3?'complete':'choose',lineIndex:0};
 return d;
}
export function acceptsCouncilResult(d:CouncilDraft,r:unknown):r is CouncilResult{return validCouncilDraft(d)&&validCouncilResult(r)&&JSON.stringify(d.answers)===JSON.stringify(r.answers)&&(r.outcome==='completed'?d.phase==='complete':d.phase==='choose');}
