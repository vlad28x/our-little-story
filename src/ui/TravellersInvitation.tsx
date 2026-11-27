import {useId,useState} from 'react';
import {useGame} from '../app/GameProvider';
import {assetManifest,assetUrl} from '../content/assetManifest';
import {meeting10Options} from '../content/travellers';
import {Illustration} from './Illustration';

const idlePalette={top:'#4f455d',mid:'#7d6375',bottom:'#d8a684',glow:'#ffdf9c',bokehA:'#ffe8b8',bokehB:'#f3c1b0'};

function FuturePrintBackdrop(){
 const uid=useId().replace(/:/g,'');
 const p=idlePalette;
 return <svg className="future-print-backdrop" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
   <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2=".3" y2="1">
    <stop offset="0" stopColor={p.top}/>
    <stop offset=".54" stopColor={p.mid}/>
    <stop offset="1" stopColor={p.bottom}/>
   </linearGradient>
   <radialGradient id={`${uid}-halo`} cx="50%" cy="54%" r="54%">
    <stop offset="0" stopColor={p.glow} stopOpacity=".58"/>
    <stop offset=".55" stopColor={p.glow} stopOpacity=".18"/>
    <stop offset="1" stopColor={p.glow} stopOpacity="0"/>
   </radialGradient>
   <radialGradient id={`${uid}-b1`} cx="50%" cy="50%" r="50%">
    <stop offset="0" stopColor={p.bokehA} stopOpacity=".65"/>
    <stop offset=".65" stopColor={p.bokehA} stopOpacity=".22"/>
    <stop offset="1" stopColor={p.bokehA} stopOpacity="0"/>
   </radialGradient>
   <radialGradient id={`${uid}-b2`} cx="50%" cy="50%" r="50%">
    <stop offset="0" stopColor={p.bokehB} stopOpacity=".52"/>
    <stop offset=".7" stopColor={p.bokehB} stopOpacity=".14"/>
    <stop offset="1" stopColor={p.bokehB} stopOpacity="0"/>
   </radialGradient>
  </defs>
  <rect width="320" height="200" fill={`url(#${uid}-sky)`}/>
  <rect width="320" height="200" fill={`url(#${uid}-halo)`}/>
  {/* Soft evening lantern bokeh */}
  <circle cx="52" cy="48" r="28" fill={`url(#${uid}-b1)`}/>
  <circle cx="268" cy="56" r="34" fill={`url(#${uid}-b2)`}/>
  <circle cx="96" cy="148" r="22" fill={`url(#${uid}-b2)`}/>
  <circle cx="246" cy="146" r="26" fill={`url(#${uid}-b1)`}/>
  <circle cx="192" cy="34" r="14" fill={`url(#${uid}-b1)`}/>
  {/* Distant cozy warm horizon silhouette */}
  <path d="M0 166q44-10 88-2t98 4 134-12v44H0Z" fill="#3a2c3c" opacity=".24"/>
  {/* Tiny evening stars / glints */}
  <g fill="#fff6de" opacity=".78">
   <circle cx="72" cy="36" r="1.4"/><circle cx="236" cy="40" r="1.6"/><circle cx="282" cy="96" r="1.2"/><circle cx="44" cy="118" r="1.3"/>
   <path d="M254 34l1.5 4.2 4.2 1.5-4.2 1.5-1.5 4.2-1.5-4.2-4.2-1.5 4.2-1.5Z" opacity=".82"/>
   <path d="M62 128l1.1 3.1 3.1 1.1-3.1 1.1-1.1 3.1-1.1-3.1-3.1-1.1 3.1-1.1Z" opacity=".68"/>
  </g>
  {/* Delicate film viewfinder frame corners & focus reticle */}
  <g fill="none" stroke="#fff4dc" strokeWidth="1.6" strokeLinecap="round" opacity=".62">
   <path d="M18 32V18h14M302 32V18h-14M18 168v14h14M302 168v14h-14"/>
  </g>
  <g fill="none" stroke="#fff4dc" strokeWidth="1" opacity=".32">
   <circle cx="160" cy="98" r="46" strokeDasharray="3 5"/>
   <path d="M160 44v6m0 96v6m-54-54h6m96 0h6"/>
  </g>
 </svg>;
}

export function TravellersInvitation(){
 const {save,send}=useGame();
 const selected=meeting10Options.find(o=>o.value===save.continuation10);
 const activeChoice=selected&&selected.image?selected:undefined;
 const [message,setMessage]=useState('');
 return <section id="real-meeting-invitation" tabIndex={-1} className="final-conversation travellers-invitation" aria-label="Приглашение после десятой"><div className="story-panel invitation-panel">
  <figure className={`future-print${activeChoice?` is-chosen motif-${activeChoice.value}`:' is-unexposed'}`} aria-label={activeChoice?`Возможный вечер: ${activeChoice.label}`:'Кадр впереди — этот вечер ещё не снят'}>
   <div className="future-print-window">
    {activeChoice
     ?<img key={activeChoice.value} className="future-print-photo" src={assetUrl(activeChoice.image)} alt={assetManifest[activeChoice.image].alt} decoding="async"/>
     :<><FuturePrintBackdrop/><Illustration kind="camera" className="future-print-camera"/></>}
    <span className="future-print-frame-num" aria-hidden="true">{activeChoice?'КАДР 13':'КАДР 13 · ПУСТОЙ'}</span>
   </div>
   <figcaption className="future-print-caption">{activeChoice?activeChoice.label:selected?.value==='decline'?'когда будешь готова':'кадр впереди · выбери вечер'}</figcaption>
  </figure>
  <h2>Этот вечер ещё не снят</h2><div className="invitation-speech"><span className="speaker">Влад</span><p>в игре у нас уже целый пакет фотографий. хочу увидеться с тобой по-настоящему. что устроим?</p></div>
  <div className="choices invitation-options" aria-label="Что устроим в реальности">{meeting10Options.map(o=><button key={o.value} className={o.image?'future-choice has-thumb':'future-choice is-decline'} aria-pressed={save.continuation10===o.value} onClick={()=>{send({type:'continuation10',value:o.value});setMessage('Выбор сохранён. Его можно изменить.');}}>{o.image&&<span className="future-choice-thumb" aria-hidden="true"><img src={assetUrl(o.image)} alt="" decoding="async"/></span>}<span className="future-choice-copy"><b>{o.label}</b>{o.detail&&<small className="choice-description">{o.detail}</small>}</span></button>)}</div>
  {selected&&<p className="invitation-response"><b>Влад</b> {selected.reply}</p>}
  {message&&<p role="status">{message}</p>}<p className="tiny">Завершение и открытка уже сохранены. Здесь ничего не отправляется автоматически.</p>
 </div></section>;
}
