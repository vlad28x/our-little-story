import { useEffect,useId,useRef,useState,type CSSProperties,type RefObject } from 'react';
import { easterEggs,seasonScenery,type EasterEggId,type ScenePropId,type SeasonSceneryId } from '../content/easterEggs';
import { SceneEasterPropArt } from './SceneEasterPropArt';
type Box={left:number;top:number;width:number;height:number};
type Target=Box&{'--egg-x'?:string;'--egg-y'?:string};
type Props={stage:RefObject<HTMLDivElement|null>;background:string;context:string;hair:boolean;cat:boolean;cookie:boolean;controller:boolean;extras:ScenePropId[];cookieTaken:boolean;onTakeCookie:()=>void;discovered:ReadonlySet<EasterEggId>;onDiscover:(id:EasterEggId)=>void;reduced:boolean;onSound?:()=>void};

function positionFraction(value:string|undefined,fallback:number){
  if(value?.endsWith('%'))return Number.parseFloat(value)/100;
  if(value==='left'||value==='top')return 0;
  if(value==='right'||value==='bottom')return 1;
  return value==='center'?.5:fallback;
}

export function SceneEasterEggs({stage,background,context,hair,cat,cookie,controller,extras,cookieTaken,onTakeCookie,discovered,onDiscover,reduced,onSound}:Props){
  const uid=useId().replace(/:/g,'');
  const [boxes,setBoxes]=useState<Partial<Record<EasterEggId,Target>>>({});
  const [reaction,setReaction]=useState<{id:EasterEggId;context:string}|null>(null);
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
      const [,portraitY]=portrait?getComputedStyle(portrait).objectPosition.split(/\s+/):[];
      const portraitLeft=(bounds?.left??0)-r.left+((bounds?.width??0)-portraitWidth)/2;
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
      function backgroundBox(cx:number,cy:number,w:number,h:number,minHeight=48,painted=false):Target|undefined{
        if(!scale)return;
        const x=(r.width-iw)*positionFraction(px,.5)+cx*iw,y=(r.height-ih)*positionFraction(py,.38)+cy*ih;
        if(x<0||x>r.width||y<0||y>r.height-28)return;
        if(painted&&(coversPortrait(x,y)||foreground.some(b=>x+r.left>=b.left&&x+r.left<=b.right&&y+r.top>=b.top&&y+r.top<=b.bottom)))return;
        const width=Math.min(Math.max(48,w*iw),r.width-4),height=Math.min(Math.max(minHeight,h*ih),r.height-30);
        if(painted)return anchoredBox(x,y,width,height);
        const left=Math.max(2,Math.min(x-width/2,r.width-width-2)),top=Math.max(2,Math.min(y-height/2,r.height-height-28));
        return {left,top,width,height};
      }
      const painted=Object.entries(seasonScenery[background]??{}).map(([id,[cx,cy,w,h]])=>[id as SeasonSceneryId,backgroundBox(cx,cy,w,h,48,true)]);
      const curls=seasonScenery[background]&&portraitWidth&&portraitHeight&&getComputedStyle(portrait!).visibility!=='hidden'
        ?anchoredBox(portraitLeft+portraitWidth*.59,portraitTop+portraitHeight*.115,64,64)
        :box('.character:not(.nina)',true);
      setBoxes({hair:hair?curls:undefined,cat:cat?box('.scene-cat'):undefined,controller:controller?box('.controller-scene svg:last-child'):undefined,
        blanket:backgroundBox(.12,.52,.26,.13,112),mug:backgroundBox(.28,.53,.08,.055),tv:backgroundBox(.89,.32,.21,.17),
        cat10:background==='bg.travellers10.cafe'?box('.cat-in-box img, .cat-chair img'):undefined,...Object.fromEntries(painted)});
    }
    const frame=requestAnimationFrame(measure),observer=new ResizeObserver(measure);
    observer.observe(root);root.querySelectorAll('img').forEach(img=>observer.observe(img));
    root.addEventListener('load',measure,true);root.addEventListener('animationend',measure);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();root.removeEventListener('load',measure,true);root.removeEventListener('animationend',measure);};
  },[stage,background,context,hair,cat,controller]);
  function trigger(id:EasterEggId){
    if(active===id||id==='cookie'&&cookieTaken)return;
    onDiscover(id);
    if(id==='cookie')onTakeCookie();
    setReaction({id,context});onSound?.();
  }
  function dismiss(){
    setReaction(null);const button=active?buttons.current.get(active):undefined;
    const target=button&&!button.disabled?button:buttons.current.get('hair')??[...buttons.current.values()].find(item=>!item.disabled);target?.focus({preventScroll:true});
  }
  function buttonRef(id:EasterEggId){return (el:HTMLButtonElement|null)=>{if(el)buttons.current.set(id,el);else buttons.current.delete(id);};}
  function spark(id:EasterEggId){return !discovered.has(id)&&!(id==='cookie'&&cookieTaken)?<span className="easter-spark" aria-hidden="true">✧</span>:null;}
  return <div className="scene-easter" data-egg={active??''} data-reduced={reduced?'true':'false'}>
    {extras.filter(id=>id==='star'||id==='sign'||boxes[id]).map(id=><button key={id} ref={buttonRef(id)} className={`scene-easter-target easter-prop easter-${id} ${boxes[id]?.['--egg-x']?'easter-painted':''}`} style={boxes[id] as CSSProperties} aria-label={easterEggs[id].label} onClick={e=>{e.stopPropagation();trigger(id);}}>{spark(id)}<SceneEasterPropArt id={id} active={active===id}/></button>)}
    {boxes.controller&&<button ref={buttonRef('controller')} className="scene-easter-target easter-controller" style={boxes.controller} aria-label={easterEggs.controller.label} onClick={e=>{e.stopPropagation();trigger('controller');}}>{spark('controller')}{active==='controller'&&<span className="controller-glow" aria-hidden="true"/>}</button>}
    {hair&&boxes.hair&&<button ref={buttonRef('hair')} className={`scene-easter-target easter-hair ${boxes.hair['--egg-x']?'easter-painted':''}`} style={boxes.hair as CSSProperties} aria-label={easterEggs.hair.label} onClick={e=>{e.stopPropagation();trigger('hair');}}>
      {spark('hair')}
      {active==='hair'&&<svg className="hair-spring" viewBox="0 0 52 56" aria-hidden="true">
        <path d="M26 53C9 43 9 30 24 24C41 17 42 39 28 37C15 35 19 14 33 9C42 6 45 13 40 18" fill="none" stroke="#5c3e29" strokeWidth="8.5" strokeLinecap="round"/>
        <path d="M26 53C10 43 10 31 24 25C41 18 42 39 28 37C15 35 19 14 33 9C42 6 44 13 40 17" fill="none" stroke="#966c47" strokeWidth="5.8" strokeLinecap="round"/>
        <path d="M26 51C13 42 13 32 26 26C38 20 38 34 28 33C19 32 23 16 34 11" fill="none" stroke="#ddb482" strokeWidth="2.4" strokeLinecap="round"/>
      </svg>}
    </button>}
    {boxes.cat&&<button ref={buttonRef('cat')} className="scene-easter-target easter-cat" style={boxes.cat} aria-label={easterEggs.cat.label} onClick={e=>{e.stopPropagation();trigger('cat');}}>{spark('cat')}</button>}
    {cookie&&<button ref={buttonRef('cookie')} className="scene-easter-target easter-cookie" aria-label={easterEggs.cookie.label} disabled={cookieTaken} onClick={e=>{e.stopPropagation();trigger('cookie');}}>
      {spark('cookie')}
      <svg viewBox="0 0 110 80" aria-hidden="true">
        <defs>
          <radialGradient id={`${uid}-ck`} cx="35%" cy="30%" r="70%"><stop offset="0" stopColor="#f2c480"/><stop offset=".6" stopColor="#d69752"/><stop offset="1" stopColor="#a86a34"/></radialGradient>
          <linearGradient id={`${uid}-pl`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fffdf8"/><stop offset="1" stopColor="#e5d6be"/></linearGradient>
        </defs>
        <ellipse cx="55" cy="70" rx="50" ry="9.5" fill="#3a2212" opacity=".2"/>
        <ellipse cx="55" cy="61" rx="50" ry="15" fill={`url(#${uid}-pl)`} stroke="#9a8268" strokeWidth="2"/>
        <ellipse cx="55" cy="60.5" rx="44" ry="12.5" fill="none" stroke="#d8b06a" strokeWidth="1" opacity=".85"/>
        <ellipse cx="55" cy="60" rx="37" ry="9" fill="#f7e9dc" stroke="#d5b3bc" strokeWidth="1.4"/>
        <g fill={`url(#${uid}-ck)`} stroke="#754722" strokeWidth="1.8">
          <circle cx="37" cy="49" r="18"/><circle cx="72" cy="48" r="18"/>{!cookieTaken&&<circle cx="54" cy="29" r="18"/>}
        </g>
        <g>
          <path d="M25 42q10-7 22-1M61 41q10-6 21-1" fill="none" stroke="#fae0ae" strokeWidth="2.2" strokeLinecap="round" opacity=".68"/>
          <path d="M28 50q6-3 10 2M66 50q5-2 9 2" fill="none" stroke="#9e622d" strokeWidth="1" opacity=".6"/>
          <path d="M27 44l6-2 2 5-6 2Z M40 50l6-1 1 5-6 1Z M30 55l5-2 2 4-5 2Z" fill="#4f2d1e"/>
          <path d="M64 42l6-1 1 5-5 2Z M75 48l5-2 2 5-6 2Z M65 55l5-1 1 4-5 1Z" fill="#4f2d1e"/>
          <path d="M28 44l3-1M41 50l3-.5M65 42l3-.5" stroke="#855a45" strokeWidth="1" strokeLinecap="round"/>
          {!cookieTaken&&<>
            <path d="M42 22q11-6 23 0" fill="none" stroke="#fff0ca" strokeWidth="2.4" strokeLinecap="round" opacity=".78"/>
            <path d="M43 31q5-2 8 1M59 23q4 3 8 1" fill="none" stroke="#9e622d" strokeWidth="1" opacity=".6"/>
            <path d="M45 23l6-2 2 5-6 2Z M58 27l6-2 2 5-6 2Z M46 34l5-1 2 4-6 2Z M55 37l5-1 1 4-5 1Z" fill="#4b2a1c"/>
            <path d="M46 23l3-1M59 27l3-1" stroke="#8a5f49" strokeWidth="1" strokeLinecap="round"/>
          </>}
          <ellipse cx="21" cy="64" rx="2" ry="1.5" fill="#c58847"/><ellipse cx="89" cy="63" rx="1.8" ry="1.4" fill="#c58847"/><ellipse cx="55" cy="66" rx="1.6" ry="1.2" fill="#c58847"/>
        </g>
      </svg>{active==='cookie'&&<span className="cookie-crumbs" aria-hidden="true"><i/><i/><i/></span>}
    </button>}
    {active&&<EasterReaction id={active} onDismiss={dismiss}/>}
  </div>;
}

export function EasterReaction({id,onDismiss}:{id:EasterEggId;onDismiss:()=>void}){
  return <aside className="scene-easter-note" data-egg={id} aria-label="Маленькая реакция">
    <div role="status"><b>Влад</b><p>{easterEggs[id].text}</p></div>
    <button className="scene-easter-dismiss" aria-label="Скрыть маленькую реакцию" onClick={onDismiss}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
    </button>
  </aside>;
}
