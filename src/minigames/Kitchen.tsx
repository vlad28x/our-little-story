import { useEffect,useReducer,useRef } from 'react';
import type { KitchenResult,StoryState } from '../engine/types';
import { initialKitchen,ingredientNames,kitchenReduce,kitchenResult,recipes,teamNames,visibleOrders,type Ingredient } from './kitchenModel';
export function FoodArt({ingredient}:{ingredient:Ingredient}){
  return <svg viewBox="0 0 80 60" className="food-art" aria-hidden="true">{ingredient==='bread'?<><path d="M18 50V26C2 10 23 3 40 8C58 3 78 11 62 26V50Z" fill="#e8b776" stroke="#79564b" strokeWidth="2"/><path d="M25 44V24Q12 13 40 16Q67 13 55 24V44Z" fill="#fff0cf"/></>:ingredient==='cheese'?<><path d="M10 44L62 13L72 42L13 53Z" fill="#f9d581" stroke="#79564b" strokeWidth="2"/><circle cx="45" cy="33" r="4" fill="#d5a76a"/><circle cx="27" cy="43" r="3" fill="#d5a76a"/></>:ingredient==='tomato'?<><ellipse cx="40" cy="34" rx="25" ry="22" fill="#dd8f89" stroke="#79564b" strokeWidth="2"/><path d="M40 17L28 9L36 10L41 4L45 11L55 9L48 18Z" fill="#91ae8c"/><path d="M23 33Q20 23 28 21" fill="none" stroke="#fff0df" strokeWidth="3"/></>:<><ellipse cx="40" cy="32" rx="30" ry="16" transform="rotate(-28 40 32)" fill="#a8bd8d" stroke="#60765c" strokeWidth="2"/><ellipse cx="19" cy="43" rx="9" ry="12" transform="rotate(-28 19 43)" fill="#d7dfb8" stroke="#60765c"/><path d="M30 23L57 13M33 31L61 21" stroke="#7f9a72" strokeWidth="2"/></>}</svg>;
}
function Chef({vlad=false,busy=false}:{vlad?:boolean;busy?:boolean}){
  return <svg viewBox="0 0 100 100" className={`kitchen-chef ${busy?'is-cooking':''}`} aria-hidden="true"><path d="M20 98V79Q50 60 80 79V98" fill={vlad?'#c8d8ca':'#f3cbd9'} stroke="#79564b" strokeWidth="2"/><circle cx="50" cy="52" r="28" fill="#f3d0b7" stroke="#79564b" strokeWidth="2"/>{vlad?<path d="M22 43Q13 24 27 25Q20 10 37 15Q39 2 53 14Q67 5 72 22Q89 23 78 43L68 34Q53 41 44 29L32 44Z" fill="#ac8058" stroke="#79564b" strokeWidth="2"/>:<path d="M25 37V26Q11 24 20 12Q29 5 38 13Q49 -1 62 12Q76 4 82 18Q88 31 74 28V37Z" fill="#fff7ed" stroke="#79564b" strokeWidth="2"/>}<circle cx="39" cy="52" r="3" fill="#624c48"/><circle cx="61" cy="52" r="3" fill="#624c48"/><path d="M43 65Q50 71 58 64" fill="none" stroke="#79564b" strokeWidth="2"/></svg>;
}
export function Kitchen({style,team,reserveRemote,onComplete,onSound,suspended=false}:{style:NonNullable<StoryState['kitchenStyle']>;team:NonNullable<StoryState['teamName']>;reserveRemote:boolean;onComplete:(r:KitchenResult)=>void;onSound:()=>void;suspended?:boolean}){
  const [s,dispatch]=useReducer(kitchenReduce,style,initialKitchen);const done=useRef(false);
  useEffect(()=>{
    const pause=()=>dispatch({type:'pause'});const visibility=()=>{if(document.hidden)pause();};
    document.addEventListener('visibilitychange',visibility);window.addEventListener('blur',pause);window.addEventListener('pagehide',pause);
    return()=>{document.removeEventListener('visibilitychange',visibility);window.removeEventListener('blur',pause);window.removeEventListener('pagehide',pause);};
  },[]);
  useEffect(()=>{if(suspended)dispatch({type:'pause'});},[suspended]);
  useEffect(()=>{
    if(s.paused||suspended||!['tutorial','playing'].includes(s.phase))return;
    let last=performance.now();const timer=setInterval(()=>{const now=performance.now();if(document.hidden){dispatch({type:'pause'});}else dispatch({type:'tick',ms:now-last});last=now;},100);
    return()=>clearInterval(timer);
  },[s.paused,s.phase,suspended]);
  const current=s.orders.find(o=>o.id===s.selected)!,recipe=recipes[current.recipe];
  const active=['tutorial','playing'].includes(s.phase),hiddenCat=s.round===1&&s.phase==='playing';
  function finish(skip=false){if(done.current)return;done.current=true;onComplete(kitchenResult(s,skip));}
  return <section className="kitchen-game" aria-labelledby="kitchen-title">
    <div className="search-heading"><div><span className="eyebrow">ИГРА НА ТЕЛЕВИЗОРЕ</span><h2 id="kitchen-title">Кухня на двоих</h2></div><span className="kitchen-round">{s.phase==='tutorial'?'Проба':s.phase==='ready'?'Готовы?':`${s.round+1} / 3`}</span></div>
    <p className="kitchen-team">{teamNames[team]}</p>
    <div className="kitchen-status"><span>Подано: <b>{s.served} / 9</b></span><span>{s.phase==='tutorial'?'Без времени':s.mode==='calm'?'Без таймера':s.phase==='playing'?`${Math.ceil(s.left/1000)} сек`:'3 × 25 сек'}</span></div>
    <div className={`kitchen-tv ${!s.lamp?'lamp-off':''}`}>
      <div className="kitchen-sign">{hiddenCat?<span aria-label="Нарисованный кот на вывеске">／ᐠ • ˕ • ᐟ＼</span>:'Маленькая кухня'}</div>
      <div className="chef-stations"><div><Chef/><span>Ты · первый продукт</span></div><div><Chef vlad busy={!!s.partner&&!s.paused}/><span>Влад · второй продукт</span></div></div>
      {s.partner&&<div className="partner-progress"><span>Влад готовит</span><progress max={s.partner.total} value={s.partner.total-s.partner.left} aria-label="Подготовка Влада"/></div>}
      {s.round===2&&!s.lamp&&<button className="lamp-switch" onClick={()=>dispatch({type:'lamp'})}>Включить лампу</button>}
    </div>
    {reserveRemote&&(s.phase==='between'||s.paused)&&<p className="tiny remote-break">Пульт отдыхает на блюдце для «запасных».</p>}
    {s.paused&&active?<div className="kitchen-break"><h3>Маленькая пауза</h3><p>Время и Влад подождут. Продолжим, когда будет удобно.</p><button className="primary" disabled={suspended} onClick={()=>dispatch({type:'resume'})}>Продолжить готовить</button>{s.mode==='timed'&&s.phase==='playing'&&<button onClick={()=>dispatch({type:'calm'})}>Дальше без таймера</button>}</div>:
      s.phase==='ready'?<div className="kitchen-break"><h3>Пробные заказы готовы</h3><p>Теперь три раунда. Можно выбрать любой темп — история и награды те же.</p><button className="primary" onClick={()=>dispatch({type:'start',mode:'timed'})}>Начать · 3 × 25 секунд</button><button onClick={()=>dispatch({type:'start',mode:'calm'})}>Готовить без таймера</button></div>:
      s.phase==='between'?<div className="kitchen-break"><h3>Перерыв после раунда {s.round+1}</h3><p>Влад: «чай ещё тёплый. кухня подождёт».</p><button className="primary" onClick={()=>dispatch({type:'next'})}>Следующий раунд</button>{s.mode==='timed'&&<button onClick={()=>dispatch({type:'calm'})}>Дальше без таймера</button>}</div>:
      s.phase==='done'?<div className="kitchen-break"><h3>Готовили вместе</h3><p>Подано {s.served} из 9. Настоящие вкусняшки ждут при любом результате.</p><button className="primary" onClick={()=>finish()}>Закончить игру →</button></div>:
      <>
        <div className="kitchen-orders" aria-label="Заказы">{visibleOrders(s).map(o=><button key={o.id} aria-pressed={s.selected===o.id} onClick={()=>dispatch({type:'select',id:o.id})}><b>{recipes[o.recipe].title}</b><span>{recipes[o.recipe].ingredients.map(i=>ingredientNames[i]).join(' + ')}</span><small>{o.plate==='empty'?'Ждёт':o.plate==='first'?'Передай Владу':o.plate==='working'?'У Влада':'Готово к подаче'}</small></button>)}</div>
        <div className="kitchen-plate" aria-label={`Тарелка: ${recipe.title}`}><div>{current.plate!=='empty'?<FoodArt ingredient={recipe.ingredients[0]}/>:<span>Первый продукт</span>}{current.plate==='ready'&&<FoodArt ingredient={recipe.ingredients[1]}/>}</div><p>{current.plate==='working'?'Влад добавляет второй продукт':current.plate==='ready'?'Можно подавать':`${ingredientNames[recipe.ingredients[0]]} → Влад → Подать`}</p></div>
        <div className="kitchen-ingredients">{(Object.keys(ingredientNames) as Ingredient[]).map(i=><button key={i} onClick={()=>dispatch({type:'ingredient',ingredient:i})}><FoodArt ingredient={i}/>{ingredientNames[i]}</button>)}</div>
        <div className="kitchen-controls"><button disabled={current.plate!=='first'||!!s.partner} onClick={()=>dispatch({type:'pass'})}>{s.partner&&s.partner.id!==current.id?'Сейчас закончит первую':'Передать Владу'}</button><button className="primary" disabled={current.plate!=='ready'} onClick={()=>{onSound();dispatch({type:'serve'});}}>Подать</button><button className="text-button" onClick={()=>dispatch({type:'clear'})}>Очистить</button></div>
        <button className="text-button" onClick={()=>dispatch({type:'pause'})}>Пауза</button>{s.mode==='calm'&&s.phase==='playing'&&<button className="text-button" onClick={()=>dispatch({type:'end-round'})}>Закончить раунд</button>}
      </>}
    <p className="search-response" role="status">{s.message}</p>
    <button className="text-button full" onClick={()=>finish(true)}>Продолжить историю без кухни</button><p className="tiny">После перезагрузки начнётся обучение заново. Сюжет до игры сохранён.</p>
  </section>;
}
