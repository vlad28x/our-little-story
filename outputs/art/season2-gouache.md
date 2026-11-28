# Второй сезон · цифровая гуашь

Главы 6–10 используют то же художественное направление, что главы 1–5. Матовая цифровая гуашь, мягкие контуры и карандашные штрихи помогают держать единый стиль, а цвет света следует сцене. [Арт-ТЗ игры](../ART_DIRECTION.md) · [Первый сезон](season1-gouache.md)

| Глава | Свет и рисунок | Слои в игре |
| --- | --- | --- |
| 6 · Пока светло | Золотая листва, сиреневые тени у воды и светлая верхняя дорожка. | Три фона, камера с шалфейным корпусом, касания листвы, воды и уличных предметов. |
| 7 · На шаг левее | Тёплый свет на дереве и штукатурке, синий акцент в «Просвете». | Фасад, общий зал, три работы крупным планом. Светлая треугольная выемка и камешки на «Сколе» сохранены. Арт открытки повторяется в кухне и среди отпечатков. |
| 8 · Половина кухни | Янтарные лампы, сине-фиолетовое окно, кремовая глазурь с приглушённым сливовым краем. | 22 иллюстрации еды для пяти стадий, четырёх начинок и двух форм. Гуашевые WebP показываются в меню, сцене, на снимке и открытке. Исходные SVG служат резервом. |
| 9 · С крышей разберёмся | Стальной дождь и янтарные окна. Под навесом, под аркой и у булочной свои ракурсы. | Фильм, капли и светофор остаются отдельными слоями. Открытый и закрытый книжный шкаф используют одну композицию. |
| 10 · Два путешественника | Лампы «Паузы», тёмно-синее окно гостиной и мягкое золото утром. | Поле, фишки, отпечатки, конверт и заметные на пледе полосы. У Пончика отдельный спрайт, когда он выглядывает из коробки. |

В текущих сценах повторно использованы гуашевые спрайты Влада, Нины и Пончика из первого сезона и пробные домашние спрайты восьмой главы. Для Ангела и Пончика в коробке подготовлены новые прозрачные слои. Архивные фоны также получили гуашевые варианты. [22 SVG готовки](../ch08-svg)

Фоны экспортированы в WebP 1086×1448 и 1536×1024, работы галереи — 840×1120. Ангел и Пончик в коробке экспортированы с прозрачностью. PNG-исходники остались в каталоге результатов ImageGen для этой сессии. Ниже приведены их имена и промпты.

## Ассеты ImageGen

### Еда в восьмой главе

Оба листа сделаны встроенным ImageGen. Композиция взята из 22 исходных SVG, освещение и фактура — из фона `supper8-kitchen-gouache.webp`. На этапе сборки сгенерированные порции разложены по четыре на тарелку и по две после ужина, одна из двух разломлена.

- Доски для начинки, лепёшка и доска с крошками · `public/assets/supper8/preparation.webp` (960×855) · исходник `exec-bb350eb8-7d54-4ec1-87c5-c3faf29a3f8d.png`.
- Готовые порции и остатки для съёмки · `public/assets/supper8/serving.webp` (1920×1140) · исходник `exec-bcebd11b-5d00-49e0-817b-36309822b877.png`.

> Use case: illustration-story. Create a single transparent sprite sheet for chapter 8 of an original warm visual novel. Reference image 1 is the existing game SVG sheet, for exact subjects, scale relationships and clarity. Reference image 2 is the game's painted kitchen, for brushwork and lighting. Repaint those kitchen props to fit the polished matte digital gouache and colored-pencil style of image 2. Sheet contains exactly six independent horizontally rectangular cutout props arranged in an implicit uniform 2-column by 3-row grid. Each sprite centered inside its own equal cell, completely separate, generous transparent gutters and outside margins, naturally wide about 2:1. Left top: golden walnut board with one cream ceramic bowl of visibly grated pale cheese on left and about four red bell pepper strips on right. Right top: same board and bowl, browned sliced button mushrooms at right. Left middle: same board and bowl, red bell pepper and mushrooms separately in a mixed group at right. Right middle: same board and bowl, fresh green herb leaves at right. Left bottom: same empty board with exactly two irregular halves of a single square flatbread side by side, narrow separation along a clear jagged tear. Right bottom: same board after cooking, with wood spoon, a small curved scatter of flour and a few crumbs. All boards should stay aligned with long edges horizontal, same size and orientation, almost overhead with a subtle oblique view so the front walnut edge has depth, warm highlights from upper left, matte pigment texture and visibly painted irregular woodgrain. Gentle alpha shadows tight to base. Important: isolated imagery only with genuine transparent background in all gaps. No text, cell borders, kitchen backgrounds, hands, decoration beyond the named props, or UI. Follow the relative ingredient placement in the reference.

> Use case: illustration-story. Create one game sprite atlas on genuine transparent background. Input 1 is layout and subject reference from the game's existing chapter 8 SVGs, in particular the lavender plate and two types of food. Input 2 is the painted game kitchen, for warm matte digital gouache, pencil texture and amber-colored evening light. Arrange precisely nine independent isolated cutout objects in a uniform 3-column 3-row grid, one centered object per cell, separated by large completely transparent gutters, no internal labels or borders. Row 1 left to right: a single open square golden flatbread portion topped with clearly visible red pepper strips and melted pale cheese; one open square with browned sliced mushrooms and pale cheese; one open square with both red pepper and mushrooms and pale cheese. Row 2 left to right: one open square with only melted cheese and green herbs; one small creased envelope-shaped folded baked square stuffed with red pepper and pale cheese, tiny bit of red peeking from bottom seam; same folded baked square with mushrooms and pale cheese peeking from bottom seam. Row 3 left to right: same folded parcel with peppers and mushrooms peeking at seam; same folded parcel with green herbs peeking at seam; one EMPTY wide shallow ceramic serving plate, ivory center, muted lavender rim, seen from an overhead-oblique angle. Every pastry is ONE small square sparingly rounded at corners, approximately 1.3:1 in screen projection with edges horizontal, subtle low baked structure, consistent scale and perspective, no garnish or props around it. The square corners angle only a few degrees. Folded parcels have visible diagonal folds like an envelope with browned ridges. Loose painted strokes, golden toasted bubbles, quiet palette, edible tactile texture, clean alpha edges. The transparent sheet must contain no background, guides, text, utensils or UI.

### photo6-upper

- WebP · `public/assets/backgrounds/season2-gouache/photo6-upper.webp`
- Исходник · `exec-db4ddc78-c759-438b-bde6-2995eae7126c.png`
- Референсы · `outputs/art/previous-assets/backgrounds/photo6-upper.webp`, `public/assets/backgrounds/season1-gouache/river-evening.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Upper pedestrian overlook; preserve left old kiosk, black lamp, stone balustrade, bright ochre leafy canopy and right steps at their identical normalized positions. Portrait 3:4. Clear late-afternoon apricot light. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### photo6-sun

- WebP · `public/assets/backgrounds/season2-gouache/photo6-sun.webp`
- Исходник · `exec-4e66327d-077c-4ed8-9802-c4eb91284109.png`
- Референсы · `outputs/art/previous-assets/backgrounds/photo6-lower-sun.webp`, `public/assets/backgrounds/season1-gouache/river-evening.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Lower river promenade, amber sunlight on water. Preserve exact alignment of river rail and water reflection on left and wide masonry stairs at right, and foreground space. Portrait 3:4. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### photo6-shade

- WebP · `public/assets/backgrounds/season2-gouache/photo6-shade.webp`
- Исходник · `exec-d0bb8018-430d-4b27-ae66-54fad84bd759.png`
- Референсы · `outputs/art/previous-assets/backgrounds/photo6-lower-shade.webp`, `public/assets/backgrounds/season1-gouache/river-evening.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Same lower river promenade and camera axis as supplied source. Cobblestones in cool muted lavender shade, clear afternoon sun on the far roofline and golden old trees. Preserve exact rail, water reflection and right hand stairs. Portrait 3:4. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### gallery7-outside

- WebP · `public/assets/backgrounds/season2-gouache/gallery7-outside.webp`
- Исходник · `exec-6a65ee71-9703-4b99-93ea-f92057f97a23.png`
- Референсы · `outputs/art/previous-assets/backgrounds/gallery7-outside.webp`, `public/assets/backgrounds/season1-gouache/cafe-exterior-evening.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Gallery doorway, awning, glass reflection and poster anchor relative to their very precise positions in original; preserve an unlettered framed exhibition poster, actual door handle and crisp outline of entrance in dappled warm light. Portrait 3:4. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### gallery7-hall

- WebP · `public/assets/backgrounds/season2-gouache/gallery7-hall.webp`
- Исходник · `exec-495ca1f9-9b61-4000-a675-909760683f52.png`
- Референсы · `outputs/art/previous-assets/backgrounds/gallery7-hall-light-notch.webp`, `public/assets/backgrounds/season1-gouache/cafe-sunset.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Gallery with exactly the three artworks already in source, same locations, mounting sizes and contents. Left frame is diagonal stone steps; center is chipped cream masonry with a dark diagonal shadow containing the little light triangular notch; right is a deep blue door. Preserve overhead arch, herringbone floor, window light, bench and spots. Quiet painted daylight. Portrait 3:4. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### courtyard9-open

- WebP · `public/assets/backgrounds/season2-gouache/courtyard9-open.webp`
- Исходник · `exec-d88cd98e-a68b-466d-9a21-cd260ffda672.png`
- Референсы · `outputs/art/previous-assets/backgrounds/courtyard9-open-v2.webp`, `public/assets/backgrounds/season1-gouache/rain-arcade.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Outdoor courtyard right before rain, wide landscape 3:2 exactly like supplied source. Precise framing, rectangular cream projection screen still blank and centered, same rows of chairs, brick windows and canopy at left and archway at right. Keep garland and wet-cobble space clear for separate interactive layers. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### courtyard9-canopy

- WebP · `public/assets/backgrounds/season2-gouache/courtyard9-canopy.webp`
- Исходник · `exec-cf64d2e4-d4fb-4e07-a02b-185a90b2e09f.png`
- Референсы · `outputs/art/previous-assets/backgrounds/courtyard9-canopy.webp`, `public/assets/backgrounds/season1-gouache/rain-arcade.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Same courtyard during rain under the canopy, landscape 3:2. Keep canopy line, stacked blankets on the left, small round side table, garland and rectangular blank film screen at their original positions and size. Reflected warm light on wet stone, muted slate shadows. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### courtyard9-arch

- WebP · `public/assets/backgrounds/season2-gouache/courtyard9-arch.webp`
- Исходник · `exec-113663c8-1710-4aa7-9d9d-14b38f1625bc.png`
- Референсы · `outputs/art/previous-assets/backgrounds/courtyard9-arch.webp`, `public/assets/backgrounds/season1-gouache/rain-arcade.webp`

> Edit the first supplied original game scene into the matte hand-painted digital gouache style shown by the second image. First image is the exact layout/camera reference; second image is brushwork only, not a location or scene to import. Maintain same aspect ratio and edge-to-edge composition. Use opaque matte masses, subtly dry-brushed paper grain localized to surfaces, softened outlines, quiet warm/cool light, and clean readable object silhouettes. Do not make photorealistic, shiny, anime-cel flat or overly blurry. Preserve scale and normalized coordinates of objects and boundaries because game interaction hotspots are fixed. Same courtyard during rain seen from under the broad brick arch, landscape 3:2. Preserve the absent foreground people, right foreground folded chairs, distant blank rectangular film screen, arch spring line, lamp and windows. Water rings and small, local reflected lights. No puddle in the dry foreground original. No people, text, lettering, UI, frame, watermark, or externally mounted props.

### courtyard9-books

- WebP · `public/assets/backgrounds/season2-gouache/courtyard9-books.webp`
- Исходник · `exec-5b82de68-203b-446d-b0de-0f379c8b5746.png`
- Референсы · `outputs/art/previous-assets/backgrounds/courtyard9-books.webp`, `public/assets/backgrounds/season1-gouache/rain-arcade.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Landscape 3:2. Preserve exact camera, left open wooden book cupboard with books exposed and clearly defined doors, canopy, bakery window, left wall lamp and blue wet pavement at right. The cupboard and glass reflections drive interactions. No people, UI, watermark, lettering, outline frame or external props.

### courtyard9-lab

- WebP · `public/assets/backgrounds/season2-gouache/courtyard9-lab.webp`
- Исходник · `exec-6e15cf8c-2902-411d-883b-7088c21da510.png`
- Референсы · `outputs/art/previous-assets/backgrounds/courtyard9-lab.webp`, `public/assets/backgrounds/season1-gouache/rain-arcade.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Landscape 3:2. Preserve the left side brick storefront door, lit window, the metal drop box on its wall, right distant crossing traffic signal, leaves and street geometry. Green lamp is a tiny dot on the dark traffic signal at its original position. Deep indigo balanced with amber lit window. No people, UI, watermark, lettering, outline frame or external props.

### travellers10-cafe

- WebP · `public/assets/backgrounds/season2-gouache/travellers10-cafe.webp`
- Исходник · `exec-11bf3298-a438-494d-bb44-fc5dca735cb6.png`
- Референсы · `outputs/art/previous-assets/backgrounds/travellers10-cafe-night.webp`, `public/assets/backgrounds/season1-gouache/cafe-sunset.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Portrait 3:4 of the same familiar cafe at night. Maintain window, table edge, chairs, sill, plinth, one shelf and little amber lamp at exactly the same coordinates. Outside is indigo, inside muted rose and brushed terracotta with warm lights. No people, UI, watermark, lettering, outline frame or external props.

### travellers10-home

- WebP · `public/assets/backgrounds/season2-gouache/travellers10-home.webp`
- Исходник · `exec-b3272d46-a7e9-462d-9e38-d929a64b35a9.png`
- Референсы · `outputs/art/previous-assets/backgrounds/travellers10-home-night.webp`, `outputs/art/previous-assets/backgrounds/season1-gouache/home-living.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Portrait 3:4 of the exact living room at night, with amber torchiere, fabric blanket on the left, tray with precisely two water glasses on table, TV and shelf. Preserve both glasses, lamp, TV and blankets at same coordinates. Deep blue through window. Use the second image's paint style, not its set dressing. No people, UI, watermark, lettering, outline frame or external props.

### travellers10-morning

- WebP · `public/assets/backgrounds/season2-gouache/travellers10-morning.webp`
- Исходник · `exec-539dbcd8-449b-47eb-a15d-38fe4e7130ea.png`
- Референсы · `outputs/art/previous-assets/backgrounds/travellers10-morning-tea.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Landscape 3:2 of the same kitchen with fresh early daylight, two empty glasses on the table, no plates. Preserve glass position, window, orange trees, plum checked tablecloth, shelf and worktop. Pale cream, soft gold and rose. Keep same camera and place no people. No people, UI, watermark, lettering, outline frame or external props.

### gallery7-row

- WebP · `public/assets/gallery7/season2-gouache/row.webp`
- Исходник · `exec-84353e69-447f-4b45-8983-7d4ece86d341.png`
- Референсы · `outputs/art/previous-assets/gallery7/row.webp`, `public/assets/backgrounds/season1-gouache/river-evening.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Portrait print 3:4. Detail of exactly the depicted stone stair tread edges with the same direction, count, angle, light strip and crop. No actual picture frame or label. Stone texture rendered as dry matte brushwork and faint pencil grain. No people, UI, watermark, lettering, outline frame or external props.

### gallery7-chip

- WebP · `public/assets/gallery7/season2-gouache/chip.webp`
- Исходник · `exec-e3393488-f83a-403a-8a5f-b06f1f3a6933.png`
- Референсы · `outputs/art/previous-assets/gallery7/chip-light-notch.webp`, `public/assets/backgrounds/season1-gouache/river-evening.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Portrait print 3:4. The original local chipped horizontal/diagonal ledge and lower triangular LIGHT notch interrupting the diagonal dark band of shadow are central narrative details. Copy chip contours and relative positions closely, retain light warm stone and the orange-ish glints, maintain same shadow angle. No new notches or shadows. No people, UI, watermark, lettering, outline frame or external props.

### gallery7-blue

- WebP · `public/assets/gallery7/season2-gouache/blue.webp`
- Исходник · `exec-ab4b809e-eb59-4076-8faf-67353ffafee2.png`
- Референсы · `outputs/art/previous-assets/gallery7/blue.webp`, `public/assets/backgrounds/season1-gouache/river-evening.webp`

> Edit original first image into the same stylized digital gouache visual novel collection as second image. The first is the exact layout and crop; the second is only technique. Keep landmarks and objects at the same normalized coordinates and frame edges, with edge-to-edge picture. Use blocked matte highlights, quiet brushed transitions, dry painted grain and gentle colored pencil only in the small details. Respect local color and light as described. Portrait print 3:4 of the old deep blue door, same crop, frame seams, chipped indigo paint, low amber daylight and thin light line at the threshold as original. Matte brush marks follow grain. No added knob, artwork frame or text. No people, UI, watermark, lettering, outline frame or external props.

### angel-peek

- WebP · `public/assets/characters/season2-gouache/angel-peek.webp`
- Исходник · `exec-ba19c44a-0647-470a-8aea-5068fcdaa76c.png`
- Референсы · `public/assets/characters/advisers/angel-peek-r3.webp`, `public/assets/characters/season1-gouache/devil-peek.webp`

> Transparent square 1:1 sprite edit for a visual novel. Repaint the first supplied ORIGINAL angel as an exactly recognizable same fair-haired curly green-eyed chibi angel, with golden halo, ivory sleeve, white feather wings, and hand gripping the left edge, in matte digital gouache and subtle graphite texture like the second image. First image sets pose, direction, color, silhouette and costume. The second is brushwork reference only, add no horns or red. Complete visible fingers, same clean sharp vertical cutaway on LEFT where he peeks out, eyes in the upper half. Preserve the first's canvas composition by matching placement and size of visible head. No scenery, no typography, no border. Real transparent background.

### cat-in-box

- WebP · `public/assets/characters/season2-gouache/cat-in-box.webp`
- Исходник · `exec-faeccd04-63e6-4ef6-8150-bb48744f1594.png`
- Референсы · `public/assets/characters/chapter1-gouache/cat-resting.webp`

> Transparent horizontal game character sprite 3:2. Same adult amber-cream tabby Ponchik from provided reference, exact matte digital gouache pencil style, same creamy white chin and chest, same low folded outer ear, hazel eyes, orange stripes. New pose is the head and folded front cream paws rising from slightly below the lower edge of the sprite, as if sitting inside an open board-game box behind the rim. Cat only, no box (is drawn separately by the game), no scenery, no props, no floor. Natural realistic tabby face with soft whiskers, curled ears recognizable, density and proportions like reference. Center the head comfortably, don't crop whiskers or ears. Pose upright, three-quarter view gently turned left. Genuine transparent background.

### courtyard9-books-closed

- WebP · `public/assets/backgrounds/season2-gouache/courtyard9-books-closed.webp`
- Исходник · `exec-168daa7f-2b6a-469f-9333-4e9eff1d29d0.png`
- Референсы · `exec-5b82de68-203b-446d-b0de-0f379c8b5746.png`, `outputs/art/previous-assets/backgrounds/courtyard9-books-closed.webp`

> Edit the first image, the exact already approved digital gouache game scene seen in play. Remain absolutely unchanged pixel-for-pixel outside the wooden book cupboard in the lower left. Flip its partly open glass door so the door is now properly closed flat across the two shelves, no new detail, books still dimly visible through that glass. Use the second previous asset only as a reference for the closed door function. Preserve first image's canvas dimensions 1536x1024 landscape and exact perspective, paint, crop, brightness, lights, window, leaves, tree, architecture. Local inpainting only. The golden lawn of reflected light and dark blues remain exactly the same. No people or text.

### legacy-gallery

- WebP · `public/assets/backgrounds/season2-gouache/legacy-gallery.webp`
- Исходник · `exec-3d6ac0b4-bd05-4674-8d9e-5d687c08f482.png`
- Референсы · `outputs/art/previous-assets/backgrounds/gallery-evening.webp`, `outputs/art/previous-assets/backgrounds/gallery7-hall-light-notch.webp`

> Repaint the first original visual novel scene with matte digital gouache and very subtle dry brush localized to materials. Use second reference for colors and brushwork only, first for extremely strict composition: Quiet older gallery at evening with the same arrangement of walls, pictures, and passage, untouched composition. The first frame's exact aspect ratio is required. Warm local lamps versus blue and dusty plum, retain each original prop, weak natural highlights, preserve old story atmosphere. No added people, text, graphics or borders.

### legacy-terrace

- WebP · `public/assets/backgrounds/season2-gouache/legacy-terrace.webp`
- Исходник · `exec-74c96839-f603-4c99-bd11-9f00cd387541.png`
- Референсы · `outputs/art/previous-assets/backgrounds/s2-cafe-terrace.webp`, `public/assets/backgrounds/season1-gouache/cafe-sunset.webp`

> Repaint the first original visual novel scene with matte digital gouache and very subtle dry brush localized to materials. Use second reference for colors and brushwork only, first for extremely strict composition: Retain outdoor café terrace as an outdoor space, chairs, café glazing, railing and small lights at original locations. The first frame's exact aspect ratio is required. Warm local lamps versus blue and dusty plum, retain each original prop, weak natural highlights, preserve old story atmosphere. No added people, text, graphics or borders.

### legacy-courtyard

- WebP · `public/assets/backgrounds/season2-gouache/legacy-courtyard.webp`
- Исходник · `exec-b81141d5-14ba-4b5c-97c1-08699cb9ac35.png`
- Референсы · `outputs/art/previous-assets/backgrounds/s2-cinema-courtyard.webp`, `public/assets/backgrounds/season1-gouache/rain-arcade.webp`

> Repaint the first original visual novel scene with matte digital gouache and very subtle dry brush localized to materials. Use second reference for colors and brushwork only, first for extremely strict composition: The older open movie courtyard with its original screen, chairs, canopy and beams, all at the exact same coordinates. The first frame's exact aspect ratio is required. Warm local lamps versus blue and dusty plum, retain each original prop, weak natural highlights, preserve old story atmosphere. No added people, text, graphics or borders.

### legacy-window

- WebP · `public/assets/backgrounds/season2-gouache/legacy-window.webp`
- Исходник · `exec-c000fd14-58e7-4fd3-add0-313bcfcd8460.png`
- Референсы · `outputs/art/previous-assets/backgrounds/shop-window-evening.webp`, `public/assets/backgrounds/season1-gouache/cafe-exterior-evening.webp`

> Repaint the first original visual novel scene with matte digital gouache and very subtle dry brush localized to materials. Use second reference for colors and brushwork only, first for extremely strict composition: Window and small traditional sign must stay at the proportions and coordinates of the original painting. Original portrait 3:4. The first frame's exact aspect ratio is required. Warm local lamps versus blue and dusty plum, retain each original prop, weak natural highlights, preserve old story atmosphere. No added people, text, graphics or borders.

## Кадр 13 — приглашение после десятой главы

Четыре горизонтальные иллюстрации 3:2 (960×640 WebP, без людей и текста) для карточки «Кадр 13» и миниатюр на кнопках выбора в `TravellersInvitation.tsx`.

### future-game (Настолка)

- WebP · `public/assets/travellers10/future-game.webp`
- Исходник · `outputs/art/future-evening/game.jpg`
- Референсы · `public/assets/backgrounds/season2-gouache/travellers10-home.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`

> 3:2 full-bleed matte digital gouache evening tabletop scene in Vlad's warm living room viewed from a gentle 3/4 overhead angle. Center of a round wooden coffee table: open wordless illustrated cooperative board game box, folded game board with a winding path, river, little wooden bridge piece, and two small wooden traveller pawns side by side. Two cozy matte ceramic mugs of steaming tea (cream with muted dusty-rose band, muted sage green), warm amber floor lamp, sage sofa with chunky cream knitted blanket, and twilight-indigo autumn window behind. No text, no borders, no people, no UI.

### future-movie (Киновечер)

- WebP · `public/assets/travellers10/future-movie.webp`
- Исходник · `outputs/art/future-evening/movie.jpg`
- Референсы · `public/assets/backgrounds/season2-gouache/travellers10-home.webp`, `public/assets/backgrounds/supper8-kitchen-gouache.webp`

> 3:2 full-bleed matte digital gouache cozy evening movie-night scene in Vlad's warm living room. Low wooden coffee table with a shallow matte cream ceramic plate of neat whole golden-baked round cookies (intact edges) and two steaming ceramic tea mugs; sage-green sofa draped with chunky cream knitted blanket and dusty-rose pillow; glowing TV showing a dreamy wordless golden-and-indigo starry night landscape; warm amber lamp and twilight-blue evening window with bokeh lights. No text, no borders, no people, no UI.

### future-cook (Готовка вдвоём)

- WebP · `public/assets/travellers10/future-cook.webp`
- Исходник · `outputs/art/future-evening/cook.jpg`
- Референсы · `public/assets/backgrounds/supper8-kitchen-gouache.webp`, `public/assets/supper8/secret-her-hands.webp`

> 3:2 full-bleed matte digital gouache evening kitchen counter still life at a gentle 3/4 angle. Golden-walnut cutting board with flour-dusted rolled flatbread dough, small cream ceramic bowl with muted lavender rim holding grated pale cheese, sliced red bell peppers, fresh green herbs, wooden spoon; folded charcoal-black linen apron and plum-and-cream woven towel on the left; steaming cream ceramic mug of tea on the right; warm amber under-cabinet lights, wooden spice shelves with unlabelled ceramic jars, and twilight city-and-autumn-trees window behind. No text, no borders, no people or hands, no UI.

### future-out (Прогулка или кафе)

- WebP · `public/assets/travellers10/future-out.webp`
- Исходник · `outputs/art/future-evening/out.jpg`
- Референсы · `public/assets/backgrounds/season2-gouache/travellers10-cafe.webp`, `public/assets/backgrounds/season1-gouache/river-evening.webp`

> 3:2 full-bleed matte digital gouache quiet autumn evening scene blending a cozy café terrace and riverside promenade. Small wooden café table by a glowing arched café window with two steaming matte ceramic cups of tea and a warm candle; wrought-iron streetlamp with golden halo beneath ochre-gold autumn leaves beside a stone riverside balustrade overlooking calm twilight-indigo water reflecting amber lanterns. No text, no borders, no people, no UI.

