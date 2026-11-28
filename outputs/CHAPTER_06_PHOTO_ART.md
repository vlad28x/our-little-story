# Арт новой шестой «Пока светло»

> Материал прежней редакции. Параметры экспорта и описание сборки относятся к моменту создания иллюстраций. Файлы текущей игры перечислены в [реестре изображений](../src/content/assetManifest.ts).

Три новых фона созданы встроенным `image_gen`, по существующему рисованному `public/assets/backgrounds/river-evening.webp`. CLI/API fallback не использовался. Исходный ночной фон и модель Влада не заменены. Работающий аппарат/счётчик — кодовая SVG-иллюстрация в `src/ui/PhotoCamera.tsx`, без марки и экрана; отдельной растровой камеры и превью фотографий нет.

| Asset ID | Рабочий файл | Размер | Байты |
|---|---|---|---|
| bg.photo6.sun | outputs/art/previous-assets/backgrounds/photo6-lower-sun.webp | 1000×1333 |339964|
| bg.photo6.shade | outputs/art/previous-assets/backgrounds/photo6-lower-shade.webp |1000×1333|294206|
| bg.photo6.upper | outputs/art/previous-assets/backgrounds/photo6-upper.webp |1000×1333|314946|

Все зарегистрированы до экспорта assetManifest. Фон sun используется на входе, в дружеской ветке и до исчезновения отражения. Shade — после покупки, водная ветка и возвращение к киоску; upper — только выбранный верхний участок. Подпись локации меняется вместе с фоном. Геометрия sun/shade одинакова; тень убирает золотой прямоугольник, не лестницу. У карты направления и результатов нет выдуманного лица героини.

Оригиналы сохранены в `C:/Users/User/.codex/generated_images/01a167ab-0d2f-7523-a78c-e1cfaf5b3c34/`:

- `exec-cbbf682c-dd1e-4416-8315-83d11059403e.png` — нижняя дорожка со светом.
- `exec-b956e499-415f-4292-b032-2026aadfe188.png` — та же дорожка в тени.
- `exec-afb9ed2d-680f-4f24-bcaf-1c2f83df31e4.png` — верхний променад.

Техническое уменьшение и WebP quality87/method6 — `work/install-photo6.py`, без содержательной ретуши. В проекте находятся все три используемых файла, приложение не зависит от внешнего пути generated_images.

## Точные промпты

### Нижняя дорожка

Референс: существующий `river-evening.webp`.

```text
Transform the reference visual novel environment to a DIFFERENT NEARBY SPOT of the same cozy autumn European canal city in LATE AFTERNOON DAYLIGHT, not night. Hand painted fine-line warm anime storybook background in same visual style. Vertical 3:4. A safe broad lower promenade with waist-high dark iron railings by canal in foreground and center. On right a broad ordinary stone stairway leads to an upper city walkway, a small closed-side kiosk tucked BESIDE the stairs. A tiny poster panel on kiosk shows abstract bands, stair fragments and reflections, without lettering, no vendor. Across water a PLAIN LIGHT OCHRE WALL is still struck by low golden sun; its reflection forms a DISTINCT SMALL GOLDEN RECTANGLE on water. Near our stairs the water also has a recognizable gray reflected staircase. Include a junction at left back toward a pedestrian street so this background works for meeting at promenade entrance as well. Bright pale cream blue sky, leafy orange trees, no stars, no lit streetlamps. Open center lower paving to overlay existing character. NO people, no animals, no camera, no gifts, no readable text, no UI, no photo frame. Architecture/geography must be coherent for a later edit where the SAME wall goes into shadow and only the golden rectangle disappears; permanent stair reflection remains. Keep image as single finished background.
```

### Исчезнувшее отражение

Референс: полученный PNG нижней дорожки.

```text
Edit ONLY lighting/reflection on this identical background, continuity variant for a visual novel: several minutes later a building shadow has covered the ENTIRE ochre wall across the canal. Remove the gold direct-sun patch and its GOLD RECTANGLE REFLECTION entirely, replace with muted cool gray stone and gray-blue water, retaining visible gray mirrored stairway lines in water. Keep EXACT geometry, framing, buildings, railings, staircase, kiosk, leaf locations and clear pale late afternoon DAY sky. Upper rooftops still lit softly. The LOWER paving by the railings should now be in soft shadow without direct golden streaks. NOT night, no stars, no lamps turning on, no people or added props. Same hand painted anime storybook style and vertical size.
```

### Верхний участок

Референс: полученный PNG нижней дорожки.

```text
Create the UPPER PROMENADE viewpoint after climbing the broad stone stairs of this same autumn canal-city illustrated background. Same fine-line hand painted warm anime storybook style, vertical 3:4. Eye level safe broad paved upper walkway, waist high iron railings in middle ground, stair landing visible at side, old city ROOFTOPS with a broad luminous pale sky between dark roof edges are the main view beyond the railing. One unlit tall streetlamp off to LEFT SIDE, not central. A small shop sign far to side, not central. Water mostly hidden below railings; no huge foreground canal surface. Late afternoon still daylight, lit roofs not night. Leave lower middle paving open for separately overlaid Vlad sprite. No people, no animals, no camera, no gifts, no lettering, no UI, no inset photo, no close-up portrait. A calm view to compose a photograph, matching the same neighborhood and reference palette.
```

Будущие проявленные кадры10 этим этапом не создавались. Субъект vlad/her/place и место upper/water сохраняются для будущего отпечатка; случайный кадр дополнительный, без спойлера его точной композиции в шестой. Галерея7 также не реализована этим артом.
