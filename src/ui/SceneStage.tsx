// @refresh reset
import { useRef,useState } from 'react';
import { assetUrl } from '../content/assetManifest';
import type { Emotion } from '../engine/types';
import { Illustration } from './Illustration';
import { KitchenControls } from './KitchenControls';
import { SceneEasterEggs } from './SceneEasterEggs';
import { sceneEggProps,type EasterEggId } from '../content/easterEggs';
import { AdviserPortrait } from './AdviserPortrait';
import { SilentFilmArt } from './SilentFilmArt';
import { BookmarkArt } from './BookmarkArt';
import { DessertArt } from './DessertArt';
import { drinkNames } from '../minigames/movieSetupModel';
import type { StoryState,DessertResult,MovieDrink } from '../engine/types';
import { ShopBreakSign } from './ShopBreakSign';
export function SceneStage({background='bg.cafe.entry',emotion='smile',speaker,showCat=true,sceneId='intro',reserveRemote=false,bench,souvenir,catAtCounter=false,easterEggs=false,interactionContext=sceneId,reducedMotion=false,onEasterSound,advisers,galleryPlace,characterId,word,light,filmFrame,bookmark,fade=false,dessert,drink}:{dessert?:DessertResult;drink?:MovieDrink;characterId?:string;word?:string;light?:'warm'|'dim'|'unchanged';filmFrame?:0|1|2;bookmark?:StoryState['c10Memory'];fade?:boolean;galleryPlace?:'arch'|'window';background?:string;emotion?:Emotion;speaker?:string;showCat?:boolean;sceneId?:string;reserveRemote?:boolean;bench?:'near'|'space';souvenir?:'patched'|'borrowed'|'skipped';catAtCounter?:boolean;easterEggs?:boolean;interactionContext?:string;reducedMotion?:boolean;onEasterSound?:()=>void;advisers?:'angel'|'devil'|'both'}){
  const stage=useRef<HTMLDivElement>(null);
  // Keep the plate while its optional hotspots unmount during the kitchen or pause.
  const [cookieTaken,setCookieTaken]=useState(false);
  // Hints stay dismissed through dialogue, pause and minigames during this visit.
  const [discoveredEggs,setDiscoveredEggs]=useState<ReadonlySet<EasterEggId>>(()=>new Set());
  const [failedUrls,setFailedUrls]=useState<string[]>([]);
  const [attempts,setAttempts]=useState<Record<string,number>>({});
  const location=background==='bg.s2.kitchen.morning'?'Дома у Влада · доброе утро':background==='bg.s2.kitchen.evening'?'Дома у Влада · на чай':background==='bg.s2.cinema.courtyard'?'Кинодворик «Паузы» · фильм подождёт':background==='bg.s2.cafe.terrace'?'Терраса «Паузы» · последний вечер':background==='bg.home.living'&&sceneId.startsWith('c9.')?'Дома у Влада · киновечер':background==='bg.home.living'&&sceneId.startsWith('c10.')?'Дома у Влада · оставим свет?':background==='bg.s2.gallery.evening'?'Галерея · между строк':background==='bg.s2.window.evening'?'У витрины · вечерний перерыв':background==='bg.cafe.sunset'?'Снова в «Паузе» · закат':background==='bg.river.evening'?'Набережная · тихий вечер':background==='bg.home.living'?'Дома у Влада · игровой вечер':background==='bg.rain.awning'?'Под навесом · осенний дождь':background==='bg.rain.arcade'?'Под аркой · короткий путь':background.endsWith('entry')?'Кафе «Пауза»':'У окна · маленькая пауза';
  const layers=[
    {id:'background',url:assetUrl(background),className:'scene-background',alt:''},
    {id:'character',url:assetUrl(speaker==='nina'?'nina.neutral':`vlad.${characterId?.startsWith('vlad.')?characterId.split('.')[1]:background==='bg.home.living'?'casual':background==='bg.cafe.sunset'?'elegant':'city'}.${emotion}`),className:`character emotion-${emotion} ${speaker==='nina'?'nina':''}`,alt:speaker==='nina'?'Нина':'Влад'},
    ...(showCat?[{id:'cat',url:assetUrl('cat.idle'),className:`scene-cat ${catAtCounter?'cat-counter':''}`,alt:'Пончик'}]:[]),
  ];
  // A failed URL belongs to that image, never to the entire scene. Old failures
  // stop being relevant as soon as the background or expression changes.
  const currentFailures=layers.filter(layer=>failedUrls.includes(layer.url));
  function retryFailed(){
    setAttempts(previous=>{
      const next={...previous};
      for(const layer of currentFailures)next[layer.url]=(next[layer.url]??0)+1;
      return next;
    });
    setFailedUrls(previous=>previous.filter(url=>!currentFailures.some(layer=>layer.url===url)));
  }
  function renderLayer(id:string){
    const layer=layers.find(item=>item.id===id);
    if(!layer)return null;
    const attempt=attempts[layer.url]??0;
    // A fresh URL also bypasses a cached network failure after the server returns.
    const src=attempt?`${layer.url}?retry=${attempt}`:layer.url;
    return <img key={src} className={layer.className} src={src} alt={layer.alt}
      style={failedUrls.includes(layer.url)?{display:'none'}:undefined}
      onError={()=>setFailedUrls(previous=>previous.includes(layer.url)?previous:[...previous,layer.url])}
      onLoad={()=>setFailedUrls(previous=>previous.includes(layer.url)?previous.filter(url=>url!==layer.url):previous)}/>;
  }
  const dance=/^c8\.r3\.dance\.(close|lead|playful)$/.exec(sceneId)?.[1];
  return <div ref={stage} className={`scene-stage ${advisers?'has-advisers adviser-aside':''} ${bench?`bench-${bench}`:''} ${galleryPlace?`gallery-${galleryPlace}`:''} ${fade?'scene-fade':''} ${dance?`dancing-${dance}`:''} ${reducedMotion?'dance-still':''}`} aria-label={location}>
    <div className="scene-art-clip">
    {easterEggs&&currentFailures.length===0&&<SceneEasterEggs stage={stage} context={interactionContext} hair={speaker!=='nina'} cat={showCat} cookie={background==='bg.home.living'&&!['c3.pad.dead','c3.pad.ready'].includes(sceneId)} controller={sceneId==='c3.pad.ready'} extras={sceneEggProps(background,sceneId)} cookieTaken={cookieTaken} onTakeCookie={()=>setCookieTaken(true)} discovered={discoveredEggs} onDiscover={id=>setDiscoveredEggs(previous=>new Set([...previous,id]))} reduced={reducedMotion} onSound={onEasterSound}/>}
    {renderLayer('background')}
    {background==='bg.s2.window.evening'&&currentFailures.length===0&&<ShopBreakSign stage={stage}/>}
    <div className="scene-light"/>{light&&<div className={`scene-atmosphere light-${light}`}/>}
    {renderLayer('character')}
    {renderLayer('cat')}
    {souvenir&&<div className="scene-souvenir" aria-label={souvenir==='patched'?'Нашивка-облако':souvenir==='borrowed'?'Чехол для зонтика':'Игрушечный зонтик'}><Illustration kind={souvenir==='patched'?'cloud':souvenir==='borrowed'?'umbrella-case':'umbrella'}/></div>}
    {reserveRemote&&<div className="reserve-remote" aria-label="Пульт на блюдце для запасных"><span/></div>}
    {['c3.pad.dead','c3.pad.ready'].includes(sceneId)&&<div className="controller-scene" aria-hidden="true"><KitchenControls ready={sceneId==='c3.pad.ready'}/></div>}
    {sceneId==='c1.entry'&&<div className="fallen-tokens" aria-hidden="true"><Illustration kind="token"/><Illustration kind="token"/><Illustration kind="token"/></div>}
    {sceneId==='c1.end.banter'&&<div className="falling-scarf"><Illustration kind="scarf"/></div>}
    {dessert&&<div className="scene-dessert"><DessertArt topping={dessert.topping} mark={dessert.mark}/></div>}{drink&&<div className="scene-drink" aria-label={`Напиток: ${drinkNames[drink]}`}><svg viewBox="0 0 70 65" aria-hidden="true"><path d="M10 20H44V46Q27 63 10 46ZM45 25Q65 20 61 39Q55 48 45 43" fill={drink==='water'?'#cde2e5':'#f1d7af'} stroke="#8a6278" strokeWidth="3"/>{drink!=='water'&&<path d="M20 14Q15 7 22 2M33 14Q28 7 35 2" stroke="#f7ede0" fill="none" strokeWidth="3"/>}</svg><span>{drinkNames[drink]}</span></div>}
    {filmFrame!==undefined&&<div className="scene-film"><SilentFilmArt frame={filmFrame}/></div>}{bookmark!==undefined&&<div className="scene-bookmark"><BookmarkArt memory={bookmark}/></div>}{word&&<span className="scene-word-label shared-word-tag">{word}</span>}
    <div className="scene-vignette"/>
    {currentFailures.length>0&&<div className="art-error" role="status"><span>Часть иллюстрации не загрузилась. Историю можно читать дальше.</span><button onClick={retryFailed}>Повторить загрузку</button></div>}
    <div className="location-tag"><span/> {location}</div>
    </div>
    {advisers&&<div className="adviser-council" aria-label="Советчики этой истории">{(advisers==='angel'||advisers==='both')&&<AdviserPortrait kind="angel" active aside/>}{(advisers==='devil'||advisers==='both')&&<AdviserPortrait kind="devil" active aside/>}</div>}
  </div>;
}
