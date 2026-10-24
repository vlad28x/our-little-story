import { it,expect,vi } from 'vitest';
import { renderToString } from 'react-dom/server';
import { completeTwo,defaultThird,finishThree } from './chapter3Helpers';
import { startFour,command4,defaultFourth,finishFour } from './legacy4Helpers';
import { chapter4 } from '../src/legacy/season1/ch04';
import { reduceSave } from '../src/state/reducer';
import type { SaveV1 } from '../src/state/types';
const context=vi.hoisted(()=>({save:null as unknown as SaveV1}));
vi.mock('../src/app/GameProvider',()=>({DEV_SANDBOX:false,useGame:()=>({save:context.save,send:()=>{},loaded:{},recovery:false,storageError:null,conflict:false})}));
vi.stubGlobal('location',{hash:'#/play/4',search:''});
vi.stubGlobal('matchMedia',()=>({matches:false}));
import { App } from '../src/app/App';
it('renders every visible chapter-four node and the preset result without missing resources',()=>{
  const visited=new Set<string>();
  for(const team of ['dumpling','calm','accident'] as const)for(const shape of ['cat','controllers','teapot'] as const)for(const bond of ['friendly','romantic','undecided'] as const){
    let s=startFour(finishThree(completeTwo(),{...defaultThird,team,after:team==='calm'?'team':'rematch'}));
    const path={...defaultFourth,bench:bond==='friendly'?'space' as const:'near' as const,bond,result:{kind:'constellation' as const,outcome:shape,usedPreset:false},wish:shape==='cat'?'adventure' as const:'calm' as const,goodbye:shape==='cat'?'accept' as const:shape==='controllers'?'her' as const:'none' as const};
    for(let i=0;i<180;i++){const r=s.campaign.active;if(!r)break;if(!visited.has(r.nodeId)){context.save=s;const html=renderToString(<App/>);expect(html).toContain(r.nodeId);expect(html).toContain('game-shell');visited.add(r.nodeId);}s=reduceSave(s,{type:'command',target:'campaign',command:command4(r,path)});}
  }
  expect([...visited].sort()).toEqual(Object.values(chapter4.nodes).filter(n=>n.kind!=='route'&&n.kind!=='end').map(n=>n.id).sort());
  context.save=finishFour(undefined,{...defaultFourth,result:{kind:'constellation',outcome:'teapot',usedPreset:true}});vi.stubGlobal('location',{hash:'#/result/4',search:''});expect(renderToString(<App/>)).toContain('Выбрали готовую картинку');
});
