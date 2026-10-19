import { useState } from 'react';
import type { EveningRouteResult,RouteAction,RouteDraft,RouteStop } from '../engine/types';
import { routeLabels,routeStops } from './eveningRouteModel';

const positions:Record<RouteStop,[number,number]>={water:[58,146],lights:[146,61],window:[237,143]};
export function RouteMapArt({stops=[]}:{stops?:readonly RouteStop[]}){
  return <svg className="evening-map-art" viewBox="0 0 288 220" fill="none" aria-hidden="true">
    <rect width="288" height="220" rx="24" fill="#32354e"/>
    <path d="M0 190Q80 165 142 190T288 183V220H0Z" fill="#596981"/>
    <path d="M0 199Q76 174 145 200T288 194M25 212L55 209M181 211L214 214" stroke="#b1b7bf" opacity=".35"/>
    <path d="M12 145Q74 203 115 131T272 150" stroke="#c6b6a0" strokeWidth="22" opacity=".22"/>
    <path d="M12 145Q74 203 115 131T272 150" stroke="#efd8b6" strokeDasharray="2 6" opacity=".45"/>
    <path d="M100 15Q150 43 198 18" stroke="#e9d3ac"/>
    {[105,122,140,159,178,195].map((x,i)=><circle key={x} cx={x} cy={[19,25,29,29,25,19][i]} r="3" fill="#ffe6a4"/>)}
    {[[18,28],[64,57],[253,27],[205,81],[270,91]].map(([x,y])=><path key={x} d={`M${x-2} ${y}h4m-2-2v4`} stroke="#e6d4b3" opacity=".6"/>)}
    <path d="M38 160H82M43 160v-20m13 20v-20m13 20v-20m9 20v-20M39 139H82" stroke="#c9bbc1" strokeWidth="2"/>
    <path d="M147 78v-36m-10 12h20l-4-13h-12Z" stroke="#f1d9aa" strokeWidth="2"/>
    <path d="M218 160v-37h37v37m-41-37 7-10h31l7 10m-24 7v23h14v-23Z" stroke="#ebcab8" strokeWidth="2" fill="#d28f8c22"/>
    {stops.length===2&&<path d={`M${positions[stops[0]].join(' ')} Q145 196 ${positions[stops[1]].join(' ')}`} stroke="#ffdea4" strokeWidth="3" strokeDasharray="5 6"/>}
  </svg>;
}
export function EveningRoute({draft,onAction,onComplete,suspended=false}:{draft:RouteDraft;onAction:(a:RouteAction)=>void;onComplete:(r:EveningRouteResult)=>void;suspended?:boolean}){
  const [message,setMessage]=useState('');
  function toggle(stop:RouteStop){
    if(draft.selected.length===2&&!draft.selected.includes(stop)){setMessage('Две остановки уже выбраны. Убери одну, чтобы заменить.');return;}
    setMessage('');onAction({kind:'toggle-stop',stop});
  }
  const suggestion=draft.phase==='suggestion';const selected=suggestion?['lights','water'] as RouteStop[]:draft.selected;
  return <section className="evening-route" aria-labelledby="route-title">
    <span className="eyebrow">МАЛЕНЬКАЯ ПРОГУЛКА</span><h2 id="route-title">Пять минут с запасом</h2>
    <p className="small">Выбери две разные остановки. Куда сначала — решаешь ты.</p>
    <fieldset disabled={suspended} className="route-fieldset">
      <div className="evening-map"><RouteMapArt stops={selected}/>{routeStops.map(stop=>{const i=selected.indexOf(stop);return <button key={stop} className={`route-point route-point-${stop}`} style={{left:`${positions[stop][0]/288*100}%`,top:`${positions[stop][1]/220*100}%`}} aria-label={routeLabels[stop].title} aria-pressed={i>=0} disabled={suggestion||suspended} onClick={()=>toggle(stop)}><span aria-hidden="true">{i>=0?i+1:'✧'}</span></button>;})}</div>
      {suggestion?<div className="route-suggestion"><p>Влад предлагает: фонари → вода. Подойдёт?</p><div className="stack"><button className="primary" onClick={()=>onComplete({kind:'evening-route',mode:'shared',stops:['lights','water']})}>Да, пойдём</button><button onClick={()=>{setMessage('');onAction({kind:'back-to-select'});}}>Я выберу иначе</button></div></div>:<>
        <div className="route-stops">{routeStops.map(stop=><button key={stop} aria-pressed={draft.selected.includes(stop)} onClick={()=>toggle(stop)}><span className="route-stop-title">{routeLabels[stop].title}</span><small>{routeLabels[stop].description}</small></button>)}</div>
        <ol className="route-itinerary">{[0,1].map(i=><li key={i}><small>{i===0?'Сначала':'Потом'}</small>{draft.selected[i]?<button aria-label={`Убрать остановку: ${routeLabels[draft.selected[i]].title}`} onClick={()=>toggle(draft.selected[i])}>{routeLabels[draft.selected[i]].title} <span aria-hidden="true">×</span></button>:<span>Выбери остановку</span>}</li>)}</ol>
        <button className="primary full" disabled={draft.selected.length!==2} onClick={()=>onComplete({kind:'evening-route',mode:'own',stops:[draft.selected[0],draft.selected[1]]})}>Пойдём так</button>
        <div className="route-tools"><button className="text-button" disabled={!draft.selected.length} onClick={()=>{setMessage('');onAction({kind:'reset'});}}>Изменить маршрут</button><button className="text-button" onClick={()=>{setMessage('');onAction({kind:'show-suggestion'});}}>Выберем вместе</button></div>
      </>}
      <p className="route-status small" role="status">{message}</p>
      <button className="text-button full" onClick={()=>onComplete({kind:'evening-route',mode:'skipped',stops:[]})}>Пройтись без карты</button><p className="tiny">Прогулка продолжится, карта не обязательна.</p>
    </fieldset>
  </section>;
}
