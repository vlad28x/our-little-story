import { chapter6 } from '../src/content/chapters/ch06';
import { chapters } from '../src/content/chapters/manifest';
import { reduceSave,type Action } from '../src/state/reducer';
import { finishFive } from './chapter5Helpers';
import type { EveningRouteResult,Run,StoryState } from '../src/engine/types';
import type { SaveV1 } from '../src/state/types';
export const sixthCode=chapters.find(c=>c.id===6)!.code!;
export type SixthPath={guide:NonNullable<StoryState['c6Guide']>;thought:NonNullable<StoryState['c6Thought']>;voice:NonNullable<StoryState['c6Voice']>;contact:NonNullable<StoryState['c6Contact']>;ending:NonNullable<StoryState['c6Ending']>;route:EveningRouteResult;bonus:boolean;note?:string};
export const defaultSixth:SixthPath={guide:'devil',thought:'linger',voice:'stay',contact:'her',ending:'hand',route:{kind:'evening-route',mode:'own',stops:['window','water']},bonus:true,note:'Хочу ещё немного погулять.'};
export function action6(r:Run,p=defaultSixth,target:'campaign'|'trial'='campaign'):Action{
  const node=chapter6.nodes[r.nodeId];const base={type:'command' as const,target};
  if(node.kind==='dialogue')return {...base,command:{kind:'advance',expectedTurn:r.turn}};
  if(node.kind==='note')return {...base,noteText:p.note,command:{kind:'note-result',status:p.note?'saved':'skipped',expectedTurn:r.turn}};
  if(node.kind==='choice'){
    const choices:Record<string,string>={'c6.guide':p.guide,'c6.thought':p.thought,'c6.voice':p.voice,'c6.gesture':p.contact,'c6.envelope.offer':p.bonus?'open':'later','c6.ending':p.ending};
    return {...base,command:{kind:'choose',choiceId:choices[node.id],expectedTurn:r.turn}};
  }
  if(node.kind==='minigame'){
    const draft=r.activity!;
    if(p.route.mode==='own'){
      if(draft.phase!=='select')return {...base,command:{kind:'game-action',game:'evening-route',expectedTurn:r.turn,action:{kind:'back-to-select'}}};
      const stop=p.route.stops[draft.selected.length];
      if(stop)return {...base,command:{kind:'game-action',game:'evening-route',expectedTurn:r.turn,action:{kind:'toggle-stop',stop}}};
    }else if(p.route.mode==='shared'&&draft.phase!=='suggestion')return {...base,command:{kind:'game-action',game:'evening-route',expectedTurn:r.turn,action:{kind:'show-suggestion'}}};
    return {...base,command:{kind:'game-result',result:p.route,expectedTurn:r.turn}};
  }
  throw Error(`Unexpected node ${r.nodeId}`);
}
export function startSix(base=finishFive(),trial=false){return reduceSave(reduceSave(base,{type:'unlock',code:sixthCode}),{type:trial?'trial':'start',chapter:6,attemptId:trial?'trial-six':'campaign-six'});}
export function finishSix(base=finishFive(),p=defaultSixth,trial=false){
  let s=startSix(base,trial);for(let i=0;i<350;i++){const r=trial?s.trial?.run:s.campaign.active;if(!r)return s;const next=reduceSave(s,action6(r,p,trial?'trial':'campaign'));if(next===s)throw Error('No progress at '+r.nodeId);s=next;}throw Error('Loop');
}
export function sixAt(id:string,p=defaultSixth,base?:SaveV1){
  let s=startSix(base);for(let i=0;i<350;i++){const r=s.campaign.active;if(!r)throw Error('Ended before '+id);if(r.nodeId===id)return s;s=reduceSave(s,action6(r,p));}throw Error('Loop');
}
