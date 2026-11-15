import {test,expect,type Page} from '@playwright/test';
import {openOffline} from './offlineApp';
import {courtyardAt,courtyardCommand,finishCourtyard,type CourtyardPath} from './courtyard9Helpers';
import {finishSupper} from './supperHelpers';
import {chapter9} from '../src/content/chapters/ch09';
import {parseSave} from '../src/persistence/validateSave';
import {chapters} from '../src/content/chapters/manifest';
import {finishGallery} from './gallery7Helpers';
import type {SaveV1} from '../src/state/types';
const key='five-meetings:/:save';
async function read(page:Page):Promise<SaveV1>{return JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!);}

test('three rain routes and skipped bet finish independently with one card and no early film ending',async({page})=>{
 test.setTimeout(240000);const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 const paths:Partial<CourtyardPath>[]=[{rain:'canopy',bet:'together',goodbye:'kiss'},{rain:'arch',bet:'alone',hoodie:'keep',goodbye:'hug'},{rain:'leave',hoodie:'return',goodbye:'words'},{rain:'arch',bet:'skip',goodbye:'kiss'}];
 for(const [index,path] of paths.entries()){
  await page.setViewportSize({width:index===3?960:320,height:900});
  const base=finishSupper(undefined,{kiss:index===3,hoodie:index===1||index===2?'borrow':'pass'});
  await openOffline(page,courtyardAt('c9.courtyard.frameChoice',path,base),'/play/9');
  const transcript:string[]=[];let turns=0;
  while((await read(page)).campaign.active){
   const r=(await read(page)).campaign.active!,node=chapter9.nodes[r.nodeId],command=courtyardCommand(r,path);
   if(node.kind==='dialogue')transcript.push(await page.locator('.dialogue-text').innerText());
   if(r.nodeId==='c9.courtyard.rainAside')await expect(page.locator('.adviser-council img')).toHaveCount(1);
   if(r.nodeId==='c9.courtyard.betChoice')await page.screenshot({path:`work/nov15/pause-${path.rain}-${index}.png`,animations:'disabled'});
   if(r.nodeId==='c9.courtyard.resume'&&r.lineIndex===5){await expect(page.getByRole('img',{name:'Человек и кот уезжают вместе в поезде',exact:true}).first()).toBeVisible();if(index===0)await page.screenshot({path:'work/nov15/film-train-320.png',animations:'disabled'});}
   if(r.nodeId==='c9.courtyard.earlyWalk'&&r.lineIndex===7){await expect(page.locator('.scene-background')).toHaveAttribute('src',/^data:/);await page.screenshot({path:'work/nov15/books-closed-320.png',animations:'disabled'});}
   if(command.kind==='choose'&&node.kind==='choice')await page.locator('.choices button').filter({hasText:node.choices.find(c=>c.id===command.choiceId)!.text}).click();
   else await page.getByRole('button',{name:'Дальше',exact:false}).click();
   await expect.poll(async()=>(await read(page)).campaign.active?.turn??-1).not.toBe(r.turn);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   if(++turns>160)throw Error('Courtyard did not finish');
  }
  const done=parseSave(JSON.stringify(await read(page)));expect(done.campaign.records[8]).toEqual(base.campaign.records[8]);expect(done.campaign.records[9]?.story).toMatchObject({c9Rain:path.rain,c9Film:'submitted',c9LipKiss:path.goodbye==='kiss'?'yes':'no'});
  await expect(page.getByRole('heading',{name:'С крышей разберёмся',exact:true})).toBeVisible();
  await expect(page.getByText('Следующая встреча за настолкой ещё готовится.',{exact:true})).toBeVisible();
  if(path.rain==='leave'){expect(transcript.join(' ')).not.toContain('окно поезда');await expect(page.locator('.postcard-copy')).toContainText('полку книг');await page.screenshot({path:'work/nov15/result-leave-320.png',animations:'disabled'});}
 }
 expect(errors).toEqual([]);
});

test('existing code opens nine only after eight, map returns to season two, and trial does not replace canon',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await openOffline(page,finishGallery(),'/chapters');
 await page.getByLabel('Код',{exact:true}).fill(chapters.find(c=>c.id===9)!.code!);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();
 expect((await read(page)).unlocked).toContain(9);await expect(page.getByText('Код сохранён. Сначала заверши предыдущие встречи или текущую главу.',{exact:false})).toBeVisible();
 await page.goto('about:blank');await openOffline(page,finishSupper(),'/chapters');
 await page.getByLabel('Код',{exact:true}).fill(chapters.find(c=>c.id===9)!.code!);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();
 expect((await read(page)).campaign.active).toBeNull();
 await page.getByRole('button',{name:/Начать встречу 9/}).click();await expect(page.locator('[data-node="c9.courtyard.entry"]')).toBeVisible();
 const done=finishCourtyard(undefined,{rain:'arch',goodbye:'words'});await page.goto('about:blank');await openOffline(page,done,'/result/9');
 await page.getByRole('button',{name:'Посмотреть другой вариант',exact:true}).click();await expect(page.locator('[data-node="c9.courtyard.entry"]')).toBeVisible();expect((await read(page)).campaign).toEqual(done.campaign);
 await page.goto('about:blank');await openOffline(page,done,'/album');await page.getByRole('button',{name:'С крышей разберёмся',exact:false}).click();await expect(page.getByRole('heading',{name:'С крышей разберёмся',exact:true})).toBeVisible();await expect(page.getByText('Следующая встреча за настолкой ещё готовится.',{exact:true})).toHaveCount(0);
 await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.getByRole('button',{name:'После титров',exact:false})).toHaveAttribute('aria-pressed','true');
 await page.goto('about:blank');await openOffline(page,done,'/play/10');await expect(page.locator('[data-node]')).toHaveCount(0);
});

test('short phone, landscape, desktop, keyboard and reduced motion keep the new scenes usable',async({page})=>{
 for(const [width,height]of [[320,568],[844,390],[1280,900]]){
  await page.setViewportSize({width,height});const save=courtyardAt('c9.courtyard.rainChoice');save.settings.motion='reduced';await openOffline(page,save,'/play/9');
  await expect(page.locator('.courtyard-rain')).toHaveCSS('animation-name','none');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  for(const button of await page.locator('.choices button').all())expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(48);
  const leave=page.getByRole('button',{name:/Не хочу ждать под дождём/});await leave.focus();await page.keyboard.press('Enter');await expect(page.locator('[data-node="c9.courtyard.leave"]')).toBeVisible();
  await page.screenshot({path:`work/nov15/leave-${width}.png`,animations:'disabled'});
 }
});
