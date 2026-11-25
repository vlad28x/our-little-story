import { useEffect,useRef,useState,type CSSProperties,type RefObject } from 'react';
import { easterEggs,seasonScenery,type EasterEggId,type ScenePropId,type SeasonSceneryId } from '../content/easterEggs';
import { CookiePlateArt, SceneEasterPropArt } from './SceneEasterPropArt';
import { Illustration } from './Illustration';
type Box={left:number;top:number;width:number;height:number};
type Target=Box&{'--egg-x'?:string;'--egg-y'?:string;'--hair-hint-x'?:string};
type Props={stage:RefObject<HTMLDivElement|null>;paintedSeason?:boolean;hideHair?:boolean;background:string;context:string;character:'vlad'|'nina';cat:boolean;cookie:boolean;extras:ScenePropId[];cookieTaken:boolean;onTakeCookie:()=>void;discovered:ReadonlySet<EasterEggId>;onDiscover:(id:EasterEggId)=>boolean;reduced:boolean};

function positionFraction(value:string|undefined,fallback:number){
  if(value?.endsWith('%'))return Number.parseFloat(value)/100;
  if(value==='left'||value==='top')return 0;
  if(value==='right'||value==='bottom')return 1;
  return value==='center'?.5:fallback;
}

export function SceneEasterEggs({stage,paintedSeason=false,hideHair=false,background,context,character,cat,cookie,extras,cookieTaken,onTakeCookie,discovered,onDiscover,reduced}:Props){
  const [boxes,setBoxes]=useState<Partial<Record<EasterEggId,Target>>>({});
  const [reaction,setReaction]=useState<{id:EasterEggId;context:string;albumFound:boolean}|null>(null);
  const buttons=useRef(new Map<EasterEggId,HTMLButtonElement>());
  const active=reaction?.context===context?reaction.id:null;
  useEffect(()=>{
    const root=stage.current;if(!root)return;
    function measure(){
      const r=root!.getBoundingClientRect();
      const bg=root!.querySelector<HTMLImageElement>('.scene-background');
      const [px,py]=bg?getComputedStyle(bg).objectPosition.split(/\s+/):[];
      const scale=bg?.naturalWidth?Math.max(r.width/bg.naturalWidth,r.height/bg.naturalHeight):0;
      const iw=(bg?.naturalWidth??0)*scale,ih=(bg?.naturalHeight??0)*scale;
      const foreground=[...root!.querySelectorAll('.supper-scene .supper-art, .travellers-board, .selected-print')].map(el=>el.getBoundingClientRect());
      const portrait=root!.querySelector<HTMLImageElement>('.character');
      const bounds=portrait?.getBoundingClientRect();
      const portraitScale=portrait?.naturalWidth&&bounds?Math.min(bounds.width/portrait.naturalWidth,bounds.height/portrait.naturalHeight):0;
      const portraitWidth=(portrait?.naturalWidth??0)*portraitScale,portraitHeight=(portrait?.naturalHeight??0)*portraitScale;
      const [portraitX,portraitY]=portrait?getComputedStyle(portrait).objectPosition.split(/\s+/):[];
      const portraitLeft=(bounds?.left??0)-r.left+((bounds?.width??0)-portraitWidth)*positionFraction(portraitX,.5);
      const portraitTop=(bounds?.top??0)-r.top+((bounds?.height??0)-portraitHeight)*positionFraction(portraitY,.5);
      function coversPortrait(x:number,y:number){
        if(!portraitWidth||!portraitHeight)return false;
        // The drawings share a 2:3 canvas with transparent margins around the head.
        const headX=((x-portraitLeft)/portraitWidth-.50)/.27;
        const headY=((y-portraitTop)/portraitHeight-.175)/.15;
        return headX*headX+headY*headY<1;
      }
      function anchoredBox(x:number,y:number,width:number,height:number):Target{
        const left=Math.max(2,Math.min(x-width/2,r.width-width-2)),top=Math.max(2,Math.min(y-height/2,r.height-height-28));
        return {left,top,width,height,'--egg-x':`${x-left}px`,'--egg-y':`${y-top}px`};
      }
      function box(selector:string,isHair=false):Box|undefined{
        const img=root!.querySelector<HTMLElement|SVGElement>(selector);
        if(!img||img instanceof HTMLImageElement&&(!img.complete||!img.naturalWidth)||getComputedStyle(img).visibility==='hidden')return;
        const b=img.getBoundingClientRect();
        if(!b.width||!b.height)return;
        const width=Math.max(isHair?64:48,isHair?b.width*.64:b.width),height=Math.max(isHair?64:48,isHair?b.height*.24:b.height);
        const left=Math.max(2,b.left-r.left+(isHair?b.width*.18:0));
        const top=Math.max(2,b.top-r.top);
        const visibleWidth=Math.min(width,r.width-left-2),visibleHeight=Math.min(height,r.height-top-28);
        const minSize=isHair?64:48;
        if(visibleWidth<minSize||visibleHeight<minSize)return;
        return {left,top,width:visibleWidth,height:visibleHeight};
      }
      function backgroundBox(cx:number,cy:number,w:number,h:number,minHeight=48,painted=false,rightInset?:number):Target|undefined{
        if(!scale)return;
        const imageX=(r.width-iw)*positionFraction(px,.5)+cx*iw;
        const x=rightInset===undefined?imageX:Math.min(imageX,r.width-rightInset);
        const y=(r.height-ih)*positionFraction(py,.38)+cy*ih;
        if(x<0||x>r.width||y<0||y>r.height-28)return;
        if(painted&&(coversPortrait(x,y)||foreground.some(b=>x+r.left>=b.left&&x+r.left<=b.right&&y+r.top>=b.top&&y+r.top<=b.bottom)))return;
        const width=Math.min(Math.max(48,w*iw),r.width-4),height=Math.min(Math.max(minHeight,h*ih),r.height-30);
        if(painted)return anchoredBox(x,y,width,height);
        const left=Math.max(2,Math.min(x-width/2,r.width-width-2)),top=Math.max(2,Math.min(y-height/2,r.height-height-28));
        return {left,top,width,height};
      }
      const gameNight=root!.classList.contains('game-night-stage');
      const painted=Object.entries(seasonScenery[background]??{}).map(([id,[cx,cy,w,h]])=>{
        // The fridge and the chairs under the arch can sit at the edge of a narrow crop.
        const edgeProp=id==='fridge8'||(id==='archChairs9'&&background==='bg.courtyard9.arch');
        const rightInset=edgeProp?18:undefined;
        return [id as SeasonSceneryId,backgroundBox(cx,cy,w,h,48,true,rightInset)];
      });
      let curls:Target|undefined;
      if(!hideHair&&character==='vlad'){
        if((paintedSeason||seasonScenery[background])&&portraitWidth&&portraitHeight&&getComputedStyle(portrait!).visibility!=='hidden'){
          const x=portraitLeft+portraitWidth*(paintedSeason ? .46 : .59);
          const y=portraitTop+portraitHeight*(paintedSeason ? .07 : .115);
          const hit=anchoredBox(x,y,Math.max(64,portraitWidth*.23),64);
          const hintX=Math.min(r.width-13,x+Math.max(34,portraitWidth*.17));
          curls={...hit,'--hair-hint-x':`${hintX-hit.left}px`};
        }else curls=box('.character:not(.nina)',true);
      }
      const nina=character==='nina'&&portrait?.classList.contains('nina')&&portraitWidth&&portraitHeight&&getComputedStyle(portrait).visibility!=='hidden'
        ?anchoredBox(portraitLeft+portraitWidth*.47,portraitTop+portraitHeight*.23,Math.max(48,portraitWidth*.46),Math.max(48,portraitHeight*.42))
        :undefined;
      setBoxes({hair:curls,nina,cat:cat?box('.scene-cat'):undefined,
        blanket:gameNight?backgroundBox(.107,.487,.18,.13,68,true):backgroundBox(.12,.52,.26,.13,112),
        mug:gameNight?backgroundBox(.28,.505,.08,.055,48,true):backgroundBox(.28,.53,.08,.055),
        tv:gameNight?backgroundBox(.895,.3,.18,.15):backgroundBox(.89,.32,.21,.17),
        cat10:background==='bg.travellers10.cafe'?box('.cat-in-box img, .cat-chair img'):undefined,...Object.fromEntries(painted)});
    }
    const frame=requestAnimationFrame(measure),observer=new ResizeObserver(measure);
    observer.observe(root);root.querySelectorAll('img').forEach(img=>observer.observe(img));
    root.addEventListener('load',measure,true);root.addEventListener('animationend',measure);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();root.removeEventListener('load',measure,true);root.removeEventListener('animationend',measure);};
  },[stage,paintedSeason,hideHair,background,context,character,cat]);
  function trigger(id:EasterEggId){
    if(active===id||id==='cookie'&&cookieTaken)return;
    const albumFound=onDiscover(id);
    if(id==='cookie')onTakeCookie();
    setReaction({id,context,albumFound});
  }
  function dismiss(){
    setReaction(null);const button=active?buttons.current.get(active):undefined;
    const target=button&&!button.disabled?button:buttons.current.get('hair')??[...buttons.current.values()].find(item=>!item.disabled);target?.focus({preventScroll:true});
  }
  function buttonRef(id:EasterEggId){return (el:HTMLButtonElement|null)=>{if(el)buttons.current.set(id,el);else buttons.current.delete(id);};}
  function spark(id:EasterEggId){return !discovered.has(id)&&!(id==='cookie'&&cookieTaken)?<span className="easter-spark" aria-hidden="true">✧</span>:null;}
  return <div className="scene-easter" data-egg={active??''} data-reduced={reduced?'true':'false'}>
    {extras.filter(id=>id==='star'||id==='sign'||boxes[id]).map(id=><button key={id} ref={buttonRef(id)} className={`scene-easter-target easter-prop easter-${id} ${boxes[id]?.['--egg-x']?'easter-painted':''}`} style={boxes[id] as CSSProperties} aria-label={easterEggs[id].label} onClick={e=>{e.stopPropagation();trigger(id);}}>{spark(id)}<SceneEasterPropArt id={id} active={active===id} paintedSeason={paintedSeason}/></button>)}
    {!hideHair&&character==='vlad'&&boxes.hair&&<button ref={buttonRef('hair')} className={`scene-easter-target easter-hair ${boxes.hair['--egg-x']?'easter-painted':''}`} style={boxes.hair as CSSProperties} aria-label={easterEggs.hair.label} onClick={e=>{e.stopPropagation();trigger('hair');}}>
      {spark('hair')}
      {active==='hair'&&<Illustration kind="hair" className="hair-spring"/>}
    </button>}
    {character==='nina'&&boxes.nina&&<button ref={buttonRef('nina')} className="scene-easter-target easter-nina" style={boxes.nina as CSSProperties} aria-label={easterEggs.nina.label} aria-expanded={active==='nina'} onClick={e=>{e.stopPropagation();trigger('nina');}}>
      {spark('nina')}
      {active==='nina'&&<Illustration kind="tea" className="nina-tea"/>}
    </button>}
    {boxes.cat&&<button ref={buttonRef('cat')} className="scene-easter-target easter-cat" style={boxes.cat} aria-label={easterEggs.cat.label} onClick={e=>{e.stopPropagation();trigger('cat');}}>{spark('cat')}</button>}
    {cookie&&<button ref={buttonRef('cookie')} className="scene-easter-target easter-cookie" aria-label={easterEggs.cookie.label} disabled={cookieTaken} onClick={e=>{e.stopPropagation();trigger('cookie');}}>
      {spark('cookie')}
      <CookiePlateArt taken={cookieTaken}/>{active==='cookie'&&<span className="cookie-crumbs" aria-hidden="true"><i/><i/><i/></span>}
    </button>}
    {active&&<EasterReaction id={active} albumFound={reaction?.albumFound} onDismiss={dismiss}/>}
  </div>;
}

export function EasterReaction({id,onDismiss,albumFound=false}:{id:EasterEggId;onDismiss:()=>void;albumFound?:boolean}){
  const reaction=easterEggs[id];
  return <aside className="scene-easter-note" data-egg={id} aria-label="Маленькая реакция">
    <div role="status"><b>{'speaker' in reaction?reaction.speaker:'Влад'}</b><p>{reaction.text}</p>{albumFound&&<small className="album-secret-found">Секрет добавлен в альбом</small>}</div>
    <button className="scene-easter-dismiss" aria-label="Скрыть маленькую реакцию" onClick={onDismiss}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
    </button>
  </aside>;
}
