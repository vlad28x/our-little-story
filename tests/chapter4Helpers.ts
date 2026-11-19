// Shared first-four fixture: stars first, then the game. Sky options remain convenient for fifth-chapter tests.
import {completeTwo,finishThree,defaultThird} from './chapter3Helpers';
import {finishSky,skyCommand,defaultSky,type SkyPath,startSky} from './sky3Helpers';
import {reduceSave} from '../src/state/reducer';
import type {SaveV1} from '../src/state/types';
export type FourthPath=SkyPath;
export const defaultFourth=defaultSky;
export const fourthCode='NEBO-4L8N';
export const command4=skyCommand;
export const startFour=startSky;
export function finishFour(base?:SaveV1,p=defaultSky,trial=false,check=false):SaveV1{
 if(trial)return finishSky(base??finishFour(),p,true,check);
 let save=base??completeTwo();
 const oldGame=save.campaign.records[4],result=oldGame?.results.kitchen;
 const game=oldGame&&result?{reaction:oldGame.story.controllerReaction!,team:oldGame.story.teamName!,style:oldGame.story.kitchenStyle!,after:oldGame.story.gameAftercare!,result}:defaultThird;
 if(save.campaign.completed.includes(3)){
  save=reduceSave(save,{type:'rewrite',chapter:3});
  for(let i=0;i<180&&save.campaign.active;i++){const run=save.campaign.active;save=reduceSave(save,{type:'command',target:'campaign',command:skyCommand(run,p)});}
 }else save=finishSky(save,p,false,check);
 return finishThree(save,game,false,check);
}
