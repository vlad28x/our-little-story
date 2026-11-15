# Девятая встреча · «С крышей разберёмся» · точный runtime

Локальная реализация 15 ноября 2026. Schema 1 / content 18, scriptRevision 5. Основа — исправленный владельцем сценарный черновик от 14–15 ноября. Публикация не выполнялась. Десятая закрыта.

Ниже все узлы, реплики, варианты и действия фактического `src/content/chapters/ch09.ts`. Это точная выгрузка для сверки, не новый сценарий. Выборы и условия не произносятся.

### `c9.courtyard.entry` · dialogue

Фон: `bg.courtyard9.open`.

0. Н — Влад ждёт у кирпичной арки. В руках у него маленький бумажный пакет. Из дворика доносится скрежет стульев.

После чтения: `[{"kind": "set", "key": "c9Place", "value": "courtyard"}]`.

1. В — привет. я правильно пришёл? кот с афиши пока не встретил.

2. Т — У него подготовка к главной роли. Пойдём, я покажу.

3. Н — Ты проводишь Влада мимо кассы. Над рядами стульев натянуты гирлянды, у стены белеет экран. Сбоку стоят столики под широким навесом.

4. Т — Я выбрала этот дворик, потому что отсюда не видно дороги. Будто зашла в чей-то большой двор.

5. В — и сразу села смотреть телевизор хозяевам.

6. Т — Билеты я всё-таки купила.

7. В — тогда официально. угощение к просмотру.

8. Н — Он приоткрывает пакет. Внутри пять круглых печений, одно чуть надломлено.

Далее: `c9.courtyard.hoodieRoute`.

### `c9.courtyard.hoodieRoute` · route

- `[{"key": "c8Hoodie", "equals": "borrowed"}]` → `c9.courtyard.hoodie`
- Иначе → `c9.courtyard.camera`

### `c9.courtyard.hoodie` · dialogue

Фон: `bg.courtyard9.open`.

0. Т — И твой карман с бонусной салфеткой тоже приехал.

1. Н — Ты достаёшь сложенное худи. Влад берёт его и перебрасывает через руку.

После чтения: `[{"kind": "set", "key": "c9Hoodie", "value": "returned"}]`.

2. В — салфетка цела?

3. Т — Уехала раньше. Отдельным рейсом.

4. В — ладно. одежду принимаю без комплектации.

Далее: `c9.courtyard.camera`.

### `c9.courtyard.camera` · dialogue

Фон: `bg.courtyard9.open`.

0. Н — До начала ещё светло. Ты достаёшь аппарат. Влад придерживает край пакета, чтобы тот не попал перед объективом.

1. Т — Девять осталось. Хочу сегодня сдать аппарат в проявку. Тут как раз есть на что потратить.

2. В — вон на третьем стуле уже сидит чужая сумка. тоже пришла заранее.

Далее: `c9.courtyard.frameChoice`.

### `c9.courtyard.frameChoice` · choice

Фон: `bg.courtyard9.open`.

Какой кадр оставишь с этого вечера?

- `vlad` — Сниму тебя с этим пакетом → `c9.courtyard.frameVlad` · `[{"kind": "set", "key": "c9Frame", "value": "vlad"}]`
- `seats` — Давай наши места до начала фильма → `c9.courtyard.frameSeats` · `[{"kind": "set", "key": "c9Frame", "value": "seats"}]`
- `yard` — Хочу поймать весь дворик → `c9.courtyard.frameYard` · `[{"kind": "set", "key": "c9Frame", "value": "yard"}]`

### `c9.courtyard.frameVlad` · dialogue

Фон: `bg.courtyard9.open`.

0. Т — Не прячь печенье. Оно тоже приглашено.

1. Н — Влад держит пакет на уровне груди. За плечом видны арка и ещё пустой край экрана.

2. В — вот теперь точно официальный состав.

3. Н — Ты нажимаешь кнопку. Он опускает пакет и заглядывает внутрь: всё ли пережило съёмку.

После чтения: `[{"kind": "set", "key": "c9Film", "value": "key"}]`.

Далее: `c9.courtyard.cameraEnd`.

### `c9.courtyard.frameSeats` · dialogue

Фон: `bg.courtyard9.open`.

0. Т — Положи пакет между стульями. Пока у нас всё целое и никто не шуршит.

1. Н — Два соседних стула стоят чуть неровно. Влад поправляет один, но ты поднимаешь ладонь.

2. Т — Оставь. Так видно, что мы уже пришли.

3. Н — Ты снимаешь два стула с пакетом между ними. В верхнем углу остаётся верёвка с бумажным номером ряда.

После чтения: `[{"kind": "set", "key": "c9Film", "value": "key"}]`.

Далее: `c9.courtyard.cameraEnd`.

### `c9.courtyard.frameYard` · dialogue

Фон: `bg.courtyard9.open`.

0. Т — Подержи секунду сумку. Отсюда арка вся помещается.

1. Н — Ты снимаешь дворик от входа: ряды стульев, край навеса и белый экран между стенами.

После чтения: `[{"kind": "set", "key": "c9Film", "value": "key"}]`.

2. В — меня, если что, искать возле печенья.

3. Н — Ты опускаешь аппарат. Влад уже занялся разворачиванием пакета.

Далее: `c9.courtyard.cameraEnd`.

### `c9.courtyard.cameraEnd` · dialogue

Фон: `bg.courtyard9.open`.

0. Н — Пока дворик заполняется, вы доснимаете оставшиеся восемь: номер ряда, гирлянду, плющ на кирпиче, кассовое окошко. Аппарат ещё несколько раз переходит из рук в руки.

1. Н — Последним Влад снимает тень решётки на светлой стене. Колёсико проворачивается до конца. Ты убираешь аппарат в сумку.

После чтения: `[{"kind": "set", "key": "c9Film", "value": "empty"}]`.

2. Т — Всё. Теперь уже точно не подглядишь.

3. В — придётся доверять фотографам.

Далее: `c9.courtyard.seats`.

### `c9.courtyard.seats` · dialogue

Фон: `bg.courtyard9.open`.

0. Н — Вы садитесь. Сотрудница проходит вдоль рядов, просит убрать телефоны и предупреждает, что у выхода лежат пледы.

1. Н — Вы съедаете по печенью. Тебе достаётся надломленное; оставшиеся три Влад прикрывает краем пакета.

2. Т — Давай сначала посмотрим. А то я сейчас сама всё придумаю вместо фильма.

3. В — договорились. пока кот с афиши удерживает пассажира до выяснения обстоятельств.

Далее: `c9.courtyard.filmStart`.

### `c9.courtyard.filmStart` · dialogue

Фон: `bg.courtyard9.open`.

0. Н — Гирлянды гаснут. На экране человек кладёт в чемодан рубашку. Стоит ему отвернуться за другой, как первая оказывается на полу.

1. Н — Кот устраивается на освободившемся месте. Человек достаёт его, поворачивается за рубашкой — и кот снова лежит в чемодане.

2. Н — Влад молча подвигает к тебе открытый пакет. Вы берёте ещё по печенью; в глубине остаётся последнее.

3. Н — На столе возле чемодана стоит фотография: тот же человек гораздо моложе, рядом женщина с этим котом ещё маленьким. Человек выпрямляет рамку и кладёт на стол ключ.

4. Н — Раздаётся глухой стук. Ты сначала ищешь его на экране, но следующая капля падает тебе на запястье.

Далее: `c9.courtyard.rain`.

### `c9.courtyard.rain` · dialogue

Фон: `bg.courtyard9.open`.

0. Н — По рядам раскрываются первые зонты. На белом экране застывает рука с ключом. У стены загорается рабочий свет.

1. Сотрудница — Пожалуйста, пройдите под навес. Технику сейчас прикроем. Если дождь не усилится, продолжим через несколько минут.

2. Н — Ты подхватываешь сумку. Влад складывает пакет и забирает его со стула. Под навесом уже тесно; у соседней арки ещё свободно.

3. Т — Я так хотела показать тебе этот дворик. Чтобы тебе тоже здесь понравилось.

4. В — мне нравится. дождь у вас тут, конечно, с размахом.

5. Т — В следующий раз проверю, есть ли крыша.

6. В — бери место, которое тебе нравится. с крышей разберёмся.

7. Н — Он стряхивает капли с пакета и ждёт, пока ты оглядываешь дворик.

Далее: `c9.courtyard.rainAside`.

### `c9.courtyard.rainAside` · dialogue

Фон: `bg.courtyard9.open`.

0. Д — Хорошо хоть печенье без электричества работает.

1. А — Но крыша ему тоже нужна.

Далее: `c9.courtyard.rainChoice`.

### `c9.courtyard.rainChoice` · choice

Фон: `bg.courtyard9.open`.

Как продолжим вечер?

- `canopy` — Переждём здесь. Хочу досмотреть → `c9.courtyard.canopy` · `[{"kind": "set", "key": "c9Rain", "value": "canopy"}]`
- `arch` — Давай проверим ту арку — отсюда экран почти не видно → `c9.courtyard.arch` · `[{"kind": "set", "key": "c9Rain", "value": "arch"}]`
- `leave` — Не хочу ждать под дождём. Давай уйдём → `c9.courtyard.leave` · `[{"kind": "set", "key": "c9Rain", "value": "leave"}]`

### `c9.courtyard.canopy` · dialogue

Фон: `bg.courtyard9.canopy`.

0. Н — Ты находишь место у высокого столика. Влад становится рядом и кладёт пакет в сухую середину.

1. Т — Смотри, оттуда хотя бы край экрана видно. Когда начнут, подвинемся.

2. В — я пока покараулю это место. сходишь за пледом?

3. Н — Ты берёшь один из пледов у выхода. Когда возвращаешься, Влад уже освободил тебе место у стены, куда не достают брызги.

4. Т — Нам достался весь столик.

5. В — за него пока никто не внёс печенье.

Далее: `c9.courtyard.hoodieRainRoute`.

### `c9.courtyard.arch` · dialogue

Фон: `bg.courtyard9.arch`.

0. Н — Ты показываешь Владу на сухую полосу вдоль стены. Под аркой стоят два складных стула и ящик с пледами.

1. Т — Подержи сумку. Я спрошу, сюда можно.

2. Н — Ты подходишь к сотруднице. Она кивает на стулья: отсюда тоже разрешают смотреть. Вернувшись, ты забираешь сумку у Влада.

3. Т — Можно. Только левый качается.

4. В — тогда мой левый. у стены устоит.

5. Н — Он ставит качающийся стул вплотную к стене. Ты разворачиваешь второй к экрану. Сбоку виден весь прямоугольник, а над головой больше не капает.

6. Н — Ты берёшь из ящика плед и кладёшь на спинку своего стула.

7. Т — Вот. И возвращаться никуда не надо.

Далее: `c9.courtyard.hoodieRainRoute`.

### `c9.courtyard.leave` · dialogue

Фон: `bg.courtyard9.open`.

Вариант сцены: `{"when": [], "fromLine": 2, "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Т — Не хочу ждать под дождём. Давай уйдём.

1. В — пойдём. с этой стороны выход сухой.

2. Н — Вы обходите ряды вдоль стены. За аркой дождь стучит по жестяному козырьку, а на углу светится витрина булочной.

3. Н — Ты становишься у витрины. Между булками и отражением улицы видны ваши два мокрых плеча.

4. Т — А кот так и остался в чемодане.

5. В — у него хотя бы сухо.

Далее: `c9.courtyard.hoodieRainRoute`.

### `c9.courtyard.hoodieRainRoute` · route

- `[{"key": "c8Hoodie", "equals": "borrowed"}]` → `c9.courtyard.hoodieRain`
- Иначе → `c9.courtyard.warmth`

### `c9.courtyard.hoodieRain` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Н — Влад снимает с руки худи и протягивает тебе. У твоего плеча промок край рукава.

1. В — его мы пока никуда не сдаём. накинь.

Далее: `c9.courtyard.hoodieChoiceRoute`.

### `c9.courtyard.hoodieChoiceRoute` · route

- `[{"key": "c9Rain", "equals": "leave"}]` → `c9.courtyard.hoodieChoiceLeave`
- Иначе → `c9.courtyard.hoodieChoice`

### `c9.courtyard.hoodieChoice` · choice

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

Худи снова пригодилось. Возьмёшь?

- `keep` — Возьму ещё до следующего раза → `c9.courtyard.hoodieKeep`
- `return` — Я лучше укроюсь пледом, худи забирай → `c9.courtyard.hoodieReturn`

### `c9.courtyard.hoodieChoiceLeave` · choice

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

Худи снова пригодилось. Возьмёшь?

- `keep` — Возьму ещё до следующего раза → `c9.courtyard.hoodieKeep`
- `return` — Я лучше застегнусь, худи забирай → `c9.courtyard.hoodieReturn`

### `c9.courtyard.hoodieKeep` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Н — Ты надеваешь худи поверх своей одежды. Мокрый край рукава прячется в сухую манжету.

После чтения: `[{"kind": "set", "key": "c9Hoodie", "value": "kept"}]`.

1. Т — Тогда ещё немного побудет у меня.

2. В — бери.

Далее: `c9.courtyard.next`.

### `c9.courtyard.hoodieReturn` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Т — Я лучше укроюсь пледом, худи забирай.

При `[{"key": "c9Rain", "equals": "leave"}]`: Я лучше застегнусь, худи забирай.

1. Н — Влад убирает худи к себе; ты подтягиваешь плед к плечам.

При `[{"key": "c9Rain", "equals": "leave"}]`: Ты застёгиваешь свою куртку. Влад убирает худи к себе.

2. В — ладно.

Далее: `c9.courtyard.next`.

### `c9.courtyard.warmth` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Н — Ты подтягиваешь плед к плечам. Влад пододвигает пакет подальше от края, куда долетают капли.

При `[{"key": "c9Rain", "equals": "leave"}]`: Ты застёгиваешь куртку. Влад становится с краю козырька, оставляя тебе сухое место у витрины.

Далее: `c9.courtyard.next`.

### `c9.courtyard.next` · route

- `[{"key": "plan", "equals": "coop"}]` → `c9.courtyard.nextCoop`
- Иначе → `c9.courtyard.nextOther`

### `c9.courtyard.nextCoop` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Т — Кстати, есть ещё одно место, куда мы так и не добрались. Ты обещал показать, как довести двух путешественников до домика.

1. В — помню. коробка всё ещё ждёт второго человека.

2. Т — Тогда в следующий раз приноси. Посмотрим, кто у тебя там всё время теряется.

Далее: `c9.courtyard.nextDate`.

### `c9.courtyard.nextOther` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. В — давай в следующий раз достанем ту настолку, с которой я в первый вечер пришёл в кафе. с двумя путешественниками.

1. Т — Которым надо добраться до домика?

2. В — да. хотя бы у них крыша в комплекте.

Далее: `c9.courtyard.nextDate`.

### `c9.courtyard.nextDate` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Т — В «Паузе»? За тем столом у окна.

1. В — давай. я принесу коробку.

2. Н — Укрыв телефон от брызг, ты сверяешь с Владом свободный вечер и сохраняешь время.

Далее: `c9.courtyard.afterPause`.

### `c9.courtyard.afterPause` · route

- `[{"key": "c9Rain", "equals": "leave"}]` → `c9.courtyard.earlyWalk`
- Иначе → `c9.courtyard.bet`

### `c9.courtyard.bet` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Н — В пакете остаётся одно печенье. Влад вытряхивает с края несколько крошек и загибает бумагу, чтобы оно не отсырело.

1. В — я думаю, он никуда не уедет. ключ положил — и сам же к нему вернётся.

2. Т — Последнее печенье на кон?

3. В — принимается. какая у тебя версия?

Далее: `c9.courtyard.betChoice`.

### `c9.courtyard.betChoice` · choice

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

Какая у тебя версия?

- `together` — Он поедет и возьмёт кота с собой → `c9.courtyard.betTogether` · `[{"kind": "set", "key": "c9Bet", "value": "together"}]`
- `alone` — Он уедет один, а кот останется ждать → `c9.courtyard.betAlone` · `[{"kind": "set", "key": "c9Bet", "value": "alone"}]`
- `skip` — Не хочу спорить. Давай сразу пополам → `c9.courtyard.betSkip` · `[{"kind": "set", "key": "c9Bet", "value": "skip"}]`

### `c9.courtyard.betTogether` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Т — Он поедет и возьмёт кота с собой.

1. В — тогда печенье пока под охраной.

Далее: `c9.courtyard.resume`.

### `c9.courtyard.betAlone` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Т — Он уедет один, а кот останется ждать.

1. В — тогда у нас две разные дороги. если оба промахнёмся, делим.

Далее: `c9.courtyard.resume`.

### `c9.courtyard.betSkip` · dialogue

Фон: `bg.courtyard9.canopy`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Н — Влад разламывает печенье. Вы берёте по половине, пока он придерживает пакет под крошками.

Далее: `c9.courtyard.resume`.

### `c9.courtyard.resume` · dialogue

Фон: `bg.courtyard9.open`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

0. Н — Дождь редеет. Сотрудница поднимает руку у экрана: показ продолжается. Человек с ключом снова двигается, и разговоры под навесом стихают.

1. Н — Вы возвращаетесь в ряд. Сотрудница вытирает сиденья, а ты раскладываешь плед поперёк колен.

При `[{"key": "c9Rain", "equals": "arch"}]`: Ты разворачиваешься на своём стуле. Влад придвигается к стене; из-под арки виден весь экран.

2. Н — Человек возвращается за рамкой с фотографией. Он заворачивает её в рубашку и устраивает между вещами.

3. Н — Кот впервые выбирается из чемодана сам. Человек закрывает крышку, берёт ключ и стоит перед дверью. На несколько секунд кот остаётся один в комнате.

4. Н — Дверь открывается снова. Внизу появляется переноска. Кот обнюхивает дверцу, заглядывает на оставленное внутри полотенце и забирается сам.

5. Н — Последний план — окно поезда. Рядом с человеком стоит переноска, а в стекле отражаются два силуэта. Кот трогает лапой бегущую за окном полосу света.

6. Н — На экране появляются титры. Во дворике снова загораются гирлянды.

Далее: `c9.courtyard.betResult`.

### `c9.courtyard.betResult` · route

- `[{"key": "c9Bet", "equals": "together"}]` → `c9.courtyard.won`
- `[{"key": "c9Bet", "equals": "alone"}]` → `c9.courtyard.bothMissed`
- Иначе → `c9.courtyard.afterFilm`

### `c9.courtyard.won` · dialogue

Фон: `bg.courtyard9.open`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. В — ладно. пассажира всё-таки зарегистрировали.

1. Н — Он подаёт тебе пакет с последним печеньем.

2. Т — Можешь откусить. Но сначала признай, что кот сам собрался.

3. В — кот сам собрался. человек только донёс багаж.

4. Н — Ты откусываешь первой и передаёшь остаток Владу. Он доедает печенье и складывает пустой пакет.

Далее: `c9.courtyard.afterFilm`.

### `c9.courtyard.bothMissed` · dialogue

Фон: `bg.courtyard9.open`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. Т — Я кота оставила, ты человека. Оба мимо.

1. В — а они уехали, пока мы тут делили имущество.

2. Н — Ты разламываешь печенье пополам. Вы съедаете по половине; Влад ловит крошки пакетом.

3. Т — Тогда обоим по половине.

Далее: `c9.courtyard.afterFilm`.

### `c9.courtyard.afterFilm` · dialogue

Фон: `bg.courtyard9.open`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "arch"}], "background": "bg.courtyard9.arch", "character": "vlad.city.smile"}`.

Вариант сцены: `{"when": [{"key": "c9Rain", "equals": "leave"}], "background": "bg.courtyard9.books", "character": "vlad.city.smile"}`.

0. В — хорошо, что дождались.

1. Т — Да. Я уже думала, так и останемся с этим ключом в руке.

2. Н — Ты складываешь плед. Влад относит его в ящик, затем возвращается за тобой к арке.

Далее: `c9.courtyard.lab`.

### `c9.courtyard.earlyWalk` · dialogue

Фон: `bg.courtyard9.books`.

Вариант сцены: `{"when": [], "fromLine": 7, "background": "bg.courtyard9.books-closed", "character": "vlad.city.smile"}`.

0. Н — Ты замечаешь рядом с булочной маленький уличный шкаф с надписью «Обмен книгами». Дверца приоткрыта. Из нижней полки торчит книга, по её обложке стекает вода.

1. Т — Подожди. Там сейчас всё зальёт.

2. Н — Ты подхватываешь книгу. Влад кладёт пакет с печеньем на сухой подоконник и придерживает дверцу, пока ты освобождаешь зажатый угол.

3. В — вот кто тут не давал закрыться.

4. Н — На нижней полке уже собралась вода. Влад поднимает оставшиеся книги, а ты освобождаешь для них верхнюю. Последняя не помещается корешком наружу; ты поворачиваешь её боком.

5. Т — Теперь пробуй.

6. Н — Дверца закрывается. Влад поворачивает деревянную щеколду. Вы на секунду остаётесь перед стеклом: книги теперь выше мокрой полки, капли бегут по дверце снаружи.

7. В — крыша есть. жильцов расселили.

8. Н — Он забирает с подоконника пакет и разламывает последнее печенье. Вы съедаете по половине под козырьком.

9. Т — Кота так и не проводили. Зато этих устроили.

10. В — целую полку. идём сдавать аппарат?

11. Н — Ты выбираешь дорогу вдоль домов. Дождь становится мельче; на перекрёстке уже светлеет край неба.

Далее: `c9.courtyard.lab`.

### `c9.courtyard.lab` · dialogue

Фон: `bg.courtyard9.lab`.

0. Н — На соседней улице за стеклом фотолаборатории горит небольшая лампа. Дверь уже закрыта, но рядом с ней устроен приёмный ящик. Над ним лежат бумажные пакеты и бланки.

1. Н — Ты достаёшь аппарат. Влад берёт с полочки пакет для проявки и держит его раскрытым, пока ты заполняешь короткий бланк. Затем ты кладёшь аппарат внутрь и заклеиваешь край.

2. Н — Ты опускаешь пакет в ящик и убираешь отрывную квитанцию в кошелёк.

После чтения: `[{"kind": "set", "key": "c9Film", "value": "submitted"}]`.

3. Т — Когда будут готовы, заберу. Принесу тебе посмотреть.

4. В — вместе посмотрим. я хочу узнать, что у нас там с первой прогулки.

Далее: `c9.courtyard.goodbye`.

### `c9.courtyard.goodbye` · dialogue

Фон: `bg.courtyard9.lab-red`.

0. Н — На перекрёстке вам в разные стороны. На мокром бордюре дрожат огни светофора.

1. Н — Влад убирает телефон, на котором проверял дорогу домой. До зелёного ещё есть несколько секунд.

Далее: `c9.courtyard.goodbyeChoice`.

### `c9.courtyard.goodbyeChoice` · choice

Фон: `bg.courtyard9.lab-red`.

Как попрощаешься?

- `kiss` — Поцеловать его первой → `c9.courtyard.kiss`
- `hug` — Обнять на прощание → `c9.courtyard.hug`
- `words` — До следующей встречи, Влад → `c9.courtyard.words`

### `c9.courtyard.kiss` · route

- `[{"key": "c8LipKiss", "equals": "yes"}]` → `c9.courtyard.kissAgain`
- Иначе → `c9.courtyard.kissFirst`

### `c9.courtyard.kissAgain` · dialogue

Фон: `bg.courtyard9.lab-red`.

0. Н — Ты ловишь его ладонь, когда он собирается отступить к своему углу. Влад поворачивается к тебе; ты тянешь его чуть ближе и целуешь. Он отвечает, придерживая тебя за спину.

После чтения: `[{"kind": "set", "key": "c9LipKiss", "value": "yes"}, {"kind": "set", "key": "c9Goodbye", "value": "kiss"}]`.

1. Т — Теперь до настолки.

2. В — вот теперь до настолки.

Далее: `c9.courtyard.kissEnd`.

### `c9.courtyard.kissFirst` · dialogue

Фон: `bg.courtyard9.lab-red`.

0. Т — Влад, подожди.

1. Н — Ты касаешься его руки и подходишь ближе. Он остаётся напротив, глядя на тебя.

2. Т — Я ещё не попрощалась.

3. Н — Ты поднимаешь лицо к нему. Влад наклоняется навстречу; ты целуешь его в губы. Он отвечает и осторожно обнимает тебя за спину.

После чтения: `[{"kind": "set", "key": "c9LipKiss", "value": "yes"}, {"kind": "set", "key": "c9Goodbye", "value": "kiss"}]`.

4. В — хорошо, что остановила.

Далее: `c9.courtyard.kissEnd`.

### `c9.courtyard.kissEnd` · dialogue

Фон: `bg.courtyard9.lab`.

0. Н — Вы отпускаете друг друга. Когда загорается зелёный, ты переходишь улицу; Влад остаётся на своём углу.

Далее: `c9.courtyard.end`.

### `c9.courtyard.hug` · dialogue

Фон: `bg.courtyard9.lab-red`.

0. Н — Ты обнимаешь Влада. Он прижимает тебя к себе в ответ, затем отступает, чтобы пропустить к переходу.

После чтения: `[{"kind": "set", "key": "c9LipKiss", "value": "no"}, {"kind": "set", "key": "c9Goodbye", "value": "hug"}]`.

1. Т — До настолки.

2. В — до настолки.

Далее: `c9.courtyard.end`.

### `c9.courtyard.words` · dialogue

Фон: `bg.courtyard9.lab-red`.

0. Т — До следующей встречи, Влад.

1. В — до встречи. спасибо, что позвала.

2. Н — Ты поднимаешь ладонь, отойдя к переходу. Он машет тебе в ответ.

После чтения: `[{"kind": "set", "key": "c9LipKiss", "value": "no"}, {"kind": "set", "key": "c9Goodbye", "value": "words"}]`.

Далее: `c9.courtyard.end`.

### `c9.courtyard.end` · end

Единая открытка: `c9.courtyard`.
