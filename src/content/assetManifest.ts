import type { Emotion } from '../engine/types';
type Asset={file:string;alt:string;status:'generated'|'original-vector'};
// Register each shipped asset before the manifest is exported. Scene rendering
// must never depend on later mutations that can be stale across a dev update.
export const assetManifest:Readonly<Record<string,Asset>> = Object.freeze({
  'bg.cafe.entry':{file:'backgrounds/cafe-entry.webp',alt:'',status:'generated'},
  'bg.cafe.sunset':{file:'backgrounds/cafe-sunset.webp',alt:'',status:'generated'},
  'vlad.elegant.smile':{file:'characters/vlad/elegant-smile.webp',alt:'Влад в чёрном пиджаке и водолазке',status:'generated'},
  'vlad.elegant.neutral':{file:'characters/vlad/elegant-smile.webp',alt:'Влад в чёрном пиджаке и водолазке',status:'generated'},
  'vlad.elegant.warm':{file:'characters/vlad/elegant-smile.webp',alt:'Влад в чёрном пиджаке и водолазке',status:'generated'},
  'vlad.elegant.awkward':{file:'characters/vlad/elegant-awkward.webp',alt:'Влад в чёрном пиджаке и водолазке',status:'generated'},
  'vlad.elegant.thinking':{file:'characters/vlad/elegant-awkward.webp',alt:'Влад в чёрном пиджаке и водолазке',status:'generated'},
  'vlad.elegant.surprised':{file:'characters/vlad/elegant-awkward.webp',alt:'Влад в чёрном пиджаке и водолазке',status:'generated'},
  'vlad.elegant.laugh':{file:'characters/vlad/elegant-laugh.webp',alt:'Влад в чёрном пиджаке и водолазке',status:'generated'},
  'bg.cafe.window':{file:'backgrounds/cafe-window.webp',alt:'',status:'generated'},
  'bg.rain.awning':{file:'backgrounds/rain-awning.webp',alt:'',status:'generated'},
  'bg.rain.arcade':{file:'backgrounds/rain-arcade.webp',alt:'',status:'generated'},
  'bg.river.evening':{file:'backgrounds/river-evening.webp',alt:'',status:'generated'},
  'vlad.city.warm':{file:'characters/vlad/city-smile.webp',alt:'Влад в сером пальто и шарфе',status:'generated'},
  'bg.home.living':{file:'backgrounds/home-living.webp',alt:'',status:'generated'},
  'cat.idle':{file:'characters/cat.webp',alt:'Пончик — кремовый полосатый кот',status:'generated'},
  'nina.neutral':{file:'characters/nina.webp',alt:'Нина, хозяйка кафе',status:'generated'},
  'vlad.city.neutral':{file:'characters/vlad/city-neutral.webp',alt:'Влад в сером пальто и шарфе',status:'generated'},
  'vlad.city.smile':{file:'characters/vlad/city-smile.webp',alt:'Влад в сером пальто и шарфе',status:'generated'},
  'vlad.city.awkward':{file:'characters/vlad/city-awkward.webp',alt:'Влад в сером пальто и шарфе',status:'generated'},
  'vlad.city.thinking':{file:'characters/vlad/city-thinking.webp',alt:'Влад в сером пальто и шарфе',status:'generated'},
  'vlad.city.laugh':{file:'characters/vlad/city-laugh.webp',alt:'Влад в сером пальто и шарфе',status:'generated'},
  'vlad.city.surprised':{file:'characters/vlad/city-surprised.webp',alt:'Влад в сером пальто и шарфе',status:'generated'},
  'vlad.casual.neutral':{file:'characters/vlad/casual-smile.webp',alt:'Влад в домашней футболке',status:'generated'},
  'vlad.casual.smile':{file:'characters/vlad/casual-smile.webp',alt:'Влад в домашней футболке',status:'generated'},
  'vlad.casual.warm':{file:'characters/vlad/casual-smile.webp',alt:'Влад в домашней футболке',status:'generated'},
  'vlad.casual.awkward':{file:'characters/vlad/casual-awkward.webp',alt:'Влад в домашней футболке',status:'generated'},
  'vlad.casual.thinking':{file:'characters/vlad/casual-awkward.webp',alt:'Влад в домашней футболке',status:'generated'},
  'vlad.casual.surprised':{file:'characters/vlad/casual-awkward.webp',alt:'Влад в домашней футболке',status:'generated'},
  'vlad.casual.laugh':{file:'characters/vlad/casual-laugh.webp',alt:'Влад в домашней футболке',status:'generated'},
});
export const emotions:Emotion[]=['neutral','smile','awkward','thinking','laugh','surprised'];
export function assetUrl(id:string) { const a=assetManifest[id]; if(!a)throw new Error(`Unknown asset ${id}`); return `${import.meta.env.BASE_URL}assets/${a.file}`; }
