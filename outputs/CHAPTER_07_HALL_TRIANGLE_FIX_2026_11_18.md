# Общий зал галереи: новая тень в центральной работе · 18 ноября 2026

> Материал прежней редакции. Параметры экспорта и описание сборки относятся к моменту создания иллюстраций. Файлы текущей игры перечислены в [реестре изображений](../src/content/assetManifest.ts).

## Причина и исправление

Владелец играет локально на 127.0.0.1:5173 и уточнил, что старый вариант виден на общем экране со всеми тремя картинами. Ранее исправлялся отдельный ресурс gallery7.chip, используемый в крупных планах и открытках. Но общий зал — готовый фон с уже нарисованными внутри него работами. Замена отдельного ресурса не обновляла центральную картину внутри этого фона.

Исправлен именно общий фон: встроенный image_gen получил прежний зал как edit target и chip-light-notch.webp как источник центральной работы. В центральной раме теперь виден светлый треугольник в тёмной полосе, согласованный с отдельным изображением.

Новый файл: `outputs/art/previous-assets/backgrounds/gallery7-hall-light-notch.webp` (1086×1448, 295336 байт). Manifest bg.gallery7.hall переключён на него; это обновляет и общую сцену, и карточку с этим фоном. Прежний gallery7-hall.webp сохранён.

Исходный PNG: `C:/Users/User/.codex/generated_images/01a1e101-d4dc-7572-966c-83b3944bbe25/exec-b382ae2f-fdd0-472e-9761-f81c09a6c35e.png`. PNG только перекодирован в WebP quality95/method6, без дополнительного кадрирования или рисования средствами Python. Общая композиция зала и расположение трёх работ сохранены.

Реплики, узлы, курсоры, эффекты, schema1/content19 и логика сохранений не менялись. Реальные пользовательские обычные/Telegram данные не читались и не изменялись. Без коммита и публикации.

## Промпт

Встроенный image_gen, `transparent_background=false`. Image1 — outputs/art/previous-assets/backgrounds/gallery7-hall.webp, Image2 — outputs/art/previous-assets/gallery7/chip-light-notch.webp.

```text
Use case: precise-object-edit / compositing. Image 1 is the EDIT TARGET: the existing warm portrait gallery room with exactly three framed photographs. Image 2 is the EXACT ARTWORK TO INSERT. Change ONLY the photographic image INSIDE THE CENTRAL GOLD FRAME of image 1: replace the old chipped-stair photograph with the corrected chipped-stair photograph from image 2, including its small LIGHT triangular notch cutting upward into the dark cast shadow band. The little bright triangle must be clearly recognizable in the central framed picture, matching image 2; it must not be the old dark downward-pointing tooth. Fit image 2 naturally to the existing center frame's inner opening, preserving the frame's exact size, position, perspective, gold moldings and shadows. Preserve EVERYTHING outside that center frame interior as closely as possible: room architecture, three wall panels, exactly three artworks, left stair artwork unchanged, right blue-door artwork unchanged, their frames, windows, autumn trees, view through the central arched window, lamps, floor pattern, sunlight, bench, door edges, camera viewpoint and original portrait crop. Do not redesign or rearrange the room. No people, new objects, captions, symbols, text or watermarks. This is a precise replacement of one framed print within an established game background.
```

## Проверка

- Production build с TypeScript успешен; существующее предупреждение о размере JS bundle остаётся.
- 10 content-проверок успешны.
- 4 served browser-проверки успешны: обе прогулки/обе работы, загрузка нового фонового файла, reload, меню подарков, результат.
- Существующая offline browser-проверка общего вида, крупных планов и карточки на телефоне/горизонтальном экране/десктопе успешна.
- Визуально осмотрен `work/GALLERY7_FINAL_hall.png`: в общем зале видны все три работы и светлый треугольник в центральной.
- Локальный Vite отдаёт новый manifest и новый фон с HTTP200. Новый filename исключает повторное использование кэшированного старого фонового URL.
- git diff --check без ошибок.

Проверка публичной версии была только диагностической: до уточнения владельца обнаружено, что в интернете по-прежнему старая работа. После уточнения «локально, где все3 картины» публикация не выполнялась. Подготовленный до уточнения архив в work/gallery-chip-light-release-20261118 не публиковался и не является текущим исправлением общего фона.
