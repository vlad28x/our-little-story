# Арт главы7 «Между строк»

19 октября2026. Один новый фон; существующие city-эмоции Влада и принятые крупные советчики переиспользованы. Частные фото и новый внешний вид не создавались.

- Финальный ассет: `public/assets/backgrounds/gallery-evening.webp`,1400×933,397422байта (~388KiB), WebP quality88. ID `bg.s2.gallery.evening`, status generated. Этот файл включён в локальный dist. Временного ассета нет.
- Оригинал встроенного инструмента imagegen: `C:/Users/User/.codex/generated_images/01a147e4-8334-7380-99c4-febc35c62edb/exec-d87122eb-1be3-4d60-82b1-a9aa8c368b4f.png`. Финальный файл скопирован в проект с механическим уменьшением/экспортом WebP; оригинал сохранён. Внешний API/CLI не использовался.
- У окна и у арки — два CSS-кадрирования одного фона. Выбор берётся из принятого второго ответа в activity/results; после частичного пропуска сохраняется.
- Проверены реальные рендеры через изолированный Chromium320×568,390×844,785×600,960×900, reduced motion в общем наборе. Скриншоты `outputs/CHAPTER_07_GAME_<WIDTH>.png`, `CHAPTER_07_ADVISERS_<WIDTH>.png`, `CHAPTER_07_RESULT_320.png` игнорируются Git.

## Точный промпт встроенного imagegen

> Create a polished landscape 3:2 background illustration for a cozy romantic kawaii/chibi visual novel, no characters. An autumn evening in a covered urban shopping gallery, glass wall showing rain on the left, warm amber illuminated shop windows and lamps, cream and muted plum architectural colors, restrained cherry accents, reflective tiled floor, a light stone side arch a little right of center. Friendly intimate atmosphere, painterly illustrated anime background, soft detailed lighting, consistent with a warm indie romance game. Keep the glass, quiet standing space and arch readable within central 60% for mobile center crops. No people, animals, silhouettes, text, shop lettering, logos, user interface or watermark. Not a dark tunnel, not a cafe or apartment. Full bleed, production background only.

`transparent_background=false`. Визуальная проверка выполнена перед экспортом: пустая сцена, дождь/стекло слева, светлая арка ближе к центру, тёплые витрины, без текста/персонажей. При дальнейшей генерации не менять approved chibi-лицо Влада и размеры советчиков.
