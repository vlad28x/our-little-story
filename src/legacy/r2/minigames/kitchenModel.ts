import type { KitchenResult,StoryState } from '../engine/types';
export type Ingredient='bread'|'cheese'|'tomato'|'cucumber';
export type Recipe='toast'|'salad'|'sandwich';
export const recipes:Record<Recipe,{title:string;ingredients:[Ingredient,Ingredient]}>={toast:{title:'Тост',ingredients:['bread','cheese']},salad:{title:'Салат',ingredients:['tomato','cucumber']},sandwich:{title:'Бутерброд',ingredients:['bread','tomato']}};
export const ingredientNames:Record<Ingredient,string>={bread:'Хлеб',cheese:'Сыр',tomato:'Томат',cucumber:'Огурец'};
export const teamNames={dumpling:'Пельмень и партнёры',calm:'Два спокойных человека',accident:'Отдел случайных побед'};
export const rounds:Recipe[][]=[['toast','salad','sandwich'],['salad','sandwich','toast'],['sandwich','toast','salad']];
export type Order={id:number;recipe:Recipe;plate:'empty'|'first'|'working'|'ready'|'served'};
export type KitchenState={phase:'tutorial'|'ready'|'playing'|'between'|'done';mode:'timed'|'calm';style:NonNullable<StoryState['kitchenStyle']>;round:number;orders:Order[];selected:number;partner:{id:number;left:number;total:number}|null;passes:number;served:number;left:number;paused:boolean;lamp:boolean;message:string};
export type KitchenAction={type:'select';id:number}|{type:'ingredient';ingredient:Ingredient}|{type:'pass'}|{type:'serve'}|{type:'clear'}|{type:'tick';ms:number}|{type:'pause'}|{type:'resume'}|{type:'calm'}|{type:'start';mode:'timed'|'calm'}|{type:'next'}|{type:'end-round'}|{type:'lamp'};
function orders(list:Recipe[]):Order[]{return list.map((recipe,id)=>({id,recipe,plate:'empty'}));}
export function initialKitchen(style:KitchenState['style']):KitchenState{return {phase:'tutorial',style,mode:'timed',round:0,orders:orders(['toast','salad']),selected:0,partner:null,passes:0,served:0,left:25000,paused:false,lamp:true,message:'Пробуем без времени: выбери заказ, положи первый продукт и передай Владу.'};}
export function visibleOrders(s:KitchenState){return s.orders.filter(o=>o.plate!=='served').slice(0,2);}
export function kitchenOutcome(served:number):KitchenResult['outcome']{return served>=7?'feast':served>=3?'snack':'chaos';}
export function kitchenResult(s:KitchenState,skip=false):KitchenResult{return {kind:'kitchen',outcome:skip?'skipped':kitchenOutcome(s.served),served:s.served,mode:s.mode};}
function endRound(s:KitchenState):KitchenState{return {...s,phase:s.round===2?'done':'between',partner:null,paused:false,message:s.round===2?'Кухня закрывается. Настоящее печенье уже ждёт.':'Перерыв. Можно спокойно продолжить или выбрать режим без таймера.'};}
export function kitchenReduce(state:KitchenState,a:KitchenAction):KitchenState{
  const s=structuredClone(state);
  if(a.type==='pause')return {...s,paused:true};
  if(a.type==='resume')return {...s,paused:false};
  if(a.type==='calm')return s.phase==='ready'||s.phase==='between'||s.paused?{...s,mode:'calm'}:state;
  if(a.type==='lamp')return {...s,lamp:true};
  if(a.type==='start'&&s.phase==='ready')return {...s,phase:'playing',mode:a.mode,round:0,orders:orders(rounds[0]),selected:0,left:25000,passes:0,message:'Первый раунд. Ты начинаешь блюдо, Влад добавляет второй продукт.'};
  if(a.type==='next'&&s.phase==='between')return {...s,phase:'playing',round:s.round+1,orders:orders(rounds[s.round+1]),selected:0,left:25000,passes:0,paused:false,lamp:s.round!==1,message:s.round===0?'Нарисованный кот занял вывеску. Заказы по-прежнему видны.':'Декоративная лампа погасла. Готовить можно и так.'};
  if(s.paused||!['tutorial','playing'].includes(s.phase))return state;
  if(a.type==='end-round'&&s.phase==='playing'&&s.mode==='calm')return endRound(s);
  if(a.type==='tick'){
    if(!Number.isFinite(a.ms)||a.ms<=0)return state;
    // Only elapsed active time counts, including the remaining part of the final tick.
    const delta=s.phase==='playing'&&s.mode==='timed'?Math.min(s.left,a.ms):a.ms;
    if(s.partner){s.partner.left=Math.max(0,s.partner.left-delta);if(s.partner.left===0){const o=s.orders.find(o=>o.id===s.partner!.id)!;o.plate='ready';s.partner=null;s.message='Влад закончил. Выбери готовый заказ и нажми «Подать».';}}
    if(s.phase==='playing'&&s.mode==='timed'){s.left=Math.max(0,s.left-delta);if(s.left===0)return endRound(s);}
    return s;
  }
  if(a.type==='select'){if(!visibleOrders(s).some(o=>o.id===a.id))return state;s.selected=a.id;s.message='Заказ выбран. Рецепт написан на его карточке.';return s;}
  const o=s.orders.find(o=>o.id===s.selected);if(!o||o.plate==='served')return state;
  if(a.type==='ingredient'){
    if(o.plate!=='empty'){s.message='Первый продукт уже на месте. Передай тарелку Владу.';return s;}
    if(a.ingredient!==recipes[o.recipe].ingredients[0]){s.message='Этот продукт сейчас не нужен. Смотри первый продукт в рецепте — штрафа нет.';return s;}
    o.plate='first';s.message='Первый продукт на тарелке. Теперь «Передать Владу».';
  }else if(a.type==='pass'){
    if(s.partner){s.message='Влад сейчас закончит первую тарелку. Пока можно подготовить другую.';return s;}
    if(o.plate!=='first'){s.message='Сначала положи первый продукт из рецепта.';return s;}
    s.passes++;const total=s.style==='planner'?2400:s.passes===2?3000:1800;
    o.plate='working';s.partner={id:o.id,left:total,total};s.message='Влад добавляет второй продукт. Можно заняться другим заказом.';
  }else if(a.type==='serve'){
    if(o.plate!=='ready'){s.message='Пока рано подавать: сначала продукт, затем помощь Влада.';return s;}
    o.plate='served';if(s.phase==='playing')s.served++;
    s.message='Подано! Следующий заказ ждёт.';
    const next=visibleOrders(s)[0];if(next)s.selected=next.id;
    else if(s.phase==='tutorial'){s.phase='ready';s.passes=0;s.message='Обучение закончено. Выбери темп — результат от режима не зависит.';}
    else return endRound(s);
  }else if(a.type==='clear'){
    if(o.plate==='working'){s.message='Эта тарелка пока у Влада.';return s;}o.plate='empty';s.message='Тарелка очищена. Начнём с первого продукта.';
  }else return state;
  return s;
}
