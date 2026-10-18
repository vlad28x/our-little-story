import { useEffect,useRef,useState } from 'react';
import { useGame } from '../app/GameProvider';
import { continuationDraft,continuationOptions,invitationConversation,invitationReplies,type MeetingChoice } from '../content/invitation';
import type { StoryState } from '../engine/types';
import { SceneStage } from './SceneStage';
export function InvitationPanel({story}:{story:StoryState}){
  const {save,send}=useGame();
  const [draft,setDraft]=useState(()=>continuationDraft(save.continuation)),[message,setMessage]=useState(''),[page,setPage]=useState(0);
  const section=useRef<HTMLElement>(null),heading=useRef<HTMLHeadingElement>(null);
  useEffect(()=>{section.current?.scrollIntoView({block:'start'});heading.current?.focus({preventScroll:true});},[]);
  const pages=invitationConversation(story),selected=save.continuation;
  const answer=continuationOptions.find(option=>option.value===selected)?.value;
  const reply=answer?invitationReplies[answer]:undefined;
  function choose(value:MeetingChoice){send({type:'continuation',value});setDraft(continuationDraft(value));setMessage('Ответ сохранён только на этом устройстве.');}
  async function copy(){try{await navigator.clipboard.writeText(draft);setMessage('Текст скопирован. Если захочешь, вставь его в ваш чат.');}catch{setMessage('Здесь не получилось скопировать автоматически. Выдели текст в поле и скопируй вручную.');}}
  return <section ref={section} className="final-conversation" aria-label="Разговор о следующей встрече">
    <SceneStage background="bg.cafe.sunset" emotion={answer==='movie'?'laugh':'smile'} showCat={false} bench={story.bench}/>
    <div className="story-panel invitation-panel">
      <span className="eyebrow">ПОСЛЕ ПЯТОЙ ВСТРЕЧИ</span><h2 ref={heading} tabIndex={-1} id="invitation-title">Может быть, ещё одна встреча?</h2>
      <div className="invitation-speech" aria-live="polite"><span className="speaker">Влад</span>{pages[page].map(line=><p key={line}>{line}</p>)}</div>
      {page<pages.length-1&&<button className="text-button" onClick={()=>setPage(p=>p+1)}>Продолжить разговор →</button>}
      <div className="choices invitation-options" aria-label="Как встретиться в реальности"><h3>Что выберешь?</h3>{continuationOptions.map((option,index)=><button key={option.value} aria-pressed={selected===option.value} onClick={()=>choose(option.value)}><span className="choice-index" aria-hidden="true">{String(index+1).padStart(2,'0')}</span><span>{option.label}</span><span aria-hidden="true">↗</span></button>)}</div>
      {reply&&<div className="invitation-response" aria-live="polite"><p className="heroine-reply"><b>Ты</b><span>{reply.heroine}</span></p><p><b>Влад</b><span>{reply.vlad}</span></p></div>}
      {selected&&!reply&&<p className="small">Сохранён твой прежний ответ: {selected==='public'?'сначала прогулка или кафе':selected==='chat'?'пока переписка':'не сейчас'}. Его можно оставить или выбрать другой вариант выше.</p>}
      <p className="invitation-privacy">Это приглашение в реальную жизнь. Ответ остаётся здесь — Влад его не увидит, пока ты сама не напишешь ему.</p>
      {answer&&answer!=='decline'&&<>
        <details className="taxi-note"><summary>Если хочется обсудить дорогу</summary><p>с дорогой тоже могу помочь — например, оплатить такси туда и обратно, если тебе так удобнее</p></details>
        <div className="invitation-draft"><label htmlFor="continuation-message">Сообщение Владу</label><textarea id="continuation-message" value={draft} maxLength={2000} onChange={e=>setDraft(e.target.value)}/><p className="tiny">Текст можно отредактировать. Он не сохраняется после закрытия страницы.</p><div className="stack"><button disabled={!draft.trim()} onClick={()=>void copy()}>Копировать сообщение</button></div></div>
      </>}
      {message&&<p role="status" className="small">{message}</p>}
      <p className="tiny">Можно выбрать любой ответ независимо от финала истории. Открытка и завершение главы уже сохранены.</p>
    </div>
  </section>;
}
