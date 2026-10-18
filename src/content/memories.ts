import type { Line,StoryState } from '../engine/types';
import { teamNames } from '../minigames/kitchenModel';
import { constellationNames } from '../minigames/constellationModel';
export type MemoryId='meeting'|'game'|'sky';
export type Memory={id:MemoryId;title:string;motif:string;lines:Line[]};
const V=(text:string):Line=>({speaker:'vlad',text});
const N=(text:string):Line=>({speaker:'narrator',text});
export function memoriesFor(story:StoryState):Memory[]{
  const plan=story.plan==='tea'?'Тот первый чай оказался хорошим поводом остаться.':story.plan==='coop'?'Сначала собирали жетоны, потом решили достроить игровой мостик.':'Вы тогда решили продолжить знакомство как эксперимент по нелепостям.';
  const search=story.searchResult==='tidy'?'три точных находки. ты быстро разобралась.':story.searchResult==='detour'?'мы тогда провели целое расследование. зато всё нашлось.':'хорошо, что можно было просто собрать вместе. не каждую задачу надо делать одной.';
  const kitchen=story.kitchenResult==='feast'?'На экране в тот вечер получился целый пир.':story.kitchenResult==='snack'?'Один виртуальный бутерброд уверенно заменял половину меню.':story.kitchenResult==='chaos'?'Тарелки были почти пустыми, зато настоящие вкусняшки — на месте.':'Виртуальная кухня осталась на потом. Для перерыва настоящего печенья вполне хватило.';
  return [
    {id:'meeting',title:'Знакомство',motif:'token',lines:[N(plan),V(search),V('кажется, коробка всё-таки привела нас куда надо.')]},
    {id:'game',title:'Игровой вечер',motif:'controller',lines:[N(kitchen),V(`«${teamNames[story.teamName!].toLowerCase()}» — хорошее название. я его запомнил.`),V(story.kitchenStyle==='planner'?'с распределением работы у нас получилось спокойно.':'с импровизацией было весело. даже когда я ненадолго зависал над тарелкой.')]},
    {id:'sky',title:'Набережная',motif:'star',lines:[N(`Ваш рисунок называется «${constellationNames[story.constellation!]}». Маленькая история под звёздами.`),V(story.wish==='adventure'?'ты загадала больше маленьких приключений. мне нравится, что у них нет обязательного масштаба.':'ты загадала больше спокойных вечеров. тот у реки хорошо подходил.'),V('приятно, что можно просто посидеть. и это тоже будет встреча.')]},
  ];
}
