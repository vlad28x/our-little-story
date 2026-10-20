import { getChapter } from '../content/chapters';
import { matches,startRun,step } from '../engine/step';
import type { Command,EpisodeChapter,EpisodeProgress,Run,StoryState } from '../engine/types';
import { acceptsRouteResult } from '../minigames/eveningRouteModel';
import { acceptsCouncilResult } from '../minigames/betweenLinesModel';
import { acceptsDessertResult } from '../minigames/dessertModel';
import { acceptsMovieResult } from '../minigames/movieSetupModel';
import { acceptsLightResult } from '../minigames/eveningLightModel';

export function sameValue(a:unknown,b:unknown):boolean{
 if(a===b)return true;
 if(!a||!b||typeof a!=='object'||typeof b!=='object'||Array.isArray(a)!==Array.isArray(b))return false;
 const x=a as Record<string,unknown>,y=b as Record<string,unknown>,keys=Object.keys(x);
 return keys.length===Object.keys(y).length&&keys.every(k=>Object.hasOwn(y,k)&&sameValue(x[k],y[k]));
}
type Activity=NonNullable<Run['activity']>;
type Profile={states:Activity[];paths:Command[][];edges:number[][]};
const profiles=new Map<string,Profile>();
function actionCommands(game:Activity['kind']):Command[]{
 const actions:unknown[]=game==='evening-route'?[...['water','lights','window'].map(stop=>({kind:'toggle-stop',stop})),...['reset','show-suggestion','back-to-select'].map(kind=>({kind}))]:game==='between-lines'?[...['question','challenge','ordinary','lead','invite','stay','direct','playful','quiet'].map(answer=>({kind:'answer',answer})),{kind:'next-line'}]:game==='dessert'?[...['berry','chocolate','honey'].map(value=>({kind:'set-topping',value})),...['star','heart','swirl'].map(value=>({kind:'set-mark',value})),{kind:'reset'}]:game==='movie-setup'?[...['near','space'].map(value=>({kind:'set-seat',value})),...['warm','dim'].map(value=>({kind:'set-light',value})),...['tea','cocoa','water'].map(value=>({kind:'set-drink',value})),{kind:'reset'}]:[...['warm','dim','unchanged'].map(level=>({kind:'select',level})),{kind:'toggle'}];
 // Cast only the closed developer-authored command list, never saved input.
 return actions.map(action=>({kind:'game-action',game,action,expectedTurn:0} as Command));
}
function profile(run:Run):Profile{
 const activity=run.activity!;const cached=profiles.get(activity.kind);if(cached)return cached;
 const chapter=getChapter(run.chapter)!,states=[activity],paths:Command[][]=[[]],edges:number[][]=[];
 const ids=new Map([[JSON.stringify(activity),0]]),commands=actionCommands(activity.kind);
 for(let i=0;i<states.length;i++){
  if(states.length>250)throw Error('Unexpected activity state space');
  const row:number[]=[];
  for(const command of commands){
   const result=step(chapter,{...run,activity:states[i]},{...command,expectedTurn:run.turn});
   if(result.kind!=='ready'||!result.run.activity)continue;
   const key=JSON.stringify(result.run.activity);let id=ids.get(key);
   if(id===undefined){id=states.length;ids.set(key,id);states.push(result.run.activity);paths.push([...paths[i],command]);}
   row.push(id);
  }
  edges.push([...new Set(row)]);
 }
 const out={states,paths,edges};profiles.set(activity.kind,out);return out;
}
// Exact action counts, with a finite periodic tail for resets/backtracking.
function canReach(p:Profile,targets:number[],steps:number){
 if(steps<0)return false;
 let current=[0];const seen=new Map<string,number>(),sets:number[][]=[];
 for(let i=0;;i++){
  if(i===steps)return current.some(v=>targets.includes(v));
  const key=current.join(','),earlier=seen.get(key);
  if(earlier!==undefined)return sets[earlier+(steps-earlier)%(i-earlier)].some(v=>targets.includes(v));
  seen.set(key,i);sets.push(current);current=[...new Set(current.flatMap(v=>p.edges[v]))].sort((a,b)=>a-b);
 }
}
function accepts(d:Activity,r:unknown){
 if(d.kind==='evening-route')return acceptsRouteResult(d,r as Parameters<typeof acceptsRouteResult>[1]);
 if(d.kind==='between-lines')return acceptsCouncilResult(d,r);
 if(d.kind==='dessert')return acceptsDessertResult(d,r);
 if(d.kind==='movie-setup')return acceptsMovieResult(d,r);
 return acceptsLightResult(d,r);
}
type Data={chapter?:EpisodeChapter;attemptId:string;story:StoryState;results:Run['results'];episode:EpisodeProgress;activity?:Run['activity']};
export function reachableEpisode(data:Data,cursor?:Pick<Run,'nodeId'|'lineIndex'|'turn'>):boolean{
 const id=data.chapter??6,chapter=getChapter(id);if(!chapter)return false;
 const prior=Object.fromEntries(Object.entries(data.story).filter(([key])=>!key.startsWith(`c${id}`))) as StoryState;
 type History={profile:Profile;targets:number[];applied:number};
 const stack:{run:Run;history?:History}[]=[{run:startRun(chapter,prior,data.attemptId)}];let visits=0;
 const agrees=(r:Run)=>sameValue(r.story,data.story)&&sameValue(r.results,data.results)&&sameValue(r.episode,data.episode)&&sameValue(r.activity,data.activity);
 // Venue changes after travelling home; intent may change when she reconsiders.
 // Their intermediate values must not prune a valid later checkpoint. Exact
 // equality is still required at the requested cursor/end after full replay.
 const mutable=new Set(['c10Venue','c10Intent']);
 const compatible=(r:Run)=>Object.entries(r.story).every(([k,v])=>mutable.has(k)||data.story[k as keyof StoryState]===v)&&Object.entries(r.results).every(([k,v])=>sameValue(data.results[k as keyof Run['results']],v));
 while(stack.length&&visits++<2000){
  const {run,history}=stack.pop()!;if(!compatible(run)||cursor&&run.turn>cursor.turn)continue;
  const node=chapter.nodes[run.nodeId];
  if(cursor&&node.kind!=='minigame'&&run.nodeId===cursor.nodeId&&run.lineIndex===cursor.lineIndex&&agrees(run)){
   const extra=cursor.turn-run.turn;
   if(history?canReach(history.profile,history.targets,history.applied+extra):extra===0)return true;
  }
  const enqueue=(command:Command,current=run,nextHistory=history)=>{
   const out=step(chapter,current,{...command,expectedTurn:current.turn});
   if(out.kind==='complete')return !cursor&&agrees(out.run);
   if(out.kind==='ready')stack.push({run:out.run,history:nextHistory});return false;
  };
  if(node.kind==='dialogue'){if(enqueue({kind:'advance',expectedTurn:run.turn}))return true;}
  else if(node.kind==='choice'){
   for(const c of node.choices)if(matches(run.story,c.when,run)&&enqueue({kind:'choose',choiceId:c.id,expectedTurn:run.turn}))return true;
  }else if(node.kind==='note'){
   const status=data.story[`c${id}Note`];if(status&&enqueue({kind:'note-result',status,expectedTurn:run.turn}))return true;
  }else if(node.kind==='label'){
   const status=data.story.c8Word==='custom'?'saved':data.story.c8Word==='none'?'skipped':null;
   if(status&&enqueue({kind:'label-result',status,expectedTurn:run.turn}))return true;
  }else if(node.kind==='minigame'&&run.activity){
   const p=profile(run),active=cursor?.nodeId===node.id;
   if(active){
    const target=p.states.findIndex(d=>sameValue(d,data.activity));
    if(target>=0&&agrees({...run,activity:p.states[target]})&&canReach(p,[target],cursor!.turn-run.turn))return true;
   }else{
    const result=data.results[node.game];const targets=p.states.map((d,i)=>accepts(d,result)?i:-1).filter(i=>i>=0);
    if(!result||!targets.length)continue;
    const target=targets.reduce((a,b)=>p.paths[a].length<=p.paths[b].length?a:b);let configured=run;
    for(const command of p.paths[target]){const out=step(chapter,configured,{...command,expectedTurn:configured.turn});if(out.kind!=='ready')return false;configured=out.run;}
    if(enqueue({kind:'game-result',result,expectedTurn:configured.turn},configured,{profile:p,targets,applied:p.paths[target].length}))return true;
   }
  }
 }
 return false;
}
