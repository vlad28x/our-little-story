import type { Emotion } from '../engine/types';

const backgrounds: Readonly<Record<string, string>> = {
  'bg.cafe.approach': 'bg.chapter1.gouache.approach',
  'bg.cafe.entry': 'bg.chapter1.gouache.entry',
  'bg.cafe.window': 'bg.chapter1.gouache.window',
  'bg.rain.awning': 'bg.season1.gouache.rain-awning',
  'bg.rain.arcade': 'bg.season1.gouache.rain-arcade',
  'bg.river.evening': 'bg.season1.gouache.river-evening',
  'bg.home.living': 'bg.season1.gouache.home-living',
  'bg.cafe.sunset': 'bg.season1.gouache.cafe-sunset',
  'bg.cafe.exterior': 'bg.season1.gouache.cafe-exterior-evening',
};

export const firstSeasonCat = 'cat.chapter1.gouache';
export const firstSeasonNina = 'nina.chapter1.gouache';

const apronExpressions: Partial<Record<Emotion, string>> = {
  awkward: 'vlad.apron.awkward',
  thinking: 'vlad.apron.thinking',
  surprised: 'vlad.apron.surprised',
  laugh: 'vlad.apron.laugh',
};

export function apronVlad(emotion: Emotion) {
  return apronExpressions[emotion] ?? 'vlad.supper8.gouache.apron';
}

export function firstSeasonBackground(background: string) {
  return backgrounds[background] ?? background;
}

export function firstSeasonVlad(background: string, emotion: Emotion) {
  if (background === 'bg.home.living') {
    if (emotion === 'laugh') return 'vlad.supper8.gouache.laugh';
    if (emotion === 'awkward' || emotion === 'thinking' || emotion === 'surprised') return 'vlad.season1.gouache.home.awkward';
    return 'vlad.supper8.gouache.smile';
  }
  if (background === 'bg.cafe.sunset' || background === 'bg.cafe.exterior') {
    const pose = emotion === 'laugh' ? 'laugh' : emotion === 'awkward' || emotion === 'surprised' || emotion === 'thinking' ? 'awkward' : 'smile';
    return `vlad.season1.gouache.elegant.${pose}`;
  }
  return `vlad.chapter1.gouache.${emotion === 'warm' ? 'smile' : emotion}`;
}
