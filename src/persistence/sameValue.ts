export function sameValue(a:unknown,b:unknown):boolean{
 if(a===b)return true;
 if(!a||!b||typeof a!=='object'||typeof b!=='object'||Array.isArray(a)!==Array.isArray(b))return false;
 const x=a as Record<string,unknown>,y=b as Record<string,unknown>,keys=Object.keys(x);
 return keys.length===Object.keys(y).length&&keys.every(k=>Object.hasOwn(y,k)&&sameValue(x[k],y[k]));
}
