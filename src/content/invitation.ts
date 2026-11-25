import type { StoryState } from '../engine/types';
import type { SaveV1 } from '../state/types';
export const invitationTitle='Может, как-нибудь увидимся?';
export const invitationText=[
  'можно заглянуть в кафе или выбраться на прогулку.',
  'а если захочется спокойного вечера — поиграть во что-нибудь или посмотреть фильм вместе.',
];
export type MeetingChoice='game'|'movie'|'cafe'|'walk'|'decline';
export const invitationReplies:Record<MeetingChoice,{heroine:string;vlad:string}>={
  game:{heroine:'Давай устроим игровой вечер.',vlad:'отлично. подберу кооператив на двоих — батарейки во втором геймпаде в этот раз проверю лично.'},
  movie:{heroine:'Хочу киновечер.',vlad:'договорились. можем взять сильную драму в духе «Интерстеллара» или выбрать что-то полегче вместе.'},
  cafe:{heroine:'Давай встретимся в кафе.',vlad:'с удовольствием. найдём уютный столик у окна — и в этот раз обещаю не ронять коробки у входа.'},
  walk:{heroine:'Я бы погуляла с тобой вживую.',vlad:'мне очень нравится план. выберем красивый маршрут у воды, а зонтик на всякий случай не забуду.'},
  decline:{heroine:'Пока воздержусь от встречи.',vlad:'всё хорошо, без малейшей спешки. рад, что ты прошла эту историю.'},
};
export const continuationOptions:{value:MeetingChoice;label:string}[]=[
  {value:'cafe',label:'Встретиться в кафе'},
  {value:'walk',label:'Погулять вместе'},
  {value:'game',label:'Игровой вечер'},
  {value:'movie',label:'Киновечер'},
  {value:'decline',label:'Пока воздержусь'},
];
export function continuationDraft(value:SaveV1['continuation'],story?:StoryState){
  const team=story?.teamName==='dumpling'?'Команда «Пельмень и партнёры»':story?.teamName==='calm'?'Команда «Два спокойных человека»':story?.teamName==='accident'?'Наш «Отдел случайных побед»':'Я';
  const sky=story?.constellation==='cat'?'под созвездием Пончика':story?.constellation==='controllers'?'как второй игрок':story?.constellation==='teapot'?'по праву созвездия Чайника':'';
  switch(value){
    case 'game':return `${team} на связи — пять встреч в игре позади! Пора проверить в деле настоящий второй геймпад (надеюсь, с заряженными батарейками 😄). Когда сыграем?`;
    case 'movie':return `Пять случайных встреч пройдены! Хочу устроить с тобой настоящий киновечер — чур за саундтрек и выбор хорошей драмы отвечаем вместе. Когда тебе удобно?`;
    case 'cafe':return `Прошла все пять встреч! Предлагаю перенестись за настоящий столик с горячим чаем ${sky?`(${sky}) `:''}— только чур не забывать зонтик под котом 😊 Когда увидимся?`;
    case 'walk':return `Пять встреч в истории позади — теперь хочу выбраться с тобой на настоящую вечернюю прогулку с чаем навынос. Когда пойдём проверять погоду?`;
    case 'decline':return 'Спасибо за эту тёплую историю 😊 Пока воздержусь от встречи, но проходить её было очень приятно.';
    case 'public':return 'Пять встреч пройдены! Давай выберемся в уютное кафе или на прогулку — когда тебе удобно?';
    case 'chat':return 'Прошла историю, получилось очень тепло! Давай пока продолжим общаться здесь 😊';
    default:return '';
  }
}
