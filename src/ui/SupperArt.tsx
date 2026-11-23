import type { StoryState } from '../engine/types';
import { assetUrl } from '../content/assetManifest';
import { supperIllustrations } from './SupperIllustrations';

type Filling=NonNullable<StoryState['c8Filling']>;
type Shape=NonNullable<StoryState['c8Shape']>;
type SupperStage='ingredients'|'torn'|'cooked'|'half'|'board';

export function SupperArt({stage,filling='simple',shape='open'}:{stage:SupperStage;filling?:Filling;shape?:Shape}){
 if(stage==='torn'||stage==='board')return supperIllustrations[stage];
 if(stage==='ingredients')return supperIllustrations[`ingredients-${filling}`];
 return supperIllustrations[`${stage}-${shape}-${filling}`];
}

const serveAt={fold:8,open:9};
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
