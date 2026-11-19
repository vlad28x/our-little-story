import type { SaveV1 } from '../state/types';
export const invitationTitle='Может, как-нибудь увидимся?';
export const invitationText=[
  'можно заглянуть в кафе или выбраться на прогулку.',
  'а если захочется спокойного вечера — поиграть во что-нибудь или посмотреть фильм вместе.',
];
export type MeetingChoice='game'|'movie'|'cafe'|'walk'|'decline';
export const invitationReplies:Record<MeetingChoice,{heroine:string;vlad:string}>={
  game:{heroine:'Давай устроим игровой вечер.',vlad:'такс, тогда выбираем игру на двоих. вкусняшки с меня, удобный день подберём вместе.'},
  movie:{heroine:'Хочу киновечер.',vlad:'договорились. фильм выберем вместе. если половину вечера будем его выбирать — тоже неплохой план.'},
  cafe:{heroine:'Давай встретимся в кафе.',vlad:'давай. выберем уютное место и время, когда обоим удобно.'},
  walk:{heroine:'Я бы просто погуляла с тобой.',vlad:'мне нравится. маршрут выберем вместе, а дождь в программу включать не будем.'},
  decline:{heroine:'Пока воздержусь от встречи.',vlad:'хорошо, не торопимся. спасибо, что прошла эту историю.'},
};
export const continuationOptions:{value:MeetingChoice;label:string}[]=[
  {value:'cafe',label:'Встретиться в кафе'},
  {value:'walk',label:'Погулять вместе'},
  {value:'game',label:'Игровой вечер'},
  {value:'movie',label:'Киновечер'},
  {value:'decline',label:'Пока воздержусь'},
];
export function continuationDraft(value:SaveV1['continuation']){
  switch(value){
    case 'game':return 'Я прошла историю. Хочу устроить с тобой игровой вечер. Во что сыграем и когда нам обоим удобно?';
    case 'movie':return 'Я прошла историю. Хочу устроить с тобой киновечер. Давай выберем фильм и удобный день?';
    case 'cafe':return 'Я прошла историю. Хочу встретиться с тобой в кафе. Давай выберем место и удобный день?';
    case 'walk':return 'Я прошла историю. Хочу погулять вместе с тобой. Давай выберем маршрут и удобный день?';
    case 'decline':return 'Спасибо за историю 😊 Пока воздержусь от встречи, но было приятно пройти её.';
    // Preserve the original, deliberately undecided public-place preference.
    case 'public':return 'Я прошла историю. Давай сначала погуляем или зайдём в кафе — выберем удобный день?';
    case 'chat':return 'Я прошла историю. Мне пока хочется просто продолжить переписку.';
    default:return '';
  }
}
