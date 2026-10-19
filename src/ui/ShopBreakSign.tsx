import { useEffect,useState,type RefObject } from 'react';

// Same cover/38% projection as the background; the little sign belongs to
// the shop window rather than floating at a viewport-relative position.
export function ShopBreakSign({stage}:{stage:RefObject<HTMLDivElement|null>}){
  const [position,setPosition]=useState<{left:number;top:number;width:number}|null>(null);
  useEffect(()=>{
    const element=stage.current;if(!element)return;
    function measure(){
      const image=element!.querySelector<HTMLImageElement>('.scene-background');
      if(!image?.naturalWidth||!image.naturalHeight)return;
      const {width,height}=element!.getBoundingClientRect();
      const scale=Math.max(width/image.naturalWidth,height/image.naturalHeight),w=image.naturalWidth*scale,h=image.naturalHeight*scale;
      setPosition({left:(width-w)/2+w*.16,top:(height-h)*.38+h*.64,width:w*.15});
    }
    const observer=new ResizeObserver(measure);observer.observe(element);element.addEventListener('load',measure,true);measure();
    return()=>{observer.disconnect();element.removeEventListener('load',measure,true);};
  },[stage]);
  return position?<span className="shop-break-sign" style={position}>Перерыв</span>:null;
}
