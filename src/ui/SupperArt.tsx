import { cloneElement, useId, useState, type CSSProperties, type ReactElement, type SVGProps } from 'react';
import type { StoryState } from '../engine/types';
import { assetUrl } from '../content/assetManifest';
import { supperIllustrations } from './SupperIllustrations';

type Filling=NonNullable<StoryState['c8Filling']>;
type Shape=NonNullable<StoryState['c8Shape']>;
type SupperStage='ingredients'|'torn'|'cooked'|'half'|'board';

const materialColors = {
  board: ['#e3be91', '#bb8c65', '#8d5f4d'],
  rim: ['#e9d2c5', '#ba99ab', '#85697e'],
  glaze: ['#fff7e8', '#ebd7bf', '#caa79e'],
  crust: ['#f2cd8f', '#d39a5d', '#a76b48'],
  fold: ['#fae0a1', '#dda46a', '#b47952'],
  dough: ['#fae8c5', '#ebcda4', '#cea17a'],
  cheese: ['#fff0b6', '#eeca77', '#c68d4d'],
  pepper: ['#eb9775', '#bb5d4b', '#8a4139'],
  mushroom: ['#d2a983', '#9b7259', '#684b43'],
  herb: ['#a8b179', '#778654', '#536244'],
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
  const [loadedAtlas,setLoadedAtlas]=useState<string>();
  const {url,column,row,columns,rows}=supperTile(stage,filling,shape);
  const painted=loadedAtlas===url;
  const key=stage==='torn'||stage==='board'?stage:stage==='ingredients'?`ingredients-${filling}` as const:`${stage}-${shape}-${filling}` as const;
  const drawing:ReactElement<SVGProps<SVGSVGElement>>=supperIllustrations[key];
  const materials=Object.entries(materialColors);
  const style={
    ...Object.fromEntries(materials.map(([name])=>[`--supper-${name}`,`url(#${id}-${name})`])),
    '--supper-grain':`url(#${id}-grain)`,
  } as CSSProperties;
  const paint=<defs>
    <clipPath id={`${id}-tile`}><rect width={tileWidth} height={tileHeight}/></clipPath>
    {materials.map(([name,[light,middle,shade]])=><linearGradient key={name} id={`${id}-${name}`} x2=".72" y2="1">
      <stop stopColor={light}/><stop offset=".58" stopColor={middle}/><stop offset="1" stopColor={shade}/>
    </linearGradient>)}
    <pattern id={`${id}-grain`} width="23" height="17" patternUnits="userSpaceOnUse">
      <path d="M1 3l2-.4m5 9 1-.3m7-7 2 .4m2 8 1-.4M6 16l1.5-.2" stroke="#f8e1be" strokeWidth="1.2" strokeLinecap="round" opacity=".32"/>
      <path d="M5 6l1 .4m6-5 1.6 .2m1 8 2-.4m-3 6 1.1 .4M1 13h1" stroke="#6e483d" strokeWidth=".9" strokeLinecap="round" opacity=".26"/>
    </pattern>
  </defs>;
  return cloneElement(drawing,{style},paint,painted?null:drawing.props.children,
    <image href={url} x={-column*tileWidth} y={-row*tileHeight} width={columns*tileWidth} height={rows*tileHeight}
      clipPath={`url(#${id}-tile)`} opacity={painted?1:0} onLoad={()=>setLoadedAtlas(url)}/>);
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
