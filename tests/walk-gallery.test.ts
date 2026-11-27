import fs from 'node:fs';
import { expect,it } from 'vitest';
import { cardFromStory,cardMeta } from '../src/content/cards';
import { getChapter } from '../src/content/chapters';
import { chapter6 } from '../src/content/chapters/ch06';
import { chapter7 } from '../src/content/chapters/ch07';
import { chapters } from '../src/content/chapters/manifest';
import { resolveLine } from '../src/engine/step';
import { validateContent } from '../src/engine/validateContent';
import { filmLeft } from '../src/persistence/photoSix';
import { parseSave as loadSave,validateSave as parseSave } from '../src/persistence/validateSave';
import { canStart,reduceSave } from '../src/state/reducer';
import { cloudRaw } from '../src/telegram/cloud';
import { finishFive } from './chapter5Helpers';
import { galleryAt,galleryCommand,startGallery,type GalleryPath } from './gallery7Helpers';
import { finishPhotoSix,photoAt,photoCommand,startPhotoSix } from './photo6Helpers';
const base=finishFive();
it('ships exact authored lines, 29/26 nodes, five/five menus and one ending each',()=>{
 for(const [chapter,path,count,menus] of [[chapter6,'outputs/CHAPTER_06_SCRIPT.md',29,5],[chapter7,'outputs/CHAPTER_07_SCRIPT.md',26,5]] as const){
  expect(validateContent(chapter)).toEqual([]);expect(Object.keys(chapter.nodes)).toHaveLength(count);
  const script=fs.readFileSync(path,'utf8');const shown=new Set<string>();
  for(const n of Object.values(chapter.nodes))if(n.kind==='dialogue')for(const l of n.lines){shown.add(l.text);expect(script).toContain(l.text);for(const v of l.variants??[]){shown.add(v.text);expect(script).toContain(v.text);}}
  const text=script.slice(script.indexOf(chapter.id===6?'## Точный сценарий':'## Текст главы'),script.indexOf(chapter.id===6?'## Память':'## Передача'));
  for(const row of text.split(/\r?\n/)){const m=chapter.id===6?row.match(/^(?:\d+\. \*\*[НВТАД]:\*\*|- \*\*(?:upper|water|hand|hug|none) — [НВТАД]:\*\*) (.+)$/):row.match(/^(?:[НВТАД] — |- (?:upper|water|together|apart) · [НВТАД] — )(.+)$/);if(m)expect(shown.has(m[1].trim())).toBe(true);}
  expect(Object.values(chapter.nodes).filter(n=>n.kind==='choice')).toHaveLength(menus);expect(Object.values(chapter.nodes).filter(n=>n.kind==='end')).toHaveLength(1);
 }
 expect(chapter6.nodes['c6.photo.direction']).toBeUndefined();
});
it('all eighteen walks preserve first five and reload at every cursor with no status answer',()=>{
 for(const place of ['upper','water'] as const)for(const subject of ['vlad','her','place'] as const)for(const gesture of ['hand','hug','none'] as const){
  const escape=(['sea','oldtown','cabin'] as const)[['vlad','her','place'].indexOf(subject)];
  const ask=(['game','routine','quirk'] as const)[['hand','hug','none'].indexOf(gesture)];
  let s=startPhotoSix(base);const counts=new Set<number>();const texts:string[]=[];
  while(s.campaign.active){const r=s.campaign.active,n=chapter6.nodes[r.nodeId];expect(parseSave(JSON.stringify(s))).toEqual(s);const left=filmLeft(r.story);if(left!==undefined)counts.add(left);if(n.kind==='dialogue')texts.push(resolveLine(n.lines[r.lineIndex],r.story).text);const cmd=photoCommand(r,{place,subject,escape,gesture,ask});s=reduceSave(s,{type:'command',target:'campaign',command:cmd});expect(reduceSave(s,{type:'command',target:'campaign',command:cmd})).toEqual(s);}
  expect([...counts]).toEqual([12,11,10,9]);expect(s.campaign.records[6]?.story).toMatchObject({c6Edition:5,c6PhotoPlace:place,c6PhotoSubject:subject,c6HerEscape:escape,c6Gesture:gesture,c6AskVlad:ask,c6Film:'six',c6CameraHolder:'her'});expect(s.campaign.records[6]?.story.s2Direction).toBeUndefined();
  if(gesture==='none')expect(texts.join(' ')).not.toMatch(/Ты вкладываешь ладонь|обнимает тебя в ответ|размыкаете руки|чтобы не выпускать его руку|ощущение его руки|после его объятия/);
  const farewell=texts.slice(-6).join(' ');
  expect(farewell.includes('Влад коротко сжимает твои пальцы')).toBe(gesture==='hand');
  expect(farewell.includes('накрывает твою руку своей')).toBe(gesture==='hug');
  expect(farewell.includes('Ты машешь ему на прощание')).toBe(gesture==='none');
  const walk=chapter6.nodes['c6.photo.walk.on'];if(walk.kind!=='dialogue')throw Error('Missing walk');
  const joke=walk.lines.slice(2,4).map(line=>resolveLine(line,s.campaign.records[6]!.story).text).join(' ');
  expect(joke.includes('общий фотоаппарат')).toBe(place==='upper');expect(joke.includes('перевёрнутая лестница')).toBe(place==='water');
  expect(s.campaign.records[5]).toEqual(base.campaign.records[5]);expect(parseSave(cloudRaw(s))).toEqual(s);expect(canStart({...s,unlocked:[...s.unlocked,7]},7)).toBe(true);
 }
},90000);
it('all 72 gallery paths preserve exact facts, independent gift, conditional tours and 9→8→6 film',()=>{
 let count=0;const six=finishPhotoSix(base,{gesture:'none'});
 for(const route of ['together','apart'] as const)for(const work of ['blue','chip'] as const)for(const gift of ['chip','blue','none'] as const)for(const frame of ['vlad','her','both'] as const)for(const farewell of ['cheek','words'] as const){
  const path:GalleryPath={route,work,gift,frame,farewell};let s=startGallery(six);const texts:string[]=[],counts=new Set<number>();
  while(s.campaign.active){const r=s.campaign.active,n=chapter7.nodes[r.nodeId];expect(parseSave(JSON.stringify(s))).toEqual(s);const left=filmLeft(r.story);if(left!==undefined)counts.add(left);if(n.kind==='dialogue')texts.push(resolveLine(n.lines[r.lineIndex],r.story).text);s=reduceSave(s,{type:'command',target:'campaign',command:galleryCommand(r,path)});}
  const st=s.campaign.records[7]!.story;expect(st).toMatchObject({c7GalleryRoute:route,c7GalleryWork:work,c7GalleryGift:gift,c7GalleryFrame:frame,c7GalleryFarewell:farewell,c7Film:'six',c7CameraHolder:'her'});expect(st.c7Cheek).toBe(farewell==='cheek'?true:undefined);expect([...counts]).toEqual([9,8,6]);
  expect(texts.join(' ')).toContain('приготовить настоящий ужин вместе с тобой');expect(texts.join(' ')).toContain('продукты с меня');
  expect(texts.join(' ')).not.toMatch(/полосы снова сходятся|Две линии почти касаются|колено до подбородка|как заделали|обе зазубрины оказываются/);
  if(farewell==='words')expect(texts.join(' ')).not.toContain('Ты целуешь его');
  expect(s.campaign.records[6]).toEqual(six.campaign.records[6]);expect(s.continuation).toBe(six.continuation);expect(cardMeta(cardFromStory(st,7)).caption).toContain(route==='apart'?'две экскурсии':'Три работы');expect(parseSave(cloudRaw(s))).toEqual(s);count++;
 }
 expect(count).toBe(72);
},180000);
it('records the gift choice immediately and the cheek kiss on its authored action',()=>{
 for(const [id,index,key,value] of [['c7.gallery.giveChip',3,'c7GalleryGift','chip'],['c7.gallery.giveBlue',4,'c7GalleryGift','blue'],['c7.gallery.cheek',2,'c7Cheek',true]] as const){
  let s=galleryAt(id,{gift:id.endsWith('giveBlue')?'blue':'chip',farewell:'cheek'});
  for(let i=0;i<index;i++)s=reduceSave(s,{type:'command',target:'campaign',command:galleryCommand(s.campaign.active!)});
  expect(s.campaign.active!.story[key]).toBe(key==='c7Cheek'?undefined:value);s=reduceSave(s,{type:'command',target:'campaign',command:galleryCommand(s.campaign.active!)});expect(s.campaign.active!.story[key]).toBe(value);expect(parseSave(JSON.stringify(s))).toEqual(s);
 }
});
it('rejects invented facts, skipped actions, relabelled editions and old future routes',()=>{
 const s=galleryAt('c7.gallery.replay');for(const effect of [{c7GalleryGift:'chip'},{c7Cheek:true},{c7Film:'six'}]){const bad=structuredClone(s);Object.assign(bad.campaign.active!.story,effect);expect(()=>parseSave(JSON.stringify(bad))).toThrow();}
 const initial=startPhotoSix();initial.campaign.active!.story.s2Direction='romance';expect(()=>parseSave(JSON.stringify(initial))).toThrow();
 const bad=photoAt('c6.photo.roll');bad.campaign.active!.turn++;expect(()=>parseSave(JSON.stringify(bad))).toThrow();
 for(const id of [10] as const){expect(getChapter(id)?.scriptRevision).toBe(6);const unlocked=reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===id)!.code!});expect(unlocked.unlocked).toContain(10);expect(canStart(unlocked,10)).toBe(false);}
 const wrong=startPhotoSix();wrong.campaign.active!.scriptRevision=4;expect(()=>parseSave(JSON.stringify(wrong))).toThrow();
});
it('real invitation values do not select a relationship or change the new walk entry',()=>{
 for(const value of [null,'game','movie','cafe','walk','decline','public','chat','later'] as const){const s=startPhotoSix(reduceSave(base,{type:'continuation',value}));expect(s.campaign.active?.nodeId).toBe('c6.photo.entry');expect(s.campaign.active?.story).toEqual({...base.campaign.records[5]!.story,c6Edition:5});expect(s.continuation).toBe(value);}
});

it('migrates a pre-update content24 save preserving chapters 1-5 and resetting season two',()=>{
 const raw=fs.readFileSync('tests/fixtures/content24-through7.json','utf8');
 const before=JSON.parse(raw);
 expect(before).toMatchObject({contentVersion:24,campaign:{active:null,completed:[1,2,3,4,5,6,7],records:{6:{story:{c6Film:'six'}},7:{story:{c7Film:'six'}}}}});
 const restored=loadSave(raw);
 expect(restored.campaign.completed).toEqual([1,2,3,4,5]);
 expect(restored.campaign.records[5]).toEqual(before.campaign.records[5]);
 expect(restored.unlocked).toEqual(before.unlocked);
 expect(restored.collection.cards).toEqual(before.collection.cards.filter((c:{chapter:number})=>c.chapter<=5));
 const started=reduceSave(restored,{type:'start',chapter:6,attemptId:'content24-walk'});
 expect(started.campaign.active?.nodeId).toBe('c6.photo.entry');
 expect(parseSave(JSON.stringify(started))).toEqual(started);
});
