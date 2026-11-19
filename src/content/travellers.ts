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
 {value:'game',label:'Настолка',detail:'открыть новую коробку.',motif:'token',reply:'давай. подберём игру на двоих, а день и место решим вместе.',draft:'Хочу встретиться и сыграть с тобой в новую настолку. Давай выберем игру, день и место?'},
 {value:'movie',label:'Киновечер',detail:'выбрать фильм и запастись вкусным.',motif:'cinema',reply:'по одному варианту с каждого. потом договоримся, что смотрим и где.',draft:'Хочу посмотреть с тобой фильм. Давай предложим по варианту и договоримся, когда и где встретиться?'},
 {value:'cook',label:'Готовка вдвоём',detail:'приготовить что-нибудь, что оба ещё не пробовали.',motif:'tea-for-two',reply:'я за. выберем блюдо и разделим готовку.',draft:'Давай приготовим что-нибудь вместе? Рецепт выберем вдвоём, а потом договоримся, когда и где.'},
 {value:'out',label:'Прогулка или кафе',detail:'выбраться и никуда не спешить.',motif:'promenade',reply:'давай погуляем или посидим в кафе. что тебе сейчас хочется?',draft:'Хочу выбраться с тобой на прогулку или в кафе. Давай договоримся, куда и когда?'},
 {value:'decline',label:'Пока воздержусь.',detail:'',motif:'envelope',reply:'хорошо. спасибо, что поиграла.',draft:'Сейчас пока воздержусь от встречи. Спасибо за историю.'},
] as const;
