import {test,expect,type Page} from '@playwright/test';
import {openOffline} from './offlineApp';
import {travellersAt,startTravellers,finishTravellers,travellersCommand,type TravellersPath} from './travellers10Helpers';
import {finishCourtyard} from './courtyard9Helpers';
import {finishSupper} from './supperHelpers';
import {finishGallery} from './gallery7Helpers';
import {chapter10} from '../src/content/chapters/ch10';
import {parseSave} from '../src/persistence/validateSave';
import type {SaveV1} from '../src/state/types';
const read=(page:Page)=>page.evaluate(()=>JSON.parse(localStorage.getItem('five-meetings:/:save')!) as SaveV1);
test('plays the shared help road and nocturnal home road with every action saved',async({page})=>{
 test.setTimeout(120_000);
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const [i,path] of ([{river:'help',quarry:'help',arrival:'help',continuation:'cafe',goodbye:'words'},{river:'ford',quarry:'contour',arrival:'upper',continuation:'home',tender:'kiss',finale:'sleep'},{river:'bridge',quarry:'tunnel',arrival:'upper',continuation:'home',tender:'near',finale:'private'}] as Partial<TravellersPath>[]).entries()){
  await page.setViewportSize({width:i===0?320:i===1?390:960,height:900});
  const base=i===1?finishCourtyard(finishSupper(finishGallery(undefined,{gift:'chip'}),{hoodie:'borrow'}),{rain:'leave',hoodie:'keep'}):undefined;
  await openOffline(page,travellersAt('c10.travellers.prints',path,base),'/play/10');
  let count=0;
  while((await read(page)).campaign.active){
   const r=(await read(page)).campaign.active!,node=chapter10.nodes[r.nodeId],command=travellersCommand(r,path);
   if(r.nodeId==='c10.travellers.homeKissFirstChoice'){
    const choices=page.locator('.choices button');
    await expect(choices).toHaveCount(2);
    await expect(choices).toContainText(['Не отстраняться и притянуть его ещё ближе','Улыбнуться и устроиться у него на плече']);
    await expect(page.locator('.traveller-home-props')).toBeVisible();
   }
   if(r.nodeId==='c10.travellers.homeKissFirstSoft')await expect(page.locator('.traveller-home-props')).toBeVisible();
   if(r.nodeId==='c10.travellers.private'&&node.kind==='dialogue'&&r.lineIndex===node.lines.length-1)
    await expect(page.locator('.scene-stage')).toHaveClass(/scene-fade/);
   if(r.nodeId==='c10.travellers.privateMorning'){
    await expect(page.locator('.scene-stage')).toHaveAttribute('aria-label','Дома у Влада · доброе утро');
    expect(r.story.c10Finale).toBeUndefined();
    expect(r.story.c10LipKiss).toBe('yes');
    await expect(page.locator('.dialogue-text')).not.toContainText('открытка из галереи');
   }
   if(r.nodeId==='c10.travellers.prints'&&r.lineIndex===9)await page.screenshot({path:`work/nov18/prints-${i}.png`,animations:'disabled'});
   if(r.nodeId==='c10.travellers.sleep'&&r.lineIndex===9||r.nodeId==='c10.travellers.private'&&r.lineIndex===5||r.nodeId==='c10.travellers.cafeGoodbye'||r.nodeId==='c10.travellers.riverChoice'||r.nodeId==='c10.travellers.catChoice'||r.nodeId==='c10.travellers.arrived'&&r.lineIndex===3||r.nodeId==='c10.travellers.upperNight'&&r.lineIndex===3||r.nodeId==='c10.travellers.homeChoice')await page.screenshot({path:`work/nov18/${r.nodeId.split('.').at(-1)}-${i}.png`,animations:'disabled'});
   if(command.kind==='choose'&&node.kind==='choice')await page.locator('.choices button').filter({hasText:node.choices.find(c=>c.id===command.choiceId)!.text}).click();else await page.getByRole('button',{name:/^Дальше/}).click();
   await expect.poll(async()=>(await read(page)).campaign.active?.turn??-1).not.toBe(r.turn);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   if(++count>240)throw Error('Did not finish');
  }
  const done=parseSave(JSON.stringify(await read(page)));expect(done.campaign.completed).toHaveLength(10);
  await expect(page.getByRole('heading',{name:'Этот вечер ещё не снят',exact:true})).toBeVisible();
  await expect(page.locator('.travellers-invitation .choices button')).toHaveCount(5);
  await expect(page.locator('.postcard-copy')).toContainText('Дошли оба.');
  await page.screenshot({path:`work/nov18/result-${i}.png`,animations:'disabled',fullPage:true});
 }
 expect(errors).toEqual([]);
});

test('invitation changes, draft editing, manual copy fallback and trial/album isolation',async({page})=>{
 await page.setViewportSize({width:320,height:740});const done=finishTravellers();done.continuation='movie';
 await openOffline(page,done,'/result/10');
 for(const [label,value] of [['Настолка','game'],['Киновечер','movie'],['Готовка вдвоём','cook'],['Прогулка или кафе','out'],['Пока воздержусь.','decline']]){
  await page.getByRole('button',{name:label,exact:false}).click();await expect.poll(async()=>(await read(page)).continuation10).toBe(value);expect((await read(page)).continuation).toBe('movie');
 }
 await page.getByLabel('Сообщение Владу',{exact:true}).fill('Мой текст для ручного сообщения');
 await page.getByRole('button',{name:'Копировать сообщение',exact:true}).click();await expect(page.getByRole('status')).toContainText('Выдели текст');
 const saved=await read(page);await page.goto('about:blank');await openOffline(page,saved,'/result/10');
 await expect(page.getByLabel('Сообщение Владу',{exact:true})).toHaveValue('Сейчас пока воздержусь от встречи. Спасибо за историю.');
 await page.getByRole('button',{name:'Посмотреть другой вариант',exact:true}).click();await expect(page.locator('[data-node="c10.travellers.entry"]')).toBeVisible();
 expect((await read(page)).continuation10).toBe('decline');
 await page.goto('about:blank');await openOffline(page,saved,'/result/10?card=c10.travellers');await expect(page.locator('.travellers-invitation')).toHaveCount(0);
});

test('keeps choices readable at 320/390/785/960 with keyboard and Telegram safe areas',async({page})=>{
 for(const width of [320,390,785,960]){
  await page.setViewportSize({width,height:900});const s=travellersAt('c10.travellers.catChoice',{river:'ford',quarry:'contour',arrival:'upper'});s.settings.motion='reduced';
  await openOffline(page,s,'/play/10');await page.evaluate(()=>{document.documentElement.style.setProperty('--tg-safe-area-inset-top','47px');document.documentElement.style.setProperty('--tg-content-safe-area-inset-top','56px');});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  for(const button of await page.locator('.choices button').all())expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(48);
  const upper=page.getByRole('button',{name:/По верхней тропе/});await upper.focus();await page.keyboard.press('Enter');await expect(page.locator('[data-node="c10.travellers.upperNight"]')).toBeVisible();
 }
});

test('completed ten has one meeting button that opens its canonical invitation and preserves trial cancellation',async({page})=>{
 const main=finishTravellers();main.continuation='movie';main.continuation10='decline';
 await page.setViewportSize({width:390,height:844});await openOffline(page,main,'/chapters');
 const chapter=page.locator('.chapter-list>li').filter({has:page.getByRole('heading',{name:'Два путешественника',exact:true})});
 await expect(chapter.getByRole('button',{name:/Встретиться вживую/})).toHaveCount(1);
 await expect(chapter.getByRole('button',{name:/Мой финал/})).toHaveCount(0);
 await expect(page.getByRole('button',{name:/Мой финал/}).first()).toBeVisible();
 await chapter.getByRole('button',{name:/Встретиться вживую/}).click();
 await expect(page.locator('#real-meeting-invitation')).toBeFocused();
 await expect(page.getByRole('heading',{name:'Этот вечер ещё не снят',exact:true})).toBeInViewport();
 await expect(page.getByRole('button',{name:'Пока воздержусь.',exact:true})).toHaveAttribute('aria-pressed','true');
 expect(await read(page)).toEqual(main);
 const trial=startTravellers(main,true);await page.goto('about:blank');await openOffline(page,trial,'/chapters');
 await page.getByRole('button',{name:/Встретиться вживую/}).click();
 await expect(page.getByRole('dialog',{name:'Закрыть пробный вариант?'})).toBeVisible();
 await page.getByRole('button',{name:'Продолжить пробный вариант',exact:true}).click();expect(await read(page)).toEqual(trial);
 await page.getByRole('button',{name:/Встретиться вживую/}).click();await page.getByRole('button',{name:'Закрыть вариант',exact:true}).click();
 await expect(page.locator('#real-meeting-invitation')).toBeFocused();
 const after=await read(page);expect(after.trial).toBeNull();expect(after.campaign).toEqual(main.campaign);expect(after.continuation).toBe('movie');expect(after.continuation10).toBe('decline');
});
