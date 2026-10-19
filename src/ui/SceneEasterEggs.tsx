import { useEffect,useRef,useState,type RefObject } from 'react';
import { easterEggs,type EasterEggId,type ScenePropId } from '../content/easterEggs';
import { SceneEasterPropArt } from './SceneEasterPropArt';
type Box={left:number;top:number;width:number;height:number};
type Props={stage:RefObject<HTMLDivElement|null>;context:string;hair:boolean;cat:boolean;cookie:boolean;controller:boolean;extras:ScenePropId[];cookieTaken:boolean;onTakeCookie:()=>void;reduced:boolean;onSound?:()=>void};
export function SceneEasterEggs({stage,context,hair,cat,cookie,controller,extras,cookieTaken,onTakeCookie,reduced,onSound}:Props){
  const [boxes,setBoxes]=useState<Partial<Record<EasterEggId,Box>>>({});
  const [reaction,setReaction]=useState<{id:EasterEggId;context:string}|null>(null);
  const buttons=useRef(new Map<EasterEggId,HTMLButtonElement>());
  const active=reaction?.context===context?reaction.id:null;
  useEffect(()=>{
    const root=stage.current;if(!root)return;
    function measure(){
      const r=root!.getBoundingClientRect();
      function box(selector:string,isHair=false):Box|undefined{
        const img=root!.querySelector<HTMLElement|SVGElement>(selector);
        if(!img||img instanceof HTMLImageElement&&(!img.complete||!img.naturalWidth)||getComputedStyle(img).display==='none')return;
        const b=img.getBoundingClientRect();
        const width=Math.max(isHair?64:48,isHair?b.width*.64:b.width),height=Math.max(isHair?64:48,isHair?b.height*.24:b.height);
        const left=Math.max(2,b.left-r.left+(isHair?b.width*.18:0));
        const top=Math.max(2,b.top-r.top);
        const visibleWidth=Math.min(width,r.width-left-2),visibleHeight=Math.min(height,r.height-top-28);
        if(visibleWidth<48||visibleHeight<48)return;
        return {left,top,width:visibleWidth,height:visibleHeight};
      }
      function backgroundBox(cx:number,cy:number,w:number,h:number):Box|undefined{
        const bg=root!.querySelector<HTMLImageElement>('.scene-background');if(!bg?.naturalWidth)return;
        // Match object-fit:cover / object-position:center 38% in game.css.
        const scale=Math.max(r.width/bg.naturalWidth,r.height/bg.naturalHeight),iw=bg.naturalWidth*scale,ih=bg.naturalHeight*scale;
        const x=(r.width-iw)/2+cx*iw,y=(r.height-ih)*.38+cy*ih;
        if(x<0||x>r.width||y<0||y>r.height-28)return;
        const width=Math.min(Math.max(48,w*iw),r.width-4),height=Math.min(Math.max(48,h*ih),r.height-30);
        return {left:Math.max(2,Math.min(x-width/2,r.width-width-2)),top:Math.max(2,Math.min(y-height/2,r.height-height-28)),width,height};
      }
      setBoxes({hair:hair?box('.character:not(.nina)',true):undefined,cat:cat?box('.scene-cat'):undefined,controller:controller?box('.controller-scene svg:last-child'):undefined,
        blanket:backgroundBox(.12,.49,.18,.13),mug:backgroundBox(.28,.53,.08,.055),tv:backgroundBox(.89,.32,.21,.17),cookie:backgroundBox(.51,.57,.24,.15)});
    }
    const frame=requestAnimationFrame(measure),observer=new ResizeObserver(measure);
    observer.observe(root);root.querySelectorAll('img').forEach(img=>observer.observe(img));
    root.addEventListener('load',measure,true);root.addEventListener('animationend',measure);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();root.removeEventListener('load',measure,true);root.removeEventListener('animationend',measure);};
  },[stage,context,hair,cat,controller]);
  function trigger(id:EasterEggId){
    if(active===id||id==='cookie'&&cookieTaken)return;
    if(id==='cookie')onTakeCookie();
    setReaction({id,context});onSound?.();
  }
  function dismiss(){
    setReaction(null);const button=active?buttons.current.get(active):undefined;
    const target=button&&!button.disabled?button:buttons.current.get('hair')??[...buttons.current.values()].find(item=>!item.disabled);target?.focus({preventScroll:true});
  }
  function buttonRef(id:EasterEggId){return (el:HTMLButtonElement|null)=>{if(el)buttons.current.set(id,el);else buttons.current.delete(id);};}
  return <div className="scene-easter" data-egg={active??''} data-reduced={reduced?'true':'false'}>
    {extras.filter(id=>id==='star'||id==='sign'||boxes[id]).map(id=><button key={id} ref={buttonRef(id)} className={`scene-easter-target easter-prop easter-${id}`} style={boxes[id]} aria-label={easterEggs[id].label} onClick={e=>{e.stopPropagation();trigger(id);}}>{!['star','sign'].includes(id)&&<span className="easter-spark" aria-hidden="true">✧</span>}<SceneEasterPropArt id={id} active={active===id}/></button>)}
    {boxes.controller&&<button ref={buttonRef('controller')} className="scene-easter-target easter-controller" style={boxes.controller} aria-label={easterEggs.controller.label} onClick={e=>{e.stopPropagation();trigger('controller');}}>{active==='controller'&&<span className="controller-glow" aria-hidden="true"/>}</button>}
    {boxes.hair&&<button ref={buttonRef('hair')} className="scene-easter-target easter-hair" style={boxes.hair} aria-label={easterEggs.hair.label} onClick={e=>{e.stopPropagation();trigger('hair');}}>
      <span className="easter-spark" aria-hidden="true">✧</span>
      {active==='hair'&&<svg className="hair-spring" viewBox="0 0 52 56" aria-hidden="true"><path d="M26 53C10 43 10 31 24 25C41 18 42 39 28 37C15 35 19 14 33 9C42 6 44 13 40 17" fill="none" stroke="#805b40" strokeWidth="7" strokeLinecap="round"/><path d="M26 52C13 42 13 32 26 26C39 20 39 35 28 34C19 32 23 16 34 11" fill="none" stroke="#c39a6d" strokeWidth="3" strokeLinecap="round"/></svg>}
    </button>}
    {boxes.cat&&<button ref={buttonRef('cat')} className="scene-easter-target easter-cat" style={boxes.cat} aria-label={easterEggs.cat.label} onClick={e=>{e.stopPropagation();trigger('cat');}}><span className="easter-spark" aria-hidden="true">✧</span></button>}
    {cookie&&<button ref={buttonRef('cookie')} className="scene-easter-target easter-cookie" style={boxes.cookie} aria-label={easterEggs.cookie.label} disabled={cookieTaken} onClick={e=>{e.stopPropagation();trigger('cookie');}}>
      <svg viewBox="0 0 110 80" aria-hidden="true"><ellipse cx="55" cy="62" rx="49" ry="14" fill="#fff7ed" stroke="#a4818c" strokeWidth="2"/><ellipse cx="55" cy="61" rx="39" ry="8" fill="#f3cbd9"/>
        <g fill="#d4aa75" stroke="#8e664d" strokeWidth="1.8"><circle cx="37" cy="49" r="18"/><circle cx="72" cy="48" r="18"/>{!cookieTaken&&<circle cx="54" cy="29" r="18"/>}</g>
        <g fill="#795240"><circle cx="30" cy="43" r="2.5"/><circle cx="43" cy="51" r="3"/><circle cx="31" cy="56" r="2"/><circle cx="67" cy="42" r="3"/><circle cx="77" cy="51" r="2.5"/><circle cx="65" cy="55" r="2"/>{!cookieTaken&&<><circle cx="49" cy="24" r="3"/><circle cx="60" cy="31" r="2.5"/><circle cx="48" cy="36" r="2"/></>}</g>
      </svg>{active==='cookie'&&<span className="cookie-crumbs" aria-hidden="true"><i/><i/><i/></span>}
    </button>}
    {active&&<aside className="scene-easter-note" data-egg={active} aria-label="Маленькая реакция"><div role="status"><b>Влад</b><p>{easterEggs[active].text}</p></div><button className="scene-easter-dismiss" aria-label="Скрыть маленькую реакцию" onClick={dismiss}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></aside>}
  </div>;
}
