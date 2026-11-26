import type { EasterEggId } from './easterEggs';
import type { ChapterId,EpisodeChapter } from '../engine/types';

export const achievements = [{id:'cat-supervisor',title:'Начальник найден',description:'Познакомились с Пончиком, пока искали жетоны.'},{id:'dry-plan',title:'Прогноз без дыр',description:'Собрали игрушечный зонтик для осенней витрины.'},{id:'own-sky',title:'Своё небо',description:'Собрали свой рисунок из звёзд.'},{id:'full-table',title:'Стол на всех',description:'Подали все девять заказов в любом режиме.'},{id:'five-meetings',title:'Пять встреч',description:'У этой истории появился твой финал.'}];

export const afterCreditsSecrets=[
  {id:'camera',chapter:6,title:'Кадр про запас',motif:'camera',hint:'На прогулке кто-то уже проверил, взведено ли колёсико.',description:'Вы проверили колёсико общего фотоаппарата. Плёнка готова к следующему кадру.'},
  {id:'noPhoto7',chapter:7,title:'Экспонат без снимка',motif:'gallery',hint:'У входа в галерею одно из правил нарисовано прямо на стекле.',description:'Табличка «Не снимать» у дверей галереи напомнила Владу убрать фотоаппарат.'},
  {id:'kettle8',chapter:8,title:'Чайник понял намёк',motif:'tea',hint:'Кто на кухне первым догадывается, что пора пить чай?',description:'Ваш чайник и без подсказки понял, что пора кипеть.'},
  {id:'garland9',chapter:9,title:'Свет во дворике',motif:'cinema',hint:'Даже если экран погаснет, кое-что во дворике продолжит светить.',description:'У двоих во дворике есть запасной сеанс — огоньки над рядами.'},
  {id:'cat10',chapter:10,title:'Пончик выиграл партию',motif:'box',hint:'Присмотрись к тому, кто устроился рядом с настольной игрой.',description:'Пончик занял своё место у настолки и уверен, что выиграл именно он.'},
] as const satisfies readonly {id:EasterEggId;chapter:EpisodeChapter;title:string;motif:string;hint:string;description:string}[];

const firstSeasonEggs=['nina','cat','cookie','blanket','controller','tv','mug','star','sign'] as const satisfies readonly EasterEggId[];

export const sceneSecretIds=[...firstSeasonEggs,...afterCreditsSecrets.map(secret=>secret.id)];
export type SceneSecretId=typeof sceneSecretIds[number];

export function sceneSecretId(id:EasterEggId,chapter:ChapterId):SceneSecretId|undefined{
  if(chapter<=5)return id==='tvSleep'?'tv':firstSeasonEggs.find(egg=>egg===id);
  return afterCreditsSecrets.find(secret=>secret.id===id&&secret.chapter===chapter)?.id;
}
