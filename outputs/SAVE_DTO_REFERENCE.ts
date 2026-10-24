/**
 * Полная справочная DTO текущего сейва — обновлена 24 октября 2026.
 * Автоматически собрана из src/state/types.ts и src/engine/types.ts.
 * Имена и типы полей сохранены; код игры этот справочник не импортирует.
 * Это контракт, не копия пользовательского прогресса.
 *
 * Хранение: src/persistence/storage.ts — JSON в scoped localStorage + резервная копия.
 * Экспорт JSON содержит SaveV1; Telegram cloudRaw сохраняет continuation вместе с остальным прогрессом.
 * Черновики ввода, вкладка карты и косметические метки взаимодействий не входят в SaveV1.
 * updatedAt — время изменения сейва; отдельного времени каждого сюжетного выбора нет.
 * Типы не заменяют проверки достижимости и согласованности в validateSave/validateEpisode.
 */

/** Корень JSON-сохранения. campaign — основная история; trial — отдельная пробная попытка.
 * startStates — входные состояния глав; records — снимки завершённых глав; active — текущая позиция.
 * collection объединяет найденные открытки, достижения, моменты и секреты.
 * privateNotes/privateWords содержат подтверждённый текст, привязанный к attemptId.
 * continuation — выбор реальной встречи после главы 5; входит в JSON и CloudStorage. */
export type SaveV1 = {
    appId: 'five-meetings';
    schemaVersion: 1;
    contentVersion: 14;
    revision: number;
    updatedAt: string;
    settings: Settings;
    unlocked: ChapterId[];
    campaign: {
        completed: ChapterId[];
        startStates: Partial<Record<ChapterId, StoryState>>;
        records: Partial<Record<ChapterId, ChapterRecord>>;
        active: Run | null;
    };
    trial: {
        chapter: ChapterId;
        run: Run;
    } | null;
    lastResult: {
        chapter: ChapterId;
        cardId: CardId;
        source: 'campaign' | 'trial';
        episodeRecord?: ChapterRecord;
    } | null;
    collection: {
        cards: CardRecord[];
        achievements: string[];
        memories: MemoryId[];
        secrets: SecretId[];
    };
    privateWords: PrivateWords;
    privateNotes: Partial<Record<NoteChapter, {
        campaign?: LocalNote;
        trial?: LocalNote;
    }>>;
    localNoteRevision: number;
    continuation: 'game' | 'movie' | 'cafe' | 'walk' | 'decline' | 'public' | 'chat' | 'later' | null;
};

/** Настройки интерфейса: sound — звуки действий, не музыка. */
export type Settings = {
    sound: boolean;
    volume: number;
    textMode: 'instant' | 'type';
    motion: 'system' | 'reduced' | 'full';
};

/** Снимок завершённой главы основной истории. story включает накопленные к этому моменту решения. */
export type ChapterRecord = {
    scriptRevision?: 3;
    endingId: CardId;
    cardId: CardId;
    story: StoryState;
    results: Run['results'];
    attemptId?: string;
    episode?: EpisodeProgress;
};

/** Найденная открытка. variant/teamName/venue хранят данные её отображения. */
export type CardRecord = {
    c5Edition?: 3;
    id: CardId;
    chapter: ChapterId;
    endingId: CardId;
    variant: 'tidy' | 'detour' | 'skipped' | 'patched' | 'borrowed' | 'feast' | 'snack' | 'chaos' | 'cat' | 'controllers' | 'teapot' | 'adventure' | 'calm' | 'evening' | 'morning';
    captionId: string;
    teamName?: NonNullable<StoryState['teamName']>;
    usedPreset?: boolean;
    venue?: 'home' | 'cafe' | 'courtyard' | 'terrace';
};

/** Подтверждённый ответ главы 6–10. status=deleted сохраняет факт удаления, text тогда пустой.
 * Историческое имя LocalNote не означает «только локально»: объект входит в JSON и Telegram CloudStorage. */
export type LocalNote = {
    chapter: NoteChapter;
    questionId: QuestionId;
    attemptId: string;
    status: 'saved' | 'deleted';
    text: string;
};

export type PrivateWords = {
    campaign?: PrivateWord;
    trial?: PrivateWord;
};

/** Своё слово из главы 8. Сохраняется отдельно для основной и пробной попытки. */
export type PrivateWord = {
    chapter: 8;
    labelId: 's2.word8';
    attemptId: string;
    status: 'saved' | 'deleted';
    text: string;
};

/** Сюжетные решения. Поля необязательные: появляются по мере прохождения соответствующих веток.
 * teamName: dumpling = «Пельмень и партнёры», calm = «Два спокойных человека», accident = «Отдел случайных побед».
 * constellation: cat = «Пончик», controllers = «Наша команда», teapot = «Ещё по чашке?».
 * Это снимок состояния, а не журнал всех нажатий. c4Goodbye хранит вариант прощания4. c4Edition/c5Edition различают редакции; новые вкусы пятой появляются только в c5Edition=3. */
export type StoryState = {
    c4Edition?: 2;
    c5Edition?: 2 | 3;
    c5FirstTaste?: 'vanilla' | 'sweet' | 'compare';
    c5Recommendation?: 'vanilla' | 'fresh' | 'both';
    approach?: 'joke' | 'help' | 'space';
    searchResult?: 'tidy' | 'detour' | 'skipped';
    catNoticed?: boolean;
    pace?: 'quiet' | 'playful' | 'flirt';
    plan?: 'tea' | 'banter' | 'coop';
    rainRoute?: 'shelter' | 'arcade';
    catApproach?: 'wait' | 'help';
    umbrella?: 'patched' | 'borrowed' | 'skipped';
    eveningMood?: 'quiet' | 'playful';
    controllerReaction?: 'tease' | 'help' | 'absurd';
    teamName?: 'dumpling' | 'calm' | 'accident';
    kitchenStyle?: 'planner' | 'improv';
    kitchenResult?: 'feast' | 'snack' | 'chaos' | 'skipped';
    gameAftercare?: 'team' | 'rematch';
    bench?: 'near' | 'space';
    constellation?: 'cat' | 'controllers' | 'teapot';
    bond?: 'romantic' | 'friendly' | 'undecided';
    wish?: 'adventure' | 'calm';
    c4Goodbye?: 'accept' | 'her' | 'none';
    ending?: 'romantic' | 'comic' | 'gaming' | 'friendly';
    c6Voice?: 'lead' | 'tease' | 'quiet';
    c6Moment?: 'hug' | 'hand' | 'talk' | 'walk';
    c6Note?: 'saved' | 'skipped';
    c6Ending?: 'hand' | 'lap' | 'home';
    c7Aside?: 'hush' | 'joke' | 'ignore';
    c7Moment?: 'cheek' | 'collar' | 'near' | 'space';
    c7Reply?: 'kind' | 'hand' | 'pause';
    c7Note?: 'saved' | 'skipped';
    c7Ending?: 'open' | 'promise' | 'calm';
    c8Place?: 'home' | 'cafe';
    c8Word?: 'minute' | 'slow' | 'taks' | 'custom' | 'none';
    c8Dance?: 'close' | 'lead' | 'playful';
    c8Tender?: 'curls' | 'hair' | 'cheek' | 'neck' | 'dance';
    c8Hoodie?: 'borrowed' | 'evening' | 'none';
    c8Note?: 'saved' | 'skipped';
    c8Approach?: 'her' | 'ask' | 'none';
    c8Ending?: 'kiss' | 'near' | 'tea';
    c9Place?: 'home' | 'courtyard';
    c9Moment?: 'pause' | 'shoulder' | 'banter' | 'watch';
    c9Hoodie?: 'returned' | 'kept';
    c9Note?: 'saved' | 'skipped';
    c9Approach?: 'her' | 'ask' | 'none';
    c9Ending?: 'kiss' | 'hug' | 'film';
    c10Place?: 'home' | 'terrace';
    c10Venue?: 'home' | 'terrace';
    c10Memory?: 'pause' | 'laugh' | 'initiative' | 'none';
    c10Aside?: 'self' | 'last' | 'quiet';
    c10Note?: 'saved' | 'skipped';
    c10Intent?: 'private' | 'overnight' | 'stay' | 'goodnight';
    c10Move?: 'home' | 'stay';
    c10Affection?: 'her' | 'ask' | 'hug' | 'none';
    c10Morning?: 'hug' | 'breakfast' | 'coffee';
    c10Ending?: 'goodnight' | 'stay' | 'private' | 'overnight';
    c6Keepsake?: "cat" | "house" | "cup";
    c7Story?: "weekend" | "awkward" | "hobby";
    c7Rain?: "sit" | "out" | "art";
    c8Cheek?: "no" | "yes";
    c8LipKiss?: "no" | "yes";
    c8FirstGesture?: "curls" | "shoulder" | "playful";
    c8LateMode?: "dance" | "seated" | "story";
    c8LateTender?: "neck" | "hair" | "hold" | "step";
    c8Close?: "dance" | "tea" | "next";
    c9LipKiss?: "no" | "yes";
    c9Closeness?: "shoulder" | "near" | "separate";
    c9Break?: "stretch" | "drink" | "watch";
    c9SecondMoment?: "hug" | "banter" | "watch";
    c9Close?: "talk" | "quiet" | "credits";
    c10LipKiss?: "no" | "yes";
    c10EveningKiss?: "no" | "yes";
    c10MorningPreference?: "breakfast" | "quiet" | "company";
    c10Talk?: "kind" | "plain" | "funny";
    c10EveningMoment?: "hug" | "kiss" | "talk";
    c10Night?: "hug" | "kiss" | "talk";
};

/** Незавершённая попытка: nodeId + lineIndex указывают позицию, turn защищает от повторного действия.
 * story содержит накопленные решения; results — итоги мини-игр; activity — текущую мини-игру глав 6–10.
 * attemptId связывает попытку с её текстовыми ответами. */
export type Run = {
    chapter: ChapterId;
    scriptRevision?: 3;
    nodeId: NodeId;
    lineIndex: number;
    turn: number;
    story: StoryState;
    results: {
        'token-search'?: SearchResult;
        'umbrella-patch'?: UmbrellaResult;
        'kitchen'?: KitchenResult;
        'constellation'?: ConstellationResult;
        'memories'?: MemoriesResult;
        'evening-route'?: EveningRouteResult;
        'between-lines'?: CouncilResult;
        'dessert'?: DessertResult;
        'movie-setup'?: MovieSetupResult;
        'evening-light'?: EveningLightResult;
    };
    earned: string[];
    attemptId?: string;
    episode?: EpisodeProgress;
    activity?: RouteDraft | CouncilDraft | DessertDraft | MovieSetupDraft | EveningLightDraft;
};

export type ChapterId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type CardId = 'c5.story' | "c8.r3.dance" | "c8.r3.tea" | "c8.r3.next" | "c9.r3.talk" | "c9.r3.quiet" | "c9.r3.credits" | 'c1.tea' | 'c1.banter' | 'c1.coop' | 'c2.shelter' | 'c2.arcade' | 'c3.dinner' | 'c4.adventure' | 'c4.calm' | 'c5.romantic' | 'c5.comic' | 'c5.gaming' | 'c5.friendly' | 'c6.hand' | 'c6.lap' | 'c6.home' | 'c7.open' | 'c7.promise' | 'c7.calm' | 'c8.kiss' | 'c8.near' | 'c8.tea' | 'c9.kiss' | 'c9.hug' | 'c9.film' | 'c10.goodnight' | 'c10.stay' | 'c10.private' | 'c10.overnight';

export type NodeId = `c${ChapterId}.${string}`;

export type SearchResult = {
    kind: 'token-search';
    outcome: 'tidy' | 'detour' | 'skipped';
    catNoticed: boolean;
};

export type UmbrellaResult = {
    kind: 'umbrella-patch';
    outcome: 'patched' | 'borrowed' | 'skipped';
};

export type KitchenResult = {
    kind: 'kitchen';
    outcome: 'feast' | 'snack' | 'chaos' | 'skipped';
    served: number;
    mode: 'timed' | 'calm';
};

export type ConstellationResult = {
    kind: 'constellation';
    outcome: 'cat' | 'controllers' | 'teapot';
    usedPreset: boolean;
};

export type MemoriesResult = {
    kind: 'memories';
    outcome: 'viewed' | 'skipped';
};

export type EveningRouteResult = {
    kind: 'evening-route';
    mode: 'own';
    stops: [
        RouteStop,
        RouteStop
    ];
} | {
    kind: 'evening-route';
    mode: 'shared';
    stops: [
        'lights',
        'water'
    ];
} | {
    kind: 'evening-route';
    mode: 'skipped';
    stops: [
    ];
};

export type RouteStop = 'water' | 'lights' | 'window';

export type CouncilResult = {
    kind: 'between-lines';
    outcome: 'completed';
    answers: [
        TopicAnswer,
        PlaceAnswer,
        ToneAnswer
    ];
} | {
    kind: 'between-lines';
    outcome: 'skipped';
    answers: CouncilPrefix;
};

export type TopicAnswer = 'question' | 'challenge' | 'ordinary';

export type PlaceAnswer = 'lead' | 'invite' | 'stay';

export type ToneAnswer = 'direct' | 'playful' | 'quiet';

export type CouncilPrefix = [
] | [
    TopicAnswer
] | [
    TopicAnswer,
    PlaceAnswer
];

export type DessertResult = {
    kind: 'dessert';
    mode: 'completed';
    topping: DessertTopping;
    mark: DessertMark;
} | {
    kind: 'dessert';
    mode: 'shared';
    topping: 'berry';
    mark: 'star';
} | {
    kind: 'dessert';
    mode: 'skipped';
    topping: null;
    mark: null;
};

export type DessertTopping = 'berry' | 'chocolate' | 'honey';

export type DessertMark = 'star' | 'heart' | 'swirl';

export type MovieSetupResult = {
    kind: 'movie-setup';
    mode: 'completed';
    seat: MovieSeat;
    light: MovieLight;
    drink: MovieDrink;
} | {
    kind: 'movie-setup';
    mode: 'shared';
    seat: 'space';
    light: 'warm';
    drink: 'tea';
} | {
    kind: 'movie-setup';
    mode: 'skipped';
    seat: null;
    light: null;
    drink: null;
};

export type MovieSeat = 'near' | 'space';

export type MovieLight = 'warm' | 'dim';

export type MovieDrink = 'tea' | 'cocoa' | 'water';

export type EveningLightResult = {
    kind: 'evening-light';
    level: EveningLight;
};

export type EveningLight = 'warm' | 'dim' | 'unchanged';

/** Найденный момент/секрет внутри одной попытки. */
export type EpisodeProgress = {
    memory?: MemoryId;
    secret?: SecretId;
};

export type MemoryId = 'c6.memory.hug' | 'c6.memory.hand' | 'c6.memory.talk' | 'c6.memory.walk' | 'c7.memory.cheek' | 'c7.memory.collar' | 'c7.memory.near' | 'c7.memory.space' | 'c8.memory.close' | 'c8.memory.lead' | 'c8.memory.playful' | 'c9.memory.pause' | 'c9.memory.shoulder' | 'c9.memory.banter' | 'c9.memory.watch' | 'c10.memory.pause' | 'c10.memory.laugh' | 'c10.memory.initiative' | 'c10.memory.none';

export type SecretId = "c6.r3.secret" | "c7.r3.secret" | "c8.r3.secret" | "c9.r3.secret" | "c10.r3.secret" | 'c6.secret.evening' | 'c7.secret.evening' | 'c8.secret.evening' | 'c9.secret.evening' | 'c10.secret.evening';

export type RouteDraft = {
    kind: 'evening-route';
    phase: 'select' | 'suggestion';
    selected: RouteStop[];
};

export type CouncilDraft = {
    kind: 'between-lines';
    answers: CouncilAnswers;
    phase: 'choose' | 'reply' | 'complete';
    lineIndex: number;
};

export type CouncilAnswers = CouncilPrefix | [
    TopicAnswer,
    PlaceAnswer,
    ToneAnswer
];

export type DessertDraft = {
    kind: 'dessert';
    topping: DessertTopping | null;
    mark: DessertMark | null;
};

export type MovieSetupDraft = {
    kind: 'movie-setup';
    seat: MovieSeat | null;
    light: MovieLight | null;
    drink: MovieDrink | null;
};

export type EveningLightDraft = {
    kind: 'evening-light';
    level: EveningLight | null;
};

export type NoteChapter = EpisodeChapter;

export type EpisodeChapter = 6 | 7 | 8 | 9 | 10;

export type QuestionId = "s2.r3.q6" | "s2.r3.q7" | "s2.r3.q8" | "s2.r3.q9" | "s2.r3.q10";
