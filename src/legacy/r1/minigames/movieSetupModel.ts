import type { MovieSetupDraft,MovieSetupAction,MovieSetupResult } from '../engine/types';
import { exactObject,oneOf } from './settingValidation';
export const seats=['near','space'] as const,lights=['warm','dim'] as const,drinks=['tea','cocoa','water'] as const;
export const seatNames={near:'Рядом',space:'Чуть больше пространства'},lightNames={warm:'Тёплый',dim:'Приглушённый'},drinkNames={tea:'Чай',cocoa:'Какао',water:'Вода'};
export function initialMovie():MovieSetupDraft{return {kind:'movie-setup',seat:null,light:null,drink:null};}
export function validMovieDraft(x:unknown):x is MovieSetupDraft{return exactObject(x,['kind','seat','light','drink'])&&x.kind==='movie-setup'&&(x.seat===null||oneOf(x.seat,seats))&&(x.light===null||oneOf(x.light,lights))&&(x.drink===null||oneOf(x.drink,drinks));}
export function movieSetupReduce(d:MovieSetupDraft,a:MovieSetupAction):MovieSetupDraft{
 if(!validMovieDraft(d))return d;
 if(a.kind==='reset'&&exactObject(a,['kind']))return d.seat===null&&d.light===null&&d.drink===null?d:initialMovie();
 if(!exactObject(a,['kind','value']))return d;
 if(a.kind==='set-seat'&&oneOf(a.value,seats))return d.seat===a.value?d:{...d,seat:a.value};
 if(a.kind==='set-light'&&oneOf(a.value,lights))return d.light===a.value?d:{...d,light:a.value};
 if(a.kind==='set-drink'&&oneOf(a.value,drinks))return d.drink===a.value?d:{...d,drink:a.value};return d;
}
export function validMovieResult(x:unknown):x is MovieSetupResult{
 if(!exactObject(x,['kind','mode','seat','light','drink'])||x.kind!=='movie-setup')return false;
 return x.mode==='completed'?oneOf(x.seat,seats)&&oneOf(x.light,lights)&&oneOf(x.drink,drinks):x.mode==='shared'?x.seat==='space'&&x.light==='warm'&&x.drink==='tea':x.mode==='skipped'&&x.seat===null&&x.light===null&&x.drink===null;
}
export function acceptsMovieResult(d:MovieSetupDraft,r:unknown):r is MovieSetupResult{return validMovieDraft(d)&&validMovieResult(r)&&(r.mode!=='completed'||d.seat===r.seat&&d.light===r.light&&d.drink===r.drink);}
