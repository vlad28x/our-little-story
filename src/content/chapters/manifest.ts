import type { ChapterId } from '../../engine/types';
export const chapters: {id:ChapterId;title:string;available:boolean;code?:string;motif:string}[] = [
  {id:1,title:'Случайная встреча',available:true,motif:'Началось с маленькой неловкости'},
  {id:2,title:'Свидание пошло не по плану',available:true,code:'TEPLO-7M4K',motif:'Дождь, зонтик и один странный кот'},
  {id:3,title:'Игровой вечер',available:true,code:'DIVAN-9R2K',motif:'Дома у Влада. Почти два геймпада'},
  {id:4,title:'Разговор под звёздами',available:true,code:'NEBO-4L8N',motif:'Иногда можно просто помолчать'},
  {id:5,title:'А что, если это не конец?',available:true,code:'ESHCHE-6T3P',motif:'Место для ещё одной встречи'},
  {id:6,title:'Ещё пять минут',available:true,code:'VECHER-8F2N',motif:'Длинная дорога, два советчика и твой план'},
  {id:7,title:'Следующий вечер',available:false,motif:'Этот вечер ещё готовится'},
  {id:8,title:'Следующий вечер',available:false,motif:'Этот вечер ещё готовится'},
  {id:9,title:'Следующий вечер',available:false,motif:'Этот вечер ещё готовится'},
  {id:10,title:'Следующий вечер',available:false,motif:'Этот вечер ещё готовится'},
];
export function checkCode(input:string) { return chapters.find(c=>c.code===input.trim().toUpperCase()); }
export function chapterFromRoute(route:string):ChapterId|undefined{
  const value=Number(route.match(/^\/(?:play|result)\/(\d+)(?:\?|$)/)?.[1]);
  return chapters.some(c=>c.id===value)?value as ChapterId:undefined;
}
