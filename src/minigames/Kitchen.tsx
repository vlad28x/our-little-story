import { useEffect,useId,useReducer,useRef } from 'react';
import type { KitchenResult,StoryState } from '../engine/types';
import { initialKitchen,ingredientNames,kitchenReduce,kitchenResult,recipes,teamNames,visibleOrders,type Ingredient } from './kitchenModel';
export function FoodArt({ingredient}:{ingredient:Ingredient}){
  const uid=useId().replace(/:/g,'');
  return <svg viewBox="0 0 80 60" className="food-art" aria-hidden="true">
    <defs>
      <linearGradient id={`${uid}-crust`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c99662"/><stop offset="1" stopColor="#996749"/></linearGradient>
      <radialGradient id={`${uid}-tom`} cx="35%" cy="30%" r="68%"><stop offset="0" stopColor="#d68673"/><stop offset=".55" stopColor="#b95e4c"/><stop offset="1" stopColor="#88473c"/></radialGradient>
      <linearGradient id={`${uid}-cuc`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a8b38c"/><stop offset="1" stopColor="#637b5b"/></linearGradient>
    </defs>
    {ingredient==='bread'?<>
      <ellipse cx="40" cy="54" rx="28" ry="5" fill="#3a2212" opacity=".18"/>
      <path d="M16 51V26C1 11 21 2 40 6C59 2 79 11 64 26V51Q40 55 16 51Z" fill={`url(#${uid}-crust)`} stroke="#8a654b" strokeWidth="2.1"/>
      <path d="M21 48V26C9 15 24 8 40 11C56 8 71 15 59 26V48Q40 50 21 48Z" fill="#ead4ac"/>
      <path d="M24 44V27C16 19 27 14 40 16C53 14 64 19 56 27V44Z" fill="#fbebcd" opacity=".7"/>
      <ellipse cx="32" cy="31" rx="2.5" ry="1.8" fill="#dfc28f"/><circle cx="48" cy="27" r="1.9" fill="#dfc28f"/>
      <ellipse cx="42" cy="39" rx="3" ry="1.7" fill="#dfc28f"/><circle cx="28" cy="40" r="1.4" fill="#dfc28f"/>
      <path d="M22 28l4-3m5 23 6-1m10-2 5 1m5-16 4-6" stroke="#a77b55" strokeWidth="1.15" opacity=".55" fill="none"/>
      <path d="M27 21q13-4 26 0" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
    </>:ingredient==='cheese'?<>
      <ellipse cx="42" cy="54" rx="32" ry="5.5" fill="#3a2212" opacity=".18"/>
      <path d="M9 34L60 9L75 24L20 43Z" fill="#f1d394" stroke="#8f6122" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M9 34L20 43V54L9 46Z" fill="#bc8951" stroke="#8f6122" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M20 43L75 24V44L20 54Z" fill="#e4b775" stroke="#8f6122" strokeWidth="1.9" strokeLinejoin="round"/>
      <ellipse cx="39" cy="40" rx="6" ry="4.5" fill="#b87d24"/><ellipse cx="38" cy="41.2" rx="4.4" ry="3.2" fill="#e0a43b"/>
      <ellipse cx="59" cy="35" rx="4.5" ry="3.4" fill="#b87d24"/><ellipse cx="58" cy="36" rx="3.2" ry="2.3" fill="#e0a43b"/>
      <ellipse cx="28" cy="47" rx="3" ry="2.2" fill="#b87d24"/><ellipse cx="49" cy="23" rx="5" ry="2.3" fill="#e3ad42"/>
      <path d="M18 33l39-19" stroke="#fff9d6" strokeWidth="1.6" strokeLinecap="round" opacity=".75"/>
    </>:ingredient==='tomato'?<>
      <ellipse cx="40" cy="55" rx="24" ry="5" fill="#3a2212" opacity=".2"/>
      <ellipse cx="40" cy="35" rx="26" ry="21.5" fill={`url(#${uid}-tom)`} stroke="#87493f" strokeWidth="2"/>
      <path d="M21 29q3-11 13-13" fill="none" stroke="#ffd2c4" strokeWidth="3.6" strokeLinecap="round" opacity=".88"/>
      <path d="M28 47q15 9 26-2m-33-7 2 5" fill="none" stroke="#e6a981" strokeWidth="1.1" opacity=".7"/>
      <circle cx="23" cy="36" r="2" fill="#ffe3d9" opacity=".82"/>
      <path d="M40 19L24 12L34 12L39 4L43 12L56 11L46 19L52 25L40 20L28 25Z" fill="#618748" stroke="#395229" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M40 18l-1-12q2-3 5-2" fill="none" stroke="#486934" strokeWidth="2.2" strokeLinecap="round"/>
    </>:<>
      <ellipse cx="41" cy="53" rx="30" ry="5" fill="#3a2212" opacity=".18"/>
      <ellipse cx="42" cy="31" rx="30" ry="15" transform="rotate(-26 42 31)" fill={`url(#${uid}-cuc)`} stroke="#5b7150" strokeWidth="2"/>
      <path d="M27 28l32-15M32 36l31-15" stroke="#a6ca87" strokeWidth="2" strokeLinecap="round" opacity=".65"/>
      <circle cx="52" cy="23" r="1.4" fill="#466838"/><circle cx="62" cy="24" r="1.3" fill="#466838"/><circle cx="44" cy="35" r="1.4" fill="#466838"/>
      <ellipse cx="20" cy="42" rx="10" ry="13.5" transform="rotate(-26 20 42)" fill="#e7f0c9" stroke="#4b6b3c" strokeWidth="2"/>
      <ellipse cx="20" cy="42" rx="6.5" ry="9" transform="rotate(-26 20 42)" fill="#cfe0a3" stroke="#9ab874" strokeWidth="1"/>
      <g fill="#f7fae8">
        <ellipse cx="18" cy="38" rx="1.2" ry="2.2" transform="rotate(-20 18 38)"/>
        <ellipse cx="22" cy="40" rx="1.2" ry="2.2" transform="rotate(25 22 40)"/>
        <ellipse cx="19" cy="45" rx="1.2" ry="2.2" transform="rotate(-30 19 45)"/>
        <ellipse cx="23" cy="45" rx="1.2" ry="2.2" transform="rotate(15 23 45)"/>
      </g>
    </>}
  </svg>;
}
function Chef({vlad=false,busy=false}:{vlad?:boolean;busy?:boolean}){
  const uid=useId().replace(/:/g,'');
  return <svg viewBox="0 0 100 100" className={`kitchen-chef ${busy?'is-cooking':''}`} aria-hidden="true">
    <defs>
      <radialGradient id={`${uid}-skin`} cx="40%" cy="35%" r="65%"><stop offset="0" stopColor="#f3d6bb"/><stop offset="1" stopColor="#d7ac94"/></radialGradient>
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
      <path d="M25 46q-2-14 10-18h30q12 4 10 18q-10-10-25-9q-15-1-25 9Z" fill="#6b5046" stroke="#4a362f" strokeWidth="1.6"/>
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
