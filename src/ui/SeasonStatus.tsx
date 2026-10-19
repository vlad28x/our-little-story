import type { Run } from '../engine/types';
import { missionTexts,sparkIds } from '../content/season2';
export function SeasonStatus({run}:{run:Run}){
  return <div className="season-status"><span className="spark-count" aria-label={`Искры вечера: ${run.episode?.sparks.length??0} из 3`}>{sparkIds.map(id=><span key={id} aria-hidden="true" className={run.episode?.sparks.includes(id)?'spark-lit':''}>✦</span>)}<small>{run.episode?.sparks.length??0}/3</small></span>{run.story.c6Guide&&<details className="mission-note"><summary>{run.story.c6Guide==='none'?'Без миссии':'Маленькая миссия'}</summary><p>{missionTexts[run.story.c6Guide]}</p></details>}</div>;
}
