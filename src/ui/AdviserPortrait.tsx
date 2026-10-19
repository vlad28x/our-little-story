import { assetUrl } from '../content/assetManifest';
export function AdviserPortrait({kind,active=false}:{kind:'angel'|'devil';active?:boolean}){
  return <div className={`adviser-portrait adviser-${kind} ${active?'is-speaking':''}`}><img src={assetUrl(`adviser.${kind}`)} alt={kind==='angel'?'Ангел — советчик':'Дьяволёнок — советчик'}/></div>;
}
