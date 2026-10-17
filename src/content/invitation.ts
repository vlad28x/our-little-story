import type { StoryState } from '../engine/types';
import type { SaveV1 } from '../state/types';
export const invitationIntro=['слушай, а помнишь тот игровой вечер?','я тут снова два геймпада подготовил','и даже проверил оба на этот раз'];
export const invitationEcho:Record<NonNullable<StoryState['controllerReaction']>,string>={tease:'полторы штуки больше не выдаю за комплект',help:'запасные батарейки тоже рядом. спасибо за прошлый раз',absurd:'скамейка запасных сегодня пустует'};
export const invitationText='можем устроить игровой вечер у меня. или киновечер — с фильмом, пледом и чем-нибудь вкусным. если хочется выбраться из дома, давай в кафе или просто погуляем';
export type MeetingChoice='game'|'movie'|'cafe'|'walk'|'decline';
export const invitationBridges:Record<NonNullable<StoryState['ending']>,string>={
  romantic:'у шестой встречи уже есть название. осталось выбрать, как её проведём.',
  comic:'бюро случайных встреч работу продолжает. предлагаю следующую уже без сценария.',
  gaming:'команда у нас уже есть. хочется теперь выбраться из этой истории в настоящую встречу.',
  friendly:'мне было хорошо с тобой в этой истории. если тебе тоже хочется увидеться вживую, давай выберем, как.',
};
export function invitationConversation(story:StoryState):string[][]{return [
  [invitationBridges[story.ending??'friendly'],'хочу пригласить тебя на настоящую встречу. что тебе было бы по душе?'],
  [...invitationIntro,...(story.controllerReaction?[invitationEcho[story.controllerReaction]]:[])],
  [invitationText,'выбирай, что тебе ближе. если не хочется встречаться — можно просто отказаться, без объяснений.'],
];}
export const invitationReplies:Record<MeetingChoice,{heroine:string;vlad:string}>={
  game:{heroine:'Давай устроим игровой вечер у тебя.',vlad:'такс, тогда выбираем игру на двоих. вкусняшки с меня, удобный день подберём вместе.'},
  movie:{heroine:'Хочу киновечер у тебя.',vlad:'договорились. фильм выберем вместе. если половину вечера будем его выбирать — тоже неплохой план.'},
  cafe:{heroine:'Давай встретимся в кафе.',vlad:'давай. выберем уютное место и время, когда обоим удобно. коробку с жетонами могу оставить дома.'},
  walk:{heroine:'Я бы просто погуляла с тобой.',vlad:'мне нравится. маршрут выберем вместе, а дождь в программу включать не будем.'},
  decline:{heroine:'Я не хочу встречаться.',vlad:'понял. спасибо, что сказала прямо. ничего объяснять не нужно.'},
};
export const continuationOptions:{value:MeetingChoice;label:string}[]=[
  {value:'game',label:'Игровой вечер у тебя'},
  {value:'movie',label:'Киновечер у тебя'},
  {value:'cafe',label:'Встретиться в кафе'},
  {value:'walk',label:'Погулять вместе'},
  {value:'decline',label:'Отказаться'},
];
export function continuationDraft(value:SaveV1['continuation']){
  switch(value){
    case 'game':return 'Я прошла историю. Хочу устроить с тобой настоящее свидание — игровой вечер у тебя. Во что сыграем и когда нам обоим удобно?';
    case 'movie':return 'Я прошла историю. Хочу устроить с тобой настоящее свидание — киновечер у тебя. Давай выберем фильм и удобный день?';
    case 'cafe':return 'Я прошла историю. Хочу сходить с тобой на свидание в кафе. Давай выберем место и удобный день?';
    case 'walk':return 'Я прошла историю. Хочу сходить с тобой на свидание — погулять вместе. Давай выберем маршрут и удобный день?';
    // Preserve the original, deliberately undecided public-place preference.
    case 'public':return 'Я прошла историю. Давай сначала погуляем или зайдём в кафе — выберем удобный день?';
    case 'chat':return 'Я прошла историю. Мне пока хочется просто продолжить переписку.';
    default:return '';
  }
}
