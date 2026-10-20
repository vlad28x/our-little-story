import { useEffect,useRef,useState } from 'react';
import { useGame } from '../app/GameProvider';
import { go } from '../app/router';
import { assetUrl } from '../content/assetManifest';
import { checkCode } from '../content/chapters/manifest';
import { canStart } from '../state/reducer';
import { Modal } from './Modal';

export function AfterCreditsTeaser(){
  const [open,setOpen]=useState(false);
  return <>
    <button className="secret-peek" aria-label="Псс… Маленький секрет" aria-haspopup="dialog" onClick={()=>setOpen(true)}>
      <span className="secret-peek-cloud" aria-hidden="true">псс…</span>
      <span className="secret-peek-crop">
        <img className="secret-peek-body" src={assetUrl('adviser.devil.peek')} alt=""/>
      </span>
      <span className="secret-peek-spark" aria-hidden="true">✧</span>
    </button>
    {open&&<SecretConversation onClose={()=>setOpen(false)}/>}
  </>;
}

function SecretConversation({onClose}:{onClose:()=>void}){
  const {save,send,recovery,conflict,cloudBlocked}=useGame();
  const [step,setStep]=useState<'intro'|'code'>('intro'),[code,setCode]=useState(''),[error,setError]=useState('');
  const input=useRef<HTMLInputElement>(null);
  const unlocked=save.unlocked.includes(6),completed=save.campaign.completed.includes(6),active=save.campaign.active?.chapter===6;
  const ready=completed||active||canStart(save,6)&&!save.campaign.active&&!save.trial;
  const blocked=recovery||conflict||cloudBlocked;
  useEffect(()=>{if(step==='code'&&!unlocked)input.current?.focus();},[step,unlocked]);
  function submit(){
    const found=checkCode(code);
    if(!found||!found.available){setError('Код не подошёл. Проверь латинские буквы и дефис в сообщении Влада.');return;}
    if(found.id!==6){setError('Это код другой встречи. Для неё открой карту встреч.');return;}
    send({type:'unlock',code});setCode('');setError('');
  }
  function continueStory(){
    if(blocked||!unlocked||!ready)return;
    if(completed){onClose();go('/result/6?source=campaign');return;}
    if(!active)send({type:'start',chapter:6});
    onClose();go('/play/6');
  }
  return <Modal title="Маленький секрет" className="devil-secret-modal" onClose={onClose} decoration={<div className="secret-portrait" aria-hidden="true"><img src={assetUrl('adviser.devil.lean')} alt=""/></div>}>
    {step==='intro'?<>
      <div className="secret-speech"><p>так, титры были. а кто сказал, что всё?</p><p>у меня тут ещё несколько идей для вашего вечера</p></div>
      <div className="stack"><button className="primary" onClick={()=>setStep('code')}>И какие же?</button><button onClick={onClose}>Пока оставим интригу</button></div>
    </>:<>
      <div className="secret-speech" aria-live="polite"><p>{unlocked?'секрет уже раскрыт. продолжим?':'есть продолжение. но этот секрет Влад расскажет лично'}</p></div>
      <fieldset disabled={blocked}>
        {!unlocked?<form className="secret-code" onSubmit={e=>{e.preventDefault();submit();}}>
          <label htmlFor="secret-access-code">Код от Влада<input ref={input} id="secret-access-code" value={code} maxLength={64} placeholder="Код из сообщения" autoComplete="off" autoCapitalize="characters" autoCorrect="off" spellCheck={false} enterKeyHint="go" aria-invalid={!!error} aria-describedby="secret-code-message" onChange={e=>{setCode(e.target.value);setError('');}}/></label>
          <p id="secret-code-message" className="small" role="status">{error||'Введи код шестой встречи.'}</p>
          <button className="primary" disabled={!code.trim()}>Проверить код</button>
        </form>:<div className="stack">
          <p className="small" role="status">Шестая встреча «Ещё пять минут» открыта.{!ready?' Сначала заверши текущую встречу или закрой пробный вариант.':''}</p>
          {ready&&<button className="primary" onClick={continueStory}>{completed?'Мой финал шестой встречи':active?'Продолжить шестую встречу':'Начать шестую встречу'} →</button>}
        </div>}
        <div className="stack"><button onClick={()=>{onClose();go('/chapters');}}>К карте встреч</button><button className="text-button" onClick={onClose}>Пока оставим интригу</button></div>
      </fieldset>
    </>}
  </Modal>;
}
