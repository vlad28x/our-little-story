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
} as const;
export type EasterEggId=keyof typeof easterEggs;
export type ScenePropId=Exclude<EasterEggId,'hair'|'cat'|'cookie'|'controller'>;
// Availability follows authored scenes, never saved flags or cosmetic clicks.
export function sceneEggProps(background:string,sceneId:string):ScenePropId[]{
  const props:ScenePropId[]=[];
  if(background==='bg.home.living'&&!['c3.pad.dead','c3.pad.ready'].includes(sceneId)){
    props.push('blanket','mug');
    if(['c3.sofa','c3.pad.setup','c3.pad.press','c3.team','c3.role','c3.tutorial'].includes(sceneId)||['c3.mood.','c3.team.','c3.pad.echo.'].some(prefix=>sceneId.startsWith(prefix)))props.push('tv');
  }
  if(background==='bg.river.evening')props.push('star');
  if(background==='bg.cafe.sunset'&&sceneId.startsWith('c5.'))props.push('sign');
  return props;
}
