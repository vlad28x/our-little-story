import { test,expect,type Page } from '@playwright/test';
import { expectSimpleResult } from './resultActions';
import { completeTwo,thirdCode } from './chapter3Helpers';
import { ingredientNames,recipes,type Recipe } from '../src/minigames/kitchenModel';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;
async function seed(page:Page){const save=completeTwo();await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify({...save,contentVersion:2}));},{key,save});return save;}
async function until(page:Page,id:string){for(let i=0;i<150;i++){if(await page.locator(`[data-node="${id}"]`).count())return;await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw Error('Not reached '+id);}
async function open(page:Page){await page.goto('./#/chapters');await expect(page.getByText('Ждёт своего маленького приглашения')).toBeVisible();await expect(page.getByLabel('Код',{exact:true})).toBeVisible();await page.getByLabel('Код',{exact:true}).fill(thirdCode);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();await page.locator('.chapter-list li').nth(2).getByRole('button',{name:'Начать встречу'}).click();await expect(page.locator('[data-node="c3.sofa"]')).toBeVisible();}
async function toKitchen(page:Page,reaction:'tease'|'help'|'absurd'='absurd'){
  await until(page,'c3.pad.press');await page.getByRole('button',{name:'Нажать кнопку второго геймпада'}).click();await until(page,'c3.pad.reaction');
  await page.getByRole('button',{name:reaction==='tease'?'Вторую половину вечера тоже потом подготовишь?':reaction==='help'?'Запасные батарейки есть? Давай поменяем':'Посадим его на скамейку запасных. Пусть подумает'}).click();
  await until(page,'c3.team');await page.getByRole('button',{name:'Пельмень и партнёры'}).click();await until(page,'c3.role');await page.getByRole('button',{name:'Давай распределим работу'}).click();await until(page,'c3.kitchen');
}
async function dish(page:Page,recipe:Recipe){const info=recipes[recipe];await page.locator('.kitchen-orders').getByRole('button',{name:new RegExp('^'+info.title)}).click();await page.getByRole('button',{name:ingredientNames[info.ingredients[0]],exact:true}).click();await page.getByRole('button',{name:'Передать Владу',exact:true}).click();await page.clock.runFor(2500);await expect(page.getByRole('button',{name:'Подать',exact:true})).toBeEnabled();await page.getByRole('button',{name:'Подать',exact:true}).click();}
async function train(page:Page){await dish(page,'toast');await dish(page,'salad');await expect(page.getByRole('heading',{name:'Пробные заказы готовы'})).toBeVisible();}
async function finish(page:Page){await until(page,'c3.support');await page.getByRole('button',{name:'Я хочу реванш'}).click();await until(page,'c3.end');for(let i=0;i<6;i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect(page.getByRole('heading',{name:'Ужин по обстоятельствам'})).toBeVisible();}
test('chapter three preserves memories, repairs controllers, cooks nine dishes, shows result and replays independently',async({page})=>{
  const base=await seed(page),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.url());});
  await open(page);await page.clock.install();await until(page,'c3.pad.press');await expect(page.locator('.scene-cat')).toHaveCount(0);
  await page.screenshot({path:'outputs/CHAPTER_03_HOME_PREVIEW.png',fullPage:true,animations:'disabled'});
  await toKitchen(page);await expect(page.locator('.kitchen-team')).toHaveText('Пельмень и партнёры');await train(page);await page.getByRole('button',{name:'Готовить без таймера',exact:true}).click();
  await page.screenshot({path:'outputs/CHAPTER_03_KITCHEN_PREVIEW.png',fullPage:true,animations:'disabled'});
  for(const list of [['toast','salad','sandwich'],['salad','sandwich','toast'],['sandwich','toast','salad']] as Recipe[][]){for(const recipe of list)await dish(page,recipe);if(await page.getByRole('button',{name:'Следующий раунд',exact:true}).count())await page.getByRole('button',{name:'Следующий раунд',exact:true}).click();}
  await expect(page.getByText('Подано 9 из 9.')).toBeVisible();await page.getByRole('button',{name:'Закончить игру',exact:false}).click();await finish(page);
  await expect(page.getByText('Стол на всех · девять подач вместе')).toBeVisible();await expect(page.locator('.card-team')).toHaveText('Пельмень и партнёры');
  const main=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(main.campaign.records[1]).toEqual(base.campaign.records[1]);expect(main.campaign.records[2]).toEqual(base.campaign.records[2]);expect(main.campaign.completed).toEqual([1,2,3]);expect(main.campaign.records[3].story.controllerReaction).toBe('absurd');
  await page.screenshot({path:'outputs/CHAPTER_03_RESULT_PREVIEW.png',fullPage:true,animations:'disabled'});
  await expectSimpleResult(page);
  await page.getByRole('button',{name:'Посмотреть другой вариант',exact:false}).click();await toKitchen(page,'tease');await page.getByRole('button',{name:'Продолжить историю без кухни'}).click();await finish(page);expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,key)).toEqual(main.campaign);expect(errors).toEqual([]);
});
test('timed kitchen pauses with menu and page hidden, resumes deliberately, then can switch to calm; reload restarts only the game',async({page})=>{
  await page.setViewportSize({width:320,height:568});await seed(page);await open(page);await page.clock.install();await toKitchen(page,'help');await train(page);await page.getByRole('button',{name:'Начать · 3 × 25 секунд'}).click();
  await page.getByRole('button',{name:'Хлеб',exact:true}).click();await page.getByRole('button',{name:'Передать Владу',exact:true}).click();await page.clock.runFor(500);
  await page.getByRole('button',{name:'Открыть меню'}).click();await page.getByRole('button',{name:'Вернуться к истории'}).click();await expect(page.getByRole('heading',{name:'Маленькая пауза'})).toBeVisible();const text=await page.locator('.kitchen-status').innerText();
  await page.clock.runFor(40000);expect(await page.locator('.kitchen-status').innerText()).toBe(text);await page.getByRole('button',{name:'Продолжить готовить'}).click();await page.clock.runFor(2000);await expect(page.getByRole('button',{name:'Подать',exact:true})).toBeEnabled();
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});await page.clock.runFor(40000);await expect(page.getByRole('heading',{name:'Маленькая пауза'})).toBeVisible();await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:false});document.dispatchEvent(new Event('visibilitychange'));});
  await page.getByRole('button',{name:'Дальше без таймера'}).click();await page.getByRole('button',{name:'Продолжить готовить'}).click();await expect(page.locator('.kitchen-status')).toContainText('Без таймера');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.reload();await expect(page.locator('.kitchen-round')).toHaveText('Проба');
  const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.campaign.active.story).toMatchObject({controllerReaction:'help',teamName:'dumpling',kitchenStyle:'planner'});
  await page.getByRole('button',{name:'Продолжить историю без кухни'}).click();await finish(page);await expect(page.getByText('Печенье без обучения')).toBeVisible();
});
test('chapter three direct link does not bypass its author code',async({page})=>{await seed(page);await page.goto('./#/play/3');await expect(page.getByRole('heading',{name:'Эта встреча ждёт на карте глав'})).toBeVisible();expect(await page.locator('[data-node]').count()).toBe(0);});
