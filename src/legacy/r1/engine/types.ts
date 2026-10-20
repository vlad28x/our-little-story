export type ChapterId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type EpisodeChapter=6|7|8|9|10;
export type QuestionId='s2.q6'|'s2.q7'|'s2.q8'|'s2.q9'|'s2.q10';
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
  c7PreviousStop?:RouteStop|'skipped'; c7Guide?:'angel'|'devil'|'none'; c7Thought?:'curious'|'playful'|'steady'; c7Distance?:'arm'|'near'|'space'; c7Note?:'saved'|'skipped'; c7Ending?:'open'|'promise'|'calm';
  c8Place?:'home'|'cafe'; c8Guide?:'angel'|'devil'|'none'; c8Thought?:'curious'|'bold'|'slow'; c8Word?:'minute'|'slow'|'taks'|'custom'|'none'; c8Dance?:'close'|'lead'|'playful'; c8Note?:'saved'|'skipped'; c8Approach?:'her'|'ask'|'none'; c8Ending?:'kiss'|'near'|'tea';
  c9Place?:'home'|'courtyard'; c9Guide?:'angel'|'devil'|'none'; c9Thought?:'curious'|'bold'|'slow'; c9Memory?:'place'|'idea'|'wait'|'none'; c9Note?:'saved'|'skipped'; c9Approach?:'her'|'ask'|'none'; c9Ending?:'kiss'|'hug'|'film';
  c10Place?:'home'|'terrace'; c10Guide?:'angel'|'devil'|'none'; c10Thought?:'curious'|'bold'|'slow'; c10Memory?:'pause'|'laugh'|'initiative'|'none'; c10Note?:'saved'|'skipped'; c10Move?:'home'|'stay'; c10Ending?:'goodnight'|'stay'|'private';
};
export type SetEffect = { [K in keyof StoryState]-?: {kind:'set';key:K;value:Exclude<StoryState[K],undefined>} }[keyof StoryState];
export type Condition = { [K in keyof StoryState]-?: {key:K;equals:Exclude<StoryState[K],undefined>} }[keyof StoryState]
  | {kind:'route-mode';equals:'own'|'shared'|'skipped'} | {kind:'route-stop';index:0|1;equals:RouteStop}
  | {kind:'route-includes';stop:RouteStop} | {kind:'all-sparks';chapter:EpisodeChapter} | {kind:'dessert-mode';equals:'completed'|'shared'|'skipped'} | {kind:'council-answer';slot:'topic';equals:TopicAnswer} | {kind:'council-answer';slot:'place';equals:PlaceAnswer} | {kind:'council-answer';slot:'tone';equals:ToneAnswer};
export type RouteStop = 'water'|'lights'|'window';
export type EveningRouteResult = {kind:'evening-route';mode:'own';stops:[RouteStop,RouteStop]} | {kind:'evening-route';mode:'shared';stops:['lights','water']} | {kind:'evening-route';mode:'skipped';stops:[]};
export type RouteDraft = {kind:'evening-route';phase:'select'|'suggestion';selected:RouteStop[]};
export type RouteAction = {kind:'toggle-stop';stop:RouteStop}|{kind:'reset'}|{kind:'show-suggestion'}|{kind:'back-to-select'};
export type TopicAnswer='question'|'challenge'|'ordinary';
export type PlaceAnswer='lead'|'invite'|'stay';
export type ToneAnswer='direct'|'playful'|'quiet';
export type CouncilPrefix=[]|[TopicAnswer]|[TopicAnswer,PlaceAnswer];
export type CouncilAnswers=CouncilPrefix|[TopicAnswer,PlaceAnswer,ToneAnswer];
export type CouncilDraft={kind:'between-lines';answers:CouncilAnswers;phase:'choose'|'reply'|'complete';lineIndex:number};
export type CouncilResult={kind:'between-lines';outcome:'completed';answers:[TopicAnswer,PlaceAnswer,ToneAnswer]}|{kind:'between-lines';outcome:'skipped';answers:CouncilPrefix};
export type CouncilAction={kind:'answer';answer:TopicAnswer|PlaceAnswer|ToneAnswer}|{kind:'next-line'};
export type DessertTopping='berry'|'chocolate'|'honey';
export type DessertMark='star'|'heart'|'swirl';
export type DessertDraft={kind:'dessert';topping:DessertTopping|null;mark:DessertMark|null};
export type DessertAction={kind:'set-topping';value:DessertTopping}|{kind:'set-mark';value:DessertMark}|{kind:'reset'};
export type DessertResult={kind:'dessert';mode:'completed';topping:DessertTopping;mark:DessertMark}|{kind:'dessert';mode:'shared';topping:'berry';mark:'star'}|{kind:'dessert';mode:'skipped';topping:null;mark:null};
export type MovieSeat='near'|'space';export type MovieLight='warm'|'dim';export type MovieDrink='tea'|'cocoa'|'water';
export type MovieSetupDraft={kind:'movie-setup';seat:MovieSeat|null;light:MovieLight|null;drink:MovieDrink|null};
export type MovieSetupAction={kind:'set-seat';value:MovieSeat}|{kind:'set-light';value:MovieLight}|{kind:'set-drink';value:MovieDrink}|{kind:'reset'};
export type MovieSetupResult={kind:'movie-setup';mode:'completed';seat:MovieSeat;light:MovieLight;drink:MovieDrink}|{kind:'movie-setup';mode:'shared';seat:'space';light:'warm';drink:'tea'}|{kind:'movie-setup';mode:'skipped';seat:null;light:null;drink:null};
export type EveningLight='warm'|'dim'|'unchanged';
export type EveningLightDraft={kind:'evening-light';level:EveningLight|null};
export type EveningLightAction={kind:'select';level:EveningLight}|{kind:'toggle'};
export type EveningLightResult={kind:'evening-light';level:EveningLight};
export type SparkId = 'c6.spark.voice'|'c6.spark.route'|'c6.spark.moment'|'c7.spark.voice'|'c7.spark.exchange'|'c7.spark.moment'|'c8.spark.plan'|'c8.spark.make'|'c8.spark.voice'|'c9.spark.plan'|'c9.spark.scene'|'c9.spark.memory'|'c10.spark.plan'|'c10.spark.memory'|'c10.spark.light';
export type BonusId = 'c6.bonus.angel'|'c6.bonus.devil'|'c6.bonus.none'|'c7.bonus.angel'|'c7.bonus.devil'|'c7.bonus.none'|'c8.bonus.angel'|'c8.bonus.devil'|'c8.bonus.none'|'c9.bonus.angel'|'c9.bonus.devil'|'c9.bonus.none'|'c10.bonus.angel'|'c10.bonus.devil'|'c10.bonus.none';
export type EpisodeProgress = {sparks:SparkId[];bonus?:BonusId};
export type Effect = SetEffect|{kind:'spark';id:SparkId}|{kind:'open-bonus'};
export type Line = {speaker:Speaker;text:string;emotion?:Emotion};
export type Scene = {background:string;character:string;variants?:{when:Condition[];background:string;character:string}[]};
export type Choice = {id:string;text:string;next:NodeId;effects?:Effect[];when?:Condition[]};
export type StoryNode =
  | {id:NodeId;kind:'dialogue';scene:Scene;lines:Line[];next:NodeId}
  | {id:NodeId;kind:'choice';scene:Scene;choices:Choice[];prompt?:string}
  | {id:NodeId;kind:'route';cases:{all:Condition[];next:NodeId}[];fallback:NodeId}
  | {id:NodeId;kind:'minigame';scene:Scene;game:'token-search'|'umbrella-patch'|'kitchen'|'constellation'|'memories'|'evening-route'|'between-lines'|'dessert'|'movie-setup'|'evening-light';next:NodeId}
  | {id:NodeId;kind:'note';scene:Scene;questionId:QuestionId;prompt:string;maxCodePoints:280;next:NodeId}
  | {id:NodeId;kind:'label';scene:Scene;labelId:'s2.word8';maxCodePoints:24;next:NodeId}
  | {id:NodeId;kind:'end';endingId:CardId;cardId:CardId};
export type Chapter = {id:ChapterId;contentVersion:number;title:string;entry:NodeId;nodes:Record<NodeId,StoryNode>};
export type CardId = 'c1.tea'|'c1.banter'|'c1.coop'|'c2.shelter'|'c2.arcade'|'c3.dinner'|'c4.adventure'|'c4.calm'|'c5.romantic'|'c5.comic'|'c5.gaming'|'c5.friendly'|'c6.hand'|'c6.lap'|'c6.home'|'c7.open'|'c7.promise'|'c7.calm'|'c8.kiss'|'c8.near'|'c8.tea'|'c9.kiss'|'c9.hug'|'c9.film'|'c10.goodnight'|'c10.stay'|'c10.private';
export type SearchResult = {kind:'token-search';outcome:'tidy'|'detour'|'skipped';catNoticed:boolean};
export type UmbrellaResult = {kind:'umbrella-patch';outcome:'patched'|'borrowed'|'skipped'};
export type KitchenResult = {kind:'kitchen';outcome:'feast'|'snack'|'chaos'|'skipped';served:number;mode:'timed'|'calm'};
export type ConstellationResult = {kind:'constellation';outcome:'cat'|'controllers'|'teapot';usedPreset:boolean};
export type MemoriesResult = {kind:'memories';outcome:'viewed'|'skipped'};
export type GameResult = SearchResult|UmbrellaResult|KitchenResult|ConstellationResult|MemoriesResult|EveningRouteResult|CouncilResult|DessertResult|MovieSetupResult|EveningLightResult;
export type Run = {chapter:ChapterId;nodeId:NodeId;lineIndex:number;turn:number;story:StoryState;results:{'token-search'?:SearchResult;'umbrella-patch'?:UmbrellaResult;'kitchen'?:KitchenResult;'constellation'?:ConstellationResult;'memories'?:MemoriesResult;'evening-route'?:EveningRouteResult;'between-lines'?:CouncilResult;'dessert'?:DessertResult;'movie-setup'?:MovieSetupResult;'evening-light'?:EveningLightResult};earned:string[];attemptId?:string;episode?:EpisodeProgress;activity?:RouteDraft|CouncilDraft|DessertDraft|MovieSetupDraft|EveningLightDraft};
export type Command = {kind:'advance';expectedTurn:number}|{kind:'choose';choiceId:string;expectedTurn:number}|{kind:'game-result';result:GameResult;expectedTurn:number}|{kind:'game-action';game:'evening-route';action:RouteAction;expectedTurn:number}|{kind:'game-action';game:'between-lines';action:CouncilAction;expectedTurn:number}|{kind:'game-action';game:'dessert';action:DessertAction;expectedTurn:number}|{kind:'game-action';game:'movie-setup';action:MovieSetupAction;expectedTurn:number}|{kind:'game-action';game:'evening-light';action:EveningLightAction;expectedTurn:number}|{kind:'label-result';status:'saved'|'skipped';expectedTurn:number}|{kind:'note-result';status:'saved'|'skipped';expectedTurn:number};
export type StepResult = {kind:'ready';run:Run}|{kind:'complete';run:Run;endingId:CardId;cardId:CardId}|{kind:'rejected';reason:string};
