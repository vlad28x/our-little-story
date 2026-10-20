import { assetUrl } from '../content/assetManifest';
export function AdviserPortrait({kind,active=false,aside=false}:{kind:'angel'|'devil';active?:boolean;aside?:boolean}){
  return <div className={`adviser-portrait adviser-${kind} ${active?'is-speaking':''} ${aside?'is-aside':''}`}><img src={assetUrl(aside?`adviser.${kind}.peek`:`adviser.${kind}`)} alt={kind==='angel'?'Ангел — советчик':'Дьяволёнок — советчик'}/></div>;
}
