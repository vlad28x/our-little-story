import {test,expect,type Page} from '@playwright/test';
import {openOffline} from './offlineApp';
import {supperAt,supperCommand,finishSupper,type SupperPath} from './supperHelpers';
import {finishGallery} from './gallery7Helpers';
import {chapter8} from '../src/content/chapters/ch08';
import {parseSave} from '../src/persistence/validateSave';
import {reduceSave} from '../src/state/reducer';
import type {NodeId} from '../src/engine/types';
const key='five-meetings:/:save';
async function saved(page:Page){return parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);}

test('four supper paths finish with actual food, independent closeness and hoodie; later chapters require a new start',async({page})=>{
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
    await expect(page.locator('.supper-scene svg')).toHaveAttribute('data-stage','torn');
    await page.screenshot({path:'work/SUPPER8_SHAPE_320.png',animations:'disabled'});
   }
   if(i===1&&run.nodeId==='c8.supper.meal'&&run.lineIndex===0){
    await expect(page.locator('.supper-gift')).toHaveCount(0);
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
  await expect(page.getByText('Следующая встреча в кинодворике ещё готовится.',{exact:true})).toHaveCount(0);
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
  const next=page.getByRole('button',{name:'Дальше',exact:false});
  for(let i=0;i<(gift==='none'?3:4);i++)await next.click();
  await expect(page.locator('.dialogue-text')).toContainText('план был такой');
  await expect(page.locator('.supper-gift')).toBeHidden();
  for(let i=0;i<3;i++)await next.click();
  await expect(page.locator('[data-node="c8.supper.filling"]')).toBeVisible();
  await expect(page.locator('.supper-gift')).toHaveCount(0);
 }
 await openOffline(page,supperAt('c8.supper.shapeChoice',{filling:'mushroom'}),'/play/8');
 const button=page.locator('.choices button').filter({hasText:'Оставим порции открытыми'});await button.focus();await page.keyboard.press('Enter');
 await expect(page.locator('[data-node="c8.supper.open"]')).toBeVisible();expect((await saved(page)).campaign.active?.story).toMatchObject({c8Filling:'mushroom',c8Shape:'open'});
 const done=finishSupper();await openOffline(page,done,'/album');await page.getByRole('button',{name:'Половина кухни',exact:false}).click();await expect(page.getByRole('heading',{name:'Половина кухни',exact:true})).toBeVisible();
 await expect(page.getByText('Следующая встреча в кинодворике ещё готовится.',{exact:true})).toHaveCount(0);
});

test('the gallery postcard sits on the kitchen table at four widths',async({page})=>{
 await openOffline(page,supperAt('c8.supper.table',{},finishGallery(undefined,{gift:'blue'})),'/play/8');
 for(const [width,height] of [[320,568],[390,844],[785,900],[960,900]]){
  await page.setViewportSize({width,height});
  const gift=page.locator('.supper-gift');
  await expect(gift).toBeVisible();
  const location=await gift.evaluate(img=>{
   const stage=img.closest('.scene-art-clip')!.getBoundingClientRect(),card=img.getBoundingClientRect();
   const scale=Math.max(stage.width/3,stage.height/2),x=card.left+card.width/2-stage.left,y=card.top+card.height/2-stage.top;
   return {x:(x-(stage.width-3*scale)*.5)/(3*scale),y:(y-(stage.height-2*scale)*.38)/(2*scale),edge:card.right-stage.left,width:stage.width};
  });
  expect(location.x).toBeGreaterThan(.13);expect(location.x).toBeLessThan(.39);
  expect(location.y).toBeGreaterThan(.60);expect(location.y).toBeLessThan(.70);
  expect(location.edge).toBeLessThan(location.width*.48);
  await page.locator('.scene-stage').screenshot({path:`work/nov22/gift-${width}.png`,animations:'disabled'});
 }
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

test('the cooking stages and archive postcard fit the phone and desktop',async({page})=>{
 test.setTimeout(120000);
 const errors:string[]=[];
 page.on('pageerror',error=>errors.push(error.message));
 const art=page.locator('.supper-scene .supper-art');
 for(const [width,height,shape] of [[390,844,'open'],[960,900,'fold']] as const){
  await page.setViewportSize({width,height});
  const path={filling:'mix',shape} as const;
  async function loadScene(node:NodeId,lineIndex=0){
   let save=supperAt(node,path);
   while(save.campaign.active?.nodeId===node&&save.campaign.active.lineIndex<lineIndex){
    save=reduceSave(save,{type:'command',target:'campaign',command:supperCommand(save.campaign.active,path)});
   }
   expect(save.campaign.active?.lineIndex).toBe(lineIndex);
   await page.goto('about:blank');
   await openOffline(page,save,'/play/8');
  }
  async function shot(name:string){
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   await page.screenshot({path:`work/nov23/supper-${name}-${width}.png`,animations:'disabled',scale:'css'});
  }
  await loadScene('c8.supper.filling');
  await expect(art).toHaveCount(0);
  await loadScene('c8.supper.fillChoice');
  await expect(art).toHaveCount(0);
  const fillingButtons=page.locator('.supper-choices button');
  await expect(fillingButtons).toHaveCount(4);
  const fillings=[
   ['Возьму перец и сыр','Доска с тёртым сыром и нарезанным сладким перцем'],
   ['Возьму грибы и сыр','Доска с тёртым сыром и обжаренными грибами'],
   ['Смешаем перец, грибы и сыр','Доска с тёртым сыром, перцем и грибами'],
   ['Возьму просто сыр и зелень','Доска с тёртым сыром и свежей зеленью'],
  ];
  for(const [caption,image] of fillings){
   const button=fillingButtons.filter({hasText:caption});
   await expect(button.getByRole('img',{name:image,exact:true})).toHaveAttribute('data-stage','ingredients');
   const [card,drawing,label]=await Promise.all([
    button.boundingBox(),
    button.getByRole('img',{name:image,exact:true}).boundingBox(),
    button.getByText(caption,{exact:true}).boundingBox(),
   ]);
   expect(card&&drawing&&label).toBeTruthy();
   const center=(box:{x:number;width:number})=>box.x+box.width/2;
   expect(Math.abs(center(label!)-center(card!))).toBeLessThan(1);
   expect(Math.abs(center(drawing!)-center(card!))).toBeLessThan(1);
   expect(label!.y-(drawing!.y+drawing!.height)).toBeLessThan(5);
  }
  await expect(page.locator('.supper-choices')).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('.supper-choices').screenshot({path:`work/nov23/supper-centered-choices-${width}.png`,animations:'disabled',scale:'css'});
  await loadScene('c8.supper.mix');
  await expect(art).toHaveAttribute('data-stage','ingredients');
  await shot('ingredients');
  await loadScene('c8.supper.shapeChoice');
  await expect(art).toHaveAttribute('data-stage','torn');
  await expect(page.locator('.supper-choices button svg[data-stage="cooked"]')).toHaveCount(2);
  await shot('torn');
  await loadScene(`c8.supper.${shape}`);
  await expect(art).toHaveAttribute('data-stage','torn');
  await loadScene('c8.supper.meal');
  await expect(art).toHaveAttribute('data-stage','cooked');
  await shot('cooked');
  await loadScene('c8.supper.meal',10);
  await expect(art).toHaveAttribute('data-stage','half');
  await shot('half');
  await loadScene('c8.supper.foodHer');
  await expect(art).toHaveAttribute('data-stage','half');
  await page.goto('about:blank');
  await openOffline(page,supperAt('c8.supper.boardVlad',{...path,frame:'boardVlad'}),'/play/8');
  await expect(art).toHaveAttribute('data-stage','board');
  await shot('board');
  await page.goto('about:blank');
  await openOffline(page,finishSupper(undefined,path),'/result/8?card=c8.supper');
  await expect(page.locator('.supper-postcard .supper-art')).toHaveAttribute('aria-label',/mix/);
  await shot('postcard');
 }
 expect(errors).toEqual([]);
});
