import { useEffect, useState } from 'react';
export function go(path:string){location.hash=path;}
export function useRoute(){const [route,setRoute]=useState(location.hash.slice(1)||'/start');useEffect(()=>{const update=()=>setRoute(location.hash.slice(1)||'/start');window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update);},[]);return route;}
