# Десятая «Два путешественника» — арт и постановка

> Материал прежней редакции. Параметры экспорта и описание сборки относятся к моменту создания иллюстраций. Файлы текущей игры перечислены в [реестре изображений](../src/content/assetManifest.ts).

18 ноября 2026. Локально, без коммита и публикации.

Использован встроенный image_gen по `C:/Users/User/.codex/skills/.system/imagegen/SKILL.md`. Исходники не перезаписаны. PNG оставлены в каталоге generated_images; новые копии WebP размещены в проекте. Pillow применён только для кодирования WebP (quality 90), без художественного редактирования.

## Вечерний стол у окна

Вход: `public/assets/backgrounds/cafe-window.webp`, предварительно просмотрен.
Результат: `outputs/art/previous-assets/backgrounds/travellers10-cafe-night.webp` → `bg.travellers10.cafe`.
Исходный результат: `C:/Users/User/.codex/generated_images/01a1eb80-3182-7bf1-b27a-117a26d6e476/exec-d76e2a74-0f8b-4273-99c4-94e73819e541.png`.

Точный промпт:

> Use case: lighting-weather. Asset: finished visual novel background, portrait 3:4. Edit target: provided cafe window illustration. Preserve the exact cozy illustrated cafe architecture, window, furnishings, gentle ink lines and watercolor anime palette. Change time to late evening, blue night sky outside with warm lit street lanterns and softly lit windows, warm amber pendant light inside. Recompose nearby table as a somewhat larger clear wooden table at lower left/center with space for game board and photographic prints that will be rendered by the app; clear the flower vase from tabletop. Leave no game, no photos, no people, no cat, no text. Keep right side open for character sprite. Elegant finished illustration matching original; no UI, watermark or decorative writing.

## Домашний вечер

Вход: `public/assets/backgrounds/home-living.webp`, предварительно просмотрен.
Результат: `outputs/art/previous-assets/backgrounds/travellers10-home-night.webp` → `bg.travellers10.home`.
Исходный результат: `C:/Users/User/.codex/generated_images/01a1eb80-3182-7bf1-b27a-117a26d6e476/exec-f1da981a-cf47-4cd7-8f69-da8d91a7671d.png`.

Точный промпт:

> Use case: precise-object-edit and lighting-weather. Edit target: provided visual novel living room background. Preserve exact room layout, green sofa left, window, lamp, plants, shelves, rug, warm ink watercolor anime style. Make it late night, blue dark sky and softly lit windows outside. Remove both game controllers, bowls, popcorn and mugs from coffee table; table should be mostly clear for paper photo envelope rendered later by app. Place two plain clear glasses of water toward back edge of table. TV screen off, dark softly reflective. Add a small unobtrusive desk with dark monitor at far right edge; clear small spot immediately beside monitor for a postcard rendered by app, do not draw a postcard. Warm table lamp lights room, quiet intimate everyday atmosphere. No people, no text, no game board, no new gifts. Portrait finished background, not collage or UI.

## Динамические композиции

`src/ui/TravellersArt.tsx` рисует поле SVG: два путешественника, река, карьер, обход, болото, домик, солнца, мостик и фонарь. Положение и остатки следуют чистой функции пути; ночью отдельно показан последний шаг. Двойной тап не расходует жетоны повторно. Пончик сначала появляется в крышке на памятке, затем на отдельном стуле с пледом.

Четыре выбранных отпечатка используют подходящие утверждённые фоны и отдельную композицию: 6 вариантов прогулки, 3 галереи, 4 кухни, 3 дворика. Для кадра блюда использована отдельная SVG-композиция целой порции и разломленного кусочка; вид начинки, направление снимка, руки и фон за блюдом зависят от событий 7–8. Доски двух фотографов отличаются ракурсом. При none физической открытки нет; «Скол» — только chip-light-notch.webp.

Косой отпечаток ног — иллюстрация уже существующего кадра шестой, без новой съёмки. Он возвращается у финиша и на открытке. Героине не назначена новая конкретная внешность: для её снимков используются силуэт, руки и обувь. Настоящие пользовательские изображения не запрашиваются.

Для прощания используется утверждённый уличный фон, для утра — bg.travellers10.morning; интимный путь гаснет на последней реплике без продолжения описания. Пустая бумажная рамка и четыре мотива реального приглашения — HTML/SVG; это возможный будущий вечер, без изображения якобы состоявшейся встречи.

## SHA-256

- `outputs/art/previous-assets/backgrounds/travellers10-cafe-night.webp`: `673e3832c73d223916dbb22d8fa9a91a5ee1c842762b27a958bc11c26105e4b3`
- `outputs/art/previous-assets/backgrounds/travellers10-home-night.webp`: `fc464f181560415763d4314f8c5aaa9aaa3b86fe9e4dab3187a2f4465b1e278d`

## Проверенные превью

- [Поле](../work/nov18/riverChoice-0.png)
- [Снимок блюда](../work/nov18/prints-0.png)
- [Общий финиш](../work/nov18/arrived-0.png)
- [Ночной финиш](../work/nov18/upperNight-1.png)
- [Дома](../work/nov18/homeChoice-1.png)
- [Короткое утро](../work/nov18/sleep-1.png)
- [Затемнение](../work/nov18/private-2.png)
- [Результат и приглашение](../work/nov18/result-0.png)

## Финальная сверка утра и предметов

Визуальная проверка выявила готовый завтрак в старом утреннем фоне и плавающую открытку поверх персонажа. Для десятой создан отдельный `outputs/art/previous-assets/backgrounds/travellers10-morning-tea.webp` → `bg.travellers10.morning`: стол без еды, только два стакана. Фон других глав не изменён. Домашние предметы теперь имеют координаты исходного арта в SVG с таким же cover-crop; открытка стоит рядом с монитором, персонаж сдвинут от неё. Утром домашние предметы не отображаются; приватное затемнение закрывает сцену тёмным слоем.

Вход: `outputs/art/previous-assets/backgrounds/s2-kitchen-morning.webp` (предварительно просмотрен).
Исходный результат: `C:/Users/User/.codex/generated_images/01a1eb80-3182-7bf1-b27a-117a26d6e476/exec-23803d0b-fc91-406b-9665-6ee64c41bdbd.png`.

Точный промпт:

> Use case: precise-object-edit. Edit target is the provided cozy visual novel kitchen morning background. Preserve exactly the room, camera composition, window, shelves, plants, autumn morning light and gentle ink watercolor anime drawing style. Remove the breakfast entirely from the foreground dining table: remove both plates, eggs, toast, tomatoes, salad, forks and food. Remove both mugs and floral centerpiece as well, leaving a mostly clear wooden tabletop with the existing muted mauve runner. Add exactly two simple empty clear drinking glasses side by side, near middle of table. Preserve the kettle on the kitchen counter. No additional food, breakfast service, photographs, envelope, postcard, characters or new objects. The scene is a short quiet morning before tea, no breakfast yet. Finished background, no labels or UI.

SHA-256 `travellers10-morning-tea.webp`: `45e464d547e705c7c41d9e9ff420039580ce103ed9fdb8fcaee9e3ad0d74258f`.
