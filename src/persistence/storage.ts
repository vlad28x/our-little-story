import { initialState } from '../state/initialState';
import type { SaveV1 } from '../state/types';
import { parseSave } from './validateSave';
export type StorageLike=Pick<Storage,'getItem'|'setItem'|'removeItem'>;
export const storageKey=`five-meetings:${import.meta.env.BASE_URL}:save`;
export const backupKey=`five-meetings:${import.meta.env.BASE_URL}:backup`;
export type Loaded={save:SaveV1;recovery:boolean;backup:SaveV1|null;raw:string|null;error:string|null};
export function load(storage:StorageLike, key=storageKey):Loaded {
  let raw:string|null=null;
  try {
    // Only this published rename shares progress; dev and other games stay isolated.
    // Read the old snapshot without changing it, including its recovery state.
    if(key==='five-meetings:/our-little-story/:save'&&storage.getItem(key)===null&&storage.getItem(key.replace(/:save$/,':backup'))===null){
      return load(storage,'five-meetings:/little-projects/:save');
    }
    raw=storage.getItem(key);
    if(raw!==null)return {save:parseSave(raw),recovery:false,backup:null,raw,error:null};
    const spare=storage.getItem(key.replace(/:save$/,':backup'));
    if(spare!==null)return {save:initialState(),recovery:true,backup:parseSave(spare),raw:spare,error:'Основная копия отсутствует. Можно восстановить резервную.'};
    return {save:initialState(),recovery:false,backup:null,raw:null,error:null};
  }catch(error){
    let backup:SaveV1|null=null;try {const b=storage.getItem(key.replace(/:save$/,':backup'));if(b)backup=parseSave(b);}catch{/* Keep damaged bytes intact. */}
    return {save:initialState(),recovery:raw!==null||backup!==null,backup,raw,error:raw!==null?String(error instanceof Error?error.message:error):'В этом браузере прогресс сейчас не сохраняется. Скачайте копию в настройках.'};
  }
}
export function persist(storage:StorageLike,save:SaveV1,expectedRevision:number,key=storageKey):'saved'|'conflict' {
  const raw=JSON.stringify(parseSave(JSON.stringify(save)));
  const old=storage.getItem(key);let previous:SaveV1|null=null;
  try {if(old)previous=parseSave(old);}catch{/* Do not rotate corrupt data into backup. */}
  if(previous&&previous.revision!==expectedRevision)return 'conflict';
  if(old&&previous){try{storage.setItem(key.replace(/:save$/,':backup'),old);}catch{/* Main write may still succeed. */}}
  storage.setItem(key,raw);return 'saved';
}
