# Арт главы 6 — происхождение и промпты

19 октября 2026. Режим: встроенный Imagegen, три независимых вызова. Художественные референсы — только уже согласованные игровые WebP, без личных фотографий и переписок. Генерации визуально проверены: кудри/глаза/лицо узнаваемы, ангел и дьяволёнок сохраняют взрослый chibi-образ; витрина соответствует тёплой осенней набережной.

| Готовый файл в проекте | Размер | Объём | Назначение |
|---|---|---|---|
| public/assets/characters/advisers/angel.webp | 384×576, alpha | 66 182 байта | Ангел, кремово-золотой костюм, нимб и крылья |
| public/assets/characters/advisers/devil.webp | 384×576, alpha | 57 156 байт | Дьяволёнок, вишнёвые акценты и конверт |
| public/assets/backgrounds/shop-window-evening.webp | 1000×1333 | 352 982 байта | Витрина керамики и кот в галстуке |

Все final-файлы скопированы/экспортированы в workspace; runtime не зависит от домашней папки генератора. Исходные PNG генератора оставлены на месте; конвертация ограничена уменьшением размера и WebP-сжатием с сохранением alpha, без перерисовки содержания. Слова «Перерыв» — отдельный HTML-слой ShopBreakSign, привязанный к геометрии фона; не сгенерированный текст. Карта, точки маршрута, искры и конверт в интерфейсе — собственная векторная/HTML-графика проекта.

Уточнение показа по просьбе автора: советчики в сцене увеличены, прежний desktop-предел125×188px снят. Высота пары определяется доступной высотой сцены (до360px), пропорции2:3 сохраняются. На телефоне сцена с советчиками не ниже250px; нимб остаётся ниже подписи локации, ноги — выше панели диалога. Маленькие портреты тизера/конверта не менялись. Проверены320×568,390×844,960×900 и785×600 в изолированном браузере.

## Ангел — точный промпт

Reference: public/assets/characters/vlad/city-smile.webp. transparent_background=true.

> Use case: identity-preserve / illustration-story. Project game sprite variant. Reference is the approved adult Vlad chibi character; retain his exact face, grey green eyes, expressive dark eyebrows, voluminous light chestnut curly hair, warm outlined watercolor anime style and recognizable adult masculine identity. Create ONE small ANGEL adviser sprite, front three-quarter view, full body fully inside frame, transparent background. Same adult character in a cream tunic with gold piping, two small feather wings, modest thin golden halo above curls, warm clever smile, relaxed open-hand gesture. Adult stylized chibi with large head but adult expression and slim body, not a child. Compact readable silhouette for a 100px-tall in-game adviser. Crisp clean transparent edges, no ground, no text, no card, no decorative frame. Keep all hair, halo and wings visible with transparent margins.

## Дьяволёнок — точный промпт

Reference: public/assets/characters/vlad/city-smile.webp. transparent_background=true.

> Use case: identity-preserve / illustration-story. Project game sprite variant. Reference is the approved adult Vlad chibi character; retain his exact face, grey green eyes, expressive dark eyebrows, voluminous light chestnut curly hair, warm outlined watercolor anime style and recognizable adult masculine identity. Create ONE small DEVIL adviser sprite, front three-quarter view, full body fully inside frame, transparent background. Same adult character wearing a dark plum outfit with burgundy waistcoat, two tiny tasteful burgundy horns peeking above curls, small batlike wings, a short curved arrow tail, amused confident mischievous smile, one hand holding a small cream sealed envelope. Charming, friendly playful, not sinister. Adult stylized chibi with large head but adult expression and slim body, not a child. Compact readable silhouette for a 100px-tall in-game adviser. Crisp clean transparent edges, no ground, no text, no card, no decorative frame. Keep hair, horns and wings visible with transparent margins.

## Витрина — точный промпт

Reference: public/assets/backgrounds/river-evening.webp. transparent_background=false.

> Use case: illustration-story. New visual-novel background matching the exact warm detailed storybook watercolor anime illustration style and autumn evening palette of the reference. Portrait 3:4 composition, no human characters. A cozy closed little ceramics-shop window on a riverside pedestrian street at blue hour. Dark plum twilight, warm amber window lighting, carved wood frame, warm brick and a few golden autumn leaves; subtle reflections of riverside lamps. A charming CREAM CERAMIC CAT wearing a tiny necktie sits in the lower-left part of the lit shop window; clearly a pottery figurine, not a real cat. A little blank hanging cream sign near cat, absolutely no lettering (game adds text). Ceramic cups and tiny plants inside, tasteful detail, open walking foreground, right half less busy for composited Vlad character. Consistent perspective, cozy calm romantic mood, no UI, no text, no watermark, no other people.
