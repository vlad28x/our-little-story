
import {expect,test,type Locator,type Page} from '@playwright/test';
import {easterEggs,type EasterEggId} from '../src/content/easterEggs';
import {chapter10} from '../src/content/chapters/ch10';
import {reduceSave} from '../src/state/reducer';
import type {SaveV1} from '../src/state/types';
import {courtyardAt,courtyardCommand} from './courtyard9Helpers';
import {galleryAt} from './gallery7Helpers';
import {openOffline} from './offlineApp';
import {photoAt} from './photo6Helpers';
import {supperAt} from './supperHelpers';
import {travellersAt,travellersCommand} from './travellers10Helpers';

const key='five-meetings:/:save';
const stored=(page:Page)=>page.evaluate(k=>localStorage.getItem(k),key);
const next=(page:Page)=>page.getByRole('button',{name:'Дальше',exact:false});
async function load(page:Page,save:SaveV1){
 const chapter=save.campaign.active!.chapter;
 await page.goto('about:blank');
 await openOffline(page,{...save,settings:{...save.settings,textMode:'instant'}},`/play/${chapter}`);
 await expect(page.locator('.story-screen')).toBeVisible();
}
async function tapProp(page:Page,button:Locator){
 const point=await button.evaluate(el=>{
  const r=el.getBoundingClientRect();
  const spark=el.querySelector('.easter-spark')?.getBoundingClientRect();
  const points=spark?[[spark.x+spark.width/2,spark.y+spark.height/2]]:[];
  for(const y of [.5,.25,.75])for(const x of [.5,.25,.75])points.push([r.x+r.width*x,r.y+r.height*y]);
  const hit=points.find(([x,y])=>document.elementFromPoint(x,y)?.closest('button')===el);
  return hit?{x:hit[0],y:hit[1]}:null;
 });
 expect(point,await button.getAttribute('aria-label')??undefined).not.toBeNull();
 await page.mouse.click(point!.x,point!.y);
}
async function reactTo(page:Page,id:EasterEggId,keyboard=false){
 const button=page.getByRole('button',{name:easterEggs[id].label,exact:true});
 const hint=button.locator('.easter-spark');
 await expect(hint).toBeVisible();
 const raw=await stored(page);
 if(keyboard){await button.focus();await page.keyboard.press('Enter');}
 else await tapProp(page,button);
 await expect(page.locator(`.scene-easter-note[data-egg="${id}"] [role="status"] p`)).toHaveText(easterEggs[id].text);
 await expect(hint).toHaveCount(0);
 expect(await stored(page)).toBe(raw);
 await page.getByRole('button',{name:'Скрыть маленькую реакцию',exact:true}).click();
 await expect(button).toBeFocused();
}
async function checkLayout(page:Page){
 for(const target of await page.locator('.scene-easter-target, .photo-camera-trigger').all()){
  const size=(await target.boundingBox())!,min=await target.evaluate(el=>el.classList.contains('easter-hair')?64:48);
  expect(size.width).toBeGreaterThanOrEqual(min);
  expect(size.height).toBeGreaterThanOrEqual(min);
 }
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
}
async function capture(page:Page,width:number,name:string){
 if(width!==320)await page.locator('.scene-stage').screenshot({path:`work/nov22/eggs-${name}-${width}.png`,animations:'disabled'});
}

for(const width of [320,390,785]){
 test.describe(`season two props at ${width}px`,()=>{
  test.beforeEach(async({page})=>{await page.setViewportSize({width,height:width===320?680:900});await page.emulateMedia({reducedMotion:'reduce'});});

  test('six: camera, river and curls',async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await load(page,photoAt('c6.photo.roll',{place:'water'}));
   await expect(page.locator('.scene-easter')).toHaveAttribute('data-reduced','true');
   await expect(page.locator('.photo-camera strong')).toHaveText('11');
   await expect(page.locator('.easter-waterWindow6')).toBeVisible();
   await capture(page,width,'6-water');
   await checkLayout(page);
   await reactTo(page,'waterWindow6');
   await reactTo(page,'kiosk6');
   await reactTo(page,'hair',true);
   await reactTo(page,'camera',true);
   await expect(page.locator('.photo-camera strong')).toHaveText('11');
   const camera=page.locator('.photo-camera-trigger');
   await camera.press('Enter');
   await expect(page.locator('.photo-camera-flash')).toHaveCSS('animation-name','none');
   await next(page).click();
   await expect(page.locator('.scene-easter-note')).toHaveCount(0);
   await expect(page.locator('.photo-camera strong')).toHaveText('10');
   await expect(camera.locator('.easter-spark')).toHaveCount(0);
   expect(errors).toEqual([]);
  });

  test('seven: the door and the exhibit close-up',async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await load(page,galleryAt('c7.gallery.entry'));
   await expect(page.locator('.easter-handle7')).toBeVisible();
   await capture(page,width,'7-door');
   await checkLayout(page);
   await reactTo(page,'noPhoto7');
   await reactTo(page,'handle7');
   if(await page.locator('.easter-poster7').count())await reactTo(page,'poster7');
   await load(page,galleryAt('c7.gallery.chip',{route:'apart',work:'chip'}));
   await expect(page.locator('.gallery-art-chip')).toBeVisible();
   await expect(page.locator('.scene-easter')).toHaveCount(0);
   expect(errors).toEqual([]);
  });

  test('eight: kitchen props stay usable and yield to foreground food',async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await load(page,supperAt('c8.supper.entry'));
   await expect(page.locator('.easter-kettle8')).toBeVisible();
   await capture(page,width,'8-kitchen');
   await checkLayout(page);
   await reactTo(page,'kettle8');
   await reactTo(page,'sugar8');
   await reactTo(page,'utensils8',true);
   await page.locator('.easter-kettle8').press('Enter');
   await next(page).click();
   await expect(page.locator('.scene-easter-note')).toHaveCount(0);
   await expect(page.locator('.easter-kettle8 .easter-spark')).toHaveCount(0);
   await load(page,supperAt('c8.supper.filling'));
   await expect(page.locator('.supper-scene .supper-art')).toHaveCount(0);
   await reactTo(page,'sugar8');
   await load(page,supperAt('c8.supper.pepper',{filling:'pepper'}));
   await expect(page.locator('.supper-scene .supper-art')).toHaveAttribute('data-stage','ingredients');
   if(await page.locator('.easter-sugar8').count())await reactTo(page,'sugar8');
   expect(errors).toEqual([]);
  });

  test('nine: preserved cover crop for the courtyard and bakery, then pause and film',async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await load(page,courtyardAt('c9.courtyard.entry'));
   await expect(page.locator('.scene-background')).toHaveCSS('object-position','50% 50%');
   await expect(page.locator('.easter-garland9')).toBeVisible();
   await capture(page,width,'9-courtyard');
   await checkLayout(page);
   await reactTo(page,'garland9');
   await page.getByRole('button',{name:'Открыть меню',exact:true}).click();
   await expect(page.locator('.scene-easter')).toHaveCount(0);
   await page.getByRole('button',{name:'Вернуться к истории'}).click();
   await expect(page.locator('.easter-garland9 .easter-spark')).toHaveCount(0);
   for(const closed of [false,true]){
    let atBooks=courtyardAt('c9.courtyard.earlyWalk',{rain:'leave'});
    for(let i=0;closed&&i<3;i++)atBooks=reduceSave(atBooks,{type:'command',target:'campaign',command:courtyardCommand(atBooks.campaign.active!)});
    await load(page,atBooks);
    await expect(page.locator('.scene-background')).toHaveCSS('object-position','0% 50%');
    await expect(page.locator('.easter-bookcase9')).toBeVisible();
    await capture(page,width,closed?'9-books-closed':'9-books');
    await reactTo(page,'bookcase9');
    if(await page.locator('.easter-bakery9').count())await reactTo(page,'bakery9');
   }
   for(const node of ['filmStart','resume'] as const){
    await load(page,courtyardAt(`c9.courtyard.${node}`));
    await expect(page.locator('.courtyard-playing')).toBeVisible();
    await expect(page.locator('.scene-easter')).toHaveCount(0);
   }
   expect(errors).toEqual([]);
  });

  test('ten: the cat and home props, no curls on Nina or layer at fade',async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await load(page,travellersAt('c10.travellers.cat'));
   await expect(page.locator('.easter-cat10')).toBeVisible();
   await capture(page,width,'10-cat');
   await checkLayout(page);
   await reactTo(page,'cat10');
   await load(page,travellersAt('c10.travellers.home',{continuation:'home'}));
   await expect(page.locator('.easter-tv10')).toBeVisible();
   await capture(page,width,'10-home');
   await reactTo(page,'tv10');
   await reactTo(page,'sofaBlanket10');
   await load(page,travellersAt('c10.travellers.entry'));
   for(let i=0;i<5;i++)await next(page).click();
   await expect(page.locator('.character.nina')).toBeVisible();
   await expect(page.locator('.easter-hair')).toHaveCount(0);
   let ending=travellersAt('c10.travellers.private',{continuation:'home',finale:'private'});
   const scene=chapter10.nodes['c10.travellers.private'];
   if(scene.kind!=='dialogue')throw Error('Missing private dialogue');
   while(ending.campaign.active!.lineIndex<scene.lines.length-1){
    ending=reduceSave(ending,{type:'command',target:'campaign',command:travellersCommand(ending.campaign.active!)});
   }
   await load(page,ending);
   await expect(page.locator('.scene-fade')).toBeVisible();
   await expect(page.locator('.scene-easter')).toHaveCount(0);
   expect(errors).toEqual([]);
  });
 });
}
