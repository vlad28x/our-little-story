import type { Chapter, Command, Condition, Run, StepResult, StoryState } from './types';
import { kitchenOutcome } from '../minigames/kitchenModel';

export function matches(story:StoryState, conditions:Condition[] = []) { return conditions.every(c => story[c.key] === c.equals); }
function settle(chapter:Chapter, run:Run):StepResult {
  for (let hop = 0; hop < 32; hop++) {
    const node = chapter.nodes[run.nodeId];
    if (!node) return {kind:'rejected',reason:'Не удалось найти сцену.'};
    if (node.kind === 'route') { run.nodeId = node.cases.find(c => matches(run.story,c.all))?.next ?? node.fallback; continue; }
    if (node.kind === 'end') {if(chapter.id===5)run.earned=[...new Set([...run.earned,'five-meetings'])];return {kind:'complete',run,endingId:node.endingId,cardId:node.cardId};}
    if (node.kind === 'dialogue') {
      const line = node.lines[run.lineIndex];
      if (!line) return {kind:'rejected',reason:'Реплика недоступна.'};
      const key = `${node.id}:${run.lineIndex}`;
      if (!run.journal.some(e => e.key === key)) run.journal = [...run.journal, {...line,key,nodeId:node.id}].slice(-150);
    }
    return {kind:'ready',run};
  }
  return {kind:'rejected',reason:'Сценарий зациклился.'};
}
export function startRun(chapter:Chapter, story:StoryState = {}):Run {
  const result = settle(chapter,{chapter:chapter.id,nodeId:chapter.entry,lineIndex:0,turn:0,story:{...story},journal:[],results:{},earned:[]});
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
    const choice = node.choices.find(c => c.id === command.choiceId && matches(run.story,c.when));
    if (!choice) return {kind:'rejected',reason:'Этот ответ недоступен.'};
    for (const effect of choice.effects ?? []) run.story = {...run.story,[effect.key]:effect.value};
    run.journal.push({key:`${node.id}:${choice.id}`,nodeId:node.id,speaker:'heroine',text:choice.text});
    run.journal = run.journal.slice(-150);
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
    }else{
      if(!['viewed','skipped'].includes(r.outcome))return {kind:'rejected',reason:'Неизвестный результат воспоминаний.'};
      run.results.memories={...r};
    }
    run.nodeId = node.next; run.lineIndex = 0;
  } else return {kind:'rejected',reason:'Действие не подходит к этой сцене.'};
  run.turn++;
  return settle(chapter,run);
}
