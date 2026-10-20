import { previewSeventh,previewFinal,recoveryPreview } from './developerPreview';
import { useGame } from './GameProvider';
import { go } from './router';
import type { NodeId,StoryState } from '../engine/types';
export function DeveloperPanel(){
  const {send}=useGame();
  function previewSix(){send({type:'replace',save:recoveryPreview(6)});go('/play/6');}
  const ids:NodeId[]=['c1.entry','c1.search','c1.plan','c1.end.tea','c1.end.banter','c1.end.coop','c2.arrival','c2.umbrella','c2.end','c3.sofa','c3.pad.reaction','c3.kitchen','c3.debrief.feast','c3.debrief.chaos','c3.end','c4.walk','c4.stars','c4.bond','c4.end','c5.return','c5.album','c5.letter','c5.tone.friendly','c5.ending.romantic','c5.ending.comic','c5.ending.gaming','c5.ending.friendly'];
  return <details className="dev-panel"><summary>Тестовые сцены</summary>{([8,9,10] as const).map((chapter,i)=><button key={chapter} onClick={()=>{send({type:'replace',save:previewFinal(chapter)});go(`/play/${chapter}`);}}>Тест: начать {['восьмую','девятую','десятую'][i]} встречу</button>)}<button onClick={()=>{send({type:'replace',save:previewSeventh()});go('/play/7');}}>Тест: начать седьмую встречу</button><button onClick={previewSix}>Тест: начать шестую встречу</button>{ids.map(id=><button key={id} onClick={()=>{
    let story:StoryState={};
    if(id!=='c1.entry')story={approach:'help'};
    if(id==='c1.plan'||id.startsWith('c1.end'))story={...story,searchResult:'detour',catNoticed:true,pace:'quiet'};
    if(id.startsWith('c1.end'))story.plan=id.split('.').at(-1) as StoryState['plan'];
    if(id.startsWith('c2.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea'};
    if(id==='c2.umbrella'||id==='c2.end')story={...story,rainRoute:'shelter',catApproach:'wait'};
    if(id==='c2.end')story={...story,umbrella:'patched',eveningMood:'quiet'};
    if(id.startsWith('c3.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',eveningMood:'quiet'};
    if(['c3.kitchen','c3.debrief.feast','c3.debrief.chaos','c3.end'].includes(id))story={...story,controllerReaction:'absurd',teamName:'dumpling',kitchenStyle:'planner'};
    if(id.startsWith('c3.debrief')||id==='c3.end')story.kitchenResult=id==='c3.debrief.chaos'?'chaos':'feast';
    if(id==='c3.end')story.gameAftercare='team';
    if(id.startsWith('c4.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',eveningMood:'quiet',controllerReaction:'help',teamName:'calm',kitchenStyle:'planner',kitchenResult:'skipped',gameAftercare:'team'};
    if(['c4.stars','c4.bond','c4.end'].includes(id))story.bench='space';
    if(['c4.bond','c4.end'].includes(id))story.constellation='teapot';
    if(id==='c4.end')story={...story,bond:'friendly',wish:'calm'};
    if(id.startsWith('c5.'))story={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',eveningMood:'quiet',controllerReaction:'help',teamName:'calm',kitchenStyle:'planner',kitchenResult:'skipped',gameAftercare:'team',bench:'space',constellation:'teapot',bond:'friendly',wish:'calm'};
    if(id.startsWith('c5.ending.'))story.ending=id.split('.').at(-1) as StoryState['ending'];
    send({type:'dev-jump',nodeId:id,story});go(`/play/${id[1]}`);
  }}>{id}</button>)}</details>;
}
