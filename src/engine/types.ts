export type ChapterId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NodeId = `c${ChapterId}.${string}`;
export type Emotion = 'neutral'|'smile'|'awkward'|'thinking'|'laugh'|'warm'|'surprised';
export type Speaker = 'narrator'|'vlad'|'heroine'|'nina'|'angel'|'devil'|'heroine-thought'|'vlad-thought';
export type StoryState = {
  approach?: 'joke'|'help'|'space'; searchResult?: 'tidy'|'detour'|'skipped'; catNoticed?: boolean;
  pace?: 'quiet'|'playful'|'flirt'; plan?: 'tea'|'banter'|'coop';
  rainRoute?: 'shelter'|'arcade'; catApproach?: 'wait'|'help'; umbrella?: 'patched'|'borrowed'|'skipped'; eveningMood?: 'quiet'|'playful';
  controllerReaction?: 'tease'|'help'|'absurd'; teamName?: 'dumpling'|'calm'|'accident'; kitchenStyle?: 'planner'|'improv'; kitchenResult?: 'feast'|'snack'|'chaos'|'skipped'; gameAftercare?: 'team'|'rematch';
  bench?: 'near'|'space'; constellation?: 'cat'|'controllers'|'teapot'; bond?: 'romantic'|'friendly'|'undecided'; wish?: 'adventure'|'calm'; ending?: 'romantic'|'comic'|'gaming'|'friendly';
  c6Guide?: 'angel'|'devil'|'none'; c6Thought?: 'linger'|'tease'|'quiet'; c6Voice?: 'stay'|'tease'|'quiet';
  c6Contact?: 'her'|'asked'|'none'; c6Note?: 'saved'|'skipped'; c6Ending?: 'hand'|'lap'|'home';
};
export type SetEffect = { [K in keyof StoryState]-?: {kind:'set';key:K;value:Exclude<StoryState[K],undefined>} }[keyof StoryState];
export type Condition = { [K in keyof StoryState]-?: {key:K;equals:Exclude<StoryState[K],undefined>} }[keyof StoryState]
  | {kind:'route-mode';equals:'own'|'shared'|'skipped'} | {kind:'route-stop';index:0|1;equals:RouteStop}
  | {kind:'route-includes';stop:RouteStop} | {kind:'all-sparks';chapter:6};
export type RouteStop = 'water'|'lights'|'window';
export type EveningRouteResult = {kind:'evening-route';mode:'own';stops:[RouteStop,RouteStop]} | {kind:'evening-route';mode:'shared';stops:['lights','water']} | {kind:'evening-route';mode:'skipped';stops:[]};
export type RouteDraft = {kind:'evening-route';phase:'select'|'suggestion';selected:RouteStop[]};
export type RouteAction = {kind:'toggle-stop';stop:RouteStop}|{kind:'reset'}|{kind:'show-suggestion'}|{kind:'back-to-select'};
export type SparkId = 'c6.spark.voice'|'c6.spark.route'|'c6.spark.moment';
export type BonusId = 'c6.bonus.angel'|'c6.bonus.devil'|'c6.bonus.none';
export type EpisodeProgress = {sparks:SparkId[];bonus?:BonusId};
export type Effect = SetEffect|{kind:'spark';id:SparkId}|{kind:'open-bonus'};
export type Line = {speaker:Speaker;text:string;emotion?:Emotion};
export type Scene = {background:string;character:string};
export type Choice = {id:string;text:string;next:NodeId;effects?:Effect[];when?:Condition[]};
export type StoryNode =
  | {id:NodeId;kind:'dialogue';scene:Scene;lines:Line[];next:NodeId}
  | {id:NodeId;kind:'choice';scene:Scene;choices:Choice[];prompt?:string}
  | {id:NodeId;kind:'route';cases:{all:Condition[];next:NodeId}[];fallback:NodeId}
  | {id:NodeId;kind:'minigame';scene:Scene;game:'token-search'|'umbrella-patch'|'kitchen'|'constellation'|'memories'|'evening-route';next:NodeId}
  | {id:NodeId;kind:'note';scene:Scene;questionId:'s2.q6';prompt:string;maxCodePoints:280;next:NodeId}
  | {id:NodeId;kind:'end';endingId:CardId;cardId:CardId};
export type Chapter = {id:ChapterId;contentVersion:number;title:string;entry:NodeId;nodes:Record<NodeId,StoryNode>};
export type CardId = 'c1.tea'|'c1.banter'|'c1.coop'|'c2.shelter'|'c2.arcade'|'c3.dinner'|'c4.adventure'|'c4.calm'|'c5.romantic'|'c5.comic'|'c5.gaming'|'c5.friendly'|'c6.hand'|'c6.lap'|'c6.home';
export type SearchResult = {kind:'token-search';outcome:'tidy'|'detour'|'skipped';catNoticed:boolean};
export type UmbrellaResult = {kind:'umbrella-patch';outcome:'patched'|'borrowed'|'skipped'};
export type KitchenResult = {kind:'kitchen';outcome:'feast'|'snack'|'chaos'|'skipped';served:number;mode:'timed'|'calm'};
export type ConstellationResult = {kind:'constellation';outcome:'cat'|'controllers'|'teapot';usedPreset:boolean};
export type MemoriesResult = {kind:'memories';outcome:'viewed'|'skipped'};
export type GameResult = SearchResult|UmbrellaResult|KitchenResult|ConstellationResult|MemoriesResult|EveningRouteResult;
export type Run = {chapter:ChapterId;nodeId:NodeId;lineIndex:number;turn:number;story:StoryState;results:{'token-search'?:SearchResult;'umbrella-patch'?:UmbrellaResult;'kitchen'?:KitchenResult;'constellation'?:ConstellationResult;'memories'?:MemoriesResult;'evening-route'?:EveningRouteResult};earned:string[];attemptId?:string;episode?:EpisodeProgress;activity?:RouteDraft};
export type Command = {kind:'advance';expectedTurn:number}|{kind:'choose';choiceId:string;expectedTurn:number}|{kind:'game-result';result:GameResult;expectedTurn:number}|{kind:'game-action';game:'evening-route';action:RouteAction;expectedTurn:number}|{kind:'note-result';status:'saved'|'skipped';expectedTurn:number};
export type StepResult = {kind:'ready';run:Run}|{kind:'complete';run:Run;endingId:CardId;cardId:CardId}|{kind:'rejected';reason:string};
