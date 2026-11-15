import {it,expect} from 'vitest';
import fs from 'node:fs';
import {chapter7} from '../src/content/chapters/ch07';
import {chapter8} from '../src/content/chapters/ch08';
import {validateContent} from '../src/engine/validateContent';
import {step,startRun,resolveLine,resolveScene} from '../src/engine/step';
import {reduceSave,canStart} from '../src/state/reducer';
import {parseSave,validateRun} from '../src/persistence/validateSave';
import {filmLeft} from '../src/persistence/photoSix';
import {cardFromStory} from '../src/content/cards';
import {getChapter} from '../src/content/chapters';
import {cloudRaw} from '../src/telegram/cloud';
import {TelegramCloud} from '../src/telegram/cloud';
import {finishGallery,galleryAt} from './gallery7Helpers';
import {finishPhotoSix} from './photo6Helpers';
import {startSupper,supperAt,supperCommand,finishSupper,type SupperPath} from './supperHelpers';
const seven=finishGallery();

it('ships the exact revised text and a complete eighth graph, without later content',()=>{
 const source=fs.readFileSync('outputs/CHAPTERS_07_08_RUNTIME_2026_11_13.md','utf8');
 for(const chapter of [chapter7,chapter8]){
  expect(validateContent(chapter)).toEqual([]);
  for(const node of Object.values(chapter.nodes)){
   expect(source).toContain('`'+node.id+'`');
   if(node.kind==='dialogue')for(const line of node.lines){expect(source).toContain(line.text);for(const variant of line.variants??[])expect(source).toContain(variant.text);}
   if(node.kind==='choice')for(const choice of node.choices)expect(source).toContain(choice.text);
  }
 }
 expect(getChapter(8)?.title).toBe('Половина кухни');expect(getChapter(9)?.title).toBe('С крышей разберёмся');expect(getChapter(10)).toBeUndefined();
 expect(Object.values(chapter8.nodes).filter(n=>n.kind==='end')).toHaveLength(1);
 const meal=chapter8.nodes['c8.supper.meal'];if(meal.kind!=='dialogue')throw Error('Missing meal');
 const remove=meal.lines.findIndex(line=>line.text.includes('снимает фартук'));
 expect(resolveScene(meal.scene,{},{...startRun(chapter8,seven.campaign.records[7]!.story,'apron-check'),lineIndex:remove}).character).toBe('vlad.apron.smile');
 expect(resolveScene(meal.scene,{},{...startRun(chapter8,seven.campaign.records[7]!.story,'apron-check'),lineIndex:remove+1}).character).toBe('vlad.casual.smile');
});

it('all 768 paths retain food, camera, separate kiss and hoodie decisions',()=>{
 const prior=seven.campaign.records[7]!.story;let count=0;
 for(const filling of ['pepper','mushroom','mix','simple'] as const)for(const shape of ['fold','open'] as const)for(const frame of ['foodHer','foodVlad','boardHer','boardVlad'] as const)for(const dance of ['follow','lead','play','sit'] as const)for(const kiss of [false,true])for(const hoodie of ['wear','borrow','pass'] as const){
  const path:SupperPath={filling,shape,frame,step:dance,kiss,hoodie};let run=startRun(chapter8,prior,'exhaustive-supper');const text:string[]=[];const counts=new Set<number>();
  for(let guard=0;guard<200;guard++){
   const node=chapter8.nodes[run.nodeId];if(node.kind==='dialogue')text.push(resolveLine(node.lines[run.lineIndex],run.story).text);
   const left=filmLeft(run.story);if(left!==undefined)counts.add(left);
   const command=supperCommand(run,path),result=step(chapter8,run,command);expect(result.kind).not.toBe('rejected');if(result.kind==='rejected')throw Error(result.reason);
   if(result.kind==='complete'){
    expect(result.run.story).toMatchObject({...prior,c8Filling:filling,c8Shape:shape,c8Frame:frame,c8Step:dance,c8LipKiss:kiss?'yes':'no',c8Hoodie:hoodie==='wear'?'evening':hoodie==='borrow'?'borrowed':'none',c8Film:'nine',c8Place:'home'});
    expect(result.cardId).toBe('c8.supper');expect(cardFromStory(result.run.story,8)).toMatchObject({variant:shape,venue:'home'});count++;break;
   }
   run=result.run;
  }
  expect([...counts]).toEqual([15,14,9]);
  if(!kiss)expect(text.join(' ')).not.toMatch(/Ты целуешь его в губы|Влад целует тебя в губы/);
  if(dance==='sit')expect(text.join(' ')).not.toContain('Ты берёшь Влада за руку');
  expect(text.filter(t=>t==='Ты часто ешь прямо у плиты?')).toHaveLength(1);
  expect(text.join(' ')).not.toContain('Ты правда всегда ешь у плиты?');
  expect(text.some(t=>t.includes('На пороге вы задерживаетесь, улыбаясь друг другу'))).toBe(kiss);
  expect(text.join(' ')).toContain('Блюдо с оставшимися порциями вы сдвигаете к середине.');
  expect(text.join(' ')).not.toContain('Вы относите тарелки к раковине');
 }
 expect(count).toBe(768);
},60000);

it('reloads every cursor on eight representative routes, including all gifts and no closeness',()=>{
 const routes:Partial<SupperPath>[]=[{filling:'simple',shape:'fold',frame:'boardVlad',step:'sit',kiss:false,hoodie:'pass'},{filling:'mix',shape:'open',frame:'foodHer',step:'lead',kiss:true,hoodie:'borrow'},{filling:'mushroom',shape:'open',frame:'foodVlad',step:'play',kiss:false,hoodie:'wear'},{step:'follow',kiss:true},{step:'lead',kiss:false},{step:'sit',kiss:true},{step:'play',kiss:true},{step:'follow',kiss:false}];
 for(const [i,path]of routes.entries()){
  const base=finishGallery(undefined,{gift:(['none','blue','chip'] as const)[i%3],farewell:i%2?'cheek':'words'});let s=startSupper(base);
  while(s.campaign.active){
   expect(parseSave(JSON.stringify(s))).toEqual(s);const r=s.campaign.active,command=supperCommand(r,path);s=reduceSave(s,{type:'command',target:'campaign',command});expect(reduceSave(s,{type:'command',target:'campaign',command})).toEqual(s);
  }
  expect(parseSave(cloudRaw(s))).toEqual(s);expect(s.campaign.records[7]).toEqual(base.campaign.records[7]);expect(s.campaign.records[5]).toEqual(base.campaign.records[5]);expect(s.continuation).toBe(base.continuation);expect(s.collection.memories).toEqual([]);
 }
},90000);

it('commits the shutter, kiss and hoodie only on actual actions; rejects invented facts and turn counts',()=>{
 for(const [id,path,needle,key,value]of [
  ['c8.supper.foodClick',{frame:'foodHer'},'на спуск','c8Film','key'],
  ['c8.supper.kissHer',{step:'sit',kiss:true},'Ты целуешь его в губы','c8LipKiss','yes'],
  ['c8.supper.borrow',{hoodie:'borrow'},'Влад подаёт тебе худи','c8Hoodie','borrowed']
 ] as const){
  let s=supperAt(id,path);while(true){const r=s.campaign.active!,node=chapter8.nodes[r.nodeId];if(node.kind==='dialogue'&&node.lines[r.lineIndex].text.includes(needle))break;s=reduceSave(s,{type:'command',target:'campaign',command:supperCommand(r,path)});}
  expect(s.campaign.active!.story[key]).toBeUndefined();s=reduceSave(s,{type:'command',target:'campaign',command:supperCommand(s.campaign.active!,path)});expect(s.campaign.active!.story[key]).toBe(value);expect(parseSave(JSON.stringify(s))).toEqual(s);
 }
 const s=supperAt('c8.supper.danceChoice');
 for(const effect of [{c8LipKiss:'yes'},{c8Hoodie:'borrowed'},{c8Dance:'close'},{c8Filling:'impossible'}]){const bad=structuredClone(s);Object.assign(bad.campaign.active!.story,effect);expect(()=>parseSave(JSON.stringify(bad))).toThrow();}
 const bad=structuredClone(s);bad.campaign.active!.turn++;expect(()=>validateRun(bad.campaign.active)).toThrow();
});

it('trial food, gift and kiss never overwrite canon, and codes do not bypass a completed gallery',()=>{
 const done=finishSupper(seven,{shape:'open',kiss:false}),trial=finishSupper(done,{shape:'fold',kiss:true,hoodie:'borrow'},true);
 expect(trial.campaign).toEqual(done.campaign);expect(trial.lastResult?.episodeRecord?.story).toMatchObject({c8Shape:'fold',c8LipKiss:'yes'});expect(parseSave(cloudRaw(trial))).toEqual(trial);
 expect(canStart({...finishPhotoSix(),unlocked:[1,2,3,4,5,6,7,8]},8)).toBe(false);
});

it('content16 updates only the unplayed edited chapters, retaining the sixth and first-season cursors and answers',()=>{
 const source=galleryAt('c7.gallery.replay');source.continuation='decline';source.unlocked=[1,2,3,4,5,6,7,8,9,10];
 const raw=JSON.stringify({...source,contentVersion:16}),snapshot=JSON.parse(raw),updated=parseSave(raw);
 expect(JSON.parse(raw)).toEqual(snapshot);expect(updated.campaign.records[6]).toEqual(source.campaign.records[6]);expect(updated.campaign.records[5]).toEqual(source.campaign.records[5]);expect(updated.campaign.completed).toEqual([1,2,3,4,5,6]);expect(updated.campaign.active).toBeNull();expect(updated.campaign.startStates[7]).toBeUndefined();expect(updated.continuation).toBe('decline');expect(updated.unlocked).toEqual(source.unlocked);expect(updated.contentVersion).toBe(18);
});

it('writes and restores a new eighth and its trial through the two-bank CloudStorage protocol',async()=>{
 const done=finishSupper(seven,{shape:'open',kiss:true,hoodie:'borrow'});
 const trial=finishSupper(done,{shape:'fold',kiss:false},true);
 const data:Record<string,string>={};
 const api={getItem(key:string,done:(e:string|null,v:string)=>void){done(null,data[key]??'');},getItems(keys:string[],done:(e:string|null,v:Record<string,string>)=>void){done(null,Object.fromEntries(keys.map(key=>[key,data[key]??''])));},setItem(key:string,value:string,done:(e:string|null,v:boolean)=>void){expect(new TextEncoder().encode(JSON.stringify({key,value})).length).toBeLessThanOrEqual(4096);data[key]=value;done(null,true);}};
 const cloud=new TelegramCloud(api),head=await cloud.write(done,'');await cloud.write(trial,head);
 expect((await new TelegramCloud(api).read()).save).toEqual(trial);
});
