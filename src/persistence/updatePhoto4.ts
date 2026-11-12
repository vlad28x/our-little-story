import {getChapter} from '../content/chapters';
import {startRun} from '../engine/step';
import {replayPhotoSix} from './photoSix';
import type {SaveV1} from '../state/types';
import type {Run} from '../engine/types';
// Validate content15 against its frozen graph before adapting active cursors.
// Completed records retain their actual revision4 facts without a new answer.
export function updatePhoto4(save:SaveV1):SaveV1{
 const next=structuredClone(save);next.contentVersion=16;
 const adapt=(run:Run):Run=>{
  if(run.chapter!==6||run.scriptRevision!==4||run.nodeId.startsWith('c6.photo.friends.'))return run;
  const prior=next.campaign.startStates[6]!;
  if(['c6.photo.entry','c6.photo.direction','c6.photo.romance.start'].includes(run.nodeId))return startRun(getChapter(6)!,prior,run.attemptId);
  const story={...run.story,c6Edition:5 as const};delete story.s2Direction;delete story.c6FriendExit;
  const replay=replayPhotoSix(story,{nodeId:run.nodeId,lineIndex:run.lineIndex});
  if(!replay)throw Error('Не удалось сопоставить активную прогулку. Исходная копия сохранена.');
  return {...replay,attemptId:run.attemptId};
 };
 if(next.campaign.active)next.campaign.active=adapt(next.campaign.active);
 if(next.trial)next.trial.run=adapt(next.trial.run);
 return next;
}
