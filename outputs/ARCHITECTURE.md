# ARCHITECTURE — статическая игра, редакция документа 1.1

Дополнительные реакции сцены: `SceneEasterEggs` получает ref сцены, контекст реплики, доступность объектов и reduced motion; тексты находятся в `content/easterEggs.ts`. Позиции прозрачных кнопок измеряются по загруженным изображениям через ResizeObserver/load/animationend. Реплика хранится локально в SceneEasterEggs; cookieTaken поднят в SceneStage и передаётся с onTakeCookie. Поэтому скрытие/размонтирование горячих областей во время кухни, паузы и восстановления арта не возвращает съеденную печеньку. Новый контекст скрывает реплику; уход с экрана истории/reload сбрасывает косметику. Ключ SceneStage разделяет главу и campaign/trial. Reducer/persistence/CloudStorage не участвуют. StoryScreen отключает взаимодействия при minigame и suspended; SceneStage по умолчанию оставляет их выключенными, а при ошибке арта убирает до восстановления. Schema/contentVersion и ID графа не меняются. Подробности — SCENE_EASTER_EGGS.md.

Переименование Pages 18 октября 2026: `/little-projects/` → `/our-little-story/`. load читает старую пару save/backup только при отсутствии обеих новых копий и только для точного нового production-ключа. Старые JSON не изменяются; ошибки и резервное восстановление сохраняют прежнюю семантику. После следующего действия persist пишет новый ключ. Dev и другие base path изолированы; схема envelope не меняется.

Дата проверки внешней документации: 17 октября 2026. Ниже — проектные контракты для всей игры. Теперь реализованы главы 1–5 в `src/`; фактические модули и команды перечислены в README.md. В текущем срезе работают token-search/umbrella-patch/kitchen/constellation/memories, 12 карточек пяти глав и пять достижений. Реестр getChapter обслуживает только реализованные главы. UI разделён на необходимые файлы; будущие пустые модули не созданы. Публикация выполнена 18 октября 2026: https://vlad28x.github.io/our-little-story/; фактический отчёт — GITHUB_PAGES_RELEASE.md.

Фактическое расширение сохранений: envelope schemaVersion остаётся 1, contentVersion повышен до 5. parseSave принимает контент 1–4 только в их прежних границах глав/полей/карточек, затем обновляет номер контента, сохраняя все прочие данные. Контент 5 допускает непрерывный префикс вплоть до [1,2,3,4,5], проверяет starts[N] против record[N−1], неизменность унаследованных решений и соответствие результата своей мини-игре. Backup исходного старого JSON сохраняется при следующей записи. Импорт заменяет историю только после прежнего подтверждения; миграция не открывает следующие главы автоматически.

Действия start/trial/rewrite теперь получают optional chapter (по умолчанию 1 ради совместимости). unlock получает введённый code, проверяет его по manifest и даёт право только готовой главе. start требует права и завершённого префикса. rewrite N удаляет records/startStates/completed начиная с N; trial использует snapshot старта выбранной главы и не переписывает канон. Истории прежних пробных прохождений не участвуют в callback-условиях.

### Реализованная кухня

`KitchenResult={kind:'kitchen',outcome:'feast'|'snack'|'chaos'|'skipped',served:number,mode:'timed'|'calm'}`. Движок повторно проверяет целое served 0–9, mode и соответствие outcome порогам. CardRecord третьей дополнительно хранит teamName, чтобы пробные варианты не меняли имя команды на открытке канона. В коллекции один c3.dinner, variant — исход кухни; как и прежде, последний полученный вариант заменяет тот же ID.

`kitchenModel.ts` не зависит от React: состояние tutorial/ready/playing/between/done, две видимые независимые тарелки, один partner job, детерминированные задержки, elapsed active time. UI отправляет tick с performance.now, только когда игра активна и документ видим. visibilitychange/blur/pagehide и перекрывающее меню ставят pause, восстановление только через resume; cleanup снимает обработчики и интервал. Работа напарника и таймер останавливаются вместе. Прогресс движений не входит в envelope: reload восстанавливает c3.kitchen с начала обучения. UI мини-игры на мобильном экране занимает место сцены, чтобы управление не требовало постоянного скролла между заказами и продуктами.

### Реализованное созвездие

Constellation.tsx и чистый constellationModel.ts: четыре уникальные точки 0–3 в любом порядке; undo убирает последнюю и выбор силуэта. После четырёх нужен явный cat/controllers/teapot. Preset — только teapot, usedPreset=true. Engine проверяет сочетание и выдаёт own-sky только для своего рисунка. Косметический порядок остаётся внутри UI, поэтому reload восстанавливает сцену и начинает только рисунок заново. Story главы 4 пишет bench/constellation/bond/wish. Данные приватных желаний с клавиатуры не вводятся.

CardRecord четвёртой добавляет usedPreset, variant — название силуэта. Канонический экран строится из story и results канонической записи; коллекция может содержать другой вариант того же ID после trial. Передавать record.results в cardFromStory обязательно для точной подписи готовой картинки. Открытка внутри игры отображает общие SVG-контуры; PNG-экспорт удалён 19 октября. Новые ресурсы явно записаны в неизменяемый manifest; city.warm — алиас city-smile, а не отсутствующий файл.

## 1. Решения и зависимости

React + TypeScript strict + Vite; обычный CSS с переменными, без CSS-фреймворка. React `useReducer` + Context на уровне игры. Чистые функции переходов не зависят от React. Один экран определяется hash-маршрутом, без React Router. Сценарии — типизированные TS-объекты с данными, без исполняемых функций внутри реплик.

Runtime: только `react`, `react-dom`. Разработка: `vite`, `typescript`, `@vitejs/plugin-react`, соответствующие типы; `vitest` для логики, `@playwright/test` для нескольких сквозных сценариев, базовый ESLint по шаблону Vite. Не добавлять Redux, Zustand, XState, Phaser, Pixi, библиотеку БД, генератор AI, Telegram SDK или пакет для снятия DOM-скриншотов. `validate:content` запускает `vitest run tests/content.test.ts`, поэтому отдельный TS-runner не требуется; `test:unit` включает engine/save, главы 2–5, модели мини-игр и проверки React-отрисовки; `test:smoke` запускает `playwright test`. `test:offline` использует отдельный offline config без сети. `typecheck` выполняет `tsc --noEmit`; build после него вызывает `vite build`.

Выбор версий: при инициализации взять совместимые стабильные версии React/TS/Vite, записать точные разрешённые версии в lockfile, использовать `npm ci` в CI. Node 22, не ниже 22.12; проверить engines выбранной версии Vite до установки. Если новая Vite несовместима, выбрать совместимую стабильную Vite либо явно обновить единую версию Node в README и CI. Не писать «latest» как воспроизводимую спецификацию. Точные установленные версии записаны в package.json и package-lock.json.

Нет сервера, базы данных, регистрации, аналитики, секретного токена, API-запросов к автору, service worker. GitHub Pages раздаёт HTML/JS/CSS/медиа. Интерактивность и сохранения работают на устройстве. Интернет нужен для загрузки ресурсов; продолжение офлайн не обещается.

## 2. Файлы будущей реализации

```text
project/
  AGENTS.md                       # вход в проектные инструкции
  outputs/                        # текущая проектная документация
  src/
    main.tsx
    app/{App.tsx,GameProvider.tsx,router.ts,config.ts}
    engine/{types.ts,step.ts,conditions.ts,validateContent.ts}
    content/
      chapters/{manifest.ts,ch01.ts,ch02.ts,ch03.ts,ch04.ts,ch05.ts}
      characters.ts
      achievements.ts
      cards.ts
      assetManifest.ts
    state/{types.ts,reducer.ts,selectors.ts,initialState.ts}
    persistence/{storage.ts,validateSave.ts,migrations.ts,transfer.ts}
    minigames/
      types.ts
      TokenSearch.tsx
      UmbrellaPatch.tsx
      kitchen/{Kitchen.tsx,model.ts,useGameClock.ts}
      Constellation.tsx
      Memories.tsx
    ui/
      screens/{StartScreen.tsx,ChapterMap.tsx,StoryScreen.tsx,ResultScreen.tsx,AlbumScreen.tsx,RecoveryScreen.tsx}
      components/{SceneStage.tsx,CharacterSprite.tsx,DialogueBox.tsx,ChoiceList.tsx,PauseSheet.tsx,SavePanel.tsx,ContinuationPanel.tsx}
    sharing/{renderCard.ts,shareCard.ts,copyText.ts}
    styles/{tokens.css,base.css,game.css}
  public/assets/{backgrounds,characters,props,ui,audio}/
  tests/{engine.test.ts,save.test.ts,kitchen.test.ts,content.test.ts,flow.spec.ts}
  .github/workflows/{check.yml,deploy.yml}
  .gitignore
  index.html
  vite.config.ts
  package.json
  package-lock.json
  README.md
  ASSET_CREDITS.md
```

Это конечная схема, не инструкция заранее создать пустые компоненты. На первом этапе нужны только ch01, TokenSearch и соответствующие экраны. Для глав 2–5 в manifest достаточно названий и `available:false`, без фальшивых ch02-файлов. Разделять файлы при реальной ответственности; не вводить repository/service/factory-слои.

Зависимости направлены `content → engine/types`, `UI → state + engine + content`, `persistence → state/types + validators`. Engine ничего не импортирует из UI/DOM/storage. Контент не импортирует React.

## 3. Словарь истории: исчерпывающий для версии 1

```ts
type ChapterId = 1 | 2 | 3 | 4 | 5;
type Ending = 'romantic' | 'comic' | 'gaming' | 'friendly';
type StoryState = {
  // Глава 1
  approach?: 'joke' | 'help' | 'space';
  searchResult?: 'tidy' | 'detour' | 'skipped';
  catNoticed?: boolean;
  pace?: 'quiet' | 'playful' | 'flirt';
  plan?: 'tea' | 'banter' | 'coop';
  // Глава 2
  rainRoute?: 'shelter' | 'arcade';
  catApproach?: 'wait' | 'help';
  umbrella?: 'patched' | 'borrowed' | 'skipped';
  eveningMood?: 'quiet' | 'playful';
  // Глава 3
  controllerReaction?: 'tease' | 'help' | 'absurd';
  teamName?: 'dumpling' | 'calm' | 'accident';
  kitchenStyle?: 'planner' | 'improv';
  kitchenResult?: 'feast' | 'snack' | 'chaos' | 'skipped';
  gameAftercare?: 'team' | 'rematch';
  // Глава 4
  bench?: 'near' | 'space';
  constellation?: 'cat' | 'controllers' | 'teapot';
  bond?: 'romantic' | 'friendly' | 'undecided';
  wish?: 'adventure' | 'calm';
  // Глава 5
  ending?: Ending;
};
```

Новая история = `{}`. Отсутствующее поле означает «ещё не выбирали», не скрытый дефолт. Нельзя трактовать отсутствующий `bond` как романтический. Каждая глава записывает только собственные поля. На завершении проверяется наличие всех обязательных полей её главы, включая результат пропуска. Для главы 1: approach/searchResult/catNoticed/pace/plan; для 2: четыре её поля; для 3: controllerReaction/teamName/kitchenStyle/kitchenResult/gameAftercare; для 4: четыре; для 5: ending. `bench` влияет на дистанцию персонажа в главе 5: near — персонаж чуть крупнее у стола, space — шире кадр; не означает разрешения прикоснуться.

### Дополнение 1.1: эпизод с геймпадами

Существующие виды узлов, step, SetEffect, Condition, сохранения и контракт Kitchen не меняются. Добавлено только одно поле StoryState: `controllerReaction`. Его пишет choice `c3.pad.reaction`, кнопки `tease/help/absurd`; поле читают route `c3.pad.echo.route` перед обучением и панель `c5.invitation`. Значение не изменяет kitchenStyle, счёт, доступность финалов или continuation. Пропуск самой кухни сохраняет уже сделанный выбор.

Новая цепочка данных: `c3.sofa → c3.pad.setup → c3.pad.press → c3.pad.dead → c3.pad.reaction → c3.pad.tease/help/absurd → c3.pad.ready → c3.team → c3.role → c3.pad.echo.route → c3.pad.echo.tease/help/absurd → c3.tutorial`. После tutorial всё идёт по существующему графу. `c3.pad.press` — choice с одной кнопкой press и пустыми эффектами, не новый GameId. Все три бытовые ветки завершаются сменой батареек; специальное поле controllerFixed не нужно: успешное включение гарантировано узлом ready.

Route: три сравнения controllerReaction на tease/help/absurd, fallback в c3.tutorial. Это защита отображения при неполном dev-состоянии, а не выдача скрытого выбора: завершение новой главы 3 без controllerReaction валидатор отклоняет. `c5.invitation` показывает общий вступительный текст и одну реплику из закрытого словаря по этому полю; отсутствующее значение не выдумывает реакцию. Берёт данные из canonical record главы 5, не из trial/коллекции. Показ панели не записывает никаких новых эффектов.

Реквизит на фоне `bg.vlad.livingroom` выводится из nodeId и controllerReaction: в ветке absurd после соответствующего echo и на дальнейших паузах пульт лежит на блюдце. Не хранить позицию предметов отдельным состоянием, не наследовать её от прошлого рендера. Реальные Xbox-геймпады — часть иллюстрации; браузерная игра остаётся сенсорной, Gamepad API/подключение контроллеров не требуется.

Автосохранение выбора работает обычным переходом: после выбора хранится следующий узел и controllerReaction; reload не возвращает к выбору и не запускает эффект повторно. Trial и rewrite используют существующие snapshots без специальных полей. Новое значение должно входить в проверки импорта и fixtures глав 3–5. Глава 3 реализована с contentVersion=3, envelope остаётся SaveV1/schemaVersion=1. Старые выпуски 1–2 не содержат пройденной третьей и мигрируют без присвоения controllerReaction по умолчанию. Если в будущем потребуется поддержка старого контента без этого выбора, оформить явную content-миграцию/восстановление по §6, не присваивать игроку tease по умолчанию.

`continuation` относится к локальному профилю, а не сюжету. Счёт кухни — в результате/карточке главы, не универсальный параметр отношений. Игровые достижения также не находятся в StoryState. `c1.detail` не требует постоянного флага: это разовая микросцена без последствий в следующих главах.

## 4. Контракт сценарного движка

Узлы: dialogue, choice, route, minigame, end. Эффекты разрешены на выборах и при принятии результата игры; нет произвольных onEnter-скриптов и вычисляемого JavaScript из контента.

```ts
type NodeId = `c${ChapterId}.${string}`;
type AssetId = string; // проверяется по закрытому manifest во время validateContent
type Speaker = 'narrator' | 'vlad' | 'heroine' | 'nina';
type SetEffect = {
  [K in keyof StoryState]-?: {
    kind: 'set'; key: K; value: Exclude<StoryState[K], undefined>
  }
}[keyof StoryState];
type Condition = {
  [K in keyof StoryState]-?: {
    key: K; equals: Exclude<StoryState[K], undefined>
  }
}[keyof StoryState];
type Line = {
  speaker: Speaker; text: string;
  emotion?: 'neutral' | 'smile' | 'awkward' | 'thinking' | 'laugh' | 'warm' | 'surprised';
};
type Scene = { background: AssetId; character?: AssetId };
type Choice = {
  id: string; text: string; next: NodeId;
  effects?: SetEffect[];
  // Использовать редко; хотя бы один вариант всегда доступен.
  when?: Condition[];
};
type GameId = 'token-search' | 'umbrella-patch' | 'kitchen' | 'constellation' | 'memories';
type StoryNode =
  | { id: NodeId; kind:'dialogue'; scene:Scene; lines:Line[]; next:NodeId }
  | { id: NodeId; kind:'choice'; scene:Scene; prompt?:string; choices:Choice[] }
  | { id: NodeId; kind:'route'; cases:{all:Condition[]; next:NodeId}[]; fallback:NodeId }
  | { id: NodeId; kind:'minigame'; scene:Scene; game:GameId; next:NodeId }
  | { id: NodeId; kind:'end'; endingId:string; cardId:string };
type Chapter = {
  id:ChapterId; contentVersion:number; title:string; entry:NodeId;
  nodes:Record<NodeId, StoryNode>;
};
```

В TS `Record<NodeId, StoryNode>` описывает допустимый формат ключей, но не доказывает существование ссылки: это делает валидатор. Для опечаток IDs использовать `satisfies` и валидатор графа. `scene` явно задана в каждом видимом узле, чтобы восстановление не зависело от предыдущего рендера. Эмоция строки выбирает вариант того же costume; отсутствующая эмоция = базовый спрайт scene, а не случайное наследование. Смена фона внутри сцены — новый узел.

`when`/`all` — AND простых сравнений, route выбирает первый подходящий case; есть обязательный fallback. Для OR использовать два case с одинаковой целью. Не создавать универсальный язык выражений. Ветвление текста — 2–3 маленьких dialogue-узла после route. Так различия остаются видимыми редактору.

```ts
type GameResult =
  | {kind:'token-search'; outcome:'tidy'|'detour'|'skipped'; catNoticed:boolean}
  | {kind:'umbrella-patch'; outcome:'patched'|'borrowed'|'skipped'}
  | {kind:'kitchen'; outcome:'feast'|'snack'|'chaos'|'skipped'; served:number; mode:'standard'|'calm'}
  | {kind:'constellation'; outcome:'cat'|'controllers'|'teapot'; usedPreset:boolean}
  | {kind:'memories'; outcome:'viewed'|'skipped'};
type Run = {
  chapter:ChapterId; nodeId:NodeId; lineIndex:number; turn:number;
  story:StoryState;
  results:Partial<Record<GameId,GameResult>>;
  earned:string[]; // только проверенные achievement IDs
};
type Command =
  | {kind:'advance'; expectedTurn:number}
  | {kind:'choose'; choiceId:string; expectedTurn:number}
  | {kind:'game-result'; result:GameResult; expectedTurn:number};
type StepResult =
  | {kind:'ready'; run:Run}
  | {kind:'complete'; run:Run; endingId:string; cardId:string}
  | {kind:'rejected'; reason:string};
// Чистая функция; не пишет в localStorage, не проигрывает звук.
declare function step(chapter:Chapter, run:Run, command:Command):StepResult;
```

При старте создаётся Run на entry с turn=0. На каждом принятом действии turn растёт на 1; команда со старым expectedTurn отвергается. Это защищает двойной тап даже при очереди событий. Нажатие advance на choice или выбор неизвестного ID — rejected без изменения. Раскрытие печатающейся строки — локальное состояние UI, не engine-команда.

Алгоритм: проверить курсор и тип команды → применить ровно один выбор/результат → перейти на next → разворачивать route, пока не найден видимый узел/end → вернуть новый снимок. Лимит 32 автоматических перехода ловит ошибочный цикл. Отдельный список прочитанных строк и выбранных кнопок не ведётся. Сохраняются текущий nodeId/lineIndex/turn, сюжетные флаги и результаты.

Результат mini-game принимается только для текущего `game`; поля строго проверяются. Kitchen outcome повторно вычисляется по served, кроме skipped; served целое 0–9. TokenSearch маппит outcome→searchResult, catNoticed→одноимённое поле; umbrella→umbrella; kitchen→kitchenResult; constellation→constellation; memories не меняет story. Эти пять маленьких адаптеров находятся в engine, не в React-компонентах. Награды определяются там же по закрытому списку.

`end`: reducer одной транзакцией фиксирует завершение, endState, карточку, lastResult и earned, убирает active. Рендер end не имеет side effect. Сбой записи в хранилище не вызывает повторную выдачу награды, потому что коллекция — множество ID. Обозначение `c5.invitation` в геймдизайне — экранная постановка после end, не обязательный узел engine. Уход из разговора не возвращает главу в незавершённое состояние. Разговор повторно доступен с результата главы 5; continuation меняется отдельным reducer-действием только в основной игре, во время активного trial приглашение не показывается; после пробного финала оно доступно при completed5 канона.

### Пример узла первой главы

```ts
const approachNode = {
  id: 'c1.approach', kind: 'choice',
  scene: {background:'bg.cafe.entry', character:'vlad.city.awkward'},
  choices: [
    {id:'joke', text:'Это настолка или эффектное знакомство?',
      effects:[{kind:'set',key:'approach',value:'joke'}], next:'c1.approach.joke'},
    {id:'help', text:'Держи коробку. Я помогу собрать',
      effects:[{kind:'set',key:'approach',value:'help'}], next:'c1.approach.help'},
    {id:'space', text:'Давай сначала освободим проход',
      effects:[{kind:'set',key:'approach',value:'space'}], next:'c1.approach.space'},
  ]
} satisfies StoryNode;
```

Глава 1 может работать полностью на новом пустом профиле без импорта ch02–ch05. Весь её точный контент берётся из [CHAPTER_01_SCRIPT.md](CHAPTER_01_SCRIPT.md).

## 5. Мини-игры и часы

UI-контракт: `{ initialStory, reducedMotion, onComplete(result), onPause() }`. `onComplete` оборачивается защитой от повторного вызова и передаёт expectedTurn. Компонент мини-игры хранит временные движения локально. StoryState меняется только на завершении или осознанном пропуске.

Kitchen — чистый reducer model с событиями select-order/add-ingredient/handoff/serve/clear/tick/pause/resume/finish-round/skip. Clock использует requestAnimationFrame и performance.now; delta учитывается только в состоянии running. При visibilitychange→hidden автоматически pause; возврат не возобновляет время сам. После паузы reset lastNow, чтобы не прибавить время отсутствия. Интервалы и RAF удаляются при unmount; development StrictMode не создаёт два цикла.

У заказа: id, recipe, stage `empty|base|partner|ready|served`, startedAtActiveMs. У Влада один busyOrderId. round=1..3, remainingMs, servedTotal. Сначала две карточки; после подачи активируется третья. Серия из 3 раундов детерминированна. «Очистить» доступна только до handoff, после него «Отменить заказ» в версии 1 не нужно. В конце раунда занятость сбрасывается. Полные правила и таблицы времени — GAME_DESIGN §7.3.

Сохранение движения кухни/точек созвездия/открытых клеток не нужно. Перед входом в событие сохраняется Run с этим nodeId. Перезагрузка возвращает к его началу: «Сюжет сохранён. Это короткое задание начнётся сначала». Уже завершённая игра никогда не переигрывается автоматически, поскольку result и next записаны вместе. Результаты прошлых раундов внутри незавершённой кухни также сбрасываются — это явно сообщается.

## 6. Сохранения: модель и атомарность

```ts
type Settings = {
  sound:boolean; volume:number; textMode:'instant'|'type';
  motion:'system'|'reduced'|'full';
};
type ChapterRecord = {
  endingId:string; cardId:string; story:StoryState;
  results:Partial<Record<GameId,GameResult>>;
};
type Campaign = {
  completed:ChapterId[]; // только непрерывный префикс [1..N]
  startStates:Partial<Record<ChapterId,StoryState>>;
  records:Partial<Record<ChapterId,ChapterRecord>>;
  active:Run|null;
};
type CardRecord = {
  id:string; chapter:ChapterId; endingId:string;
  // Только разрешённые публичные фрагменты, не полный StoryState.
  variant:string; captionId:string;
};
type SaveV1 = {
  appId:'five-meetings'; schemaVersion:1; contentVersion:number;
  revision:number; updatedAt:string;
  settings:Settings;
  unlocked:ChapterId[]; // права на главы, не завершения
  campaign:Campaign;
  trial:{chapter:ChapterId; run:Run}|null;
  lastResult:{chapter:ChapterId; cardId:string; source:'campaign'|'trial'}|null;
  collection:{cards:CardRecord[]; achievements:string[]};
  continuation:'game'|'movie'|'cafe'|'walk'|'decline'|'public'|'chat'|'later'|null;
};
```

`endStates[n]` в сценарной терминологии = `campaign.records[n].story`, не второе поле хранения. Последнее завершённое состояние — record максимального completed; пока глава активна, источник истины `active.story`. Не хранить третий расходящийся `currentStory`. `lastResult` указывает на выданную карточку и сохраняет экран результата trial после перезагрузки; не участвует в сюжете. Он обновляется при любом завершении, очищается при новом старте/rewrite, а при импорте проверяется по collection.

Начало главы N: взять record N−1 (для 1 `{}`), сделать глубокую копию в startStates[N], создать active Run. Между главами active=null. На старте новой основной кампании settings/unlocked/collection можно сохранить отдельной кнопкой; полный сброс требует явного подтверждения и удаляет только ключи игры.

### Реестры окончаний, карточек и наград

Для каждого локального end `endingId` и `cardId` совпадают с ID ниже; коллекция содержит до 12 карточек, по одной на окончание. Если то же окончание пройдено с другой деталью, обновляется его публичный variant, а не создаётся бесконечный архив.

| Глава | endingId / cardId | variant, разрешённые детали |
|---|---|---|
| 1 | `c1.tea`, `c1.banter`, `c1.coop` | searchResult: tidy/detour/skipped; секрет виден отдельно в альбоме |
| 2 | `c2.shelter`, `c2.arcade` | umbrella: patched/borrowed/skipped |
| 3 | `c3.dinner` | variant: feast/snack/chaos/skipped; teamName: dumpling/calm/accident |
| 4 | `c4.adventure`, `c4.calm` | constellation: cat/controllers/teapot |
| 5 | `c5.romantic`, `c5.comic`, `c5.gaming`, `c5.friendly` | wish: adventure/calm |

`CardRecord.id=cardId`; captionId — ключ шаблона, построенный как `cardId + '.' + variant`, проверяемый по cards.ts. Названия, короткие подписи и арт берутся из этого реестра; ключ не содержит пользовательского текста. Более подробные воспоминания главы 5 показываются внутри истории, а не экспортируются все разом на открытку. Канонический экран результата прошлой главы строит карточку из её record; просмотр альбома — из collection. Так повтор не подменяет карточку основной линии. Если lastResult.source=trial, используется collection с соответствующим cardId.

Награды: `cat-supervisor` ← token-search.catNoticed; `dry-plan` ← umbrella-patch.outcome=patched; `full-table` ← kitchen.served=9 и outcome≠skipped; `own-sky` ← constellation.usedPreset=false; `five-meetings` ← любой end главы 5. При complete earned объединяется с collection.achievements без дублей. Пропуск мини-игры не выдаёт её техническое достижение, но не лишает сюжетной карточки.

Ключи: `five-meetings:<basePath>:save`, `five-meetings:<basePath>:backup`. basePath = нормализованный `import.meta.env.BASE_URL`; localhost и сайт имеют разные origin. Это предотвращает конфликт разных проектов одного GitHub Pages-домена. Не вызывать localStorage.clear().

Запись после каждого advance, выбора, результата, открытия главы, изменения настроек, принятого импорта. Store serializes ≤200 KB; лимит импорта 256 KiB. При каждой записи: сериализовать/валидировать новый envelope → прочитать и проверить прежний основной → записать прежний валидный основной в backup (best effort) → записать новый основной одним setItem → отметить savedRevision. Один ключ содержит всё взаимосвязанное состояние; нет половины выбора в одном ключе и следующего узла в другом. Backup может отставать на один шаг, это нормально.

Persistence вызывается после принятого reducer-действия, не из сценария и не во время render. Повтор effect из StrictMode не должен крутить backup повторно: если revision уже сохранена — no-op. Очередь синхронных записей последовательно обрабатывает актуальное состояние. Во время частых тиков мини-игры запись не происходит. `beforeunload` не является основным механизмом сохранения.

Ошибки localStorage ловятся на get/set. Если доступ закрыт/место исчерпано, игра продолжает в памяти и явно показывает «В этом браузере прогресс сейчас не сохраняется. Можно скачать копию». Не утверждать успех и не блокировать сюжет; экспорт работает из памяти.

### Восстановление и версии

1. Прочитать main. JSON parse + проверка appId/schema/content/графа/ограничений.
2. Если main валиден и совместим — восстановить. Если нет, проверить backup, не переписывать main до решения игрока.
3. Валидная backup: экран сообщает, что возможно потерян последний шаг; «Восстановить копию» / «Скачать повреждённый файл» / «Начать заново». Скачивание — локально, без сетевой передачи.
4. Нет валидной копии: предложить импорт или новый старт; не молча обнулить историю.
5. schemaVersion выше поддерживаемой — не стирать: «Эта копия создана более новой версией». schema ниже — только явная последовательная миграция из migrations.ts; пока схема 1, более ранней схемы нет, выдуманная миграция не нужна.
6. contentVersion меняется при удалении/переименовании узлов или смене семантики. Простая коррекция опечатки версию не меняет. При добавлении главы версию повышать, но миграция сохраняет старые ID/состояния и открывает новый контент как locked/available по manifest.
7. Если курсор исчез, нельзя угадывать следующий: после согласия начать активную главу с её startState, сохранив предыдущие главы и коллекцию. Строка вне диапазона при сокращении текста аналогично переводит на начало узла, с объяснением.

Будущие миграции оформлять чистыми `migrateVnToVnPlus1`, тестировать на старом fixture; до применения сохранить исходный JSON для скачивания. Не использовать import как способ выполнять код, HTML или содержимое URL.

### Валидация импорта

Лимит файла до чтения: 256 KiB. JSON, plain object, закрытый список полей и enums; числа конечные в диапазоне, массивы ограничены (5 глав, ≤100 карточек/достижений). Только при миграции legacy journal разрешены ≤150 записей, текст каждой ≤2000 символов; после проверки поле удаляется. Не merge неизвестные ключи, не использовать `Object.assign` с неподтверждённым объектом. Собрать новый объект по явным полям; отклонить `__proto__`, `prototype`, `constructor`.

Проверить: completed непрерывный префикс, records для него существуют; startStates согласованы с концами предыдущих глав; active chapter допустима и соответствует текущему продвижению; nodeId и lineIndex существуют; обязательные поля завершённых глав присутствуют; значения minigame результата и story не противоречат друг другу. Награды/карточки по известным ID; текст карточек выбирается из своего контента, не доверяется загруженной строке. История прочитанных реплик не отображается и не записывается; входящие legacy-поля удаляются после проверки.

После проверки показать сводку «Глав пройдено: N, дата копии, активная глава». Импорт **заменяет**, не объединяет кампании. До подтверждения ничего не менять; предложить скачать текущую копию. Принятый импорт получает новую local revision, загружается в память и записывается; при ошибке записи сообщить об этом. Экспорт JSON включает настройки, права, текущую историю и коллекцию, но не dev-прогресс и не фото. Экспорт не является шифрованием; хранится только игровая информация.

## 7. Повторное прохождение без противоречий

**Просмотр варианта:** доступен для начатой/пройденной главы с startState. Клонировать её исходное состояние в trial.run; основной campaign заморожен. Все команды адресованы явному target `campaign|trial`. Trial сохраняется в envelope, поэтому может продолжиться после перезагрузки. При завершении добавляет карточку и секреты в collection, очищает trial; records/completed/continuation не меняются. Нельзя продолжить trial следующей главой. В шапке «Просмотр варианта · Основная история сохранена». Можно выйти и удалить trial.

**Изменить историю с главы N:** только отдельное подтверждение: «Результаты глав N–5 в основной истории будут заменены. Открытые главы и альбом останутся». Восстановить startStates[N]; удалить records, completed и startStates начиная с N; создать active на entry N; очистить trial и continuation (старое реальное предпочтение могло устареть). Права unlocked и коллекция не меняются. Последующие главы требуют нового прохождения предшественников, даже если право открытия сохранено. Если N=1, состояние `{}`.

Не применять новые эффекты поверх конца старой главы: это создаёт невозможные комбинации. Полная история содержит ровно одну каноническую версию каждой завершённой главы. Коллекция не участвует в сюжетных условиях.

Две вкладки: storage event с более высокой revision останавливает управление второй вкладки и предлагает «Загрузить обновлённый прогресс» или «Скачать мою копию». При возврате фокуса/перед записью перечитать revision; при конфликте не молча перезаписывать. Это best effort для одного устройства, не транзакционная многопользовательская БД; совсем одновременную гонку localStorage не решает. Поддерживаемый режим — одна активная вкладка.

## 8. Открытие глав, ссылки, dev

```ts
type ChapterMeta = {
  id:ChapterId; title:string; available:boolean;
  unlockCode?:string;
};
// canStart(n) = available(n) && entitled(n) && completedAllBefore(n)
// entitled(1)=true; entitled(n)=unlocked.includes(n)
```

Ранее открытие допускало ручную кнопку и предсказуемый код второй главы. По новому поручению автора свободное открытие убрано, прежний код второй больше не действует. Актуальные значения задаются в src/content/chapters/manifest.ts; код второй не показывать в интерфейсе и общедоступных инструкциях. Все символы ASCII, без смешивания кириллицы и латиницы. Нормализация только trim+uppercase; не угадывать похожие символы. В UI подсказать ввод латиницей. Владелец может поменять коды в manifest до релиза. Это игровой ритуал, не защита: всё видно в клиентском JS.

Ввести код можно до завершения предшественника: добавить право в unlocked, показать условие прохождения. Ручной кнопки открытия нет: право выдаётся только при совпадении введённого кода. Ранее полученные права и пройденные главы сохраняются; смена кода не отзывает их задним числом. Нельзя открыть `available:false`; код можно распознать, но сообщить «Глава ещё готовится», не выдавая несуществующего контента. Часы устройства и дата не участвуют.

Маршруты: `#/start`, `#/chapters`, `#/play/1` … `#/play/5`, `#/result/1`, `#/album`, `#/settings`. Hash меняет экран, не является авторитетным состоянием сюжета. При play/N проверить available/право/порядок; если там нет active и нет разрешённого старта — карта с объяснением. result/N показывает lastResult при совпадении главы, иначе canonical record N; если нет обоих — карту. В версии 1 автор отправляет корневую ссылку или `#/chapters`; `#/play/3` лишь открывает нужную карточку/допуск, не подменяет прогресс. Не принимать состояние из query string.

Dev-панель только при `import.meta.env.DEV` либо отдельной сборке `VITE_ENABLE_DEVTOOLS=true`, которая не идёт в production workflow. Возможности: начать любую available главу с именованного fixture; перейти к узлу; выбрать мини-результат; открыть 4 финала; очистить только dev-прогресс. Любой fixture содержит полный согласованный префикс истории. Данные dev хранятся под `:dev`, не экспортируются как обычная игра. Dev не открывается секретным тапом в опубликованной версии. Для гл. 1 не нужно фикстур будущих глав.

## 9. Ассеты и загрузка

Runtime-путь: `${import.meta.env.BASE_URL}assets/${manifest[id].file}`; в manifest только относительные пути без начального `/`, `..` или внешнего origin. Импорты CSS/JS Vite обрабатывает сам. Не писать `/assets/...` для публичных файлов и не дублировать base в разных функциях.

`Asset` содержит id, file, width, height, alt, kind. Для декоративного фона alt пустой, важное действие продублировано в повествовании. Ассеты героя доступны по costume+emotion, неизвестная эмоция вызывает проверяемую ошибку контента до сборки; в runtime допустим neutral fallback с журналом ошибки только в консоли dev.

Динамический импорт только главы при старте; manifest не импортирует сразу все сценарии. Предзагрузить фон текущей/следующей сцены и neutral/smile текущего costume. Не блокировать текст навечно при недоступном изображении. Папка исходных PNG и частные материалы не входят в public/dist. Открытка результата отображается средствами HTML/CSS/SVG; PNG не генерируется.

## 10. Открытка результата и добровольное приглашение

По поручению 19 октября экспорт открытки полностью удалён из ResultScreen: нет Canvas-подготовки, Blob/preview URL, фонового effect, export/share/copy handlers и fallback блока изображения. Отображение открытки через прежние DOM/CSS/SVG, cardFromStory и коллекцию сохранено.

В .result-actions одна полноширинная кнопка «К главам» для всех пяти глав, trial и просмотра альбома. Кнопки пробного повтора и перехода к следующей встрече ниже остаются. cardText/renderCard/shareCard удалены как неиспользуемые; общий downloadBlob в sharing/cards.ts остаётся для JSON-сохранений.

Результаты, достижения, сохранения и схема не меняются. Импорт/экспорт прогресса и clipboard/share реального приглашения в InvitationPanel не относятся к удалённым действиям открытки. Стили .manual-copy нужны этим возможностям; не удалять их вместе с .png-preview.

Реальное приглашение хранится отдельно от открытки: можно отредактировать предложенную фразу перед копированием/отправкой, без сохранения свободного текста между сессиями. Не отправлять JSON-сохранение вместо красивой карточки. Не открывать Telegram-чат автоматически и не считать разрешение share фактом доставки адресату.

## 11. GitHub Pages и CI

Репозиторий и аккаунт ещё не заданы; публикация сейчас не выполняется. Для project pages `base='/<repo>/'`, для корневого `<user>.github.io`/custom domain — `'/'`. Выбран один источник конфигурации: repository variable `VITE_BASE_PATH`, передаётся в Vite config через окружение. Локально default `'/'`. Если переменная для project pages забыта, CI должен падать с понятным сообщением, а не публиковать сломанный сайт.

```ts
// vite.config.ts — контракт будущей настройки
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
});
```

Workflow ниже — шаблон будущего файла, не созданный pipeline. Перед первым использованием проверить совместимость major-версий Actions и закрепить выбранные версии; перечисленные Pages actions соответствуют официальной документации, но не объявлены «самыми новыми».

```yaml
name: Deploy game to Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: pages
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      VITE_BASE_PATH: ${{ vars.VITE_BASE_PATH }}
      VITE_ENABLE_DEVTOOLS: 'false'
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: npm
      - run: node -e "const b=process.env.VITE_BASE_PATH; if(!b || !b.startsWith('/') || !b.endsWith('/')) process.exit(1)"
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npm run test:unit
      - run: npm run validate:content
      - run: npm run build
      - run: npx playwright install --with-deps chromium
      - run: npm run test:smoke
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v4
        with:
          path: dist
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

В Settings → Pages выбрать Source: GitHub Actions; задать VITE_BASE_PATH с настоящим именем репозитория. Деплой только main/manual, не pull_request. Отдельный check.yml на PR: ci/typecheck/lint/unit/content/build + headless Chromium smoke под `/preview-test/`; без pages write и без внешних секретов. Конфигурация Playwright запускает `npm run preview -- --host 127.0.0.1 --port 4173`, а baseURL составляет из этого адреса и того же VITE_BASE_PATH; production smoke использует реальный base сборки, PR smoke — `/preview-test/`. Тест не должен случайно проходить на dev server вместо dist.

Обновление любой hash-ссылки запрашивает тот же index.html у Pages. Не нужны 404.html hacks и rewrite rules. Проверить сборку в подпапке: запустить preview с тем же base, открыть `/preview-test/#/play/1`, обновить сцену, проверить Network на 404. В README указать реальный URL, локальные команды, коды, настройки base, экспорт/импорт, ограничения Telegram и отсутствие облачной синхронизации.

Проверить dist: нет оригинальных фото/профиля речи/исходных документов, dev fixtures и приватных путей. Публикация через GitHub должна происходить только после отдельного запроса/авторизации владельца; текущий запрос разрешает проектирование, не загрузку материалов в аккаунт.

## 12. Проверки и поведение при сбое

| Область | Что доказывает проверка |
|---|---|
| Content validator | Все ссылки/asset IDs существуют, entry есть, end достижим, нет dead-end без действия, route не зациклен, choices уникальны, нет недоступного всем набора |
| Сюжетные пути | Все локальные окончания c1 достижимы, дружеский и все 4 глобальных финала достижимы; каждый флаг имеет потребителя; три controllerReaction сходятся в c3.pad.ready, сохраняют игру и дают соответствующие echo/отсылку c5 |
| Engine | Двойной тап не повторяет эффект; чужой результат отклонён; route deterministic; отказ не меняет неподходящие флаги |
| Saves | Roundtrip, повреждённый main + backup, обе копии плохие, storage blocked/quota, future version, неверный cursor, отмена импорта |
| Replay | Trial не меняет canonical; rewrite N сбрасывает N..5, сохраняет права/альбом; не складывает эффекты старой ветки |
| Kitchen | Все 9 заказов достижимы, границы 2/3/6/7/9, busy-slot, pause/resume, skip, спокойный режим |
| Browser smoke | Новый старт → финал c1 → reload → trial → export/import; нет 404 в подпапке |
| Ручные устройства | Safari iPhone, Chrome Android, Telegram iOS/Android; sound, share fallback, safe areas, возврат из фона |

Ошибка неизвестного узла: сохранить текущую копию, показать «Не удалось продолжить сцену» с возвратом к последнему совместимому checkpoint после подтверждения. Ошибка арта — текстовый режим/повтор загрузки. Ни одна ошибка sharing не должна ломать прохождение. Не нужны тесты каждого декоративного класса; нужны проверки данных и разрушительных для прогресса операций.

## 13. Технические источники

Это ссылки для проверки платформенных ограничений; игровые решения выше авторские.

- [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy.html): различие base для корневого и проектного сайта, сборка и публикация Pages.
- [GitHub: custom workflows for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): артефакт, зависимости jobs, environment и разрешения pages/id-token.
- [React: useReducer](https://react.dev/reference/react/useReducer): reducer должен оставаться чистым; побочные операции вынесены из переходов.
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): привязка к origin, возможный SecurityError, отсутствие гарантии сохранности в приватном просмотре. Переход из Telegram во внешний браузер не предполагает общей копии; перенос — через JSON.
- [MDN: navigator.share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share): HTTPS, поддержка не универсальна, требуется пользовательское действие и обработка отказа/отмены.
- [MDN: Clipboard.writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText): безопасный контекст и возможный отказ доступа; потому есть ручной fallback.

## Реализованный контракт пятой главы (contentVersion 5)

`ch05.ts`: 32 узла, 83 реплики. Существующий движок не заменён; добавлен адаптер результата memories. `results.memories` содержит только `{kind:'memories',outcome:'viewed'|'skipped'}`, story не меняется. Расстановка и открытое воспоминание — локальные useState, reload начинает её заново. После альбома валидатор требует результат. Окончания пишут только ending, требуют полный унаследованный префикс и выдают five-meetings атомарно. Завершённая пятая обязана содержать награду, активная не содержит её в earned до end. Коллекция имеет максимум 12 cardId и пять awardId.

`memoriesFor(story)` — чистый селектор воспоминаний. `invitation.ts` хранит invitationBridges по четырём ending, invitationConversation(story) из трёх частей, invitationReplies по пяти MeetingChoice и отдельные черновики. На первом месте ResultScreen при completed5 канона отображает InvitationPanel в оформлении SceneStage + story-panel + choices. Это работает и после завершённого trial; активный trial и просмотр альбома исключены. Чтение страниц useState не меняет save и после reload начинается с первой части; сохранённый continuation и реакция остаются. Все пять кнопок доступны на любой странице и после ответа; подтверждение не требуется для выдачи открытки. Никаких новых story-полей/узлов, перенумерации курсоров или обязательного шага после end.

Действие continuation принимает game/movie/cafe/walk/decline и прежние public/chat/later/null только при completed5 и отсутствии trial. Новый decline — отказ, не миграция later. Старые public/chat/later показываются пояснением без автоматического присвоения нового формата. Порядок UI: game, movie, cafe, walk, decline. Для decline нет draft/copy/share/taxi; для четырёх встреч — свои редактируемые черновики. Повтор значения — no-op reducer, свободный текст только useState maxLength2000. Ни JSON, ни PNG не содержат черновика. SchemaVersion1, contentVersion5 и ключи Storage прежние. Clipboard/Share — отдельные действия с ручным fallback, AbortError не доставка.

parseSave принимает старые contentVersion 1–4 в прежних границах, в том числе активную/пробную четвёртую на каждом курсоре, и меняет только номер контента. schemaVersion и ключи Storage прежние. continuation ненулевой допускается только после завершённой канонической пятой. Trial не меняет canonical/continuation, rewrite удаляет основной суффикс и сбрасывает continuation. Код5 даёт право только в manifest; запуск дополнительно требует завершённых1–4. Все ресурсы elegant зарегистрированы до экспорта неизменяемого manifest.

## Текущее управление кодом в UI

App хранит только текст ввода, сообщение, ошибку и id принятого кода локально в useState. Ref поля используется кнопкой закрытой главы для scrollIntoView/focus. Открытый section расположен до списка глав. Проверка через прежний checkCode и reducer unlock, канонический прогресс при вводе не меняется. Переход к встрече отдельным нажатием через openChapter с прежними проверками прав/предшественников/активной главы. Схема, ключи сохранений и коды не менялись.

## Telegram Mini App — актуальное расширение

Fullscreen — отдельная необязательная презентационная возможность bridge, без изменения save. expandSafely ловит отказ expand. requestFullscreen вызывается на API major≥8 при наличии метода и isFullscreen!==true, один раз благодаря кешированному prepareTelegram; exception и событие fullscreenFailed вызывают expandSafely. SDK обновляет CSS insets, игра использует их в padding shell и safe rectangle dialog. Повторного принуждения после выхода и отключения свайпов нет. Экран browser export обходит bridge целиком и не запрашивает fullscreen.

Диагностика CloudStorage: request принимает CloudOperation, таймаут 20 с, транспортные ошибки удерживают только короткий машинный код. cloudErrorText не отдаёт произвольные Error.message. useCloudSync возвращает errorText, GameProvider передаёт cloudError, App показывает его только в раскрываемом блоке баннера. crypto.subtle проверяется отдельно; невозможность SHA-256 — ошибка проверки, не damaged snapshot. Блокировка очереди, ожидаемый head и явный выбор конфликтов прежние. Не менять схему по предположению о причине сбоя без подтверждённого кода.

По новому поручению добавлен официальный WebApp script (только Mini App) и CloudStorage без собственного backend. Это исключение из исходного статического варианта без Telegram SDK. В обычном браузере остаётся прежнее хранение, включая fallback переименованного Pages. В Telegram локальный кеш разделён по боту/userId; загрузка облака предшествует GameProvider, ошибки и выбор версий отображаются до игры. CloudSession сериализует запись, фиксированный head коммитится после валидации всех частей. Реальный continuation исключён из облака, схемы и сюжет не менялись. Полный протокол, пределы и ограничения — TELEGRAM_MINI_APP.md. Предыдущие пункты об отсутствии облака относятся к браузерному режиму.


### CloudStorage: предел размера транспортного запроса

После реального DATA_TOO_LONG от Telegram Desktop splitCloudText ограничивает JSON-строку значения 3000 байтами UTF-8 вместо 3500 UTF-16 единиц. Стоимость code point включает JSON escaping; суррогатные пары не режутся. Это не новый формат сохранения: hash/length считаются по прежнему исходному cloudRaw, head version1 и ключи остаются прежними. Reader разрешает старые части длиной до 3500, новые count до ceil(2*MAX_SAVE_BYTES/(3000−8)) = 176; каждый фрагмент непустой, count не больше raw length. Полная склейка по-прежнему обязана пройти длину, SHA-256 и parseSave. getItems разбит на группы по 32 ключа, max 353 облачных ключа в двух банках. Старые копии не переписываются при чтении; обновление обычное, в неактивный банк с head последним.


### Удаление журнала прочитанных реплик

Run больше не содержит journal; step и startRun не создают журнал, DeveloperPanel не записывает его. В App удалены состояние, пункт меню, модалка и влияние журнала на suspended; CSS удалён. Сюжетные флаги и expectedTurn не зависят от прочитанных текстов.

Совместимость: validateRun принимает старое необязательное journal, проверяет прежние ограничения и удаляет его из разобранного JSON. Схема envelope1/content5 не меняется; версии контента1–4 и все остальные миграции остаются. parseSave не меняет файл пользователя и не сбрасывает сцену/выборы/награды. persist и cloudRaw сериализуют результат parseSave, поэтому новые записи и экспорт не содержат журнала. Локальный load остаётся чтением: файл на диске обновляется при следующей записи, старая исходная копия доступна для резервного восстановления.

Cloud read сначала проверяет SHA-256 исходных legacy-байтов, затем нормализует. needsRewrite = отличие нормализованного cloudRaw от фактических байтов payload. TelegramEntry передаёт null как baseline CloudSession для такой копии, чтобы первое подтверждённое сохранение записало компактный payload даже при неизменном revision. Сравнение двух копий использует нормализованный cloudRaw: отличия только в удалённом журнале не показывают конфликт. Гарантии head/backup/явного выбора настоящих расхождений сохранены. Старый банк не удаляется принудительно: естественная ротация после следующих сохранений заменяет его новой компактной копией.

### Экспорт JSON из Telegram без сервера

SaveExportButton заменяет прямой downloadBlob только для JSON-копий при наличии TelegramApp. В обычном браузере экспорт прежний; в Mini App открывает Modal с browser/copy/manual. openLink добавлен как optional метод bridge. backupTransferUrl кодирует {name,raw} в UTF-8/base64url, fragment #/export-backup/...; query очищается. Raw ограничен MAX_SAVE_BYTES, полная ссылка — внутренним практическим пределом 60000 символов, это не заявленный лимит Telegram. Для больших копий используется текст, без серверной загрузки.

readBackupRequest проверяет prefix/длину/base64url/UTF-8 и закрытый формат имени five-meetings-*.json. Raw намеренно не требует валидного сохранения: recovery должен позволять скачать исходный повреждённый файл. main.tsx читает запрос единожды до StrictMode, удаляет payload из адреса replaceState и выбирает BackupDownloadScreen вместо TelegramEntry. Никакой игровой провайдер/синхронизация/запись localStorage на этом экране не монтируются. После refresh файл недоступен, UI просит повторить перенос. Кнопка скачивания создаёт локальный JSON Blob только по нажатию; текст отображается как readOnly textarea, без HTML-интерпретации. Fragment не является серверной частью запроса; ссылка не предназначена для публичного распространения и не шифрует файл. Telegram native openLink получает полный URL по явному нажатию пользователя.

AppRoot также обрабатывает hashchange, если внешний браузер переиспользовал уже открытую вкладку игры: захватывает переданный файл, очищает адрес и переключается на отдельный экран вместо экспорта браузерной истории. До явного импорта браузерное сохранение остаётся нетронутым.

SettingsPanel предлагает текстовый импорт как дополнение к файловому, через тот же parseSave и Modal подтверждения, с экспортом прежней копии перед заменой. Нет автоматического импорта, backend, bot token, временного публичного файла или записей в CloudStorage ради экспорта. Все текущие схемы и сюжетные данные прежние. Clipboard может быть запрещён: есть ручное выделение. openLink может быть недоступен/не открыть окно: UI предлагает текст и не утверждает успешное скачивание.
