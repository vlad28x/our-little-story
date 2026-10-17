import { useEffect, useRef, useState } from 'react';
import type { SearchResult } from '../engine/types';
import { Illustration } from '../ui/Illustration';
import { assetUrl } from '../content/assetManifest';
const places=[{id:'bag',label:'Сумка',token:true},{id:'mat',label:'Коврик',token:false},{id:'paper',label:'Листок',token:true},{id:'cat',label:'Кот',token:false},{id:'cup',label:'Стакан',token:true},{id:'umbrella',label:'Зонтик',token:false}];
export function TokenSearch({onComplete,onSound}:{onComplete:(result:SearchResult)=>void;onSound:()=>void}){
  const [opened,setOpened]=useState<string[]>([]);const [text,setText]=useState('Три жетона куда-то укатились. Осмотрись — спешить некуда.');const [hint,setHint]=useState(false);const busyUntil=useRef(0);const done=useRef(false);
  const found=places.filter(p=>p.token&&opened.includes(p.id)).length;
  useEffect(()=>{const timer=setTimeout(()=>setHint(true),20000);return()=>clearTimeout(timer);},[opened]);
  function open(id:string){if(opened.includes(id)||performance.now()<busyUntil.current)return;busyUntil.current=performance.now()+250;setOpened(v=>[...v,id]);setHint(false);onSound();
    const texts:Record<string,string>={bag:'Влад: один попытался уехать со мной',mat:'Ты: Это нарисованный.\nВлад: неплохая маскировка',paper:'Влад: этот сразу изучает цены',cat:'Влад: проверка пройдена. работать он не будет',cup:`Ты: ${found<2?'Ещё один':'Последний?'}\nВлад: считаем. я уже не доверяю коробке`,umbrella:'Зонтик чуть качается.\nВлад: хотя бы это на месте'};setText(texts[id]);}
  function finish(skip:boolean){if(done.current||(!skip&&found<3))return;done.current=true;onComplete({kind:'token-search',outcome:skip?'skipped':opened.length===3?'tidy':'detour',catNoticed:opened.includes('cat')});}
  return <section className="search-game" aria-labelledby="search-title"><div className="search-heading"><div><span className="eyebrow">МАЛЕНЬКОЕ РАССЛЕДОВАНИЕ</span><h2 id="search-title">Куда укатилось?</h2></div><span className="found-count" aria-live="polite">{found} / 3</span></div>
    <p className="small">Найди 3 жетона. Можно осмотреть все места.</p>
    <div className="search-grid">{places.map(p=><button key={p.id} className={`search-place ${opened.includes(p.id)?'opened':''}`} onClick={()=>open(p.id)} aria-pressed={opened.includes(p.id)} aria-label={`Осмотреть: ${p.label}`}>
      {p.id==='cat'?<img src={assetUrl('cat.idle')} alt=""/>:<Illustration kind={p.id}/>}
      <span>{p.label}</span>{opened.includes(p.id)&&<span className="found-marker">{p.token?'●●':'✓'}</span>}
    </button>)}</div>
    <p className="search-response" role="status">{text}</p>
    {hint&&<p className="small">Можно просто попросить Влада — вы всё равно справитесь вместе.</p>}
    {found===3&&<button className="primary full" onClick={()=>finish(false)}>Готово · все жетоны на месте →</button>}
    <button className="text-button full" onClick={()=>finish(true)}>Собрать вместе с Владом</button>
    <p className="tiny">Сюжет сохранён. После перезагрузки это короткое задание начнётся сначала.</p>
  </section>;
}
