import { useEffect,useId,useReducer,useRef } from 'react';
import type { KitchenResult,StoryState } from '../engine/types';
import { initialKitchen,ingredientNames,kitchenReduce,kitchenResult,recipes,teamNames,visibleOrders,type Ingredient } from './kitchenModel';
export function FoodArt({ingredient}:{ingredient:Ingredient}){
  const uid=useId().replace(/:/g,'');
  return <svg viewBox="0 0 80 60" className="food-art" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <defs>
      <linearGradient id={`${uid}-crust`} x1="0" y1="0" x2=".8" y2="1">
        <stop offset="0" stopColor="#dea76e"/><stop offset=".55" stopColor="#bd8152"/><stop offset="1" stopColor="#8d583f"/>
      </linearGradient>
      <radialGradient id={`${uid}-crumb`} cx="38%" cy="32%" r="72%">
        <stop offset="0" stopColor="#fff6e2"/><stop offset=".62" stopColor="#f1dbba"/><stop offset="1" stopColor="#d9b78a"/>
      </radialGradient>
      <linearGradient id={`${uid}-chtop`} x1="0" y1="0" x2="1" y2=".9">
        <stop offset="0" stopColor="#fff0be"/><stop offset=".58" stopColor="#f2ce82"/><stop offset="1" stopColor="#d8a85c"/>
      </linearGradient>
      <linearGradient id={`${uid}-chfront`} x1="0" y1="0" x2=".9" y2="1">
        <stop offset="0" stopColor="#f3cc7c"/><stop offset=".62" stopColor="#dca457"/><stop offset="1" stopColor="#b87f43"/>
      </linearGradient>
      <linearGradient id={`${uid}-chrind`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#c78d53"/><stop offset="1" stopColor="#94603c"/>
      </linearGradient>
      <radialGradient id={`${uid}-tom`} cx="34%" cy="28%" r="72%">
        <stop offset="0" stopColor="#ee9d87"/><stop offset=".48" stopColor="#d16c5a"/><stop offset=".85" stopColor="#a94d45"/><stop offset="1" stopColor="#873d3d"/>
      </radialGradient>
      <linearGradient id={`${uid}-leaf`} x1="0" y1="0" x2=".7" y2="1">
        <stop offset="0" stopColor="#a7b887"/><stop offset=".6" stopColor="#779161"/><stop offset="1" stopColor="#526a47"/>
      </linearGradient>
      <linearGradient id={`${uid}-cuc`} x1="0" y1="0" x2=".85" y2="1">
        <stop offset="0" stopColor="#afc08e"/><stop offset=".55" stopColor="#7c9668"/><stop offset="1" stopColor="#536d4f"/>
      </linearGradient>
      <radialGradient id={`${uid}-cucflesh`} cx="40%" cy="35%" r="68%">
        <stop offset="0" stopColor="#f9f7e1"/><stop offset=".68" stopColor="#e2e6bc"/><stop offset="1" stopColor="#bcc994"/>
      </radialGradient>
    </defs>
    {ingredient==='bread'?<>
      <ellipse cx="41" cy="53" rx="28" ry="5.2" fill="#5c3829" opacity=".2"/>
      {/* Artisan toast slice with warm baked crust */}
      <path d="M16 49V27C10 19 15 9 28 8q12-2 24 0c13 1 18 11 12 19v22q0 4-6 4H22q-6 0-6-4Z" fill={`url(#${uid}-crust)`} stroke="#785140" strokeWidth="1.6"/>
      <path d="M19 16q8-7 21-7t21 7" fill="none" stroke="#f5d2a1" strokeWidth="1.8" opacity=".62"/>
      {/* Soft warm sourdough crumb */}
      <path d="M21 47V28C16 21 20 13 30 12.5q10-1.2 20 0c10 .5 14 8.5 9 15.5v19q0 2.2-3 2.4H24q-3-.2-3-2.4Z" fill={`url(#${uid}-crumb)`} stroke="#c89e72" strokeWidth="1"/>
      {/* Airy bread pores & subtle warm crumb texture */}
      <ellipse cx="31" cy="24" rx="2.6" ry="1.8" transform="rotate(-12 31 24)" fill="#d5ae7d" opacity=".75"/>
      <ellipse cx="48" cy="22" rx="2.1" ry="1.5" transform="rotate(14 48 22)" fill="#d5ae7d" opacity=".72"/>
      <ellipse cx="42" cy="34" rx="3.2" ry="1.9" transform="rotate(-8 42 34)" fill="#cfa573" opacity=".7"/>
      <circle cx="29" cy="36" r="1.6" fill="#d5ae7d" opacity=".7"/>
      <ellipse cx="52" cy="39" rx="2.3" ry="1.4" transform="rotate(10 52 39)" fill="#cfa573" opacity=".65"/>
      <circle cx="37" cy="43" r="1.3" fill="#d5ae7d" opacity=".68"/>
      <circle cx="45" cy="27" r="1.1" fill="#d5ae7d" opacity=".6"/>
      <path d="M26 17q14-3 28 0" fill="none" stroke="#fffbf0" strokeWidth="1.9" opacity=".82"/>
      <path d="M24 46.5q16 1.5 32 0" fill="none" stroke="#b98a5f" strokeWidth="1.2" opacity=".45"/>
    </>:ingredient==='cheese'?<>
      <ellipse cx="42" cy="53" rx="31" ry="5.5" fill="#5c3829" opacity=".2"/>
      {/* Side rind face */}
      <path d="M11 33q-1 1-.5 3L11 45q0 2 2 3l10 6q2 1 3-.5V42Z" fill={`url(#${uid}-chrind)`} stroke="#825a3a" strokeWidth="1.5"/>
      {/* Front golden cut face */}
      <path d="M25 42l46-17q2.5-.8 2.5 2v16q0 2.5-2.5 3.2L27 54.5q-2.2.5-2.2-1.8Z" fill={`url(#${uid}-chfront)`} stroke="#825a3a" strokeWidth="1.5"/>
      {/* Top sunlit wedge face */}
      <path d="M11.5 33L57 10.5q2.5-1.2 4.5.8L73 24q1.2 1.3-.8 2L26 42.5q-2 .7-3.6-.5Z" fill={`url(#${uid}-chtop)`} stroke="#825a3a" strokeWidth="1.5"/>
      {/* Soft sculpted cheese holes with upper shadow & warm lit rim */}
      <g>
        <ellipse cx="42" cy="42" rx="5.6" ry="4.1" fill="#b4793c" opacity=".85"/>
        <ellipse cx="41.4" cy="43" rx="4.2" ry="2.9" fill="#dfaa57"/>
        <path d="M37.5 44.5q3.5 2 7.5-.4" fill="none" stroke="#fbe0a0" strokeWidth="1.1" opacity=".8"/>
        <ellipse cx="60" cy="36.5" rx="4.2" ry="3.1" fill="#b4793c" opacity=".82"/>
        <ellipse cx="59.5" cy="37.2" rx="3" ry="2.1" fill="#dfaa57"/>
        <ellipse cx="31" cy="47.5" rx="2.9" ry="2.1" fill="#b4793c" opacity=".78"/>
        <ellipse cx="30.7" cy="48.1" rx="2" ry="1.4" fill="#dfaa57"/>
        <ellipse cx="48" cy="24" rx="5.2" ry="2.4" transform="rotate(-14 48 24)" fill="#cf964a" opacity=".75"/>
        <ellipse cx="48.4" cy="24.5" rx="3.8" ry="1.6" transform="rotate(-14 48.4 24.5)" fill="#e8ba6b"/>
        <ellipse cx="33" cy="31" rx="3.2" ry="1.6" transform="rotate(-18 33 31)" fill="#d6a054" opacity=".68"/>
      </g>
      <path d="M17 31.5L56 12.8M27 40.5l42-15.2" stroke="#fff7dc" strokeWidth="1.5" opacity=".78"/>
    </>:ingredient==='tomato'?<>
      <ellipse cx="40" cy="54" rx="24" ry="5" fill="#5c3829" opacity=".22"/>
      {/* Plump slightly lobed heirloom tomato */}
      <path d="M40 16c13-1 25 6 25 19.5C65 48 54 55 40 55S15 48 15 35.5C15 22 27 15 40 16Z" fill={`url(#${uid}-tom)`} stroke="#7c4440" strokeWidth="1.6"/>
      <path d="M26 48q14 7 29-2" fill="none" stroke="#eaa485" strokeWidth="1.8" opacity=".55"/>
      <path d="M21 31q3-10 13-12" fill="none" stroke="#ffdfd2" strokeWidth="3.2" opacity=".82"/>
      <circle cx="21.5" cy="37.5" r="1.8" fill="#ffe8df" opacity=".78"/>
      <ellipse cx="40" cy="18.5" rx="8.5" ry="3.2" fill="#7d3838" opacity=".42"/>
      {/* Curved sage-olive sepals hugging the crown */}
      <path d="M40 18c-5-3-12-3-16-1 4 2 8 2 12 3-5 2-8 5-10 8 5-2 10-4 14-6 4 2 9 4 14 6-2-3-5-6-10-8 4-1 8-1 12-3-4-2-11-2-16 1Z" fill={`url(#${uid}-leaf)`} stroke="#4a5d40" strokeWidth="1.35"/>
      <path d="M40 18c-1-5 0-9 3-11.5 1.5-1.2 3-.6 3.5.4" fill="none" stroke="#536846" strokeWidth="2.4"/>
      <path d="M40 17c-1-4 0-7.5 2.5-9.5M30 18.5q4 .5 7 .5m6 0q4 0 7-.5" fill="none" stroke="#d0dcaf" strokeWidth="1.1" opacity=".7"/>
    </>:<>
      <ellipse cx="42" cy="52" rx="26" ry="4.6" fill="#5c3829" opacity=".2"/>
      {/* Single freshly-cut cucumber built in local axes so the cut face is 100% flush with the body */}
      <g transform="rotate(-24 42 33)">
        <path d="M19 21.5C36 21.2 50 22.4 61 24.8C69.5 26.6 70 39.4 61 41.2C50 43.6 36 44.8 19 44.5Z" fill={`url(#${uid}-cuc)`} stroke="#455a40" strokeWidth="1.65"/>
        {/* Sunlit upper ridge & gently converging lengthwise garden flutes */}
        <path d="M27 25.4q17-.1 33.5 2" fill="none" stroke="#d1e0ae" strokeWidth="2" opacity=".68"/>
        <path d="M29 33h34M28 40q17 .1 32.5-2" fill="none" stroke="#536e4b" strokeWidth="1.25" opacity=".52"/>
        {/* Subtle organic bumps & blossom tip */}
        <circle cx="38" cy="27.8" r="1.05" fill="#465c40" opacity=".58"/><circle cx="51" cy="29" r="1" fill="#465c40" opacity=".55"/>
        <circle cx="44" cy="36.6" r="1.1" fill="#465c40" opacity=".56"/><circle cx="56" cy="35.6" r="1" fill="#465c40" opacity=".52"/>
        <path d="M67.8 33h2.1" stroke="#625241" strokeWidth="1.8"/>
        {/* Flush cut face aligned exactly to y=21.5..44.5 */}
        <ellipse cx="19" cy="33" rx="7.6" ry="11.5" fill={`url(#${uid}-cucflesh)`} stroke="#455a40" strokeWidth="1.65"/>
        <ellipse cx="19" cy="33" rx="4.5" ry="7.1" fill="#c6d69b" stroke="#9ab277" strokeWidth=".85"/>
        <g fill="#fdfbe8" opacity=".94">
          <ellipse cx="19" cy="28.3" rx=".9" ry="1.8"/>
          <ellipse cx="21.4" cy="31.5" rx=".9" ry="1.8" transform="rotate(42 21.4 31.5)"/>
          <ellipse cx="16.6" cy="31.5" rx=".9" ry="1.8" transform="rotate(-42 16.6 31.5)"/>
          <ellipse cx="21" cy="36.2" rx=".9" ry="1.8" transform="rotate(-32 21 36.2)"/>
          <ellipse cx="17" cy="36.2" rx=".9" ry="1.8" transform="rotate(32 17 36.2)"/>
        </g>
        <path d="M15.2 26.2q3-2.6 6.8-1.4" fill="none" stroke="#fffef2" strokeWidth="1.25" opacity=".82"/>
      </g>
    </>}
  </svg>;
}
function Chef({vlad=false,busy=false}:{vlad?:boolean;busy?:boolean}){
  const uid=useId().replace(/:/g,'');
  return <svg viewBox="0 0 100 100" className={`kitchen-chef ${busy?'is-cooking':''}`} aria-hidden="true">
    <defs>
      <radialGradient id={`${uid}-skin`} cx="40%" cy="35%" r="65%"><stop offset="0" stopColor={vlad?'#f3d6bb':'#fff2e8'}/><stop offset="1" stopColor={vlad?'#d7ac94':'#e6cbb9'}/></radialGradient>
      <linearGradient id={`${uid}-apron`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={vlad?'#acb999':'#d9a6ae'}/><stop offset="1" stopColor={vlad?'#768870':'#bc8499'}/></linearGradient>
    </defs>
    {/* Shoulders, sweater & apron */}
    <path d="M18 98V80Q50 61 82 80V98Z" fill={`url(#${uid}-apron)`} stroke="#765e58" strokeWidth="2.2"/>
    <path d="M34 75v23M66 75v23" stroke="#fff7ec" strokeWidth="2.4" opacity=".8"/>
    <path d="M36 86h28v12H36Z" fill="#fff7ec" stroke="#85655c" strokeWidth="1.4" opacity=".88"/>
    {/* Neck & head */}
    <rect x="44" y="67" width="12" height="10" rx="4" fill="#e0b292"/>
    <circle cx="50" cy="52" r="25.5" fill={`url(#${uid}-skin)`} stroke="#88695e" strokeWidth="2.1"/>
    {/* Hair or Chef Toque */}
    {vlad?<>
      <path d="M23 44Q15 25 29 25Q22 10 38 15Q41 3 54 14Q68 6 73 22Q88 23 77 44Q68 33 56 36Q46 27 35 37Q29 35 23 44Z" fill="#87634c" stroke="#76533e" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M33 21q8-6 17-1M55 20q8-5 14 2" fill="none" stroke="#b78a65" strokeWidth="2.2" strokeLinecap="round" opacity=".75"/>
    </>:<>
      <path d="M25 46q-2-14 10-18h30q12 4 10 18q-10-10-25-9q-15-1-25 9Z" fill="#9b7f62" stroke="#664f3b" strokeWidth="1.6"/>
      <path d="M26 36V26Q13 24 21 12Q30 5 39 12Q50-1 62 12Q75 5 81 18Q86 30 74 28V36Z" fill="#f5e6cd" stroke="#785d55" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M38 18v12M50 15v15M62 18v12M27 31h46" stroke="#dfd0be" strokeWidth="1.6" strokeLinecap="round"/>
    </>}
    {/* Expressive eyes, rosy cheeks & warm smile */}
    <ellipse cx="39" cy="52" rx="3" ry="3.4" fill="#4f3a36"/><circle cx="38" cy="50.8" r="1" fill="#f5e6cd"/>
    <ellipse cx="61" cy="52" rx="3" ry="3.4" fill="#4f3a36"/><circle cx="60" cy="50.8" r="1" fill="#f5e6cd"/>
    <ellipse cx="32" cy="58" rx="4.5" ry="2.6" fill="#e59797" opacity=".48"/>
    <ellipse cx="68" cy="58" rx="4.5" ry="2.6" fill="#e59797" opacity=".48"/>
    <path d="M43 62Q50 69 57 62" fill="none" stroke="#88695e" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>;
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
