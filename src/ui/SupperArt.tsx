import type { StoryState } from '../engine/types';
import { assetUrl } from '../content/assetManifest';

export const fillingNames={pepper:'Перец и сыр',mushroom:'Грибы и сыр',mix:'Перец, грибы и сыр',simple:'Сыр с зеленью'};
type Filling=NonNullable<StoryState['c8Filling']>;
export function SupperArt({filling='simple',shape,board=false,torn=false}:{filling?:Filling;shape?:StoryState['c8Shape'];board?:boolean;torn?:boolean}){
 const label=board?'Доска после готовки: крошки, ложка и мучной след':torn?'Лист лепёшки разошёлся по сгибу':`${shape==='fold'?'Румяные конверты':shape==='open'?'Открытые запечённые порции':'Начинка'}: ${fillingNames[filling].toLowerCase()}`;
 return <svg className="supper-art" viewBox="0 0 320 190" role="img" aria-label={label}>
  <ellipse cx="160" cy="163" rx="138" ry="17" fill="#65412b" opacity=".12"/>
  <rect x="18" y="24" width="284" height="139" rx="24" fill={board||torn?'#cba477':'#f3e7ce'} stroke="#957957" strokeWidth="3"/>
  {!board&&!torn&&<ellipse cx="160" cy="100" rx="127" ry="55" fill="#fff7e9" stroke="#d5c3a2" strokeWidth="2"/>}
  {board?<>
   <path d="M57 74q33 22 12 44q-9 8 0 15" stroke="#fff5df" strokeWidth="9" fill="none" strokeLinecap="round"/>
   <path d="M216 61l-55 60" stroke="#8c7062" strokeWidth="10" strokeLinecap="round"/><ellipse cx="226" cy="51" rx="17" ry="24" transform="rotate(40 226 51)" fill="#b8a398" stroke="#8c7062" strokeWidth="3"/>
   {[45,91,132,190,258].map((x,i)=><circle key={x} cx={x} cy={136-i%3*18} r={i%2?4:3} fill="#eee0b8"/>)}</>:torn?<>
   <path d="M48 60L146 48L143 73L152 88L142 105L149 137L52 132Z" fill="#f3d6a4" stroke="#aa804d" strokeWidth="2"/>
   <path d="M170 49L269 57L260 133L170 140L163 107L174 89L164 74Z" fill="#f3d6a4" stroke="#aa804d" strokeWidth="2"/>
  </>:<>{[0,1,2].map(i=><g key={i} transform={`translate(${53+i*78} ${68+i%2*17}) rotate(${i*7-6} 30 25)`}>
   <path d="M0 5L58 0L65 49L5 56Z" fill={shape?'#ddb477':'#f1d3a1'} stroke="#a77944" strokeWidth="2"/>
   <path d="M8 12L52 8L55 42L12 47Z" fill="#f2ce72"/>
   {(filling==='pepper'||filling==='mix')&&<path d="M15 15l8 25m13-28l8 25" stroke="#bf5e47" strokeWidth="8" strokeLinecap="round"/>}
   {(filling==='mushroom'||filling==='mix')&&<><path d="M23 18q12-16 23 0Z" fill="#8c6e57"/><path d="M34 18v12" stroke="#bc9b78" strokeWidth="6"/></>}
   {filling==='simple'&&<path d="M16 20l29 13m-22-19l9 26m13-23L19 38" stroke="#72905a" strokeWidth="3"/>}
   {shape==='fold'&&<><path d="M0 5L35 29L58 0M5 56L35 29L65 49" fill="#efd09b" stroke="#ae824b" strokeWidth="2"/><path d="M2 6L35 31L59 1" fill="none" stroke="#b88c51" strokeWidth="2"/></>}
   {shape&&<path d="M9 49l12-1m25-40l7 4" stroke="#ad753d" strokeWidth="3" strokeLinecap="round"/>}
  </g>)}</>}
 </svg>;
}

export function SupperScene({story,node}:{story:StoryState;node:string}){
 const gift=story.c7GalleryGift;
 const cooking=['filling','fillChoice','pepper','mushroom','mix','simple','tear','shapeChoice','fold','open'].some(id=>node==='c8.supper.'+id);
 const board=node.includes('board')||node==='c8.supper.film'&&story.c8Frame?.startsWith('board');
 const visible=cooking||['table','meal','frame','frameChoice','foodHer','foodVlad','foodClick','boardHer','boardVlad','film'].some(id=>node==='c8.supper.'+id);
 if(!visible)return null;
 return <div className={`supper-scene ${cooking?'supper-cooking':'supper-table'}`}>
  {!cooking&&!board&&gift&&gift!=='none'&&<img className="supper-gift" src={assetUrl(`gallery7.${gift}`)} alt={`Подаренная открытка «${gift==='chip'?'Скол':'Просвет'}»`}/>}
  {node!=='c8.supper.table'&&<SupperArt filling={story.c8Filling} shape={story.c8Shape} board={board} torn={!story.c8Shape&&['c8.supper.tear','c8.supper.shapeChoice'].includes(node)}/>}
 </div>;
}

export function SupperChoiceArt({node,choice,filling}:{node:string;choice:string;filling?:Filling}){
 if(node==='c8.supper.fillChoice')return <SupperArt filling={choice as Filling}/>;
 if(node==='c8.supper.shapeChoice')return <SupperArt filling={filling} shape={choice as StoryState['c8Shape']}/>;
 return null;
}
