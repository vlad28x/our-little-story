import type { Chapter } from '../../engine/types';

// Exact script: outputs/CHAPTER_06_SCRIPT.md. Keep dialogue and node IDs in sync.
export const chapter6:Chapter={
  "id": 6,
  "contentVersion": 6,
  "title": "Ещё пять минут",
  "entry": "c6.entry",
  "nodes": {
    "c6.entry": {
      "id": "c6.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вечерняя прогулка дошла до знакомой развилки. В одну сторону — к остановке, в другую — вдоль огней набережной."
        },
        {
          "speaker": "vlad",
          "text": "ну что. до этого места я ещё делал вид, что мы просто идём по дороге."
        },
        {
          "speaker": "heroine",
          "text": "А дальше?"
        },
        {
          "speaker": "vlad",
          "text": "дальше придётся признаться, что короткая дорога мне не очень нравится."
        }
      ],
      "next": "c6.past.route"
    },
    "c6.past.route": {
      "id": "c6.past.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "ending",
              "equals": "friendly"
            }
          ],
          "next": "c6.past.friendly"
        }
      ],
      "fallback": "c6.past.open"
    },
    "c6.past.friendly": {
      "id": "c6.past.friendly",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "мне нравятся наши прогулки. продолжим в удобном тебе темпе?"
        },
        {
          "speaker": "narrator",
          "text": "Он остаётся рядом, не сокращая расстояние за тебя."
        }
      ],
      "next": "c6.advisers"
    },
    "c6.past.open": {
      "id": "c6.past.open",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я бы ещё побыл с тобой. без большой программы на вечер."
        },
        {
          "speaker": "narrator",
          "text": "Он убирает телефон в карман. На развилке пока никто не поворачивает."
        }
      ],
      "next": "c6.advisers"
    },
    "c6.advisers": {
      "id": "c6.advisers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На полях истории появляются две подозрительно знакомые кудрявые головы. У одной — нимб. У другой — рожки."
        },
        {
          "speaker": "angel",
          "text": "мы здесь за маленькие хорошие идеи."
        },
        {
          "speaker": "devil",
          "text": "и за хорошие идеи, которые сначала выглядят подозрительно."
        },
        {
          "speaker": "angel",
          "text": "можешь взять советчика на этот вечер. или обойтись без нас."
        }
      ],
      "next": "c6.guide"
    },
    "c6.guide": {
      "id": "c6.guide",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "С кем пройдём этот вечер?",
      "choices": [
        {
          "id": "angel",
          "text": "Ангел: найдём минуту без спешки",
          "next": "c6.guide.angel",
          "effects": [
            {
              "kind": "set",
              "key": "c6Guide",
              "value": "angel"
            }
          ]
        },
        {
          "id": "devil",
          "text": "Дьяволёнок: сегодня маршрут мой",
          "next": "c6.guide.devil",
          "effects": [
            {
              "kind": "set",
              "key": "c6Guide",
              "value": "devil"
            }
          ]
        },
        {
          "id": "none",
          "text": "Я сама разберусь. Но можете остаться",
          "next": "c6.guide.none",
          "effects": [
            {
              "kind": "set",
              "key": "c6Guide",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c6.guide.angel": {
      "id": "c6.guide.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": "моя миссия: найдите место, где можно никуда не торопиться."
        },
        {
          "speaker": "angel",
          "text": "у воды сейчас хорошо. выбирай её одной из остановок, если захочешь."
        },
        {
          "speaker": "devil",
          "text": "ладно. звучит лучше, чем мой план с захватом власти."
        }
      ],
      "next": "c6.thought"
    },
    "c6.guide.devil": {
      "id": "c6.guide.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "миссия: сама выбери, куда вы пойдёте. две остановки — и он следует твоему плану."
        },
        {
          "speaker": "angel",
          "text": "это называется предложить прогулку."
        },
        {
          "speaker": "devil",
          "text": "не мешай мне красиво оформлять."
        }
      ],
      "next": "c6.thought"
    },
    "c6.guide.none": {
      "id": "c6.guide.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я сама разберусь. Но можете остаться."
        },
        {
          "speaker": "angel",
          "text": "договорились. никаких заданий."
        },
        {
          "speaker": "devil",
          "text": "буду профессионально стоять с загадочным видом."
        }
      ],
      "next": "c6.thought"
    },
    "c6.thought": {
      "id": "c6.thought",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Что тебе сейчас ближе?",
      "choices": [
        {
          "id": "linger",
          "text": "Не хочу, чтобы прогулка уже закончилась",
          "next": "c6.thought.linger",
          "effects": [
            {
              "kind": "set",
              "key": "c6Thought",
              "value": "linger"
            }
          ]
        },
        {
          "id": "tease",
          "text": "Интересно, насколько он уверен в своём плане",
          "next": "c6.thought.tease",
          "effects": [
            {
              "kind": "set",
              "key": "c6Thought",
              "value": "tease"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "Хочу просто спокойно пройтись рядом",
          "next": "c6.thought.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c6Thought",
              "value": "quiet"
            }
          ]
        }
      ]
    },
    "c6.thought.linger": {
      "id": "c6.thought.linger",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": "Не хочу расходиться прямо сейчас. Но как сказать — решу сама."
        }
      ],
      "next": "c6.voice"
    },
    "c6.thought.tease": {
      "id": "c6.thought.tease",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": "У него очень уверенный вид. Можно немного проверить эту уверенность."
        }
      ],
      "next": "c6.voice"
    },
    "c6.thought.quiet": {
      "id": "c6.thought.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": "Мне подходит тихий вечер. Не обязательно превращать его во что-то большее."
        }
      ],
      "next": "c6.voice"
    },
    "c6.voice": {
      "id": "c6.voice",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "А что ты скажешь?",
      "choices": [
        {
          "id": "stay",
          "text": "Тогда задержи меня ещё немного",
          "next": "c6.voice.stay",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "stay"
            },
            {
              "kind": "spark",
              "id": "c6.spark.voice"
            }
          ]
        },
        {
          "id": "tease",
          "text": "А длинную дорогу ты заранее подготовил?",
          "next": "c6.voice.tease",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "tease"
            },
            {
              "kind": "spark",
              "id": "c6.spark.voice"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "Давай пройдёмся. Только без большой программы",
          "next": "c6.voice.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "quiet"
            },
            {
              "kind": "spark",
              "id": "c6.spark.voice"
            }
          ]
        }
      ]
    },
    "c6.voice.stay": {
      "id": "c6.voice.stay",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Тогда задержи меня ещё немного."
        },
        {
          "speaker": "vlad",
          "text": "с удовольствием. только предупреждаю: у меня есть ещё аргументы."
        },
        {
          "speaker": "heroine",
          "text": "Начни с дороги."
        },
        {
          "speaker": "vlad",
          "text": "справедливо. остальное оставлю на потом."
        }
      ],
      "next": "c6.vlad.thought"
    },
    "c6.voice.tease": {
      "id": "c6.voice.tease",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "А длинную дорогу ты заранее подготовил?"
        },
        {
          "speaker": "vlad",
          "text": "нет. но я сейчас очень убедительно стою в её направлении."
        },
        {
          "speaker": "heroine",
          "text": "Это я заметила."
        },
        {
          "speaker": "vlad",
          "text": "значит, половина плана уже работает."
        }
      ],
      "next": "c6.vlad.thought"
    },
    "c6.voice.quiet": {
      "id": "c6.voice.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай пройдёмся. Только без большой программы."
        },
        {
          "speaker": "vlad",
          "text": "договорились. даже торжественное открытие прогулки отменю."
        },
        {
          "speaker": "narrator",
          "text": "Он подстраивает шаг под твой. Вы отходите от развилки к карте набережной."
        }
      ],
      "next": "c6.vlad.thought"
    },
    "c6.vlad.thought": {
      "id": "c6.vlad.thought",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad-thought",
          "text": "так. воду предложить можно. фонари тоже. главное — не перечислить ей весь город."
        },
        {
          "speaker": "narrator",
          "text": "Влад смотрит на карту с видом человека, который совершенно не выбирает самый длинный путь."
        }
      ],
      "next": "c6.map.intro"
    },
    "c6.map.intro": {
      "id": "c6.map.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "здесь есть вода, фонари и одна очень серьёзная витрина."
        },
        {
          "speaker": "heroine",
          "text": "Насколько серьёзная?"
        },
        {
          "speaker": "vlad",
          "text": "у неё кот из керамики в галстуке. ниже этой планки уже нельзя."
        },
        {
          "speaker": "vlad",
          "text": "выберешь две остановки? я пойду с тобой."
        }
      ],
      "next": "c6.map"
    },
    "c6.map": {
      "id": "c6.map",
      "kind": "minigame",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "game": "evening-route",
      "next": "c6.map.route"
    },
    "c6.map.route": {
      "id": "c6.map.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "route-mode",
              "equals": "skipped"
            }
          ],
          "next": "c6.map.skipped"
        }
      ],
      "fallback": "c6.first.route"
    },
    "c6.map.skipped": {
      "id": "c6.map.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай без карты. Просто пройдёмся."
        },
        {
          "speaker": "vlad",
          "text": "давай. отличный маршрут: ничего не надо запоминать."
        },
        {
          "speaker": "narrator",
          "text": "Вы идёте вдоль освещённой дорожки. Чуть дальше виден пешеходный переход."
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.first.route": {
      "id": "c6.first.route",
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
          "next": "c6.first.water"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "lights"
            }
          ],
          "next": "c6.first.lights"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "window"
            }
          ],
          "next": "c6.first.window"
        }
      ],
      "fallback": "c6.crossing"
    },
    "c6.first.water": {
      "id": "c6.first.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У парапета слышно воду. Отражения фонарей распадаются на короткие золотые полосы."
        },
        {
          "speaker": "vlad",
          "text": "вот здесь я обычно перестаю делать вид, что куда-то спешу."
        },
        {
          "speaker": "heroine",
          "text": "Сегодня можно официально не делать вид."
        },
        {
          "speaker": "narrator",
          "text": "Он кивает. Несколько мгновений вы смотрите на воду, не заполняя паузу словами."
        }
      ],
      "next": "c6.second.route"
    },
    "c6.first.lights": {
      "id": "c6.first.lights",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Под гирляндой один фонарик светит заметно ярче соседей."
        },
        {
          "speaker": "vlad",
          "text": "этот явно пришёл произвести впечатление."
        },
        {
          "speaker": "heroine",
          "text": "Знакомая стратегия."
        },
        {
          "speaker": "vlad",
          "text": "да. только я хотя бы не мигаю."
        }
      ],
      "next": "c6.second.route"
    },
    "c6.first.window": {
      "id": "c6.first.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В витрине сидит керамический кот в галстуке. Рядом табличка: «Перерыв»."
        },
        {
          "speaker": "heroine",
          "text": "У него всё получилось."
        },
        {
          "speaker": "vlad",
          "text": "должность есть. обязанности закончились. уважаю."
        },
        {
          "speaker": "heroine",
          "text": "А ты чего хочешь?"
        },
        {
          "speaker": "vlad",
          "text": "пока — ещё немного погулять с тобой. галстук подождёт."
        }
      ],
      "next": "c6.second.route"
    },
    "c6.second.route": {
      "id": "c6.second.route",
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
          "next": "c6.second.water"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "lights"
            }
          ],
          "next": "c6.second.lights"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "window"
            }
          ],
          "next": "c6.second.window"
        }
      ],
      "fallback": "c6.crossing"
    },
    "c6.second.water": {
      "id": "c6.second.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Второй остановкой становится парапет у воды. Здесь тише, чем на дорожке."
        },
        {
          "speaker": "vlad",
          "text": "хорошо ты выбрала. здесь даже мне хочется немного помолчать."
        },
        {
          "speaker": "heroine",
          "text": "Не буду мешать редкому событию."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается. Вы смотрите, как огни качаются на воде."
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.second.lights": {
      "id": "c6.second.lights",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Следом вы проходите под гирляндой. Тёплые огни цепляются за кудри Влада."
        },
        {
          "speaker": "heroine",
          "text": "Тебе идёт такое освещение."
        },
        {
          "speaker": "vlad",
          "text": "запомню. буду договариваться с фонарями перед каждой прогулкой."
        },
        {
          "speaker": "narrator",
          "text": "Он чуть поворачивается к тебе, и вы ещё немного задерживаетесь под светом."
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.second.window": {
      "id": "c6.second.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "За стеклом обнаруживается керамический кот в галстуке и его табличка «Перерыв»."
        },
        {
          "speaker": "vlad",
          "text": "вот. человек знает, когда пора остановиться."
        },
        {
          "speaker": "heroine",
          "text": "Это кот."
        },
        {
          "speaker": "vlad",
          "text": "тем более. а мы иногда усложняем."
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.mission.route": {
      "id": "c6.mission.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "angel"
            },
            {
              "kind": "route-includes",
              "stop": "water"
            }
          ],
          "next": "c6.mission.angel.hit"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "angel"
            }
          ],
          "next": "c6.mission.angel.miss"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "devil"
            },
            {
              "kind": "route-mode",
              "equals": "own"
            }
          ],
          "next": "c6.mission.devil.hit"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "devil"
            }
          ],
          "next": "c6.mission.devil.miss"
        }
      ],
      "fallback": "c6.mission.none"
    },
    "c6.mission.angel.hit": {
      "id": "c6.mission.angel.hit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": "вот. минута без спешки нашлась."
        },
        {
          "speaker": "devil",
          "text": "признаю. красиво организовано."
        }
      ],
      "next": "c6.crossing"
    },
    "c6.mission.angel.miss": {
      "id": "c6.mission.angel.miss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": "мой маршрут можно оставить на другой вечер."
        },
        {
          "speaker": "devil",
          "text": "у неё свой. это даже интереснее."
        }
      ],
      "next": "c6.crossing"
    },
    "c6.mission.devil.hit": {
      "id": "c6.mission.devil.hit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "две остановки по твоему плану. всё, руководство прогулкой сменилось."
        },
        {
          "speaker": "angel",
          "text": "и все довольны. удивительно удачный переворот."
        }
      ],
      "next": "c6.crossing"
    },
    "c6.mission.devil.miss": {
      "id": "c6.mission.devil.miss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "ладно, мой великий план сегодня без должности."
        },
        {
          "speaker": "angel",
          "text": "зато прогулка состоялась."
        }
      ],
      "next": "c6.crossing"
    },
    "c6.mission.none": {
      "id": "c6.mission.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "у меня был совет. но вы и без него справились."
        },
        {
          "speaker": "angel",
          "text": "сохрани. вдруг пригодится нам самим."
        }
      ],
      "next": "c6.crossing"
    },
    "c6.crossing": {
      "id": "c6.crossing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У небольшого перехода вы останавливаетесь на красный. Влад стоит рядом, его рука свободна."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, что мы всё-таки свернули."
        },
        {
          "speaker": "narrator",
          "text": "Он смотрит на тебя. До зелёного ещё есть время, но отвечать быстро не нужно."
        }
      ],
      "next": "c6.gesture"
    },
    "c6.gesture": {
      "id": "c6.gesture",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Как продолжим?",
      "choices": [
        {
          "id": "her",
          "text": "Протянуть ему руку: “Так удобнее не расходиться”",
          "next": "c6.gesture.her",
          "effects": [
            {
              "kind": "set",
              "key": "c6Contact",
              "value": "her"
            },
            {
              "kind": "spark",
              "id": "c6.spark.moment"
            }
          ]
        },
        {
          "id": "asked",
          "text": "Спросить: “Хочешь взять меня за руку?”",
          "next": "c6.gesture.asked",
          "effects": [
            {
              "kind": "set",
              "key": "c6Contact",
              "value": "asked"
            },
            {
              "kind": "spark",
              "id": "c6.spark.moment"
            }
          ]
        },
        {
          "id": "none",
          "text": "Улыбнуться: “Мне тоже. Пойдём дальше?”",
          "next": "c6.gesture.none",
          "effects": [
            {
              "kind": "set",
              "key": "c6Contact",
              "value": "none"
            },
            {
              "kind": "spark",
              "id": "c6.spark.moment"
            }
          ]
        }
      ]
    },
    "c6.gesture.her": {
      "id": "c6.gesture.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Так удобнее не расходиться."
        },
        {
          "speaker": "narrator",
          "text": "Ты протягиваешь руку. Влад принимает её и мягко сжимает пальцы."
        },
        {
          "speaker": "vlad",
          "text": "очень убедительный способ."
        },
        {
          "speaker": "narrator",
          "text": "Загорается зелёный. Вы переходите вместе."
        }
      ],
      "next": "c6.envelope.route"
    },
    "c6.gesture.asked": {
      "id": "c6.gesture.asked",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Хочешь взять меня за руку?"
        },
        {
          "speaker": "vlad",
          "text": "хочу."
        },
        {
          "speaker": "narrator",
          "text": "Он протягивает ладонь. Ты вкладываешь в неё свою, и вы идёте на зелёный."
        }
      ],
      "next": "c6.envelope.route"
    },
    "c6.gesture.none": {
      "id": "c6.gesture.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Мне тоже. Пойдём дальше?"
        },
        {
          "speaker": "vlad",
          "text": "пойдём. я ещё не всё тебе рассказал."
        },
        {
          "speaker": "narrator",
          "text": "Вы переходите рядом. Влад показывает на освещённую дорожку и продолжает рассказ."
        }
      ],
      "next": "c6.envelope.route"
    },
    "c6.envelope.route": {
      "id": "c6.envelope.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "all-sparks",
              "chapter": 6
            }
          ],
          "next": "c6.envelope.offer"
        }
      ],
      "fallback": "c6.note.intro"
    },
    "c6.envelope.offer": {
      "id": "c6.envelope.offer",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Три искры — маленький секрет вечера",
      "choices": [
        {
          "id": "open",
          "text": "Подсмотреть записку советчиков",
          "next": "c6.envelope.variant",
          "effects": [
            {
              "kind": "open-bonus"
            }
          ]
        },
        {
          "id": "later",
          "text": "Оставим немного интриги",
          "next": "c6.note.intro"
        }
      ]
    },
    "c6.envelope.variant": {
      "id": "c6.envelope.variant",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "angel"
            }
          ],
          "next": "c6.bonus.angel"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "devil"
            }
          ],
          "next": "c6.bonus.devil"
        }
      ],
      "fallback": "c6.bonus.none"
    },
    "c6.bonus.angel": {
      "id": "c6.bonus.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В конверте маленькая записка: «Иногда хороший план — не мешать хорошему вечеру»."
        },
        {
          "speaker": "devil",
          "text": "почему ты пишешь так, будто тебя будут печатать на кружках?"
        },
        {
          "speaker": "angel",
          "text": "потому что ты свои планы пишешь на салфетке из-под пончика."
        },
        {
          "speaker": "devil",
          "text": "рабочая документация."
        }
      ],
      "next": "c6.note.intro"
    },
    "c6.bonus.devil": {
      "id": "c6.bonus.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В конверте план: «Задержать её ещё на пять минут». Ниже приписка: «Потом придумать следующий план»."
        },
        {
          "speaker": "angel",
          "text": "это и есть твоя многоходовка?"
        },
        {
          "speaker": "devil",
          "text": "она работает уже второй поворот."
        },
        {
          "speaker": "angel",
          "text": "при условии, что она сама хочет гулять."
        },
        {
          "speaker": "devil",
          "text": "так это самая важная часть."
        }
      ],
      "next": "c6.note.intro"
    },
    "c6.bonus.none": {
      "id": "c6.bonus.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В конверте две записки. На первой: «Пусть выберет сама». На второй: «Я это и предлагал»."
        },
        {
          "speaker": "angel",
          "text": "вторую он дописал только что."
        },
        {
          "speaker": "devil",
          "text": "зато какой последовательный советчик."
        }
      ],
      "next": "c6.note.intro"
    },
    "c6.note.intro": {
      "id": "c6.note.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "пять минут у нас получились с хорошим запасом."
        },
        {
          "speaker": "heroine",
          "text": "У тебя своеобразные часы."
        },
        {
          "speaker": "vlad",
          "text": "только на приятных прогулках."
        }
      ],
      "next": "c6.note"
    },
    "c6.note": {
      "id": "c6.note",
      "kind": "note",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "questionId": "s2.q6",
      "prompt": "Что могло бы заставить тебя задержаться со мной ещё немного?",
      "maxCodePoints": 280,
      "next": "c6.note.after"
    },
    "c6.note.after": {
      "id": "c6.note.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Дорожка снова выводит к развилке. Теперь рядом знакомый фонарь и пустая скамейка."
        },
        {
          "speaker": "vlad",
          "text": "ну что. ещё немного или проводить тебя?"
        }
      ],
      "next": "c6.ending"
    },
    "c6.ending": {
      "id": "c6.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Ещё немного или проводить тебя?",
      "choices": [
        {
          "id": "hand",
          "text": "Хочу ещё пройтись с тобой за руку",
          "next": "c6.ending.hand.route",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "hand"
            }
          ]
        },
        {
          "id": "lap",
          "text": "Ещё один круг. Просто рядом",
          "next": "c6.ending.lap.route",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "lap"
            }
          ]
        },
        {
          "id": "home",
          "text": "На сегодня хватит. Проводишь меня?",
          "next": "c6.ending.home",
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
    "c6.ending.hand.route": {
      "id": "c6.ending.hand.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "her"
            }
          ],
          "next": "c6.ending.hand.already"
        },
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "asked"
            }
          ],
          "next": "c6.ending.hand.already"
        }
      ],
      "fallback": "c6.ending.hand.new"
    },
    "c6.ending.hand.already": {
      "id": "c6.ending.hand.already",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Хочу ещё пройтись с тобой за руку."
        },
        {
          "speaker": "vlad",
          "text": "я тоже. маршрут теперь можешь вообще не объяснять."
        },
        {
          "speaker": "narrator",
          "text": "Вы снова поворачиваете вдоль огней, не отпуская рук."
        },
        {
          "speaker": "vlad",
          "text": "если что, короткую дорогу я всё ещё знаю."
        },
        {
          "speaker": "heroine",
          "text": "Сохрани её до следующего раза."
        }
      ],
      "next": "c6.end.hand"
    },
    "c6.ending.hand.new": {
      "id": "c6.ending.hand.new",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Хочу ещё пройтись с тобой за руку."
        },
        {
          "speaker": "vlad",
          "text": "хочу. иди сюда."
        },
        {
          "speaker": "narrator",
          "text": "Он протягивает ладонь. Ты берёшь его за руку, и вы сворачиваете вдоль огней."
        },
        {
          "speaker": "heroine",
          "text": "Короткую дорогу сегодня не предлагай."
        },
        {
          "speaker": "vlad",
          "text": "уже убрал из программы."
        }
      ],
      "next": "c6.end.hand"
    },
    "c6.ending.lap.route": {
      "id": "c6.ending.lap.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "her"
            }
          ],
          "next": "c6.ending.lap.release"
        },
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "asked"
            }
          ],
          "next": "c6.ending.lap.release"
        }
      ],
      "fallback": "c6.ending.lap"
    },
    "c6.ending.lap.release": {
      "id": "c6.ending.lap.release",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты мягко отпускаешь его руку."
        }
      ],
      "next": "c6.ending.lap"
    },
    "c6.ending.lap": {
      "id": "c6.ending.lap",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Ещё один круг. Просто рядом."
        },
        {
          "speaker": "vlad",
          "text": "договорились. теперь расскажу, почему керамический кот выглядит успешнее меня."
        },
        {
          "speaker": "heroine",
          "text": "Потому что у него перерыв?"
        },
        {
          "speaker": "vlad",
          "text": "и никто не просит его объяснить, зачем он выбрал длинную дорогу."
        },
        {
          "speaker": "narrator",
          "text": "Вы идёте рядом. Вечер получает ещё один небольшой круг."
        }
      ],
      "next": "c6.end.lap"
    },
    "c6.ending.home": {
      "id": "c6.ending.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "На сегодня хватит. Проводишь меня?"
        },
        {
          "speaker": "vlad",
          "text": "конечно. теперь покажу дорогу без моих хитростей."
        },
        {
          "speaker": "narrator",
          "text": "Вы доходите до освещённой остановки. Перед прощанием Влад поворачивается к тебе."
        },
        {
          "speaker": "vlad",
          "text": "мне понравился этот вечер. спасибо, что свернула со мной."
        },
        {
          "speaker": "heroine",
          "text": "До следующего вечера."
        },
        {
          "speaker": "vlad",
          "text": "до встречи."
        }
      ],
      "next": "c6.end.home"
    },
    "c6.end.hand": {
      "id": "c6.end.hand",
      "kind": "end",
      "endingId": "c6.hand",
      "cardId": "c6.hand"
    },
    "c6.end.lap": {
      "id": "c6.end.lap",
      "kind": "end",
      "endingId": "c6.lap",
      "cardId": "c6.lap"
    },
    "c6.end.home": {
      "id": "c6.end.home",
      "kind": "end",
      "endingId": "c6.home",
      "cardId": "c6.home"
    }
  }
};
