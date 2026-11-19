import {getChapter} from '../content/chapters';
import {startRun,step} from '../engine/step';
import type {Command,Run,StoryState} from '../engine/types';
import {sameValue} from './sameValue';
export const photoFields=['c6Edition','c6PhotoPlace','c6PhotoSubject','c6Gesture','c6Film','c6CameraHolder'];
export const galleryFields=['c7GalleryRoute','c7GalleryWork','c7GalleryGift','c7GalleryFrame','c7GalleryFarewell','c7Cheek','c7Film','c7CameraHolder'];
export const supperFields=['c8Place','c8Filling','c8Shape','c8Frame','c8Film','c8Step','c8LipKiss','c8Hoodie'];
export const courtyardFields=['c9Place','c9Frame','c9Film','c9Rain','c9Bet','c9Goodbye','c9LipKiss','c9Hoodie'];

type Cursor=Pick<Run,'nodeId'|'lineIndex'>&{turn?:number};
export function replayPhoto(story:StoryState,id:6|7|8|9,cursor?:Cursor):Run|null{
 const own=id===6?photoFields:id===7?galleryFields:id===8?supperFields:courtyardFields,chapter=getChapter(id,story);if(!chapter)return null;
 const prior=Object.fromEntries(Object.entries(story).filter(([key])=>!own.includes(key))) as StoryState;
 const stack=[startRun(chapter,prior,'photo-replay')];
 while(stack.length){
  const r=stack.pop()!;
  if(Object.entries(r.story).some(([key,value])=>!['c6Film','c6CameraHolder','c7Film','c7CameraHolder','c8Film','c9Film','c9Hoodie'].includes(key)&&story[key as keyof StoryState]!==value))continue;
  if(cursor?.turn!==undefined&&r.turn>cursor.turn)continue;
  if(cursor&&r.nodeId===cursor.nodeId&&r.lineIndex===cursor.lineIndex&&(cursor.turn===undefined||r.turn===cursor.turn)&&sameValue(r.story,story))return r;
  const n=chapter.nodes[r.nodeId];
  const commands:Command[]=n.kind==='dialogue'?[{kind:'advance',expectedTurn:r.turn}]:n.kind==='choice'?n.choices.map(c=>({kind:'choose',choiceId:c.id,expectedTurn:r.turn})):[];
  for(const command of commands){const next=step(chapter,r,command);if(next.kind==='ready')stack.push(next.run);else if(next.kind==='complete'&&!cursor&&sameValue(next.run.story,story))return next.run;}
 }
 return null;
}
export const replayPhotoSix=(story:StoryState,cursor?:Cursor)=>replayPhoto(story,6,cursor);
export const replayGallery=(story:StoryState,cursor?:Cursor)=>replayPhoto(story,7,cursor);
export const replaySupper=(story:StoryState,cursor?:Cursor)=>replayPhoto(story,8,cursor);
export const replayCourtyard=(story:StoryState,cursor?:Cursor)=>replayPhoto(story,9,cursor);
export function completedSupper(story?:StoryState){return completedGallery(story)&&story?.c8Film==='nine'&&!!story.c8Filling&&!!story.c8Shape&&!!story.c8Frame&&!!story.c8Step&&!!story.c8Hoodie&&(story.c8LipKiss==='yes'||story.c8LipKiss==='no');}
export function completedGallery(story?:StoryState){return completedWalk(story)&&story?.c7Film==='six'&&story.c7CameraHolder==='her'&&!!story.c7GalleryFarewell&&!!story.c7GalleryGift;}
// Only completed canonical records supply these events; a found card does not.
export function completedWalk(story?:StoryState){return !!story&&story.c6Film==='six'&&story.c6CameraHolder==='her'&&!!story.c6PhotoPlace&&!!story.c6PhotoSubject&&!!story.c6Gesture&&story.c6Edition===5;}
export function filmLeft(story:StoryState){return story.c9Film?{key:8,empty:0,submitted:0}[story.c9Film]:story.c8Film?{key:14,nine:9}[story.c8Film]:story.c7Film?{key:20,six:15}[story.c7Film]:story.c6Film?{loaded:27,key:26,accidental:25,six:21}[story.c6Film]:undefined;}
