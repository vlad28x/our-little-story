import type { Chapter } from '../../engine/types';
// R3: outputs/SEASON_02_R3_SCRIPT_*.md
export const chapter6:Chapter={
  "id": 6,
  "contentVersion": 12,
  "scriptRevision": 3,
  "title": "Ещё пять минут",
  "entry": "c6.r3.entry",
  "nodes": {
    "c6.r3.entry": {
      "id": "c6.r3.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На развилке Влад показывает направо, но сам останавливается."
        },
        {
          "speaker": "vlad",
          "text": "остановка там. а здесь можно ещё немного пройтись."
        },
        {
          "speaker": "heroine",
          "text": "Ты уже выбрал?"
        },
        {
          "speaker": "vlad",
          "text": "за себя — да. теперь пытаюсь прилично предложить."
        },
        {
          "speaker": "narrator",
          "text": "Он убирает телефон в карман и разворачивается к воде."
        },
        {
          "speaker": "vlad",
          "text": "пять минут. а если найдём что-нибудь интересное, виноват будет город."
        }
      ],
      "next": "c6.r3.voice"
    },
    "c6.r3.voice": {
      "id": "c6.r3.voice",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Пройдёмся ещё немного?",
      "choices": [
        {
          "id": "lead",
          "text": "Ладно. Показывай, что у тебя за пять минут",
          "next": "c6.r3.voice.lead",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "lead"
            }
          ]
        },
        {
          "id": "tease",
          "text": "Я выберу дорогу. Ты отвечаешь за компанию",
          "next": "c6.r3.voice.tease",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "tease"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "Пройдёмся без плана?",
          "next": "c6.r3.voice.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "quiet"
            }
          ]
        }
      ]
    },
    "c6.r3.voice.lead": {
      "id": "c6.r3.voice.lead",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "люблю разумный запас доверия"
        },
        {
          "speaker": "heroine",
          "text": "Пока маленький."
        },
        {
          "speaker": "vlad",
          "text": "постараюсь не потратить на рассказ про фонари."
        }
      ],
      "next": "c6.r3.window.intro"
    },
    "c6.r3.voice.tease": {
      "id": "c6.r3.voice.tease",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "отлично. наконец-то должность, к которой я готов."
        },
        {
          "speaker": "heroine",
          "text": "Без длинной речи."
        },
        {
          "speaker": "vlad",
          "text": "уже начал её сокращать."
        }
      ],
      "next": "c6.r3.window.intro"
    },
    "c6.r3.voice.quiet": {
      "id": "c6.r3.voice.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "да. это у меня обычно получается лучше всего."
        },
        {
          "speaker": "heroine",
          "text": "А зачем телефон доставал?"
        },
        {
          "speaker": "vlad",
          "text": "чтобы выглядеть человеком с планом."
        }
      ],
      "next": "c6.r3.window.intro"
    },
    "c6.r3.window.intro": {
      "id": "c6.r3.window.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы доходите до освещённой витрины. Влад задерживается перед тремя керамическими фигурками."
        },
        {
          "speaker": "vlad",
          "text": "давай проверим кое-что. какую из этих трёх я бы забрал?"
        },
        {
          "speaker": "heroine",
          "text": "Ты сейчас проверяешь, насколько я тебя знаю?"
        },
        {
          "speaker": "vlad",
          "text": "нет. насколько убедительно я могу объяснить странную покупку."
        },
        {
          "speaker": "narrator",
          "text": "В витрине — важный кот, маленький домик и чашка с кривой ручкой."
        }
      ],
      "next": "c6.r3.guess"
    },
    "c6.r3.guess": {
      "id": "c6.r3.guess",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Что бы выбрал Влад?",
      "choices": [
        {
          "id": "cat",
          "text": "Кота. Слишком похож на хозяина",
          "next": "c6.r3.guess.cat"
        },
        {
          "id": "house",
          "text": "Домик. Ты же обещал уют",
          "next": "c6.r3.guess.house"
        },
        {
          "id": "cup",
          "text": "Чашку. Её надо спасти",
          "next": "c6.r3.guess.cup"
        }
      ]
    },
    "c6.r3.guess.cat": {
      "id": "c6.r3.guess.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Кота. Вид у него такой, будто всё под контролем."
        },
        {
          "speaker": "vlad",
          "text": "да, это он. а внутри, подозреваю, тоже полный бардак."
        },
        {
          "speaker": "heroine",
          "text": "Значит, угадала?"
        },
        {
          "speaker": "vlad",
          "text": "с неприятной точностью."
        }
      ],
      "next": "c6.r3.her.intro"
    },
    "c6.r3.guess.house": {
      "id": "c6.r3.guess.house",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Домик. Ты же обещал уют."
        },
        {
          "speaker": "vlad",
          "text": "красивый ответ. я выбрал кота, но теперь чувствую, что мне стоило подготовиться лучше."
        },
        {
          "speaker": "heroine",
          "text": "Можно купить коту дом."
        },
        {
          "speaker": "vlad",
          "text": "вот так незаметно начинаются большие расходы."
        }
      ],
      "next": "c6.r3.her.intro"
    },
    "c6.r3.guess.cup": {
      "id": "c6.r3.guess.cup",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Чашку. Её надо спасти."
        },
        {
          "speaker": "vlad",
          "text": "я выбрал кота. но чашку теперь тоже жалко."
        },
        {
          "speaker": "heroine",
          "text": "У тебя всё так легко меняется?"
        },
        {
          "speaker": "vlad",
          "text": "только планы на керамику. пока что."
        }
      ],
      "next": "c6.r3.her.intro"
    },
    "c6.r3.her.intro": {
      "id": "c6.r3.her.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад отступает, чтобы не закрывать тебе витрину."
        },
        {
          "speaker": "vlad",
          "text": "теперь твоя очередь. выбери что-нибудь про себя. я попробую угадать."
        }
      ],
      "next": "c6.r3.her.choice"
    },
    "c6.r3.her.choice": {
      "id": "c6.r3.her.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Выбери про себя — он попробует угадать",
      "choices": [
        {
          "id": "cat",
          "text": "Я бы выбрала кота",
          "next": "c6.r3.her.guess",
          "effects": [
            {
              "kind": "set",
              "key": "c6Keepsake",
              "value": "cat"
            }
          ]
        },
        {
          "id": "house",
          "text": "Мне нравится домик",
          "next": "c6.r3.her.guess",
          "effects": [
            {
              "kind": "set",
              "key": "c6Keepsake",
              "value": "house"
            }
          ]
        },
        {
          "id": "cup",
          "text": "Всё-таки чашку",
          "next": "c6.r3.her.guess",
          "effects": [
            {
              "kind": "set",
              "key": "c6Keepsake",
              "value": "cup"
            }
          ]
        }
      ]
    },
    "c6.r3.her.guess": {
      "id": "c6.r3.her.guess",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "мне кажется, чашку. у неё есть характер."
        }
      ],
      "next": "c6.r3.her.route"
    },
    "c6.r3.her.route": {
      "id": "c6.r3.her.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Keepsake",
              "equals": "cat"
            }
          ],
          "next": "c6.r3.her.cat"
        },
        {
          "all": [
            {
              "key": "c6Keepsake",
              "equals": "house"
            }
          ],
          "next": "c6.r3.her.house"
        }
      ],
      "fallback": "c6.r3.her.cup"
    },
    "c6.r3.her.cat": {
      "id": "c6.r3.her.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Вообще-то кота."
        },
        {
          "speaker": "vlad",
          "text": "так. одного мы уже не поделили."
        },
        {
          "speaker": "heroine",
          "text": "Пусть остаётся здесь."
        },
        {
          "speaker": "vlad",
          "text": "и повод вернуться готов."
        }
      ],
      "next": "c6.r3.window.after"
    },
    "c6.r3.her.house": {
      "id": "c6.r3.her.house",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Домик."
        },
        {
          "speaker": "vlad",
          "text": "ладно, твоя идея с котом и домом была серьёзной."
        },
        {
          "speaker": "heroine",
          "text": "Ты слишком рано решил, что понял мою логику."
        },
        {
          "speaker": "vlad",
          "text": "зато теперь интересно."
        }
      ],
      "next": "c6.r3.window.after"
    },
    "c6.r3.her.cup": {
      "id": "c6.r3.her.cup",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Угадал."
        },
        {
          "speaker": "vlad",
          "text": "сейчас очень хочется сделать вид, что я отлично разбираюсь в людях."
        },
        {
          "speaker": "heroine",
          "text": "Не порть красивый момент."
        },
        {
          "speaker": "vlad",
          "text": "молчу. просто запомню чашку."
        }
      ],
      "next": "c6.r3.window.after"
    },
    "c6.r3.window.after": {
      "id": "c6.r3.window.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Магазин уже закрыт. Вы ничего не покупаете, но уходить от витрины сразу не получается."
        },
        {
          "speaker": "vlad",
          "text": "нравится, что обычный кот внезапно занял столько времени."
        },
        {
          "speaker": "heroine",
          "text": "Уже считаешь свои пять минут?"
        },
        {
          "speaker": "vlad",
          "text": "перестал ещё у кривой ручки."
        }
      ],
      "next": "c6.r3.lantern"
    },
    "c6.r3.aside": {
      "id": "c6.r3.aside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "Пять минут. Ага."
        },
        {
          "speaker": "angel",
          "text": "Кот действительно интересный."
        }
      ],
      "next": "c6.r3.route.intro",
      "presentation": "adviser-aside"
    },
    "c6.r3.route.intro": {
      "id": "c6.r3.route.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "можем пройти к воде или завернуть ещё куда-нибудь. выбирай, я больше не считаю минуты."
        }
      ],
      "next": "c6.r3.route"
    },
    "c6.r3.route": {
      "id": "c6.r3.route",
      "kind": "minigame",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "game": "evening-route",
      "next": "c6.r3.stop.route"
    },
    "c6.r3.stop.route": {
      "id": "c6.r3.stop.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "water"
            }
          ],
          "next": "c6.r3.stop.water"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "lights"
            }
          ],
          "next": "c6.r3.stop.lights"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "window"
            }
          ],
          "next": "c6.r3.stop.window"
        }
      ],
      "fallback": "c6.r3.stop.free"
    },
    "c6.r3.stop.water": {
      "id": "c6.r3.stop.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы доходите до тихой площадки у воды. Здесь не нужно обходить встречных каждую минуту."
        },
        {
          "speaker": "vlad",
          "text": "хороший поворот. можно наконец смотреть по сторонам, а не под ноги."
        },
        {
          "speaker": "heroine",
          "text": "Тогда не торопись."
        },
        {
          "speaker": "vlad",
          "text": "и не собирался."
        }
      ],
      "next": "c6.r3.second.route"
    },
    "c6.r3.stop.lights": {
      "id": "c6.r3.stop.lights",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы сворачиваете к фонарям. Их отражения вытягиваются через дорожку."
        },
        {
          "speaker": "heroine",
          "text": "Вот здесь хочется немного замедлиться."
        },
        {
          "speaker": "vlad",
          "text": "давай. пока никуда не сворачиваем."
        }
      ],
      "next": "c6.r3.second.route"
    },
    "c6.r3.stop.window": {
      "id": "c6.r3.stop.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы ещё раз возвращаетесь к освещённой витрине. Керамический кот всё так же смотрит на улицу."
        },
        {
          "speaker": "vlad",
          "text": "ничего не пропустил. мы тоже пока просто гуляем."
        },
        {
          "speaker": "heroine",
          "text": "Подозреваю, он так весь вечер."
        },
        {
          "speaker": "vlad",
          "text": "хороший у него вечер."
        }
      ],
      "next": "c6.r3.second.route"
    },
    "c6.r3.second.route": {
      "id": "c6.r3.second.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "water"
            }
          ],
          "next": "c6.r3.second.water"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "lights"
            }
          ],
          "next": "c6.r3.second.lights"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "window"
            }
          ],
          "next": "c6.r3.second.window"
        }
      ],
      "fallback": "c6.r3.poster"
    },
    "c6.r3.second.water": {
      "id": "c6.r3.second.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы доходите до тихой площадки у воды. Здесь не нужно обходить встречных каждую минуту."
        },
        {
          "speaker": "vlad",
          "text": "хороший поворот. можно наконец смотреть по сторонам, а не под ноги."
        },
        {
          "speaker": "heroine",
          "text": "Тогда не торопись."
        },
        {
          "speaker": "vlad",
          "text": "и не собирался."
        }
      ],
      "next": "c6.r3.poster"
    },
    "c6.r3.second.lights": {
      "id": "c6.r3.second.lights",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы сворачиваете к фонарям. Их отражения вытягиваются через дорожку."
        },
        {
          "speaker": "heroine",
          "text": "Вот здесь хочется немного замедлиться."
        },
        {
          "speaker": "vlad",
          "text": "давай. пока никуда не сворачиваем."
        }
      ],
      "next": "c6.r3.poster"
    },
    "c6.r3.second.window": {
      "id": "c6.r3.second.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы ещё раз возвращаетесь к освещённой витрине. Керамический кот всё так же смотрит на улицу."
        },
        {
          "speaker": "vlad",
          "text": "ничего не пропустил. мы тоже пока просто гуляем."
        },
        {
          "speaker": "heroine",
          "text": "Подозреваю, он так весь вечер."
        },
        {
          "speaker": "vlad",
          "text": "хороший у него вечер."
        }
      ],
      "next": "c6.r3.poster"
    },
    "c6.r3.stop.free": {
      "id": "c6.r3.stop.free",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы не выбираете отдельные остановки и идёте вдоль воды."
        },
        {
          "speaker": "vlad",
          "text": "можно просто гулять. город пока отлично справляется без расписания."
        }
      ],
      "next": "c6.r3.poster"
    },
    "c6.r3.poster": {
      "id": "c6.r3.poster",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У воды ветер переворачивает край афиши на столбе. Влад ловит его взглядом."
        },
        {
          "speaker": "vlad",
          "text": "половину объявления не видно. предлагаю придумать вторую."
        },
        {
          "speaker": "heroine",
          "text": "А если там что-то серьёзное?"
        },
        {
          "speaker": "vlad",
          "text": "тогда у нас получится очень странная выставка."
        }
      ],
      "next": "c6.r3.poster.choice"
    },
    "c6.r3.poster.choice": {
      "id": "c6.r3.poster.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Что там могло быть написано?",
      "choices": [
        {
          "id": "cat",
          "text": "«Приходите со своим котом»",
          "next": "c6.r3.poster.cat"
        },
        {
          "id": "late",
          "text": "«Можно опоздать, мы тоже»",
          "next": "c6.r3.poster.late"
        },
        {
          "id": "read",
          "text": "Давай попробуем прочитать настоящую",
          "next": "c6.r3.poster.read"
        }
      ]
    },
    "c6.r3.poster.cat": {
      "id": "c6.r3.poster.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "наш керамический уже готов."
        },
        {
          "speaker": "heroine",
          "text": "Ему ещё из магазина выйти надо."
        },
        {
          "speaker": "vlad",
          "text": "значит, встречаемся у витрины после открытия."
        }
      ],
      "next": "c6.r3.moment.intro"
    },
    "c6.r3.poster.late": {
      "id": "c6.r3.poster.late",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "вот на такое я бы пришёл вовремя."
        },
        {
          "speaker": "heroine",
          "text": "Чтобы удивить организаторов?"
        },
        {
          "speaker": "vlad",
          "text": "чтобы занять удобное место."
        }
      ],
      "next": "c6.r3.moment.intro"
    },
    "c6.r3.poster.read": {
      "id": "c6.r3.poster.read",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы отходите на несколько шагов и находите угол, с которого видно надпись."
        },
        {
          "speaker": "vlad",
          "text": "мастер-класс по керамике."
        },
        {
          "speaker": "heroine",
          "text": "Кот был ближе к правде, чем казалось."
        },
        {
          "speaker": "vlad",
          "text": "он весь вечер всё знал."
        }
      ],
      "next": "c6.r3.moment.intro"
    },
    "c6.r3.moment.intro": {
      "id": "c6.r3.moment.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь к ограде. Влад становится рядом, оставляя тебе место."
        },
        {
          "speaker": "vlad",
          "text": "я рад, что мы не свернули сразу к остановке."
        },
        {
          "speaker": "heroine",
          "text": "Из-за кота?"
        },
        {
          "speaker": "vlad",
          "text": "кот неплохой. но компания мне нравится больше."
        },
        {
          "speaker": "vlad",
          "text": "хочешь, возьму тебя за руку?"
        },
        {
          "speaker": "narrator",
          "text": "Он протягивает раскрытую ладонь и ждёт."
        }
      ],
      "next": "c6.r3.moment"
    },
    "c6.r3.moment": {
      "id": "c6.r3.moment",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Как хочется пройтись дальше?",
      "choices": [
        {
          "id": "hand",
          "text": "Давай",
          "next": "c6.r3.moment.hand",
          "effects": [
            {
              "kind": "set",
              "key": "c6Moment",
              "value": "hand"
            }
          ]
        },
        {
          "id": "hug",
          "text": "Лучше обними меня",
          "next": "c6.r3.moment.hug",
          "effects": [
            {
              "kind": "set",
              "key": "c6Moment",
              "value": "hug"
            }
          ]
        },
        {
          "id": "walk",
          "text": "Пока просто пойдём рядом",
          "next": "c6.r3.moment.walk",
          "effects": [
            {
              "kind": "set",
              "key": "c6Moment",
              "value": "walk"
            }
          ]
        }
      ]
    },
    "c6.r3.moment.hand": {
      "id": "c6.r3.moment.hand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты вкладываешь ладонь в его руку. Влад подстраивает шаг под твой."
        },
        {
          "speaker": "vlad",
          "text": "теперь маршрут мне нравится ещё больше."
        },
        {
          "speaker": "heroine",
          "text": "Ты это каждый раз говоришь?"
        },
        {
          "speaker": "vlad",
          "text": "сегодня проверяю впервые."
        }
      ],
      "next": "c6.r3.talk"
    },
    "c6.r3.moment.hug": {
      "id": "c6.r3.moment.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Лучше обними меня."
        },
        {
          "speaker": "vlad",
          "text": "иди сюда."
        },
        {
          "speaker": "narrator",
          "text": "Вы останавливаетесь. Влад обнимает тебя; через несколько секунд вы возвращаетесь к прогулке."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь можно идти дальше."
        },
        {
          "speaker": "heroine",
          "text": "Уже торопишься?"
        },
        {
          "speaker": "vlad",
          "text": "как раз наоборот."
        }
      ],
      "next": "c6.r3.talk"
    },
    "c6.r3.moment.walk": {
      "id": "c6.r3.moment.walk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Пока просто пойдём рядом."
        },
        {
          "speaker": "vlad",
          "text": "давай. у меня ещё есть незаконченное дело с той афишей."
        },
        {
          "speaker": "heroine",
          "text": "Ты хочешь записаться?"
        },
        {
          "speaker": "vlad",
          "text": "хочу однажды показать тебе кота, который будет хуже магазинного."
        }
      ],
      "next": "c6.r3.talk"
    },
    "c6.r3.talk": {
      "id": "c6.r3.talk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "а ты часто соглашаешься на что-нибудь просто потому, что стало любопытно?"
        },
        {
          "speaker": "heroine",
          "text": "Например, на прогулку, которая длится дольше обещанного?"
        },
        {
          "speaker": "vlad",
          "text": "именно. пример совершенно случайный."
        }
      ],
      "next": "c6.r3.talk.choice"
    },
    "c6.r3.talk.choice": {
      "id": "c6.r3.talk.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Как у тебя обычно получается?",
      "choices": [
        {
          "id": "free",
          "text": "Иногда лучше не придумывать всё заранее",
          "next": "c6.r3.talk.free"
        },
        {
          "id": "plan",
          "text": "Мне нравится, когда есть маленький план",
          "next": "c6.r3.talk.plan"
        },
        {
          "id": "company",
          "text": "Смотря с кем",
          "next": "c6.r3.talk.company"
        }
      ]
    },
    "c6.r3.talk.free": {
      "id": "c6.r3.talk.free",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда предлагаю оставить один свободный вечер под что-нибудь странное."
        },
        {
          "speaker": "heroine",
          "text": "Насколько странное?"
        },
        {
          "speaker": "vlad",
          "text": "начнём с кривой чашки. дальше посмотрим."
        }
      ],
      "next": "c6.r3.talk.after"
    },
    "c6.r3.talk.plan": {
      "id": "c6.r3.talk.plan",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "договорились. место и время — с меня. внезапный керамический кот — по обстоятельствам."
        },
        {
          "speaker": "heroine",
          "text": "Уже похоже на план."
        },
        {
          "speaker": "vlad",
          "text": "и даже хочется его выполнить."
        }
      ],
      "next": "c6.r3.talk.after"
    },
    "c6.r3.talk.company": {
      "id": "c6.r3.talk.company",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад на секунду перестаёт смотреть на дорогу."
        },
        {
          "speaker": "vlad",
          "text": "этот ответ я сейчас очень постараюсь не испортить шуткой."
        },
        {
          "speaker": "heroine",
          "text": "Получается?"
        },
        {
          "speaker": "vlad",
          "text": "пока да."
        }
      ],
      "next": "c6.r3.talk.after"
    },
    "c6.r3.talk.after": {
      "id": "c6.r3.talk.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Мимо проезжает велосипед; вы даёте ему дорогу и снова выходите к воде."
        },
        {
          "speaker": "vlad",
          "text": "я люблю такие вечера. вроде ничего особенного не случилось, а домой идёшь совсем с другим настроением."
        },
        {
          "speaker": "heroine",
          "text": "Может, особенное не всегда громкое."
        },
        {
          "speaker": "vlad",
          "text": "да. вот это, пожалуй, запомню."
        }
      ],
      "next": "c6.r3.small.plans"
    },
    "c6.r3.note": {
      "id": "c6.r3.note",
      "kind": "note",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "questionId": "s2.r3.q6",
      "maxCodePoints": 280,
      "prompt": "Какую маленькую остановку ты добавила бы в такую прогулку?",
      "context": "Прогулка оказалась длиннее обещанных пяти минут.",
      "answerOptions": [
        {
          "id": "preset.1",
          "kind": "preset",
          "text": "Зайти за чем-нибудь тёплым и ещё немного пройтись."
        },
        {
          "id": "preset.2",
          "kind": "preset",
          "text": "Найти тихое место и посидеть без плана."
        },
        {
          "id": "custom",
          "kind": "custom",
          "text": "Своими словами ✎"
        }
      ],
      "placeholder": "Мне бы хотелось…",
      "submitLabel": "Сохранить ответ",
      "skipLabel": "Пропустить",
      "next": "c6.r3.closing"
    },
    "c6.r3.closing": {
      "id": "c6.r3.closing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У развилки снова видна остановка. На этот раз Влад не делает вид, будто не замечает её."
        },
        {
          "speaker": "vlad",
          "text": "могу проводить. или сделаем ещё маленький круг."
        }
      ],
      "next": "c6.r3.ending"
    },
    "c6.r3.ending": {
      "id": "c6.r3.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Куда теперь?",
      "choices": [
        {
          "id": "lap",
          "text": "Ещё круг. Теперь без обещаний про пять минут",
          "next": "c6.r3.finish.lap",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "lap"
            }
          ]
        },
        {
          "id": "hand",
          "text": "Проводи меня за руку",
          "next": "c6.r3.hand.route",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "hand"
            }
          ]
        },
        {
          "id": "home",
          "text": "Давай к остановке. Был хороший вечер",
          "next": "c6.r3.finish.home",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "home"
            }
          ]
        }
      ]
    },
    "c6.r3.hand.route": {
      "id": "c6.r3.hand.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Moment",
              "equals": "hand"
            }
          ],
          "next": "c6.r3.hand.already"
        }
      ],
      "fallback": "c6.r3.hand.new"
    },
    "c6.r3.hand.already": {
      "id": "c6.r3.hand.already",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад чуть меняет направление, не выпуская твоей ладони."
        }
      ],
      "next": "c6.r3.finish.hand"
    },
    "c6.r3.hand.new": {
      "id": "c6.r3.hand.new",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "с удовольствием."
        },
        {
          "speaker": "narrator",
          "text": "Ты берёшь его за руку."
        }
      ],
      "next": "c6.r3.finish.hand"
    },
    "c6.r3.finish.lap": {
      "id": "c6.r3.finish.lap",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "даже спорить не буду."
        },
        {
          "speaker": "narrator",
          "text": "Вы поворачиваете к следующему фонарю."
        },
        {
          "speaker": "heroine",
          "text": "Завтра кот всё ещё будет в витрине."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. пусть пока присматривает за нашим маршрутом."
        }
      ],
      "next": "c6.r3.callback"
    },
    "c6.r3.finish.hand": {
      "id": "c6.r3.finish.hand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "следующий вечер я уже хочу предложить сам."
        },
        {
          "speaker": "heroine",
          "text": "Предлагай."
        },
        {
          "speaker": "vlad",
          "text": "сначала красиво доведу этот."
        }
      ],
      "next": "c6.r3.callback"
    },
    "c6.r3.finish.home": {
      "id": "c6.r3.finish.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "был. хочу повторить."
        },
        {
          "speaker": "heroine",
          "text": "Прогулку или угадывание?"
        },
        {
          "speaker": "vlad",
          "text": "тебя рядом. остальное придумаем."
        },
        {
          "speaker": "narrator",
          "text": "Вы идёте к остановке, продолжая разговор."
        }
      ],
      "next": "c6.r3.callback"
    },
    "c6.r3.callback": {
      "id": "c6.r3.callback",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Keepsake",
              "equals": "cat"
            }
          ],
          "next": "c6.r3.callback.cat"
        },
        {
          "all": [
            {
              "key": "c6Keepsake",
              "equals": "house"
            }
          ],
          "next": "c6.r3.callback.house"
        }
      ],
      "fallback": "c6.r3.callback.cup"
    },
    "c6.r3.callback.cat": {
      "id": "c6.r3.callback.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "кота пока не покупаю. вдруг ты передумаешь делить."
        }
      ],
      "next": "c6.r3.card"
    },
    "c6.r3.callback.house": {
      "id": "c6.r3.callback.house",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "домик я, кстати, запомнил."
        }
      ],
      "next": "c6.r3.card"
    },
    "c6.r3.callback.cup": {
      "id": "c6.r3.callback.cup",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "в следующий раз проверим, на месте ли твоя чашка."
        }
      ],
      "next": "c6.r3.card"
    },
    "c6.r3.card": {
      "id": "c6.r3.card",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Ending",
              "equals": "lap"
            }
          ],
          "next": "c6.r3.end.lap"
        },
        {
          "all": [
            {
              "key": "c6Ending",
              "equals": "hand"
            }
          ],
          "next": "c6.r3.end.hand"
        }
      ],
      "fallback": "c6.r3.end.home"
    },
    "c6.r3.end.hand": {
      "id": "c6.r3.end.hand",
      "kind": "end",
      "cardId": "c6.hand",
      "endingId": "c6.hand"
    },
    "c6.r3.end.lap": {
      "id": "c6.r3.end.lap",
      "kind": "end",
      "cardId": "c6.lap",
      "endingId": "c6.lap"
    },
    "c6.r3.end.home": {
      "id": "c6.r3.end.home",
      "kind": "end",
      "cardId": "c6.home",
      "endingId": "c6.home"
    },
    "c6.r3.lantern": {
      "id": "c6.r3.lantern",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Чуть дальше у воды вы находите скамью, на которую падает свет сразу от двух фонарей."
        },
        {
          "speaker": "vlad",
          "text": "смотри. это уже похоже на место, где можно сочинить очень убедительную историю."
        },
        {
          "speaker": "heroine",
          "text": "Про кого?"
        },
        {
          "speaker": "vlad",
          "text": "про человека, который каждый вечер приходит сюда с одним и тем же пакетом."
        },
        {
          "speaker": "heroine",
          "text": "Ты его видел?"
        },
        {
          "speaker": "vlad",
          "text": "нет. но пакет в моей версии уже есть."
        },
        {
          "speaker": "narrator",
          "text": "Влад останавливается у спинки скамьи, не торопя тебя садиться."
        },
        {
          "speaker": "heroine",
          "text": "Может, человек просто несёт домой продукты."
        },
        {
          "speaker": "vlad",
          "text": "вполне. только это история, где я быстро заканчиваю рассказ."
        },
        {
          "speaker": "heroine",
          "text": "А длинная версия какая?"
        },
        {
          "speaker": "vlad",
          "text": "он приносит корм очень важной утке. она выходит только к этому фонарю."
        },
        {
          "speaker": "heroine",
          "text": "У тебя опять кто-то важный."
        },
        {
          "speaker": "vlad",
          "text": "люблю уважительно относиться к незнакомым птицам."
        },
        {
          "speaker": "narrator",
          "text": "На воде действительно появляется небольшая рябь. Влад всматривается в отражения."
        },
        {
          "speaker": "vlad",
          "text": "сейчас было бы красиво, если бы утка вышла подтвердить."
        },
        {
          "speaker": "heroine",
          "text": "Она не обязана поддерживать твои истории."
        },
        {
          "speaker": "vlad",
          "text": "вот поэтому уважаю её ещё больше."
        },
        {
          "speaker": "narrator",
          "text": "Вы смотрите на воду. Из-под мостика выплывает обычная ветка."
        },
        {
          "speaker": "heroine",
          "text": "Вот твой свидетель."
        },
        {
          "speaker": "vlad",
          "text": "молчаливый, зато прибыл вовремя."
        },
        {
          "speaker": "heroine",
          "text": "Мне нравится, как ты выкручиваешься."
        },
        {
          "speaker": "vlad",
          "text": "я ещё даже не начал объяснять пакет."
        },
        {
          "speaker": "heroine",
          "text": "Может, лучше остановиться на ветке?"
        },
        {
          "speaker": "vlad",
          "text": "разумно. оставим истории пространство."
        },
        {
          "speaker": "narrator",
          "text": "Он отступает от скамьи и снова встаёт рядом."
        },
        {
          "speaker": "vlad",
          "text": "а ты любишь придумывать прошлое местам, в которых впервые оказалась?"
        },
        {
          "speaker": "heroine",
          "text": "Иногда хватает посмотреть, как здесь кто-то живёт."
        },
        {
          "speaker": "vlad",
          "text": "да. чужая чашка в окне иногда рассказывает больше красивой вывески."
        },
        {
          "speaker": "narrator",
          "text": "На противоположном берегу в одном из окон загорается свет."
        },
        {
          "speaker": "vlad",
          "text": "вот. кто-то тоже наконец добрался домой."
        }
      ],
      "next": "c6.r3.lantern.choice"
    },
    "c6.r3.lantern.choice": {
      "id": "c6.r3.lantern.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Какую историю оставим этому месту?",
      "choices": [
        {
          "id": "duck",
          "text": "Утка пусть остаётся. Мне нравится её характер",
          "next": "c6.r3.lantern.duck"
        },
        {
          "id": "ordinary",
          "text": "Мне нравится обычная версия. Кто-то идёт домой",
          "next": "c6.r3.lantern.ordinary"
        },
        {
          "id": "ours",
          "text": "Давай лучше оставим здесь свою историю",
          "next": "c6.r3.lantern.ours"
        }
      ]
    },
    "c6.r3.lantern.duck": {
      "id": "c6.r3.lantern.duck",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда в следующий раз проверим, на месте ли она."
        },
        {
          "speaker": "heroine",
          "text": "И принесём доказательства существования пакета."
        },
        {
          "speaker": "vlad",
          "text": "отлично. полноценная экспедиция, а я рассчитывал на прогулку."
        },
        {
          "speaker": "narrator",
          "text": "Вы ещё раз смотрите под мостик, но находите только отражения."
        },
        {
          "speaker": "heroine",
          "text": "Не пришла."
        },
        {
          "speaker": "vlad",
          "text": "значит, у неё сегодня другие планы."
        }
      ],
      "next": "c6.r3.aside"
    },
    "c6.r3.lantern.ordinary": {
      "id": "c6.r3.lantern.ordinary",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "мне тоже. особенно если его там ждут."
        },
        {
          "speaker": "heroine",
          "text": "Или он сам ждёт возможности наконец поставить чайник."
        },
        {
          "speaker": "vlad",
          "text": "тоже хорошая причина ускорить шаг."
        },
        {
          "speaker": "narrator",
          "text": "На том берегу свет появляется ещё в одном окне."
        },
        {
          "speaker": "heroine",
          "text": "Можно и без большого сюжета."
        },
        {
          "speaker": "vlad",
          "text": "да. иногда хочется просто знать, что вечер будет хороший."
        }
      ],
      "next": "c6.r3.aside"
    },
    "c6.r3.lantern.ours": {
      "id": "c6.r3.lantern.ours",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад перестаёт смотреть через реку и поворачивается к тебе."
        },
        {
          "speaker": "vlad",
          "text": "эта мне уже нравится больше."
        },
        {
          "speaker": "heroine",
          "text": "Мы пока ничего особенного не сделали."
        },
        {
          "speaker": "vlad",
          "text": "зато очень серьёзно обсудили ветку."
        },
        {
          "speaker": "heroine",
          "text": "Запоминающееся начало."
        },
        {
          "speaker": "vlad",
          "text": "и ещё есть время придумать продолжение."
        }
      ],
      "next": "c6.r3.aside"
    },
    "c6.r3.small.plans": {
      "id": "c6.r3.small.plans",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На другом берегу гаснет подсветка одной витрины. Река от этого кажется чуть шире."
        },
        {
          "speaker": "vlad",
          "text": "мне раньше было трудно оставить вечер свободным. казалось, его обязательно надо чем-то заполнить."
        },
        {
          "speaker": "heroine",
          "text": "И чем заполнял?"
        },
        {
          "speaker": "vlad",
          "text": "обычно планами, на которые потом не хватало самого вечера."
        },
        {
          "speaker": "heroine",
          "text": "Очень практично."
        },
        {
          "speaker": "vlad",
          "text": "зато список был красивый."
        },
        {
          "speaker": "narrator",
          "text": "Он усмехается и смотрит на дорожку впереди."
        },
        {
          "speaker": "vlad",
          "text": "сейчас чаще думаю, что можно просто выбрать одну вещь и нормально ею заняться."
        },
        {
          "speaker": "heroine",
          "text": "Например, долго обсуждать керамику?"
        },
        {
          "speaker": "vlad",
          "text": "вот. уже умею."
        },
        {
          "speaker": "heroine",
          "text": "А если вдруг окажется скучно?"
        },
        {
          "speaker": "vlad",
          "text": "поменяем занятие. это же не договор с городом."
        },
        {
          "speaker": "narrator",
          "text": "На дорожке становится свободнее. Вы обходите скамью и снова идёте рядом."
        },
        {
          "speaker": "heroine",
          "text": "Мне нравится, когда можно передумать по ходу."
        },
        {
          "speaker": "vlad",
          "text": "мне тоже. особенно если никто не делает вид, будто вся прогулка испорчена."
        },
        {
          "speaker": "heroine",
          "text": "Даже если я захочу повернуть обратно?"
        },
        {
          "speaker": "vlad",
          "text": "повернём. я успею рассказать ещё одну глупость по дороге."
        },
        {
          "speaker": "heroine",
          "text": "У тебя запас?"
        },
        {
          "speaker": "vlad",
          "text": "к сожалению, большой."
        },
        {
          "speaker": "narrator",
          "text": "Влад показывает на тропинку, по которой можно вернуться к развилке."
        },
        {
          "speaker": "vlad",
          "text": "вот отсюда уже близко. можно идти в любом темпе."
        },
        {
          "speaker": "heroine",
          "text": "Ты заметил, что перестал продавать свою прогулку?"
        },
        {
          "speaker": "vlad",
          "text": "заметил. кажется, мы её уже гуляем."
        },
        {
          "speaker": "narrator",
          "text": "Вы ненадолго останавливаетесь, пропуская прохожего с собакой."
        },
        {
          "speaker": "vlad",
          "text": "хорошее слово, кстати. “гуляем”. без необходимости куда-то успеть."
        },
        {
          "speaker": "heroine",
          "text": "Теперь главное — не превратить его в длинную речь."
        },
        {
          "speaker": "vlad",
          "text": "всё, понял. даю слово тебе."
        },
        {
          "speaker": "narrator",
          "text": "Он замолкает и ждёт, пока ты сама выберешь следующую тему."
        }
      ],
      "next": "c6.r3.small.plans.choice"
    },
    "c6.r3.small.plans.choice": {
      "id": "c6.r3.small.plans.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Что хочется ещё добавить в вечер?",
      "choices": [
        {
          "id": "warm",
          "text": "Что-нибудь тёплое по дороге",
          "next": "c6.r3.small.plans.warm"
        },
        {
          "id": "quiet",
          "text": "Пока ничего. Мне нравится эта прогулка",
          "next": "c6.r3.small.plans.quiet"
        },
        {
          "id": "next",
          "text": "Хочу, чтобы в следующий раз ты придумал маленький сюрприз",
          "next": "c6.r3.small.plans.next"
        }
      ]
    },
    "c6.r3.small.plans.warm": {
      "id": "c6.r3.small.plans.warm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "найдём. только в этот раз не буду угадывать за тебя."
        },
        {
          "speaker": "heroine",
          "text": "Можешь предложить."
        },
        {
          "speaker": "vlad",
          "text": "чай, какао или просто зайти погреться."
        },
        {
          "speaker": "heroine",
          "text": "Вот. Уже три хороших варианта."
        },
        {
          "speaker": "vlad",
          "text": "приятно иногда начинать с готового списка."
        }
      ],
      "next": "c6.r3.note"
    },
    "c6.r3.small.plans.quiet": {
      "id": "c6.r3.small.plans.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда оставим как есть."
        },
        {
          "speaker": "narrator",
          "text": "Он не ищет новую остановку и убирает телефон глубже в карман."
        },
        {
          "speaker": "heroine",
          "text": "Даже карту не проверишь?"
        },
        {
          "speaker": "vlad",
          "text": "мы рядом с рекой. с одной стороны точно не заблудимся."
        },
        {
          "speaker": "heroine",
          "text": "Убедительно."
        },
        {
          "speaker": "vlad",
          "text": "стараюсь обещать только то, что вижу."
        }
      ],
      "next": "c6.r3.note"
    },
    "c6.r3.small.plans.next": {
      "id": "c6.r3.small.plans.next",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "договорились. маленький — это важное условие, я запомнил."
        },
        {
          "speaker": "heroine",
          "text": "Без необходимости весь день к нему готовиться."
        },
        {
          "speaker": "vlad",
          "text": "и без торжественного вручения?"
        },
        {
          "speaker": "heroine",
          "text": "Желательно."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. просто появится ещё один хороший повод встретиться."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается, но не пытается сразу раскрыть будущий план."
        }
      ],
      "next": "c6.r3.note"
    }
  }
};
