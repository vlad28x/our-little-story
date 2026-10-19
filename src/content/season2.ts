import type { BonusId, Run, SparkId, StoryState } from '../engine/types';

export const sparkIds:SparkId[]=['c6.spark.voice','c6.spark.route','c6.spark.moment'];
export const bonusIds:BonusId[]=['c6.bonus.angel','c6.bonus.devil','c6.bonus.none'];
export const noteQuestion='Что могло бы заставить тебя задержаться со мной ещё немного?';
export function bonusFor(guide:StoryState['c6Guide']):BonusId{return guide==='angel'?'c6.bonus.angel':guide==='devil'?'c6.bonus.devil':'c6.bonus.none';}
export function allSparks(run:Pick<Run,'episode'>){return sparkIds.every(s=>run.episode?.sparks.includes(s));}
export function missionResult(story:StoryState,results:Run['results']){
  const route=results['evening-route'];
  if(story.c6Guide==='angel')return route?.stops.some(s=>s==='water')?'Тихая остановка найдена':'Сегодня получился другой план';
  if(story.c6Guide==='devil')return route?.mode==='own'?'Маршрут был твоим':'Сегодня получился другой план';
  return null;
}
export const missionTexts={angel:'Найдите минуту без спешки: выбери остановку у воды, если захочешь.',devil:'Сама выбери две остановки. Сегодня Влад следует твоему плану.',none:'Сегодня без миссии. Выбирай, как тебе нравится.'};
