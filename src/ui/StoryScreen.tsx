import { useEffect, useRef, useState } from 'react';
import type { ChapterId, Emotion, Line, Run } from '../engine/types';
import { getChapter } from '../content/chapters';
import { useGame } from '../app/GameProvider';
import { go } from '../app/router';
import { matches } from '../engine/step';
import { TokenSearch } from '../minigames/TokenSearch';
import { Memories } from '../minigames/Memories';
import { teamNames } from '../minigames/kitchenModel';
import { Constellation } from '../minigames/Constellation';
import { Kitchen } from '../minigames/Kitchen';
import { KitchenControls } from '../ui/KitchenControls';
import { UmbrellaPatch } from '../minigames/UmbrellaPatch';
import { SceneStage } from './SceneStage';
import { useSound } from './useSound';
import { EveningRoute } from '../minigames/EveningRoute';
import { PersonalNote } from './PersonalNote';
import { SeasonStatus } from './SeasonStatus';
const names={narrator:'Маленькая случайность',vlad:'Влад',heroine:'Ты',nina:'Нина',angel:'Ангел',devil:'Дьяволёнок','heroine-thought':'Твоя мысль','vlad-thought':'Тем временем у Влада…'};
function Dialogue({line,run,onNext,typed}:{line:Line;run:Run;onNext:()=>void;typed:boolean}){
  const [count,setCount]=useState(typed?0:line.text.length);
  const nextButton=useRef<HTMLButtonElement>(null);
  useEffect(()=>{nextButton.current?.focus({preventScroll:true});},[]);
  useEffect(()=>{if(!typed){setCount(line.text.length);return;}const timer=setInterval(()=>setCount(c=>{if(c>=line.text.length){clearInterval(timer);return c;}return c+1;}),33);return()=>clearInterval(timer);},[line.text,typed]);
  const complete=count>=line.text.length;
  return <div className={`dialogue-content ${line.speaker.endsWith('thought')?'is-thought':''}`}><span className={`speaker speaker-${line.speaker}`}>{names[line.speaker]}</span><p className={`dialogue-text ${line.speaker==='narrator'?'narration':''}`} aria-live="polite" aria-label={line.text}><span aria-hidden="true">{line.text.slice(0,count)}</span></p><div className="dialogue-bottom"><span className="tiny">{run.chapter===6?'После титров · в твоём темпе':run.story.plan?'У каждого знакомства свой финал':'Никуда не торопимся'}</span><button ref={nextButton} className="next-button" onClick={()=>complete?onNext():setCount(line.text.length)}>{complete?'Дальше':'Показать целиком'} <span aria-hidden="true">→</span></button></div></div>;
}
export function StoryScreen({mode,chapterId=1,suspended=false}:{mode:'campaign'|'trial';chapterId?:ChapterId;suspended?:boolean}){
  const {save,send}=useGame();const selectedRun=mode==='trial'?save.trial?.run:save.campaign.active;const run=selectedRun?.chapter===chapterId?selectedRun:null;const chapter=getChapter(chapterId);const play=useSound(save.settings.sound,save.settings.volume);
  const [systemReduced,setSystemReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(()=>{const mq=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setSystemReduced(mq.matches);mq.addEventListener('change',update);return()=>mq.removeEventListener('change',update);},[]);
  const reduced=save.settings.motion==='reduced'||(save.settings.motion==='system'&&systemReduced);
  useEffect(()=>{if(!run&&save.lastResult?.chapter===chapterId)go(`/result/${chapterId}`);},[run,save.lastResult,chapterId]);
  if(!run||!chapter)return <div className="page-content"><h2>Эта встреча ждёт на карте глав</h2><p>Главы открываются по порядку. Уже пройденные встречи можно посмотреть снова.</p><button onClick={()=>go('/chapters')}>К главам</button></div>;
  const node=chapter.nodes[run.nodeId];
  if(!node||node.kind==='route'||node.kind==='end')return <div className="page-content"><h2>Не удалось продолжить сцену</h2><p>Скопируй прогресс в настройках, затем можно начать главу заново.</p><button onClick={()=>go('/settings')}>Настройки и резервная копия</button></div>;
  const line=node.kind==='dialogue'?node.lines[run.lineIndex]:null;
  const emotion=(line?.emotion??node.scene.character.split('.').at(-1)) as Emotion;
  const progress=chapterId===6?(run.story.c6Note?4:run.story.c6Contact?3:run.results['evening-route']?2:run.story.c6Voice?1:0):chapterId===1?(run.nodeId.startsWith('c1.end')?4:run.story.pace?3:run.story.searchResult?2:run.story.approach?1:0):chapterId===2?(run.story.eveningMood?4:run.story.umbrella?3:run.story.catApproach?2:run.story.rainRoute?1:0):chapterId===3?(run.story.gameAftercare?4:run.story.kitchenResult?3:run.story.kitchenStyle?2:run.story.controllerReaction?1:0):chapterId===4?(run.story.wish?4:run.story.bond?3:run.story.constellation?2:run.story.bench?1:0):(run.story.ending?4:run.results.memories?3:run.nodeId.startsWith('c5.album')?2:run.nodeId==='c5.return'?0:1);
  const showCat=chapterId===5?run.nodeId!=='c5.return'&&!run.nodeId.startsWith('c5.rain.')&&!run.nodeId.startsWith('c5.souvenir.'):chapterId===1||node.scene.background==='bg.cafe.window'||(run.story.catApproach==='wait'&&['c2.cat.echo.wait','c2.pause','c2.pause.quiet','c2.pause.playful','c2.end'].includes(run.nodeId));
  const advisers=chapterId===6&&/^c6\.(advisers|guide(?:\.|$)|mission\.|bonus\.)/.test(run.nodeId);
  return <div className={`story-screen ${chapterId===6?'season-two':''} ${node.kind==='minigame'?'is-search':''} ${node.kind==='minigame'&&node.game==='kitchen'?'is-kitchen':''} ${node.kind==='minigame'&&node.game==='constellation'?'is-constellation':''} ${node.kind==='minigame'&&node.game==='evening-route'?'is-evening-route':''} ${node.kind==='note'?'is-personal-note':''}`} data-node={run.nodeId}>
    <SceneStage key={`${mode}:${chapterId}`} background={node.scene.background} emotion={emotion} speaker={line?.speaker} sceneId={run.nodeId} showCat={showCat} reserveRemote={chapterId===3&&run.story.controllerReaction==='absurd'&&!!run.story.kitchenStyle} advisers={advisers?(line?.speaker==='angel'||line?.speaker==='devil'?line.speaker:'both'):undefined} bench={chapterId===6?(run.story.c6Contact&&run.story.c6Contact!=='none'?'near':undefined):chapterId>=4?run.story.bench:undefined} catAtCounter={chapterId===5&&run.story.catApproach==='help'&&run.nodeId!=='c5.ending.comic'} souvenir={chapterId===5&&run.nodeId!=='c5.return'&&!run.nodeId.startsWith('c5.rain.')?run.story.umbrella:undefined} easterEggs={chapterId!==6&&node.kind!=='minigame'&&node.kind!=='note'&&!suspended} interactionContext={`${mode}:${run.nodeId}:${run.lineIndex}`} reducedMotion={reduced} onEasterSound={play}/>
    <div className="story-panel">
      {chapterId===6&&<SeasonStatus run={run}/>}
      {run.nodeId==='c5.ending.gaming'&&<p className="ending-team">{teamNames[run.story.teamName!]}</p>}
      {mode==='trial'&&<p className="trial-label">Другой вариант · основная история сохранена</p>}
      <div className="chapter-progress" aria-label={`Часть ${progress+1} из 5`}>{[0,1,2,3,4].map(i=><i key={i} className={i<=progress?'lit':''}/>)}</div>
      {node.kind==='dialogue'&&line&&<Dialogue key={`${run.nodeId}:${run.lineIndex}`} line={line} run={run} typed={save.settings.textMode==='type'&&!reduced} onNext={()=>{play();send({type:'command',target:mode,command:{kind:'advance',expectedTurn:run.turn}});}}/>}
      {node.kind==='choice'&&<div className="choices"><span className="eyebrow">{node.id==='c6.thought'?'ТВОЯ МЫСЛЬ — ОН ЕЁ НЕ СЛЫШИТ':chapterId===6?'ТВОЙ ХОД':'ТВОЯ МАЛЕНЬКАЯ СЛУЧАЙНОСТЬ'}</span><h2>{node.prompt??'Как поступишь?'}</h2>{node.id==='c6.guide'&&<p className="small">Необязательная миссия. Она не влияет на доступность финалов.</p>}{node.id==='c3.pad.press'&&<KitchenControls/>}{node.choices.filter(c=>matches(run.story,c.when,run)).map((c,i)=><button key={c.id} onClick={()=>{play();send({type:'command',target:mode,command:{kind:'choose',choiceId:c.id,expectedTurn:run.turn}});}}><span className="choice-index">{String(i+1).padStart(2,'0')}</span><span>{c.text}</span><span aria-hidden="true">↗</span></button>)}</div>}
      {node.kind==='note'&&<PersonalNote key={run.attemptId} attemptId={run.attemptId!} suspended={suspended} onComplete={(status,noteText)=>send({type:'command',target:mode,noteText,command:{kind:'note-result',status,expectedTurn:run.turn}})}/>}
      {node.kind==='minigame'&&(node.game==='evening-route'?<EveningRoute draft={run.activity!} suspended={suspended} onAction={action=>send({type:'command',target:mode,command:{kind:'game-action',game:'evening-route',action,expectedTurn:run.turn}})} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='token-search'?<TokenSearch key={`${mode}:${run.nodeId}:${run.turn}`} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='kitchen'?<Kitchen key={`${mode}:${run.nodeId}:${run.turn}`} style={run.story.kitchenStyle!} team={run.story.teamName!} reserveRemote={run.story.controllerReaction==='absurd'} suspended={suspended} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='constellation'?<Constellation key={`${mode}:${run.nodeId}:${run.turn}`} suspended={suspended} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='memories'?<Memories key={`${mode}:${run.nodeId}:${run.turn}`} story={run.story} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:<UmbrellaPatch key={`${mode}:${run.nodeId}:${run.turn}`} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>)}
    </div>
  </div>;
}
