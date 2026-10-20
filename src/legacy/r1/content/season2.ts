import type { BonusId, Run, SparkId, StoryState,EpisodeChapter } from '../engine/types';

export const sparkIds:SparkId[]=['c6.spark.voice','c6.spark.route','c6.spark.moment'];
export const bonusIds:BonusId[]=['c6.bonus.angel','c6.bonus.devil','c6.bonus.none'];
export const noteQuestion='Что могло бы заставить тебя задержаться со мной ещё немного?';
export function bonusFor(guide:StoryState['c6Guide'],chapter:EpisodeChapter=6):BonusId{return `c${chapter}.bonus.${guide??'none'}` as BonusId;}
export function allSparks(run:Pick<Run,'episode'|'chapter'>){return (episodes[run.chapter as EpisodeChapter]?.sparkIds??[]).length===3&&(episodes[run.chapter as EpisodeChapter].sparkIds as readonly SparkId[]).every(s=>run.episode?.sparks.includes(s));}
export function missionResult(story:StoryState,results:Run['results']){
  if(story.c10Guide){if(story.c10Guide==='none')return 'Без миссии';return story.c10Guide==='angel'&&story.c10Memory==='pause'?'Сохранила тихий момент':story.c10Guide==='devil'&&story.c10Memory==='initiative'?'Сохранила свой выбор':'Другой знак вечера';}
  if(story.c9Guide){if(story.c9Guide==='none')return 'Без миссии';return story.c9Guide==='angel'?(story.c9Memory!=='none'?'Вернула его слова в разговор':'Сегодня без цитат'):results['movie-setup']?.mode==='completed'?'Вечер устроен по-твоему':'Другой уютный план';}
  if(story.c8Guide){if(story.c8Guide==='none')return 'Без миссии';return story.c8Guide==='angel'?(story.c8Word!=='none'?'У вечера появилось имя':'Сегодня обошлись без названия'):results.dessert?.mode==='completed'?'Твоя идея на тарелке':'Получился другой вкусный план';}
  if(story.c7Guide){const answers=results['between-lines']?.answers;if(story.c7Guide==='none')return 'Без миссии';return story.c7Guide==='angel'&&answers?.[0]==='question'?'Задала свой вопрос':story.c7Guide==='devil'&&answers?.[1]==='lead'?'Выбрала поворот':'Разговор пошёл своим путём';}
  const route=results['evening-route'];
  if(story.c6Guide==='angel')return route?.stops.some(s=>s==='water')?'Тихая остановка найдена':'Сегодня получился другой план';
  if(story.c6Guide==='devil')return route?.mode==='own'?'Маршрут был твоим':'Сегодня получился другой план';
  return null;
}
export const missionTexts={angel:'Найдите минуту без спешки: выбери остановку у воды, если захочешь.',devil:'Сама выбери две остановки. Сегодня Влад следует твоему плану.',none:'Сегодня без миссии. Выбирай, как тебе нравится.'};

export const sparkIds7:SparkId[]=['c7.spark.voice','c7.spark.exchange','c7.spark.moment'];
export const bonusIds7:BonusId[]=['c7.bonus.angel','c7.bonus.devil','c7.bonus.none'];
export const noteQuestion7='Что тебе хотелось бы спросить у меня, если бы я обещал ответить честно?';
export const episodes={6:{sparkIds,bonusIds,guideKey:'c6Guide',noteKey:'c6Note',questionId:'s2.q6',question:noteQuestion,cardIds:['c6.hand','c6.lap','c6.home'],missionTexts},7:{sparkIds:sparkIds7,bonusIds:bonusIds7,guideKey:'c7Guide',noteKey:'c7Note',questionId:'s2.q7',question:noteQuestion7,cardIds:['c7.open','c7.promise','c7.calm'],missionTexts:{angel:'В первой ситуации задай свой честный вопрос, если интересно.',devil:'Сама предложи свернуть под арку.',none:'Сегодня без миссии. Выбирай, как тебе нравится.'}},8:{"sparkIds": ["c8.spark.plan", "c8.spark.make", "c8.spark.voice"], "bonusIds": ["c8.bonus.angel", "c8.bonus.devil", "c8.bonus.none"], "guideKey": "c8Guide", "noteKey": "c8Note", "questionId": "s2.q8", "question": "Как бы ты дала мне понять, что хочешь поцелуя?", "cardIds": ["c8.kiss", "c8.near", "c8.tea"], "missionTexts": {"angel": "Придумай вечеру маленькое название.", "devil": "Сама собери десерт.", "none": "Сегодня без задания."}},9:{"sparkIds": ["c9.spark.plan", "c9.spark.scene", "c9.spark.memory"], "bonusIds": ["c9.bonus.angel", "c9.bonus.devil", "c9.bonus.none"], "guideKey": "c9Guide", "noteKey": "c9Note", "questionId": "s2.q9", "question": "Какой момент этого вечера ты бы захотела продлить?", "cardIds": ["c9.kiss", "c9.hug", "c9.film"], "missionTexts": {"angel": "Верни его слова в разговор.", "devil": "Сама устрой этот вечер.", "none": "Сегодня без задания."}},10:{"sparkIds": ["c10.spark.plan", "c10.spark.memory", "c10.spark.light"], "bonusIds": ["c10.bonus.angel", "c10.bonus.devil", "c10.bonus.none"], "guideKey": "c10Guide", "noteKey": "c10Note", "questionId": "s2.q10", "question": "Что тебе хотелось бы оставить за кадром этой истории?", "cardIds": ["c10.goodnight", "c10.stay", "c10.private"], "missionTexts": {"angel": "Сохрани тихую паузу.", "devil": "Сохрани свой следующий шаг.", "none": "Сегодня без задания."}}} as const;
export function episodeStart(id:number,story:StoryState,results:Run['results']):StoryState{
 if(id!==7)return {...story};
 const route=results['evening-route'];if(!route)throw new Error('Не найден маршрут предыдущей встречи');
 return {...story,c7PreviousStop:route.mode==='skipped'?'skipped':route.stops[1]};
}

export const episodeChapters=[6,7,8,9,10] as const;
export function effectiveVenue(chapter:number,story:StoryState){return chapter===8?story.c8Place:chapter===9?story.c9Place:chapter===10?(story.c10Place==='home'||story.c10Move==='home'?'home':'terrace'):undefined;}
