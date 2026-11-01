# Выход из «Паузы»: отдельный уличный фон

24 октября 2026. Локальная визуальная правка по просьбе владельца. Без коммита и публикации; опубликованная версия остаётся выпуском `de000fb`.

## Решение и подключение

Создан вид знакомого кафе с улицы. Существующие `cafe-entry` и `cafe-window` показывают интерьер; `shop-window-evening` — магазин керамики из шестой. Новый фон сохраняет арочное окно, розовую штукатурку, кремовые рамы, лампу и столик из действующего кафе. Вечерний свет и свободная дорожка поддерживают короткое прощание.

Файл: `public/assets/backgrounds/cafe-exterior-evening.webp`, 1000×1333, WebP quality87. В manifest зарегистрирован как `bg.cafe.exterior`.

В `c5.exit` строки0–1 (прощание с Ниной) остаются на `bg.cafe.sunset`. Со строки2 «Вы выходите из „Паузы“…» и до окончания — новый экстерьер. Подпись локации: «У „Паузы“ · вечер». Влад остаётся в прежнем наряде; Пончик и предметы на столе с улицы не отображаются. Открытка и реальное приглашение прежние.

Для переключения используется необязательное `Scene.variants[].fromLine`, проверяемое валидатором контента и вычисляемое `resolveScene` по текущему `run.lineIndex`. Это отображение, оно не записывается в сохранение. Узел, шесть реплик, их индексы, turn и переходы не менялись: schema1/content14 и c5Edition3 прежние. Reload на улице сразу восстанавливает уличный фон. Старые замороженные редакции пятой не меняются.

## Происхождение

Использован встроенный `image_gen`, режим смены точки обзора по двум локальным референсам (не CLI). Исходники-референсы не заменялись:

- `public/assets/backgrounds/cafe-sunset.webp`
- `public/assets/backgrounds/cafe-entry.webp`

Оригинал результата: `C:/Users/User/.codex/generated_images/01a167ab-0d2f-7523-a78c-e1cfaf5b3c34/exec-26e5c8cf-04d0-4da6-8cf3-04df15542add.png`. В проекте хранится рабочий WebP; PNG оставлен на прежнем месте. Перекодирование без содержательной ретуши: `work/install-cafe-exterior.py`.

Точный промпт:

```text
Use case: illustration-story / change viewpoint. Create a matching exterior reverse view of the same small cozy café shown in the two reference interior images, for the last scene of a romantic mobile visual novel after the protagonists leave. References are the same café: preserve its warm rose-plaster walls, cream wood trim, tall arched window, honey colored lamp and little round table visible through the glass, trailing green plants. Show the café FROM OUTSIDE on a quiet dry autumn pedestrian street at early evening, sunset fading to muted lavender; warm amber light spills from the arched window and glazed entrance door onto pale stone pavement. Through glass there is just a glimpse of the familiar round table, lamp, a small plain sheet near a counter; no drawing details or readable lettering. Cozy hand-painted anime storybook background with clean fine linework and soft painterly light, matching the references. Vertical portrait composition roughly 3:4, detailed and readable when cropped horizontally in game: café facade and glowing arched window at left half, quiet path receding at right; keep central lower foreground relatively open for a separate character sprite, lower quarter unobtrusive for UI overlay. No people, no animals, no character sprite, no UI, no captions, no watermarks, no text, no ceramic shop display, no river, no rain. This is one background image only. The door and window must clearly be viewed from the street, not from inside.
```

## Проверки

- Все145 unit/React и10 контентных проверок прошли. Проверяется граница смены фона в каждой из шести строк и недопустимый fromLine; прежние проверки сохранений/замороженных редакций проходят.
- Lint, TypeScript и сборки с base `/our-little-story/` и `/` прошли.
- Четыре production browser-проверки под Pages base прошли: дегустация и reload, маршрут4→5→6, старый курсор V12, новый переход внутри→снаружи. Последняя проверка выполнена при320×568,390×844,667×375 и960×900; для каждой строки проверены фон, местоположение, наряд, отсутствие кота/предметов на улице и горизонтального переполнения. Reload на lineIndex2 сохраняет точный JSON и показывает улицу; далее достигаются прежняя открытка и приглашение.
- Снимки390 и960 просмотрены визуально. Логи: `work/cafe-exit-*.log`; снимки: `work/CAFE_EXIT_320.png`, `work/CAFE_EXIT_390.png`, `work/CAFE_EXIT_667.png`, `work/CAFE_EXIT_960.png`.
- После проверки восстановлена сборка с base `/`; новый фон на сервере5173 отвечает200. Другие главы и legacy-графы не менялись, HEAD остаётся `8db106d`. Коммита и публикации новой правки нет.

Пользовательские normal/dev/Telegram-сохранения не использовались; браузерные проверки работали с отдельными синтетическими копиями в Chromium.
