import type { Chapter, Command, Condition, Run, StepResult, StoryState } from './types';
import { initialDessert,dessertReduce,acceptsDessertResult } from '../minigames/dessertModel';
import { initialMovie,movieSetupReduce,acceptsMovieResult } from '../minigames/movieSetupModel';
import { initialLight,eveningLightReduce,acceptsLightResult } from '../minigames/eveningLightModel';
import type { EpisodeChapter,Scene } from './types';
import { kitchenOutcome } from '../minigames/kitchenModel';
import { acceptsRouteResult,initialRoute,routeReduce } from '../minigames/eveningRouteModel';
import { acceptsCouncilResult,initialCouncil,betweenLinesReduce } from '../minigames/betweenLinesModel';
import { episodeFinds,episodes } from '../content/season2';

export function matches(story:StoryState, conditions:Condition[] = [],run?:Run) {
  return conditions.every(c=>{
    if('key' in c)return story[c.key]===c.equals;
    const route=run?.results['evening-route'];
    if(c.kind==='route-mode')return route?.mode===c.equals;
    if(c.kind==='route-stop')return route?.stops[c.index]===c.equals;
    if(c.kind==='route-includes')return !!route?.stops.some(s=>s===c.stop);
    if(c.kind==='dessert-mode')return run?.chapter===8&&run.results.dessert?.mode===c.equals;
    if(c.kind==='council-answer'){const index={topic:0,place:1,tone:2}[c.slot];return run?.chapter===7&&run.results['between-lines']?.answers[index]===c.equals;}
    return false;
  });
}
function settle(chapter:Chapter, run:Run):StepResult {
  for (let hop = 0; hop < 32; hop++) {
    const node = chapter.nodes[run.nodeId];
    if (!node) return {kind:'rejected',reason:'Не удалось найти сцену.'};
    if (node.kind === 'route') { run.nodeId = node.cases.find(c => matches(run.story,c.all,run))?.next ?? node.fallback; continue; }
    if (node.kind === 'end') {if(chapter.id>=6)run.episode=episodeFinds(run);if(chapter.id===5)run.earned=[...new Set([...run.earned,'five-meetings'])];return {kind:'complete',run,endingId:node.endingId,cardId:node.cardId};}
    if (node.kind === 'dialogue') {
      const line = node.lines[run.lineIndex];
      if (!line) return {kind:'rejected',reason:'Реплика недоступна.'};
    }
    if(node.kind==='minigame'&&node.game==='evening-route'&&!run.activity)run.activity=initialRoute();
    if(node.kind==='minigame'&&node.game==='between-lines'&&!run.activity)run.activity=initialCouncil();
    if(node.kind==='minigame'&&!run.activity){if(node.game==='dessert')run.activity=initialDessert();if(node.game==='movie-setup')run.activity=initialMovie();if(node.game==='evening-light')run.activity=initialLight();}
    return {kind:'ready',run};
  }
  return {kind:'rejected',reason:'Сценарий зациклился.'};
}
export function startRun(chapter:Chapter, story:StoryState = {},attemptId?:string):Run {
  if((chapter.id>=6)&&!attemptId)throw new Error('Для новой встречи нужен ID попытки');
  const result = settle(chapter,{chapter:chapter.id,nodeId:chapter.entry,lineIndex:0,turn:0,story:{...story},results:{},earned:[],...((chapter.id>=6)?{attemptId,scriptRevision:chapter.scriptRevision??3,episode:{}}:{})});
  if (result.kind !== 'ready') throw new Error('Глава должна начинаться с доступной сцены');
  return result.run;
}
export function step(chapter:Chapter, current:Run, command:Command):StepResult {
  if(current.chapter!==chapter.id)return {kind:'rejected',reason:'Действие относится к другой главе.'};
  if (current.turn !== command.expectedTurn) return {kind:'rejected',reason:'Это действие уже обработано.'};
  const node = chapter.nodes[current.nodeId];
  if (!node) return {kind:'rejected',reason:'Не удалось найти сцену.'};
  const run:Run = structuredClone(current);
  if (command.kind === 'advance' && node.kind === 'dialogue') {
    if (run.lineIndex + 1 < node.lines.length) run.lineIndex++;
    else { run.nodeId = node.next; run.lineIndex = 0; }
  } else if (command.kind === 'choose' && node.kind === 'choice') {
    const choice = node.choices.find(c => c.id === command.choiceId && matches(run.story,c.when,run));
    if (!choice) return {kind:'rejected',reason:'Этот ответ недоступен.'};
    for (const effect of choice.effects ?? []){
      if(effect.kind==='set')run.story={...run.story,[effect.key]:effect.value};

    }
    run.nodeId = choice.next; run.lineIndex = 0;
  } else if (command.kind === 'game-result' && node.kind === 'minigame') {
    const r = command.result;
    if (r.kind !== node.game) return {kind:'rejected',reason:'Неизвестный результат задания.'};
    if(r.kind==='token-search'){
      if(!['tidy','detour','skipped'].includes(r.outcome)||typeof r.catNoticed!=='boolean'||(r.outcome==='tidy'&&r.catNoticed))return {kind:'rejected',reason:'Неизвестный результат задания.'};
      run.results['token-search']={...r};run.story.searchResult=r.outcome;run.story.catNoticed=r.catNoticed;
      if(r.catNoticed)run.earned=[...new Set([...run.earned,'cat-supervisor'])];
    }else if(r.kind==='umbrella-patch'){
      if(!['patched','borrowed','skipped'].includes(r.outcome))return {kind:'rejected',reason:'Неизвестный результат задания.'};
      run.results['umbrella-patch']={...r};run.story.umbrella=r.outcome;
      if(r.outcome==='patched')run.earned=[...new Set([...run.earned,'dry-plan'])];
    }else if(r.kind==='kitchen'){
      if(!Number.isInteger(r.served)||r.served<0||r.served>9||!['timed','calm'].includes(r.mode)||(r.outcome!=='skipped'&&r.outcome!==kitchenOutcome(r.served)))return {kind:'rejected',reason:'Неизвестный результат кухни.'};
      run.results.kitchen={...r};run.story.kitchenResult=r.outcome;
      if(r.outcome!=='skipped'&&r.served===9)run.earned=[...new Set([...run.earned,'full-table'])];
    }else if(r.kind==='constellation'){
      if(!['cat','controllers','teapot'].includes(r.outcome)||typeof r.usedPreset!=='boolean'||(r.usedPreset&&r.outcome!=='teapot'))return {kind:'rejected',reason:'Неизвестный рисунок созвездия.'};
      run.results.constellation={...r};run.story.constellation=r.outcome;
      if(!r.usedPreset)run.earned=[...new Set([...run.earned,'own-sky'])];
    }else if(r.kind==='memories'){
      if(!['viewed','skipped'].includes(r.outcome))return {kind:'rejected',reason:'Неизвестный результат воспоминаний.'};
      run.results.memories={...r};
    }else if(r.kind==='dessert'){
      if(run.chapter!==8||run.activity?.kind!=='dessert'||!run.episode||!acceptsDessertResult(run.activity,r))return {kind:'rejected',reason:'Десерт ещё не готов.'};
      run.results.dessert=structuredClone(r);delete run.activity;
    }else if(r.kind==='movie-setup'){
      if(run.chapter!==9||run.activity?.kind!=='movie-setup'||!run.episode||!acceptsMovieResult(run.activity,r))return {kind:'rejected',reason:'Обстановка ещё не выбрана.'};
      run.results['movie-setup']=structuredClone(r);delete run.activity;
    }else if(r.kind==='evening-light'){
      if(run.chapter!==10||run.activity?.kind!=='evening-light'||!run.episode||!acceptsLightResult(run.activity,r))return {kind:'rejected',reason:'Выбери свет.'};
      run.results['evening-light']=structuredClone(r);delete run.activity;
    }else if(r.kind==='between-lines'){
      if(run.chapter!==7||run.activity?.kind!=='between-lines'||!run.episode||!acceptsCouncilResult(run.activity,r))return {kind:'rejected',reason:'Разговор ещё не завершён.'};
      run.results['between-lines']=structuredClone(r);delete run.activity;

    }else{
      if(run.activity?.kind!=='evening-route'||!run.episode||!acceptsRouteResult(run.activity,r))return {kind:'rejected',reason:'Маршрут не подтверждён.'};
      run.results['evening-route']=structuredClone(r);delete run.activity;

    }
    run.nodeId = node.next; run.lineIndex = 0;
  } else if(command.kind==='game-action'&&node.kind==='minigame'&&node.game==='evening-route'&&command.game==='evening-route'&&run.activity?.kind==='evening-route'){
    const activity=routeReduce(run.activity,command.action);
    if(activity===run.activity)return {kind:'rejected',reason:'Маршрут не изменился.'};
    run.activity=activity;
  } else if(command.kind==='game-action'&&node.kind==='minigame'&&node.game==='between-lines'&&command.game==='between-lines'&&run.activity?.kind==='between-lines'){
    const activity=betweenLinesReduce(run.activity,command.action);if(activity===run.activity)return {kind:'rejected',reason:'Это действие сейчас недоступно.'};
    run.activity=activity;
  } else if(command.kind==='game-action'&&node.kind==='minigame'&&node.game===command.game){
    const d=run.activity;
    const next=command.game==='dessert'&&d?.kind==='dessert'?dessertReduce(d,command.action):command.game==='movie-setup'&&d?.kind==='movie-setup'?movieSetupReduce(d,command.action):command.game==='evening-light'&&d?.kind==='evening-light'?eveningLightReduce(d,command.action):d;
    if(!next||next===d)return {kind:'rejected',reason:'Настройка не изменилась.'};run.activity=next;
  } else if(command.kind==='label-result'&&node.kind==='label'&&run.chapter===8&&['saved','skipped'].includes(command.status)&&run.episode){
    run.story.c8Word=command.status==='saved'?'custom':'none';run.nodeId=node.next;run.lineIndex=0;
  } else if(command.kind==='note-result'&&node.kind==='note'&&['saved','skipped'].includes(command.status)){
    run.story[episodes[run.chapter as EpisodeChapter].noteKey]=command.status;run.nodeId=node.next;run.lineIndex=0;
  } else return {kind:'rejected',reason:'Действие не подходит к этой сцене.'};
  run.turn++;
  return settle(chapter,run);
}

export function resolveScene(scene:Scene,story:StoryState,run?:Run):Scene{const selected=scene.variants?.find(v=>matches(story,v.when,run));return selected?{background:selected.background,character:selected.character}:{background:scene.background,character:scene.character};}
