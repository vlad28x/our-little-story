import { expect,it } from 'vitest';
import { chapter5 } from '../src/content/chapters/ch05';
import { resolveScene } from '../src/engine/step';
import { validateContent } from '../src/engine/validateContent';
import { validateSave as parseSave } from '../src/persistence/validateSave';
import { reduceSave } from '../src/state/reducer';
import type { SaveV1 } from '../src/state/types';
import { cloudRaw } from '../src/telegram/cloud';
import { completeTwo,defaultThird,finishThree } from './chapter3Helpers';
import { defaultFourth,finishFour } from './chapter4Helpers';
import { command5,finishFive,startFive } from './chapter5Helpers';
import { finishPhotoSix } from './photo6Helpers';

const initial=finishFour();
it('contains exactly two scene menus and one common ending, with no status or real invitation inside the graph',()=>{
 expect(validateContent(chapter5)).toEqual([]);
 expect(Object.values(chapter5.nodes).filter(n=>n.kind==='choice').map(n=>n.id)).toEqual(['c5.drink.first','c5.drink.recommend']);
 expect(Object.values(chapter5.nodes).filter(n=>n.kind==='end').map(n=>n.cardId)).toEqual(['c5.story']);
 const text=Object.values(chapter5.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]).join(' ');
 expect(text).not.toMatch(/не зря тренировались пять встреч|Хорошо тогда задержались у двери|мой любимый незапланированный перерыв|по-настоящему|свидание|победитель/);
 expect(chapter5.nodes['c5.exit'].kind).toBe('dialogue');
 const exit=chapter5.nodes['c5.exit'];
 if(exit.kind==='dialogue'){
  for(const lineIndex of [0,1,2,3,4,5]){
   const run={...startFive(initial).campaign.active!,nodeId:exit.id,lineIndex};
   expect(resolveScene(exit.scene,run.story,run).background).toBe(lineIndex<2?'bg.cafe.sunset':'bg.cafe.exterior');
  }
  expect(validateContent({...chapter5,nodes:{...chapter5.nodes,[exit.id]:{...exit,scene:{...exit.scene,variants:[{when:[],fromLine:60,background:'bg.cafe.exterior',character:'vlad.elegant.smile'}]}}}})).toContain('Invalid scene line c5.exit');
 }
});
it('all nine taste/recommendation combinations retain every cursor, comparison and exact callback through JSON/cloud',()=>{
 const endings=new Set();let count=0;
 for(const firstTaste of ['vanilla','sweet','compare'] as const)for(const recommendation of ['vanilla','fresh','both'] as const){
  let s=startFive(initial);const seen=new Set();
  while(s.campaign.active){
   const r=s.campaign.active;seen.add(r.nodeId);expect(parseSave(cloudRaw(s))).toEqual(s);
   s=reduceSave(s,{type:'command',target:'campaign',command:command5(r,{memory:count%2?'skipped':'viewed',ending:'friendly',firstTaste,recommendation})});
  }
  expect(seen.has(`c5.drink.first.${firstTaste}`)).toBe(true);expect(seen.has(`c5.drink.reason.${firstTaste}.${recommendation}`)).toBe(true);
  expect(seen.has(`c5.drink.result.${recommendation}`)).toBe(true);expect(seen.has(`c5.drink.echo.${recommendation}`)).toBe(true);expect(seen.has('c5.exit')).toBe(true);
  expect(s.campaign.records[5]?.story).toMatchObject({c5Edition:3,c5FirstTaste:firstTaste,c5Recommendation:recommendation});
  expect(s.campaign.records[5]?.story.ending).toBeUndefined();expect(s.campaign.records[5]?.story.bond).toBeUndefined();
  for(const id of [1,2,3,4] as const)expect(s.campaign.records[id]).toEqual(initial.campaign.records[id]);
  expect(parseSave(JSON.stringify(s))).toEqual(s);endings.add(s.lastResult?.cardId);count++;
 }
 expect(count).toBe(9);expect([...endings]).toEqual(['c5.story']);
},30000);
it('rejects early answers, impossible enums, mismatched reasons and callbacks, forged clocks and V13 relabels',()=>{
 const check=(s:SaveV1,f:(bad:SaveV1)=>void)=>{const bad=structuredClone(s);f(bad);expect(()=>parseSave(JSON.stringify(bad))).toThrow();};
 const s=startFive(initial);
 check(s,b=>{b.campaign.active!.story.c5FirstTaste='vanilla';});
 check(s,b=>{b.campaign.active!.story.c5Recommendation='both';});
 check(s,b=>{b.campaign.active!.turn++;});
 check(s,b=>{Object.assign(b.campaign.active!.story,{c5FirstTaste:'invented'});});
 const finish=finishFive(initial,{memory:'skipped',ending:'friendly',firstTaste:'sweet',recommendation:'fresh'});
 expect(()=>parseSave(JSON.stringify({...finish,contentVersion:13}))).toThrow();
 check(finish,b=>{delete b.campaign.records[5]!.story.c5Recommendation;});
 check(finish,b=>{b.campaign.records[5]!.story.c5Edition=2;});
 let at=startFive(initial);while(at.campaign.active!.nodeId!=='c5.drink.reason.sweet.fresh')at=reduceSave(at,{type:'command',target:'campaign',command:command5(at.campaign.active!,{memory:'viewed',ending:'friendly',firstTaste:'sweet',recommendation:'fresh'})});
 check(at,b=>{b.campaign.active!.nodeId='c5.drink.reason.vanilla.fresh';});
 check(at,b=>{b.campaign.active!.story.c5Edition=2;});
 check(at,b=>{b.campaign.active!.nodeId='c5.drink.echo.vanilla';});
});
it('uses the saved team, work style, sky and goodbye independently from the drink recommendation',()=>{
 const team=['dumpling','calm','accident'] as const,styles=['planner','improv'] as const;
 for(const kitchenStyle of styles)for(const teamName of team)for(const shape of ['cat','controllers','teapot'] as const){
  const third=finishThree(completeTwo(),{...defaultThird,style:kitchenStyle,team:teamName,result:{kind:'kitchen',outcome:'skipped',served:0,mode:'calm'}});
  const fourth=finishFour(third,{...defaultFourth,result:{kind:'constellation',outcome:shape,usedPreset:shape==='teapot'}});
  let s=startFive(fourth);const seen=new Set();
  while(s.campaign.active){const r=s.campaign.active;seen.add(r.nodeId);s=reduceSave(s,{type:'command',target:'campaign',command:command5(r)});}
  expect(seen.has(`c5.drink.work.${kitchenStyle}`)).toBe(true);expect(seen.has(`c5.drink.team.${teamName}`)).toBe(true);expect(seen.has(`c5.drink.sky.${shape}`)).toBe(true);
  expect(parseSave(JSON.stringify(s))).toEqual(s);
 }
 const text=(id:string)=>{const n=chapter5.nodes[id as keyof typeof chapter5.nodes];return n.kind==='dialogue'?n.lines.map(l=>l.text).join(' '):'';};
 expect(text('c5.drink.team.dumpling')).toContain('Пельмень и партнёры');expect(text('c5.drink.team.calm')).toContain('Два спокойных человека');expect(text('c5.drink.team.accident')).toContain('Отдел случайных побед');
 expect(text('c5.drink.sky.cat')).toContain('силуэт кота из вашего созвездия');
 expect(text('c5.drink.sky.controllers')).toContain('геймпад с вашего неба на набережной');
 expect(text('c5.drink.sky.teapot')).toContain('чайник из вашего созвездия');
 const tasting=Object.values(chapter5.nodes).filter(n=>n.id.startsWith('c5.drink.')&&!n.id.startsWith('c5.drink.sky.')&&n.kind==='dialogue').flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]).join(' ');
 expect(tasting).not.toMatch(/созвезд|вчерашн.*неб|маленький геймпад|кота с узнаваемыми ушами/);
 expect(text('c5.letter')).toContain('Внутри рядом с рисунком созвездия лежат два гладких деревянных жетона.');
 for(const goodbye of ['her','accept','none'] as const){const prior=finishFour(undefined,{...defaultFourth,goodbye}),s=finishFive(prior);expect(s.campaign.records[5]?.story.c4Goodbye).toBe(goodbye);}
});
it('new drink decisions pass unchanged into the photo-six prefix',()=>{
 let s=finishFive(initial,{memory:'skipped',ending:'friendly',firstTaste:'sweet',recommendation:'both'});
 const prefix=s.campaign.records[5]!.story;
 s=finishPhotoSix(s);
 expect(s.campaign.records[6]?.story).toMatchObject(prefix);expect(s.privateNotes).toEqual({});expect(parseSave(cloudRaw(s))).toEqual(s);
},60000);
