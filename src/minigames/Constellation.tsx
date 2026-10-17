import { useReducer,useRef } from 'react';
import type { ConstellationResult } from '../engine/types';
import { constellationNames,starPoints,starReduce,starResult } from './constellationModel';
import { ConstellationArt } from '../ui/ConstellationArt';
export function Constellation({onComplete,onSound}:{onComplete:(result:ConstellationResult)=>void;onSound:()=>void}){
  const [s,dispatch]=useReducer(starReduce,{order:[],shape:null});const done=useRef(false);
  function finish(preset=false){const result=preset?{kind:'constellation' as const,outcome:'teapot' as const,usedPreset:true}:starResult(s);if(done.current||!result)return;done.current=true;onComplete(result);}
  return <section className="constellation-game" aria-labelledby="sky-title"><div className="search-heading"><div><span className="eyebrow">ВАШЕ МАЛЕНЬКОЕ НЕБО</span><h2 id="sky-title">Соедини четыре звезды</h2></div><span className="found-count" aria-live="polite">{s.order.length} / 4</span></div>
    <p className="small">Нажимай в любом порядке. Здесь нет неправильного созвездия.</p>
    <div className="star-board"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points={s.order.map(id=>starPoints[id].join(',')).join(' ')} fill="none" stroke="#f9dfa3" strokeWidth=".8" strokeLinejoin="round"/>{[[7,14],[90,12],[52,78],[13,40],[75,8],[46,54]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r=".4" fill="#fff7ed"/>)}</svg>{starPoints.map(([left,top],id)=><button key={id} className="star-target" style={{left:`${left}%`,top:`${top}%`}} aria-label={`Звезда ${id+1}`} aria-pressed={s.order.includes(id)} disabled={s.order.includes(id)} onClick={()=>{onSound();dispatch({type:'star',id});}}><span aria-hidden="true">✦</span><small>{s.order.includes(id)?s.order.indexOf(id)+1:''}</small></button>)}</div>
    <button className="text-button" disabled={!s.order.length} onClick={()=>dispatch({type:'undo'})}>Отменить последнюю звезду</button>
    {s.order.length===4?<><h3>На что похоже?</h3><p className="small">Название выбираешь ты. Рисунок не проходит проверку на сходство.</p><div className="sky-shapes">{(Object.keys(constellationNames) as ConstellationResult['outcome'][]).map(shape=><button key={shape} aria-pressed={s.shape===shape} onClick={()=>dispatch({type:'shape',shape})}><ConstellationArt shape={shape}/><span>{constellationNames[shape]}</span></button>)}</div><button className="primary full" disabled={!s.shape} onClick={()=>finish()}>Оставить наше созвездие →</button></>:<p className="sky-status" role="status">{s.order.length===0?'Выбери первую звезду.':`Ещё ${4-s.order.length}. Любое направление подойдёт.`}</p>}
    <button className="text-button full" onClick={()=>finish(true)}>Выбрать готовый чайник</button><p className="tiny">Без таймера. Готовая картинка тоже продолжит историю. После обновления страницы рисунок начнётся сначала.</p>
  </section>;
}
