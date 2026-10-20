import type { Run,StoryState,EpisodeChapter,MemoryId,SecretId } from '../engine/types';
export const memoryRegistry={
  "c6.memory.hug": {
    "chapter": 6,
    "title": "Объятие у фонаря"
  },
  "c6.memory.hand": {
    "chapter": 6,
    "title": "Рука в руке"
  },
  "c6.memory.talk": {
    "chapter": 6,
    "title": "Сказано прямо"
  },
  "c6.memory.walk": {
    "chapter": 6,
    "title": "Просто рядом"
  },
  "c7.memory.cheek": {
    "chapter": 7,
    "title": "Поцелуй в щёку"
  },
  "c7.memory.collar": {
    "chapter": 7,
    "title": "Поправленный воротник"
  },
  "c7.memory.near": {
    "chapter": 7,
    "title": "На шаг ближе"
  },
  "c7.memory.space": {
    "chapter": 7,
    "title": "Удобная дистанция"
  },
  "c8.memory.close": {
    "chapter": 8,
    "title": "Ближе во время танца"
  },
  "c8.memory.lead": {
    "chapter": 8,
    "title": "Сегодня ведёшь ты"
  },
  "c8.memory.playful": {
    "chapter": 8,
    "title": "Наши смешные шаги"
  },
  "c9.memory.pause": {
    "chapter": 9,
    "title": "Фильм на паузе"
  },
  "c9.memory.shoulder": {
    "chapter": 9,
    "title": "У него на плече"
  },
  "c9.memory.banter": {
    "chapter": 9,
    "title": "Взгляд и подкол"
  },
  "c9.memory.watch": {
    "chapter": 9,
    "title": "Вечер с котом"
  },
  "c10.memory.pause": {
    "chapter": 10,
    "title": "Тихая пауза"
  },
  "c10.memory.laugh": {
    "chapter": 10,
    "title": "Наши нелепые шутки"
  },
  "c10.memory.initiative": {
    "chapter": 10,
    "title": "Неожиданный поворот"
  },
  "c10.memory.none": {
    "chapter": 10,
    "title": "Страница без подписи"
  }
} as const;
export const secretRegistry={
  "c6.secret.evening": {
    "chapter": 6,
    "lines": [
      {
        "speaker": "devil",
        "text": "Он на всякий случай запомнил ещё три длинные дороги."
      },
      {
        "speaker": "angel",
        "text": "Ему можно просто позвать её ещё раз."
      },
      {
        "speaker": "devil",
        "text": "Слишком хорошо работает. Даже спорить не хочется."
      }
    ]
  },
  "c7.secret.evening": {
    "chapter": 7,
    "lines": [
      {
        "speaker": "devil",
        "text": "Мне даже понравилось молчать."
      },
      {
        "speaker": "angel",
        "text": "Ты сейчас опять разговариваешь."
      },
      {
        "speaker": "devil",
        "text": "Проверял, заметишь ли."
      },
      {
        "speaker": "narrator",
        "text": "Обе закладки складываются. Дальше — пустой край кадра."
      }
    ]
  },
  "c8.secret.evening": {
    "chapter": 8,
    "lines": [
      {
        "speaker": "devil",
        "text": "Я бы дал ему какой-нибудь совет."
      },
      {
        "speaker": "angel",
        "text": "Они уже сами придумали, как провести вечер."
      },
      {
        "speaker": "devil",
        "text": "Да. И у них получилось смешнее."
      }
    ]
  },
  "c9.secret.evening": {
    "chapter": 9,
    "lines": [
      {
        "speaker": "devil",
        "text": "Название фильма он запомнил."
      },
      {
        "speaker": "angel",
        "text": "А сюжет?"
      },
      {
        "speaker": "devil",
        "text": "Теперь будет причина посмотреть ещё раз."
      }
    ]
  },
  "c10.secret.evening": {
    "chapter": 10,
    "lines": [
      {
        "speaker": "narrator",
        "text": "На отдельном листке рядом с закладкой — короткая фраза: «Ещё увидимся»."
      },
      {
        "speaker": "narrator",
        "text": "Под надписью нарисована маленькая кривоватая звезда."
      }
    ]
  }
} as const;
export const episodes={
  "6": {
    "noteKey": "c6Note",
    "questionId": "s2.q6",
    "question": "Что могло бы заставить тебя задержаться со мной ещё немного?",
    "cardIds": [
      "c6.hand",
      "c6.lap",
      "c6.home"
    ]
  },
  "7": {
    "noteKey": "c7Note",
    "questionId": "s2.q7",
    "question": "Что тебе хотелось бы спросить у меня, если бы я обещал ответить честно?",
    "cardIds": [
      "c7.open",
      "c7.promise",
      "c7.calm"
    ]
  },
  "8": {
    "noteKey": "c8Note",
    "questionId": "s2.q8",
    "question": "Как бы ты дала мне понять, что хочешь поцелуя?",
    "cardIds": [
      "c8.kiss",
      "c8.near",
      "c8.tea"
    ]
  },
  "9": {
    "noteKey": "c9Note",
    "questionId": "s2.q9",
    "question": "Какой момент этого вечера ты бы захотела продлить?",
    "cardIds": [
      "c9.kiss",
      "c9.hug",
      "c9.film"
    ]
  },
  "10": {
    "noteKey": "c10Note",
    "questionId": "s2.q10",
    "question": "Что тебе хотелось бы оставить за кадром этой истории?",
    "cardIds": [
      "c10.goodnight",
      "c10.stay",
      "c10.private",
      "c10.overnight"
    ]
  }
} as const;
export const episodeChapters=[6,7,8,9,10] as const;
export function episodeStart(_id:number,story:StoryState,_results:Run['results']):StoryState{return {...story};}
export function effectiveVenue(chapter:number,story:StoryState){return chapter===8?story.c8Place:chapter===9?story.c9Place:chapter===10?story.c10Venue:undefined;}
export function episodeFinds(run:Run):{memory:MemoryId;secret:SecretId}{const id=run.chapter as EpisodeChapter;const field={6:'c6Moment',7:'c7Moment',8:'c8Dance',9:'c9Moment',10:'c10Memory'}[id] as keyof StoryState;const memory=`c${id}.memory.${run.story[field]}` as MemoryId;if(!memoryRegistry[memory])throw Error('Не найден выбранный момент');return {memory,secret:`c${id}.secret.evening` as SecretId};}
