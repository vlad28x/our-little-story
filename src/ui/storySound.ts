import type { Run } from '../engine/types';
import type { Ambience,SoundEffect } from './useSound';

const cues:Record<string,Partial<Record<number,SoundEffect>>>={
  'c1.entry':{0:'bell',3:'wood'},
  'c5.letter':{0:'paper'},
  'c5.exit':{2:'bell'},
  'c8.supper.open':{12:'oven-timer'},
  'c9.courtyard.filmStart':{0:'projector'},
  'c9.courtyard.resume':{0:'projector'},
  'c9.courtyard.lab':{4:'paper'},
  'c10.travellers.entry':{0:'bell'},
  'c10.travellers.prints':{3:'paper'},
  'c10.travellers.ford':{0:'wood'},
  'c10.travellers.bridge':{1:'wood'},
  'c10.travellers.tunnel':{1:'wood'},
  'c10.travellers.contour':{1:'wood'},
  'c10.travellers.cat':{0:'purr',5:'purr',10:'wood'},
  'c10.travellers.marsh':{0:'wood'},
  'c10.travellers.upperDay':{0:'wood'},
  'c10.travellers.upperNight':{2:'wood'},
  'c10.travellers.sleep':{8:'kettle'},
  'c10.travellers.privateMorning':{0:'kettle'},
};

const courtyardShelter=new Set([
  'canopy','arch','warmth','movieTalk','movieChoice','movieDrama','movieWarm','movieMystery',
  'nextCoop','nextOther','nextDate','bet','betChoice','betTogether','betAlone','betSkip',
]);
const riverBackgrounds=new Set(['bg.river.evening','bg.photo6.sun','bg.photo6.shade']);

export function storyCue({nodeId,lineIndex}:Run,fade:boolean):SoundEffect|undefined{
  if(fade&&nodeId==='c10.travellers.private')return 'switch';
  return cues[nodeId]?.[lineIndex];
}

export function storyAmbience({chapter,nodeId,lineIndex}:Run,background:string,lastLine:boolean):Ambience|null{
  if(chapter===2){
    if(nodeId==='c2.rain.intro'||nodeId==='c2.rain')return 'rain-open';
    if(nodeId==='c2.rain.shelter'||nodeId==='c2.rain.arcade'||nodeId.startsWith('c2.pause'))return 'rain-shelter';
  }
  if(chapter===9){
    const scene=nodeId.slice('c9.courtyard.'.length);
    if(scene==='rain'||scene==='rainAside'||scene==='rainChoice')return 'rain-open';
    if(scene==='leave')return lineIndex<2?'rain-open':'rain-shelter';
    if(courtyardShelter.has(scene)||scene==='earlyWalk'&&!lastLine)return 'rain-shelter';
  }
  if((chapter===3||chapter===6)&&riverBackgrounds.has(background))return 'river';
  if(nodeId==='c8.supper.fold'&&lineIndex>=2&&lineIndex<10)return 'kitchen';
  if(nodeId==='c8.supper.open'&&lineIndex>=9&&lineIndex<12)return 'kitchen';
  if(nodeId==='c8.supper.meal'&&lineIndex===11)return 'steam';
  if(chapter===10&&background==='bg.travellers10.morning')return 'morning';
  return null;
}
