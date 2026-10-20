import type { SaveV1 } from '../src/state/types';
import type { Run,DessertResult,MovieSetupResult,EveningLightResult } from '../src/engine/types';
import { finishSeven } from './chapter7Helpers';
import { r2Action,startR2,finishR2,r2At,type R2Path } from './r2Helpers';
export type ArcChapter=8|9|10;
export type ArcPath={place:'home'|'cafe'|'courtyard'|'terrace';guide:'angel'|'devil'|'none';thought:'curious'|'bold'|'slow';ending:string;approach:'her'|'ask'|'back';word:'minute'|'slow'|'taks'|'custom'|'none';wordText?:string;dance:'close'|'lead'|'playful';note?:string;bonus:boolean;memory9:'place'|'idea'|'wait'|'none';memory10:'pause'|'laugh'|'initiative'|'none';move:'home'|'stay'|'goodnight';confirm:'yes'|'quiet'|'leave';dessert:DessertResult;movie:MovieSetupResult;light:EveningLightResult};
export const defaultArc:ArcPath={place:'home',guide:'angel',thought:'curious',ending:'kiss',approach:'her',word:'custom',wordText:'Наше такс',dance:'close',note:'Личная мысль для себя',bonus:true,memory9:'idea',memory10:'pause',move:'home',confirm:'yes',dessert:{kind:'dessert',mode:'completed',topping:'berry',mark:'heart'},movie:{kind:'movie-setup',mode:'completed',seat:'near',light:'warm',drink:'cocoa'},light:{kind:'evening-light',level:'warm'}};
function path(chapter:ArcChapter,p:ArcPath):R2Path{
 return {choices:{
 ['c'+chapter+'.r3.place']:p.place,
 'c8.r3.word':p.word,'c8.r3.dance':p.dance,'c8.r3.gesture':p.ending==='kiss'?'curls':'playful','c8.r3.kiss.answer':p.approach==='back'?'dance':'yes','c8.r3.playful.continue':'tea','c8.r3.hoodie':'none','c8.r3.ending':'tea',
 'c9.r3.second':p.ending==='kiss'?'hug':'watch','c9.r3.kiss':p.approach==='back'?'hug':'yes','c9.r3.ending':'credits',
 'c10.r3.memory':p.memory10,'c10.r3.aside.reply':'self','c10.r3.ending.home':p.ending,'c10.r3.ending.terrace':p.ending,'c10.r3.move':p.move,'c10.r3.private.choice':p.confirm==='leave'?'goodnight':p.confirm==='quiet'?'stay':'private','c10.r3.night':'hug'
 },word:p.wordText,note:p.note,results:{dessert:p.dessert,'movie-setup':p.movie,'evening-light':p.light}};
}
export function actionArc(r:Run,p:ArcPath=defaultArc,target:'campaign'|'trial'='campaign'){return r2Action(r,path(r.chapter as ArcChapter,p),target);}
export function startArc(chapter:ArcChapter,base:SaveV1=priorArc(chapter),trial=false){return startR2(chapter,base,trial);}
export function finishArc(chapter:ArcChapter,base?:SaveV1,options:Partial<ArcPath>={},trial=false){const p={...defaultArc,ending:chapter===10?'private':'kiss',...options};return finishR2(chapter,path(chapter,p),base??priorArc(chapter),trial);}
export function priorArc(chapter:ArcChapter):SaveV1{return chapter===8?finishSeven():chapter===9?finishArc(8):finishArc(9);}
export function arcAt(chapter:ArcChapter,id:string,options:Partial<ArcPath>={},base?:SaveV1){const p={...defaultArc,ending:chapter===10?'private':'kiss',...options};return r2At(chapter,id.replace(`c${chapter}.`,`c${chapter}.r3.`),path(chapter,p),base??priorArc(chapter));}
