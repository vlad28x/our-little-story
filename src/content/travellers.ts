import type {Run,StoryState} from '../engine/types';

// A crossing is committed by its narrated action. There is no mutable resource counter.
export function travellerResources(s:StoryState){
 const river=s.c10River==='bridge'?1:s.c10River==='ford'?2:0;
 const quarry=s.c10Quarry==='tunnel'?1:s.c10Quarry==='contour'?2:0;
 const night=s.c10Arrival==='upper'&&s.c10River==='ford'&&s.c10Quarry==='contour';
 const arrival=s.c10Arrival==='marsh'?1:s.c10Arrival==='upper'?(night?1:2):0;
 return {suns:5-river-quarry-arrival,bridge:s.c10River==='bridge'?'river':s.c10Arrival==='marsh'?'marsh':'carried',lantern:s.c10Quarry==='tunnel'||night?'empty':'charged',position:s.c10Arrival?'house':s.c10Quarry?'quarry':s.c10River?'river':'start',night};
}
export function travellerView(run:Run){
 const s=run.story,n=run.nodeId.split('.').at(-1)!;
 const resources=travellerResources(s);
 // The first night step uses the last sun; the following line moves both figures by lantern.
 if(n==='upperNight'&&run.lineIndex>=1&&!s.c10Arrival)return {...resources,suns:0,position:'last',night:true};
 return resources;
}
export const meeting10Options=[
 {value:'game',label:'Настолка вживую',detail:'открыть настоящую коробку на двоих.',motif:'token',reply:'договорились. с меня хорошая кооперативная коробка и чай — мостик через болото строим вместе.',draft:''},
 {value:'movie',label:'Киновечер',detail:'сильное кино, плед и вкусное печенье.',motif:'cinema',reply:'отличный план. с меня отборная драма (или «Интерстеллар», если захочешь космоса) и целое печенье без надломанных краёв.',draft:''},
 {value:'cook',label:'Готовка вдвоём',detail:'занять половину настоящей кухни.',motif:'tea-for-two',reply:'ловлю на слове. фартук и сыр беру на себя, рецепт выбираем в четыре руки.',draft:''},
 {value:'out',label:'Прогулка, кафе или мастер-класс',detail:'выбраться в город без спешки.',motif:'promenade',reply:'супер. можем заглянуть за чаем, пройтись у воды или вообще заглянуть на творческий мастер-класс.',draft:''},
 {value:'decline',label:'Пока воздержусь.',detail:'',motif:'envelope',reply:'понимаю, всё в полном порядке. спасибо, что прошла всю эту дорогу.',draft:''},
] as const;

export function continuation10Draft(value:typeof meeting10Options[number]['value'],story?:StoryState){
 const movieGenre=story?.c9HerMovie==='warm'?'тёплым камерным фильмом':story?.c9HerMovie==='mystery'?'фильмом-загадкой':'сильной драмой';
 switch(value){
  case 'game':return 'Оба путешественника дошли до домика, плёнка проявлена! Теперь хочу открыть с тобой настоящую настолку вживую. Когда встречаемся?';
  case 'movie':return `Десятая глава позади! Давай устроим настоящий киновечер с печеньем и ${movieGenre} — только чур под крышей, которая не боится дождя 😄 Когда устроим?`;
  case 'cook':return 'Все 12 кадров отсняты! Хочу занять свою законную половину кухни наяву и приготовить что-нибудь вкусное вдвоём. Когда готовим?';
  case 'out':return 'Прошла историю до самого финала! Хочу увидеться вживую — посидеть в уютном месте или сходить вместе на прогулку. Когда увидимся?';
  case 'decline':return 'Спасибо за все десять глав — получилось очень тепло и красиво. Пока воздержусь от встречи.';
  default:return '';
 }
}
