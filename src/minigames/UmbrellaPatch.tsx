import { useId,useRef,useState } from 'react';
import type { UmbrellaResult } from '../engine/types';
import { Illustration } from '../ui/Illustration';
const pieces = [
  {id:'leaf',title:'Листок',art:'leaf'},
  {id:'ribbon',title:'Лента',art:'ribbon-piece'},
  {id:'button',title:'Пуговица',art:'button-piece'},
  {id:'cloth',title:'Лоскут',art:'triangle-piece'},
  {id:'spoon',title:'Ложка',art:'spoon'},
] as const;
const holes = [
  {id:'circle',title:'Круг',piece:'button',message:'Пуговица закрыла круглую дырку. Влад придерживает край.'},
  {id:'triangle',title:'Треугольник',piece:'cloth',message:'Лоскут подошёл. Теперь дождю стало чуть сложнее.'},
  {id:'stripe',title:'Полоса',piece:'ribbon',message:'Лента на месте.'},
] as const;
export function UmbrellaPatch({onComplete,onSound}:{onComplete:(r:UmbrellaResult)=>void;onSound:()=>void}){
  const [selected,setSelected]=useState<string|null>(null),[solved,setSolved]=useState<string[]>([]),[message,setMessage]=useState('Выбери деталь, затем подходящее отверстие. Цвет не важен — смотри на форму.');
  const done=useRef(false);
  const canopyId=useId().replace(/:/g,'');
  const complete = solved.length === holes.length;
  function attach(hole:(typeof holes)[number]){
    if(solved.includes(hole.id))return;
    if(!selected){setMessage('Сначала выбери деталь под зонтиком.');return;}
    if(hole.piece===selected){
      setSolved(old=>[...old,hole.id]);
      setMessage(hole.message);
      onSound();
    }else setMessage('Эта сюда не садится. Ничего страшного — попробуй другую форму.');
    setSelected(null);
  }
  function finish(outcome:UmbrellaResult['outcome']){if(done.current||(outcome==='patched'&&!complete))return;done.current=true;onComplete({kind:'umbrella-patch',outcome});}
  return <section className="umbrella-game" aria-labelledby="umbrella-title"><div className="search-heading"><div><span className="eyebrow">ПОГОДА В МАЛЕНЬКОМ МАСШТАБЕ</span><h2 id="umbrella-title">Зонтик для витрины</h2></div><span className="found-count" aria-live="polite">{solved.length} / 3</span></div><p className="small">Настоящий зонтик цел. Поможем игрушечному?</p>
    <svg className="patch-canopy" viewBox="0 0 320 155" aria-hidden="true">
      <defs>
        <linearGradient id={`${canopyId}-cloth`} x2=".7" y2="1"><stop stopColor="#e8d8df"/><stop offset=".56" stopColor="#c3adca"/><stop offset="1" stopColor="#927892"/></linearGradient>
        <linearGradient id={`${canopyId}-center`} x2=".76" y2="1"><stop stopColor="#f2ddd6"/><stop offset="1" stopColor="#bca4bf"/></linearGradient>
      </defs>
      <ellipse cx="160" cy="147" rx="54" ry="7" fill="#3a2212" opacity=".15"/>
      <path d="M160 12V127q0 18 16 16q11-2 10-13" fill="none" stroke="#855a3b" strokeWidth="6.5" strokeLinecap="round"/>
      <path d="M160 12V127q0 18 16 16q11-2 10-13" fill="none" stroke="#b5835c" strokeWidth="2.2" strokeLinecap="round"/>
      <rect x="155" y="10" width="10" height="10" rx="3" fill="#d9b468" stroke="#7a5e34" strokeWidth="1.8"/>
      <path d="M18 96Q160 -42 302 96Q266 74 232 96Q196 74 160 96Q124 74 88 96Q54 74 18 96Z" fill={`url(#${canopyId}-cloth)`} stroke="#887287" strokeWidth="2.1" strokeLinejoin="round"/>
      <path d="M88 96Q114 38 160 22Q206 38 232 96Q196 74 160 96Q124 74 88 96Z" fill={`url(#${canopyId}-center)`}/>
      <path d="M160 22Q182 48 160 96Q124 74 88 96Q114 38 160 22Z" fill="#f6e1dc" opacity=".37"/>
      <path d="M88 96Q114 38 160 22Q206 38 232 96M160 22V96" fill="none" stroke="#91798f" strokeWidth="1.65"/>
      <path d="M29 88q26-12 54 1m13-2q28-16 57 2m15 0q27-16 55-2m13 1q28-11 53 0" stroke="#f1d9d3" strokeWidth="1.5" strokeDasharray="3 2.6" fill="none" opacity=".84"/>
      <path d="M58 46q-3 5 0 7q3-2 0-7ZM266 50q-3 5 0 7q3-2 0-7Z" fill="#fffaf2" opacity=".82"/>
      {solved.includes('circle')?<g transform="translate(99 63)">
        <circle cy="2" r="13" fill="#4f3d52" opacity=".18"/>
        <circle r="13" fill="#b4ccb8" stroke="#536b58" strokeWidth="2.2"/>
        <circle r="9" fill="none" stroke="#7c9881" strokeWidth="1.3"/>
        <circle cx="-3.5" cy="-3.5" r="1.5" fill="#4b5e4f"/><circle cx="3.5" cy="-3.5" r="1.5" fill="#4b5e4f"/>
        <circle cx="-3.5" cy="3.5" r="1.5" fill="#4b5e4f"/><circle cx="3.5" cy="3.5" r="1.5" fill="#4b5e4f"/>
        <path d="M-3.5-3.5l7 7M3.5-3.5l-7 7" stroke="#f7efdf" strokeWidth="1.6"/>
      </g>:<circle cx="99" cy="63" r="12" fill="#fff8ee" stroke="#70534f" strokeWidth="2" strokeDasharray="3.5 3"/>}
      {solved.includes('triangle')?<g>
        <path d="M179 41L164 69H194Z" fill="#efb9cb" stroke="#855164" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M179 47L169 65H189Z" fill="none" stroke="#fff2f6" strokeWidth="1.5" strokeDasharray="3 3"/>
      </g>:<path d="M178 42L164 67H192Z" fill="#fff8ee" stroke="#70534f" strokeWidth="2" strokeDasharray="3.5 3" strokeLinejoin="round"/>}
      {solved.includes('stripe')?<g>
        <path d="M219 67L254 78L249 91L214 80Z" fill="#f7d68b" stroke="#99713b" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M221 73L248 82" stroke="#c99545" strokeWidth="1.6" strokeDasharray="4 3"/>
      </g>:<path d="M220 69L252 79L248 90L216 80Z" fill="#fff8ee" stroke="#70534f" strokeWidth="2" strokeDasharray="3.5 3" strokeLinejoin="round"/>}
    </svg>
    <div className="patch-holes" aria-label="Отверстия зонтика">{holes.map(h=><button key={h.id} disabled={solved.includes(h.id)} onClick={()=>attach(h)} aria-label={`Закрепить: ${h.title}`}><span aria-hidden="true">{h.id==='circle'?'○':h.id==='triangle'?'△':'▰'}</span>{h.title}{solved.includes(h.id)?' ✓':''}</button>)}</div>
    <div className="patch-pieces" aria-label="Детали для ремонта">{pieces.map(p=><button key={p.id} aria-pressed={selected===p.id} disabled={holes.some(h=>h.piece===p.id&&solved.includes(h.id))} onClick={()=>{setSelected(p.id);setMessage(`${p.title}: выбери отверстие подходящей формы.`);}}><Illustration kind={p.art}/><span>{p.title}</span></button>)}</div>
    <p className="patch-status" role="status">{complete?'Маленький зонтик снова готов к витрине.':message}</p>
    {complete&&<button className="primary full" onClick={()=>finish('patched')}>Готово · зонтик для витрины спасён →</button>}
    <button className="text-button full" onClick={()=>finish('borrowed')}>Попросить готовый чехол</button><button className="text-button full" onClick={()=>finish('skipped')}>Пропустить занятие</button><p className="tiny">Без таймера. После перезагрузки это короткое задание начнётся сначала.</p>
  </section>;
}
