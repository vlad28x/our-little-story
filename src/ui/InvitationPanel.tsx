import { useState } from 'react';
import { useGame } from '../app/GameProvider';
import { continuationDraft,continuationOptions,invitationConversation,invitationReplies,type MeetingChoice } from '../content/invitation';
import type { StoryState } from '../engine/types';
import { Illustration } from './Illustration';
const meetingMotifs:Record<MeetingChoice,string>={game:'controller',movie:'cinema',cafe:'tea-for-two',walk:'promenade',decline:'envelope'};
export function InvitationPanel({story}:{story:StoryState}){
  const {save,send}=useGame();
  const [draft,setDraft]=useState(()=>continuationDraft(save.continuation)),[message,setMessage]=useState(''),[page,setPage]=useState(()=>save.continuation?2:0);
  const pages=invitationConversation(story),selected=save.continuation;
  const answer=continuationOptions.find(option=>option.value===selected)?.value;
  const reply=answer?invitationReplies[answer]:undefined;
  function choose(value:MeetingChoice){send({type:'continuation',value});setDraft(continuationDraft(value));setMessage('Ответ сохранён только на этом устройстве.');}
  async function copy(){try{await navigator.clipboard.writeText(draft);setMessage('Текст скопирован. Если захочешь, вставь его в ваш чат.');}catch{setMessage('Здесь не получилось скопировать автоматически. Выдели текст в поле и скопируй вручную.');}}
  return <section id="real-meeting-invitation" tabIndex={-1} className="final-conversation" aria-label="Разговор о следующей встрече">
    <div className="story-panel invitation-panel">
      <span className="eyebrow">ИСТОРИЯ ЗАКОНЧИЛАСЬ. А МЫ?</span><h2 id="invitation-title">А теперь — встретимся по-настоящему?</h2>
      <div className="invitation-speech" aria-live="polite"><span className="speaker">Влад</span>{pages[page].map(line=><p key={line}>{line}</p>)}</div>
      {page<pages.length-1&&<button className="text-button" onClick={()=>setPage(p=>p+1)}>Продолжить разговор →</button>}
      {page===pages.length-1&&<div className="choices invitation-options" aria-label="Как встретиться в реальности"><h3>Что выберешь?</h3>{continuationOptions.map(option=><button key={option.value} className={option.value==='decline'?'text-button invitation-decline':'invitation-format'} aria-pressed={selected===option.value} onClick={()=>choose(option.value)}>{option.value!=='decline'&&<Illustration kind={meetingMotifs[option.value]}/>}<span>{option.label}</span></button>)}</div>}
      {reply&&<div className="invitation-response" aria-live="polite"><p className="heroine-reply"><b>Ты</b><span>{reply.heroine}</span></p><p><b>Влад</b><span>{reply.vlad}</span></p></div>}
      {selected&&!reply&&<p className="small">Сохранён твой прежний ответ: {selected==='public'?'сначала прогулка или кафе':selected==='chat'?'пока переписка':'не сейчас'}. Его можно оставить или выбрать другой вариант выше.</p>}
      {answer&&<>
        {answer!=='decline'&&<details className="taxi-note"><summary>Если хочется обсудить дорогу</summary><p>с дорогой тоже могу помочь — например, оплатить такси туда и обратно, если тебе так удобнее</p></details>}
        <div className="invitation-draft"><label htmlFor="continuation-message">Сообщение Владу</label><textarea id="continuation-message" value={draft} maxLength={2000} onChange={e=>setDraft(e.target.value)}/><p className="tiny">Текст можно отредактировать. Он не сохраняется после закрытия страницы.</p><div className="stack"><button disabled={!draft.trim()} onClick={()=>void copy()}>Копировать сообщение</button></div></div>
      </>}
      {message&&<p role="status" className="small">{message}</p>}
      <p className="tiny">Можно выбрать любой ответ независимо от финала истории. Открытка и завершение главы уже сохранены.</p>
    </div>
  </section>;
}
