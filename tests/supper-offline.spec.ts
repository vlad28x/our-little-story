import {test,expect,type Page} from '@playwright/test';
import {openOffline} from './offlineApp';
import {supperAt,supperCommand,finishSupper,type SupperPath} from './supperHelpers';
import {finishGallery} from './gallery7Helpers';
import {chapter8} from '../src/content/chapters/ch08';
import {parseSave} from '../src/persistence/validateSave';
const key='five-meetings:/:save';
async function saved(page:Page){return parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);}

test('four supper paths finish with actual food, independent closeness and hoodie; no later chapter starts',async({page})=>{
 test.setTimeout(180000);
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 const paths:Partial<SupperPath>[]=[{filling:'simple',shape:'fold',frame:'boardVlad',step:'sit',kiss:false,hoodie:'pass'},{filling:'mix',shape:'open',frame:'foodHer',step:'lead',kiss:true,hoodie:'borrow'},{filling:'mushroom',shape:'open',frame:'foodVlad',step:'play',kiss:false,hoodie:'wear'},{step:'follow',kiss:true}];
 for(const [i,path]of paths.entries()){
  await page.setViewportSize({width:i===3?960:320,height:900});
  const base=finishGallery(undefined,{gift:(['none','blue','chip'] as const)[i%3],farewell:i%2?'cheek':'words'});
  await openOffline(page,supperAt('c8.supper.fillChoice',path,base),'/play/8');
  await expect(page.locator('.supper-choices button')).toHaveCount(4);
  let turns=0;
  while((await saved(page)).campaign.active){
   const s=await saved(page),run=s.campaign.active!;const command=supperCommand(run,path),node=chapter8.nodes[run.nodeId];
   if(i===0&&run.nodeId==='c8.supper.shapeChoice'){
    await expect(page.locator('.supper-scene svg')).toHaveAttribute('aria-label','Лист лепёшки разошёлся по сгибу');
    await page.screenshot({path:'work/SUPPER8_SHAPE_320.png',animations:'disabled'});
   }
   if(i===1&&run.nodeId==='c8.supper.meal'&&run.lineIndex===0){
    await expect(page.locator('.supper-gift')).toHaveAttribute('src',/^data:/);
    await page.screenshot({path:'work/SUPPER8_MEAL_320.png',animations:'disabled'});
   }
   if(i===1&&run.nodeId==='c8.supper.lead'&&run.lineIndex===0)await page.screenshot({path:'work/SUPPER8_DANCE_320.png',animations:'disabled'});
   if(command.kind==='choose'&&node.kind==='choice'){
    const choice=node.choices.find(c=>c.id===command.choiceId)!;
    await page.locator('.choices button').filter({hasText:choice.text}).click();
   }else await page.getByRole('button',{name:'Дальше',exact:false}).click();
   await expect.poll(async()=>{const next=await saved(page);return next.campaign.active?.turn??-1;}).not.toBe(run.turn);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   if(++turns>160)throw Error('Supper did not finish');
  }
  const done=await saved(page);expect(done.campaign.records[7]).toEqual(base.campaign.records[7]);
  expect(done.campaign.records[8]!.story).toMatchObject({c8LipKiss:path.kiss?'yes':'no',c8Film:'nine'});
  await expect(page.getByRole('heading',{name:'Половина кухни',exact:true})).toBeVisible();
  await expect(page.getByText('Следующая встреча в кинодворике ещё готовится.',{exact:true})).toBeVisible();
  if(i===0)await page.screenshot({path:'work/SUPPER8_RESULT_320.png',animations:'disabled'});
  for(const id of [9,10]){await openOffline(page,done,`/play/${id}`);await expect(page.locator('[data-node]')).toHaveCount(0);}
 }
 expect(errors).toEqual([]);
});

test('selected gift is canonical, no gift stays absent; keyboard chooses the new assembly',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const gift of ['none','chip','blue'] as const){
  const base=finishGallery(undefined,{gift});await openOffline(page,supperAt('c8.supper.table',{},base),'/play/8');
  await expect(page.locator('.supper-gift')).toHaveCount(gift==='none'?0:1);
  if(gift!=='none')await expect(page.locator('.supper-gift')).toHaveAttribute('alt',`Подаренная открытка «${gift==='chip'?'Скол':'Просвет'}»`);
 }
 await openOffline(page,supperAt('c8.supper.shapeChoice',{filling:'mushroom'}),'/play/8');
 const button=page.locator('.choices button').filter({hasText:'Оставим порции открытыми'});await button.focus();await page.keyboard.press('Enter');
 await expect(page.locator('[data-node="c8.supper.open"]')).toBeVisible();expect((await saved(page)).campaign.active?.story).toMatchObject({c8Filling:'mushroom',c8Shape:'open'});
 const done=finishSupper();await openOffline(page,done,'/album');await page.getByRole('button',{name:'Половина кухни',exact:false}).click();await expect(page.getByRole('heading',{name:'Половина кухни',exact:true})).toBeVisible();
 await expect(page.getByText('Следующая встреча в кинодворике ещё готовится.',{exact:true})).toHaveCount(0);
});

test('apron, reduced-motion dance and supper fit short phone, landscape and desktop',async({page})=>{
 for(const size of [{width:320,height:568},{width:844,height:390},{width:1280,height:900}]){
  await page.setViewportSize(size);
  const save=supperAt('c8.supper.lead',{step:'lead'});save.settings.motion='reduced';await openOffline(page,save,'/play/8');
  await expect(page.locator('.scene-stage')).toHaveClass(/dance-still/);
  expect(await page.locator('.character').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
 await page.setViewportSize({width:390,height:844});
 await openOffline(page,supperAt('c8.supper.entry'),'/play/8');await page.screenshot({path:'work/SUPPER8_APRON_390.png',animations:'disabled'});
});
