import { useEffect,useRef,useState } from 'react';
import { useGame } from '../app/GameProvider';
import { noteLength,normalizeNote,validNote } from '../persistence/notes';
import { readNoteDraft,writeNoteDraft } from '../persistence/noteDraft';
import { readNoteSelection } from '../persistence/noteDraft';
import type { StoryNode } from '../engine/types';
import { episodes } from '../content/season2';
import type { ChapterRecord } from '../state/types';
import { Modal } from './Modal';

export function PersonalNote({attemptId,suspended,onComplete,config,chapter=6,mode='campaign'}:{config:Extract<StoryNode,{kind:'note'}>;attemptId:string;chapter?:6|7|8|9|10;mode?:'campaign'|'trial';suspended:boolean;onComplete:(status:'saved'|'skipped',text?:string)=>void}){
  const {storageId}=useGame();const noteQuestion=episodes[chapter].question;
  const [loadError]=useState(()=>{try{readNoteDraft(localStorage,storageId,attemptId,mode,chapter);return '';}catch{return 'Черновик на этом устройстве недоступен. Ответ можно пропустить.';}});
  const [text,setText]=useState(()=>{try{return readNoteDraft(localStorage,storageId,attemptId,mode,chapter);}catch{return '';}});
  const [selection,setSelection]=useState<string|null>(()=>{try{return readNoteSelection(localStorage,storageId,attemptId,mode,chapter);}catch{return null;}});
  const selectionRef=useRef(selection);selectionRef.current=selection;const field=useRef<HTMLTextAreaElement>(null);const submitted=useRef(false);
  const latest=useRef(text);latest.current=text;
  const [error,setError]=useState(loadError);
  useEffect(()=>{
    const viewport=window.visualViewport;
    const reveal=()=>{if(document.activeElement===field.current)field.current?.scrollIntoView({block:'center'});};
    viewport?.addEventListener('resize',reveal);return()=>viewport?.removeEventListener('resize',reveal);
  },[]);
  useEffect(()=>{
    function write(){try{writeNoteDraft(localStorage,storageId,{attemptId,chapter,target:mode,questionId:episodes[chapter].questionId,text:latest.current,selection:selectionRef.current});setError('');}catch{setError('Черновик сейчас не сохраняется на устройстве. Можно сохранить копию прогресса или пропустить вопрос.');}}
    const timer=setTimeout(write,300);
    const blur=()=>write();window.addEventListener('pagehide',blur);window.addEventListener('blur',blur);
    return()=>{clearTimeout(timer);window.removeEventListener('pagehide',blur);window.removeEventListener('blur',blur);};
  },[text,selection,storageId,attemptId,chapter,mode]);
  const preset=config.answerOptions.find(o=>o.kind==='preset'&&o.id===selection);const answer=selection==='custom'?text:preset?.text??'';const tooLong=selection==='custom'&&noteLength(text)>280;
  function complete(status:'saved'|'skipped'){if(submitted.current||suspended||status==='saved'&&!validNote(answer.trim()))return;submitted.current=true;onComplete(status,status==='saved'?answer:undefined);}
  return <section className="personal-note"><span className="eyebrow">ТВОЯ МЫСЛЬ</span><p className="small">{config.context}</p><h2 id="personal-question">{noteQuestion}</h2><fieldset disabled={suspended} aria-labelledby="personal-question"><div className="personal-answer-options">{config.answerOptions.map(o=><button type="button" key={o.id} className="personal-answer-option" aria-pressed={selection===o.id} onClick={()=>{setSelection(o.id);if(o.kind==='custom')requestAnimationFrame(()=>{field.current?.focus({preventScroll:true});field.current?.scrollIntoView({block:'center'});});}}>{o.text}{o.kind==='custom'&&<span aria-hidden="true"> ✎</span>}</button>)}</div>{selection==='custom'&&<div className="personal-custom-answer"><label htmlFor="personal-answer">{noteQuestion}</label><textarea ref={field} id="personal-answer" value={text} placeholder={config.placeholder} aria-describedby="note-count note-limit" aria-invalid={tooLong} onChange={e=>{const value=normalizeNote(e.target.value);if(noteLength(value)<=4096)setText(value);}} onKeyDown={e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)&&!e.nativeEvent.isComposing){e.preventDefault();complete('saved');}}}/>{text&&<p id="note-count" className="tiny note-count">{noteLength(text)}/280</p>}<p id="note-limit" className="tiny" role={tooLong?'alert':undefined}>{tooLong?'Ответ длиннее 280 символов. Сократи его перед сохранением.':''}</p></div>}{preset&&<button className="text-button" onClick={()=>{setText(preset.text);setSelection('custom');requestAnimationFrame(()=>{field.current?.focus({preventScroll:true});field.current?.scrollIntoView({block:'center'});});}}>Изменить этот ответ</button>}{error&&<p className="small" role="status">{error}</p>}<div className="stack">{selection&&<button className="primary" disabled={!validNote(answer.trim())} onClick={()=>complete('saved')}>{config.submitLabel}</button>}<button className="text-button" onClick={()=>complete('skipped')}>{config.skipLabel}</button></div></fieldset></section>;
}

export function SavedPersonalNote({record,mode,chapter=6}:{record:ChapterRecord;chapter?:6|7|8|9|10;mode:'campaign'|'trial'}){
  const {save,send}=useGame();const [editing,setEditing]=useState(false),[removing,setRemoving]=useState(false),[text,setText]=useState('');
  const noteQuestion=episodes[chapter].question;const stored=save.privateNotes[chapter]?.[mode];const note=stored?.attemptId===record.attemptId?stored:undefined;
  if(record.story[episodes[chapter].noteKey]!=='saved')return null;
  return <section className="saved-personal-note"><h2>Мой ответ</h2>{editing?<><label htmlFor="edit-personal-note">{noteQuestion}</label><textarea id="edit-personal-note" value={text} onChange={e=>{const value=normalizeNote(e.target.value);if(noteLength(value)<=4096)setText(value);}}/><p className="tiny" role={noteLength(text)>280?'alert':undefined}>{noteLength(text)}/280{noteLength(text)>280?' — сократи ответ перед сохранением':''}</p><div className="stack"><button className="primary" disabled={!validNote(text.trim())} onClick={()=>{send({type:'note-edit',chapter,target:mode,attemptId:record.attemptId!,text});setEditing(false);}}>Сохранить изменения</button><button onClick={()=>setEditing(false)}>Отмена</button></div></>:<><p className="small">{noteQuestion}</p>{note?.status==='saved'?<p className="saved-note-text">{note.text}</p>:<p className="small">{note?.status==='deleted'?'Заметка удалена.':'В этой копии сохранения нет текста ответа. Можно написать его заново.'}</p>}<button className="text-button" onClick={()=>{setText(note?.text??'');setEditing(true);}}>{note?.status==='saved'?'Редактировать':'Написать ответ'}</button>{note?.status==='saved'&&<button className="text-button" onClick={()=>setRemoving(true)}>Удалить заметку</button>}</>}{removing&&<Modal title="Удалить личную заметку?" onClose={()=>setRemoving(false)}><p>Этот ответ будет удалён из сохранения, включая копию Telegram при синхронизации. Сюжет и выбранный финал останутся.</p><div className="stack"><button onClick={()=>{send({type:'note-edit',chapter,target:mode,attemptId:record.attemptId!,remove:true});setRemoving(false);}}>Удалить</button><button onClick={()=>setRemoving(false)}>Оставить</button></div></Modal>}</section>;
}
