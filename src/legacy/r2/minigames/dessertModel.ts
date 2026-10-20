import type { DessertDraft,DessertAction,DessertResult } from '../engine/types';
import { exactObject,oneOf } from './settingValidation';
export const toppings=['berry','chocolate','honey'] as const,marks=['star','heart','swirl'] as const;
export const toppingNames={berry:'Ягоды',chocolate:'Шоколад',honey:'Мёд'},markNames={star:'Звезда',heart:'Сердечко',swirl:'Завиток'};
export function initialDessert():DessertDraft{return {kind:'dessert',topping:null,mark:null};}
export function validDessertDraft(x:unknown):x is DessertDraft{return exactObject(x,['kind','topping','mark'])&&x.kind==='dessert'&&(x.topping===null||oneOf(x.topping,toppings))&&(x.mark===null||oneOf(x.mark,marks));}
export function dessertReduce(d:DessertDraft,a:DessertAction):DessertDraft{
 if(!validDessertDraft(d))return d;
 if(a.kind==='reset'&&exactObject(a,['kind']))return d.topping===null&&d.mark===null?d:initialDessert();
 if(exactObject(a,['kind','value'])&&a.kind==='set-topping'&&oneOf(a.value,toppings))return d.topping===a.value?d:{...d,topping:a.value};
 if(exactObject(a,['kind','value'])&&a.kind==='set-mark'&&oneOf(a.value,marks))return d.mark===a.value?d:{...d,mark:a.value};return d;
}
export function validDessertResult(x:unknown):x is DessertResult{
 if(!exactObject(x,['kind','mode','topping','mark'])||x.kind!=='dessert')return false;
 return x.mode==='completed'?oneOf(x.topping,toppings)&&oneOf(x.mark,marks):x.mode==='shared'?x.topping==='berry'&&x.mark==='star':x.mode==='skipped'&&x.topping===null&&x.mark===null;
}
export function acceptsDessertResult(d:DessertDraft,r:unknown):r is DessertResult{return validDessertDraft(d)&&validDessertResult(r)&&(r.mode!=='completed'||d.topping===r.topping&&d.mark===r.mark);}
