import { getChapter } from '../content/chapters';
import { chapters } from '../content/chapters/manifest';
import type { ChapterId } from '../engine/types';
import { completedGallery, completedSupper, completedWalk } from '../persistence/photoSix';
import { completedCourtyard } from '../persistence/travellers';
import type { SaveV1 } from './types';

function chapterRequirement(save: SaveV1, id: ChapterId) {
  if (!getChapter(id) || !chapters.some(chapter => chapter.id === id && chapter.available)) return 'unavailable';
  if (chapters.some(chapter => chapter.id < id && !save.campaign.completed.includes(chapter.id))) return 'previous';
  const previous = save.campaign.records[(id - 1) as ChapterId]?.story;
  if (id === 7 && !completedWalk(previous)) return 'walk';
  if ((id === 8 && !completedGallery(previous)) ||
      (id === 9 && !completedSupper(previous)) ||
      (id === 10 && !completedCourtyard(previous))) return 'previous';
  if (!save.unlocked.includes(id)) return 'code';
  return null;
}

export function canStart(save: SaveV1, id: ChapterId) {
  return chapterRequirement(save, id) === null;
}

export function chapterAction(save: SaveV1, id: ChapterId) {
  const requirement = chapterRequirement(save, id);
  if (requirement) return requirement;
  if (save.campaign.active?.chapter === id) return 'resume';
  if (save.campaign.completed.includes(id)) return 'result';
  return save.campaign.active ? 'busy' : 'start';
}

export function canOpenChapter(action: ReturnType<typeof chapterAction>) {
  return action === 'start' || action === 'resume' || action === 'result';
}
