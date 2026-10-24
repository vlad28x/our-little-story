import {it,expect,vi} from 'vitest';
import {renderToString} from 'react-dom/server';
import {chapter5} from '../src/content/chapters/ch05';
import {completeTwo,finishThree,defaultThird} from './chapter3Helpers';
import {finishFour,defaultFourth} from './chapter4Helpers';
import {startFive,command5} from './chapter5Helpers';
import {reduceSave} from '../src/state/reducer';
import type {SaveV1} from '../src/state/types';
const context=vi.hoisted(()=>({save:null as unknown as SaveV1}));
vi.mock('../src/app/GameProvider',()=>({DEV_SANDBOX:false,useGame:()=>({save:context.save,send:()=>{},loaded:{},recovery:false,storageError:null,conflict:false})}));
vi.stubGlobal('location',{hash:'#/play/5',search:''});vi.stubGlobal('matchMedia',()=>({matches:false}));
import {App} from '../src/app/App';
it('renders every visible drink-edition scene and the neutral result with the existing assets',()=>{
 const visited=new Set<string>();let index=0;
 for(const firstTaste of ['vanilla','sweet','compare'] as const)for(const recommendation of ['vanilla','fresh','both'] as const){
  vi.stubGlobal('location',{hash:'#/play/5',search:''});
  const third=finishThree(completeTwo('quiet',undefined,{cat:index%2?'help':'wait'}),{...defaultThird,style:index%2?'improv':'planner',team:(['dumpling','calm','accident'] as const)[index%3]});
  const prior=finishFour(third,{...defaultFourth,result:{kind:'constellation',outcome:(['cat','controllers','teapot'] as const)[index%3],usedPreset:false},goodbye:(['accept','her','none'] as const)[index%3]});
  let s=startFive(prior);
  while(s.campaign.active){const r=s.campaign.active;if(!visited.has(r.nodeId)){context.save=s;const html=renderToString(<App/>);expect(html).toContain(r.nodeId);expect(html).not.toContain('Unknown asset');visited.add(r.nodeId);}s=reduceSave(s,{type:'command',target:'campaign',command:command5(r,{memory:'skipped',ending:'friendly',firstTaste,recommendation})});}
  context.save=s;vi.stubGlobal('location',{hash:'#/result/5',search:''});const html=renderToString(<App/>);expect(html).toContain('чай с характером. компания тоже.');expect(html).toContain('А теперь — встретимся по-настоящему?');expect(html).not.toContain('мой любимый незапланированный перерыв.');index++;
 }
 expect([...visited].sort()).toEqual(Object.values(chapter5.nodes).filter(n=>n.kind!=='route'&&n.kind!=='end').map(n=>n.id).sort());
});
