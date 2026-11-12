import {chapters} from '../src/content/chapters/manifest';
import {photoAt,finishPhotoSix,startPhotoSix,photoCommand,photoPath,type PhotoPath} from './photo6Helpers';
import type {NodeId} from '../src/engine/types';
export const sixthCode=chapters.find(c=>c.id===6)!.code!;
export type SixthPath=Partial<PhotoPath>;
export const defaultSixth={...photoPath,gesture:'hand'} as const;
export const action6=photoCommand;
export const startSix=startPhotoSix;
export function finishSix(base?:Parameters<typeof finishPhotoSix>[0],path:SixthPath=defaultSixth,trial=false){return finishPhotoSix(base,path,trial);}
export function sixAt(id:string,path:SixthPath=defaultSixth,base?:Parameters<typeof photoAt>[2]){const ids:Record<string,NodeId>={'c6.map':'c6.photo.place','c6.ending':'c6.photo.touch','c6.note':'c6.photo.gallery'};return photoAt(ids[id]??id as NodeId,path,base);}
