import { useEffect,useRef,useState } from 'react';
import { useGame } from '../app/GameProvider';
import { noteLength,normalizeNote,validNote } from '../persistence/notes';
import { readNoteDraft,writeNoteDraft } from '../persistence/noteDraft';
import { noteQuestion } from '../content/season2';
import type { ChapterRecord } from '../state/types';
import { Modal } from './Modal';

export function PersonalNote({attemptId,suspended,onComplete}:{attemptId:string;suspended:boolean;onComplete:(status:'saved'|'skipped',text?:string)=>void}){
  const {storageId}=useGame();
  const [loadError]=useState(()=>{try{readNoteDraft(localStorage,storageId,attemptId);return '';}catch{return 'Черновик на этом устройстве недоступен. Ответ можно пропустить.';}});
  const [text,setText]=useState(()=>{try{return readNoteDraft(localStorage,storageId,attemptId);}catch{return '';}});
  const latest=useRef(text);latest.current=text;
  const [error,setError]=useState(loadError);
  useEffect(()=>{
    function write(){try{writeNoteDraft(localStorage,storageId,{attemptId,questionId:'s2.q6',text:latest.current});setError('');}catch{setError('Черновик сейчас не сохраняется на устройстве. Можно сохранить копию прогресса или пропустить вопрос.');}}
    const timer=setTimeout(write,300);
    const blur=()=>write();window.addEventListener('pagehide',blur);window.addEventListener('blur',blur);
    return()=>{clearTimeout(timer);window.removeEventListener('pagehide',blur);window.removeEventListener('blur',blur);};
  },[text,storageId,attemptId]);
  return <section className="personal-note"><span className="eyebrow">МЫСЛЬ ДЛЯ СЕБЯ</span><h2>{noteQuestion}</h2><p className="small" id="note-privacy">Ответ останется на этом устройстве. Влад его не получает. Можно пропустить.</p><fieldset disabled={suspended}><label htmlFor="personal-answer">Твой ответ</label><textarea id="personal-answer" value={text} placeholder="Можно написать своими словами…" aria-describedby="note-privacy note-count" onChange={e=>setText(Array.from(normalizeNote(e.target.value)).slice(0,280).join(''))} onBlur={()=>{try{writeNoteDraft(localStorage,storageId,{attemptId,questionId:'s2.q6',text});}catch{setError('Не удалось сохранить черновик на устройстве.');}}}/><p id="note-count" className="tiny note-count">{noteLength(text)}/280</p>{error&&<p className="small" role="status">{error}</p>}<div className="stack"><button className="primary" disabled={!validNote(text.trim())} onClick={()=>onComplete('saved',text)}>Сохранить для себя</button><button className="text-button" onClick={()=>onComplete('skipped')}>Пропустить</button></div></fieldset></section>;
}

export function SavedPersonalNote({record,mode}:{record:ChapterRecord;mode:'campaign'|'trial'}){
  const {save,send}=useGame();const [editing,setEditing]=useState(false),[removing,setRemoving]=useState(false),[text,setText]=useState('');
  const stored=save.privateNotes[mode];const note=stored?.attemptId===record.attemptId?stored:undefined;
  if(record.story.c6Note!=='saved')return null;
  return <section className="saved-personal-note"><h2>Мой ответ</h2>{editing?<><label htmlFor="edit-personal-note">{noteQuestion}</label><textarea id="edit-personal-note" value={text} onChange={e=>setText(Array.from(normalizeNote(e.target.value)).slice(0,280).join(''))}/><p className="tiny">{noteLength(text)}/280 · Только на этом устройстве</p><div className="stack"><button className="primary" disabled={!validNote(text.trim())} onClick={()=>{send({type:'note-edit',target:mode,attemptId:record.attemptId!,text});setEditing(false);}}>Сохранить изменения</button><button onClick={()=>setEditing(false)}>Отмена</button></div></>:<><p className="small">{noteQuestion}</p>{note?.status==='saved'?<p className="saved-note-text">{note.text}</p>:<p className="small">{note?.status==='deleted'?'Заметка удалена на этом устройстве.':'Личная заметка осталась на другом устройстве.'}</p>}<button className="text-button" onClick={()=>{setText(note?.text??'');setEditing(true);}}>{note?.status==='saved'?'Редактировать':'Написать на этом устройстве'}</button>{note?.status==='saved'&&<button className="text-button" onClick={()=>setRemoving(true)}>Удалить заметку</button>}</>}{removing&&<Modal title="Удалить личную заметку?" onClose={()=>setRemoving(false)}><p>Этот ответ исчезнет с устройства. Сюжет и выбранный финал останутся.</p><div className="stack"><button onClick={()=>{send({type:'note-edit',target:mode,attemptId:record.attemptId!,remove:true});setRemoving(false);}}>Удалить</button><button onClick={()=>setRemoving(false)}>Оставить</button></div></Modal>}</section>;
}
