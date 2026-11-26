import { useState } from 'react';
import { useGame } from '../app/GameProvider';
import { continuationOptions,invitationTitle,invitationText,invitationReplies,type MeetingChoice } from '../content/invitation';
import { Illustration } from './Illustration';
const meetingMotifs:Record<MeetingChoice,string>={game:'controller',movie:'cinema',cafe:'tea-for-two',walk:'promenade',decline:'envelope'};
export function InvitationPanel(){
  const {save,send}=useGame();
  const [message,setMessage]=useState('');
  const selected=save.continuation;
  const answer=continuationOptions.find(option=>option.value===selected)?.value;
  const reply=answer?invitationReplies[answer]:undefined;
  function choose(value:MeetingChoice){send({type:'continuation',value});setMessage('Выбор встречи сохранён. Его можно изменить.');}
  return <section id="real-meeting-invitation" tabIndex={-1} className="final-conversation" aria-label="Разговор о следующей встрече">
    <div className="story-panel invitation-panel">
      <span className="eyebrow">ПОСЛЕ ИСТОРИИ</span><h2 id="invitation-title">{invitationTitle}</h2>
      <div className="invitation-speech"><span className="speaker">Влад</span>{invitationText.map(line=><p key={line}>{line}</p>)}</div>
      <div className="choices invitation-options" aria-label="Как встретиться в реальности"><h3>Что тебе больше по настроению?</h3>{continuationOptions.map(option=><button key={option.value} className={option.value==='decline'?'text-button invitation-decline':'invitation-format'} aria-pressed={selected===option.value} onClick={()=>choose(option.value)}>{option.value!=='decline'&&<Illustration kind={meetingMotifs[option.value]}/>}<span>{option.label}</span></button>)}</div>
      {reply&&<div className="invitation-response" aria-live="polite"><p className="heroine-reply"><b>Ты</b><span>{reply.heroine}</span></p><p><b>Влад</b><span>{reply.vlad}</span></p></div>}
      {selected&&!reply&&<p className="small">Сохранён твой прежний ответ: {selected==='public'?'сначала прогулка или кафе':selected==='chat'?'пока переписка':'не сейчас'}. Его можно оставить или выбрать другой вариант выше.</p>}
      {message&&<p role="status" className="small">{message}</p>}
      <p className="tiny">Можно выбрать любой ответ независимо от финала истории. Открытка и завершение главы уже сохранены.</p>
    </div>
  </section>;
}
