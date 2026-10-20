import { useEffect,useRef } from 'react';
import type { CouncilAction,CouncilDraft,CouncilResult,CouncilPrefix,TopicAnswer,PlaceAnswer,ToneAnswer } from '../engine/types';
import { councilRounds } from '../content/betweenLines';
import { reaction } from './betweenLinesModel';
export function BetweenLines({draft,suspended,onAction,onComplete}:{draft:CouncilDraft;suspended:boolean;onAction:(a:CouncilAction)=>void;onComplete:(r:CouncilResult)=>void}){
 const heading=useRef<HTMLHeadingElement>(null);
 const round=councilRounds[Math.min(draft.phase==='choose'?draft.answers.length:draft.answers.length-1,2)];
 useEffect(()=>{heading.current?.focus({preventScroll:true});},[draft.answers.length,draft.phase]);
 const line= draft.phase==='complete'?reaction(draft).at(-1):reaction(draft)[draft.lineIndex];
 const names={heroine:'Ты',vlad:'Влад',narrator:'Маленькая случайность',angel:'Ангел',devil:'Дьяволёнок',nina:'Нина','heroine-thought':'Твоя мысль','vlad-thought':'Тем временем у Влада…'};
 return <section className="between-lines"><div className="search-heading"><div><span className="eyebrow">МЕЖДУ СТРОК</span><h2 ref={heading} tabIndex={-1}>{round.title}</h2></div><span className="found-count">{Math.min(draft.phase==='choose'?draft.answers.length+1:draft.answers.length,3)} / 3</span></div><fieldset disabled={suspended}>
 {draft.phase==='choose'?<><p className="small">{round.staging}</p><p className="council-vlad">«{round.vlad}»</p><div className="council-answers">{round.answers.map(a=><button key={a.id} onClick={()=>{onAction({kind:'answer',answer:a.id});}}>{a.label}<span aria-hidden="true">↗</span></button>)}</div><button className="text-button" onClick={()=>onComplete({kind:'between-lines',outcome:'skipped',answers:draft.answers as CouncilPrefix})}>Продолжить прогулку без игры</button><p className="tiny">Оставшиеся ситуации будут пропущены</p></>:<><div className="council-reply"><span className={`speaker speaker-${line?.speaker}`}>{line?names[line.speaker]:''}</span><p className={`dialogue-text ${line?.speaker==='narrator'?'narration':''}`} aria-live="polite">{line?.text}</p></div>{draft.phase==='complete'?<button className="primary full" onClick={()=>onComplete({kind:'between-lines',outcome:'completed',answers:draft.answers as [TopicAnswer,PlaceAnswer,ToneAnswer]})}>Вернуться к прогулке</button>:<button className="next-button" onClick={()=>onAction({kind:'next-line'})}>{draft.lineIndex+1<reaction(draft).length?'Дальше':draft.answers.length<3?'Следующая ситуация':'Завершить разговор'} →</button>}</>}
 </fieldset></section>;
}
