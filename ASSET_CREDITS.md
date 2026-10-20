# Происхождение ассетов

Уточнение по обрезке: runtime adviser.devil.peek теперь использует `characters/advisers/devil-peek-cropped.webp`,420×420 с настоящим alpha-срезом и целой выступающей кистью. Редактирование встроенным imagegen; [промпт и происхождение](outputs/FINALE_SECRET_CROPPED_ART.md). Предыдущая devil-peek.webp не используется этим AssetId. Только локально.

Секрет пятого финала (19 октября2026): `characters/advisers/devil-peek.webp` (420×420) и `devil-lean.webp` (640×427) созданы встроенным imagegen по одобренному советчику и концепту, alpha сохранён. Позы: выглядывает из-за вертикального края / опирается на рамку с конвертом. Исходные фото не использованы. Промпты и происхождение — [outputs/FINALE_SECRET_ART.md](outputs/FINALE_SECRET_ART.md). Generated, integrated locally; не опубликовано.

Глава6 (19 октября2026): `public/assets/characters/advisers/angel.webp`, `devil.webp`, `public/assets/backgrounds/shop-window-evening.webp` созданы встроенным Imagegen по уже одобренным city-smile/river-evening. Без исходных фото; alpha советчиков сохранён. Точные промпты, размеры и происхождение — [outputs/CHAPTER_06_ART.md](outputs/CHAPTER_06_ART.md). Карта маршрута/искры — оригинальная векторная графика проекта. Статус: Generated, integrated; автор одобрил визуальный результат и публикацию после увеличения советчиков.

Обложка Telegram Mini App (18 октября 2026): `outputs/TELEGRAM_COVER_MASTER.png` и экспорт `outputs/TELEGRAM_COVER_640x360.png`. Создана встроенным Imagegen по художественным референсам city-smile и cafe-window, без исходных фотографий. Промпт и параметры экспорта — `outputs/TELEGRAM_COVER_PROMPT.md`. Это отдельный локальный файл для загрузки в BotFather, не runtime-ресурс игры; статус Generated, ready for owner upload.

17 октября 2026. Runtime-ресурсы находятся только в `public/assets/`. Оригинальные фотографии и личные переписки в поставку не включены.

| Ресурс | Происхождение | Статус |
|---|---|---|
| `characters/vlad/city-smile.webp` | Создан встроенным Imagegen по предоставленным пользователем референсам и CHARACTER_BIBLE; chibi-модель согласована пользователем в чате | Approved base model |
| `characters/vlad/city-{neutral,awkward,thinking,laugh,surprised}.webp` | Встроенный Imagegen, варианты одобренной базовой модели с сохранением одежды и геометрии | Generated, integrated |
| `backgrounds/cafe-entry.webp`, `backgrounds/cafe-window.webp` | Встроенный Imagegen по ART_DIRECTION, вымышленные интерьеры | Generated, integrated |
| `backgrounds/rain-awning.webp`, `backgrounds/rain-arcade.webp` | Встроенный Imagegen со стилистическим референсом исходного иллюстрированного кафе; вымышленные дождливые локации | Generated, integrated |
| `characters/cat.webp`, `characters/nina.webp` | Встроенный Imagegen, вымышленные персонажи по CHARACTER_BIBLE | Generated, integrated |
| `backgrounds/home-living.webp` | Встроенный Imagegen, стиль кафе использован как reference, новый вымышленный интерьер квартиры | Generated, integrated |
| `backgrounds/river-evening.webp` | Встроенный Imagegen со стилистическим референсом кафе, вымышленная освещённая набережная | Generated, integrated |
| Созвездия: кот 17 звёзд, один геймпад 12, чайник 16 | Оригинальные SVG-эскизы, согласованные автором 19 октября; единая геометрия constellationModel/ConstellationArt для игры и открытки | Original vector, approved and integrated |
| `characters/vlad/casual-{smile,awkward,laugh}.webp` | Встроенный Imagegen по одобренной chibi-модели, новая домашняя одежда; прозрачность сохранена при сжатии в WebP | Generated, integrated; три отдельные эмоции |
| Кухня, продукты, повара, два геймпада | Оригинальная SVG-графика в Kitchen.tsx и KitchenControls.tsx; интерфейс создан специально для игры | Original vector |
| Пасхалки сцены: завиток, печенье, край пледа, кот на ТВ, сердце из пара, звезда, вывеска | Оригинальные SVG в SceneEasterEggs.tsx и SceneEasterPropArt.tsx, созданные специально для игры; индикатор использует существующий KitchenControls | Original vector |
| Предметы, жетон, конверт, значки открыток | Оригинальная SVG-графика проекта в `src/ui/Illustration.tsx` | Original vector |
| Звуки действий | Оригинальные синтезированные сигналы через Web Audio API в `src/ui/useSound.ts` | Original synthesis |
| Шрифты | Системный шрифтовой стек устройства | Не загружаются извне |

Генерация не является заимствованием стокового ассета с заявленной сторонней лицензией. Внешняя коммерческая музыка, логотипы, игровые интерфейсы и чужие персонажи не использованы. Генеративный арт не помечается как нарисованный вручную. Публичные изображения — художественные производные, не исходные фотографии.

Базовый согласованный PNG оставлен для будущего продолжения в `outputs/VLAD_APPROVED_MODEL.png`. Оптимизация runtime — изменение размера и WebP-кодирование, без изменения содержания. Набор промптов: `outputs/ASSET_PROMPTS.md`.

## Финальная пятая глава

`backgrounds/cafe-sunset.webp` создан встроенным Imagegen по стилистическому референсу кафе. `characters/vlad/elegant-{smile,awkward,laugh}.webp` — три новые эмоции одобренной модели в чёрном пиджаке и водолазке, прозрачность сохранена при WebP-кодировании. neutral/warm используют smile, thinking/surprised — awkward. Нашивка-облако и чехол — оригинальная SVG-графика Illustration.tsx. Ресурсы интегрированы, внешние фотографии и переписки в поставку не включены.

## Welcome message Telegram-бота

`outputs/TELEGRAM_WELCOME_MASTER.png` и экспорт `outputs/TELEGRAM_WELCOME_640x360.png` — новая иллюстрация встроенного Imagegen, 18 октября 2026, по художественным референсам city-smile.webp и cafe-window.webp. Оригинальные фотографии не использовались. Локальный ассет для ручной загрузки в BotFather; не подключён к игре. Только уменьшение до 640×360 при экспорте, без изменения содержания. Промпт — outputs/TELEGRAM_WELCOME_PROMPT.md.

## Аватарка Telegram-бота

`outputs/TELEGRAM_BOT_LOGO_MASTER.png` и экспорт `outputs/TELEGRAM_BOT_LOGO_512.png` — встроенный Imagegen, 18 октября 2026, художественный референс city-smile.webp. Квадратный chibi-портрет Влада для круглого отображения; экспорт 512×512 только уменьшает исходник. Частные фото не использовались, в игру не подключён. Промпт — outputs/TELEGRAM_BOT_LOGO_PROMPT.md.

## Глава7 — галерея

`public/assets/backgrounds/gallery-evening.webp` — встроенный imagegen,19 октября2026. Оригинальная иллюстрация без персонажей и частных фото;1400×933, WebP397422байта. Точный промпт, исходник и экспорт — outputs/CHAPTER_07_ART.md. Фон подключён только к локальной главе7, публикация не выполнялась.

## Заключительные главы8–10

Три оригинальных фона встроенного imagegen,19октября2026: public/assets/backgrounds/s2-kitchen-evening.webp (162368байт), s2-cinema-courtyard.webp (398730байт), s2-cafe-terrace.webp (299170байт); все1400×933. Без частных фотографий. Точные промпты/PNG-источники и экспорт — outputs/SEASON_02_FINAL_ARC_ART.md. DessertArt/LampArt/BookmarkArt/SilentFilmArt — оригинальная векторная графика проекта, без чужих фильмов/музыки. Assets подключены в локальной сборке; публикация не выполнялась.

## R2 — утро после десятой встречи

`public/assets/backgrounds/s2-kitchen-morning.webp` — встроенный imagegen,20октября2026, утренняя вариация утверждённой кухни;1400×933,199304байта. Без людей, частных фотографий, текста и музыки. Точный промпт, PNG-источник и экспорт — [SEASON_02_R2_ART.md](outputs/SEASON_02_R2_ART.md). Подключён локально к утренней сцене и открытке «До утра»; публикация не выполнялась.


## R3: утверждённый боковой ангел

20 октября2026: public/assets/characters/advisers/angel-peek-r3.webp — производная от outputs/art/angel-peek-r3-approved.png, созданного встроенным imagegen по существующему ангелу и принципу крепления спрайта дьявола. Поза отдельно утверждена владельцем. Оригинал, референсы и точный промпт: outputs/SEASON_02_R3_ART_REVIEW.md, outputs/art/angel-peek-r3-prompt.txt. Прозрачный WebP; исходные фотографии не используются.
