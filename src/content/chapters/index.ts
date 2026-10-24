import type { Chapter,ChapterId,StoryState } from '../../engine/types';
import { chapter4 as previous4 } from '../../legacy/season1/ch04';
import { chapter5 as edition2 } from '../../legacy/season1/ch05-v13';
import { chapter5 as previous5 } from '../../legacy/season1/ch05';
import { chapter1 } from './ch01';
import { chapter2 } from './ch02';
import { chapter3 } from './ch03';
import { chapter4 } from './ch04';
import { chapter5 } from './ch05';
import { chapter6 } from './ch06';
import { chapter7 } from './ch07';
import { chapter8 } from './ch08';
import { chapter9 } from './ch09';
import { chapter10 } from './ch10';
export const playableChapters:Partial<Record<ChapterId,Chapter>>={1:chapter1,2:chapter2,3:chapter3,4:chapter4,5:chapter5,6:chapter6,7:chapter7,8:chapter8,9:chapter9,10:chapter10};
// No story selects a new run. Existing runs select the graph they started in.
export function getChapter(id:ChapterId,story?:StoryState){
  if(story&&id===4&&story.c4Edition!==2)return previous4;
  if(story&&id===5){if(story.c5Edition===2)return edition2;if(story.c5Edition!==3)return previous5;}
  return playableChapters[id];
}
