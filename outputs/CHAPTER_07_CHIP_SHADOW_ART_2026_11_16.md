# Исправление тени «Скола» · 16 ноября 2026

По прямому поручению владельца исправлена локальная иллюстрация: убран тёмный треугольный выступ на границе падающей тени. Нижняя граница тени теперь ровная; скол в бетоне и общий рисунок освещения сохранены. Результат осмотрен отдельно и в интерфейсе галереи на телефоне.

## Файлы и подключение

- Новый ресурс: `public/assets/gallery7/chip-shadow-fixed.webp` — 1086×1448, 482320 байт.
- `gallery7.chip` в assetManifest ссылается на новый ресурс, поэтому он используется и для работы, и для открыток/отсылки в8.
- Исходный `public/assets/gallery7/chip.webp` сохранён.
- Принятый PNG: `C:/Users/User/.codex/generated_images/01a1e101-d4dc-7572-966c-83b3944bbe25/exec-1cb1c4f2-aad6-402b-9bc1-829dd8474dd1.png`.
- PNG перекодирован в WebP (quality95/method6) без изменения размеров, кадрирования или рисования средствами Python.
- Генерация/редактирование выполнены встроенным `image_gen`, без CLI/API-ключа.

## Реплики

Убраны оставшиеся упоминания «зубца в тени» из текущей7. Короткий разговор теперь о светлых камешках в сколотом крае. Уточнены подпись изображения и описание открытки на стойке. В8 изменена только одна условная строка узнавания подаренной открытки; её текущая документация обновлена. Историческая7 в документе13 ноября остаётся прежней; актуальная7 находится в `CHAPTER_07_GALLERY_RUNTIME_2026_11_16.md`.

Число/индексы строк, IDs, меню, эффекты, schema1/content19, переходы и сохранения прежние. Дополнительного сброса нет. Пользовательские обычные и Telegram данные не читались и не изменялись. Без коммита и публикации.

## Точные промпты

Первая попытка (не принята: тёмный зубец практически сохранился):

```text
Use case: precise-object-edit. Asset type: existing photographic artwork displayed in a visual novel gallery, portrait image without a frame or text. Input image 1 is the EDIT TARGET. Correct ONLY the small physically implausible dark triangular spur on the lower border of the cast shadow, roughly below the existing chipped concrete stair nosing. The upper stair has a piece MISSING, so it must not cast an extra dark projecting tooth as if material protruded. Replace that downward dark triangle with a modest triangular SUNLIT NOTCH cutting into the dark shadow band, showing the same warm rough concrete surface as the surrounding sunlit lower tread. It must read clearly as light admitted through the missing piece of the upper stair edge, consistent with the existing directional sunlight from upper left; make the cutout and its projected light physically coherent. Keep the existing chipped upper edge, chipped exposed aggregate, positions of both stairs, exact camera perspective, framing, warm neutral colors, fine concrete grain, broad shadow direction and all other textures and objects unchanged as closely as possible. No extra cracks, no additional chips, no new protrusions, no dramatic lighting, no arrows, no labels, no border, no text. A very small repair of this one shadow detail, not a redesign.
```

Принятый вариант:

```text
Use case: precise-object-edit. Input image 1 is the EDIT TARGET, a photographic concrete staircase artwork. Make one tiny local correction ONLY: remove the DARK DOWNWARD TRIANGULAR TOOTH protruding from the bottom boundary of the large cast shadow onto the SUNLIT LOWER TREAD. This dark tooth is around x=54%, y=66% of the image. Paint out that small dark triangle using the same SUNLIT rough concrete texture immediately to its left/right/below. The resulting lower boundary of the shadow must be ONE STRAIGHT UNBROKEN DIAGONAL LINE across this central section, continuing the existing shadow edge on both sides. NO DARK TOOTH, NO LIGHT TOOTH, NO TRIANGULAR NOTCH, NO BUMP OR DIP at that location; just the straight shadow edge and continuous sunlit concrete below it. Do NOT alter the actual triangular CHIP in the UPPER concrete stair edge (around x=66%, y=33%); keep that chipped concrete exactly intact. Everything else must remain exactly as before: both stairs, aggregate, surface pores, warm light from upper left, camera viewpoint, original portrait crop, broad shadow band. This is a small shadow cleanup, not a new photograph. No text, frame or annotations.
```

Обе попытки использовали как edit target `public/assets/gallery7/chip.webp`, `transparent_background=false`. Первая попытка сохранена инструментом как `exec-b31f5cb8-b594-4f90-bacd-f60b15d600a6.png` в том же каталоге generated_images и в игру не подключалась.

## Проверка

- Production build (включая TypeScript) и ESLint — успешно.
- 28 unit/content-проверок — успешно: полный граф, текст текущих7–8, все72 сочетания галереи, save/reload и факты/подарки.
- 4 served browser-проверки на base `/` — успешно: обе прогулки и оба выбора работы, реальная загрузка нового WebP, reload, меню подарка и результат.
- Визуально осмотрен `work/GALLERY7_SHORT_together_chip_390.png`: используется новая картинка с ровной границей тени.
- Дополнительные тесты и миграции ради косметического изменения не добавлялись.
