import { previewPhotoSix,previewGallery,previewSupper,previewCourtyard,previewTravellers,recoveryPreview } from './developerPreview';
import { useGame } from './GameProvider';
import { go } from './router';
import type { NodeId,StoryState } from '../engine/types';
export function DeveloperPanel(){
  const {send}=useGame();
  function previewSix(){send({type:'replace',save:recoveryPreview(6)});go('/play/6');}
  const ids:NodeId[]=['c1.entry','c1.search','c1.plan','c1.end.tea','c1.end.banter','c1.end.coop','c2.arrival','c2.umbrella','c2.end','c4.sofa','c4.pad.reaction','c4.kitchen','c4.debrief.feast','c4.debrief.chaos','c4.end','c3.walk','c3.stars','c3.honest','c3.goodbye.end','c5.return','c5.drink.first','c5.drink.recommend','c5.album','c5.letter','c5.close'];
  return <details className="dev-panel"><summary>Тестовые сцены</summary><button onClick={previewSix}>Тест: начать шестую встречу</button>{(['c6.photo.place','c6.photo.subject','c6.photo.touch'] as const).map(id=><button key={id} onClick={()=>{send({type:'replace',save:previewPhotoSix(id)});go('/play/6');}}>{id}</button>)}<button onClick={()=>{send({type:'replace',save:previewGallery()});go('/play/7');}}>Тест: начать седьмую встречу</button><button onClick={()=>{send({type:'replace',save:previewSupper()});go('/play/8');}}>Тест: начать восьмую встречу</button>{(['c8.supper.fillChoice','c8.supper.shapeChoice','c8.supper.danceChoice'] as const).map(id=><button key={id} onClick={()=>{send({type:'replace',save:previewSupper(id)});go('/play/8');}}>{id}</button>)}<button onClick={()=>{send({type:'replace',save:previewCourtyard()});go('/play/9');}}>Тест: начать девятую встречу</button>{(['c9.courtyard.rainChoice','c9.courtyard.betChoice','c9.courtyard.earlyWalk','c9.courtyard.goodbyeChoice'] as const).map(id=><button key={id} onClick={()=>{send({type:'replace',save:previewCourtyard(id)});go('/play/9');}}>{id}</button>)}<button onClick={()=>{send({type:'replace',save:previewTravellers()});go('/play/10');}}>Тест: начать десятую встречу</button>{(['c10.travellers.prints','c10.travellers.riverChoice','c10.travellers.catChoice','c10.travellers.upperNight','c10.travellers.homeChoice','c10.travellers.sleep','c10.travellers.private','c10.travellers.homeKissFirstChoice','c10.travellers.homeKissFirstNeck','c10.travellers.homeKissFirstSoft','c10.travellers.privateMorning'] as const).map(id=><button key={id} onClick={()=>{send({type:'replace',save:previewTravellers(id)});go('/play/10');}}>{id}</button>)}{ids.map(id=><button key={id} onClick={()=>{
    let story:StoryState={};
    if(id!=='c1.entry')story={approach:'help'};
    if(id==='c1.plan'||id.startsWith('c1.end'))story={...story,searchResult:'detour',catNoticed:true,pace:'quiet'};
    if(id.startsWith('c1.end'))story.plan=id.split('.').at(-1) as StoryState['plan'];
    if(id.startsWith('c2.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea'};
    if(id==='c2.umbrella'||id==='c2.end')story={...story,rainRoute:'shelter',catApproach:'wait'};
    if(id==='c2.end')story={...story,umbrella:'patched',eveningMood:'quiet'};
    if(id.startsWith('c4.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',eveningMood:'quiet',c4Edition:2,bench:'space',constellation:'teapot',wish:'calm',c4Goodbye:'none'};
    if(['c4.kitchen','c4.debrief.feast','c4.debrief.chaos','c4.end'].includes(id))story={...story,controllerReaction:'absurd',teamName:'dumpling',kitchenStyle:'planner'};
    if(id.startsWith('c4.debrief')||id==='c4.end')story.kitchenResult=id==='c4.debrief.chaos'?'chaos':'feast';
    if(id==='c4.end')story.gameAftercare='team';
    if(id.startsWith('c3.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',eveningMood:'quiet'};
    if(['c3.stars','c3.honest','c3.goodbye.end'].includes(id))story.bench='space';
    if(['c3.honest','c3.goodbye.end'].includes(id))story.constellation='teapot';
    if(id==='c3.goodbye.end')story={...story,wish:'calm',c4Goodbye:'none'};
    if(id.startsWith('c5.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',eveningMood:'quiet',controllerReaction:'help',teamName:'calm',kitchenStyle:'planner',kitchenResult:'skipped',gameAftercare:'team',bench:'space',constellation:'teapot',wish:'calm'};
    if(['c5.drink.recommend','c5.album','c5.letter','c5.close'].includes(id))story.c5FirstTaste='compare';
    if(['c5.album','c5.letter','c5.close'].includes(id))story.c5Recommendation='fresh';
    send({type:'dev-jump',nodeId:id,story});go(`/play/${id[1]}`);
  }}>{id}</button>)}</details>;
}
