import { assetUrl } from '../content/assetManifest';
export function AdviserPortrait({kind,active=false,aside=false,painted=false}:{kind:'angel'|'devil';active?:boolean;aside?:boolean;painted?:boolean}){
  const portrait=painted && aside ? (kind==='angel' ? 'adviser.season2.gouache.angel' : 'adviser.season1.gouache.peek') : aside ? `adviser.${kind}.peek` : `adviser.${kind}`;
  return <div className={`adviser-portrait adviser-${kind} ${active?'is-speaking':''} ${aside?'is-aside':''}`}><img src={assetUrl(portrait)} alt={kind==='angel'?'Ангел — советчик':'Дьяволёнок — советчик'}/></div>;
}
