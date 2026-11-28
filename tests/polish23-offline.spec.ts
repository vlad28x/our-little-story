import { CONTENT_VERSION } from '../src/content/version';
import {test,expect} from '@playwright/test';
import {openOffline} from './offlineApp';
import {playableChapters} from '../src/content/chapters';
import {matches,resolveLine} from '../src/engine/step';
import type {ChapterId,Command,Run,GameResult} from '../src/engine/types';
import {initialState} from '../src/state/initialState';
import {reduceSave} from '../src/state/reducer';
import {parseSave} from '../src/persistence/validateSave';
import type {SaveV1} from '../src/state/types';
const key='five-meetings:/:save';
function command(run:Run):Command {
 const node=playableChapters[run.chapter]!.nodes[run.nodeId];
 if(node.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
 if(node.kind==='choice'){
  const home:Record<string,string>={'c10.travellers.arrivedChoice':'home','c10.travellers.homeChoice':'kiss','c10.travellers.lateChoice':'sleep'};
  return {kind:'choose',choiceId:home[node.id]??node.choices.find(c=>matches(run.story,c.when,run))!.id,expectedTurn:run.turn};
 }
 if(node.kind==='minigame'){
  const results:Record<string,GameResult>={'token-search':{kind:'token-search',outcome:'skipped',catNoticed:false},'umbrella-patch':{kind:'umbrella-patch',outcome:'skipped'},kitchen:{kind:'kitchen',outcome:'skipped',served:0,mode:'calm'},constellation:{kind:'constellation',outcome:'teapot',usedPreset:true},memories:{kind:'memories',outcome:'skipped'}};
  return {kind:'game-result',result:results[node.game],expectedTurn:run.turn};
 }
 throw Error('Noninteractive node');
}
function storySnapshots(){
 let save=initialState();save.unlocked=[1,2,3,4,5,6,7,8,9,10];const snapshots:{save:SaveV1;text:string}[]=[];
 for(const chapter of [1,2,3,4,5,6,7,8,9,10] as ChapterId[]){
  save=reduceSave(save,{type:'start',chapter,attemptId:`mobile-${chapter}`});let longest={save,text:''};
  for(let guard=0;save.campaign.active&&guard<300;guard++){
   const run=save.campaign.active,node=playableChapters[chapter]!.nodes[run.nodeId];
   if(node.kind==='dialogue'){const text=resolveLine(node.lines[run.lineIndex],run.story).text;if(text.length>longest.text.length)longest={save:structuredClone(save),text};}
   const next=reduceSave(save,{type:'command',target:'campaign',command:command(run)});if(next===save)throw Error('Rejected at '+run.nodeId);save=next;
  }
  if(save.campaign.active)throw Error('Chapter loop');snapshots.push(longest);
 }
 return {snapshots,completed:save};
}
const {snapshots,completed}=storySnapshots();

test('long authored dialogue in every chapter remains readable and resumes exactly on phone and desktop',async({page})=>{
 test.setTimeout(180000);const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [320,390,785])for(const snapshot of snapshots){
  await page.setViewportSize({width,height:900});await openOffline(page,snapshot.save,`/play/${snapshot.save.campaign.active!.chapter}`);
  await expect(page.locator('.dialogue-text')).toHaveText(snapshot.text);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  const next=page.getByRole('button',{name:/^Дальше/});await next.scrollIntoViewIfNeeded();await expect(next).toBeInViewport();
  if(width===390&&[1,6,10].includes(snapshot.save.campaign.active!.chapter))await page.screenshot({path:`test-results/screenshots/polish23/chapter-${snapshot.save.campaign.active!.chapter}-390.png`,fullPage:true,animations:'disabled'});
  const expected=reduceSave(snapshot.save,{type:'command',target:'campaign',command:command(snapshot.save.campaign.active!)});
  await next.click();const raw=await page.evaluate(k=>localStorage.getItem(k)!,key),save=parseSave(raw);expect(save.campaign).toEqual(expected.campaign);
  await openOffline(page,save,`/play/${snapshot.save.campaign.active!.chapter}`);expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,key)).toEqual(save.campaign);
 }
 expect(errors).toEqual([]);
});

test('old progress restarts at one while code rights survive and both invitation answers clear',async({page})=>{
 const old={...completed,contentVersion:23,continuation:'cafe',continuation10:'movie'} as unknown as SaveV1;
 await openOffline(page,old,'/chapters');await expect(page.locator('.code-entry')).toBeVisible();await expect(page.getByRole('button',{name:/Встретиться вживую/})).toHaveCount(0);
 const reset=parseSave(JSON.stringify(old));expect(reset.unlocked).toEqual(old.unlocked);expect(reset.campaign.completed).toEqual([]);expect(reset.continuation).toBeNull();expect(reset.continuation10).toBeNull();
 await page.getByRole('button',{name:'Пять встреч',exact:true}).click();await page.locator('.chapter-list>li').first().getByRole('button',{name:/Начать встречу/}).click();
 await expect(page.locator('[data-node="c1.prologue"]')).toBeVisible();await page.getByRole('button',{name:/^Дальше/}).click();
 const save=JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key)) as SaveV1;expect(save.contentVersion).toBe(CONTENT_VERSION);expect(save.unlocked).toEqual(old.unlocked);expect(save.campaign.active?.lineIndex).toBe(1);
});
