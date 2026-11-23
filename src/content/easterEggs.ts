// Optional scene reactions. These never emit engine commands or achievements.
export const easterEggs={
  hair:{label:'Потрогать кудри Влада',text:'я их укладывал. у них другое мнение'},
  cat:{label:'Погладить Пончика',text:'так. теперь он уверен, что ты пришла к нему'},
  cookie:{label:'Взять печеньку',text:'план был дожить до начала игры'},
  blanket:{label:'Приподнять край пледа',text:'это тебе. я даже плед положил'},
  controller:{label:'Проверить второй геймпад',text:'проверяешь? справедливо'},
  tv:{label:'Посмотреть на телевизор',text:'он вообще без приглашения'},
  mug:{label:'Коснуться кружки',text:'это чай. он сам'},
  star:{label:'Коснуться звезды над набережной',text:'успела? говорить не обязательно'},
  sign:{label:'Посмотреть на вывеску кафе',text:'ну, вывеска явно что-то знает'},
  camera:{label:'Проверить общий фотоаппарат',text:'эй, кадр не трать! шучу, я проверял, взведено ли колёсико'},
  kiosk6:{label:'Заглянуть в зелёный киоск',text:'если возьмём ещё одну камеру, нам придётся гулять до весны'},
  waterWindow6:{label:'Постучать по отражению в воде',text:'постучалась? кажется, там правда кто-то чай пьёт'},
  leaves6:{label:'Коснуться кленовых листьев',text:'осень сегодня явно старается с декорациями'},
  lantern6:{label:'Посмотреть на уличный фонарь',text:'вот он — главный претендент влезть мне за спину в кадр'},
  cafeSign6:{label:'Разглядеть вывеску на доме',text:'если там тоже есть чай, Нина нас простит. но не сразу'},
  noPhoto7:{label:'Проверить значок на стекле',text:'вижу-вижу, убираю. я законопослушный зритель'},
  poster7:{label:'Разглядеть афишу у входа',text:'я всё ещё ставлю на лестницу. хотя рядом с тобой уже ни в чём не уверен'},
  handle7:{label:'Коснуться латунной ручки',text:'пропускаю вперёд. как приличный спутник в галерею'},
  spots7:{label:'Посмотреть на софиты галереи',text:'так. нас сейчас точно попросят не трогать освещение'},
  bench7:{label:'Проверить скамейку в зале',text:'официально забронировал. билеты в первый ряд только у нас'},
  window7:{label:'Выглянуть в арочное окно',text:'отсюда почти видно нашу набережную. мы везде оставляем следы'},
  kettle8:{label:'Проверить чайник на кухне',text:'чайник уже понял намёк и сам готов кипеть'},
  utensils8:{label:'Задеть кухонные приборы',text:'не волнуйся, в этот раз это настоящая кухня — без таймера и пожара'},
  sugar8:{label:'Заглянуть в сахарницу',text:'проверяешь, не перепутал ли я сахар с солью? было один раз. давно'},
  fridge8:{label:'Посмотреть на холодильник',text:'магнитик с планом ужина — мой главный талисман'},
  lamp8:{label:'Коснуться кухонной лампы',text:'для танца на пяти квадратных метрах свет идеальный'},
  blankets9:{label:'Потрогать пледы в ящике',text:'плед дежурит на посту. я вообще за любую причину сесть поближе'},
  garland9:{label:'Посмотреть на гирлянды',text:'если погаснет проектор, будем смотреть на гирлянды'},
  archChairs9:{label:'Заглянуть за стулья в арке',text:'вон он! кот с афиши всё-таки пришёл на премьеру'},
  bakery9:{label:'Заглянуть в витрину булочной',text:'запах корицы сквозь стекло — это вообще законно?'},
  bookcase9:{label:'Посмотреть на книги в шкафчике',text:'кажется, эти книги нас официально отблагодарили'},
  dropbox9:{label:'Потрогать ящик приёма плёнок',text:'обещаю не подглядывать, если мне их отдадут раньше тебя. почти обещаю'},
  traffic9:{label:'Посмотреть на светофор',text:'если пропустим ещё один зелёный, я точно не расстроюсь'},
  cafeLamp10:{label:'Коснуться абажура над столиком',text:'та самая лампа. кажется, она нас запомнила ещё с рассыпанных жетонов'},
  cafeShelf10:{label:'Посмотреть на полку у стены',text:'интересно, сколько ещё наших жетонов Нина прячет по всему залу'},
  cat10:{label:'Погладить Пончика',text:'он уверен, что всю партию выиграл именно он'},
  floorLamp10:{label:'Коснуться торшера у дивана',text:'верхний свет сегодня точно не понадобится'},
  sofaBlanket10:{label:'Потрогать вязаный плед',text:'диван всё ещё помнит твою половину'},
  tv10:{label:'Посмотреть на телевизор',text:'даже телевизор сегодня решил нас не отвлекать'},
  glasses10:{label:'Коснуться стаканов на столе',text:'теперь на этом столе всегда хочется ставить две чашки'},
  morningWindow10:{label:'Посмотреть в утреннее окно',text:'вот такое утро я бы вообще не перематывал'},
} as const;
export type EasterEggId=keyof typeof easterEggs;
export type ScenePropId=Exclude<EasterEggId,'hair'|'cat'|'cookie'|'controller'|'camera'>;
export type SeasonSceneryId=Exclude<ScenePropId,'blanket'|'tv'|'mug'|'star'|'sign'|'cat10'>;
type SceneryBox=readonly [cx:number,cy:number,width:number,height:number];
type Scenery=Partial<Record<SeasonSceneryId,SceneryBox>>;

const riverside:Scenery={kiosk6:[.75,.46,.12,.13],waterWindow6:[.35,.47,.12,.09],leaves6:[.13,.14,.13,.1]};
const bakery:Scenery={bakery9:[.42,.48,.16,.12],bookcase9:[.16,.55,.12,.2]};

// Coordinates refer to the original paintings, before object-fit cropping.
export const seasonScenery:Partial<Record<string,Scenery>>={
  'bg.photo6.sun':riverside,
  'bg.photo6.shade':riverside,
  'bg.photo6.upper':{leaves6:[.22,.12,.14,.1],lantern6:[.09,.22,.08,.11],cafeSign6:[.92,.33,.08,.08]},
  'bg.gallery7.outside':{poster7:[.17,.27,.17,.17],noPhoto7:[.28,.44,.055,.05],handle7:[.32,.49,.07,.06]},
  'bg.gallery7.hall':{spots7:[.49,.055,.15,.08],bench7:[.89,.56,.12,.12],window7:[.35,.18,.13,.10]},
  'bg.supper8.kitchen':{utensils8:[.19,.25,.08,.08],kettle8:[.24,.33,.07,.08],sugar8:[.374,.59,.06,.07],fridge8:[.848,.42,.07,.1],lamp8:[.92,.27,.08,.10]},
  'bg.courtyard9.open':{blankets9:[.135,.60,.10,.12],garland9:[.48,.27,.15,.07],archChairs9:[.916,.54,.09,.11]},
  'bg.courtyard9.canopy':{blankets9:[.087,.72,.12,.15],garland9:[.61,.12,.18,.08]},
  'bg.courtyard9.arch':{blankets9:[.11,.78,.12,.14],archChairs9:[.90,.73,.13,.17]},
  'bg.courtyard9.books':bakery,
  'bg.courtyard9.books-closed':bakery,
  'bg.courtyard9.lab':{dropbox9:[.455,.49,.115,.13],traffic9:[.667,.222,.06,.10]},
  'bg.courtyard9.lab-red':{traffic9:[.687,.278,.06,.10]},
  'bg.travellers10.cafe':{cafeLamp10:[.15,.16,.10,.10],cafeShelf10:[.706,.13,.16,.09]},
  'bg.travellers10.home':{floorLamp10:[.125,.27,.11,.11],sofaBlanket10:[.125,.53,.12,.14],tv10:[.81,.33,.18,.15]},
  'bg.travellers10.morning':{glasses10:[.282,.62,.12,.09],morningWindow10:[.62,.22,.19,.20]},
};

// Availability follows authored scenes, never saved flags or cosmetic clicks.
export function sceneEggProps(background:string,sceneId:string):ScenePropId[]{
  const props:ScenePropId[]=[];
  if(background==='bg.home.living'&&!['c4.pad.dead','c4.pad.ready'].includes(sceneId)){
    props.push('blanket','mug');
    if(['c4.sofa','c4.pad.setup','c4.pad.press','c4.team','c4.role','c4.tutorial'].includes(sceneId)||['c4.mood.','c4.team.','c4.pad.echo.'].some(prefix=>sceneId.startsWith(prefix)))props.push('tv');
  }
  if(background==='bg.river.evening')props.push('star');
  if(background==='bg.cafe.sunset'&&sceneId.startsWith('c5.'))props.push('sign');
  props.push(...Object.keys(seasonScenery[background]??{}) as SeasonSceneryId[]);
  if(background==='bg.travellers10.cafe')props.push('cat10');
  return props;
}
