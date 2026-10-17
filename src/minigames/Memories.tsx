import { useRef,useState } from 'react';
import type { MemoriesResult,StoryState } from '../engine/types';
import { memoriesFor,type MemoryId } from '../content/memories';
import { Illustration } from '../ui/Illustration';
export function Memories({story,onComplete,onSound}:{story:StoryState;onComplete:(r:MemoriesResult)=>void;onSound:()=>void}){
  const memories=memoriesFor(story),[selected,setSelected]=useState<MemoryId|null>(null),[placed,setPlaced]=useState<(MemoryId|null)[]>([null,null,null]),[shown,setShown]=useState<MemoryId|null>(null),[message,setMessage]=useState('Выбери жетон, затем свободное место. Порядок любой.');const done=useRef(false);
  const current=memories.find(m=>m.id===shown);
  function place(index:number){if(placed[index]){setShown(placed[index]);return;}if(!selected){setMessage('Сначала выбери один из трёх жетонов.');return;}setPlaced(p=>p.map((id,i)=>i===index?selected:id));setShown(selected);setSelected(null);setMessage('Воспоминание на месте. Можно прочитать или выбрать следующее.');onSound();}
  function finish(outcome:MemoriesResult['outcome']){if(done.current||(outcome==='viewed'&&placed.some(id=>id===null)))return;done.current=true;onComplete({kind:'memories',outcome});}
  return <section className="memories-game" aria-labelledby="memories-title"><span className="eyebrow">ИЗ НАШИХ ВСТРЕЧ</span><h2 id="memories-title">Три маленьких воспоминания</h2><p className="small">На этих жетонах только ваша текущая история.</p>
    <div className="memory-tokens">{memories.map(m=><button key={m.id} disabled={placed.includes(m.id)} aria-pressed={selected===m.id} onClick={()=>{setSelected(m.id);setMessage(`${m.title}: выбери свободное место ниже.`);}}><Illustration kind={m.motif}/><span>{m.title}</span></button>)}</div>
    <div className="memory-slots" aria-label="Места для жетонов">{placed.map((id,i)=>{const m=memories.find(m=>m.id===id);return <button key={i} onClick={()=>place(i)} aria-label={m?`Вспомнить: ${m.title}`:`Место ${i+1}`}><Illustration kind={m?.motif??'envelope'}/><span>{m?.title??`Место ${i+1}`}</span></button>;})}</div>
    {current&&<div className="memory-recollection"><h3>{current.title}</h3>{current.lines.map((l,i)=><p key={i} className={l.speaker==='vlad'?'memory-vlad':''}>{l.speaker==='vlad'&&<b>Влад: </b>}{l.text}</p>)}</div>}
    <p role="status" className="small memory-status">{message}</p>{placed.every(Boolean)&&<button className="primary full" onClick={()=>finish('viewed')}>Закрыть альбом →</button>}<button className="text-button full" onClick={()=>finish('skipped')}>Положить вместе</button><p className="tiny">Без таймера. После обновления страницы расстановка начнётся сначала, сюжет сохранён.</p>
  </section>;
}
