import {parseSave} from '../src/persistence/validateSave';
import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
import {openOffline} from './offlineApp';
import {priorR3,finishR3,r3At,startR3} from './r3Helpers';
import {reduceSave} from '../src/state/reducer';
import {initialState} from '../src/state/initialState';
import {finishFive} from './chapter5Helpers';
import {getChapter} from '../src/content/chapters';
import type {SaveV1} from '../src/state/types';
import {legacyCloudData} from './legacySave';
const key='five-meetings:/:save';
test('teaser appears only after the canonical fifth ending and is not duplicated after unlocking6',async({page})=>{
 await openOffline(page,initialState());await expect(page.locator('.after-credits-strip')).toHaveCount(0);
 await openOffline(page,priorR3());await expect(page.locator('.after-credits-strip')).toBeVisible();
 await openOffline(page,startR3(6));await expect(page.locator('.after-credits-strip')).toHaveCount(0);
});
test('pause navigation follows actual story season including first-season trial',async({page})=>{
 await openOffline(page,startR3(6),'/play/6');
 await page.getByRole('button',{name:'Открыть меню',exact:true}).click();
 await expect(page.getByRole('dialog').getByRole('button',{name:'После титров',exact:true})).toBeVisible();
 await page.getByRole('dialog').getByRole('button',{name:'После титров',exact:true}).click();
 await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
 let first=finishR3(6);first=reduceSave(first,{type:'trial',chapter:3});
 await openOffline(page,first,'/play/3?mode=trial');
 await page.getByRole('button',{name:'Открыть меню',exact:true}).click();
 await expect(page.getByRole('dialog').getByRole('button',{name:'Пять встреч',exact:true})).toBeVisible();
});
test('trial closes from either map location and cancellation keeps exact attempt',async({page})=>{
 for(const position of [0,1]){
  const base=priorR3(),save=reduceSave(base,{type:'trial',chapter:3});
  await openOffline(page,save);
  const close=page.getByRole('button',{name:'Закрыть пробный вариант',exact:true});await expect(close).toHaveCount(2);
  await close.nth(position).click();await page.getByRole('dialog').getByRole('button',{name:'Продолжить пробный вариант',exact:true}).click();
  await expect(close).toHaveCount(2);
  await close.nth(position).click();await page.getByRole('dialog').getByRole('button',{name:'Закрыть вариант',exact:true}).click();
  await expect(close).toHaveCount(0);
  await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).trial,key)).toBeNull();
  expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,key)).toEqual(save.campaign);
 }
});
test('postcard5 devil is small while advisers are larger and higher; angel uses approved portrait',async({page})=>{
 for(const width of [320,390,785]){
  await page.setViewportSize({width,height:844});
  await openOffline(page,priorR3(),'/result/5?source=campaign');
  await expect(page.locator('.secret-peek')).toBeVisible();
  const size=await page.locator('.secret-peek-body').boundingBox();expect(size!.width).toBeLessThanOrEqual(width<600?148:200);
  let save=r3At(6,'c6.r3.aside');const r=save.campaign.active!;
  save=reduceSave(save,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:r.turn}});
  await openOffline(page,save,'/play/6');
  const angel=page.locator('.adviser-angel img');await expect(angel).toBeVisible();await expect(angel).toHaveAttribute('src',/^data:image/);
  await expect.poll(()=>angel.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  const box=await page.locator('.adviser-angel').boundingBox(),stage=await page.locator('.scene-stage').boundingBox();
  expect(box!.width).toBeGreaterThanOrEqual(140);expect(box!.y+box!.height/2-stage!.y).toBeLessThan(stage!.height*.55);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'work/R3_ANGEL_'+width+'.png'});
 }
});
test('new note retains custom draft, persists confirmation and does not double-choose the next scene',async({page})=>{
 const save=r3At(8,'c8.r3.note',{choices:{'c8.r3.place':'home'}});
 await openOffline(page,save,'/play/8');await expect(page.getByRole('heading',{name:'Что тебе хотелось бы однажды сделать вместе — без особого повода?'})).toBeVisible();
 await page.getByRole('button',{name:/Своими словами/}).click();
 const field=page.locator('textarea');await field.fill('Наш маленький ритуал 🌙');
 await page.getByRole('button',{name:'Сохранить ответ',exact:true}).dblclick();
 await expect(page.locator('[data-node="c8.r3.late.intro"]')).toBeVisible();
 await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).privateNotes[8].campaign.text,key)).toBe('Наш маленький ритуал 🌙');
 expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).privateNotes[8].campaign.questionId,key)).toBe('s2.r3.q8');
});
test('valid R2 stays untouched until confirmation and is archived in its own scope',async({page})=>{
 const old=JSON.parse(readFileSync('tests/fixtures/r2/8.json','utf8')) as SaveV1,raw=JSON.stringify(old);
 await openOffline(page,old);
 await expect(page.getByRole('heading',{name:'Сезон обновился',exact:true})).toBeVisible();
 expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(raw);
 await page.getByRole('button',{name:'Начать второй сезон заново',exact:true}).click();
 await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).contentVersion,key)).toBe(12);
 expect(await page.evaluate(k=>localStorage.getItem(k+':legacy-r2'),key)).toBe(raw);
 expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign.active.chapter,key)).toBe(6);
});
test('neck appears only after the late home dance with an earlier simple kiss',async({page})=>{
 const choices={'c8.r3.place':'home','c8.r3.gesture':'curls','c8.r3.kiss.answer':'cheek','c8.r3.late':'dance'};
 const save=r3At(8,'c8.r3.late.tender.choice',{choices});
 await openOffline(page,save,'/play/8');
 await expect(page.getByRole('button',{name:'Хочу, чтобы ты поцеловал меня в шею'})).toBeVisible();
 const n=getChapter(8)!.nodes['c8.r3.gesture'];expect(n.kind==='choice'&&n.choices.some(c=>c.id==='neck')).toBe(false);
});
test('pause closes a trial on its own season without changing the campaign',async({page})=>{
 const save=reduceSave(finishR3(6),{type:'trial',chapter:6,attemptId:'pause-trial-six'});
 await openOffline(page,save,'/play/6?mode=trial');
 await page.getByRole('button',{name:'Открыть меню',exact:true}).click();
 await page.getByRole('dialog',{name:'Маленькая пауза',exact:true}).getByRole('button',{name:'Закрыть пробный вариант',exact:true}).click();
 await page.getByRole('dialog',{name:'Закрыть пробный вариант?',exact:true}).getByRole('button',{name:'Закрыть вариант',exact:true}).click();
 await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
 expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,key)).toEqual(save.campaign);
});
test('R2 archive failure blocks replacement; original local draft is archived before a successful update',async({page})=>{
 const old=JSON.parse(readFileSync('tests/fixtures/r2/active8.json','utf8')) as SaveV1,raw=JSON.stringify(old),draft='{"formatVersion":4,"legacy":"исходный черновик"}';
 await openOffline(page,old,'/chapters',{local:{[key+':note-draft']:draft}});
 await page.evaluate(()=>{const original=localStorage.setItem;window.archiveWriter=original;localStorage.setItem=(k,v)=>{if(k.includes(':legacy-r2'))throw Error('full');original(k,v);};});
 await page.getByRole('button',{name:'Начать второй сезон заново',exact:true}).click();
 await expect(page.getByRole('alert')).toContainText('исходную копию');expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(raw);
 await page.evaluate(()=>{localStorage.setItem=window.archiveWriter;});
 await page.getByRole('button',{name:'Начать второй сезон заново',exact:true}).click();
 await expect.poll(()=>page.evaluate(k=>localStorage.getItem(k+':legacy-r2:note-draft'),key)).toBe(draft);
});
test('different R2 cloud notes require a copy choice and no legacy preview is uploaded before confirmation',async({page})=>{
 const old=JSON.parse(readFileSync('tests/fixtures/r2/8.json','utf8')) as SaveV1,remote=structuredClone(old);
 remote.privateNotes[8]!.campaign!.text='Отдельная облачная мысль R2';
 const data=legacyCloudData(remote),head=data.five_meetings_v1_head,scoped='five-meetings:/:telegram:our_little_story_game_bot:42:save';
 await openOffline(page,old,'/chapters',{seedBrowser:false,local:{[scoped]:JSON.stringify(old)},telegram:{id:42,data}});
 await expect(page.getByRole('heading',{name:'Какую историю продолжить?',exact:true})).toBeVisible();
 expect(await page.evaluate(()=>window.testCloud.data.five_meetings_v1_head)).toBe(head);
 await page.getByRole('button',{name:/Продолжить из Telegram/}).click();
 await expect(page.getByRole('heading',{name:'Сезон обновился',exact:true})).toBeVisible();
 expect(await page.evaluate(()=>window.testCloud.data.five_meetings_v1_head)).toBe(head);
 await page.getByRole('button',{name:'Начать второй сезон заново',exact:true}).click();
 await expect.poll(()=>page.evaluate(k=>localStorage.getItem(k+':legacy-r2'),scoped)).toBeTruthy();
 const archived=JSON.parse((await page.evaluate(k=>localStorage.getItem(k+':legacy-r2'),scoped))!);
 expect(archived.privateNotes[8].campaign.text).toBe('Отдельная облачная мысль R2');
 await expect.poll(()=>page.evaluate(()=>window.testCloud.data.five_meetings_v1_head)).not.toBe(head);
});
declare global{interface Window{archiveWriter:(k:string,v:string)=>void;testCloud:{data:Record<string,string>};}}
test('note has two presets plus own answer, explicit save, retained draft and full Unicode limit',async({page,context})=>{
 const save=r3At(6,'c6.r3.note');await openOffline(page,save,'/play/6');
 await expect(page.locator('.personal-answer-option')).toHaveCount(3);await expect(page.locator('textarea')).toHaveCount(0);
 await page.locator('.personal-answer-option').first().click();await expect(page.locator('[data-node="c6.r3.note"]')).toBeVisible();await expect(page.getByRole('button',{name:'Сохранить ответ',exact:true})).toBeEnabled();
 await page.getByRole('button',{name:/Своими словами/}).click();const input=page.locator('#personal-answer');await expect(input).toHaveValue('');
 await input.fill('Мой собственный <b>ответ</b> 💗');await input.press('Enter');await expect(page.locator('[data-node="c6.r3.note"]')).toBeVisible();
 await page.locator('.personal-answer-option').nth(1).click();await page.getByRole('button',{name:/Своими словами/}).click();await expect(input).toHaveValue('Мой собственный <b>ответ</b> 💗\n');
 await expect.poll(()=>page.evaluate(k=>localStorage.getItem(k+':note-draft'),key)).toContain('custom');
 const draft=(await page.evaluate(k=>localStorage.getItem(k+':note-draft'),key))!;const second=await context.newPage();await openOffline(second,save,'/play/6',{local:{[key+':note-draft']:draft}});await expect(second.locator('#personal-answer')).toHaveValue('Мой собственный <b>ответ</b> 💗\n');await second.close();
 await input.fill('🙂'.repeat(281));await expect(input).toHaveValue('🙂'.repeat(281));await expect(page.getByRole('button',{name:'Сохранить ответ',exact:true})).toBeDisabled();await expect(page.getByRole('alert')).toContainText('280');
 await input.fill('Мой собственный <b>ответ</b> 💗');await page.getByRole('button',{name:'Сохранить ответ',exact:true}).dblclick();await expect(page.locator('[data-node="c6.r3.closing"]')).toBeVisible();
 const restored=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(restored.privateNotes[6]?.campaign?.text).toBe('Мой собственный <b>ответ</b> 💗');
});
test('side advisers show one readable portrait while main Vlad remains visible',async({page})=>{
 await page.setViewportSize({width:390,height:844});await openOffline(page,r3At(7,'c7.r3.aside.other'),'/play/7');
 await expect(page.locator('.adviser-council .adviser-portrait')).toHaveCount(1);await expect(page.locator('.adviser-devil')).toBeVisible();await expect(page.locator('.character')).toHaveCSS('opacity','1');
 const box=await page.locator('.adviser-portrait').boundingBox();expect(box!.width).toBeGreaterThanOrEqual(110);
 await page.screenshot({path:'test-results/r2-side-adviser-390.png',fullPage:true});
 await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect(page.locator('.adviser-angel')).toBeVisible();await expect(page.locator('.adviser-council .adviser-portrait')).toHaveCount(1);
 await expect(page.getByText(/Искры вечера|0 из 3|Необязательная миссия/)).toHaveCount(0);
});
test('archive postcards are shown only if actually found and never attach the new answer to an old ending',async({page})=>{
 const fresh=finishR3(8,{note:'Моя новая мысль R3'});
 await openOffline(page,fresh,'/album');await expect(page.locator('.album-card')).toHaveCount(fresh.collection.cards.length);await expect(page.locator('.album-card.unfound')).toHaveCount(0);
 const old=JSON.parse(readFileSync('tests/fixtures/r2/8.json','utf8')) as SaveV1;
 const card=old.collection.cards.find(c=>c.chapter===8)!;fresh.collection.cards.push(card);
 await openOffline(page,fresh,'/result/8?card='+card.id);
 await expect(page.getByText('Из прежнего сценария · встреча 8',{exact:true})).toBeVisible();
 await expect(page.locator('.episode-result')).toHaveCount(0);
 await expect(page.getByText('Моя новая мысль R3',{exact:true})).toHaveCount(0);
});

test('album contains only collected postcards and reveals the second season only after access',async({context})=>{
 for(const width of [320,390,960]){
  const page=await context.newPage();await page.setViewportSize({width,height:844});
  const first=finishFive(priorR3(),{memory:'skipped',ending:'comic'},true);await openOffline(page,first,'/album');
  await expect(page.locator('.album-card')).toHaveCount(first.collection.cards.length);
  await expect(page.getByRole('heading',{name:'После титров',exact:true})).toHaveCount(0);
  await expect(page.getByText('Ещё одно воспоминание',{exact:true})).toHaveCount(0);
  await expect(page.getByRole('heading',{name:'Фильм подождёт',exact:true})).toHaveCount(0);
  expect(JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(first);
  await page.screenshot({path:'work/ALBUM_FIRST_SEASON_'+width+'.png',fullPage:true,animations:'disabled'});
  const second=finishR3(8);await openOffline(page,second,'/album');
  const season=page.getByRole('region',{name:'После титров',exact:true});await expect(season).toBeVisible();
  await expect(season.locator('.album-card')).toHaveCount(second.collection.cards.filter(card=>card.chapter>=6).length);
  await expect(season.getByRole('heading',{name:'Фильм подождёт',exact:true})).toHaveCount(0);
  await expect(page.locator('.album-card:disabled')).toHaveCount(0);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  expect(JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(second);
  await page.screenshot({path:'work/ALBUM_OPEN_SEASON_'+width+'.png',fullPage:true,animations:'disabled'});
  await page.close();
 }
 const empty=await context.newPage();await openOffline(empty,initialState(),'/album');
 await expect(empty.locator('.album-card')).toHaveCount(0);await expect(empty.getByText('Пока здесь тихо.',{exact:false})).toBeVisible();
 await expect(empty.getByRole('heading',{name:'После титров',exact:true})).toHaveCount(0);
});
