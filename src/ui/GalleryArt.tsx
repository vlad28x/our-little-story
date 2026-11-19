import {assetUrl} from '../content/assetManifest';
export type GalleryView='hall'|'overview'|'row'|'chip'|'blue'|'cards'|'poster';
const names={row:'Ряд',chip:'Скол',blue:'Просвет'};
const descriptions={row:'Пять светлых кромок ступеней на сером бетоне',chip:'Треугольный скол со светлыми камешками и светлая треугольная выемка в тени на нижней ступени',blue:'Синяя дверь, тёплая щель справа и порог внизу'};
export function GalleryArt({view='hall'}:{view?:GalleryView}){
 // The wide hall and outside poster are composited into their shared background.
 if(view==='hall'||view==='overview'||view==='poster')return null;
 const works=view==='cards'?['chip','blue'] as const:[view];
 return <div className={`gallery-art gallery-art-${view}`} aria-label={view==='cards'?'Открытки на стойке':'Фотовыставка «Линии и свет»'}>
  <div className="gallery-works">{works.map(key=><figure key={key}><img src={assetUrl(`gallery7.${key}`)} alt={descriptions[key]}/><figcaption>{names[key]}</figcaption></figure>)}</div>
 </div>;
}
export function galleryView(node:string,line:number):GalleryView{
 if(node==='c7.gallery.first'&&line===0)return 'overview';
 if(node==='c7.gallery.together')return line<2?'row':line<7?'chip':'blue';
 if(node==='c7.gallery.apart')return line===4||line===5?'blue':'hall';
 if(node==='c7.gallery.blue')return 'blue';
 if(node==='c7.gallery.chip')return 'chip';
 if(['rack','card','giveChip','giveBlue','leaveCards'].some(n=>node==='c7.gallery.'+n))return 'cards';
 if(['entry','outside','frame','shotVlad','shotHer','shotBoth','film'].some(n=>node==='c7.gallery.'+n))return 'poster';
 return 'hall';
}
