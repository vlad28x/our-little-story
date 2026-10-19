// @refresh reset
import { useRef,useState } from 'react';
import { assetUrl } from '../content/assetManifest';
import type { Emotion } from '../engine/types';
import { Illustration } from './Illustration';
import { KitchenControls } from './KitchenControls';
import { SceneEasterEggs } from './SceneEasterEggs';
import { sceneEggProps } from '../content/easterEggs';
import { AdviserPortrait } from './AdviserPortrait';
import { ShopBreakSign } from './ShopBreakSign';
export function SceneStage({background='bg.cafe.entry',emotion='smile',speaker,showCat=true,sceneId='intro',reserveRemote=false,bench,souvenir,catAtCounter=false,easterEggs=false,interactionContext=sceneId,reducedMotion=false,onEasterSound,advisers}:{background?:string;emotion?:Emotion;speaker?:string;showCat?:boolean;sceneId?:string;reserveRemote?:boolean;bench?:'near'|'space';souvenir?:'patched'|'borrowed'|'skipped';catAtCounter?:boolean;easterEggs?:boolean;interactionContext?:string;reducedMotion?:boolean;onEasterSound?:()=>void;advisers?:'angel'|'devil'|'both'}){
  const stage=useRef<HTMLDivElement>(null);
  // Keep the plate while its optional hotspots unmount during the kitchen or pause.
  const [cookieTaken,setCookieTaken]=useState(false);
  const [failedUrls,setFailedUrls]=useState<string[]>([]);
  const [attempts,setAttempts]=useState<Record<string,number>>({});
  const location=background==='bg.s2.window.evening'?'У витрины · вечерний перерыв':background==='bg.cafe.sunset'?'Снова в «Паузе» · закат':background==='bg.river.evening'?'Набережная · тихий вечер':background==='bg.home.living'?'Дома у Влада · игровой вечер':background==='bg.rain.awning'?'Под навесом · осенний дождь':background==='bg.rain.arcade'?'Под аркой · короткий путь':background.endsWith('entry')?'Кафе «Пауза»':'У окна · маленькая пауза';
  const layers=[
    {id:'background',url:assetUrl(background),className:'scene-background',alt:''},
    {id:'character',url:assetUrl(speaker==='nina'?'nina.neutral':`vlad.${background==='bg.home.living'?'casual':background==='bg.cafe.sunset'?'elegant':'city'}.${emotion}`),className:`character emotion-${emotion} ${speaker==='nina'?'nina':''}`,alt:speaker==='nina'?'Нина':'Влад'},
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
  return <div ref={stage} className={`scene-stage ${advisers?'has-advisers':''} ${bench?`bench-${bench}`:''}`} aria-label={location}>
    {easterEggs&&currentFailures.length===0&&<SceneEasterEggs stage={stage} context={interactionContext} hair={speaker!=='nina'} cat={showCat} cookie={background==='bg.home.living'&&!['c3.pad.dead','c3.pad.ready'].includes(sceneId)} controller={sceneId==='c3.pad.ready'} extras={sceneEggProps(background,sceneId)} cookieTaken={cookieTaken} onTakeCookie={()=>setCookieTaken(true)} reduced={reducedMotion} onSound={onEasterSound}/>}
    {advisers&&<div className="adviser-council" aria-label="Советчики этой истории"><AdviserPortrait kind="angel" active={advisers==='angel'||advisers==='both'}/><AdviserPortrait kind="devil" active={advisers==='devil'||advisers==='both'}/></div>}
    {renderLayer('background')}
    {background==='bg.s2.window.evening'&&currentFailures.length===0&&<ShopBreakSign stage={stage}/>}
    <div className="scene-light"/>
    {renderLayer('character')}
    {renderLayer('cat')}
    {souvenir&&<div className="scene-souvenir" aria-label={souvenir==='patched'?'Нашивка-облако':souvenir==='borrowed'?'Чехол для зонтика':'Игрушечный зонтик'}><Illustration kind={souvenir==='patched'?'cloud':souvenir==='borrowed'?'umbrella-case':'umbrella'}/></div>}
    {reserveRemote&&<div className="reserve-remote" aria-label="Пульт на блюдце для запасных"><span/></div>}
    {['c3.pad.dead','c3.pad.ready'].includes(sceneId)&&<div className="controller-scene" aria-hidden="true"><KitchenControls ready={sceneId==='c3.pad.ready'}/></div>}
    {sceneId==='c1.entry'&&<div className="fallen-tokens" aria-hidden="true"><Illustration kind="token"/><Illustration kind="token"/><Illustration kind="token"/></div>}
    {sceneId==='c1.end.banter'&&<div className="falling-scarf"><Illustration kind="scarf"/></div>}
    <div className="scene-vignette"/>
    {currentFailures.length>0&&<div className="art-error" role="status"><span>Часть иллюстрации не загрузилась. Историю можно читать дальше.</span><button onClick={retryFailed}>Повторить загрузку</button></div>}
    <div className="location-tag"><span/> {location}</div>
  </div>;
}
