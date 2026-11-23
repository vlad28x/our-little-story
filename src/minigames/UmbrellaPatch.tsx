import { useRef,useState } from 'react';
import type { UmbrellaResult } from '../engine/types';
import { Illustration } from '../ui/Illustration';
const pieces=[{id:'button',title:'Пуговица',art:'button-piece'},{id:'cloth',title:'Лоскут',art:'triangle-piece'},{id:'ribbon',title:'Лента',art:'ribbon-piece'},{id:'leaf',title:'Листок',art:'leaf'},{id:'spoon',title:'Ложка',art:'spoon'}];
const holes=[{id:'circle',title:'Круг',piece:'button'},{id:'triangle',title:'Треугольник',piece:'cloth'},{id:'stripe',title:'Полоса',piece:'ribbon'}];
export function UmbrellaPatch({onComplete,onSound}:{onComplete:(r:UmbrellaResult)=>void;onSound:()=>void}){
  const [selected,setSelected]=useState<string|null>(null),[solved,setSolved]=useState<string[]>([]),[message,setMessage]=useState('Выбери деталь, затем подходящее отверстие. Цвет не важен — смотри на форму.');
  const done=useRef(false);
  function attach(id:string){if(solved.includes(id))return;if(!selected){setMessage('Сначала выбери деталь под зонтиком.');return;}const hole=holes.find(h=>h.id===id)!;if(hole.piece===selected){setSolved(old=>[...old,id]);setMessage(id==='circle'?'Пуговица закрыла круглую дырку. Влад придерживает край.':id==='triangle'?'Лоскут подошёл. Теперь дождю стало чуть сложнее.':'Лента на месте. Маленький зонтик снова готов к витрине.');onSound();}else setMessage('Эта сюда не садится. Ничего страшного — попробуй другую форму.');setSelected(null);}
  function finish(outcome:UmbrellaResult['outcome']){if(done.current||(outcome==='patched'&&solved.length!==3))return;done.current=true;onComplete({kind:'umbrella-patch',outcome});}
  return <section className="umbrella-game" aria-labelledby="umbrella-title"><div className="search-heading"><div><span className="eyebrow">ПОГОДА В МАЛЕНЬКОМ МАСШТАБЕ</span><h2 id="umbrella-title">Зонтик для витрины</h2></div><span className="found-count" aria-live="polite">{solved.length} / 3</span></div><p className="small">Настоящий зонтик цел. Поможем игрушечному?</p>
    <svg className="patch-canopy" viewBox="0 0 320 155" aria-hidden="true">
      <ellipse cx="160" cy="147" rx="54" ry="7" fill="#3a2212" opacity=".15"/>
      <path d="M160 12V127q0 18 16 16q11-2 10-13" fill="none" stroke="#855a3b" strokeWidth="6.5" strokeLinecap="round"/>
      <path d="M160 12V127q0 18 16 16q11-2 10-13" fill="none" stroke="#b5835c" strokeWidth="2.2" strokeLinecap="round"/>
      <rect x="155" y="10" width="10" height="10" rx="3" fill="#d9b468" stroke="#7a5e34" strokeWidth="1.8"/>
      <path d="M18 96Q160 -42 302 96Q266 74 232 96Q196 74 160 96Q124 74 88 96Q54 74 18 96Z" fill="#cec3e6" stroke="#624a5e" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M88 96Q114 38 160 22Q206 38 232 96Q196 74 160 96Q124 74 88 96Z" fill="#dfd7f2"/>
      <path d="M160 22Q182 48 160 96Q124 74 88 96Q114 38 160 22Z" fill="#ebe5f8" opacity=".68"/>
      <path d="M88 96Q114 38 160 22Q206 38 232 96M160 22V96" fill="none" stroke="#6d5569" strokeWidth="2.2"/>
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
    <div className="patch-holes" aria-label="Отверстия зонтика">{holes.map(h=><button key={h.id} disabled={solved.includes(h.id)} onClick={()=>attach(h.id)} aria-label={`Закрепить: ${h.title}`}><span aria-hidden="true">{h.id==='circle'?'○':h.id==='triangle'?'△':'▰'}</span>{h.title}{solved.includes(h.id)?' ✓':''}</button>)}</div>
    <div className="patch-pieces" aria-label="Детали для ремонта">{pieces.map(p=><button key={p.id} aria-pressed={selected===p.id} disabled={holes.some(h=>h.piece===p.id&&solved.includes(h.id))} onClick={()=>{setSelected(p.id);setMessage(`${p.title}: выбери отверстие подходящей формы.`);}}><Illustration kind={p.art}/><span>{p.title}</span></button>)}</div>
    <p className="search-response" role="status">{message}</p>{solved.length===3&&<button className="primary full" onClick={()=>finish('patched')}>Готово · зонтик для витрины спасён →</button>}<button className="text-button full" onClick={()=>finish('borrowed')}>Попросить готовый чехол</button><button className="text-button full" onClick={()=>finish('skipped')}>Пропустить занятие</button><p className="tiny">Без таймера. После перезагрузки это короткое задание начнётся сначала.</p>
  </section>;
}
