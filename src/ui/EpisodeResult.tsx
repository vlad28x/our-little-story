import { useState } from 'react';
import type { BonusId } from '../engine/types';
import type { ChapterRecord } from '../state/types';
import { missionResult } from '../content/season2';
import { chapter6 } from '../content/chapters/ch06';
import { routeLabels } from '../minigames/eveningRouteModel';
import { SavedPersonalNote } from './PersonalNote';
import { Modal } from './Modal';
import { AdviserPortrait } from './AdviserPortrait';

export function BonusCollection({ids}:{ids:BonusId[]}){
  const [opened,setOpened]=useState<BonusId|null>(null);
  const node=opened?chapter6.nodes[opened]:undefined;
  if(!ids.length)return null;
  return <section className="bonus-collection"><h2>Маленький секрет вечера</h2><div className="bonus-buttons">{ids.map(id=><button key={id} onClick={()=>setOpened(id)}><span aria-hidden="true">✉</span> {id.endsWith('angel')?'Записка ангела':id.endsWith('devil')?'Коварный план':'Два советчика'}</button>)}</div>{opened&&node?.kind==='dialogue'&&<Modal title="Записка советчиков" onClose={()=>setOpened(null)}><div className="bonus-advisers"><AdviserPortrait kind="angel"/><AdviserPortrait kind="devil"/></div>{node.lines.map((line,i)=><p key={i} className={`bonus-line bonus-${line.speaker}`}>{line.speaker==='angel'?'Ангел: ':line.speaker==='devil'?'Дьяволёнок: ':''}{line.text}</p>)}</Modal>}</section>;
}
export function EpisodeResult({record,mode}:{record:ChapterRecord;mode:'campaign'|'trial'}){
  const route=record.results['evening-route'];const mission=missionResult(record.story,record.results);
  return <div className="episode-result"><p className="episode-sparks">✦ Искры вечера: {record.episode?.sparks.length??0} из 3</p>{route&&route.mode!=='skipped'&&<p className="small episode-route-summary">{route.stops.map(s=>routeLabels[s].title).join(' → ')}</p>}{mission&&<p className="small">{mission}</p>}{record.episode?.bonus&&<BonusCollection ids={[record.episode.bonus]}/>}<SavedPersonalNote key={record.attemptId} record={record} mode={mode}/></div>;
}
