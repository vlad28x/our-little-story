import fs from 'node:fs';
import {expect,it} from 'vitest';
import {playableChapters} from '../src/content/chapters';
import {CONTENT_VERSION} from '../src/content/version';
import {matches,resolveLine,resolveScene} from '../src/engine/step';
import {validateContent} from '../src/engine/validateContent';
import type {ChapterId,NodeId,StoryState} from '../src/engine/types';
import {galleryView} from '../src/ui/GalleryArt';
import {CourtyardScene} from '../src/ui/CourtyardArt';
import {TravellersScene} from '../src/ui/TravellersArt';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {courtyardAt,finishCourtyard} from './courtyard9Helpers';
import {finishGallery} from './gallery7Helpers';
import {finishPhotoSix} from './photo6Helpers';
import {finishSupper} from './supperHelpers';
import {startTravellers,travellersAt,travellersCommand} from './travellers10Helpers';
import {reduceSave} from '../src/state/reducer';
import {validateSave} from '../src/persistence/validateSave';
const source=fs.readFileSync('outputs/SEASON_01_02_POLISH_SPEC_2026_11_19.md','utf8');

it.each([1,2,3,4,5,6,7,8,9,10] as ChapterId[])('chapter %s ships the authored dialogue, menu labels and transitions',id=>{
 const chapter=playableChapters[id]!;
 expect(chapter.contentVersion).toBe(CONTENT_VERSION);
 expect(validateContent(chapter)).toEqual([]);
 const authored=source.split(new RegExp('# ГЛАВА '+id+' —'))[1].split(/^# ГЛАВА \d+ —|^## 4\. Чек-лист/m)[0];
 let checked=0;
 for(const section of authored.split(/^### /m)){
  const [heading,...rows]=section.trim().split(/\r?\n/);
  const nodeId=heading.match(/^\x60(c\d+\.[^\x60<>]+)\x60/)?.[1] as NodeId|undefined;
  if(!nodeId)continue;
  const node=chapter.nodes[nodeId];
  expect(node,nodeId).toBeDefined();
  if(node.kind==='dialogue'){
   const shipped=node.lines.flatMap(line=>[line.text,...(line.variants??[]).map(variant=>variant.text)]);
   for(const row of rows){
    const dialogue=row.match(/^\d+\. \*\*\w+(?::\*\*|\*\*(?: \(\x60[^\x60]+\x60\)| \*\([^)]+\)\*)?:)\s*(.+)$/);
    const variant=row.match(/^\s*- \*Вариант .*?:\*\s*(.+)$/);
    const text=(dialogue??variant)?.[1].replace(/\s+\(\x60\w+ = .*\)\.?$/,'').replace(/\*\*/g,'');
    if(!text)continue;
    expect(shipped.some(line=>line===text||nodeId==='c4.end'&&line.includes(text)),nodeId+' '+text).toBe(true);
    checked++;
   }
   const next=rows.find(row=>row.startsWith('→ '))?.match(/^→ \x60([^\x60]+)\x60/)?.[1];
   expect(node.next).toBe(next);
   for(const text of shipped)expect(text).not.toMatch(/\x60when:|\(\s*\x60\w+ =|\*\*/);
  }
  if(node.kind==='choice'){
   const prompt=rows.find(row=>row.startsWith('Prompt: '))?.match(/^Prompt: \x60([^\x60]+)\x60$/)?.[1];
   if(prompt)expect(node.prompt).toBe(prompt);
   const choices=rows.flatMap(row=>{
    const choice=row.match(/^- \x60([^\x60]+)\x60.*? — «(.*)».*? → \x60([^\x60]+)\x60$/);
    return choice?[{id:choice[1],text:choice[2],next:choice[3]}]:[];
   });
   expect(node.choices.map(({id,text,next})=>({id,text,next}))).toEqual(choices);
  }
 }
 expect(checked).toBeGreaterThan(50);
});

it('finishes the hoodie story in nine and offers three home gestures in ten',()=>{
 const nine=playableChapters[9]!,ten=playableChapters[10]!,route=nine.nodes['c9.courtyard.hoodieRainRoute'];expect(route).toMatchObject({kind:'route',cases:[],fallback:'c9.courtyard.warmth'});
 expect(Object.keys(nine.nodes)).not.toContain('c9.courtyard.hoodieKeep');
 const home=ten.nodes['c10.travellers.homeChoice'];if(home.kind!=='choice')throw Error('No home menu');expect(home.choices.map(c=>c.id)).toEqual(['kiss','hug','near']);
 const entry=ten.nodes['c10.travellers.entry'];if(entry.kind!=='dialogue')throw Error('No entry');expect(JSON.stringify(entry.lines)).not.toContain('c9Hoodie');
});

it('shows exactly one quiet response for each non-follow kitchen route and keeps its conditions',()=>{
 const chapter=playableChapters[8]!,menu=chapter.nodes['c8.supper.initiative'],quiet=chapter.nodes['c8.supper.quiet'];if(menu.kind!=='choice'||quiet.kind!=='dialogue')throw Error('Missing kitchen scenes');
 for(const c8Step of ['lead','play','sit'] as const){const story:StoryState={c8Step};expect(menu.choices.filter(c=>matches(story,c.when)).map(c=>c.id)).toEqual(['kiss',`${c8Step}Quiet`]);expect(quiet.lines.filter(l=>matches(story,l.when))).toHaveLength(2);}
});

it('completes both seasons with the quiet choices and no fictional kiss or gift',()=>{
 const six=finishPhotoSix(undefined,{gesture:'none'});
 const gallery=finishGallery(six,{gift:'none',farewell:'words'});
 const supper=finishSupper(gallery,{step:'sit',kiss:false,hoodie:'pass'});
 const nine=finishCourtyard(supper,{rain:'leave',goodbye:'words'});
 const path={continuation:'home',tender:'near',finale:'sleep'} as const;
 let save=startTravellers(nine);
 const chapter=playableChapters[10]!;
 for(let i=0;save.campaign.active&&i<250;i++){
  const run=save.campaign.active,node=chapter.nodes[run.nodeId];
  if(node.kind==='dialogue'){
   const line=resolveLine(node.lines[run.lineIndex],run.story);
   expect(line.text).not.toMatch(/открытк[аиу] из галереи|целует|его губы|твои губы|под общим одеялом Влад обнимает/);
  }
  save=reduceSave(save,{type:'command',target:'campaign',command:travellersCommand(run,path)});
 }
 expect(save.campaign.completed).toEqual([1,2,3,4,5,6,7,8,9,10]);
 const story=save.campaign.records[10]!.story;
 expect(story).toMatchObject({eveningMood:'quiet',bench:'space',c4Goodbye:'none',c6Gesture:'none',c7GalleryGift:'none',c7GalleryFarewell:'words',c8LipKiss:'no',c9LipKiss:'no',c10HomeTender:'near',c10Finale:'morning'});
 expect(story.c10LipKiss).toBeUndefined();
 expect(validateSave(JSON.stringify(save))).toEqual(save);
});

it('returns the six chosen first photographs without substituting a different subject',()=>{
 const node=playableChapters[10]!.nodes['c10.travellers.prints'];if(node.kind!=='dialogue')throw Error('No prints');
 const photograph=node.lines.find(l=>l.variants?.length===6)!;const texts=new Set<string>();
 for(const c6PhotoPlace of ['upper','water'] as const)for(const c6PhotoSubject of ['vlad','her','place'] as const)texts.add(resolveLine(photograph,{c6PhotoPlace,c6PhotoSubject}).text);
 expect(texts.size).toBe(6);
});

it('synchronizes gallery, film, photographs and home props with the authored line indices',()=>{
 const seven=playableChapters[7]!;
 for(const [id,works] of [
  ['c7.gallery.together',['row','row','chip','chip','chip','chip','chip','blue']],
  ['c7.gallery.apart',['hall','hall','hall','hall','blue','blue','hall','hall']],
 ] as const){
  const node=seven.nodes[id];
  if(node.kind!=='dialogue')throw Error(id);
  expect(node.lines.map((_,lineIndex)=>galleryView(id,lineIndex))).toEqual(works);
 }
 const nine=playableChapters[9]!,film=courtyardAt('c9.courtyard.resume').campaign.active!;
 const packing='Кот устраивается в чемодане',key='Человек с ключом у чемодана';
 const photo='Человек берёт с собой старую фотографию',train='Человек и кот уезжают вместе в поезде';
 for(const [nodeId,labels] of [
  ['c9.courtyard.filmStart',[packing,packing,packing,key,key]],
  ['c9.courtyard.resume',[key,key,photo,train,train]],
 ] as const){
  const node=nine.nodes[nodeId];
  if(node.kind!=='dialogue')throw Error(nodeId);
  expect(node.lines).toHaveLength(labels.length);
  for(const [lineIndex,label] of labels.entries())
   expect(renderToStaticMarkup(createElement(CourtyardScene,{run:{...film,nodeId,lineIndex}}))).toContain(label);
 }
 const ten=playableChapters[10]!,prints=travellersAt('c10.travellers.prints').campaign.active!;
 const art=(nodeId:NodeId,lineIndex:number)=>renderToStaticMarkup(createElement(TravellersScene,{run:{...prints,nodeId,lineIndex}}));
 const photographs=ten.nodes[prints.nodeId];
 if(photographs.kind!=='dialogue')throw Error(prints.nodeId);
 expect(photographs.lines).toHaveLength(19);
 for(const [first,last,label] of [
  [4,7,'Прогулка:'],[8,8,'Галерея:'],[9,9,'Кухня:'],
  [10,15,'Дворик:'],[16,18,'Случайный кадр прогулки'],
 ] as const)for(let index=first;index<=last;index++)expect(art(prints.nodeId,index)).toContain(label);
 expect(art(prints.nodeId,3)).not.toContain('selected-print');
 expect(art('c10.travellers.open',2)).toContain('game-box');
 expect(art('c10.travellers.open',3)).toContain('travellers-board');
 expect(art('c10.travellers.cat',4)).toContain('cat-in-box');
 expect(art('c10.travellers.cat',5)).toContain('cat-chair');
 expect(art('c10.travellers.arrived',6)).toContain('travellers-board');
 expect(art('c10.travellers.arrived',7)).toContain('game-box');
 const sleep=ten.nodes['c10.travellers.sleep'];
 if(sleep.kind!=='dialogue')throw Error('Missing sleep dialogue');
 expect(resolveScene(sleep.scene,prints.story,{...prints,lineIndex:7}).background).toBe('bg.travellers10.home');
 expect(resolveScene(sleep.scene,prints.story,{...prints,lineIndex:8}).background).toBe('bg.travellers10.morning');
 expect(art(sleep.id,7)).toContain('#b7b0c3');
 expect(art(sleep.id,8)).toBe('');
});
