# Первая встреча в палитре «Гуашь»

Проба от 24 ноября 2026 года по [визуальному ТЗ](../ART_DIRECTION.md). Три фона созданы встроенным ImageGen по существующим иллюстрациям «Паузы» и гуашевой кухне восьмой главы. Все три экспортированы в WebP, 1086 × 1448.

| Сцена | Игровой фон |
| --- | --- |
| Дневной пролог у входа | [Витрина «Паузы»](../../public/assets/backgrounds/chapter1-gouache/cafe-approach-day.webp) |
| Знакомство и поиск жетонов | [Вход изнутри](../../public/assets/backgrounds/chapter1-gouache/cafe-entry.webp) |
| Беседа у окна и открытки первой встречи | [Место у окна](../../public/assets/backgrounds/chapter1-gouache/cafe-window.webp) |

Кремовый фон диалога, пыльно-сливовые акценты и шалфейный цвет осмотренных предметов применяются к первой главе. Цвет существующих спрайтов в кадре смягчён CSS. Узлы, реплики и варианты выбора указаны в [сценарии главы](../CHAPTER_01_SCRIPT.md).

## Промпт

Первый референс для каждого изображения — одноимённый прежний фон из `public/assets/backgrounds/`. Второй — [гуашевая кухня](../../public/assets/backgrounds/supper8-kitchen-gouache.webp). В каждом запросе абзац с описанием сцены вставлялся между общим описанием и заключительными ограничениями.

### Общее описание

```text
Use case: style-transfer / precise color and paint finish pass on an existing visual novel background. Reference 1 is the exact source scene and geometry. Reference 2 is for the project's new matte digital gouache palette and brushwork only, not its objects, room shape, window shape, or time of day. Restyle reference 1 with controlled matte gouache over subtle pencil, broad softly blended paint, restrained detail, creamy highlights, muted plum, stone mauve, dusty sage and honey-colored light. Keep reference 1's 3:4 portrait framing, camera position and angle, geometry, relative scale and original renderable furniture and prop positions, and the exact amount of visible floor. This is a drop-in scene layer behind character and choices.
```

### Дневной пролог

```text
Keep the exact existing exterior of cafe «Пауза», arched window taking up the left, right-hand entrance and its street-facing awning and oval sign, planters, pavement and daytime view down the street. Preserve the exact readable Cyrillic word «Пауза» on the existing oval sign. Muted plum fabric awning, warm chalk cream trim, dusty-taupe pink stucco, sage-green ivy with honey ochre tips, softened pale-blue autumn sky. It must remain a daytime scene.
```

### Вход изнутри

```text
Keep every element of the existing entry interior and framing. Glazed door and bright street on the left, small pink mat by the threshold, the counter in the center depth, plant in the left foreground, the chair and table on the right, empty wooden floor beneath the future character. Cream paint, dusty plum-rose wall and rug, deep desaturated sage cabinetry, matte aged brass and honey-colored window light. Keep original light direction and bright autumn afternoon.
```

### Место у окна

```text
Keep every element of the existing window seating interior and framing. Tall arched left window, table and two chairs in the left foreground, open floor and mauve plaster wall in center-right, shelf and plants above, edge of counter at right, outside autumn street. Warm cream joinery and porcelain, matte plum and dusty rose wall and floor accents, quiet sage plants, amber light, cool muted blue-mauve quiet shadows. Its warmth and light direction should match the existing afternoon scene.
```

### Заключительные ограничения

```text
No characters or cats, no extra objects, no vignette, no UI or watermarks. No new text. Large calm color masses, the daylight still feels welcoming. Render one 3:4 portrait image filling the frame.
```
## Полная художественная проба первой встречи

Персонажи и реквизит собраны с теми же фонами. Владу взяли внешность из гуашевой восьмой главы, пальто и шарф из городского образа. Для Нины и Пончика референсами стали их прежние иллюстрации. Все спрайты созданы встроенным ImageGen и сохранены в WebP с альфа-каналом. Шесть выражений Влада опираются на один базовый кадр. Нина занимает тот же слой говорящего персонажа, а Пончик — слой кота в сцене, поиске и открытках.

| Рисунок | Игровой файл | Исходный PNG |
| --- | --- | --- |
| Базовый кадр Влада | Референс выражений | `exec-7a021d03-239e-42d6-9914-84551e4d07c2.png` |
| Нина | [nina.webp](../../public/assets/characters/chapter1-gouache/nina.webp) | `exec-156fae7e-a20f-40ee-9f09-be62841c5a51.png` |
| Пончик | [cat.webp](../../outputs/art/previous-assets/characters/chapter1-gouache/cat.webp) | `exec-9c3357c1-84d6-414b-8667-81f2ad9d2034.png` |
| Влад · нейтральное выражение | [vlad-neutral.webp](../../outputs/art/previous-assets/characters/chapter1-gouache/vlad-neutral.webp) | `exec-48d5c7a3-f811-4c57-85d5-2454ceca2fca.png` |
| Влад · улыбка | [vlad-smile.webp](../../outputs/art/previous-assets/characters/chapter1-gouache/vlad-smile.webp) | `exec-23efe10d-4027-4696-b8f4-c4ab1375990f.png` |
| Влад · неловкость | [vlad-awkward.webp](../../outputs/art/previous-assets/characters/chapter1-gouache/vlad-awkward.webp) | `exec-0ab1d027-d689-49f8-a4b7-f4f0c740a7a6.png` |
| Влад · задумался | [vlad-thinking.webp](../../outputs/art/previous-assets/characters/chapter1-gouache/vlad-thinking.webp) | `exec-25940943-cf18-47bb-b9c0-780760e51829.png` |
| Влад · смех | [vlad-laugh.webp](../../outputs/art/previous-assets/characters/chapter1-gouache/vlad-laugh.webp) | `exec-f7bca2f0-fa9a-4796-9324-7a4e2093e89b.png` |
| Влад · удивление | [vlad-surprised.webp](../../outputs/art/previous-assets/characters/chapter1-gouache/vlad-surprised.webp) | `exec-578ee667-476b-4455-96b2-d222f7e86c29.png` |

Сумку, коврик, листок, стакан, зонтик, жетон, шарф, чашку и анимацию завитка перерисовали как [SVG-компонент первой встречи](../../src/ui/Illustration.tsx). Нашивка и остальные общие предметы других глав берутся из их существующих иллюстраций.

### Промпты базовых персонажей

Общий референс света — [новый вход в кафе](../../public/assets/backgrounds/chapter1-gouache/cafe-entry.webp). Референсы Влада — [гуашевый Влад из восьмой](../../outputs/art/previous-assets/characters/vlad/supper8-gouache-smile.webp) и [прежний городской костюм](../../public/assets/characters/vlad/city-smile.webp). Для Нины и Пончика приложены [прежняя Нина](../../public/assets/characters/nina.webp) и [прежний Пончик](../../public/assets/characters/cat.webp) соответственно.

**Влад · нейтральное выражение.**

```text
Use case: identity-preserve. Make a full-body transparent 2:3 sprite of the exact same recognizable 26-year-old adult Vlad as in reference 1 (keep his adult proportions 5.5–6 heads tall, loose light-brown curls, thick brows, gray-green eyes and soft oval face). Reference 2 is for wardrobe only. Put him in his existing city wardrobe: warm charcoal-taupe knee-length wool coat, soft gray wool scarf around the neck, cream tee underneath, charcoal trousers, brown lace-up leather shoes. Pose like reference 1, comfortable, one hand in a coat pocket, the other resting loosely, weight subtly to one side. Neutral expression, soft attentive eyes and relaxed closed lips, facing the viewer. Matte digital gouache over pencil, restrained clean brushwork, gently lit by cream honey late afternoon on viewer left, from ref 3, little lilac warmth in shadow. Keep natural adult face and recognizable hair. Head close to canvas top, both shoes a little above bottom, centered with clear transparent sides. Genuine transparent alpha, no background, no glow, no hanging shadow, no furniture, no props, no text.
```

**Нина.**

```text
Use case: identity-preserve. Repaint reference 1, Nina the adult owner of a small café, as one character sprite in the matte digital gouache and subtle pencil of reference 2; reference 3 only for warm daylight from image left. Nina remains unmistakably the same adult woman: brown eyes and loose short dark brown bob, cream blouse with rolled sleeves, sage apron, a little pearl-colored earring, cloth in her hands and a reserved, wry friendly smile, practical and mature. The same three-quarter body direction, gesture, waist-up composition, head at the top and crop at upper hips on bottom. Face naturally stylized like the young adult illustrated style of reference 2, clean gouache shapes, soft lived-in color and restrained edge definition. Entire head in frame, both shoulders and hands included. Transparent sprite RGBA, no shadows or glow around the body, no background or words.
```

**Пончик.**

```text
Use case: identity-preserve. Repaint the exact recognizable cream-and-honey tabby cat Ponchik in reference 1 as a single game sprite. Preserve his compact relaxed bread-loaf pose, cream chest and front paws, ginger stripes, half-closed eyes, one clearly folded tip on his right ear (right side of the image), slightly amused expression, body oriented right with face softly turned to front. Keep all feet and tail visible, compact silhouette filling the central square image with narrow transparent margin. Matte hand-painted digital gouache with subtly broken colored pencil at a few edges, simplified warm painted fur brush groups, daylight on image left inspired by reference 2. True transparent RGBA background with flat clean alpha everywhere beyond the cat, no backdrop, no halo and no shadow, no props or text.
```

### Промпт выражений Влада

```text
Use case: identity-preserve and precision alpha cleanup for an existing visual novel sprite. Edit this exact full-body adult man, reference 1, with unchanged camera, pose, hair, anatomy, clothing folds, proportions, hands, shoes, palette, material, and 1024×1536 2:3 placement. Change ONLY the facial expression as specified for the variant. Preserve the small distinctive details and brushwork of the reference. For outside the character silhouette, entirely remove the diffuse autumn halo and any soft ground shadow visible in reference 1. Export an isolated, crisply cut-out true transparency RGBA sticker/sprite, transparent at alpha 0 immediately outside real hair filaments and clothing edges. Preserve actual interior hue and soft shading. No off-body glow, no vignette, no ground or backlight outside the silhouette, no checkerboard, no added objects or text. Same placement of head, shoes and all clothing; avoid shortening or moving the figure.
```

- **Влад · нейтральное выражение** — A quiet attentive neutral look with relaxed brows and lips gently closed. Preserve the friendly character.
- **Влад · улыбка** — A small natural crooked smile, softened eyes. Mouth gently closed.
- **Влад · неловкость** — A slightly awkward closed-lip smile, one eyebrow just a little higher, a trace of embarrassment without exaggeration.
- **Влад · задумался** — Attentive, thinking, one brow subtly furrowed, eyes a shade more focused, lips closed. Keep head pointing at same angle.
- **Влад · смех** — A natural spontaneous laugh, noticeably smiling cheeks, slightly squinted eyes and a small open smiling mouth with a hint of teeth.
- **Влад · удивление** — A small startled look, raised brows and a slightly parted mouth. Mature, subtle expression, same head direction.

## Пончик в новом ракурсе

У Пончика новый низкий силуэт в три четверти. Голова развёрнута к героям, одна передняя лапа вытянута, хвост лежит отдельной дугой. Сохранены полосы, кремовая грудка и загнутое ухо. Версия используется в первой главе, поиске жетонов и её открытках. [Новый рисунок WebP](../../public/assets/characters/chapter1-gouache/cat-resting.webp) · [Предыдущая гуашевая версия](../../outputs/art/previous-assets/characters/chapter1-gouache/cat.webp)

Встроенный ImageGen. PNG `exec-ba5bf34f-a0fe-47bd-86b0-0e36b60290c9.png`. Референсы — предыдущий Пончик для отметин, [гуашевый Влад](../../outputs/art/previous-assets/characters/chapter1-gouache/vlad-smile.webp) для фактуры и [вход в кафе](../../public/assets/backgrounds/chapter1-gouache/cafe-entry.webp) для света.

```text
Use case: illustration-story, redesigned transparent 2D game character sprite for a young adult visual novel. Create a genuinely new pose and silhouette for the existing cat Ponchik, using reference 1 ONLY for his recognizable ginger and cream banded coat, white-cream bib and paws, and unique folded ear tip. Reference 2 is for the exact matte painterly gouache-over-pencil finish with irregular soft colored edges and layered broad dry brushwork. Reference 3 is for late afternoon honey light from the viewer's left with restrained cool mauve shadows. Draw one adult cat resting low on one hip in a side-on three-quarter view, his longer body stretching across the left two thirds of the sprite, his head at the RIGHT, turned slightly up and toward the center-right as though calmly watching someone talking. One forepaw extends forward, the other rests tucked in, and the visible striped tail lies in a graceful S along the foreground of the body. Show a clearly folded tip on the far ear and one erect near ear. Soft real feline proportions, smallish natural head with sleepy curious olive eyes, no human smile, softly uneven cream chest with longer dry-brushed fur and muted tawny stripes with umber shadows. Prefer a distinctly asymmetrical low S-shaped silhouette, naturalistic weight, and an expressive gaze. There should be a noticeable difference from the frontal loaf pose in reference 1. True transparent RGBA cutout all around, no background, no checkerboard, no off-body glow, no external shadow, no floor or other objects. Square 1:1 image, fill at least 88% of its width and leave narrow safe margins around ears, tail and paws.
```
