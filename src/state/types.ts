import type { BonusId, CardId, ChapterId, EpisodeProgress, Run, StoryState } from '../engine/types';
export type Settings = {sound:boolean;volume:number;textMode:'instant'|'type';motion:'system'|'reduced'|'full'};
export type ChapterRecord = {endingId:CardId;cardId:CardId;story:StoryState;results:Run['results'];attemptId?:string;episode?:EpisodeProgress};
export type CardRecord = {id:CardId;chapter:ChapterId;endingId:CardId;variant:'tidy'|'detour'|'skipped'|'patched'|'borrowed'|'feast'|'snack'|'chaos'|'cat'|'controllers'|'teapot'|'adventure'|'calm'|'evening';captionId:string;teamName?:NonNullable<StoryState['teamName']>;usedPreset?:boolean};
export type LocalNote={chapter:6;questionId:'s2.q6';attemptId:string;status:'saved'|'deleted';text:string};
export type SaveV1 = {
  appId:'five-meetings';schemaVersion:1;contentVersion:6;revision:number;updatedAt:string;
  settings:Settings;unlocked:ChapterId[];
  campaign:{completed:ChapterId[];startStates:Partial<Record<ChapterId,StoryState>>;records:Partial<Record<ChapterId,ChapterRecord>>;active:Run|null};
  trial:{chapter:ChapterId;run:Run}|null;
  lastResult:{chapter:ChapterId;cardId:CardId;source:'campaign'|'trial';episodeRecord?:ChapterRecord}|null;
  collection:{cards:CardRecord[];achievements:string[];bonuses:BonusId[]};
  privateNotes:{campaign?:LocalNote;trial?:LocalNote};localNoteRevision:number;
  continuation:'game'|'movie'|'cafe'|'walk'|'decline'|'public'|'chat'|'later'|null;
};
