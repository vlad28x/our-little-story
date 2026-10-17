# Промпты подключённых ассетов

## Глава 4 — вечерняя набережная

Создано встроенным Imagegen, reference image — cafe-window.webp только для единства рисовки. Итог: `public/assets/backgrounds/river-evening.webp`, оптимизирован в WebP. Параметры художественного запроса: one portrait 3:4 BACKGROUND ONLY for chapter 4 of the same adult kawaii/chibi indie visual novel; safe softly illuminated autumn river promenade at blue hour transitioning to starry evening; inviting wooden bench lower left, low iron railing, quiet river with warm lantern reflections, distant town windows, gold autumn leaves, muted lilac/deep violet sky in upper third. Open central foreground and center-right for a separate character, calm bottom for dialogue overlay. Fine warm brown outlines, paper grain, pastel cream/honey lighting against lavender night. No people, animals, text, logos, hearts or telescope; no designed constellation in background because interactive stars are a separate SVG layer.

`vlad.city.warm` явно использует уже согласованный city-smile.webp; это алиас, не новая сгенерированная эмоция. Все ключи ресурсов зарегистрированы в объекте manifest до экспорта, без последующего добавления циклами.

## Глава 3 — производство встроенным Imagegen

Результаты подключены в `public/assets/backgrounds/home-living.webp` и `public/assets/characters/vlad/casual-{smile,awkward,laugh}.webp`. Ниже фактические художественные требования; изображения затем оптимизированы в WebP без удаления прозрачности. Использован встроенный режим, не CLI.

**Гостиная.** Reference image: существующий cafe-window.webp, только для стиля. Use case: illustration-story. One portrait 3:4 BACKGROUND ONLY for chapter three of the SAME cozy adult kawaii/chibi visual novel. Change setting to Vlad's modern cozy small apartment living room at evening, no cafe. Warm dusty rose and cream walls, sage cozy sofa with cream knitted blanket, honey oak coffee table with two mugs, bowls of snacks, TWO black Xbox-style game controllers, TV console and television with a colorful imaginary game landscape and NO text, floor lamp, plant, lavender twilight window. Three-quarter interior, space center-right for separate character, calm bottom. Fine warm brown outlines, soft painterly pastels, paper grain, honey lighting. No people, animals, letters, logos, hearts.

**Домашние эмоции.** Reference image: VLAD_APPROVED_MODEL.png, identity/proportions. Use case: identity-preserve. ONE full-body isolated sprite of the SAME adult Vlad AT HOME. Preserve voluminous curly light brown hair, gray-green eyes, thick brows, soft slightly long oval face, 3.5-head chibi proportions, warm brown outlines and pastel shading. Replace coat and scarf with oversized ivory short-sleeved t-shirt, charcoal relaxed trousers and soft gray socks. Entire figure including feet, centered portrait 1024×1536, genuinely transparent background without glow, no text/panels/props/other people. Три варианта запроса выражения: smile — friendly small confident smile, one relaxed hand slightly lifted; awkward — slightly embarrassed crooked smile, raised eyebrow, hand at back of neck; laugh — cheerful natural laugh with gently narrowed eyes, relaxed shoulders.

В текущем наборе neutral/warm у домашнего костюма используют smile, thinking/surprised — awkward. Это явные алиасы, не утверждение о шести новых отдельных рисунках.

Использован встроенный Imagegen. Исходные фотографии выступали только референсами лица/волос/одежды. В публичной сборке их нет. Согласованный в чате chibi-вариант — `VLAD_APPROVED_MODEL.png`. Производные эмоции создавались с ним как reference image.

## Базовый образ — уточнение пропорций

Edit the attached generated character into the agreed CHIBI proportions. Keep identity: soft long oval face, light brown voluminous curls, gray-green eyes, thick brows, slim, warm gray coat and gray scarf ivory shirt. Change body to exactly 3.5 heads tall full body (oversized head makes 29 percent of total height, short simplified slim torso and legs). Softer cute indie cartoon style with clean warm dark brown lines and simple flat pastel shading, not detailed anime handsome man, NOT realistic long adult proportions. Friendly small smile, slight bashful look. Entire figure in view feet at bottom. Completely transparent background: remove black and brown glow entirely, no colored background, no shadow around person. One isolated full-body concept character sprite. No text, no panels.

## Эмоции

Общий запрос: Edit ONLY facial expression and a small hand gesture of the provided approved Vlad chibi sprite: [expression]. Preserve exactly the face shape, gray-green eyes, curly voluminous hair silhouette, adult 3.5-head chibi proportions, coat, scarf, ivory shirt, trousers, shoes, linework, colors, same 1024x1536 portrait canvas, body scale and feet position. Keep entire figure visible and use genuinely transparent background with no colored glow. No text, no panels, no other people. This is emotion variant '[name]' for the same game character.

- neutral: relaxed neutral mouth, attentive calm brows, hands relaxed.
- awkward: small embarrassed uneven smile, one eyebrow slightly up, one hand touching scarf, glance a little aside.
- thinking: thoughtful neutral lips, finger gently near chin, attentive brows.
- laugh: natural cheerful laughing smile, eyes gently narrowed, slight torso tilt.
- surprised: raised eyebrows, small open mouth, subtle surprised shoulders.

## Вход в кафе

Portrait 3:4 BACKGROUND ONLY for a cozy kawaii adult chibi indie visual novel. Small autumn cafe seen from inside toward glazed entrance on left and small table on right. Dusty rose walls, honey oak floor, cream trim, lilac distant street, warm pendant lamps, leafy potted plant, framed little picture, a doormat by door and low counter far back. Large uncluttered center lower middle for character sprite, important environment in upper two thirds, bottom third calm. Hand-drawn soft brown fine outlines, flat pastel shapes with delicate paper shading, warm late afternoon. NO people, no cats, no text, no letters, no logos, no hearts. Beautiful coherent illustrated storybook indie game environment, not photorealistic or 3D.

## Столик у окна

Portrait 3:4 BACKGROUND ONLY, same cozy small cafe indie visual novel style: dusty rose walls cream trim honey oak wood lilac shadows, hand drawn fine warm brown outlines and soft flat pastels. Scene at a large arched window with autumn street beyond, a small round cafe table toward lower left with two simple chairs, a warm pendant lamp, small shelf and plant. Peaceful late afternoon golden light. Leave center-right middle area spacious for character sprite. Bottom third quiet color for dialogue overlay. No people, cats, food, text, logos or hearts. A premium restrained kawaii adult chibi setting.

## Пончик

Single isolated cream tabby cat with white bib and one slightly folded ear tip, loaf sitting pose sleepy friendly half closed eyes, small round paws and curved tail, cute but natural cozy indie visual novel illustration, warm dark brown outline, flat cream and caramel colors, 2D soft shading, transparent background, no text or props. Full cat inside square canvas.

## Нина

Single half body sprite of Nina, fictional cafe owner age 40, short dark wavy bob hair, soft rounded adult face, relaxed faint amused smile, cream blouse and sage green apron, holding a folded dish towel, same elegant cozy kawaii 2D indie visual novel style, warm fine brown outlines, restrained pastel flat shades, adult chibi proportions, transparent background, no text no background.

## Глава 2 — дождь под навесом

Смысловой промпт: портретный фон без персонажей для той же уютной kawaii/chibi-новеллы; использовать существующий вход в кафе как референс единого стиля. Вид из-под тканевого навеса кафе «Пауза» на осеннюю улицу во время мягкого дождя. Тёплые окна, кремовые детали, пыльно-розовые стены, медовый свет, лиловая дождливая глубина, мокрая мостовая и листья. Место под навесом сухое; композиция оставляет свободное пространство для отдельного спрайта Влада и нижнего диалогового окна. Тонкая тёплая коричневая линия, мягкая бумажная фактура, рисованная двумерная иллюстрация. Без людей, котов, надписей, логотипов и сердечек. Непрозрачный фон.

Подключён как `public/assets/backgrounds/rain-awning.webp`.

## Глава 2 — укрытие под аркой

Смысловой промпт: портретный фон в стиле существующего кафе, с теми же линией, палитрой и светом. Каменная арка маленького осеннего двора: сухой передний план под аркой, тёплый фонарь, плющ, дверь кафе справа, лужи и дождь на улице за укрытием. Кремовый камень, пыльно-розовые стены, медовые огни и приглушённая лиловая даль. Уютный вечер, а не гроза; свободный центр для персонажа и спокойный низ для интерфейса. Без людей, животных, текста и логотипов. Непрозрачная иллюстрация.

Подключён как `public/assets/backgrounds/rain-arcade.webp`. Оба фона созданы встроенным Imagegen с референсом фоновой иллюстрации первой главы и затем сжаты в WebP. Промпты здесь передают художественные требования; это не обещание побитового воспроизведения генерации.

## Глава 5 — закатное кафе и elegant

Создано встроенным Imagegen. Стиль кафе задан existing cafe-window.webp; личность Влада — VLAD_APPROVED_MODEL.png. Это производные оригинальные иллюстрации проекта.

**Фон.** Portrait 3:4 BACKGROUND ONLY for chapter five of the same cozy adult kawaii/chibi visual novel. Familiar small cafe with large arched window, sunset peach/honey light, dusty rose walls, cream trim, honey oak furniture, small round table and two chairs, autumn street through window, warm pendant lamp and a plant. Fine warm brown outlines, paper grain, restrained pastel shading. Clear center-right for a separate full-body character, calm lower area for dialogue. No people, cat, text, logos or hearts. Return to the established cafe rather than a different venue.

**Elegant-эмоции.** ONE full-body isolated sprite of the SAME approved adult Vlad; preserve soft slightly long oval face, gray-green eyes, thick brows, voluminous light brown curls and 3.5-head chibi proportions. Replace city outfit with soft black blazer, black turtleneck, straight dark trousers and dark shoes. Warm brown outlines, restrained pastel shading, entire figure and feet visible, centered portrait, transparent background without glow. No other people, text or panels. Smile — small relaxed warm smile; awkward — bashful crooked smile, slight eyebrow lift and hand near neck; laugh — open natural laugh with narrowed eyes and relaxed shoulders. Awkward/laugh use the generated elegant-smile as clothing and geometry reference. Итог — три WebP с альфа-каналом, отдельные ключи ресурсов и явные алиасы.
