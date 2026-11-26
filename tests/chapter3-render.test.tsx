import { it,expect,vi } from 'vitest';
import { renderToString } from 'react-dom/server';
import {finishSky} from './sky3Helpers';
import {thirdCode,command3,defaultThird } from './chapter3Helpers';
import { reduceSave } from '../src/state/reducer';
import type { SaveV1 } from '../src/state/types';
const context=vi.hoisted(()=>({save:null as unknown as SaveV1}));
vi.mock('../src/app/GameProvider',()=>({DEV_SANDBOX:false,useGame:()=>({save:context.save,send:()=>{},loaded:{},recovery:false,storageError:null,conflict:false})}));
vi.stubGlobal('location',{hash:'#/play/4',search:''});
vi.stubGlobal('matchMedia',()=>({matches:false}));
import { App } from '../src/app/App';
it('renders dialogue, controller choices and the mini-game on representative fourth-chapter paths',()=>{
  const visited=new Set<string>();
  const base=reduceSave(finishSky(),{type:'unlock',code:thirdCode});
  const paths=[['help','feast'],['tease','snack'],['absurd','skipped']] as const;
  for(const [reaction,outcome] of paths){
    let s=reduceSave(base,{type:'start',chapter:4});
    for(let i=0;i<180;i++){
      const run=s.campaign.active;if(!run)break;context.save=s;
      const html=renderToString(<App/>);expect(html).toContain('game-shell');expect(html).toContain(run.nodeId);visited.add(run.nodeId);
      s=reduceSave(s,{type:'command',target:'campaign',command:command3(run,{...defaultThird,reaction,result:{kind:'kitchen',outcome,served:outcome==='feast'?9:outcome==='snack'?4:0,mode:'calm'}})});
    }
  }
  expect(visited).toContain('c4.sofa');expect(visited).toContain('c4.kitchen');
});