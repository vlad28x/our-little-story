import { useId, useRef } from 'react';
import type { MovieSetupDraft,MovieSetupAction,MovieSetupResult } from '../engine/types';
import { seats,lights,drinks,seatNames,lightNames,drinkNames } from './movieSetupModel';
import { SilentFilmArt } from '../ui/SilentFilmArt';
import { LampArt } from '../ui/LampArt';
import { DrinkArt } from '../ui/DrinkArt';
export function MovieSetup({draft,suspended,onAction,onComplete}:{draft:MovieSetupDraft;suspended:boolean;onAction:(a:MovieSetupAction)=>void;onComplete:(r:MovieSetupResult)=>void}){
 const seatGroup=useRef<HTMLFieldSetElement>(null),lightGroup=useRef<HTMLFieldSetElement>(null),drinkGroup=useRef<HTMLFieldSetElement>(null);
 function focus(ref:typeof seatGroup){ref.current?.querySelector('button')?.focus();ref.current?.scrollIntoView({block:'nearest'});}
 return <section className="cozy-game movie-setup"><span className="eyebrow">УСТРОИМСЯ?</span><h2>Твой маленький план на вечер</h2><p className="small">Пока это примерка. Сохраним после «Готово».</p><fieldset disabled={suspended}><div className={`movie-board ${draft.light==='dim'?'is-dim':''} ${draft.seat==='near'?'seats-near':''}`}><SilentFilmArt/><button className="movie-seat-hotspot" aria-label="Выбрать места" onClick={()=>focus(seatGroup)}><MovieSeatsArt/><span>Места</span></button><button className="movie-lamp-hotspot" aria-label="Выбрать свет" onClick={()=>focus(lightGroup)}><LampArt dim={draft.light==='dim'}/><span>Лампа</span></button><button className="movie-drink-hotspot" aria-label="Выбрать напиток" onClick={()=>focus(drinkGroup)}><DrinkArt drink={draft.drink??'tea'}/><span>{draft.drink?drinkNames[draft.drink]:'Напитки'}</span></button></div>
 <fieldset ref={seatGroup} className="cozy-options"><legend>Где устроимся?</legend><div>{seats.map(value=><button key={value} aria-pressed={draft.seat===value} onClick={()=>onAction({kind:'set-seat',value})}>{seatNames[value]}{draft.seat===value?' ✓':''}</button>)}</div><p className="tiny">Рядом — это место, без автоматического прикосновения.</p></fieldset><fieldset ref={lightGroup} className="cozy-options"><legend>Какой свет?</legend><div>{lights.map(value=><button key={value} aria-pressed={draft.light===value} onClick={()=>onAction({kind:'set-light',value})}>{lightNames[value]}{draft.light===value?' ✓':''}</button>)}</div></fieldset><fieldset ref={drinkGroup} className="cozy-options"><legend>Что взять?</legend><div>{drinks.map(value=><button key={value} aria-pressed={draft.drink===value} onClick={()=>onAction({kind:'set-drink',value})}>{drinkNames[value]}{draft.drink===value?' ✓':''}</button>)}</div></fieldset><div className="stack"><button className="primary" disabled={!draft.seat||!draft.light||!draft.drink} onClick={()=>{if(draft.seat&&draft.light&&draft.drink)onComplete({kind:'movie-setup',mode:'completed',seat:draft.seat,light:draft.light,drink:draft.drink});}}>Готово</button><button onClick={()=>onComplete({kind:'movie-setup',mode:'shared',seat:'space',light:'warm',drink:'tea'})}>Давай как ты подготовил</button><button className="text-button" onClick={()=>onComplete({kind:'movie-setup',mode:'skipped',seat:null,light:null,drink:null})}>Продолжить без настройки</button><button className="text-button" disabled={!draft.seat&&!draft.light&&!draft.drink} onClick={()=>onAction({kind:'reset'})}>Начать настройку заново</button></div></fieldset><p className="tiny">Совместный вариант или пропуск заменит неподтверждённые настройки.</p></section>;
}

function MovieSeatsArt(){
  const id=useId().replace(/:/g,'');
  return <svg viewBox="0 0 160 80" aria-hidden="true">
    <defs><linearGradient id={`${id}-wool`} x2=".68" y2="1"><stop stopColor="#d0a7b1"/><stop offset=".6" stopColor="#a17d92"/><stop offset="1" stopColor="#765b72"/></linearGradient></defs>
    {[5,89].map(x=><g key={x} transform={`translate(${x} 0)`}>
      <ellipse cx="33" cy="70" rx="31" ry="4.4" fill="#352636" opacity=".24"/>
      <path d="M9 58l-3 12m49-10 5 10" stroke="#725448" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M4 29q-1-15 13-17 14-3 34 0 15 3 14 17l-.5 33H4Z" fill={`url(#${id}-wool)`} stroke="#71586e" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M11 44q13-5 45 0l5 9q-1 8-8 8H13q-6 0-8-8Z" fill="#bc92a5" stroke="#8e6c84" strokeWidth="1.25"/>
      <path d="M11 34q-3-16 7-19m5 2q12-3 26 0m-34 36q16-2 35 0m1-13V22" fill="none" stroke="#f0cad0" strokeWidth="1.75" strokeLinecap="round" opacity=".64"/>
    </g>)}
  </svg>;
}
