import { useEffect,useReducer,useRef } from 'react';
import type { ConstellationResult } from '../engine/types';
import { constellationDrawings,drawingStars,initialStars,skyShapes,starReduce,starResult,type SkyShape } from './constellationModel';
import { ConstellationArt } from '../ui/ConstellationArt';
export function Constellation({onComplete,onSound,suspended=false}:{onComplete:(result:ConstellationResult)=>void;onSound:()=>void;suspended?:boolean}){
  const [s,dispatch]=useReducer(starReduce,initialStars),done=useRef(false);
  const keyboard=useRef(false),nextButton=useRef<HTMLButtonElement>(null),finishButton=useRef<HTMLButtonElement>(null),choiceButton=useRef<HTMLButtonElement>(null);
  const stars=s.shape?drawingStars(s.shape):[],next=stars[s.progress],drawing=s.shape?constellationDrawings[s.shape]:null,result=starResult(s),complete=!!result;
  useEffect(()=>{if(!keyboard.current||suspended)return;(s.shape?complete?finishButton:nextButton:choiceButton).current?.focus({preventScroll:true});},[s.shape,s.progress,suspended,complete]);
  function finish(preset=false){const value=preset?{kind:'constellation' as const,outcome:'teapot' as const,usedPreset:true}:starResult(s);if(suspended||done.current||!value)return;done.current=true;onComplete(value);}
  function select(shape:SkyShape,fromKeyboard:boolean){if(suspended||done.current)return;keyboard.current=fromKeyboard;dispatch({type:'shape',shape});}
  return <section className="constellation-game" aria-labelledby="sky-title"><div className="search-heading"><div><span className="eyebrow">ВАШЕ МАЛЕНЬКОЕ НЕБО</span><h2 id="sky-title">{drawing?drawing.name:'Какое созвездие нарисуем?'}</h2></div>{drawing&&<span className="found-count" aria-label="Соединено звёзд">{s.progress} / {stars.length}</span>}</div>
    {!s.shape?<><p className="small">Выбери рисунок. Потом нажимай на подсвеченную звезду — линии сложатся в созвездие.</p><div className="sky-shapes">{skyShapes.map((shape,index)=><button ref={index===0?choiceButton:undefined} disabled={suspended} key={shape} onClick={e=>select(shape,e.detail===0)}><ConstellationArt shape={shape}/><span>{constellationDrawings[shape].label}</span></button>)}</div></>:<>
      <p className="small sky-instruction">{result?'Созвездие готово. Детали загораются последними.':'Нажимай на мерцающую звезду. Между контурами линия начнётся отдельно.'}</p>
      <div className="star-board" aria-label="Небо для рисунка"><ConstellationArt shape={s.shape} progress={s.progress} label={drawing!.description}/>{next&&<button ref={nextButton} className="star-target" style={{left:`${next.point[0]/288*100}%`,top:`${next.point[1]/264*100}%`}} disabled={suspended} aria-label={`Звезда ${next.id+1}`} aria-describedby="sky-instruction-status" onKeyDown={e=>{keyboard.current=true;if(e.repeat)e.preventDefault();}} onClick={()=>{if(suspended||done.current)return;onSound();dispatch({type:'star',id:next.id});}}><span aria-hidden="true">✦</span></button>}</div>
      <p id="sky-instruction-status" className="sky-status" role="status">{next?`${next.stroke>0&&stars[s.progress-1]?.stroke!==next.stroke?'Новый контур · ':''}${drawing!.strokes[next.stroke].name} · ${next.stroke+1} из ${drawing!.strokes.length}`:'Всё на своих местах. Можно оставить рисунок или что-нибудь поправить.'}</p>
      <div className="sky-tools"><button className="text-button" aria-label="Отменить последнюю звезду" disabled={suspended||!s.progress} onClick={()=>dispatch({type:'undo'})}>Отменить звезду</button><button className="text-button" disabled={suspended} onClick={e=>{keyboard.current=e.detail===0;dispatch({type:'reset'});}}>Другой рисунок</button></div>
      <button ref={finishButton} className="primary full" disabled={suspended||!result} onClick={()=>finish()}>Оставить наше созвездие →</button>
    </>}
    <button className="text-button full" disabled={suspended} onClick={()=>finish(true)}>Выбрать готовый чайник</button><p className="tiny">Без таймера. Готовая картинка тоже продолжит историю. После обновления страницы рисунок начнётся сначала.</p>
  </section>;
}
