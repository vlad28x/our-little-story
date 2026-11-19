import {useState} from 'react';
import {useGame} from '../app/GameProvider';
import {meeting10Options} from '../content/travellers';
import {Illustration} from './Illustration';

export function TravellersInvitation(){
 const {save,send}=useGame();
 const selected=meeting10Options.find(o=>o.value===save.continuation10);
 const [draft,setDraft]=useState<string>(selected?.draft??''),[message,setMessage]=useState('');
 async function copy(){try{await navigator.clipboard.writeText(draft);setMessage('Текст скопирован. Ничего не отправлено.');}catch{setMessage('Выдели текст в поле и скопируй вручную.');}}
 return <section id="real-meeting-invitation" tabIndex={-1} className="final-conversation travellers-invitation" aria-label="Приглашение после десятой"><div className="story-panel invitation-panel">
  <div className="future-print" aria-label={selected&&selected.value!=='decline'?`Возможный вечер: ${selected.label}`:'Пустая рамка будущего вечера'}>{selected&&selected.value!=='decline'?<><Illustration kind={selected.motif}/><span>{selected.label}</span></>:<span aria-hidden="true"/>}</div>
  <h2>Этот вечер ещё не снят</h2><div className="invitation-speech"><span className="speaker">Влад</span><p>в игре у нас уже целый пакет фотографий. хочу увидеться с тобой по-настоящему. что устроим?</p></div>
  <div className="choices invitation-options" aria-label="Что устроим в реальности">{meeting10Options.map(o=><button key={o.value} aria-pressed={save.continuation10===o.value} onClick={()=>{send({type:'continuation10',value:o.value});setDraft(o.draft);setMessage('Выбор сохранён. Его можно изменить.');}}><span><b>{o.label}</b>{o.detail&&<small className="choice-description">{o.detail}</small>}</span></button>)}</div>
  {selected&&<><p className="invitation-response"><b>Влад</b> {selected.reply}</p><div className="invitation-draft"><label htmlFor="meeting10-message">Сообщение Владу</label><textarea id="meeting10-message" maxLength={2000} value={draft} onChange={e=>setDraft(e.target.value)}/><p className="tiny">Черновик можно изменить. После закрытия страницы он не сохраняется.</p><button disabled={!draft.trim()} onClick={()=>void copy()}>Копировать сообщение</button></div></>}
  {message&&<p role="status">{message}</p>}<p className="tiny">Завершение и открытка уже сохранены. Здесь ничего не отправляется автоматически.</p>
 </div></section>;
}
