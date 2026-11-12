# Улица перед первой встречей — 13 ноября 2026

По поручению владельца для предыстории героини добавлен отдельный внешний вид кафе при дневном свете. Прежний интерьер в уличном вступлении не объяснял положение героини. Новый фон показывает фасад, дверь, пустой столик за окном и читаемую вывеску «Пауза»; в c1.before камера возвращается внутрь к Владу.

- Результат: `public/assets/backgrounds/cafe-approach-day.webp`, 1086×1448, WebP quality 90. Зарегистрирован как `bg.cafe.approach`.
- Используется только в c1.prologue. Три реплики, индексы, переходы, выборы и сохранения прежние.
- Подпись сцены: «У „Паузы“ · перед встречей». В c1.before/c1.entry прежний `bg.cafe.entry`; финал пятой главы использует прежний вечерний фон.
- Использован встроенный image_gen через навык imagegen, без CLI/API. Сгенерирован новый соседний файл; прежние ресурсы не перезаписаны.
- Исходник: `C:/Users/User/.codex/generated_images/01a1d199-4873-75c1-a516-e8299ce87663/exec-f2d6433f-7ec8-4b18-a51e-d191e23b967d.png`.
- Референсы: собственные `cafe-exterior-evening.webp` (целевая архитектура/вариант освещения) и `cafe-entry.webp` (стиль и согласованность интерьера). Приватные фото и сторонние ассеты не использовались.

## Точный промпт

```text
Use case: lighting-weather / illustration-story. Create a sibling game-background version of reference image 1, the exterior of the cafe, for the opening of a cozy Russian visual novel. Reference image 1 is the edit target: preserve this recognizable cafe's cream window and door framing, dusty rose facade, burgundy awning, climbing ivy and flower planters, quiet autumn street. Reference image 2 is supporting style/interior continuity only: the same cafe seen inside, with pale wood glass door, dusty rose walls, brass pendant lights, small round table and plants. Main change: this is an EARLIER VISIT, a clear dry autumn late afternoon, still daylight. Replace purple sunset and deep orange glow with soft warm daylight and a pale light blue sky. Warm pendant lights are visible through the cafe glass but do not dominate daylight. Make it immediately clear the viewer is OUTSIDE approaching this cafe on foot. Include a small tasteful legible cafe sign reading exactly «Пауза» above the door; no other lettering. Calm welcoming mood, polished hand-painted anime/storybook background, fine warm linework and softly textured shading, same style and architectural identity as references. Portrait 3:4 composition, approximately 1000 by 1333 or higher. Frame the entrance and large window prominently across the middle of the image so they remain readable when the game crops the background with cover/center 38% on both a narrow phone and a wide desktop; keep the sign in the upper middle below the top 20%, doorway near center, dry paving with a few autumn leaves in lower third. No people, no protagonist body/hands, no cat, no board game, no cups on outside paving, no UI, no speech bubbles, no watermark. Do not alter the cafe to an unrelated building or add a second entrance. Final production-quality background, not a mockup.
```

Без коммита и публикации.

## Проверка

Прошли TypeScript, ESLint изменённых TS/TSX, production build, 39 engine/save/content-проверок (включая 405 сочетаний первой главы) и четыре browser-проверки загрузки фона, смены сцены, reload и восстановления арта при сетевой ошибке. После визуальной проверки исправлено кадрирование только нового фона: object-position center 8% удерживает вывеску в кадре. Повторная production-сборка и browser-проверка пролога прошли.

Снимки CHAPTER_01_PROLOGUE_320.png и CHAPTER_01_PROLOGUE_960.png визуально проверены: вид снаружи, вывеска читается, персонажи отсутствуют, далее появляется прежний интерьер с Владом. Размер WebP 457332 байта; локальный сервер отдаёт его с HTTP 200. Сохранения игрока не изменялись; локальный Vite на 5173 оставлен работающим.
