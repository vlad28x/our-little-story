import type { EveningLightDraft,EveningLightAction,EveningLightResult } from '../engine/types';
import { exactObject,oneOf } from './settingValidation';
export const eveningLights=['warm','dim','unchanged'] as const;
export function initialLight():EveningLightDraft{return {kind:'evening-light',level:null};}
export function validLightDraft(x:unknown):x is EveningLightDraft{return exactObject(x,['kind','level'])&&x.kind==='evening-light'&&(x.level===null||oneOf(x.level,eveningLights));}
export function eveningLightReduce(d:EveningLightDraft,a:EveningLightAction):EveningLightDraft{
 if(!validLightDraft(d))return d;
 if(a.kind==='toggle'&&exactObject(a,['kind']))return {...d,level:d.level==='dim'?'warm':'dim'};
 if(a.kind==='select'&&exactObject(a,['kind','level'])&&oneOf(a.level,eveningLights))return d.level===a.level?d:{...d,level:a.level};return d;
}
export function validLightResult(x:unknown):x is EveningLightResult{return exactObject(x,['kind','level'])&&x.kind==='evening-light'&&oneOf(x.level,eveningLights);}
export function acceptsLightResult(d:EveningLightDraft,r:unknown):r is EveningLightResult{return validLightDraft(d)&&validLightResult(r)&&d.level===r.level;}
