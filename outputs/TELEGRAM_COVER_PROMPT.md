# Обложка Telegram Mini App

18 октября 2026. Создана встроенным Imagegen, без CLI/API-ключа. Исходные фотографии не использовались: референсы — одобренный художественный спрайт `public/assets/characters/vlad/city-smile.webp` и игровая иллюстрация `public/assets/backgrounds/cafe-window.webp`.

Файлы: `TELEGRAM_COVER_MASTER.png` — исходный результат 1672×941; `TELEGRAM_COVER_640x360.png` — готовый непрозрачный RGB PNG ровно 640×360 для BotFather. Финальный экспорт только уменьшает изображение; текст и персонаж не дорисовывались программно. Обложка не подключена к сценам и не меняет игровой контент. Файлы остаются локально в outputs, согласно текущему исключению PNG из Git.

## Финальный промпт

Use case: illustration-story.
Create a finished Telegram Mini App preview cover for the Russian romantic indie visual novel «Пять случайных встреч». Full-bleed landscape 16:9 image intended for export at exactly 640×360 pixels; compose at 1280×720 or higher with that same 16:9 ratio. This is one flat cover illustration, not a UI mockup or a device screenshot.
Input 1 is a CHARACTER IDENTITY reference, the user-approved Vlad sprite. Preserve his recognizable adult chibi appearance exactly: voluminous light chestnut curls with honey highlights, slightly elongated soft face, expressive thick eyebrows, gray-green eyes, subtle blush, gentle slightly mischievous smile. Same taupe gray-brown autumn coat and gray scarf. He is an adult represented in chibi style, not a baby. Frame him waist/chest up in the right 42% of the cover, looking warmly toward the viewer. Hair and face comfortably inside the frame, with breathing room.
Input 2 is a STYLE AND ENVIRONMENT reference: warm illustrated autumn cafe, arched window, warm amber sunlight, softly painted wood and muted terracotta. Adapt this scene to a wider horizontal composition, with quiet background detail.
Composition: the left 55% should softly transition into warm cream paper #FFF7ED for very clear title lettering; the illustration remains a continuous scene, without a hard panel boundary. The cafe window and autumn glow sit behind Vlad. Refined soft brown outlines, subtle paper texture, cozy cream / peach / muted dusty rose and lilac accents, matching the supplied game assets. Only two tiny elegant sparkle accents, no clutter.
Text VERBATIM, Cyrillic, on the left in three large beautifully balanced lines:
«Пять
случайных
встреч»
Do not draw guillemets. Use very legible rich plum #75425F lettering with a friendly rounded book-cover feel, restrained hand-lettered personality, excellent typographic spacing; all three words must read easily at a 320-pixel-wide thumbnail. Keep all lettering inside generous 7% margins. This exact title is the ONLY text.
Polished romantic indie visual novel key art, composition that looks intentional and distinctive. No extra characters, no real photographs, no generic website card, no buttons, no phone, no watermarks, no Telegram logo, no extra slogans. Opaque background.
