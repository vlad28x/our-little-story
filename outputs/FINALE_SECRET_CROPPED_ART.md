# Настоящий обрезанный спрайт, без нарисованной линии

По уточнению владельца предыдущие CSS-маски и нарисованная полоса удалены. Встроенный imagegen отредактировал исходную картинку: справа от вертикального среза реальная прозрачность; исключение — целая кисть, пальцы, запястье и часть рукава, которые выступают перед краем.

Новый runtime-файл: public/assets/characters/advisers/devil-peek-cropped.webp,420×420,alpha сохранён. AssetId adviser.devil.peek перенаправлен на него. Один img, без второго слоя пальцев, clip-path или псевдоэлемента-полосы. Осталась лишь прямоугольная рамка для отсечения пустого прозрачного поля за всей кистью; руку она не режет. Самая нижняя часть спрайта тоже больше не обрезается фиксированной высотой.

В финальном PNG срез находится примерно на76.2% ширины; вся кисть выступает примерно до83.6%. CSS совмещает сам срез с краем открытки; это не прежняя81.3%-маска исходника. Пиксельная проверка реального WebP подтверждает: ряд волос на30% высоты заканчивается у среза, ряд кисти на65% выступает за срез более чем на5% ширины. На экране176px это около13px выступающей кисти/запястья, а не полоска пальцев.

Исходник imagegen: C:/Users/User/.codex/generated_images/01a147e4-8334-7380-99c4-febc35c62edb/exec-9e39b050-8a1a-453b-9fd4-78ada706a8a7.png (1254×1254). Референс редактирования: exec-d3b2babd-26a0-458a-9376-eaf452159eef.png в той же папке. Встроенный инструмент, не API/CLI; затем только механическое уменьшение и WebP quality92/method6. Поставляемая игра зависит от файла в public/assets, не от внешнего каталога исходников.

Проверены6 адресных браузерных сценариев (320/390/620/785/960 и короткий landscape), TypeScript/build и lint. Снимки FINALE_SECRET_<width>.png обновлены и осмотрены. Сюжет/прогресс/код и портрет диалога не менялись. Не опубликовано.

## Точный промпт редактирования

Edit this exact transparent PNG into a correctly trimmed peeking character sprite. Keep the same Vlad devil character, face, expression, head tilt, curls, horns, colors, painterly shading and pose. Do not redesign him or draw a new character.
The intended invisible vertical card boundary is at x=1019 of the1254px-wide source canvas (81.3% from the left), going through the INSIDE of his grasp. Actually REMOVE to transparent alpha all hair and clothing to the RIGHT of that vertical boundary. Preserve the silhouette to its left. IMPORTANT EXCEPTION: preserve the ENTIRE gripping HAND, ALL FINGERS, thumb, wrist and a little forearm/sleeve as an uninterrupted natural shape in FRONT of that boundary. Do NOT trim the hand down to a narrow strip of fingertips. The whole visible hand and wrist must cross and protrude to the RIGHT of the cut boundary so that he visibly grips the edge; allow a generous clear silhouette outside the edge, readable when shrunk to180px. If needed move only the gripping hand slightly outward, keeping its natural connection and same pose. Above and below the hand the right-hand cut of hair/coat must be a clean straight vertical transparent cut at81.3%. Keep the original overall canvas alignment and a truly transparent background.
ABSOLUTELY NO drawn line, NO white or cream strip, NO wall, NO panel, NO border, NO red mark, NO background, NO square, NO text. There must be only the trimmed character silhouette with the whole hand overlapping its otherwise straight cut edge. Original character everywhere else stays unchanged.
