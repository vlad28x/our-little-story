import { useState } from 'react';
import type { MemoryId,SecretId,EpisodeChapter } from '../engine/types';
import type { ChapterRecord } from '../state/types';
import { memoryRegistry,secretRegistry } from '../content/season2';
import { routeLabels } from '../minigames/eveningRouteModel';
import { SavedPersonalNote } from './PersonalNote';
import { Modal } from './Modal';
import { SavedSharedWord } from './SharedWord';
import { DessertArt } from './DessertArt';
import { BookmarkArt } from './BookmarkArt';
import { SilentFilmArt } from './SilentFilmArt';

export function MemoryCollection({ids}:{ids:MemoryId[]}){
 if(!ids.length)return null;
 return <section className="memory-collection"><h2>Маленькие моменты</h2>{([6,7,8,9,10] as const).map(chapter=>{
  const found=(Object.keys(memoryRegistry) as MemoryId[]).filter(id=>ids.includes(id)&&memoryRegistry[id].chapter===chapter);
  return found.length?<div className="memory-group" key={chapter}><h3>Встреча {chapter}</h3><ul>{found.map(id=><li key={id}><span aria-hidden="true">✧ </span>{memoryRegistry[id].title}</li>)}</ul></div>:null;
 })}</section>;
}
export function SecretCollection({ids}:{ids:SecretId[]}){
 const [opened,setOpened]=useState<SecretId|null>(null);const secret=opened?secretRegistry[opened]:undefined;
 if(!ids.length)return null;
 return <section className="bonus-collection"><h2>Маленькие секреты вечера</h2><div className="bonus-buttons">{(Object.keys(secretRegistry) as SecretId[]).filter(id=>ids.includes(id)).map(id=><button key={id} onClick={()=>setOpened(id)}>Записка после встречи {secretRegistry[id].chapter}{id.endsWith('.secret.evening')?' · прежний сценарий':''} <span aria-hidden="true">✉</span></button>)}</div>{secret&&<Modal title="Записка на память" onClose={()=>setOpened(null)}>{secret.lines.map((line,i)=><p key={i} className={`bonus-line bonus-${line.speaker}`}>{line.speaker==='angel'?'Ангел: ':line.speaker==='devil'?'Дьяволёнок: ':''}{line.text}</p>)}</Modal>}</section>;
}
export function EpisodeResult({record,mode,chapter=6}:{record:ChapterRecord;chapter?:EpisodeChapter;mode:'campaign'|'trial'}){
 const route=record.results['evening-route'],memory=record.episode?.memory;
 return <div className="episode-result">{memory&&<p className="episode-memory"><span aria-hidden="true">✧ </span>{memoryRegistry[memory].title}</p>}{route&&route.mode!=='skipped'&&<p className="small episode-route-summary">{route.stops.map(s=>routeLabels[s].title).join(' → ')}</p>}{record.episode?.secret&&<SecretCollection ids={[record.episode.secret]}/>}{chapter===8&&record.results.dessert&&<div className="episode-decor"><DessertArt topping={record.results.dessert.topping} mark={record.results.dessert.mark}/></div>}{chapter===8&&<SavedSharedWord record={record} mode={mode}/>} {chapter===9&&<div className="episode-decor"><SilentFilmArt frame={2}/></div>}{chapter===10&&<div className="episode-decor"><BookmarkArt memory={record.story.c10Memory}/></div>}<SavedPersonalNote key={record.attemptId} record={record} mode={mode} chapter={chapter}/></div>;
}
