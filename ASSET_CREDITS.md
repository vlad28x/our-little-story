# Происхождение ассетов

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
