export function exactObject(x:unknown,keys:string[]):x is Record<string,unknown>{return !!x&&typeof x==='object'&&!Array.isArray(x)&&Object.keys(x).length===keys.length&&Object.keys(x).every(k=>keys.includes(k));}
export function oneOf<T extends string>(x:unknown,values:readonly T[]):x is T{return values.includes(x as T);}
