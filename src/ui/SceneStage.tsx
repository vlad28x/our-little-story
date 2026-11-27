import type { ReactNode } from 'react';
import {GalleryArt,type GalleryView} from './GalleryArt';
// @refresh reset
import { useRef,useState } from 'react';
import { preload } from 'react-dom';
import { assetUrl } from '../content/assetManifest';
import type { Emotion } from '../engine/types';
import { Illustration } from './Illustration';
import { ConstellationArt } from './ConstellationArt';
import { constellationDrawings } from '../minigames/constellationModel';
import { SceneEasterEggs } from './SceneEasterEggs';
import { CookiePlateArt, ReserveRemoteArt } from './SceneEasterPropArt';
import { sceneEggProps,type EasterEggId } from '../content/easterEggs';
import { AdviserPortrait } from './AdviserPortrait';
import type { StoryState } from '../engine/types';
import { ShopBreakSign } from './ShopBreakSign';

import { apronVlad, firstSeasonBackground, firstSeasonCat, firstSeasonNina, firstSeasonVlad } from '../content/firstSeasonArt';

export function SceneStage({travellers,courtyard,supper,exhibit,rain,background='bg.cafe.entry',emotion='smile',speaker,showCat=true,sceneId='intro',constellation,reserveRemote=false,bench,easterEggs=false,interactionContext=sceneId,reducedMotion=false,onDiscoverEgg,advisers,galleryPlace,characterId,word,light,fade=false}:{travellers?:ReactNode;courtyard?:ReactNode;supper?:ReactNode;exhibit?:GalleryView;rain?:'heavy'|'shelter'|'soft';characterId?:string;word?:string;light?:'warm'|'dim'|'unchanged';fade?:boolean;galleryPlace?:'arch'|'window';background?:string;emotion?:Emotion;speaker?:string;showCat?:boolean;sceneId?:string;constellation?:StoryState['constellation'];reserveRemote?:boolean;bench?:'near'|'space';easterEggs?:boolean;interactionContext?:string;reducedMotion?:boolean;onDiscoverEgg?:(id:EasterEggId)=>boolean;advisers?:'angel'|'devil'|'both'}){
  const stage=useRef<HTMLDivElement>(null);
  // Keep the plate while its optional hotspots unmount during the kitchen or pause.
  const [cookieTaken,setCookieTaken]=useState(false);
  // Hints stay dismissed through dialogue, pause and minigames during this visit.
  const [discoveredEggs,setDiscoveredEggs]=useState<ReadonlySet<EasterEggId>>(()=>new Set());
  const [failedUrls,setFailedUrls]=useState<string[]>([]);
  const [attempts,setAttempts]=useState<Record<string,number>>({});
  const location=background==='bg.travellers10.morning'?'Дома у Влада · доброе утро':background==='bg.travellers10.home'?'Дома у Влада · ещё немного вечера':background==='bg.travellers10.cafe'?'В «Паузе» · два путешественника':background.startsWith('bg.courtyard9.')?({'open':'Кинодворик · её вечер','canopy':'Кинодворик · под навесом','arch':'Кинодворик · под аркой','books':'У булочной · книжный шкаф','lab':'Фотолаборатория · после дождя'}[background.split('.').at(-1)!.replace(/-(closed|red)$/,'')]??'Кинодворик'):background==='bg.supper8.kitchen'?'Дома у Влада · половина кухни':background==='bg.cafe.approach'?'У «Паузы» · перед встречей':background==='bg.gallery7.hall'?'Галерея · Линии и свет':background==='bg.gallery7.outside'?'У галереи · Линии и свет':background==='bg.photo6.upper'?'Верхняя дорожка · пока светло':background==='bg.photo6.shade'?'У воды · отражение лестницы':background==='bg.photo6.sun'?'Набережная · пока светло':background==='bg.s2.kitchen.morning'?'Дома у Влада · доброе утро':background==='bg.s2.kitchen.evening'?(sceneId.startsWith('c8.supper.')?'Дома у Влада · половина кухни':'Дома у Влада · на чай'):background==='bg.s2.cinema.courtyard'?'Кинодворик «Паузы» · фильм подождёт':background==='bg.s2.cafe.terrace'?'Терраса «Паузы» · последний вечер':background==='bg.home.living'&&sceneId.startsWith('c9.')?'Дома у Влада · киновечер':background==='bg.home.living'&&sceneId.startsWith('c10.')?'Дома у Влада · ещё немного вечера':background==='bg.s2.gallery.evening'?'Галерея · между строк':background==='bg.s2.window.evening'?'У витрины · вечерний перерыв':background==='bg.cafe.exterior'?'У «Паузы» · вечер':background==='bg.cafe.sunset'?'Снова в «Паузе» · закат':background==='bg.river.evening'?'Набережная · тихий вечер':background==='bg.home.living'?'Дома у Влада · игровой вечер':background==='bg.rain.awning'?'Под навесом · осенний дождь':background==='bg.rain.arcade'?'Под аркой · короткий путь':background.endsWith('entry')?'Кафе «Пауза»':'У окна · маленькая пауза';
  const firstSeason = /^c[1-5]\./.test(sceneId);
  const secondSeason = /^c(?:[6-9]|10)\./.test(sceneId);
  const gameNight = sceneId.startsWith('c4.');
  const returnCafe = sceneId.startsWith('c5.') && background === 'bg.cafe.sunset';
  const painted = firstSeason || secondSeason;
  const paintedSupper = secondSeason && background === 'bg.supper8.kitchen';
  const backgroundAsset = painted ? firstSeasonBackground(background) : background;
  const travellersMorning = background==='bg.travellers10.morning';
  if(sceneId==='c10.travellers.sleep'&&!travellersMorning)preload(assetUrl('bg.travellers10.morning'),{as:'image'});
  const home = characterId?.startsWith('vlad.casual.') || background === 'bg.travellers10.home' || background === 'bg.travellers10.morning' || background.startsWith('bg.s2.kitchen.');
  const outfitBackground = home ? 'bg.home.living' : characterId?.startsWith('vlad.city.') && background === 'bg.cafe.exterior' ? 'bg.cafe.window' : background;
  const paintedCharacter = speaker === 'nina' ? firstSeasonNina : characterId?.startsWith('vlad.apron.') ? apronVlad(emotion) : firstSeasonVlad(outfitBackground, emotion);
  const fallbackOutfit = characterId?.startsWith('vlad.') ? characterId.split('.')[1] : home || background === 'bg.home.living' ? 'casual' : background === 'bg.cafe.sunset' || background === 'bg.cafe.exterior' ? 'elegant' : 'city';
  const closeup = speaker !== 'nina' && (characterId === 'vlad.closeup.intimate' || characterId === 'vlad.closeup.warm');
  const characterAsset = closeup ? characterId : painted ? paintedCharacter : speaker === 'nina' ? 'nina.neutral' : `vlad.${fallbackOutfit}.${emotion}`;
  const layers=[
    {id:'background',url:assetUrl(backgroundAsset),className:travellersMorning?'scene-background traveller-morning-background':background.startsWith('bg.courtyard9.books')?'scene-background courtyard-books-background':background==='bg.cafe.approach'?'scene-background cafe-approach':'scene-background',alt:''},
    {id:'character',url:assetUrl(characterAsset),className:`character emotion-${emotion}${speaker==='nina'?' nina':''}${closeup?' character-closeup':''}`,alt:speaker==='nina'?'Нина':'Влад'},
    ...(showCat?[{id:'cat',url:assetUrl(painted?firstSeasonCat:'cat.idle'),className:'scene-cat',alt:'Пончик'}]:[]),
  ].filter(layer=>sceneId!=='c1.prologue'||layer.id==='background');
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
  const showEasterEggs=easterEggs&&currentFailures.length===0&&!fade&&!closeup
    &&!['c1.prologue','c1.before','c9.courtyard.filmStart','c9.courtyard.resume'].includes(sceneId)
    &&(!exhibit||exhibit==='hall'||exhibit==='poster');
  const dance=({'c8.supper.follow':'close','c8.supper.lead':'lead','c8.supper.play':'playful'} as Record<string,string>)[sceneId]??/^c8\.r3\.dance\.(close|lead|playful)$/.exec(sceneId)?.[1];
  return <div ref={stage} className={`scene-stage ${firstSeason?'first-season-gouache':''} ${gameNight?'game-night-stage':''} ${returnCafe?'cafe-return-stage':''} ${secondSeason?'second-season-gouache':''} ${paintedSupper?'supper-gouache':''} ${courtyard?'courtyard-stage':''} ${travellers?'travellers-stage':''} ${background==='bg.travellers10.cafe'?'traveller-cafe-stage':''} ${background==='bg.travellers10.home'?'traveller-home-stage':''} ${travellersMorning?'traveller-morning-stage':''} ${travellers&&background==='bg.cafe.exterior'?'traveller-exterior-stage':''} ${exhibit?`exhibit-${exhibit}`:''} ${advisers?'has-advisers adviser-aside':''} ${bench?`bench-${bench}`:''} ${galleryPlace?`gallery-${galleryPlace}`:''} ${fade?'scene-fade':''} ${dance&&!closeup?`dancing-${dance}`:''} ${reducedMotion?'dance-still':''}`} aria-label={location}>
    <div className="scene-art-clip">
    {showEasterEggs&&<SceneEasterEggs stage={stage} paintedSeason={painted} hideHair={closeup} background={background} context={interactionContext} character={speaker==='nina'?'nina':'vlad'} cat={showCat} cookie={background==='bg.home.living'} extras={sceneEggProps(background,sceneId)} cookieTaken={cookieTaken} onTakeCookie={()=>setCookieTaken(true)} discovered={discoveredEggs} onDiscover={id=>{setDiscoveredEggs(previous=>new Set([...previous,id]));return onDiscoverEgg?.(id)??false;}} reduced={reducedMotion}/>}
    {gameNight&&background==='bg.home.living'&&!showEasterEggs&&<div className="easter-cookie scene-cookie-plate" aria-hidden="true"><CookiePlateArt taken={cookieTaken}/></div>}
    {renderLayer('background')}
    {exhibit&&<GalleryArt view={exhibit}/>}
    {background==='bg.s2.window.evening'&&currentFailures.length===0&&<ShopBreakSign stage={stage}/>}
    <div className="scene-light"/>{light&&<div className={`scene-atmosphere light-${light}`}/>}
    {rain&&<div className={`scene-rain scene-rain-${rain}`} aria-hidden="true"/>}
    {renderLayer('character')}
    {renderLayer('cat')}{supper}{courtyard}{travellers}
    {reserveRemote&&<div className="reserve-remote" aria-label="Пульт на блюдце для запасных"><ReserveRemoteArt/></div>}
    {constellation&&(sceneId.startsWith('c5.drink.sky.')||sceneId==='c5.letter')&&<div className="scene-constellation-note">
      <ConstellationArt shape={constellation} ink label={constellationDrawings[constellation].description}/>
    </div>}
    {sceneId==='c1.entry'&&<div className="fallen-tokens" aria-hidden="true"><Illustration kind="token"/><Illustration kind="token"/><Illustration kind="token"/></div>}
    {sceneId==='c1.end.banter'&&<div className="falling-scarf"><Illustration kind="scarf"/></div>}
    {word&&<span className="scene-word-label shared-word-tag">{word}</span>}
    <div className="scene-vignette"/>
    {currentFailures.length>0&&<div className="art-error" role="status"><span>Часть иллюстрации не загрузилась. Историю можно читать дальше.</span><button onClick={retryFailed}>Повторить загрузку</button></div>}
    <div className="location-tag"><span/> {location}</div>
    </div>
    {advisers&&<div className="adviser-council" aria-label="Советчики этой истории">{(advisers==='angel'||advisers==='both')&&<AdviserPortrait kind="angel" active aside painted={secondSeason}/>}{(advisers==='devil'||advisers==='both')&&<AdviserPortrait kind="devil" active aside painted={secondSeason}/>}</div>}
  </div>;
}
