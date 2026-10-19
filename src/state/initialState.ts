import type { SaveV1 } from './types';
export function initialState():SaveV1 { return {
  appId:'five-meetings',schemaVersion:1,contentVersion:6,revision:0,updatedAt:new Date().toISOString(),
  settings:{sound:false,volume:0.25,textMode:'instant',motion:'system'},unlocked:[1],
  campaign:{completed:[],startStates:{},records:{},active:null},trial:null,lastResult:null,
  collection:{cards:[],achievements:[],bonuses:[]},privateNotes:{},localNoteRevision:0,continuation:null,
}; }
