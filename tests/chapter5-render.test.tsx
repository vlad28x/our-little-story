import { it,expect,vi } from 'vitest';
import { renderToString } from 'react-dom/server';
import { completeSave,defaultPath } from './helpers';
import { completeTwo,defaultThird,finishThree } from './chapter3Helpers';
import { defaultFourth,finishFour } from './chapter4Helpers';
import { chapter5 } from '../src/content/chapters/ch05';
import { invitationBridges } from '../src/content/invitation';
import { startFive,command5,finishFive } from './chapter5Helpers';
import { reduceSave } from '../src/state/reducer';
import type { SaveV1 } from '../src/state/types';
const context=vi.hoisted(()=>({save:null as unknown as SaveV1}));
vi.mock('../src/app/GameProvider',()=>({DEV_SANDBOX:false,useGame:()=>({save:context.save,send:()=>{},loaded:{},recovery:false,storageError:null,conflict:false})}));
vi.stubGlobal('location',{hash:'#/play/5',search:''});vi.stubGlobal('matchMedia',()=>({matches:false}));
import { App } from '../src/app/App';
it('renders every visible final-chapter node and all four final/invitation screens',()=>{
  const seen=new Set<string>(),endings=['romantic','comic','gaming','friendly'] as const;
  for(let i=0;i<24;i++){
    const first=completeSave({...defaultPath,approach:(['joke','help','space'] as const)[i%3],plan:(['tea','coop','banter'] as const)[i%3]});
    const second=completeTwo('quiet',first,{rain:i%2?'arcade':'shelter',cat:Math.floor(i/3)%2?'help':'wait',umbrella:(['patched','borrowed','skipped'] as const)[Math.floor(i/2)%3]});
    const third=finishThree(second,{...defaultThird,after:i%2?'rematch':'team'}),prior=finishFour(third,{...defaultFourth,bond:(['friendly','romantic','undecided'] as const)[i%3]});
    let s=startFive(prior);for(let j=0;j<180;j++){const r=s.campaign.active;if(!r)break;if(!seen.has(r.nodeId)){context.save=s;const html=renderToString(<App/>);expect(html).toContain(r.nodeId);seen.add(r.nodeId);}s=reduceSave(s,{type:'command',target:'campaign',command:command5(r,{memory:'viewed',ending:endings[Math.floor(i/6)]})});}
  }
  expect([...seen].sort()).toEqual(Object.values(chapter5.nodes).filter(n=>n.kind!=='route'&&n.kind!=='end').map(n=>n.id).sort());
  for(const ending of endings){context.save=finishFive(undefined,{memory:'skipped',ending});vi.stubGlobal('location',{hash:'#/result/5?source=campaign',search:''});const html=renderToString(<App/>);expect(html).toContain('Может быть, ещё одна встреча?');expect(html).toContain('Отказаться');expect(html.indexOf('final-conversation')).toBeLessThan(html.indexOf('postcard'));expect(html).toContain('Игровой вечер у тебя');expect(html).toContain('Киновечер у тебя');expect(html).not.toContain('Unknown asset');}
  const main=finishFive(undefined,{memory:'skipped',ending:'friendly'});
  for(const ending of endings){context.save=finishFive(main,{memory:'skipped',ending},true);vi.stubGlobal('location',{hash:'#/result/5',search:''});const html=renderToString(<App/>);expect(html).toContain(invitationBridges[ending]);expect(context.save.campaign.records[5]?.story.ending).toBe('friendly');}
});
