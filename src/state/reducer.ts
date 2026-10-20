import { getChapter } from '../content/chapters';
import { checkCode } from '../content/chapters/manifest';
import { cardFromStory } from '../content/cards';
import { startRun, step } from '../engine/step';
import type { ChapterId,Command,NodeId,StoryState,EpisodeChapter } from '../engine/types';
import type { ChapterRecord,SaveV1,Settings } from './types';
import { episodeStart,episodes } from '../content/season2';
import { normalizeWord,validWord } from '../persistence/words';
import { normalizeNote,validNote } from '../persistence/notes';
export type Action =
  | {type:'start'|'trial'|'rewrite';chapter?:ChapterId;attemptId?:string}|{type:'discard-trial'}
  | {type:'unlock';code:string}
  | {type:'command';target:'campaign'|'trial';command:Command;noteText?:string;wordText?:string}
  | {type:'note-edit';chapter?:EpisodeChapter;target:'campaign'|'trial';attemptId:string;text?:string;remove?:boolean}
  | {type:'word-edit';target:'campaign'|'trial';attemptId:string;text?:string;remove?:boolean}
  | {type:'settings';settings:Settings}
  | {type:'continuation';value:SaveV1['continuation']}
  | {type:'replace';save:SaveV1}
  | {type:'dev-jump';nodeId:NodeId;story:StoryState};
export function canStart(save:SaveV1,id:ChapterId){return !!getChapter(id)&&save.unlocked.includes(id)&&Array.from({length:id-1},(_,i)=>i+1).every(n=>save.campaign.completed.includes(n as ChapterId));}
export function reduceSave(current:SaveV1,action:Action):SaveV1 {
  let s=structuredClone(current);
  switch(action.type){
    case 'start':{
      const id=action.chapter??1;const chapter=getChapter(id);
      if(!chapter||!canStart(s,id)||s.campaign.active||s.campaign.completed.includes(id))return current;
      const previous=s.campaign.records[(id-1) as ChapterId];const prior=id===1?{}:previous?episodeStart(id,previous.story,previous.results):undefined;
      if(!prior)return current;
      if((id>=6)&&!action.attemptId)return current;
      s.campaign.startStates[id]=structuredClone(prior);s.campaign.active=startRun(chapter,prior,action.attemptId);s.lastResult=null;
      if(id>=6)delete s.privateNotes[id as EpisodeChapter]?.campaign;if(id===8)delete s.privateWords.campaign;break;
    }
    case 'unlock':{
      const found=checkCode(action.code);
      if(!found?.available||!getChapter(found.id)||s.unlocked.includes(found.id))return current;
      s.unlocked.push(found.id);s.unlocked.sort((a,b)=>a-b);break;
    }
    case 'trial':{
      const id=action.chapter??1,chapter=getChapter(id),start=s.campaign.startStates[id];
      if(!chapter||!start||s.trial)return current;
      if((id>=6)&&(!action.attemptId||!s.campaign.completed.includes(id)||action.attemptId===s.campaign.records[id]?.attemptId))return current;
      s.trial={chapter:id,run:startRun(chapter,start,action.attemptId)};s.lastResult=null;if(id>=6)delete s.privateNotes[id as EpisodeChapter]?.trial;if(id===8)delete s.privateWords.trial;break;
    }
    case 'discard-trial':if(!s.trial)return current;if(s.trial&&s.trial.chapter>=6)delete s.privateNotes[s.trial.chapter as EpisodeChapter]?.trial;if(s.trial?.chapter===8)delete s.privateWords.trial;s.trial=null;break;
    case 'rewrite':{
      const id=action.chapter??1,chapter=getChapter(id),start=id===1?{}:s.campaign.startStates[id];
      if(!chapter||!start||!canStart(s,id))return current;
      if((id>=6)&&(!action.attemptId||action.attemptId===s.campaign.records[id]?.attemptId))return current;
      for(const key of Object.keys(s.campaign.startStates).map(Number) as ChapterId[])if(key>=id){delete s.campaign.records[key];delete s.campaign.startStates[key];}
      s.campaign.completed=s.campaign.completed.filter(n=>n<id);s.campaign.startStates[id]=structuredClone(start);s.campaign.active=startRun(chapter,start,action.attemptId);s.trial=null;s.lastResult=null;if(current.trial&&current.trial.chapter>=6)delete s.privateNotes[current.trial.chapter as EpisodeChapter]?.trial;if(current.trial?.chapter===8)delete s.privateWords.trial;if(id<=8)s.privateWords={};for(const n of [6,7,8,9,10] as const)if(n>=id)delete s.privateNotes[n];if(id<=5)s.continuation=null;break;
    }
    case 'note-edit':{
      const id=action.chapter??6;const record=action.target==='campaign'?s.campaign.records[id]:s.lastResult?.source==='trial'&&s.lastResult.chapter===id?s.lastResult.episodeRecord:undefined;
      if(!record||record.attemptId!==action.attemptId||record.story[episodes[id].noteKey]!=='saved')return current;
      const text=normalizeNote(action.text??'').trim();
      if(!action.remove&&!validNote(text))return current;
      (s.privateNotes[id]??={})[action.target]={chapter:id,questionId:episodes[id].questionId,attemptId:action.attemptId,status:action.remove?'deleted':'saved',text:action.remove?'':text};
      s.localNoteRevision++;return s;
    }
    case 'word-edit':{
      const record=action.target==='campaign'?s.campaign.records[8]:s.lastResult?.source==='trial'&&s.lastResult.chapter===8?s.lastResult.episodeRecord:undefined;
      if(!record||record.attemptId!==action.attemptId||record.story.c8Word!=='custom')return current;
      const text=normalizeWord(action.text??'');if(!action.remove&&!validWord(text))return current;
      s.privateWords[action.target]={chapter:8,labelId:'s2.word8',attemptId:action.attemptId,status:action.remove?'deleted':'saved',text:action.remove?'':text};s.localNoteRevision++;return s;
    }
    case 'settings':s.settings={...action.settings};break;
    case 'continuation':if(!s.campaign.completed.includes(5)||s.trial||![null,'game','movie','cafe','walk','decline','public','chat','later'].includes(action.value)||s.continuation===action.value)return current;s.continuation=action.value;break;
    case 'replace':s=structuredClone(action.save);break;
    case 'dev-jump':{
      if(!import.meta.env.DEV)return current;
      const id=Number(action.nodeId.match(/^c(\d+)\./)?.[1]) as ChapterId,chapter=getChapter(id),node=chapter?.nodes[action.nodeId];
      if(id>=6)return current; // Chapter six is exercised through isolated full-save fixtures.
      if(!chapter||!node||node.kind==='route'||node.kind==='end')return current;
      const run=startRun(chapter);run.nodeId=action.nodeId;run.story=action.story;
      if(id===1&&run.story.searchResult){run.results['token-search']={kind:'token-search',outcome:run.story.searchResult,catNoticed:!!run.story.catNoticed};if(run.story.catNoticed)run.earned=['cat-supervisor'];}
      if(id===2&&run.story.umbrella){run.results['umbrella-patch']={kind:'umbrella-patch',outcome:run.story.umbrella};if(run.story.umbrella==='patched')run.earned=['dry-plan'];}
      if(id===1)s.campaign={completed:[],startStates:{1:{}},records:{},active:run};
      else {
        const prior:StoryState={approach:action.story.approach??'help',searchResult:action.story.searchResult??'skipped',catNoticed:action.story.catNoticed??false,pace:action.story.pace??'quiet',plan:action.story.plan??'tea'};
        const card=cardFromStory(prior);s.collection.cards=[...s.collection.cards.filter(c=>c.id!==card.id),card];if(prior.catNoticed)s.collection.achievements=[...new Set([...s.collection.achievements,'cat-supervisor'])];
        s.campaign={completed:[1],startStates:{1:{},2:prior},records:{1:{endingId:card.id,cardId:card.id,story:prior,results:{'token-search':{kind:'token-search',outcome:prior.searchResult!,catNoticed:!!prior.catNoticed}}}},active:run};s.unlocked=[...new Set([...s.unlocked,2 as const])];
        if(id>=3){
          const prior2:StoryState={...prior,rainRoute:action.story.rainRoute??'shelter',catApproach:action.story.catApproach??'wait',umbrella:action.story.umbrella??'patched',eveningMood:action.story.eveningMood??'quiet'};
          const card2=cardFromStory(prior2,2);s.collection.cards=[...s.collection.cards.filter(c=>c.id!==card2.id),card2];
          if(prior2.umbrella==='patched')s.collection.achievements=[...new Set([...s.collection.achievements,'dry-plan'])];
          s.campaign.completed.push(2);s.campaign.startStates[3]=prior2;s.campaign.records[2]={endingId:card2.id,cardId:card2.id,story:prior2,results:{'umbrella-patch':{kind:'umbrella-patch',outcome:prior2.umbrella!}}};s.unlocked=[...new Set([...s.unlocked,3 as const])];
          if(id===3&&run.story.kitchenResult){const served=run.story.kitchenResult==='feast'?9:run.story.kitchenResult==='snack'?4:0;run.results.kitchen={kind:'kitchen',outcome:run.story.kitchenResult,served,mode:'calm'};if(served===9)run.earned=['full-table'];}
          if(id>=4){
            const prior3:StoryState={...prior2,controllerReaction:action.story.controllerReaction??'help',teamName:action.story.teamName??'calm',kitchenStyle:action.story.kitchenStyle??'planner',kitchenResult:action.story.kitchenResult??'skipped',gameAftercare:action.story.gameAftercare??'team'};
            const card3=cardFromStory(prior3,3),served=prior3.kitchenResult==='feast'?9:prior3.kitchenResult==='snack'?4:0;
            s.collection.cards=[...s.collection.cards.filter(c=>c.id!==card3.id),card3];if(served===9)s.collection.achievements=[...new Set([...s.collection.achievements,'full-table'])];
            s.campaign.completed.push(3);s.campaign.startStates[4]=prior3;s.campaign.records[3]={endingId:card3.id,cardId:card3.id,story:prior3,results:{kitchen:{kind:'kitchen',outcome:prior3.kitchenResult!,served,mode:'calm'}}};s.unlocked=[...new Set([...s.unlocked,4 as const])];
            if(id===4&&run.story.constellation){run.results.constellation={kind:'constellation',outcome:run.story.constellation,usedPreset:false};run.earned=['own-sky'];}
            if(id===5){
              const prior4:StoryState={...prior3,bench:action.story.bench??'space',constellation:action.story.constellation??'teapot',bond:action.story.bond??'friendly',wish:action.story.wish??'calm'};
              const results4={constellation:{kind:'constellation' as const,outcome:prior4.constellation!,usedPreset:false}},card4=cardFromStory(prior4,4,results4);
              s.collection.cards=[...s.collection.cards.filter(c=>c.id!==card4.id),card4];s.collection.achievements=[...new Set([...s.collection.achievements,'own-sky'])];s.campaign.completed.push(4);s.campaign.startStates[5]=prior4;s.campaign.records[4]={endingId:card4.id,cardId:card4.id,story:prior4,results:results4};s.unlocked=[...new Set([...s.unlocked,5 as const])];
              if(action.nodeId==='c5.letter'||action.nodeId.startsWith('c5.tone.')||action.nodeId.startsWith('c5.ending.')||action.nodeId.startsWith('c5.gaming.'))run.results.memories={kind:'memories',outcome:'viewed'};
            }
          }
        }
      }
      s.trial=null;s.lastResult=null;break;
    }
    case 'command':{
      const run=action.target==='trial'?s.trial?.run:s.campaign.active;
      if(!run)return current;const chapter=getChapter(run.chapter);if(!chapter)return current;
      if(action.command.kind==='note-result'){
        const text=normalizeNote(action.noteText??'').trim();
        if(action.command.status==='saved'&&!validNote(text))return current;
      }
      if(action.command.kind==='label-result'&&action.command.status==='saved'&&!validWord(normalizeWord(action.wordText??'')))return current;
      const result=step(chapter,run,action.command);if(result.kind==='rejected')return current;
      if(action.command.kind==='note-result'&&run.attemptId){
        const id=run.chapter as EpisodeChapter;
        if(action.command.status==='saved')(s.privateNotes[id]??={})[action.target]={chapter:id,questionId:episodes[id].questionId,attemptId:run.attemptId,status:'saved',text:normalizeNote(action.noteText!).trim()};
        else delete s.privateNotes[id]?.[action.target];
        s.localNoteRevision++;
      }
      if(action.command.kind==='label-result'&&run.attemptId){if(action.command.status==='saved')s.privateWords[action.target]={chapter:8,labelId:'s2.word8',attemptId:run.attemptId,status:'saved',text:normalizeWord(action.wordText!)};else delete s.privateWords[action.target];s.localNoteRevision++;}
      if(result.kind==='ready'){if(action.target==='trial')s.trial={chapter:run.chapter,run:result.run};else s.campaign.active=result.run;}
      else {
        const card=cardFromStory(result.run.story,run.chapter,result.run.results);s.collection.cards=[...s.collection.cards.filter(c=>c.id!==card.id),card];s.collection.achievements=[...new Set([...s.collection.achievements,...result.run.earned])];
        const record:ChapterRecord={endingId:result.endingId,cardId:result.cardId,story:result.run.story,results:result.run.results,...((run.chapter>=6)?{scriptRevision:3,attemptId:result.run.attemptId,episode:result.run.episode}:{})};
        if(result.run.episode?.memory)s.collection.memories=[...new Set([...s.collection.memories,result.run.episode.memory])];
        if(result.run.episode?.secret)s.collection.secrets=[...new Set([...s.collection.secrets,result.run.episode.secret])];
        s.lastResult={chapter:run.chapter,cardId:result.cardId,source:action.target,...((run.chapter>=6)&&action.target==='trial'?{episodeRecord:record}:{})};
        if(action.target==='trial')s.trial=null;
        else {s.campaign.completed=[...new Set([...s.campaign.completed,run.chapter])];s.campaign.records[run.chapter]=record;s.campaign.active=null;}
      }
      break;
    }
  }
  if((JSON.stringify(s.privateNotes)!==JSON.stringify(current.privateNotes)||JSON.stringify(s.privateWords)!==JSON.stringify(current.privateWords))&&s.localNoteRevision===current.localNoteRevision)s.localNoteRevision++;
  s.contentVersion=12;s.revision=current.revision+1;s.updatedAt=new Date().toISOString();return s;
}
