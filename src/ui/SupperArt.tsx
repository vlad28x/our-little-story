import { useId } from 'react';
import type { StoryState } from '../engine/types';
import { assetUrl } from '../content/assetManifest';

type Filling=NonNullable<StoryState['c8Filling']>;
type Shape=NonNullable<StoryState['c8Shape']>;
type SupperStage='ingredients'|'torn'|'cooked'|'half'|'board';

const supperLabels={
  board:'Доска после готовки: мучная запятая, ложка и крошки',
  torn:'Лист лепёшки разошёлся по сгибу на две половины',
  'ingredients-mix':'Доска с тёртым сыром, перцем и грибами',
  'ingredients-mushroom':'Доска с тёртым сыром и обжаренными грибами',
  'ingredients-pepper':'Доска с тёртым сыром и нарезанным сладким перцем',
  'ingredients-simple':'Доска с тёртым сыром и свежей зеленью',
  'cooked-fold-mix':'Четыре румяных конвертика: mix',
  'cooked-fold-mushroom':'Четыре румяных конвертика: mushroom',
  'cooked-fold-pepper':'Четыре румяных конвертика: pepper',
  'cooked-fold-simple':'Четыре румяных конвертика: simple',
  'cooked-open-mix':'Четыре открытые запечённые порции: mix',
  'cooked-open-mushroom':'Четыре открытые запечённые порции: mushroom',
  'cooked-open-pepper':'Четыре открытые запечённые порции: pepper',
  'cooked-open-simple':'Четыре открытые запечённые порции: simple',
  'half-fold-mix':'Половину съели: целая и разломленная порция (fold, mix)',
  'half-fold-mushroom':'Половину съели: целая и разломленная порция (fold, mushroom)',
  'half-fold-pepper':'Половину съели: целая и разломленная порция (fold, pepper)',
  'half-fold-simple':'Половину съели: целая и разломленная порция (fold, simple)',
  'half-open-mix':'Половину съели: целая и разломленная порция (open, mix)',
  'half-open-mushroom':'Половину съели: целая и разломленная порция (open, mushroom)',
  'half-open-pepper':'Половину съели: целая и разломленная порция (open, pepper)',
  'half-open-simple':'Половину съели: целая и разломленная порция (open, simple)',
} as const;

const boardTiles={pepper:[0,0],mushroom:[1,0],mix:[0,1],simple:[1,1],torn:[0,2],board:[1,2]} as const;
const servingColumns={pepper:0,mushroom:1,mix:2,simple:3} as const;
const servingRows={open:0,fold:1} as const;
const tileWidth=320,tileHeight=190;

function supperTile(stage:SupperStage,filling:Filling,shape:Shape){
  if(stage==='cooked'||stage==='half')return {
    url:assetUrl('supper8.art.serving'),column:servingColumns[filling],row:servingRows[shape]+(stage==='half'?2:0),columns:4,rows:4,
  };
  const [column,row]=boardTiles[stage==='ingredients'?filling:stage];
  return {url:assetUrl('supper8.art.preparation'),column,row,columns:2,rows:3};
}

export function SupperArt({stage,filling='simple',shape='open'}:{stage:SupperStage;filling?:Filling;shape?:Shape}){
  const id=useId().replace(/:/g,'');
  const {url,column,row,columns,rows}=supperTile(stage,filling,shape);
  const key=stage==='torn'||stage==='board'?stage:stage==='ingredients'?`ingredients-${filling}` as const:`${stage}-${shape}-${filling}` as const;
  return <svg className="supper-art" data-stage={stage} viewBox="0 0 320 190" role="img" aria-label={supperLabels[key]}>
    <defs><clipPath id={`${id}-tile`}><rect width={tileWidth} height={tileHeight}/></clipPath></defs>
    <image href={url} x={-column*tileWidth} y={-row*tileHeight} width={columns*tileWidth} height={rows*tileHeight} clipPath={`url(#${id}-tile)`}/>
  </svg>;
}

const serveAt={fold:10,open:12};
const halfEatenAt=10;

function supperStage(node:string,lineIndex:number,frame:StoryState['c8Frame']):SupperStage|null{
 switch(node){
  case 'pepper':
  case 'mushroom':
  case 'mix':
  case 'simple':return 'ingredients';
  case 'tear':
  case 'shapeChoice':return 'torn';
  case 'fold':
  case 'open':return lineIndex>=serveAt[node]?'cooked':'torn';
  case 'meal':return lineIndex>=halfEatenAt?'half':'cooked';
  case 'frame':
  case 'frameChoice':
  case 'foodHer':
  case 'foodVlad':
  case 'foodClick':return 'half';
  case 'boardHer':
  case 'boardVlad':return 'board';
  case 'film':return lineIndex===0?(frame?.startsWith('board')?'board':'half'):null;
  default:return null;
 }
}

export function SupperScene({story,node,lineIndex}:{story:StoryState;node:string;lineIndex:number}){
 const gift=story.c7GalleryGift;
 if(node==='c8.supper.table'&&gift&&gift!=='none'){
  const discussingGift=lineIndex<8;
  return <img className="supper-gift" data-visible={discussingGift} aria-hidden={!discussingGift} src={assetUrl(`gallery7.${gift}`)} alt={`Подаренная открытка «${gift==='chip'?'Скол':'Просвет'}»`}/>;
 }
 const prefix='c8.supper.';
 if(!node.startsWith(prefix))return null;
 const stage=supperStage(node.slice(prefix.length),lineIndex,story.c8Frame);
 if(!stage)return null;
 const cooking=stage==='ingredients'||stage==='torn';
 return <div className={`supper-scene ${cooking?'supper-cooking':'supper-table'}`}>
  <SupperArt stage={stage} filling={story.c8Filling} shape={story.c8Shape}/>
 </div>;
}

export function SupperChoiceArt({node,choice,filling}:{node:string;choice:string;filling?:Filling}){
 if(node==='c8.supper.fillChoice')return <SupperArt stage="ingredients" filling={choice as Filling}/>;
 if(node==='c8.supper.shapeChoice')return <SupperArt stage="cooked" filling={filling} shape={choice as Shape}/>;
 return null;
}
