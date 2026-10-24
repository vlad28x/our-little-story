import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {chapter5} from '../src/content/chapters/ch05';
import {getChapter} from '../src/content/chapters';
import {validateContent} from '../src/engine/validateContent';
import {parseSave} from '../src/persistence/validateSave';
import {cloudRaw} from '../src/telegram/cloud';
import {reduceSave} from '../src/state/reducer';
import {cardFromStory,cardMeta} from '../src/content/cards';
import {finishFour,defaultFourth} from './chapter4Helpers';
import {startFive,finishFive,command5} from './chapter5Helpers';
import {finishFive as edition2Five} from './edition2FifthHelpers';
import {finishR3} from './r3Helpers';
import {completeTwo,finishThree,defaultThird} from './chapter3Helpers';
import type {SaveV1} from '../src/state/types';

const initial=finishFour();
it('contains exactly two scene menus and one common ending, with no status or real invitation inside the graph',()=>{
 expect(validateContent(chapter5)).toEqual([]);
 expect(Object.values(chapter5.nodes).filter(n=>n.kind==='choice').map(n=>n.id)).toEqual(['c5.drink.first','c5.drink.recommend']);
 expect(Object.values(chapter5.nodes).filter(n=>n.kind==='end').map(n=>n.cardId)).toEqual(['c5.story']);
 const text=Object.values(chapter5.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]).join(' ');
 expect(text).not.toMatch(/не зря тренировались пять встреч|Хорошо тогда задержались у двери|мой любимый незапланированный перерыв|по-настоящему|свидание|победитель/);
 expect(chapter5.nodes['c5.exit'].kind).toBe('dialogue');
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
it('reads and continues all fourteen frozen edition2 snapshots without assigning a taste or changing their postcard',()=>{
 const states=JSON.parse(readFileSync('tests/fixtures/season1-v13/states.json','utf8')) as SaveV1[];
 expect(states).toHaveLength(14);
 for(const old of states){
  let s=parseSave(JSON.stringify(old));expect(s).toEqual({...old,contentVersion:14});
  const trial=!!s.trial;
  while(trial?s.trial:s.campaign.active){const r=(trial?s.trial?.run:s.campaign.active)!;expect(getChapter(5,r.story)?.firstSeasonEdition).toBe(2);s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:command5(r)});expect(parseSave(JSON.stringify(s))).toEqual(s);}
  expect(s.campaign.records[5]?.story.c5FirstTaste).toBeUndefined();expect(s.campaign.records[5]?.story.c5Recommendation).toBeUndefined();
  const record=s.campaign.records[5];if(record){const card=cardFromStory(record.story,5,record.results);expect(card.c5Edition).toBeUndefined();expect(cardMeta(card).quote).toBe('мой любимый незапланированный перерыв.');}
 }
 const golden=JSON.parse(readFileSync('tests/fixtures/season1-v13/hash.json','utf8')) as {file:string;hash:string};
 expect(createHash('sha256').update(readFileSync(golden.file)).digest('hex')).toBe(golden.hash);
},30000);
it('new trials and explicit replay keep the old canonical taste/history and real answer independent',()=>{
 const old=reduceSave(edition2Five(),{type:'continuation',value:'movie'});
 const first=finishFive(initial,{memory:'skipped',ending:'friendly',firstTaste:'sweet',recommendation:'fresh'});
 const main=reduceSave(first,{type:'continuation',value:'walk'});
 for(const base of [old,main]){
  const copy=structuredClone(base.campaign),trial=finishFive(base,{memory:'viewed',ending:'friendly',firstTaste:'vanilla',recommendation:'both'},true,true);
  expect(trial.campaign).toEqual(copy);expect(trial.continuation).toBe(base.continuation);expect(parseSave(cloudRaw(trial))).toEqual(trial);
  const canonicalCard=cardFromStory(trial.campaign.records[5]!.story,5,trial.campaign.records[5]!.results);
  expect(cardMeta(canonicalCard).quote).toBe(base===old?'мой любимый незапланированный перерыв.':'чай с характером. компания тоже.');
 }
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
 for(const shape of ['cat','controllers','teapot'] as const)expect(text(`c5.drink.sky.${shape}`)).toBe('Ты кладёшь подписанную рекомендацию рядом с чашками.');
 const tasting=Object.values(chapter5.nodes).filter(n=>n.id.startsWith('c5.drink.')&&n.kind==='dialogue').flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]).join(' ');
 expect(tasting).not.toMatch(/созвезд|вчерашн.*неб|маленький геймпад|кота с узнаваемыми ушами/);
 expect(text('c5.letter')).toContain('Внутри ваш рисунок созвездия и два жетона с желаниями.');
 for(const goodbye of ['her','accept','none'] as const){const prior=finishFour(undefined,{...defaultFourth,goodbye}),s=finishFive(prior);expect(s.campaign.records[5]?.story.c4Goodbye).toBe(goodbye);}
});
it('new drink decisions pass into unchanged6–10 and coexist with saved personal text',()=>{
 let s=finishFive(initial,{memory:'skipped',ending:'friendly',firstTaste:'sweet',recommendation:'both'});
 const prefix=s.campaign.records[5]!.story;
 for(const chapter of [6,7,8,9,10] as const)s=finishR3(chapter,{note:'Личная мысль '+chapter,check:true},s);
 expect(s.campaign.records[10]?.story).toMatchObject(prefix);expect(s.privateNotes[10]?.campaign?.text).toBe('Личная мысль 10');expect(parseSave(cloudRaw(s))).toEqual(s);
},60000);
