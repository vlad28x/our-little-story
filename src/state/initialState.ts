import type { SaveV1 } from './types';
import { CONTENT_VERSION } from '../content/version';
export function initialState():SaveV1 { return {
  appId:'five-meetings',schemaVersion:1,contentVersion:CONTENT_VERSION,revision:0,updatedAt:new Date().toISOString(),
  settings:{sound:false,volume:0.25,textMode:'instant',motion:'system'},unlocked:[1],
  campaign:{completed:[],startStates:{},records:{},active:null},trial:null,lastResult:null,
  collection:{cards:[],achievements:[],memories:[],secrets:[]},privateNotes:{},privateWords:{},localNoteRevision:0,continuation10:null,continuation:null,
}; }
