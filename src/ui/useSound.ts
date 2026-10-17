import { useEffect, useRef } from 'react';
export function useSound(enabled:boolean,volume:number){
  const context=useRef<AudioContext|null>(null);
  useEffect(()=>{function pause(){if(document.hidden)void context.current?.suspend();}document.addEventListener('visibilitychange',pause);return()=>document.removeEventListener('visibilitychange',pause);},[]);
  useEffect(()=>()=>{void context.current?.close();},[]);
  return (kind:'tap'|'token'='tap')=>{if(!enabled)return;try {const c=context.current??new AudioContext();context.current=c;void c.resume();const oscillator=c.createOscillator(),gain=c.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(kind==='token'?700:480,c.currentTime);oscillator.frequency.exponentialRampToValueAtTime(kind==='token'?950:320,c.currentTime+0.09);gain.gain.setValueAtTime(volume*0.12,c.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,c.currentTime+0.12);oscillator.connect(gain);gain.connect(c.destination);oscillator.start();oscillator.stop(c.currentTime+0.13);}catch{/* Audio is optional. */}};
}
