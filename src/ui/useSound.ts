import { createContext,useCallback,useContext,useEffect,useRef,useState } from 'react';

type RhythmicEffect='purr'|'projector';
export type SoundEffect='token'|'shutter'|'bell'|'wood'|'paper'|'star'|'switch'|'oven-timer'|'kettle'|RhythmicEffect;
export type Ambience='rain-open'|'rain-shelter'|'kitchen'|'steam';

const ambienceFade=0.6;
const silence=0.00001;
const cycle=2*Math.PI;

function noiseBuffer(context:AudioContext,duration:number,brown=false){
  const buffer=context.createBuffer(1,Math.ceil(context.sampleRate*duration),context.sampleRate);
  const samples=buffer.getChannelData(0);
  let previous=0;
  for(let i=0;i<samples.length;i++){
    const white=Math.random()*2-1;
    if(brown){
      previous=(previous+white*0.02)/1.02;
      samples[i]=previous*3.5;
    }else samples[i]=white;
  }
  return buffer;
}

type Note={from:number;to?:number;length:number;level:number;attack?:number;wave?:OscillatorType};
const notes:Partial<Record<SoundEffect,readonly Note[]>>={
  token:[{from:640,to:820,length:0.12,level:0.12}],
  shutter:[{from:180,to:70,length:0.045,level:0.23,wave:'triangle'}],
  bell:[{from:784,length:0.6,level:0.13,attack:0.01},{from:1571,length:0.42,level:0.045,attack:0.006}],
  star:[{from:1047,length:0.24,level:0.075},{from:1568,length:0.16,level:0.032}],
  switch:[{from:170,to:95,length:0.026,level:0.14,wave:'triangle'}],
  'oven-timer':[{from:870,length:0.085,level:0.055}],
  kettle:[{from:215,to:142,length:0.063,level:0.095,wave:'triangle'}],
};

function soundNote(context:AudioContext,time:number,volume:number,note:Note){
  const oscillator=context.createOscillator(),gain=context.createGain();
  const end=time+note.length;
  oscillator.type=note.wave??'sine';
  oscillator.frequency.setValueAtTime(note.from,time);
  if(note.to)oscillator.frequency.exponentialRampToValueAtTime(note.to,end);
  gain.gain.setValueAtTime(0,time);
  gain.gain.linearRampToValueAtTime(Math.max(silence,volume*note.level),time+(note.attack??0.003));
  gain.gain.exponentialRampToValueAtTime(silence,end);
  oscillator.connect(gain).connect(context.destination);
  oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};
  oscillator.start(time);
  oscillator.stop(end);
}

type Pulse=readonly [offset:number,attack:number,decay:number,level:number];
type Texture={duration:number;from:number;to?:number;q:number;pulses:readonly Pulse[]};
const textures:Partial<Record<SoundEffect,Texture>>={
  shutter:{duration:0.18,from:2150,to:950,q:1,pulses:[[0,0.002,0.03,0.58],[0.049,0.002,0.026,0.21],[0.083,0.002,0.026,0.15],[0.12,0.002,0.026,0.1]]},
  wood:{duration:0.13,from:690,to:540,q:2.4,pulses:[[0,0.001,0.045,0.64],[0.068,0.001,0.05,0.4]]},
  paper:{duration:0.14,from:1250,to:1850,q:0.75,pulses:[[0,0.014,0.046,0.23],[0.062,0.018,0.06,0.18]]},
  switch:{duration:0.033,from:1950,to:1150,q:1.35,pulses:[[0,0.001,0.028,0.52]]},
  'oven-timer':{duration:0.055,from:1700,to:1280,q:1.5,pulses:[[0,0.002,0.045,0.28]]},
  kettle:{duration:0.085,from:1210,to:650,q:1.15,pulses:[[0,0.002,0.037,0.43],[0.047,0.002,0.026,0.17]]},
};

function soundTexture(context:AudioContext,time:number,volume:number,texture:Texture){
  const source=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();
  source.buffer=noiseBuffer(context,texture.duration);
  filter.type='bandpass';
  filter.Q.value=texture.q;
  filter.frequency.setValueAtTime(texture.from,time);
  if(texture.to)filter.frequency.exponentialRampToValueAtTime(texture.to,time+texture.duration);
  for(const [offset,attack,decay,level] of texture.pulses){
    const start=time+offset;
    gain.gain.setValueAtTime(0,start);
    gain.gain.linearRampToValueAtTime(Math.max(silence,volume*level),start+attack);
    gain.gain.exponentialRampToValueAtTime(silence,start+attack+decay);
  }
  source.connect(filter).connect(gain).connect(context.destination);
  source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();};
  source.start(time);
}

function soundRhythm(context:AudioContext,time:number,volume:number,kind:RhythmicEffect){
  const purr=kind==='purr';
  const duration=purr?1.35:2.45;
  const buffer=noiseBuffer(context,duration,purr);
  const samples=buffer.getChannelData(0);
  for(let i=0;i<samples.length;i++){
    const t=i/context.sampleRate;
    const attack=purr?0.13:0.24;
    const release=purr?0.34:0.45;
    const envelope=Math.min(1,t/attack,(duration-t)/release);
    const rotation=purr?24*t+0.10*Math.sin(cycle*1.15*t):24*t-0.42*(1-Math.exp(-8*t));
    const pulse=(0.5+0.5*Math.cos(cycle*rotation))**2;
    const body=purr?0.18*Math.sin(cycle*96*t)+0.09*Math.sin(cycle*143*t):0.13*Math.sin(cycle*120*t);
    const flutter=purr?0.19+0.81*pulse:0.12+0.88*pulse;
    samples[i]=(body+samples[i]*(purr?0.48:0.72))*flutter*envelope;
  }
  const source=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();
  source.buffer=buffer;
  filter.type='lowpass';
  filter.frequency.value=purr?430:1550;
  gain.gain.value=volume*(purr?0.28:0.17);
  source.connect(filter).connect(gain).connect(context.destination);
  source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();};
  source.start(time);
  return source;
}

const filterFrequencies:Record<Ambience,number>={'rain-open':900,'rain-shelter':520,kitchen:2200,steam:2100};

function startAmbience(context:AudioContext,volume:number,kind:Ambience){
  const time=context.currentTime;
  const level=volume*0.16;
  const source=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();
  const texture=context.createGain();
  const highShelf=kind==='kitchen'?context.createBiquadFilter():undefined;
  source.buffer=noiseBuffer(context,6,kind!=='kitchen'&&kind!=='steam');
  source.loop=true;
  filter.type=kind==='steam'?'bandpass':'lowpass';
  filter.frequency.value=filterFrequencies[kind];
  if(kind==='steam'){
    filter.Q.value=0.7;
    texture.gain.value=0.32;
  }
  gain.gain.setValueAtTime(0,time);
  gain.gain.linearRampToValueAtTime(level,time+ambienceFade);
  source.connect(filter);
  if(highShelf){
    highShelf.type='highshelf';
    highShelf.frequency.value=1500;
    highShelf.gain.value=3;
    filter.connect(highShelf).connect(texture);
    texture.gain.value=0.32;
  }else filter.connect(texture);
  texture.connect(gain).connect(context.destination);
  source.onended=()=>{
    source.disconnect();filter.disconnect();texture.disconnect();gain.disconnect();highShelf?.disconnect();
  };
  source.start(time);
  return ()=>{
    if(context.state==='closed')return;
    const now=context.currentTime;
    if(context.state==='running'){
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(level*Math.min(1,(now-time)/ambienceFade),now);
      gain.gain.linearRampToValueAtTime(0,now+ambienceFade);
      source.stop(now+ambienceFade);
    }else{
      source.disconnect();
      source.stop();
    }
  };
}

type SoundPlayer={play:(kind:SoundEffect)=>boolean;ready:boolean;setAmbience:(ambience:Ambience|null)=>void};
export const SoundContext=createContext<SoundPlayer>({play:()=>false,ready:false,setAmbience:()=>{}});

export function useSoundPlayer(enabled:boolean,volume:number):SoundPlayer{
  const context=useRef<AudioContext|null>(null);
  const playingRhythms=useRef<Partial<Record<RhythmicEffect,AudioBufferSourceNode>>>({});
  const [unlocked,setUnlocked]=useState(false);
  const [visible,setVisible]=useState(()=>typeof document==='undefined'||!document.hidden);
  const [ambience,setAmbience]=useState<Ambience|null>(null);
  const audible=enabled&&volume>0;

  const unlock=useCallback(()=>{
    if(!audible||document.hidden)return;
    try {
      const audio=context.current??=new AudioContext();
      if(audio.state==='running')setUnlocked(true);
      else void audio.resume().then(()=>{if(context.current===audio)setUnlocked(true);}).catch(()=>{});
    }catch{/* Sound is optional on devices without Web Audio. */}
  },[audible]);

  useEffect(()=>{
    if(!audible)return;
    // Capture the input before an action replaces the current scene or opens the album.
    window.addEventListener('pointerup',unlock,true);
    window.addEventListener('keydown',unlock,true);
    window.addEventListener('click',unlock,true);
    return()=>{
      window.removeEventListener('pointerup',unlock,true);
      window.removeEventListener('keydown',unlock,true);
      window.removeEventListener('click',unlock,true);
    };
  },[audible,unlock]);

  useEffect(()=>{
    let suspend:ReturnType<typeof setTimeout>|undefined;
    function visibilityChanged(){
      setVisible(!document.hidden);
      clearTimeout(suspend);
      if(document.hidden){
        suspend=setTimeout(()=>{if(document.hidden)void context.current?.suspend().catch(()=>{});},ambienceFade*1000+30);
      }else if(unlocked)unlock();
    }
    document.addEventListener('visibilitychange',visibilityChanged);
    visibilityChanged();
    return()=>{
      document.removeEventListener('visibilitychange',visibilityChanged);
      clearTimeout(suspend);
    };
  },[unlock,unlocked]);

  const ready=audible&&unlocked&&visible;
  useEffect(()=>{
    const audio=context.current;
    if(ready&&ambience&&audio)return startAmbience(audio,volume,ambience);
  },[ambience,ready,volume]);

  useEffect(()=>{
    if(audible&&visible)return;
    for(const source of Object.values(playingRhythms.current))source.stop();
    playingRhythms.current={};
  },[audible,visible]);

  useEffect(()=>()=>{
    const audio=context.current;
    context.current=null;
    void audio?.close().catch(()=>{});
  },[]);

  const play=useCallback((kind:SoundEffect)=>{
    const audio=context.current;
    if(!audible||document.hidden||!audio)return false;
    try {
      const time=audio.currentTime;
      if(kind==='purr'||kind==='projector'){
        if(playingRhythms.current[kind])return true;
        const source=soundRhythm(audio,time,volume,kind);
        playingRhythms.current[kind]=source;
        source.addEventListener('ended',()=>{
          if(playingRhythms.current[kind]===source)delete playingRhythms.current[kind];
        },{once:true});
        return true;
      }
      for(const note of notes[kind]??[])soundNote(audio,time,volume,note);
      const texture=textures[kind];
      if(texture)soundTexture(audio,time,volume,texture);
      return true;
    }catch{return false;}
  },[audible,volume]);

  return {play,ready,setAmbience};
}

export function useSound(){return useContext(SoundContext);}

export function useSoundCue(kind:SoundEffect|undefined,key:string|undefined,paused=false){
  const {play,ready}=useSound();
  const lastPlayed=useRef<string|undefined>(undefined);
  useEffect(()=>{
    if(kind&&key&&ready&&!paused&&lastPlayed.current!==key&&play(kind))lastPlayed.current=key;
  },[kind,key,paused,play,ready]);
}
