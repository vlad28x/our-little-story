import type {Run,StoryState} from '../engine/types';
import {travellerView,travellerResources} from '../content/travellers';
import {assetUrl} from '../content/assetManifest';
import {SupperArt} from './SupperArt';

export function FeetPrint(){return <svg viewBox="0 0 180 110" role="img" aria-label="Косой отпечаток: земля и две пары обуви"><path d="M0 0H180V110H0Z" fill="#a99a86"/><path d="M0 30L180 80M55 0L20 110M150 0L120 110" stroke="#8e806f" strokeWidth="2"/>{[45,112].map((x,i)=><g key={x} transform={`translate(${x} 43) rotate(${i?12:-16})`}><path d="M-15-45H4L8 12H-13Z" fill={i?'#6b605d':'#3b4c58'}/><path d="M13-45H32L35 12H16Z" fill={i?'#6b605d':'#3b4c58'}/><path d="M-13 7Q-21 30-11 35H7V9Z M16 9Q14 29 22 34H40Q43 26 33 9Z" fill={i?'#dfc4ac':'#3e3738'} stroke="#efe1cf" strokeWidth="2"/></g>)}</svg>;}

export function TravellersBoard({state,position,night=false}:{state:ReturnType<typeof travellerResources>;position?:string;night?:boolean}){
 const point=({start:[65,220],river:[210,205],quarry:[350,175],last:[476,106],house:[495,145]} as Record<string,number[]>)[position??state.position]??[65,220];
 return <svg className="travellers-board" viewBox="0 0 600 340" role="img" aria-label={`Два путешественника: ${position==='last'?'последний шаг':({start:'на старте',river:'за рекой',quarry:'за карьером',house:'у домика'} as Record<string,string>)[state.position]}. Солнц: ${state.suns}. Мостик: ${state.bridge==='carried'?'с собой':state.bridge==='river'?'у реки':'у болота'}. Фонарь ${state.lantern==='charged'?'заряжен':'пуст'}.`}>
  <defs><linearGradient id="traveller-paper" x2="0" y2="1"><stop stopColor={night?'#716b89':'#f1e5be'}/><stop offset="1" stopColor={night?'#aaa091':'#e0d3a6'}/></linearGradient><radialGradient id="traveller-glow"><stop stopColor="#ffe2a1" stopOpacity=".85"/><stop offset="1" stopColor="#ffe2a1" stopOpacity="0"/></radialGradient></defs>
  <rect x="5" y="5" width="590" height="330" rx="13" fill="#a57c57"/>
  <rect x="14" y="13" width="572" height="313" rx="8" fill="url(#traveller-paper)" stroke="#876d55" strokeWidth="2"/>
  <path d="M300 14V326" stroke="#a9916b" opacity=".35"/><path d="M18 290Q140 260 280 293T580 278" fill="none" stroke="#a6ad7d" strokeWidth="32" opacity=".45"/>
  <path d="M162 24Q133 80 161 134T150 267" fill="none" stroke="#689ca3" strokeWidth="32"/><path d="M162 24Q142 80 163 134T153 267" fill="none" stroke="#c3ded4" strokeWidth="3"/>
  <path d="M70 218L143 160L211 204L290 160L349 177L420 224L496 145 M70 218L152 249L211 204 M211 204L273 67L367 84L349 177 M349 177L390 75L466 70L496 145" fill="none" stroke="#fff0cc" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M252 126L278 95L319 103L343 145L316 199L280 191Z" fill="#b5a18e" stroke="#867364" strokeWidth="2"/>
  <path d="M269 166Q294 130 317 164V180H269Z" fill="#55504d"/><path d="M282 168H303" stroke="#e8d4ad" strokeWidth="3"/>
  <ellipse cx="433" cy="218" rx="46" ry="28" fill="#86a297"/><path d="M406 229l6-22m10 34l5-28m17 21l4-22m13 13l3-15" stroke="#4e7562" strokeWidth="3"/>
  {[35,210,372,536,559].map((x,i)=><g key={x} transform={`translate(${x} ${40+i%2*56})`}><path d="M0 8V34" stroke="#7c7456" strokeWidth="4"/><path d="M-15 23L0-8L15 23Z" fill="#7d9268"/><path d="M-12 11L0-14L12 11Z" fill="#95a279"/></g>)}
  <path d="M470 136V96H520V136Z" fill="#e9ce9a" stroke="#725a49" strokeWidth="2"/><path d="M461 100L495 73L530 100Z" fill="#9c6355" stroke="#725a49" strokeWidth="2"/><path d="M487 136V111H503V136" fill="#876449"/><rect x="473" y="106" width="9" height="11" fill="#fcebb4"/>
  {(state.bridge==='river'||state.bridge==='marsh')&&<g transform={state.bridge==='river'?'translate(143 148) rotate(19)':'translate(418 199) rotate(-40)'}><rect width="43" height="18" rx="2" fill="#bb8957" stroke="#73563e"/>{[6,14,22,30,38].map(x=><path key={x} d={`M${x} 0V18`} stroke="#70543b"/>)}</g>}
  {night&&<circle cx={point[0]} cy={point[1]} r="67" fill="url(#traveller-glow)"/>}
  {[-13,13].map((dx,i)=><g key={dx} transform={`translate(${point[0]+dx} ${point[1]})`}><ellipse cy="8" rx="12" ry="5" fill="#67574c" opacity=".2"/><path d="M-9 5L-6-15H6L9 5Z" fill={i?'#ab6e67':'#667d90'} stroke="#554f4c" strokeWidth="1.5"/><circle cy="-20" r="7" fill={i?'#ce9b80':'#e2bb99'} stroke="#554f4c" strokeWidth="1.5"/></g>)}
  <text x="35" y="309" fill="#685b4e" fontSize="13" letterSpacing="2">ДВА ПУТЕШЕСТВЕННИКА</text>
  {[0,1,2,3,4].map(i=><g key={i} transform={`translate(${345+i*43} 299)`} opacity={i<state.suns?1:.2}><circle r="12" fill="#e7bb59" stroke="#a58244"/><path d="M0-8V8M-8 0H8M-5-5L5 5M-5 5L5-5" stroke="#fff0b8" strokeWidth="1.5"/></g>)}
  {state.bridge==='carried'&&<g transform="translate(211 278)"><rect width="41" height="16" fill="#b58c62" stroke="#795b45"/>{[8,16,24,32].map(x=><path key={x} d={`M${x} 0V16`} stroke="#795b45"/>)}</g>}
  <g transform="translate(279 283)"><path d="M-7-8Q-7-19 0-19Q7-19 7-8M-9-7H9L12 13H-12Z" fill={state.lantern==='charged'?'#e8c375':'#8f8b80'} stroke="#615b4e" strokeWidth="2"/><path d="M-3-4V9H3V-4" stroke={state.lantern==='charged'?'#fff0ac':'#b2aa98'} strokeWidth="4"/></g>
 </svg>;
}

function PortraitPrint({story,source}:{story:StoryState;source:6|7|9}){
 const subject=source===6?story.c6PhotoSubject:source===7?story.c7GalleryFrame:story.c9Frame;
 const background=source===6?story.c6PhotoPlace==='upper'?'bg.photo6.upper':'bg.photo6.shade':source===7?'bg.gallery7.outside':'bg.courtyard9.open';
 return <div className={`printed-scene print-${source} subject-${subject}`}><img className="printed-background" src={assetUrl(background)} alt=""/>
  {subject==='vlad'&&<img className="printed-person" src={assetUrl('vlad.city.smile')} alt=""/>}
  {(subject==='her'||subject==='both')&&<svg className="printed-silhouette" viewBox="0 0 90 160" aria-hidden="true"><circle cx="45" cy="30" r="19" fill="#554c4e"/><path d="M26 48Q45 37 64 48L78 133H12Z" fill="#626370"/><path d="M30 128L25 160M60 128L65 160" stroke="#494650" strokeWidth="12"/></svg>}
  {subject==='both'&&<img className="printed-person print-reflected" src={assetUrl('vlad.city.smile')} alt=""/>}
  {source===7&&subject==='vlad'&&<span className="print-poster">ЛИНИИ<br/>И СВЕТ</span>}
  {source===7&&subject==='both'&&<i className="print-window-frame"/>}
  {source===9&&subject==='vlad'&&<span className="print-bag"/>}
  {source===9&&subject==='seats'&&<svg className="print-chairs" viewBox="0 0 200 140" aria-hidden="true">{[35,113].map(x=><g key={x} transform={`translate(${x} 30)`}><path d="M0 0H45V55H0ZM0 55V105M45 55V105M0 70H45" fill="#ac795d" stroke="#5c4b42" strokeWidth="6"/></g>)}</svg>}
 </div>;
}

function PrintedDish({story}:{story:StoryState}){
 const color=story.c8Filling==='mushroom'?'#927255':story.c8Filling==='simple'?'#79905b':'#c47750';
 return <svg className="supper-art printed-dish" viewBox="0 0 320 190" role="img" aria-label="Целая порция и разломленный кусочек на тарелке">
  <rect width="320" height="190" fill="#bb9573"/><ellipse cx="160" cy="111" rx="142" ry="67" fill="#f6e9cd" stroke="#ab9474" strokeWidth="2"/><ellipse cx="160" cy="111" rx="127" ry="53" fill="none" stroke="#d4c0a0"/>
  <g transform="translate(51 79) rotate(-8 45 30)"><path d="M0 0L88 5L83 68L4 62Z" fill="#d8a664" stroke="#956c40" strokeWidth="2"/>{story.c8Shape==='fold'?<path d="M0 0L43 33L88 5M4 62L43 33L83 68" fill="#efd09b" stroke="#b78b4f" strokeWidth="2"/>:<><path d="M8 8L80 12L75 59L12 54Z" fill="#edc567"/><path d="M20 20L65 43M25 44L64 22" stroke={color} strokeWidth="8" strokeLinecap="round"/></>}</g>
  <path d="M188 75L251 83L237 104L243 112L227 123L181 120Z" fill="#e6bb7b" stroke="#a77d49" strokeWidth="2"/><path d="M240 129L254 114L249 105L270 88L283 139Z" fill="#e6bb7b" stroke="#a77d49" strokeWidth="2"/><path d="M236 104L226 113L231 122M252 113L246 124" fill="none" stroke="#f1d480" strokeWidth="5"/><path d="M188 88L218 109M254 126L267 115" stroke={color} strokeWidth="5"/>
  {[173,181,196,243].map((x,i)=><circle key={x} cx={x} cy={140+i%2*9} r="2" fill="#e4c58c"/>)}
 </svg>;
}

export function SelectedPrint({story,source}:{story:StoryState;source:6|7|8|9|'feet'}){
 const board=story.c8Frame?.startsWith('board');
 const label=source==='feet'?'Случайный кадр прогулки':source===6?`Прогулка: ${story.c6PhotoPlace==='upper'?'верхняя дорожка':'у воды'}, ${story.c6PhotoSubject==='vlad'?'Влад':story.c6PhotoSubject==='her'?'силуэт героини':'место'}`:source===7?`Галерея: ${story.c7GalleryFrame==='vlad'?'Влад у афиши':story.c7GalleryFrame==='her'?'героиня у двери':'совместное отражение'}`:source===8?`Кухня: ${board?'доска':'блюдо'}, ${story.c8Frame?.endsWith('Her')?'снимает героиня':'снимает Влад'}`:`Дворик: ${story.c9Frame==='vlad'?'Влад с пакетом':story.c9Frame==='seats'?'два стула':'дворик до показа'}`;
 return <figure className={`selected-print ${source===8?`food-${story.c8Frame}`:''}`} aria-label={label}>
  {source==='feet'?<FeetPrint/>:source===8?<div className="printed-food">{board?<SupperArt board/>:<PrintedDish story={story}/>}<svg className="print-board-hands" viewBox="0 0 320 190" aria-hidden="true" style={{display:board?'block':'none'}}><path d="M0 118L38 101Q51 96 57 102L44 115L53 113Q63 111 63 119L35 133L0 148M320 100L286 88Q271 86 265 94L277 103L268 104Q260 107 263 112L289 121L320 131" fill="#d5ad93" stroke="#a37d6b" strokeWidth="2"/></svg>{!board&&(story.c7GalleryGift==='chip'||story.c7GalleryGift==='blue')?<img className="printed-gift" src={assetUrl(`gallery7.${story.c7GalleryGift}`)} alt={story.c7GalleryGift==='chip'?'Скол со светлой треугольной выемкой':'Просвет'}/>:!board?<span className="print-sugar"/>:null}{!board&&<svg className={`print-hand hand-${story.c8Frame}`} viewBox="0 0 200 100" aria-hidden="true"><path d="M200 80L130 70Q115 68 104 60L79 46Q71 40 75 35Q78 30 85 34L107 44L89 29Q83 22 88 18Q92 15 98 20L126 40L111 19Q108 12 114 10Q120 8 125 17L146 44L200 48" fill="#d7ae96" stroke="#a1786b" strokeWidth="2"/></svg>}</div>:<PortraitPrint story={story} source={source}/>}
  <figcaption>{label}</figcaption>
 </figure>;
}

export function TravellersStatus({run}:{run:Run}){
 const n=run.nodeId.split('.').at(-1)!;
 if(!['open','river','riverChoice','riverHelp','ford','bridge','quarry','quarryChoice','tunnel','contour','cat','catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n))return null;
 const r=travellerView(run);
 return <p className="traveller-status" aria-live="polite">☀ {r.suns} / 5 · Мостик {r.bridge==='carried'?'с собой':r.bridge==='river'?'у реки':'у болота'} · Фонарь {r.lantern==='charged'?'заряжен':'пуст'}</p>;
}

export function TravellersScene({run}:{run:Run}){
 const n=run.nodeId.split('.').at(-1)!,s=run.story,r=travellerView(run);
 const playing=['open','river','riverChoice','riverHelp','ford','bridge','quarry','quarryChoice','tunnel','contour','cat','catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n);
 const home=['home','homeChoice','homeKissFirst','homeKissFirstChoice','homeKissFirstNeck','homeKissFirstSoft','homeKissAgain','homeHug','homeNear','late','lateChoice','lateLeave','sleep','private'].includes(n);
 if(n==='prints'){
  const i=run.lineIndex,source=i>=16?'feet':i>=10?9:i>=9?8:i>=8?7:6;
  return <div className="traveller-props prints-scene"><div className="photo-envelope"/>{i>=4&&<SelectedPrint story={s} source={source}/>}</div>;
 }
 if(n==='sleep'&&run.lineIndex>=8)return null;
 if(home)return <svg className="traveller-home-props" viewBox="0 0 1086 1448" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Фотографии на столе; подаренная открытка только рядом с монитором">
  <g transform="translate(245 792) rotate(6)"><rect width="210" height="85" fill="#cdb697" stroke="#927a63" strokeWidth="2"/><path d="M0 0L105 47L210 0" fill="#e4ceb0"/></g>
  {s.c7GalleryGift&&s.c7GalleryGift!=='none'&&<g><rect x="946" y="531" width="92" height="118" fill="#f5ebd8"/><image x="950" y="535" width="84" height="110" preserveAspectRatio="xMidYMid meet" href={assetUrl(`gallery7.${s.c7GalleryGift}`)} aria-label="Подаренная открытка стоит рядом с монитором"/></g>}
  {n==='sleep'&&run.lineIndex>=3&&run.lineIndex<8&&<g><path d="M50 720Q80 660 210 690L250 850H50Z" fill="#b7b0c3"/><path d="M280 700Q330 670 430 710L470 850H290Z" fill="#d1b99e"/></g>}
 </svg>;
 if((n==='open'&&run.lineIndex<3)||(n==='arrived'&&run.lineIndex>=7))return <div className="traveller-props"><div className="game-box">Два<br/>путешественника</div></div>;
 if(playing)return <div className="traveller-props"><TravellersBoard state={r} position={r.position} night={r.night}/>{<div className="feet-by-board"><FeetPrint/></div>}{n==='cat'&&run.lineIndex<5&&<div className="cat-in-box" aria-label="Пончик в крышке коробки на памятке"><span/><img src={assetUrl('cat.idle')} alt="Пончик занял коробку"/></div>}{(n==='cat'&&run.lineIndex>=5||['catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n))&&<div className="cat-chair" aria-label="Пончик на отдельном стуле с пледом"><span/><img src={assetUrl('cat.idle')} alt="Пончик отдыхает на пледе"/></div>}</div>;
 if(n==='entry'||n==='cafeLate')return <div className="traveller-props"><div className="game-box">Два<br/>путешественника</div>{n==='cafeLate'&&<div className="cat-chair"><span/><img src={assetUrl('cat.idle')} alt="Пончик на стуле с пледом"/></div>}</div>;
 return null;
}
