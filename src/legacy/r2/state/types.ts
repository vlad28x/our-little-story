import type { MemoryId, SecretId, CardId, ChapterId, EpisodeProgress, Run, StoryState, EpisodeChapter,QuestionId } from '../engine/types';
export type Settings = {sound:boolean;volume:number;textMode:'instant'|'type';motion:'system'|'reduced'|'full'};
export type ChapterRecord = {scriptRevision?:2;endingId:CardId;cardId:CardId;story:StoryState;results:Run['results'];attemptId?:string;episode?:EpisodeProgress};
export type CardRecord = {id:CardId;chapter:ChapterId;endingId:CardId;variant:'tidy'|'detour'|'skipped'|'patched'|'borrowed'|'feast'|'snack'|'chaos'|'cat'|'controllers'|'teapot'|'adventure'|'calm'|'evening'|'morning';captionId:string;teamName?:NonNullable<StoryState['teamName']>;usedPreset?:boolean;venue?:'home'|'cafe'|'courtyard'|'terrace'};
export type NoteChapter=EpisodeChapter;
export type PrivateWord={chapter:8;labelId:'s2.word8';attemptId:string;status:'saved'|'deleted';text:string};
export type PrivateWords={campaign?:PrivateWord;trial?:PrivateWord};
export type LocalNote={chapter:NoteChapter;questionId:QuestionId;attemptId:string;status:'saved'|'deleted';text:string};
export type SaveV1 = {
  appId:'five-meetings';schemaVersion:1;contentVersion:11;revision:number;updatedAt:string;
  settings:Settings;unlocked:ChapterId[];
  campaign:{completed:ChapterId[];startStates:Partial<Record<ChapterId,StoryState>>;records:Partial<Record<ChapterId,ChapterRecord>>;active:Run|null};
  trial:{chapter:ChapterId;run:Run}|null;
  lastResult:{chapter:ChapterId;cardId:CardId;source:'campaign'|'trial';episodeRecord?:ChapterRecord}|null;
  collection:{cards:CardRecord[];achievements:string[];memories:MemoryId[];secrets:SecretId[]};
  privateWords:PrivateWords;privateNotes:Partial<Record<NoteChapter,{campaign?:LocalNote;trial?:LocalNote}>>;localNoteRevision:number;
  continuation:'game'|'movie'|'cafe'|'walk'|'decline'|'public'|'chat'|'later'|null;
};
