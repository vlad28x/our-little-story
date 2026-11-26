import {readFileSync} from 'node:fs';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect,it,vi} from 'vitest';
import {chapter8} from '../src/content/chapters/ch08';
import type {SaveV1} from '../src/state/types';
import {SupperArt,SupperChoiceArt,SupperScene} from '../src/ui/SupperArt';
import {ResultScreen} from '../src/ui/ResultScreen';
import {finishSupper} from './supperHelpers';

const context=vi.hoisted(()=>({save:null as unknown as SaveV1}));
vi.mock('../src/app/GameProvider',()=>({useGame:()=>({save:context.save,send:()=>{}})}));

const fillings=['pepper','mushroom','mix','simple'] as const;
const shapes=['fold','open'] as const;
function checkArt(markup:string,stage:string,name=stage){
 const art=markup.match(/<svg\b[^>]*>[\s\S]*?<\/svg>/)?.[0];
 const approved=readFileSync(`outputs/ch08-svg/${name}.svg`,'utf8');
 expect(art).toContain(`data-stage="${stage}"`);
 expect(art).toContain('viewBox="0 0 320 190"');
 expect(art?.match(/aria-label="[^"]+"/)?.[0]).toBe(approved.match(/aria-label="[^"]+"/)?.[0]);
 expect(art).toContain('fill="var(--supper-grain)"');
}

it('renders all 22 repainted illustrations with the approved dimensions and labels',()=>{
 for(const stage of ['torn','board'] as const)checkArt(renderToStaticMarkup(<SupperArt stage={stage}/>),stage);
 for(const filling of fillings){
  checkArt(renderToStaticMarkup(<SupperArt stage="ingredients" filling={filling}/>),'ingredients',`ingredients-${filling}`);
  for(const shape of shapes)for(const stage of ['cooked','half'] as const){
   checkArt(renderToStaticMarkup(<SupperArt stage={stage} shape={shape} filling={filling}/>),stage,`${stage}-${shape}-${filling}`);
  }
 }
});

it('keeps each kitchen illustration in step with the authored action',()=>{
 const scene=(node:string,lineIndex=0,story:SaveV1['campaign']['startStates'][8]={c8Filling:'mix',c8Shape:'open'})=>
  renderToStaticMarkup(<SupperScene node={`c8.supper.${node}`} lineIndex={lineIndex} story={story}/>);
 for(const node of ['entry','filling','fillChoice','dance'])expect(scene(node,0,{})).toBe('');
 for(const filling of fillings)checkArt(scene(filling,0,{c8Filling:filling}),'ingredients',`ingredients-${filling}`);
 for(const node of ['tear','shapeChoice'])checkArt(scene(node),'torn');
 for(const shape of shapes){
  const node=chapter8.nodes[`c8.supper.${shape}`];
  if(node.kind!=='dialogue')throw Error('Missing cooking scene');
  const serves=node.lines.findIndex(line=>line.text.includes('на общее блюдо'));
  expect(serves).toBeGreaterThan(0);
  const story={c8Filling:'mix',c8Shape:shape} as const;
  checkArt(scene(shape,0,story),'torn');
  checkArt(scene(shape,serves-1,story),'torn');
  checkArt(scene(shape,serves,story),'cooked',`cooked-${shape}-mix`);
  checkArt(scene(shape,node.lines.length-1,story),'cooked',`cooked-${shape}-mix`);
 }
 const meal=chapter8.nodes['c8.supper.meal'];
 if(meal.kind!=='dialogue')throw Error('Missing meal');
 const half=meal.lines.findIndex(line=>line.text.includes('съедаете половину'));
 expect(half).toBeGreaterThan(0);
 checkArt(scene('meal'),'cooked','cooked-open-mix');
 checkArt(scene('meal',half-1),'cooked','cooked-open-mix');
 checkArt(scene('meal',half),'half','half-open-mix');
 checkArt(scene('meal',meal.lines.length-1),'half','half-open-mix');
 for(const node of ['frame','frameChoice','foodHer','foodVlad','foodClick','film'])checkArt(scene(node),'half','half-open-mix');
 for(const node of ['boardHer','boardVlad'])checkArt(scene(node),'board');
 checkArt(scene('film',0,{c8Frame:'boardHer'}),'board');
 expect(scene('film',1)).toBe('');
 expect(scene('film',1,{c8Frame:'boardVlad'})).toBe('');
});

it('previews ingredients and shapes using the selected filling',()=>{
 for(const filling of fillings){
  checkArt(renderToStaticMarkup(<SupperChoiceArt node="c8.supper.fillChoice" choice={filling}/>),'ingredients',`ingredients-${filling}`);
  for(const shape of shapes)checkArt(renderToStaticMarkup(<SupperChoiceArt node="c8.supper.shapeChoice" choice={shape} filling={filling}/>),'cooked',`cooked-${shape}-${filling}`);
 }
});

it('shows the campaign filling in the album and the trial filling on its own postcard',()=>{
 const canonical=finishSupper(undefined,{filling:'mushroom',shape:'open'});
 context.save=finishSupper(canonical,{filling:'pepper',shape:'fold'},true);
 checkArt(renderToStaticMarkup(<ResultScreen route="/result/8"/>),'cooked','cooked-fold-pepper');
 checkArt(renderToStaticMarkup(<ResultScreen route="/result/8?source=campaign"/>),'cooked','cooked-open-mushroom');
 checkArt(renderToStaticMarkup(<ResultScreen route="/result/8?card=c8.supper"/>),'cooked','cooked-open-mushroom');
});
