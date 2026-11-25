import {TravellersScene,TravellersStatus} from './TravellersArt';
import {CourtyardScene} from './CourtyardArt';
import {SupperScene,SupperChoiceArt} from './SupperArt';
import {galleryView} from './GalleryArt';
import { useEffect, useRef, useState } from 'react';
import type { ChapterId, Emotion, Line, Run } from '../engine/types';
import { getChapter } from '../content/chapters';
import { sceneSecretId } from '../content/achievements';
import type { EasterEggId } from '../content/easterEggs';
import { useGame } from '../app/GameProvider';
import { go } from '../app/router';
import { Dessert } from '../minigames/Dessert';
import { MovieSetup } from '../minigames/MovieSetup';
import { EveningLight } from '../minigames/EveningLight';
import { SharedWord } from './SharedWord';
import { activeWordLabel } from '../persistence/words';
import { matches,resolveScene,resolveLine } from '../engine/step';
import { TokenSearch } from '../minigames/TokenSearch';
import { Memories } from '../minigames/Memories';
import { teamNames } from '../minigames/kitchenModel';
import { Constellation } from '../minigames/Constellation';
import { Kitchen } from '../minigames/Kitchen';
import { KitchenControllerScene, KitchenControls } from './KitchenControls';
import { UmbrellaPatch } from '../minigames/UmbrellaPatch';
import { SceneStage } from './SceneStage';
import { useSound,useSoundCue } from './useSound';
import { storyAmbience,storyCue } from './storySound';
import { BetweenLines } from '../minigames/BetweenLines';
import { reaction } from '../minigames/betweenLinesModel';
import { EveningRoute } from '../minigames/EveningRoute';
import {PhotoCamera} from './PhotoCamera';
import { PersonalNote } from './PersonalNote';
import { useReducedMotion } from './useReducedMotion';
import { triggerHaptic } from '../telegram/bridge';

const heroineShutterNodes=new Set([
  'c6.photo.shot.vlad','c6.photo.shot.place','c7.gallery.shotVlad','c7.gallery.shotBoth','c8.supper.boardHer',
  'c9.courtyard.frameVlad','c9.courtyard.frameSeats','c9.courtyard.frameYard',
]);
const hugAndKissNodes=new Set([
  'c3.goodbye.hug','c5.hug.her','c5.hug.accept','c6.photo.touch.hug','c8.supper.kissYes','c8.supper.kissHer',
  'c9.courtyard.kissAgain','c9.courtyard.kissFirst','c9.courtyard.hug','c10.travellers.homeHug','c10.travellers.cafeHug',
  'c10.travellers.homeKissFirst','c10.travellers.homeKissFirstNeck','c10.travellers.homeKissFirstSoft',
  'c10.travellers.homeKissAgain','c10.travellers.cafeKissAgain','c10.travellers.cafeKissFirst',
]);

const names={narrator:'Маленькая случайность',vlad:'Влад',heroine:'Ты',nina:'Нина',attendant:'Сотрудница кинодворика',angel:'Ангел',devil:'Дьяволёнок','heroine-thought':'Твоя мысль','vlad-thought':'Тем временем у Влада…'};
function Dialogue({line,run,onNext,typed,disabled=false,nextLabel='Дальше'}:{line:Line;run:Run;onNext:()=>void;typed:boolean;disabled?:boolean;nextLabel?:string}){
  const [count,setCount]=useState(typed?0:line.text.length);
  const nextButton=useRef<HTMLButtonElement>(null);
  useEffect(()=>{if(!disabled)nextButton.current?.focus({preventScroll:true});},[disabled]);
  useEffect(()=>{if(!typed){setCount(line.text.length);return;}const timer=setInterval(()=>setCount(c=>{if(c>=line.text.length){clearInterval(timer);return c;}return c+1;}),33);return()=>clearInterval(timer);},[line.text,typed]);
  const complete=count>=line.text.length;
  return <div className={`dialogue-content ${line.speaker.endsWith('thought')?'is-thought':''}`}><span className={`speaker speaker-${line.speaker}`}>{names[line.speaker]}{line.delivery&&<small className="line-delivery"> · {line.delivery}</small>}</span><p className={`dialogue-text ${line.speaker==='narrator'?'narration':''}`} aria-live="polite" aria-label={line.text}><span aria-hidden="true">{line.text.slice(0,count)}</span></p><div className="dialogue-bottom"><span className="tiny">{run.chapter>=6?'После титров · в твоём темпе':run.story.plan?'У каждого знакомства свой финал':'Никуда не торопимся'}</span><button ref={nextButton} className="next-button" disabled={disabled} onClick={()=>complete?onNext():setCount(line.text.length)}>{complete?nextLabel:'Показать целиком'} <span aria-hidden="true">→</span></button></div></div>;
}
export function StoryScreen({mode,chapterId=1,suspended=false}:{mode:'campaign'|'trial';chapterId?:ChapterId;suspended?:boolean}){
  const {save,send,telegramApp}=useGame();
  const selectedRun=mode==='trial'?save.trial?.run:save.campaign.active;
  const run=selectedRun?.chapter===chapterId?selectedRun:null;
  const chapter=getChapter(chapterId,run?.story);
  const nodeId=run?.nodeId;
  const node=nodeId?chapter?.nodes[nodeId]:undefined;
  const scene=run&&node&&node.kind!=='route'&&node.kind!=='end'?resolveScene(node.scene,run.story,run):undefined;
  const lastLine=!!run&&node?.kind==='dialogue'&&run.lineIndex===node.lines.length-1;
  const fade=lastLine&&!!node.fadeOnLastLine;
  const ambience=run&&scene&&!suspended?storyAmbience(run,scene.background,lastLine):null;
  const {play,setAmbience}=useSound();
  useEffect(()=>{
    setAmbience(ambience);
    return()=>setAmbience(null);
  },[ambience,setAmbience]);
  useSoundCue(run?storyCue(run,fade):undefined,run?`${mode}:${run.attemptId??''}:${run.nodeId}:${run.turn}`:undefined,suspended);
  const [answerTransition,setAnswerTransition]=useState(false);
  const answerRelease=useRef<ReturnType<typeof setTimeout>|null>(null);
  const [cameraFlash,setCameraFlash]=useState(false);
  const flashRelease=useRef<ReturnType<typeof setTimeout>|null>(null);
  const lastExposure=useRef<Run|null>(null);
  useEffect(()=>()=>{if(answerRelease.current)clearTimeout(answerRelease.current);if(flashRelease.current)clearTimeout(flashRelease.current);},[]);
  const reduced=useReducedMotion(save.settings.motion);
  const lastHapticNode=useRef<string|undefined>(undefined);
  useEffect(()=>{
    if(suspended||lastHapticNode.current===nodeId)return;
    lastHapticNode.current=nodeId;
    if(node?.kind==='dialogue'&&hugAndKissNodes.has(node.id))triggerHaptic(telegramApp,save.settings.sound,reduced);
  },[node,nodeId,reduced,save.settings.sound,suspended,telegramApp]);
  useEffect(()=>{if(!run&&save.lastResult?.chapter===chapterId)go(`/result/${chapterId}`);},[run,save.lastResult,chapterId]);
  if(!run||!chapter)return <div className="page-content"><h2>Эта встреча ждёт на карте глав</h2><p>Главы открываются по порядку. Уже пройденные встречи можно посмотреть снова.</p><button onClick={()=>go('/chapters')}>К главам</button></div>;
  if(!scene||!node||node.kind==='route'||node.kind==='end')return <div className="page-content"><h2>Не удалось продолжить сцену</h2><p>Скопируй прогресс в настройках, затем можно начать главу заново.</p><button onClick={()=>go('/settings')}>Настройки и резервная копия</button></div>;
  const light=run.activity?.kind==='evening-light'?run.activity.level??undefined:run.activity?.kind==='movie-setup'?run.activity.light??undefined:run.results['evening-light']?.level??run.results['movie-setup']?.light??undefined;
  const line=node.kind==='dialogue'?resolveLine(node.lines[run.lineIndex],run.story):null;
  const councilLine=run.activity?.kind==='between-lines'&&run.activity.phase!=='choose'?reaction(run.activity)[run.activity.phase==='complete'?reaction(run.activity).length-1:run.activity.lineIndex]:undefined;
  const sceneEmotion=scene.character==='vlad.closeup.intimate'?'warm':scene.character?.split('.').at(-1);
  const emotion=(councilLine?.emotion??line?.emotion??sceneEmotion??'neutral') as Emotion;
  const progress=chapterId===10?(run.story.c10Continuation?4:run.story.c10Arrival?3:run.story.c10Quarry?2:run.story.c10River?1:0):chapterId===9?(run.story.c9Film==='submitted'?4:run.story.c9Bet||['earlyWalk','lastShots','lab'].some(id=>run.nodeId==='c9.courtyard.'+id)?3:run.story.c9Rain?2:run.story.c9Film?1:0):chapterId===8?(run.story.c8Hoodie?4:run.story.c8Step?3:run.story.c8Frame?2:run.story.c8Filling?1:0):chapterId===6?(run.story.c6Gesture?4:run.story.c6Film?3:run.story.c6PhotoPlace?2:run.turn>5?1:0):chapterId===7?(run.story.c7GalleryFarewell?4:run.story.c7GalleryFrame?3:run.story.c7GalleryWork?2:run.story.c7GalleryRoute?1:0):chapterId>=6?(run.story[`c${chapterId as 6|7|8|9|10}Note`]?4:run.chapter===8&&run.story.c8Dance?3:Object.keys(run.results).length?2:run.turn>10?1:0):chapterId===1?(run.nodeId.startsWith('c1.end')?4:run.story.pace?3:run.story.searchResult?2:run.story.approach?1:0):chapterId===2?(run.story.eveningMood?4:run.story.umbrella?3:run.story.catApproach?2:run.story.rainRoute?1:0):chapterId===4?(run.story.gameAftercare?4:run.story.kitchenResult?3:run.story.kitchenStyle?2:run.story.controllerReaction?1:0):chapterId===3?(run.story.wish?4:(run.nodeId==='c3.honest'||run.nodeId.startsWith('c3.trust')||run.nodeId.startsWith('c3.wish')||run.story.bond)?3:run.story.constellation?2:run.story.bench?1:0):run.story.c5Edition===3?(run.results.memories?4:run.story.c5Recommendation?3:run.story.c5FirstTaste?2:run.nodeId.startsWith('c5.drink')?1:0):((run.nodeId==='c5.close'||run.story.ending)?4:run.results.memories?3:run.nodeId.startsWith('c5.album')?2:run.nodeId==='c5.return'?0:1);
  const progressIndicator=<div className="chapter-progress" aria-label={`Часть ${progress+1} из 5`}>{[0,1,2,3,4].map(i=><i key={i} className={i<=progress?'lit':''}/>)}</div>;
  const context=`${mode}:${run.nodeId}:${run.lineIndex}`;
  const showEasterEggs=node.kind!=='minigame'&&node.kind!=='note'&&!suspended;
  const showCamera=chapterId===6
    ||chapterId===7&&['outside','frame','shotVlad','shotHer','shotBoth','film'].some(id=>run.nodeId==='c7.gallery.'+id)
    ||chapterId===8&&['frame','frameChoice','foodHer','foodVlad','foodClick','boardHer','boardVlad','film'].some(id=>run.nodeId==='c8.supper.'+id)
    ||chapterId===9&&['camera','frameChoice','frameVlad','frameSeats','frameYard','cameraEnd','lastShots'].some(id=>run.nodeId==='c9.courtyard.'+id);
  const filmEffect=line?.effects?.find(({key})=>key===`c${chapterId}Film`);
  const heroineExposure=!!filmEffect&&(heroineShutterNodes.has(run.nodeId)
    ||run.nodeId==='c8.supper.foodClick'&&run.story.c8Frame==='foodHer'
    ||run.nodeId==='c9.courtyard.lastShots'&&filmEffect.value==='rain');
  const shutterReady=showCamera&&heroineExposure&&!suspended&&!answerTransition;
  // Narrated shots can preview the count. A player-controlled shot waits for advance.
  const previewCount=filmEffect&&!heroineExposure&&['c7.gallery.film','c8.supper.film','c9.courtyard.lastShots'].includes(run.nodeId);
  const cameraStory=previewCount?{...run.story,[filmEffect.key]:filmEffect.value}:run.story;
  function discoverEgg(id:EasterEggId){
    if(!run||!showEasterEggs)return false;
    if(id==='star')play('star');
    if(id==='cat'||id==='cat10')play('purr');
    const secretId=sceneSecretId(id,run.chapter);
    if(!secretId||save.collection.secrets.includes(secretId))return false;
    send({type:'discover-scene-secret',id:secretId,target:mode,expectedTurn:run.turn});
    triggerHaptic(telegramApp,save.settings.sound,reduced);
    return run.chapter>=6;
  }
  function advance(){
    if(!run||suspended)return;
    if(shutterReady){
      if(lastExposure.current===run)return;
      lastExposure.current=run;
      play('shutter');
      triggerHaptic(telegramApp,save.settings.sound,reduced);
      if(flashRelease.current)clearTimeout(flashRelease.current);
      setCameraFlash(true);
      flashRelease.current=setTimeout(()=>setCameraFlash(false),reduced?180:360);
    }
    send({type:'command',target:mode,command:{kind:'advance',expectedTurn:run.turn}});
  }
  const outsideCafe=scene.background==='bg.cafe.exterior';
  const showCat=chapterId===10?false:chapterId===5?!outsideCafe&&run.nodeId!=='c5.return'&&!run.nodeId.startsWith('c5.rain.')&&!run.nodeId.startsWith('c5.souvenir.'):chapterId===1||node.scene.background==='bg.cafe.window'||(run.story.catApproach==='wait'&&['c2.cat.echo.wait','c2.pause','c2.pause.quiet','c2.pause.playful','c2.end'].includes(run.nodeId));
  const advisers=node.kind==='dialogue'&&node.presentation==='adviser-aside'&&(line?.speaker==='angel'||line?.speaker==='devil')?line.speaker:undefined;
  return <div className={`story-screen ${chapterId<=5?'first-season-palette':''} ${chapterId>=6?'season-two second-season-palette':''} ${node.kind==='minigame'?'is-search':''} ${node.kind==='minigame'&&node.game==='kitchen'?'is-kitchen':''} ${node.kind==='minigame'&&node.game==='constellation'?'is-constellation':''} ${node.kind==='minigame'&&node.game==='evening-route'?'is-evening-route':''} ${node.kind==='minigame'&&node.game==='between-lines'?'is-between-lines':''} ${node.kind==='note'||node.kind==='label'?'is-personal-note':''} ${node.kind==='minigame'&&['dessert','movie-setup','evening-light'].includes(node.game)?'is-cozy-game':''}`} data-node={run.nodeId}>
    <SceneStage travellers={chapterId===10?<TravellersScene run={run}/>:undefined} courtyard={chapterId===9?<CourtyardScene run={run} background={scene.background}/>:undefined} supper={chapterId===8?<SupperScene story={run.story} node={run.nodeId} lineIndex={run.lineIndex}/>:undefined} exhibit={chapterId===7?galleryView(run.nodeId,run.lineIndex):undefined} key={`${mode}:${chapterId}`} background={scene.background} characterId={chapterId>=7?scene.character:undefined} word={chapterId===9||chapterId===10&&!run.story.c10Place?undefined:activeWordLabel(save,run,mode)} dessert={chapterId===8?run.results.dessert:undefined} drink={chapterId===9&&run.scriptRevision!==5&&run.story.c9Place?(run.activity?.kind==='movie-setup'?run.activity.drink??'tea':run.results['movie-setup']?.drink??'tea'):undefined} light={light} filmFrame={chapterId===9&&run.scriptRevision!==5&&run.story.c9Place?(run.nodeId.startsWith('c9.r3.film.end')||run.story.c9Close?2:run.story.c9SecondMoment?1:0):undefined} bookmark={chapterId===10?run.story.c10Memory:undefined} fade={fade} emotion={emotion} speaker={councilLine?.speaker??line?.speaker} galleryPlace={chapterId===7&&run.scriptRevision===3?(['lead','invite'].includes((run.activity?.kind==='between-lines'?run.activity.answers[1]:run.results['between-lines']?.answers[1])??'')?'arch':'window'):undefined} sceneId={run.nodeId} constellation={run.story.constellation} showCat={showCat} reserveRemote={chapterId===4&&run.story.controllerReaction==='absurd'&&!!run.story.kitchenStyle} advisers={advisers} bench={chapterId===7?(run.story.c7Reply==='hand'||run.story.c7Moment==='near'?'near':undefined):chapterId===6?(run.story.c6Moment==='hand'||run.story.c6Moment==='hug'?'near':undefined):chapterId===9?(run.story.c9SecondMoment==='hug'||!run.story.c9Break&&run.story.c9Closeness==='shoulder'?'near':run.results['movie-setup']?.seat??undefined):undefined} easterEggs={showEasterEggs} interactionContext={context} reducedMotion={reduced} onDiscoverEgg={discoverEgg}/>
    <div className="story-panel">
      {chapterId===10&&<TravellersStatus run={run}/>}
      {chapterId>=6&&chapterId<=9&&<PhotoCamera key={mode+chapterId} story={cameraStory} visible={showCamera} interactive={showEasterEggs} context={context} reduced={reduced} onShutter={shutterReady?advance:undefined} flash={cameraFlash} onDiscover={()=>discoverEgg('camera')}/>}
      {run.nodeId==='c5.ending.gaming'&&<p className="ending-team">{teamNames[run.story.teamName!]}</p>}
      {mode==='trial'&&<p className="trial-label">Другой вариант · основная история сохранена</p>}
      {progressIndicator}
      {node.kind==='dialogue'&&['c4.pad.setup','c4.pad.dead','c4.pad.ready'].includes(run.nodeId)&&<KitchenControllerScene
        ready={run.nodeId==='c4.pad.ready'} constellation={run.story.constellation} interactive={run.nodeId==='c4.pad.ready'&&showEasterEggs}
        context={context} reduced={reduced} onDiscover={()=>discoverEgg('controller')}/>}
      {node.kind==='dialogue'&&line&&<Dialogue disabled={answerTransition||suspended} key={`${run.nodeId}:${run.lineIndex}`} line={line} run={run} typed={save.settings.textMode==='type'&&!reduced} nextLabel={shutterReady?'Нажать спуск':undefined} onNext={advance}/>}
      {node.kind==='choice'&&<div className={`choices ${['c8.supper.fillChoice','c8.supper.shapeChoice'].includes(node.id)?'supper-choices':''}`}><span className="eyebrow">{node.id.endsWith('.thought')?'ТВОЯ МЫСЛЬ — ОН ЕЁ НЕ СЛЫШИТ':chapterId>=6?'ТВОЙ ХОД':'ТВОЯ МАЛЕНЬКАЯ СЛУЧАЙНОСТЬ'}</span><h2>{node.prompt??'Как поступишь?'}</h2>{['c8.supper.fillChoice','c8.supper.shapeChoice'].includes(node.id)&&<p className="small">Выбери вариант на картинке. Без таймера и оценки.</p>}{node.caption&&<p className="small">{node.caption}</p>}{node.id==='c4.pad.press'&&<KitchenControls constellation={run.story.constellation}/>}{node.choices.filter(c=>chapterId===10&&node.id.endsWith('catChoice')||matches(run.story,c.when,run)).map((c,i)=><button key={c.id} disabled={suspended||answerTransition||!matches(run.story,c.when,run)} onClick={()=>{send({type:'command',target:mode,command:{kind:'choose',choiceId:c.id,expectedTurn:run.turn}});}}><span className="choice-index">{String(i+1).padStart(2,'0')}</span><span>{chapterId===8&&<SupperChoiceArt node={run.nodeId} choice={c.id} filling={run.story.c8Filling}/>}<span>{c.text}</span>{!matches(run.story,c.when,run)?<small className="choice-description">Мостик остался у реки.</small>:c.description&&<small className="choice-description">{chapterId===10&&node.id.endsWith('catChoice')?(c.id==='upper'?(run.story.c10River==='ford'&&run.story.c10Quarry==='contour'?'Одно солнце и свет фонаря: последний шаг после заката.':'Два солнца; две фигурки до домика.'):run.story.c10River==='ford'?'Настил: одно солнце и мостик.':'Верхняя тропа: два солнца.'):c.description}</small>}</span><span aria-hidden="true">↗</span></button>)}</div>}
      {node.kind==='choice'&&node.returnToMap&&<button className="text-button" onClick={()=>go('/chapters')}>Вернуться к встречам</button>}
      {node.kind==='label'&&<SharedWord attemptId={run.attemptId!} mode={mode} suspended={suspended} onComplete={(status,wordText)=>send({type:'command',target:mode,wordText,command:{kind:'label-result',status,expectedTurn:run.turn}})}/>}
      {node.kind==='note'&&<PersonalNote config={node} chapter={chapterId as 6|7|8|9|10} mode={mode} key={run.attemptId} attemptId={run.attemptId!} suspended={suspended} onComplete={(status,noteText)=>{setAnswerTransition(true);answerRelease.current=setTimeout(()=>setAnswerTransition(false),300);send({type:'command',target:mode,noteText,command:{kind:'note-result',status,expectedTurn:run.turn}});}}/>}
      {node.kind==='minigame'&&(node.game==='dessert'&&run.activity?.kind==='dessert'?<Dessert draft={run.activity} suspended={suspended} onAction={action=>send({type:'command',target:mode,command:{kind:'game-action',game:'dessert',action,expectedTurn:run.turn}})} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='movie-setup'&&run.activity?.kind==='movie-setup'?<MovieSetup draft={run.activity} suspended={suspended} onAction={action=>send({type:'command',target:mode,command:{kind:'game-action',game:'movie-setup',action,expectedTurn:run.turn}})} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='evening-light'&&run.activity?.kind==='evening-light'?<EveningLight draft={run.activity} suspended={suspended} onAction={action=>send({type:'command',target:mode,command:{kind:'game-action',game:'evening-light',action,expectedTurn:run.turn}})} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='between-lines'&&run.activity?.kind==='between-lines'?<BetweenLines key={run.attemptId} draft={run.activity} suspended={suspended} onAction={action=>send({type:'command',target:mode,command:{kind:'game-action',game:'between-lines',action,expectedTurn:run.turn}})} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='evening-route'&&run.activity?.kind==='evening-route'?<EveningRoute draft={run.activity} suspended={suspended} onAction={action=>send({type:'command',target:mode,command:{kind:'game-action',game:'evening-route',action,expectedTurn:run.turn}})} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='token-search'?<TokenSearch key={`${mode}:${run.nodeId}:${run.turn}`} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='kitchen'?<Kitchen key={`${mode}:${run.nodeId}:${run.turn}`} style={run.story.kitchenStyle!} team={run.story.teamName!} reserveRemote={run.story.controllerReaction==='absurd'} suspended={suspended} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='constellation'?<Constellation key={`${mode}:${run.nodeId}:${run.turn}`} suspended={suspended} onSound={()=>play('star')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:node.game==='memories'?<Memories key={`${mode}:${run.nodeId}:${run.turn}`} story={run.story} onSound={()=>play('wood')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>:<UmbrellaPatch key={`${mode}:${run.nodeId}:${run.turn}`} onSound={()=>play('token')} onComplete={result=>send({type:'command',target:mode,command:{kind:'game-result',result,expectedTurn:run.turn}})}/>)}
    </div>
  </div>;
}
