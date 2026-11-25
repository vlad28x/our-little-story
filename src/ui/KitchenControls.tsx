import { useEffect, useId, useRef, useState, type RefObject } from 'react';
import { easterEggs } from '../content/easterEggs';
import type { SkyShape } from '../minigames/constellationModel';
import { ConstellationArt } from './ConstellationArt';
import { EasterReaction } from './SceneEasterEggs';

type ControllerCheck = {
  active: boolean;
  discovered: boolean;
  button: RefObject<HTMLButtonElement | null>;
  onClick: () => void;
};

const housing = 'M30 28C42 22 54 25 72 25s30-3 42 3c11 5 17 17 22 33 4 13-1 20-9 20-10 0-17-9-27-16-5-4-9-5-15-5H59c-6 0-10 1-15 5-10 7-17 16-27 16-8 0-13-7-9-20 5-16 11-28 22-33Z';

export function KitchenControls({ ready = false, constellation, check }: {
  ready?: boolean;
  constellation?: SkyShape;
  check?: ControllerCheck;
}) {
  const id = useId().replace(/:/g, '');
  return <div className="controller-pair">
    {[true,ready].map((lit,index)=>{
      const suffix = `${id}-${index}`;
      const pad = <svg viewBox="0 0 144 94" aria-hidden="true">
        <defs>
          <linearGradient id={`${suffix}-case`} x2=".72" y2="1">
            <stop stopColor="#a69b9b"/><stop offset=".42" stopColor="#716b74"/><stop offset="1" stopColor="#4c454f"/>
          </linearGradient>
          <linearGradient id={`${suffix}-side`} x2="0" y2="1">
            <stop stopColor="#665961"/><stop offset="1" stopColor="#393039"/>
          </linearGradient>
          <radialGradient id={`${suffix}-led`}>
            <stop stopColor="#f5e7b5" stopOpacity=".9"/><stop offset="1" stopColor="#f5e7b5" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="72" cy="83" rx="60" ry="6" fill="#4a3034" opacity=".15"/>
        <path d="M25 31v-6q10-7 24-5l1 5m69 6v-6q-10-7-24-5l-1 5" fill="#49414b" stroke="#71616b" strokeWidth="1.3"/>
        <path d={housing} transform="translate(0 4)" fill={`url(#${suffix}-side)`} stroke="#4e4249" strokeWidth="1.3"/>
        <path d={housing} fill={`url(#${suffix}-case)`} stroke="#5e515a" strokeWidth="1.35"/>
        <path d="M32 29q16-5 29-2m22 0q16-2 29 2M15 58q-5 17 0 20m114-20q5 17 0 20" fill="none" stroke="#dbc0ae" strokeWidth="1.55" strokeLinecap="round" opacity=".48"/>
        <path d="M15 73q1 10 9 5m-3-5q4 0 12-8m96 8q-1 10-9 5m3-5q-4 0-12-8" fill="none" stroke="#9f8c92" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
        <ellipse cx="37" cy="45" rx="15" ry="12" fill="#4e454d"/>
        <path d="M33 35h8v7h8v7h-8v7h-8v-7h-8v-7h8Z" fill="#c1b1a5" stroke="#51434a" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M35 37h4m-12 7h6" stroke="#ead6bd" strokeWidth="1.1" strokeLinecap="round"/>
        <ellipse cx="105" cy="45" rx="17" ry="13" fill="#50454e"/>
        <g stroke="#50434a" strokeWidth="1.1">
          <ellipse cx="105" cy="36" rx="4.6" ry="3.8" fill="#a1aa96"/><ellipse cx="115" cy="45" rx="4.6" ry="3.8" fill="#c59a9e"/>
          <ellipse cx="95" cy="45" rx="4.6" ry="3.8" fill="#a69bb5"/><ellipse cx="105" cy="54" rx="4.6" ry="3.8" fill="#c7a36b"/>
        </g>
        <path d="M103 34h2m8 9h2m-22 0h2m8 9h2" stroke="#f7dfc7" strokeWidth="1" strokeLinecap="round" opacity=".75"/>
        {[56,88].map(x=><g key={x}>
          <ellipse cx={x} cy="58" rx="9" ry="8" fill="#39323a"/>
          <ellipse cx={x} cy="56" rx="6.15" ry="5.3" fill="#615762" stroke="#87777d" strokeWidth="1.15"/>
          <path d={`M${x-3.5} 55q3.5-2 7 0`} fill="none" stroke="#b09695" strokeWidth="1" opacity=".6"/>
        </g>)}
        {index===1&&constellation&&<g transform="rotate(-5 72 45)">
          <rect x="61" y="37" width="22" height="16" rx="2.5" fill="#dbc6ac" stroke="#9f8374" strokeWidth=".85"/>
          <ConstellationArt shape={constellation} ink className="controller-constellation" viewport={{x:62.5,y:38.5,width:19,height:13}}/>
        </g>}
        {lit&&<circle className={index===1&&check?.active?'controller-glow':undefined} cx="72" cy="30" r={index===1&&check?.active?15:9} fill={`url(#${suffix}-led)`}/>}
        <ellipse cx="72" cy="30" rx="4.2" ry="3.4" fill={lit?'#fff0c6':'#4e414b'} stroke="#5b4c53" strokeWidth="1.25"/>
        {lit&&<circle cx="71" cy="29" r="1.15" fill="#fff9e4"/>}
      </svg>;
      return index===1&&check
        ? <button key={index} ref={check.button} className="controller-item controller-check" aria-label={easterEggs.controller.label} aria-expanded={check.active} onClick={check.onClick}>
          {pad}
          {!check.discovered&&<span className="easter-spark" aria-hidden="true">✧</span>}
        </button>
        : <div key={index} className="controller-item">{pad}</div>;
    })}
  </div>;
}

export function KitchenControllerScene({ready,constellation,interactive,context,reduced,onDiscover}:{
  ready:boolean; constellation?:SkyShape; interactive:boolean; context:string; reduced:boolean; onDiscover?:()=>void;
}){
  const [discovered,setDiscovered]=useState(false);
  const [reaction,setReaction]=useState<string|null>(null);
  const button=useRef<HTMLButtonElement>(null);
  useEffect(()=>{setReaction(null);},[context,interactive]);
  const active=interactive&&reaction===context;

  function check(){
    if(active)return;
    setDiscovered(true);
    setReaction(context);
    onDiscover?.();
  }

  return <div className="controller-scene" data-reduced={reduced}>
    <KitchenControls ready={ready} constellation={constellation} check={interactive?{active,discovered,button,onClick:check}:undefined}/>
    {active&&<EasterReaction id="controller" onDismiss={()=>{setReaction(null);button.current?.focus({preventScroll:true});}}/>}
  </div>;
}
