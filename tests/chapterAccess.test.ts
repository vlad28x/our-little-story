import { describe, expect, it } from 'vitest';
import type { ChapterId } from '../src/engine/types';
import { canOpenChapter, canStart, chapterAction } from '../src/state/chapterAccess';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { finishCourtyard } from './courtyard9Helpers';
import { finishGallery } from './gallery7Helpers';
import { completeSave } from './helpers';
import { finishPhotoSix } from './photo6Helpers';
import { finishSupper } from './supperHelpers';

describe('chapterAccess', () => {
  it('handles start, resume, code, previous, result, busy and unavailable states', () => {
    const fresh = initialState();
    expect(chapterAction(fresh, 1)).toBe('start');
    expect(canStart(fresh, 1)).toBe(true);
    expect(canOpenChapter('start')).toBe(true);
    expect(chapterAction(fresh, 2)).toBe('previous');
    expect(canStart(fresh, 2)).toBe(false);
    expect(canOpenChapter('previous')).toBe(false);
    expect(chapterAction(fresh, 11 as ChapterId)).toBe('unavailable');
    expect(canOpenChapter('unavailable')).toBe(false);

    const active1 = reduceSave(fresh, { type: 'start', chapter: 1 });
    expect(chapterAction(active1, 1)).toBe('resume');
    expect(canOpenChapter('resume')).toBe(true);

    const done1 = completeSave();
    expect(chapterAction(done1, 1)).toBe('result');
    expect(canOpenChapter('result')).toBe(true);
    expect(chapterAction(done1, 2)).toBe('code');
    expect(canStart(done1, 2)).toBe(false);
    expect(canOpenChapter('code')).toBe(false);

    const unlocked2 = { ...done1, unlocked: [1, 2] as ChapterId[] };
    expect(chapterAction(unlocked2, 2)).toBe('start');

    const busy = { ...unlocked2, campaign: { ...unlocked2.campaign, active: active1.campaign.active } };
    expect(chapterAction(busy, 2)).toBe('busy');
    expect(canStart(busy, 2)).toBe(true);
    expect(canOpenChapter('busy')).toBe(false);
  });

  it('requires completed season-two prerequisites before opening the next chapter', () => {
    const six = finishPhotoSix();
    six.unlocked = [1, 2, 3, 4, 5, 6, 7];
    expect(chapterAction(six, 7)).toBe('start');

    const incompleteWalk = structuredClone(six);
    delete incompleteWalk.campaign.records[6]!.story.c6Film;
    expect(chapterAction(incompleteWalk, 7)).toBe('walk');
    expect(canOpenChapter('walk')).toBe(false);

    const seven = finishGallery(six);
    seven.unlocked = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(chapterAction(seven, 8)).toBe('start');
    const incompleteGallery = structuredClone(seven);
    delete incompleteGallery.campaign.records[7]!.story.c7Film;
    expect(chapterAction(incompleteGallery, 8)).toBe('previous');

    const eight = finishSupper(seven);
    eight.unlocked = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(chapterAction(eight, 9)).toBe('start');
    const incompleteSupper = structuredClone(eight);
    delete incompleteSupper.campaign.records[8]!.story.c8Film;
    expect(chapterAction(incompleteSupper, 9)).toBe('previous');

    const nine = finishCourtyard(eight);
    nine.unlocked = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(chapterAction(nine, 10)).toBe('start');
    const incompleteCourtyard = structuredClone(nine);
    delete incompleteCourtyard.campaign.records[9]!.story.c9Film;
    expect(chapterAction(incompleteCourtyard, 10)).toBe('previous');
  });
});
