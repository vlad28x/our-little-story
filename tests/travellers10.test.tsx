import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect,it,vi } from 'vitest';
import { cardFromStory,cardMeta } from '../src/content/cards';
import { chapter10 } from '../src/content/chapters/ch10';
import { meeting10Options,travellerResources,travellerView } from '../src/content/travellers';
import { matches,resolveLine,resolveScene,startRun,step } from '../src/engine/step';
import { validateContent } from '../src/engine/validateContent';
import { replayTravellers } from '../src/persistence/travellers';
import { validateSave as parseSave } from '../src/persistence/validateSave';
import { initialState } from '../src/state/initialState';
import { canStart,reduceSave } from '../src/state/reducer';
import type { CloudAPI } from '../src/telegram/bridge';
import { CloudConflict,cloudRaw,TelegramCloud } from '../src/telegram/cloud';
import { SelectedPrint,TravellersBoard,TravellersScene } from '../src/ui/TravellersArt';
import { TravellersInvitation } from '../src/ui/TravellersInvitation';
import { finishCourtyard } from './courtyard9Helpers';
import { finishSupper } from './supperHelpers';
import { finishTravellers,startTravellers,travellersAt,travellersCommand,type TravellersPath } from './travellers10Helpers';
let context={save:initialState(),send:vi.fn()};
vi.mock('../src/app/GameProvider',()=>({useGame:()=>context}));
const routes=[['bridge','tunnel','upper',1,'river','empty'],['bridge','contour','upper',0,'river','charged'],['ford','tunnel','marsh',1,'marsh','empty'],['ford','tunnel','upper',0,'carried','empty'],['ford','contour','marsh',0,'marsh','charged'],['ford','contour','upper',0,'carried','empty']] as const;

it('validates the complete graph and preserves authored dialogue with only approved replacements',()=>{
 expect(validateContent(chapter10)).toEqual([]);
 const source=fs.readFileSync('outputs/CHAPTER_10_SCRIPT.md','utf8');
 for(const n of Object.values(chapter10.nodes))if(n.kind==='dialogue')for(const l of n.lines)
  for(const text of [l.text,...(l.variants??[]).map(v=>v.text)])expect(source.includes(text),text).toBe(true);
});

it('finishes six roads, all cafe gestures and all three home gestures times two endings',()=>{
 const base=finishCourtyard();
 for(const [river,quarry,arrival,suns,bridge,lantern] of routes)for(const continuation of ['cafe','home'] as const){
  const variants:Partial<TravellersPath>[]=continuation==='cafe'?(['kiss','hug','words'] as const).map(goodbye=>({goodbye})):['kiss','hug','near'].flatMap(tender=>['leave','sleep'].map(finale=>({tender,finale}))) as Partial<TravellersPath>[];
  for(const variant of variants){
   const done=finishTravellers({river,quarry,arrival,continuation,...variant},base),story=done.campaign.records[10]!.story;
   expect(travellerResources(story)).toMatchObject({suns,bridge,lantern,position:'house'});
   expect(story.c10Finale).toBe(continuation==='cafe'?'cafe':variant.finale==='leave'?'lateLeave':'morning');
   expect(story.c10LipKiss).toBe(continuation==='cafe'?variant.goodbye==='kiss'?'yes':undefined:variant.tender==='kiss'?'yes':undefined);
   expect(done.collection.cards.filter(c=>c.chapter===10)).toHaveLength(1);
   expect(cardMeta(cardFromStory(story,10)).quote).toBeTruthy();
   expect(replayTravellers(story)).toBeTruthy();
  }
 }
}, 20_000);

it('round-trips every cursor, rejects stale taps, forged resources, wrong phases and an impossible marsh',()=>{
 for(const path of [{river:'ford',quarry:'contour',arrival:'upper',continuation:'home',tender:'hug',finale:'sleep'},{river:'help',quarry:'help',arrival:'help'},{river:'bridge',arrival:'upper',goodbye:'kiss'},{continuation:'home',tender:'kiss',afterFirstKiss:'closer',finale:'sleep'},{continuation:'home',tender:'kiss',afterFirstKiss:'shoulder',finale:'leave'}] as Partial<TravellersPath>[]){
  let s=startTravellers();
  while(s.campaign.active){
   expect(parseSave(JSON.stringify(s))).toEqual(s);
   const r=s.campaign.active,command=travellersCommand(r,path),next=reduceSave(s,{type:'command',target:'campaign',command});
   expect(next).not.toBe(s);expect(reduceSave(next,{type:'command',target:'campaign',command})).toBe(next);
   expect(travellerView(r).suns).toBeGreaterThanOrEqual(0);s=next;
  }
  expect(parseSave(cloudRaw(s))).toEqual(s);
 }
 const at=travellersAt('c10.travellers.catChoice',{river:'bridge',arrival:'upper'}),r=at.campaign.active!;
 expect(step(chapter10,r,{kind:'choose',choiceId:'marsh',expectedTurn:r.turn}).kind).toBe('rejected');
 for(const extra of [{c10Arrival:'marsh'},{c10River:'ford'},{c10Finale:'morning'},{c10LipKiss:'yes'}]){const bad=structuredClone(at);Object.assign(bad.campaign.active!.story,extra);expect(()=>parseSave(JSON.stringify(bad))).toThrow();}
 const bad=structuredClone(at);bad.campaign.active!.turn++;expect(()=>parseSave(JSON.stringify(bad))).toThrow();
},120000);

it('keeps the evening stay finale calm with a warm morning scene and no explicit or shirt lines',()=>{
 const path={continuation:'home',tender:'near',finale:'sleep'} as const;
 let save=travellersAt('c10.travellers.sleep',path);
 const heard:string[]=[];
 const backgrounds:string[]=[];
 while(save.campaign.active){
  const run=save.campaign.active,node=chapter10.nodes[run.nodeId];
  if(node.kind!=='dialogue')throw Error('Missing sleep finale dialogue');
  expect(run.story.c10Finale).toBeUndefined();
  expect(save.collection.cards.some(card=>card.chapter===10)).toBe(false);
  expect(parseSave(JSON.stringify(save))).toEqual(save);
  const bg=resolveScene(node.scene,run.story,run).background;
  backgrounds.push(bg);
  expect(bg).toBe(run.lineIndex>=9?'bg.travellers10.morning':'bg.travellers10.home');
  heard.push(resolveLine(node.lines[run.lineIndex],run.story).text);
  save=reduceSave(save,{type:'command',target:'campaign',command:travellersCommand(run,path)});
 }
 expect(backgrounds).toContain('bg.travellers10.morning');
 expect(heard.join(' ')).toContain('доброе утро');
 expect(heard.join(' ')).not.toMatch(/футболк|до середины бедра|открытка из галереи|под общим одеялом Влад обнимает|сжимает твою ладонь/);
 expect(save.campaign.records[10]?.story.c10Finale).toBe('morning');
 expect(chapter10.nodes['c10.travellers.private' as keyof typeof chapter10.nodes]).toBeUndefined();
});

it('keeps all photograph facts, hoodie and four previous kiss combinations on all rain paths',()=>{
 for(const prior8 of [false,true])for(const prior9 of ['words','kiss'] as const)for(const rain of ['canopy','arch','leave'] as const){
  const base=finishCourtyard(finishSupper(undefined,{kiss:prior8,hoodie:'borrow'}),{rain,goodbye:prior9,hoodie:'keep'});
  for(const continuation of ['cafe','home'] as const){
   let r=startRun(chapter10,base.campaign.records[9]!.story,'test'),complete=false;const ids:string[]=[],texts:string[]=[];
   while(!complete){const n=chapter10.nodes[r.nodeId];ids.push(r.nodeId);if(n.kind==='dialogue')texts.push(resolveLine(n.lines[r.lineIndex],r.story).text);const next=step(chapter10,r,travellersCommand(r,{continuation,goodbye:'kiss',tender:'kiss'}));if(next.kind==='rejected')throw Error(next.reason);r=next.run;complete=next.kind==='complete';}
   expect(ids.some(id=>id.endsWith('KissAgain'))).toBe(prior8||prior9==='kiss');
   expect(ids.some(id=>id.endsWith('KissFirst'))).toBe(!prior8&&prior9!=='kiss');
   expect(texts.join(' ')).not.toContain('достаёшь сложенное худи');
   expect(texts.join(' ')).not.toMatch(/окно поезда|выиграла|подушку в коробку|показываешь ему нужный поворот/);
  }
 }
 const returned=finishCourtyard(finishSupper(undefined,{hoodie:'borrow'}),{hoodie:'return'}).campaign.records[9]!.story;
 const run=startRun(chapter10,returned,'returned'),entry=chapter10.nodes[run.nodeId];
 if(entry.kind==='dialogue')expect(entry.lines.filter(l=>matches(returned,l.when)).map(l=>l.text).join(' ')).not.toContain('достаёшь сложенное худи');
});

it('renders distinct print combinations and actual dish gift details',()=>{
 const base=finishCourtyard().campaign.records[9]!.story,prints=new Set<string>();
 for(const c6PhotoPlace of ['upper','water'] as const)for(const c6PhotoSubject of ['vlad','her','place'] as const)prints.add(renderToStaticMarkup(<SelectedPrint source={6} story={{...base,c6PhotoPlace,c6PhotoSubject}}/>));expect(prints.size).toBe(6);
 for(const [source,key,values] of [[7,'c7GalleryFrame',['vlad','her','both']],[8,'c8Frame',['foodHer','foodVlad','boardHer','boardVlad']],[9,'c9Frame',['vlad','seats','yard']]] as const){const variants=values.map(v=>renderToStaticMarkup(<SelectedPrint source={source} story={{...base,[key]:v}}/>));expect(new Set(variants).size).toBe(values.length);}
 for(const c7GalleryGift of ['none','chip','blue'] as const){const html=renderToStaticMarkup(<SelectedPrint source={8} story={{...base,c8Frame:'foodHer',c7GalleryGift}}/>);expect(html).not.toContain('gallery7/');}
 expect(renderToStaticMarkup(<TravellersBoard state={travellerResources({c10River:'ford',c10Quarry:'contour',c10Arrival:'upper'})}/>)).toContain('Солнц: 0');
 const at=travellersAt('c10.travellers.sleep',{continuation:'home',finale:'sleep'}).campaign.active!;
 const evening={...at,lineIndex:8,story:{...at.story,c7GalleryGift:'chip' as const}};
 expect(renderToStaticMarkup(<TravellersScene run={evening}/>)).toContain('gallery7/season2-gouache/chip.webp');
 expect(renderToStaticMarkup(<TravellersScene run={{...evening,lineIndex:9}}/>)).toBe('');
 const home={...at,nodeId:'c10.travellers.home' as const,story:evening.story};
 const homeArt=renderToStaticMarkup(<TravellersScene run={home}/>);expect(homeArt).toContain('preserveAspectRatio="xMidYMid slice"');expect(homeArt).toContain('gallery7/season2-gouache/chip.webp');
 for(const nodeId of ['c10.travellers.homeKissFirstChoice','c10.travellers.homeKissFirstNeck','c10.travellers.homeKissFirstSoft'] as const)
  expect(renderToStaticMarkup(<TravellersScene run={{...home,nodeId}}/>)).toBe(homeArt);

});

it('keeps invitations independent, trial isolated, rewrites scoped and all five choices visible',()=>{
 let s=finishTravellers();s.continuation='movie';
 for(const o of meeting10Options){s=reduceSave(s,{type:'continuation10',value:o.value});expect(s.continuation).toBe('movie');expect(parseSave(JSON.stringify(s))).toEqual(s);}
 context={save:s,send:vi.fn()};const html=renderToStaticMarkup(<TravellersInvitation/>);for(const o of meeting10Options){expect(html).toContain(o.label);if(o.image)expect(html).toContain(`travellers10/future-${o.value}.webp`);}expect(html).not.toContain('future-print-photo');expect(html).not.toContain('Копировать сообщение');expect(html).not.toContain('<textarea');
 context={save:{...s,continuation10:'movie'},send:vi.fn()};const chosenHtml=renderToStaticMarkup(<TravellersInvitation/>);expect(chosenHtml).toContain('future-print-photo');expect(chosenHtml).toContain('travellers10/future-movie.webp');
 const canonical=structuredClone(s.campaign),trial=startTravellers(s,true);expect(reduceSave(trial,{type:'continuation10',value:'cook'})).toBe(trial);
 const result=finishTravellers({continuation:'home',tender:'near',finale:'sleep'},s,true);expect(result.campaign).toEqual(canonical);expect(result.continuation10).toBe('decline');expect(result.lastResult?.episodeRecord?.story.c10Finale).toBe('morning');expect(result.collection.cards.filter(c=>c.chapter===10)).toHaveLength(1);
 const rewrite=reduceSave(s,{type:'rewrite',chapter:10,attemptId:'new-canon'});expect(rewrite.continuation10).toBeNull();expect(rewrite.continuation).toBe('movie');
 expect(reduceSave(initialState(),{type:'continuation10',value:'cook'})).toEqual(initialState());
 const missing=finishCourtyard();missing.unlocked.push(10);delete missing.campaign.records[9]!.story.c9Frame;expect(canStart(missing,10)).toBe(false);
});

it('restores both answers in a fresh mock Telegram client and detects a competing copy',async()=>{
 const data=new Map<string,string>();const api:CloudAPI={getItem:(k,done)=>{done(null,data.get(k)??'');},getItems:(ks,done)=>{done(null,Object.fromEntries(ks.map(k=>[k,data.get(k)??''])));},setItem:(k,v,done)=>{data.set(k,v);done(null,true);}};
 const save=finishTravellers();save.continuation='cafe';save.continuation10='cook';const cloud=new TelegramCloud(api),head=await cloud.write(save,'');
 expect((await new TelegramCloud(api).read()).save).toEqual(save);
 await cloud.write({...save,continuation10:'decline'},head);
 await expect(cloud.write({...save,continuation10:'movie'},head)).rejects.toBeInstanceOf(CloudConflict);
});
