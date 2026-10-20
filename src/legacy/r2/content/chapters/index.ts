import type { Chapter,ChapterId } from '../../engine/types';
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
export function getChapter(id:ChapterId){return playableChapters[id];}
