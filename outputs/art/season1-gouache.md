# Первый сезон · цифровая гуашь

Художественное направление задано в [АРТ-ТЗ](../ART_DIRECTION.md). Открытки и сцены используют один набор иллюстраций.

| Глава | Свет и цвет | Интерактивный рисунок |
| --- | --- | --- |
| 1 · первая встреча | Кремовый интерьер, сливовые тени, шалфей и тёплое дерево. Пончик крупнее и лежит боком. | Жетоны, чашки, шарф, лапка и детали поиска. |
| 2 · дождь | Мокрый сине-серый камень и янтарный свет из кафе. Под навесом и аркой свои ракурсы. | Купол зонтика, пуговица, лоскут, лента, листок и ложка. |
| 3 · набережная | Сумеречный индиго, тёплые фонари и отражения. | Звёзды, линии созвездия, след падающей звезды и рисунок на открытке. |
| 4 · игровой вечер | Голубые сумерки за окном, зелёный плед и домашний свет. Влад в футболке. | Геймпады, посуда, персонажи кухонной игры, печенье и реакции предметов комнаты. |
| 5 · возвращение в кафе | Медный закат в зале и тёмная улица с тёплыми окнами. Влад в тёмном пиджаке. | Жетоны воспоминаний, сувенир из главы 2, конверт и значки приглашения. Дьяволёнок остаётся отдельным прозрачным слоем. |

Фоны экспортированы в WebP 1086×1448, портреты Влада — в прозрачный WebP 768×1152. Дьяволёнок экспортирован в 640×640 и 640×427. Использованы [кадры первой главы](meeting1-gouache.md), расширенный спрайт Пончика и два [домашних выражения Влада](supper8-gouache.md). Остальной растровый арт создан встроенным ImageGen для этой редакции игры. Слои реквизита отрисованы вручную в SVG. Координаты игровых элементов и их состояние задаются мини-играми.

## Источники и промпты

PNG-исходники оставлены в каталоге результатов ImageGen для этой сессии. Имена файлов указаны для воспроизводимости. Пути с `public/` идут от корня проекта.

### rain-awning

- WebP · `public/assets/backgrounds/season1-gouache/rain-awning.webp`
- Исходник ImageGen · `exec-0b2785b5-8c49-4fe9-aab2-cd71c53835fa.png`
- Референсы · `public/assets/backgrounds/rain-awning.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`, `public/assets/backgrounds/chapter1-gouache/cafe-window.webp`

> Use case: precise style transfer for an existing visual novel background. Reference 1 gives the exact camera, objects, proportions and composition of the drop-in image. References 2 and 3 give the project's matte hand-painted digital gouache and pencil, slightly irregular broad paint strokes, softly modeled light and controlled grain, warm cream, plum and muted sage palette. Repaint source 1, preserving its existing 3:4 portrait framing, camera geometry and object positions. Match real materials, emphasize large painted shapes. Under the cream cafe awning, looking down the wet street. Preserve the awning hem, door and cafe furniture on the left, lanterns, street depth, open right foreground and exact floor geometry. Actual rain outdoors, quiet plum-blue sky, wet stone with brushy honey reflections. No characters, no cats, new lettering, UI, watermarks or extra objects. Fill the portrait frame.

### rain-arcade

- WebP · `public/assets/backgrounds/season1-gouache/rain-arcade.webp`
- Исходник ImageGen · `exec-d55a1022-50f5-45f3-9a47-1621f19302c2.png`
- Референсы · `public/assets/backgrounds/rain-arcade.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`, `public/assets/backgrounds/chapter1-gouache/cafe-window.webp`

> Use case: precise style transfer for an existing visual novel background. Reference 1 gives the exact camera, objects, proportions and composition of the drop-in image. References 2 and 3 give the project's matte hand-painted digital gouache and pencil, slightly irregular broad paint strokes, softly modeled light and controlled grain, warm cream, plum and muted sage palette. Repaint source 1, preserving its existing 3:4 portrait framing, camera geometry and object positions. Match real materials, emphasize large painted shapes. Under the stone arcade on the same rainy walk. Preserve the full central arch and its columns, pots and ivy, left lantern, empty dry foreground and the wet street beyond. Warm matte plaster and orange lamp accents against a cool violet-gray blue rain. No characters, no cats, new lettering, UI, watermarks or extra objects. Fill the portrait frame.

### river-evening

- WebP · `public/assets/backgrounds/season1-gouache/river-evening.webp`
- Исходник ImageGen · `exec-27e9c79c-7853-416d-ae5f-ef851b2a2d3a.png`
- Референсы · `public/assets/backgrounds/river-evening.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`, `public/assets/backgrounds/chapter1-gouache/cafe-window.webp`

> Use case: precise style transfer for an existing visual novel background. Reference 1 gives the exact camera, objects, proportions and composition of the drop-in image. References 2 and 3 give the project's matte hand-painted digital gouache and pencil, slightly irregular broad paint strokes, softly modeled light and controlled grain, warm cream, plum and muted sage palette. Repaint source 1, preserving its existing 3:4 portrait framing, camera geometry and object positions. Match real materials, emphasize large painted shapes. Nighttime autumn embankment. Preserve bench and tall lamp on the left, exact positions and height of railing, path and horizon, the river and distant city. Smooth dark plum-blue sky with only a few subtle existing dots, clear open sky for a separate interactive SVG. Small warm reflections, no constellation, fully night outdoors. No characters, no cats, new lettering, UI, watermarks or extra objects. Fill the portrait frame.

### home-living

- WebP · `public/assets/backgrounds/season1-gouache/home-living.webp`
- Исходник ImageGen · `exec-bc065125-198e-4be1-8ffd-f3b2fb563c82.png`
- Референсы · `public/assets/backgrounds/home-living.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`, `public/assets/backgrounds/chapter1-gouache/cafe-window.webp`

> Use case: precise style transfer for an existing visual novel background. Reference 1 gives the exact camera, objects, proportions and composition of the drop-in image. References 2 and 3 give the project's matte hand-painted digital gouache and pencil, slightly irregular broad paint strokes, softly modeled light and controlled grain, warm cream, plum and muted sage palette. Repaint source 1, preserving its existing 3:4 portrait framing, camera geometry and object positions. Match real materials, emphasize large painted shapes. Third-person view of the same living room at dusk. Preserve the exact geometry of the left sofa and cream blanket draped over it, foreground low round coffee table with its two gamepads and two mugs, right TV screen and cabinet, left lamp and large window. Match the original positions and sizes especially blanket, mugs, and TV; interactive props are aligned to the underlying furniture. Desaturated sage sofa, warm wood, cream lamp and plum blue dusk. No new items or changes in TV composition. No characters, no cats, new lettering, UI, watermarks or extra objects. Fill the portrait frame.

### cafe-sunset

- WebP · `public/assets/backgrounds/season1-gouache/cafe-sunset.webp`
- Исходник ImageGen · `exec-8cc2f2d7-7f94-4fdf-b55d-ff2a51215daa.png`
- Референсы · `public/assets/backgrounds/cafe-sunset.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`, `public/assets/backgrounds/chapter1-gouache/cafe-window.webp`

> Use case: precise style transfer for an existing visual novel background. Reference 1 gives the exact camera, objects, proportions and composition of the drop-in image. References 2 and 3 give the project's matte hand-painted digital gouache and pencil, slightly irregular broad paint strokes, softly modeled light and controlled grain, warm cream, plum and muted sage palette. Repaint source 1, preserving its existing 3:4 portrait framing, camera geometry and object positions. Match real materials, emphasize large painted shapes. Sunset inside the same Cafe Pausa. Preserve the tall left window and table/chairs, wall and shelf, right cupboard, open foreground and exact framing. Amber evening light mixing with dusty plum wall, muted olive greenery and brown wood; lavender city outside. Existing small table is in the same position and no extra objects on it. No characters, no cats, new lettering, UI, watermarks or extra objects. Fill the portrait frame.

### cafe-exterior-evening

- WebP · `public/assets/backgrounds/season1-gouache/cafe-exterior-evening.webp`
- Исходник ImageGen · `exec-f4c08959-9c48-4014-828f-54c6247679dc.png`
- Референсы · `public/assets/backgrounds/cafe-exterior-evening.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`, `public/assets/backgrounds/chapter1-gouache/cafe-window.webp`

> Use case: precise style transfer for an existing visual novel background. Reference 1 gives the exact camera, objects, proportions and composition of the drop-in image. References 2 and 3 give the project's matte hand-painted digital gouache and pencil, slightly irregular broad paint strokes, softly modeled light and controlled grain, warm cream, plum and muted sage palette. Repaint source 1, preserving its existing 3:4 portrait framing, camera geometry and object positions. Match real materials, emphasize large painted shapes. Exterior of same Cafe Pausa with left arched window, right-hand entrance and awning, plants and pavement. Keep oval sign and existing exact Cyrillic word «Пауза» if present. Preserve exact scale and frame. It is sunset into evening, with warm amber shop windows, dusty plum awning, chalk cream trim, sunset pink and cooler blue-violet sky. Distinguish it from daylight. No characters, no cats, new lettering, UI, watermarks or extra objects. Fill the portrait frame.

### elegant-smile

- WebP · `public/assets/characters/season1-gouache/elegant-smile.webp`
- Исходник ImageGen · `exec-3111d8ca-c945-45dd-8ae3-fec534ed1673.png`
- Референсы · `public/assets/characters/chapter1-gouache/vlad-smile.webp`, `public/assets/characters/vlad/elegant-smile.webp`

> Use case: identity-preserve, full body transparent sprite for chapter five. Reference 1 is the exact adult 26-year-old Vlad, face, voluminous swept light-brown curls, gray-green eyes, warm soft smile, mature proportions approximately six heads tall, painterly matte digital gouache pencil and warm window light from left. Reference 2 is wardrobe only. Use black relaxed blazer over black turtleneck, dark charcoal trousers and dark shoes. Clean stance, one hand in a trouser pocket, other at side. Preserve hair and face and head scale exactly. No coat, scarf or props. Portrait 2:3 full body from head to both shoes, same feet baseline and scale as reference 1. Clean true alpha cutout with absolutely no background, off-body glow, color cast or ground shadow, no text.

### home-awkward

- WebP · `public/assets/characters/season1-gouache/home-awkward.webp`
- Исходник ImageGen · `exec-dece178b-eb64-4d19-94f4-54476dec5105.png`
- Референсы · `public/assets/characters/vlad/supper8-gouache-smile.webp`

> Use case: identity-preserve expression variation for existing same project. Edit the same full-body adult Vlad in reference 1, change ONLY facial expression to a small awkward uncertain smile and one slightly higher eyebrow. Keep clothing (cream shirt, charcoal pants, socks), exact body, original pose and face framing, volumetric hair, placement and matching 2:3 1024×1536 portrait canvas, absolute foot baseline and head position. Matte hand-painted gouache and subtle pencil. Actual transparent RGBA alpha immediately outside silhouette, no halo/glow, external shadows, extra items, text, or scenery.

### devil-peek

- WebP · `public/assets/characters/season1-gouache/devil-peek.webp`
- Исходник ImageGen · `exec-05af814c-b16e-488e-80fe-720c86af151c.png`
- Референсы · `public/assets/characters/advisers/devil-peek-cropped.webp`, `public/assets/characters/chapter1-gouache/vlad-smile.webp`

> Use case: game sprite. Restyle the small playful devil from reference 1 for the same visual novel world as reference 2. Use reference 1 for exact geometry and silhouette, four-finger hand curled around a completely invisible vertical edge on the image RIGHT, side-peeking lean of the head, warm curls, red horns, burgundy coat and small bat wing. Preserve the proportions of this tiny magical character and friendly mischievous expression, and especially the exact vertical cut line at about 76% of a square canvas with the hand visibly extending a little across it. Keep the same location and scale of the hand and face. Reference 2 is only for warm matte digital gouache color and pencil-soft brush texture. True transparent alpha, no background, no visible door/object/board, no off-body glow. Keep square canvas.

### elegant-awkward

- WebP · `public/assets/characters/season1-gouache/elegant-awkward.webp`
- Исходник ImageGen · `exec-a1912830-711c-485e-bcd8-3de44782f7b0.png`
- Референсы · `exec-3111d8ca-c945-45dd-8ae3-fec534ed1673.png`

> Use case: identity preserve. Playable expression variant of the exact 26-year-old adult dark-blazer Vlad in reference 1. Change only expression to the small slightly embarrassed smile and subtly raised brow; adult natural expression. Preserve head direction, exact body geometry, original head, curls and hand positions, shoes, collar, image scale and full-height 2:3 portrait composition and brush texture. Matte gouache, pencil, warm daylight at image left. True transparent alpha outside actual outline, clear out any surrounding diffuse light, no glow or any off-body shadow, no new scenery.

### elegant-laugh

- WebP · `public/assets/characters/season1-gouache/elegant-laugh.webp`
- Исходник ImageGen · `exec-2350a9d0-41b0-4634-80fb-52417c1683a0.png`
- Референсы · `exec-3111d8ca-c945-45dd-8ae3-fec534ed1673.png`

> Use case: identity preserve. Playable expression variant of the exact 26-year-old adult dark-blazer Vlad in reference 1. Change only expression to a genuine soft laugh, softly narrowed green eyes and small natural open smile. Preserve head direction, exact body geometry, original head, curls and hand positions, shoes, collar, image scale and full-height 2:3 portrait composition and brush texture. Matte gouache, pencil, warm daylight at image left. True transparent alpha outside actual outline, clear out any surrounding diffuse light, no glow or any off-body shadow, no new scenery.

### devil-lean

- WebP · `public/assets/characters/season1-gouache/devil-lean.webp`
- Исходник ImageGen · `exec-28c62502-4b16-4a80-a4df-dc8813af972e.png`
- Референсы · `public/assets/characters/advisers/devil-lean.webp`, `exec-05af814c-b16e-488e-80fe-720c86af151c.png`

> Use case: identity preserve. Paint reference 1 in the exact matte gouache and pencil finish of reference 2, same small mischievous magical devil, red horns, blond curled hair and deep burgundy suit, resting his face on one palm and holding a cream envelope sealed with red wax in the other hand. Keep shoulder, hands, envelope lower edge and horn fitting the same 3:2 horizontal image. Preserve posture, silhouette and composition completely. No object, platform or background below elbows, true clean PNG transparency outside entire outline, no halo. This is artwork above a modal. No text.



## Пасхалки игрового вечера

У гостиной есть [вариант фона без геймпадов на столе](../../public/assets/backgrounds/season1-gouache/home-living-table.webp). Геймпады с действующим индикатором и стикером выбранного созвездия показаны отдельно, рядом с диалогом. Тарелка печенья и край вязаного пледа нарисованы отдельно. При взятии печенья остаются два, движение пледа запускается от касания.

Источник правки фона · `exec-316b0620-2d95-45c1-8d3a-630b2e6192e2.png`. Референс — [предыдущий фон гостиной](../../public/assets/backgrounds/season1-gouache/home-living.webp).

> Precision inpaint of supplied approved 1086 x 1448 portrait gouache visual-novel background. Keep the same exact camera framing and do not repaint the whole scene. Remove ONLY the two dark black video-game controllers sitting next to each other near the front center of the round wood coffee table, along with their own contact shadows. Fill just those two controller footprints with uninterrupted warm wood grain matching the immediately surrounding tabletop. Keep the beige mug at left, two snack bowls at the back, pink teacup, the table edge, knitted beige blanket behind table, sofa, rug, floor, plants, window, evening sky, illuminated lamp, TV and all props unchanged and in the exact same coordinates. Do not replace any mugs or bowls, do not add any text, item, person, or furniture. Keep aspect ratio 3:4 full bleed and identical golden warm digital gouache colors. This is a small local edit in a static background where separate functional SVG game controllers will be rendered later.
