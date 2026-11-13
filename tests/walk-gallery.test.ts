import {it,expect} from 'vitest';
import fs from 'node:fs';
import {chapter6} from '../src/content/chapters/ch06';
import {chapter7} from '../src/content/chapters/ch07';
import {validateContent} from '../src/engine/validateContent';
import {getChapter} from '../src/content/chapters';
import {chapters} from '../src/content/chapters/manifest';
import {reduceSave,canStart} from '../src/state/reducer';
import {parseSave} from '../src/persistence/validateSave';
import {cloudRaw} from '../src/telegram/cloud';
import {resolveLine} from '../src/engine/step';
import {filmLeft} from '../src/persistence/photoSix';
import {cardFromStory,cardMeta} from '../src/content/cards';
import {finishFive} from './chapter5Helpers';
import {startPhotoSix,finishPhotoSix,photoCommand,photoAt} from './photo6Helpers';
import {startGallery,finishGallery,galleryAt,galleryCommand,oldPhoto4,type GalleryPath} from './gallery7Helpers';
const base=finishFive();
it('ships exact authored lines, 20/25 nodes, three/five menus and one ending each',()=>{
 for(const [chapter,path,count,menus] of [[chapter6,'outputs/CHAPTER_06_WALK_SCRIPT_2026_11_04.md',20,3],[chapter7,'outputs/CHAPTER_07_GALLERY_SCRIPT_2026_11_04.md',25,5]] as const){
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
  let s=startPhotoSix(base);const counts=new Set<number>();const texts:string[]=[];
  while(s.campaign.active){const r=s.campaign.active,n=chapter6.nodes[r.nodeId];expect(parseSave(JSON.stringify(s))).toEqual(s);const left=filmLeft(r.story);if(left!==undefined)counts.add(left);if(n.kind==='dialogue')texts.push(resolveLine(n.lines[r.lineIndex],r.story).text);const cmd=photoCommand(r,{place,subject,gesture});s=reduceSave(s,{type:'command',target:'campaign',command:cmd});expect(reduceSave(s,{type:'command',target:'campaign',command:cmd})).toEqual(s);}
  expect([...counts]).toEqual([27,26,25,21]);expect(s.campaign.records[6]?.story).toMatchObject({c6Edition:5,c6PhotoPlace:place,c6PhotoSubject:subject,c6Gesture:gesture,c6Film:'six',c6CameraHolder:'her'});expect(s.campaign.records[6]?.story.s2Direction).toBeUndefined();
  if(gesture==='none')expect(texts.join(' ')).not.toMatch(/Ты вкладываешь ладонь|обнимает тебя в ответ|размыкаете руки/);
  const farewell=texts.slice(-6).join(' ');
  expect(farewell.includes('чуть сжимает пальцы')).toBe(gesture==='hand');
  expect(farewell.includes('накрывает твою ладонь своей')).toBe(gesture==='hug');
  expect(farewell.includes('поднимаешь ладонь на прощание')).toBe(gesture==='none');
  const walk=chapter6.nodes['c6.photo.walk.on'];if(walk.kind!=='dialogue')throw Error('Missing walk');
  const joke=walk.lines.slice(2,4).map(line=>resolveLine(line,s.campaign.records[6]!.story).text).join(' ');
  expect(joke.includes('столба')).toBe(place==='upper');expect(joke.includes('не задирая голову')).toBe(place==='water');
  expect(s.campaign.records[5]).toEqual(base.campaign.records[5]);expect(parseSave(cloudRaw(s))).toEqual(s);expect(canStart({...s,unlocked:[...s.unlocked,7]},7)).toBe(true);
 }
},90000);
it('all 72 gallery paths preserve exact facts, independent gift, conditional tours and 21→20→15 film',()=>{
 let count=0;const six=finishPhotoSix(base,{gesture:'none'});
 for(const route of ['together','apart'] as const)for(const work of ['blue','chip'] as const)for(const gift of ['chip','blue','none'] as const)for(const frame of ['vlad','her','both'] as const)for(const farewell of ['cheek','words'] as const){
  const path:GalleryPath={route,work,gift,frame,farewell};let s=startGallery(six);const texts:string[]=[],counts=new Set<number>();
  while(s.campaign.active){const r=s.campaign.active,n=chapter7.nodes[r.nodeId];expect(parseSave(JSON.stringify(s))).toEqual(s);const left=filmLeft(r.story);if(left!==undefined)counts.add(left);if(n.kind==='dialogue')texts.push(resolveLine(n.lines[r.lineIndex],r.story).text);s=reduceSave(s,{type:'command',target:'campaign',command:galleryCommand(r,path)});}
  const st=s.campaign.records[7]!.story;expect(st).toMatchObject({c7GalleryRoute:route,c7GalleryWork:work,c7GalleryGift:gift,c7GalleryFrame:frame,c7GalleryFarewell:farewell,c7Film:'six',c7CameraHolder:'her'});expect(st.c7Cheek).toBe(farewell==='cheek'?true:undefined);expect([...counts]).toEqual([21,20,15]);
  expect(texts.join(' ')).toContain('оставил жёлтую на плите');expect(texts.join(' ')).toContain('с меня продукты');
  if(work==='chip')expect(texts.some(t=>t.includes('Теперь понятно, зачем'))).toBe(route==='apart');
  if(farewell==='words')expect(texts.join(' ')).not.toContain('Ты целуешь его');
  expect(s.campaign.records[6]).toEqual(six.campaign.records[6]);expect(s.continuation).toBe(six.continuation);expect(cardMeta(cardFromStory(st,7)).caption).toContain(route==='apart'?'две экскурсии':'Три работы');expect(parseSave(cloudRaw(s))).toEqual(s);count++;
 }
 expect(count).toBe(72);
},180000);
it('writes gift and cheek only after the actual action, and resumes at those boundaries',()=>{
 for(const [id,index,key,value] of [['c7.gallery.giveChip',3,'c7GalleryGift','chip'],['c7.gallery.giveBlue',4,'c7GalleryGift','blue'],['c7.gallery.cheek',1,'c7Cheek',true]] as const){
  let s=galleryAt(id,{gift:id.endsWith('giveBlue')?'blue':'chip',farewell:'cheek'});
  for(let i=0;i<index;i++)s=reduceSave(s,{type:'command',target:'campaign',command:galleryCommand(s.campaign.active!)});
  expect(s.campaign.active!.story[key]).toBeUndefined();s=reduceSave(s,{type:'command',target:'campaign',command:galleryCommand(s.campaign.active!)});expect(s.campaign.active!.story[key]).toBe(value);expect(parseSave(JSON.stringify(s))).toEqual(s);
 }
});
it('preserves completed revision4 walks and old friendship cards without inventing camera facts',()=>{
 const old=oldPhoto4(),walk=parseSave(JSON.stringify(old));expect(walk.campaign).toEqual(old.campaign);expect(walk.collection).toEqual(old.collection);expect(canStart({...walk,unlocked:[...walk.unlocked,7]},7)).toBe(true);expect(parseSave(JSON.stringify(startGallery(walk))).campaign.active?.chapter).toBe(7);
 const friends=oldPhoto4('friends'),saved=parseSave(JSON.stringify(friends));expect(saved.campaign).toEqual(friends.campaign);expect(saved.collection).toEqual(friends.collection);expect(saved.campaign.records[6]!.story.c6Film).toBeUndefined();expect(canStart({...saved,unlocked:[...saved.unlocked,7]},7)).toBe(false);
 const fresh=reduceSave(saved,{type:'rewrite',chapter:6,attemptId:'new-walk'});expect(fresh.collection.cards.some(c=>c.id==='c6.photo.friends')).toBe(true);expect(fresh.campaign.active?.story.s2Direction).toBeUndefined();expect(fresh.campaign.records[5]).toEqual(saved.campaign.records[5]);expect(parseSave(JSON.stringify(fresh))).toEqual(fresh);
 const trial=finishPhotoSix(saved,{gesture:'none'},true);expect(trial.campaign).toEqual(saved.campaign);expect(canStart({...trial,unlocked:[...trial.unlocked,7]},7)).toBe(false);expect(parseSave(JSON.stringify(trial))).toEqual(trial);
});
it('adapts shared revision4 active cursors by node and line, keeps old friend scenes in their edition',()=>{
 for(const id of ['c6.photo.light','c6.photo.purchase','c6.photo.subject','c6.photo.roll','c6.photo.touch.none','c6.photo.goodbye'] as const){const old=oldPhoto4('romance',id),s=parseSave(JSON.stringify(old));expect(s.campaign.active?.nodeId).toBe(id);expect(s.campaign.active?.lineIndex).toBe(old.campaign.active?.lineIndex);expect(s.campaign.active?.story.s2Direction).toBeUndefined();for(const field of ['c6PhotoPlace','c6PhotoSubject','c6Film','c6Gesture','c6CameraHolder'] as const)expect(s.campaign.active?.story[field]).toBe(old.campaign.active?.story[field]);expect(parseSave(JSON.stringify(s))).toEqual(s);}
 for(const id of ['c6.photo.entry','c6.photo.direction','c6.photo.romance.start'] as const){const s=parseSave(JSON.stringify(oldPhoto4('romance',id)));expect(s.campaign.active?.nodeId).toBe('c6.photo.entry');expect(s.campaign.active?.scriptRevision).toBe(5);}
 const friend=oldPhoto4('friends','c6.photo.friends.goodbye');expect(parseSave(JSON.stringify(friend)).campaign.active).toEqual(friend.campaign.active);
});
it('trials keep canon and camera facts isolated, including gallery postcard and gift choices',()=>{
 const six=finishPhotoSix(),trialSix=finishPhotoSix(six,{place:'upper',gesture:'hug'},true);expect(trialSix.campaign).toEqual(six.campaign);expect(parseSave(cloudRaw(trialSix))).toEqual(trialSix);
 const seven=finishGallery(six,{gift:'blue',farewell:'words'}),trial=finishGallery(seven,{gift:'chip',frame:'her',farewell:'cheek'},true);expect(trial.campaign).toEqual(seven.campaign);expect(trial.lastResult?.episodeRecord?.story.c7GalleryGift).toBe('chip');expect(parseSave(cloudRaw(trial))).toEqual(trial);
});
it('rejects invented facts, skipped actions, relabelled editions and old future routes',()=>{
 const s=galleryAt('c7.gallery.replay');for(const effect of [{c7GalleryGift:'chip'},{c7Cheek:true},{c7Film:'six'}]){const bad=structuredClone(s);Object.assign(bad.campaign.active!.story,effect);expect(()=>parseSave(JSON.stringify(bad))).toThrow();}
 const initial=startPhotoSix();initial.campaign.active!.story.s2Direction='romance';expect(()=>parseSave(JSON.stringify(initial))).toThrow();
 const bad=photoAt('c6.photo.roll');bad.campaign.active!.turn++;expect(()=>parseSave(JSON.stringify(bad))).toThrow();
 for(const id of [9,10] as const){expect(getChapter(id)).toBeUndefined();expect(reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===id)!.code!})).toEqual(s);}
 const wrong=startPhotoSix();wrong.campaign.active!.scriptRevision=4;expect(()=>parseSave(JSON.stringify(wrong))).toThrow();
 for(const contentVersion of [14,15])expect(()=>parseSave(JSON.stringify({...photoAt('c6.photo.roll'),contentVersion}))).toThrow();
});
it('real invitation values do not select a relationship or change the new walk entry',()=>{
 for(const value of [null,'game','movie','cafe','walk','decline','public','chat','later'] as const){const s=startPhotoSix(reduceSave(base,{type:'continuation',value}));expect(s.campaign.active?.nodeId).toBe('c6.photo.entry');expect(s.campaign.active?.story).toEqual({...base.campaign.records[5]!.story,c6Edition:5});expect(s.continuation).toBe(value);}
});
it('old R1–R3 reset still preserves first five and all entitlements',()=>{
 const old=structuredClone(base);Object.assign(old,{contentVersion:14});old.unlocked=[1,2,3,4,5,6,7,8,9,10];old.campaign.completed.push(6,7);Object.assign(old.campaign.records,{6:{old:true},7:{old:true}});const reset=parseSave(JSON.stringify(old));expect(reset.campaign.records).toEqual(base.campaign.records);expect(reset.collection).toEqual(base.collection);expect(reset.unlocked).toEqual(old.unlocked);expect(reset.campaign.completed).toEqual([1,2,3,4,5]);
});
