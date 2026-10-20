import type { Chapter } from '../../engine/types';
// R3: outputs/SEASON_02_R3_SCRIPT_*.md
export const chapter8:Chapter={
  "id": 8,
  "contentVersion": 12,
  "scriptRevision": 3,
  "title": "На чай. Конечно",
  "entry": "c8.r3.entry",
  "nodes": {
    "c8.r3.entry": {
      "id": "c8.r3.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В вашей истории появляется сообщение Влада."
        },
        {
          "speaker": "vlad",
          "text": "приходи на чай. десерт уже есть, убедительный повод тоже."
        },
        {
          "speaker": "heroine",
          "text": "Какой?"
        },
        {
          "speaker": "vlad",
          "text": "хочу провести с тобой вечер. решил не усложнять."
        },
        {
          "speaker": "heroine",
          "text": "А десерт тогда зачем?"
        },
        {
          "speaker": "vlad",
          "text": "чтобы ты не решила, что я совсем не подготовился."
        }
      ],
      "next": "c8.r3.place"
    },
    "c8.r3.place": {
      "id": "c8.r3.place",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Где встретимся?",
      "choices": [
        {
          "id": "home",
          "text": "У тебя дома",
          "next": "c8.r3.arrival.home",
          "effects": [
            {
              "kind": "set",
              "key": "c8Place",
              "value": "home"
            },
            {
              "kind": "set",
              "key": "c8Cheek",
              "value": "no"
            },
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ]
        },
        {
          "id": "cafe",
          "text": "Давай в «Паузе»",
          "next": "c8.r3.arrival.cafe",
          "effects": [
            {
              "kind": "set",
              "key": "c8Place",
              "value": "cafe"
            },
            {
              "kind": "set",
              "key": "c8Cheek",
              "value": "no"
            },
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ]
        }
      ]
    },
    "c8.r3.arrival.home": {
      "id": "c8.r3.arrival.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад открывает дверь и отходит, освобождая проход. На кухне свет, на столе две чашки."
        },
        {
          "speaker": "vlad",
          "text": "проходи. я уже успел переставить всё три раза."
        },
        {
          "speaker": "heroine",
          "text": "Идеально расставил?"
        },
        {
          "speaker": "vlad",
          "text": "нет. просто решил, что четвёртый раз будет подозрительно."
        },
        {
          "speaker": "narrator",
          "text": "Он отодвигает стул, кладёт на стол ложки и только потом замечает, что одна осталась у него в руке."
        },
        {
          "speaker": "heroine",
          "text": "Для проверки?"
        },
        {
          "speaker": "vlad",
          "text": "для загадочности. не сработало."
        }
      ],
      "next": "c8.r3.guess.intro"
    },
    "c8.r3.arrival.cafe": {
      "id": "c8.r3.arrival.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ждёт за столиком у окна. Вторую чашку ещё не принесли."
        },
        {
          "speaker": "vlad",
          "text": "я удержался и не заказал за тебя."
        },
        {
          "speaker": "heroine",
          "text": "Тяжело было?"
        },
        {
          "speaker": "vlad",
          "text": "с чаем справился. на десерты смотреть нельзя — сразу появляются идеи."
        },
        {
          "speaker": "narrator",
          "text": "Он разворачивает к тебе меню."
        },
        {
          "speaker": "vlad",
          "text": "давай выберем вместе. мне нравится этот момент до первой ложки."
        }
      ],
      "next": "c8.r3.guess.intro"
    },
    "c8.r3.guess.intro": {
      "id": "c8.r3.guess.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "сначала маленькое пари. какой вкус я сейчас выберу?"
        },
        {
          "speaker": "heroine",
          "text": "Если угадаю?"
        },
        {
          "speaker": "vlad",
          "text": "признаю, что ты меня раскусила. торжественно, но недолго."
        }
      ],
      "next": "c8.r3.guess"
    },
    "c8.r3.guess": {
      "id": "c8.r3.guess",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что он выберет?",
      "choices": [
        {
          "id": "chocolate",
          "text": "Что-нибудь шоколадное",
          "next": "c8.r3.guess.chocolate"
        },
        {
          "id": "berry",
          "text": "Ягоды",
          "next": "c8.r3.guess.berry"
        },
        {
          "id": "simple",
          "text": "Самый простой, к чаю",
          "next": "c8.r3.guess.simple"
        }
      ]
    },
    "c8.r3.guess.chocolate": {
      "id": "c8.r3.guess.chocolate",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "да. удивлённо смотреть уже поздно?"
        },
        {
          "speaker": "heroine",
          "text": "Уже."
        },
        {
          "speaker": "vlad",
          "text": "ладно. раскусила."
        },
        {
          "speaker": "narrator",
          "text": "Он показывает на шоколадный вариант и улыбается."
        }
      ],
      "next": "c8.r3.dessert.intro"
    },
    "c8.r3.guess.berry": {
      "id": "c8.r3.guess.berry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я собирался выбрать шоколад. но твой ответ звучал так уверенно, что я задумался."
        },
        {
          "speaker": "heroine",
          "text": "Не меняй показания."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. шоколад. ягоды попробую в другой раз."
        }
      ],
      "next": "c8.r3.dessert.intro"
    },
    "c8.r3.guess.simple": {
      "id": "c8.r3.guess.simple",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "красивое мнение обо мне. но я за шоколад."
        },
        {
          "speaker": "heroine",
          "text": "Простой тоже бывает вкусный."
        },
        {
          "speaker": "vlad",
          "text": "согласен. сегодня мне просто хочется шоколада, и я даже не буду придумывать умную причину."
        }
      ],
      "next": "c8.r3.dessert.intro"
    },
    "c8.r3.dessert.intro": {
      "id": "c8.r3.dessert.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад возвращает выбор тебе."
        },
        {
          "speaker": "vlad",
          "text": "теперь собираем то, что хочется тебе. моё угадывание на состав не влияет."
        }
      ],
      "next": "c8.r3.dessert"
    },
    "c8.r3.dessert": {
      "id": "c8.r3.dessert",
      "kind": "minigame",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "game": "dessert",
      "next": "c8.r3.dessert.route"
    },
    "c8.r3.dessert.route": {
      "id": "c8.r3.dessert.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "dessert-mode",
              "equals": "completed"
            }
          ],
          "next": "c8.r3.dessert.own"
        },
        {
          "all": [
            {
              "kind": "dessert-mode",
              "equals": "shared"
            }
          ],
          "next": "c8.r3.dessert.shared"
        }
      ],
      "fallback": "c8.r3.dessert.skip"
    },
    "c8.r3.dessert.own": {
      "id": "c8.r3.dessert.own",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты поворачиваешь к Владу готовый десерт. Он сначала смотрит на него, потом на тебя."
        },
        {
          "speaker": "vlad",
          "text": "ты так довольна собой, что я засмотрелся."
        },
        {
          "speaker": "heroine",
          "text": "На десерт?"
        },
        {
          "speaker": "vlad",
          "text": "ты прекрасно поняла."
        }
      ],
      "next": "c8.r3.word"
    },
    "c8.r3.dessert.shared": {
      "id": "c8.r3.dessert.shared",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы заканчиваете украшение вместе. Влад подвигает к тебе тарелку."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, как ты увлекаешься."
        },
        {
          "speaker": "heroine",
          "text": "Смотри, ещё решу, что ты меня хвалишь."
        },
        {
          "speaker": "vlad",
          "text": "я вообще-то и хвалю."
        }
      ],
      "next": "c8.r3.word"
    },
    "c8.r3.dessert.skip": {
      "id": "c8.r3.dessert.skip",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы оставляете десерты как есть и убираете лишние пиалы."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. теперь можно заняться главным."
        },
        {
          "speaker": "heroine",
          "text": "Десертом?"
        },
        {
          "speaker": "vlad",
          "text": "разговором с тобой. но ложку я уже взял."
        }
      ],
      "next": "c8.r3.word"
    },
    "c8.r3.word": {
      "id": "c8.r3.word",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как назовём этот вечер?",
      "choices": [
        {
          "id": "minute",
          "text": "«Ещё минутку»",
          "next": "c8.r3.word.after",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "minute"
            }
          ]
        },
        {
          "id": "slow",
          "text": "«Без спешки»",
          "next": "c8.r3.word.after",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "slow"
            }
          ]
        },
        {
          "id": "taks",
          "text": "«Такс»",
          "next": "c8.r3.word.after",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "taks"
            }
          ]
        },
        {
          "id": "custom",
          "text": "Придумать своё слово",
          "next": "c8.r3.word.custom"
        },
        {
          "id": "none",
          "text": "Оставим без названия",
          "next": "c8.r3.word.after",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c8.r3.word.custom": {
      "id": "c8.r3.word.custom",
      "kind": "label",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "labelId": "s2.word8",
      "maxCodePoints": 24,
      "next": "c8.r3.word.after"
    },
    "c8.r3.word.after": {
      "id": "c8.r3.word.after",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Word",
              "equals": "none"
            }
          ],
          "next": "c8.r3.word.plain"
        }
      ],
      "fallback": "c8.r3.word.named"
    },
    "c8.r3.word.plain": {
      "id": "c8.r3.word.plain",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "можно просто побыть в этом вечере."
        },
        {
          "speaker": "narrator",
          "text": "Вы убираете пустой ярлычок и устраиваетесь с чаем."
        }
      ],
      "next": "c8.r3.small.route"
    },
    "c8.r3.word.named": {
      "id": "c8.r3.word.named",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "мне нравится, когда у вечера есть твоя идея."
        },
        {
          "speaker": "narrator",
          "text": "Вы устраиваетесь с чаем. На маленьком ярлычке остаётся выбранное название."
        }
      ],
      "next": "c8.r3.small.route"
    },
    "c8.r3.small.route": {
      "id": "c8.r3.small.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            }
          ],
          "next": "c8.r3.small.home"
        }
      ],
      "fallback": "c8.r3.small.cafe"
    },
    "c8.r3.small.home": {
      "id": "c8.r3.small.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Несколько минут вы действительно занимаетесь чаем и десертом. Влад отодвигает телефон экраном вниз."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, когда вечер начинается вот так."
        },
        {
          "speaker": "heroine",
          "text": "С десерта?"
        },
        {
          "speaker": "vlad",
          "text": "с того, что никуда не надо бежать. десерт тоже помогает."
        },
        {
          "speaker": "heroine",
          "text": "А три перестановки помогли?"
        },
        {
          "speaker": "vlad",
          "text": "надеюсь. теперь хотя бы знаю, где ложки."
        },
        {
          "speaker": "narrator",
          "text": "На спинке соседнего стула лежит худи. Влад замечает, что рукав почти касается пола, и поднимает его."
        },
        {
          "speaker": "vlad",
          "text": "это моё любимое место для вещей, которые я якобы сейчас уберу."
        },
        {
          "speaker": "heroine",
          "text": "У него уже постоянная прописка?"
        },
        {
          "speaker": "vlad",
          "text": "не подсказывай. ещё начнёт получать почту."
        }
      ],
      "next": "c8.r3.small.choice"
    },
    "c8.r3.small.cafe": {
      "id": "c8.r3.small.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Несколько минут вы действительно занимаетесь чаем. Влад отодвигает телефон экраном вниз."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, когда вечер начинается вот так."
        },
        {
          "speaker": "heroine",
          "text": "С десерта?"
        },
        {
          "speaker": "vlad",
          "text": "с того, что никуда не надо бежать. десерт тоже помогает."
        },
        {
          "speaker": "heroine",
          "text": "Столик ты всё-таки выбирал долго?"
        },
        {
          "speaker": "vlad",
          "text": "да. окно победило с большим отрывом."
        },
        {
          "speaker": "narrator",
          "text": "Влад складывает салфетку под край блюдца, которое слегка качается."
        },
        {
          "speaker": "vlad",
          "text": "вот. теперь оно не будет участвовать в разговоре."
        },
        {
          "speaker": "heroine",
          "text": "А могло сказать что-нибудь интересное."
        },
        {
          "speaker": "vlad",
          "text": "тогда позднее дадим ему слово."
        }
      ],
      "next": "c8.r3.small.choice"
    },
    "c8.r3.small.choice": {
      "id": "c8.r3.small.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "О чём заговоришь?",
      "choices": [
        {
          "id": "habit",
          "text": "А какая у тебя самая смешная домашняя привычка?",
          "next": "c8.r3.small.habit"
        },
        {
          "id": "chair",
          "text": "Я бы тоже не всё сразу убирала",
          "next": "c8.r3.small.chair"
        },
        {
          "id": "tea",
          "text": "Расскажи лучше, как ты выбирал этот чай",
          "next": "c8.r3.small.tea"
        }
      ]
    },
    "c8.r3.small.habit": {
      "id": "c8.r3.small.habit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "могу поставить чайник и вспомнить о нём, когда уже пора ставить заново."
        },
        {
          "speaker": "heroine",
          "text": "Значит, чай всё-таки не твоя главная специальность."
        },
        {
          "speaker": "vlad",
          "text": "зато я настойчивый."
        },
        {
          "speaker": "heroine",
          "text": "Сегодня получилось с первого раза."
        },
        {
          "speaker": "vlad",
          "text": "с хорошей компанией проще следить за процессом."
        }
      ],
      "next": "c8.r3.aside"
    },
    "c8.r3.small.chair": {
      "id": "c8.r3.small.chair",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Иногда вещь на стуле очень к месту."
        },
        {
          "speaker": "vlad",
          "text": "да. главное — чтобы на стуле ещё помещался человек."
        },
        {
          "speaker": "heroine",
          "text": "У тебя помещается?"
        },
        {
          "speaker": "vlad",
          "text": "сегодня специально проверил."
        }
      ],
      "next": "c8.r3.aside"
    },
    "c8.r3.small.tea": {
      "id": "c8.r3.small.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "хотел выбрать что-нибудь необычное, а потом вспомнил, что хороший чай не обязан быть загадкой."
        },
        {
          "speaker": "heroine",
          "text": "И что победило?"
        },
        {
          "speaker": "vlad",
          "text": "тот, который я сам люблю пить."
        },
        {
          "speaker": "heroine",
          "text": "Разумно."
        },
        {
          "speaker": "vlad",
          "text": "иногда получается."
        }
      ],
      "next": "c8.r3.aside"
    },
    "c8.r3.aside": {
      "id": "c8.r3.aside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "Так. Ложки убрал, теперь явно что-то задумал."
        },
        {
          "speaker": "angel",
          "text": "Дадим ему самому предложить."
        }
      ],
      "next": "c8.r3.dance.route",
      "presentation": "adviser-aside"
    },
    "c8.r3.dance.route": {
      "id": "c8.r3.dance.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            }
          ],
          "next": "c8.r3.dance.home"
        }
      ],
      "fallback": "c8.r3.dance.cafe"
    },
    "c8.r3.dance.home": {
      "id": "c8.r3.dance.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Чашки постепенно пустеют. Влад встаёт и убирает их ближе к середине стола."
        },
        {
          "speaker": "vlad",
          "text": "а теперь у меня совсем несерьёзная идея."
        },
        {
          "speaker": "heroine",
          "text": "Уже интересно."
        },
        {
          "speaker": "vlad",
          "text": "потанцуем? места немного, зато свидетелей ещё меньше."
        }
      ],
      "next": "c8.r3.dance"
    },
    "c8.r3.dance.cafe": {
      "id": "c8.r3.dance.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Возле вашего столика есть свободное место; проход к соседним столам остаётся открыт."
        },
        {
          "speaker": "vlad",
          "text": "один маленький танец у окна?"
        },
        {
          "speaker": "heroine",
          "text": "Здесь?"
        },
        {
          "speaker": "vlad",
          "text": "если хочется. можем ограничиться парой смешных шагов."
        }
      ],
      "next": "c8.r3.dance"
    },
    "c8.r3.dance": {
      "id": "c8.r3.dance",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Попробуем?",
      "choices": [
        {
          "id": "close",
          "text": "Давай ближе",
          "next": "c8.r3.dance.close",
          "effects": [
            {
              "kind": "set",
              "key": "c8Dance",
              "value": "close"
            }
          ]
        },
        {
          "id": "lead",
          "text": "Сегодня я поведу",
          "next": "c8.r3.dance.lead",
          "effects": [
            {
              "kind": "set",
              "key": "c8Dance",
              "value": "lead"
            }
          ]
        },
        {
          "id": "playful",
          "text": "Покажи сначала свой самый нелепый шаг",
          "next": "c8.r3.dance.playful",
          "effects": [
            {
              "kind": "set",
              "key": "c8Dance",
              "value": "playful"
            }
          ]
        }
      ]
    },
    "c8.r3.dance.close": {
      "id": "c8.r3.dance.close",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты принимаешь его руку; Влад кладёт другую на твою талию. Вы начинаете с очень небольшого шага."
        },
        {
          "speaker": "vlad",
          "text": "я буду делать вид, что всё так и задумано."
        },
        {
          "speaker": "heroine",
          "text": "Пока получается."
        },
        {
          "speaker": "vlad",
          "text": "не говори слишком уверенно, я расслаблюсь."
        }
      ],
      "next": "c8.r3.dance.after"
    },
    "c8.r3.dance.lead": {
      "id": "c8.r3.dance.lead",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Дай руку. Сегодня я поведу."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится этот план."
        },
        {
          "speaker": "narrator",
          "text": "Ты задаёшь первый шаг, Влад следует за тобой."
        },
        {
          "speaker": "heroine",
          "text": "Только не спорь."
        },
        {
          "speaker": "vlad",
          "text": "сейчас — даже не собирался."
        }
      ],
      "next": "c8.r3.dance.after"
    },
    "c8.r3.dance.playful": {
      "id": "c8.r3.dance.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад делает нарочито серьёзное лицо и пробует маленький боковой шаг. Ты отвечаешь своим. Между вами остаётся расстояние."
        },
        {
          "speaker": "vlad",
          "text": "так. это уже наш стиль."
        },
        {
          "speaker": "heroine",
          "text": "Лучше пока никому не показывать."
        },
        {
          "speaker": "vlad",
          "text": "согласен. пусть останется редким."
        }
      ],
      "next": "c8.r3.dance.after"
    },
    "c8.r3.dance.after": {
      "id": "c8.r3.dance.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Первый неловкий поворот остаётся позади. Теперь Влад меньше смотрит себе под ноги."
        },
        {
          "speaker": "vlad",
          "text": "знаешь, мне даже нравится, что мы не очень умеем."
        },
        {
          "speaker": "heroine",
          "text": "Удобно придумал."
        },
        {
          "speaker": "vlad",
          "text": "зато честно."
        }
      ],
      "next": "c8.r3.gesture"
    },
    "c8.r3.gesture": {
      "id": "c8.r3.gesture",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что сделаешь теперь?",
      "choices": [
        {
          "id": "curls",
          "text": "Можно поправлю тебе кудри?",
          "next": "c8.r3.gesture.curls",
          "effects": [
            {
              "kind": "set",
              "key": "c8FirstGesture",
              "value": "curls"
            }
          ]
        },
        {
          "id": "shoulder",
          "text": "Хочу положить голову тебе на плечо",
          "next": "c8.r3.gesture.shoulder",
          "effects": [
            {
              "kind": "set",
              "key": "c8FirstGesture",
              "value": "shoulder"
            }
          ]
        },
        {
          "id": "playful",
          "text": "Давай попробуем ещё один смешной поворот",
          "next": "c8.r3.gesture.playful",
          "effects": [
            {
              "kind": "set",
              "key": "c8FirstGesture",
              "value": "playful"
            }
          ]
        }
      ]
    },
    "c8.r3.gesture.curls": {
      "id": "c8.r3.gesture.curls",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "можно. только я за их дальнейшее поведение не отвечаю."
        },
        {
          "speaker": "narrator",
          "text": "Влад наклоняет голову. Ты поправляешь выбившуюся прядь; он смотрит на тебя, стараясь не двигаться."
        },
        {
          "speaker": "heroine",
          "text": "Теперь лучше."
        },
        {
          "speaker": "vlad",
          "text": "я бы поверил тебе и без проверки."
        }
      ],
      "next": "c8.r3.kiss.offer"
    },
    "c8.r3.gesture.shoulder": {
      "id": "c8.r3.gesture.shoulder",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "иди ближе."
        },
        {
          "speaker": "narrator",
          "text": "Ты кладёшь голову ему на плечо. Влад обнимает тебя, и шаги становятся почти незаметными."
        },
        {
          "speaker": "vlad",
          "text": "можно никуда не поворачивать. мне так хорошо."
        },
        {
          "speaker": "heroine",
          "text": "Наконец-то танец, в котором трудно ошибиться."
        },
        {
          "speaker": "vlad",
          "text": "мой любимый."
        }
      ],
      "next": "c8.r3.kiss.offer"
    },
    "c8.r3.gesture.playful": {
      "id": "c8.r3.gesture.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы пробуете повернуться одновременно и оба останавливаетесь, чтобы не столкнуться."
        },
        {
          "speaker": "heroine",
          "text": "Красиво почти получилось."
        },
        {
          "speaker": "vlad",
          "text": "это и было самое интересное место."
        },
        {
          "speaker": "narrator",
          "text": "Влад смеётся и предлагает повторить, теперь медленнее. Вы заканчиваете поворот и возвращаетесь к столу."
        },
        {
          "speaker": "vlad",
          "text": "заслужили чай. или хочешь ещё один заход?"
        }
      ],
      "next": "c8.r3.playful.continue"
    },
    "c8.r3.kiss.offer": {
      "id": "c8.r3.kiss.offer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад чуть отстраняется, чтобы посмотреть на тебя."
        },
        {
          "speaker": "vlad",
          "text": "я хочу тебя поцеловать. можно?"
        }
      ],
      "next": "c8.r3.kiss.answer"
    },
    "c8.r3.kiss.answer": {
      "id": "c8.r3.kiss.answer",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как ответишь?",
      "choices": [
        {
          "id": "yes",
          "text": "Да",
          "next": "c8.r3.kiss.yes",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "yes"
            }
          ]
        },
        {
          "id": "cheek",
          "text": "Сначала в щёку",
          "next": "c8.r3.kiss.cheek",
          "effects": [
            {
              "kind": "set",
              "key": "c8Cheek",
              "value": "yes"
            }
          ]
        },
        {
          "id": "dance",
          "text": "Давай пока ещё потанцуем",
          "next": "c8.r3.kiss.dance"
        }
      ]
    },
    "c8.r3.kiss.yes": {
      "id": "c8.r3.kiss.yes",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты отвечаешь, и Влад коротко целует тебя в губы."
        },
        {
          "speaker": "vlad",
          "text": "хорошо, что спросил."
        },
        {
          "speaker": "heroine",
          "text": "Хорошо, что решился."
        }
      ],
      "next": "c8.r3.tea.return"
    },
    "c8.r3.kiss.cheek": {
      "id": "c8.r3.kiss.cheek",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад целует тебя в щёку и улыбается."
        },
        {
          "speaker": "vlad",
          "text": "с удовольствием."
        }
      ],
      "next": "c8.r3.tea.return"
    },
    "c8.r3.kiss.dance": {
      "id": "c8.r3.kiss.dance",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай."
        },
        {
          "speaker": "narrator",
          "text": "Он возвращается к спокойному шагу и не повторяет вопрос."
        }
      ],
      "next": "c8.r3.tea.return"
    },
    "c8.r3.playful.continue": {
      "id": "c8.r3.playful.continue",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Чай или ещё один заход?",
      "choices": [
        {
          "id": "tea",
          "text": "Чай. Надо обсудить нашу технику",
          "next": "c8.r3.playful.tea"
        },
        {
          "id": "hand",
          "text": "Ещё один. Теперь дай руку",
          "next": "c8.r3.playful.hand"
        },
        {
          "id": "kiss",
          "text": "Подойди. Я хочу тебя поцеловать",
          "next": "c8.r3.playful.kiss",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "yes"
            }
          ]
        }
      ]
    },
    "c8.r3.playful.tea": {
      "id": "c8.r3.playful.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "у меня уже есть несколько оправданий."
        },
        {
          "speaker": "heroine",
          "text": "С удовольствием послушаю."
        }
      ],
      "next": "c8.r3.tea.return"
    },
    "c8.r3.playful.hand": {
      "id": "c8.r3.playful.hand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты принимаешь его руку. На этот раз вы проходите маленький круг без остановки."
        },
        {
          "speaker": "vlad",
          "text": "всё, теперь опасно верить в свои силы."
        }
      ],
      "next": "c8.r3.tea.return"
    },
    "c8.r3.playful.kiss": {
      "id": "c8.r3.playful.kiss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "с удовольствием."
        },
        {
          "speaker": "narrator",
          "text": "Ты подходишь и коротко целуешь его в губы."
        },
        {
          "speaker": "vlad",
          "text": "вот к этому повороту я был не готов."
        }
      ],
      "next": "c8.r3.tea.return"
    },
    "c8.r3.tea.return": {
      "id": "c8.r3.tea.return",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы снова садитесь к столу. Чай остыл ровно настолько, чтобы не приходилось ждать перед глотком."
        },
        {
          "speaker": "vlad",
          "text": "хорошо мы “просто попили чай”."
        },
        {
          "speaker": "heroine",
          "text": "Ты сам предложил танец."
        },
        {
          "speaker": "vlad",
          "text": "и очень доволен собой. даже с учётом поворота."
        }
      ],
      "next": "c8.r3.hoodie.route"
    },
    "c8.r3.hoodie.route": {
      "id": "c8.r3.hoodie.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            }
          ],
          "next": "c8.r3.hoodie.offer"
        }
      ],
      "fallback": "c8.r3.cafe.refill"
    },
    "c8.r3.hoodie.offer": {
      "id": "c8.r3.hoodie.offer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "если хочется, можешь накинуть худи. и забрать до следующего раза тоже можно."
        },
        {
          "speaker": "heroine",
          "text": "А как же стул?"
        },
        {
          "speaker": "vlad",
          "text": "переживёт разлуку."
        }
      ],
      "next": "c8.r3.hoodie"
    },
    "c8.r3.hoodie": {
      "id": "c8.r3.hoodie",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что сделаешь с худи?",
      "choices": [
        {
          "id": "borrow",
          "text": "Накинуть: «Можно забрать до следующей встречи?»",
          "next": "c8.r3.hoodie.borrow",
          "effects": [
            {
              "kind": "set",
              "key": "c8Hoodie",
              "value": "borrowed"
            }
          ]
        },
        {
          "id": "evening",
          "text": "Накинуть на этот вечер, потом вернуть",
          "next": "c8.r3.hoodie.evening",
          "effects": [
            {
              "kind": "set",
              "key": "c8Hoodie",
              "value": "evening"
            }
          ]
        },
        {
          "id": "none",
          "text": "Мне и так хорошо. Но спасибо",
          "next": "c8.r3.hoodie.none",
          "effects": [
            {
              "kind": "set",
              "key": "c8Hoodie",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c8.r3.hoodie.borrow": {
      "id": "c8.r3.hoodie.borrow",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты накидываешь худи и расправляешь длинные рукава."
        },
        {
          "speaker": "heroine",
          "text": "Можно забрать до следующей встречи?"
        },
        {
          "speaker": "vlad",
          "text": "худи забирай. меня тоже иногда приглашай."
        },
        {
          "speaker": "heroine",
          "text": "А ты сам придёшь?"
        },
        {
          "speaker": "vlad",
          "text": "позови. с удовольствием."
        }
      ],
      "next": "c8.r3.ordinary"
    },
    "c8.r3.hoodie.evening": {
      "id": "c8.r3.hoodie.evening",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты накидываешь худи. Один рукав оказывается длиннее, чем нужно; ты подворачиваешь край."
        },
        {
          "speaker": "heroine",
          "text": "На вечер одолжу. Потом верну."
        },
        {
          "speaker": "vlad",
          "text": "конечно. если мешает рукав — чашку пока подержу."
        },
        {
          "speaker": "narrator",
          "text": "Он ждёт, пока ты устроишься, и возвращает тебе чай."
        }
      ],
      "next": "c8.r3.ordinary"
    },
    "c8.r3.hoodie.none": {
      "id": "c8.r3.hoodie.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Мне и так хорошо. Но спасибо."
        },
        {
          "speaker": "vlad",
          "text": "тогда просто чай."
        },
        {
          "speaker": "narrator",
          "text": "Влад ставит чашки на стол. Худи остаётся на стуле, разговор продолжается."
        }
      ],
      "next": "c8.r3.ordinary"
    },
    "c8.r3.cafe.refill": {
      "id": "c8.r3.cafe.refill",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Приносят чайник с горячей водой. Влад пододвигает его ближе к себе."
        },
        {
          "speaker": "vlad",
          "text": "подлить или пока хватит?"
        }
      ],
      "next": "c8.r3.cafe.choice"
    },
    "c8.r3.cafe.choice": {
      "id": "c8.r3.cafe.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что тебе сейчас хочется?",
      "choices": [
        {
          "id": "tea",
          "text": "Ещё немного",
          "next": "c8.r3.cafe.tea"
        },
        {
          "id": "water",
          "text": "Давай лучше воды",
          "next": "c8.r3.cafe.water"
        },
        {
          "id": "sit",
          "text": "Пока хватит, посидим",
          "next": "c8.r3.cafe.sit"
        }
      ]
    },
    "c8.r3.cafe.tea": {
      "id": "c8.r3.cafe.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Он наполняет чашку и возвращает чайник на подставку."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь у вечера законный повод продлиться."
        }
      ],
      "next": "c8.r3.ordinary"
    },
    "c8.r3.cafe.water": {
      "id": "c8.r3.cafe.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "хорошо."
        },
        {
          "speaker": "narrator",
          "text": "Влад просит воды; разговор продолжается, пока вы ждёте."
        }
      ],
      "next": "c8.r3.ordinary"
    },
    "c8.r3.cafe.sit": {
      "id": "c8.r3.cafe.sit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда посидим."
        },
        {
          "speaker": "narrator",
          "text": "Он отставляет чайник, освобождая место между чашками."
        }
      ],
      "next": "c8.r3.ordinary"
    },
    "c8.r3.ordinary": {
      "id": "c8.r3.ordinary",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "хочется однажды провести с тобой совершенно обычный вечер. без повода, которому надо соответствовать."
        },
        {
          "speaker": "heroine",
          "text": "А сегодня необычный?"
        }
      ],
      "next": "c8.r3.ordinary.route"
    },
    "c8.r3.ordinary.route": {
      "id": "c8.r3.ordinary.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            }
          ],
          "next": "c8.r3.ordinary.home"
        }
      ],
      "fallback": "c8.r3.ordinary.cafe"
    },
    "c8.r3.ordinary.home": {
      "id": "c8.r3.ordinary.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "сегодня я слишком старался аккуратно положить ложки."
        },
        {
          "speaker": "heroine",
          "text": "Это заметно."
        },
        {
          "speaker": "vlad",
          "text": "в следующий раз попробую выглядеть естественнее."
        }
      ],
      "next": "c8.r3.home.habit"
    },
    "c8.r3.ordinary.cafe": {
      "id": "c8.r3.ordinary.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "сегодня я слишком старался выбрать столик."
        },
        {
          "speaker": "heroine",
          "text": "Это заметно."
        },
        {
          "speaker": "vlad",
          "text": "в следующий раз попробую выглядеть естественнее."
        }
      ],
      "next": "c8.r3.cafe.window"
    },
    "c8.r3.note": {
      "id": "c8.r3.note",
      "kind": "note",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "questionId": "s2.r3.q8",
      "maxCodePoints": 280,
      "prompt": "Что тебе хотелось бы однажды сделать вместе — без особого повода?",
      "context": "У вечера появились свои мелочи: десерт, смешной шаг, разговор за столом.",
      "answerOptions": [
        {
          "id": "preset.1",
          "kind": "preset",
          "text": "Приготовить что-нибудь и потом долго пить чай."
        },
        {
          "id": "preset.2",
          "kind": "preset",
          "text": "Придумать свой маленький ритуал для обычного вечера."
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
      "next": "c8.r3.late.intro"
    },
    "c8.r3.late.intro": {
      "id": "c8.r3.late.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "можем ещё немного посидеть. или повторим тот поворот — мне теперь интересно, получится ли второй раз."
        }
      ],
      "next": "c8.r3.late"
    },
    "c8.r3.late": {
      "id": "c8.r3.late",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как продолжим вечер?",
      "choices": [
        {
          "id": "dance",
          "text": "Давай ещё потанцуем",
          "next": "c8.r3.late.dance",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateMode",
              "value": "dance"
            }
          ]
        },
        {
          "id": "seated",
          "text": "Лучше посидим рядом",
          "next": "c8.r3.late.seated",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateMode",
              "value": "seated"
            }
          ]
        },
        {
          "id": "story",
          "text": "Хочу услышать ещё одну твою историю",
          "next": "c8.r3.late.story",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateMode",
              "value": "story"
            }
          ]
        }
      ]
    },
    "c8.r3.late.dance": {
      "id": "c8.r3.late.dance",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь на свободное место. Влад протягивает руку; ты принимаешь её."
        },
        {
          "speaker": "vlad",
          "text": "обещаю не усложнять."
        },
        {
          "speaker": "heroine",
          "text": "Вот это и попробуй."
        },
        {
          "speaker": "narrator",
          "text": "На этот раз первый шаг получается сразу."
        }
      ],
      "next": "c8.r3.late.neck.route"
    },
    "c8.r3.late.seated": {
      "id": "c8.r3.late.seated",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад поворачивает стул так, чтобы вам было удобно разговаривать, и садится рядом."
        },
        {
          "speaker": "vlad",
          "text": "так тоже нравится. чашки, кстати, больше не мешают."
        },
        {
          "speaker": "heroine",
          "text": "Они весь вечер старались."
        },
        {
          "speaker": "vlad",
          "text": "перед уходом поблагодарим."
        }
      ],
      "next": "c8.r3.last.spoon"
    },
    "c8.r3.late.story": {
      "id": "c8.r3.late.story",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "однажды я решил, что умею печь без рецепта."
        },
        {
          "speaker": "heroine",
          "text": "Почему?"
        },
        {
          "speaker": "vlad",
          "text": "очень уверенно посмотрел на муку."
        },
        {
          "speaker": "heroine",
          "text": "И?"
        },
        {
          "speaker": "vlad",
          "text": "больше так не делаю. зато теперь хорошо выбираю десерты."
        },
        {
          "speaker": "narrator",
          "text": "Он рассказывает, как пытался убедить себя, что всё именно так и должно выглядеть."
        },
        {
          "speaker": "heroine",
          "text": "Теперь я понимаю сегодняшнюю подготовку."
        },
        {
          "speaker": "vlad",
          "text": "опыт. дорогой, но полезный."
        }
      ],
      "next": "c8.r3.last.spoon"
    },
    "c8.r3.late.neck.route": {
      "id": "c8.r3.late.neck.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            },
            {
              "key": "c8LipKiss",
              "equals": "yes"
            }
          ],
          "next": "c8.r3.late.tender"
        },
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            },
            {
              "key": "c8Cheek",
              "equals": "yes"
            }
          ],
          "next": "c8.r3.late.tender"
        }
      ],
      "fallback": "c8.r3.late.soft"
    },
    "c8.r3.late.tender": {
      "id": "c8.r3.late.tender",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "После поворота вы останавливаетесь. Влад придерживает твою руку и ждёт, продолжишь ли ты шаг."
        }
      ],
      "next": "c8.r3.late.tender.choice"
    },
    "c8.r3.late.tender.choice": {
      "id": "c8.r3.late.tender.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Чего тебе хочется сейчас?",
      "choices": [
        {
          "id": "neck",
          "text": "Хочу, чтобы ты поцеловал меня в шею",
          "next": "c8.r3.tender.neck",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateTender",
              "value": "neck"
            }
          ]
        },
        {
          "id": "hair",
          "text": "Погладь меня по волосам",
          "next": "c8.r3.tender.hair",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateTender",
              "value": "hair"
            }
          ]
        },
        {
          "id": "hold",
          "text": "Давай просто побудем так",
          "next": "c8.r3.tender.hold",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateTender",
              "value": "hold"
            }
          ]
        }
      ]
    },
    "c8.r3.late.soft": {
      "id": "c8.r3.late.soft",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как продолжим танец?",
      "choices": [
        {
          "id": "hold",
          "text": "Можно обнимемся?",
          "next": "c8.r3.tender.hug",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateTender",
              "value": "hold"
            }
          ]
        },
        {
          "id": "hair",
          "text": "Погладь меня по волосам",
          "next": "c8.r3.tender.hair",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateTender",
              "value": "hair"
            }
          ]
        },
        {
          "id": "step",
          "text": "Ещё один шаг — и к чаю",
          "next": "c8.r3.tender.step",
          "effects": [
            {
              "kind": "set",
              "key": "c8LateTender",
              "value": "step"
            }
          ]
        }
      ]
    },
    "c8.r3.tender.neck": {
      "id": "c8.r3.tender.neck",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Хочу, чтобы ты поцеловал меня в шею."
        },
        {
          "speaker": "vlad",
          "text": "иди ближе."
        },
        {
          "speaker": "narrator",
          "text": "Влад коротко целует тебя в шею, затем вы возвращаетесь к спокойному объятию."
        },
        {
          "speaker": "heroine",
          "text": "Теперь можно без поворотов."
        },
        {
          "speaker": "vlad",
          "text": "согласен."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.tender.hair": {
      "id": "c8.r3.tender.hair",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Погладь меня по волосам."
        },
        {
          "speaker": "narrator",
          "text": "Влад осторожно проводит рукой по твоим волосам, затем убирает руку и остаётся рядом."
        },
        {
          "speaker": "vlad",
          "text": "так?"
        },
        {
          "speaker": "heroine",
          "text": "Да."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.tender.hold": {
      "id": "c8.r3.tender.hold",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы остаётесь в объятии. За окном проезжает машина, свет ненадолго проходит по стене."
        },
        {
          "speaker": "vlad",
          "text": "хорошая у тебя идея."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.tender.hug": {
      "id": "c8.r3.tender.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай."
        },
        {
          "speaker": "narrator",
          "text": "Вы останавливаетесь и обнимаетесь."
        },
        {
          "speaker": "heroine",
          "text": "Так удобнее."
        },
        {
          "speaker": "vlad",
          "text": "и спорить не о чем."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.tender.step": {
      "id": "c8.r3.tender.step",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы заканчиваете небольшой круг и возвращаетесь к чашкам."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь у нас есть уверенный финальный шаг."
        },
        {
          "speaker": "heroine",
          "text": "Главное, вовремя остановиться."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.last.spoon": {
      "id": "c8.r3.last.spoon",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад замечает последнее печенье на общей тарелке к чаю."
        },
        {
          "speaker": "vlad",
          "text": "мне кажется, мы оба делаем вид, что не заметили."
        }
      ],
      "next": "c8.r3.last.choice"
    },
    "c8.r3.last.choice": {
      "id": "c8.r3.last.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как поделим?",
      "choices": [
        {
          "id": "half",
          "text": "Пополам?",
          "next": "c8.r3.last.half"
        },
        {
          "id": "him",
          "text": "Забирай. Ты сегодня старался",
          "next": "c8.r3.last.him"
        },
        {
          "id": "her",
          "text": "Ладно, я спасу ситуацию",
          "next": "c8.r3.last.her"
        }
      ]
    },
    "c8.r3.last.half": {
      "id": "c8.r3.last.half",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Он делит печенье насколько возможно ровно."
        },
        {
          "speaker": "vlad",
          "text": "всё. серьёзный вопрос решён."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.last.him": {
      "id": "c8.r3.last.him",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "принимаю с благодарностью."
        },
        {
          "speaker": "heroine",
          "text": "Без торжественной речи."
        },
        {
          "speaker": "vlad",
          "text": "уже сократил."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.last.her": {
      "id": "c8.r3.last.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я надеялся на твою решительность."
        },
        {
          "speaker": "narrator",
          "text": "Ты забираешь печенье, а Влад отодвигает пустую тарелку."
        }
      ],
      "next": "c8.r3.closing"
    },
    "c8.r3.closing": {
      "id": "c8.r3.closing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На столе остаются чашки. Влад уже не пытается сразу всё убрать."
        },
        {
          "speaker": "vlad",
          "text": "что заберём из сегодняшнего вечера в следующий?"
        }
      ],
      "next": "c8.r3.ending"
    },
    "c8.r3.ending": {
      "id": "c8.r3.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "О чём договоримся?",
      "choices": [
        {
          "id": "dance",
          "text": "Наш нелепый танец",
          "next": "c8.r3.finish.dance",
          "effects": [
            {
              "kind": "set",
              "key": "c8Close",
              "value": "dance"
            }
          ]
        },
        {
          "id": "tea",
          "text": "Чай без спешки",
          "next": "c8.r3.finish.tea",
          "effects": [
            {
              "kind": "set",
              "key": "c8Close",
              "value": "tea"
            }
          ]
        },
        {
          "id": "next",
          "text": "Я выберу следующее занятие",
          "next": "c8.r3.finish.next",
          "effects": [
            {
              "kind": "set",
              "key": "c8Close",
              "value": "next"
            }
          ]
        }
      ]
    },
    "c8.r3.finish.dance": {
      "id": "c8.r3.finish.dance",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Только сложнее пока не придумывай."
        },
        {
          "speaker": "vlad",
          "text": "согласен. закрепим красивые ошибки."
        },
        {
          "speaker": "narrator",
          "text": "Вы смеётесь, ещё раз вспоминая неудачный поворот."
        }
      ],
      "next": "c8.r3.return.route"
    },
    "c8.r3.finish.tea": {
      "id": "c8.r3.finish.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "мне подходит."
        },
        {
          "speaker": "heroine",
          "text": "И чтобы никто не считал минуты."
        },
        {
          "speaker": "vlad",
          "text": "с этим я уже научился."
        },
        {
          "speaker": "narrator",
          "text": "Вы допиваете чай, оставив разговору ещё немного времени."
        }
      ],
      "next": "c8.r3.return.route"
    },
    "c8.r3.finish.next": {
      "id": "c8.r3.finish.next",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "отлично. только дай мне шанс хотя бы угадать."
        },
        {
          "speaker": "heroine",
          "text": "Увидим."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь буду ждать ещё больше."
        }
      ],
      "next": "c8.r3.return.route"
    },
    "c8.r3.return.route": {
      "id": "c8.r3.return.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            },
            {
              "key": "c8Hoodie",
              "equals": "evening"
            }
          ],
          "next": "c8.r3.hoodie.return"
        },
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            }
          ],
          "next": "c8.r3.outro.home"
        }
      ],
      "fallback": "c8.r3.outro.cafe"
    },
    "c8.r3.hoodie.return": {
      "id": "c8.r3.hoodie.return",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Позже, перед уходом, ты снимаешь худи и возвращаешь его Владу."
        },
        {
          "speaker": "heroine",
          "text": "Спасибо. В нём уютно."
        },
        {
          "speaker": "vlad",
          "text": "бери и в следующий раз."
        },
        {
          "speaker": "narrator",
          "text": "Он кладёт худи на спинку стула."
        }
      ],
      "next": "c8.r3.outro.home"
    },
    "c8.r3.outro.home": {
      "id": "c8.r3.outro.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У двери Влад отдаёт тебе вещи и остаётся рядом, пока вы договариваетесь о следующем вечере."
        },
        {
          "speaker": "vlad",
          "text": "рад, что ты пришла."
        }
      ],
      "next": "c8.r3.card"
    },
    "c8.r3.outro.cafe": {
      "id": "c8.r3.outro.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У выхода из кафе вы останавливаетесь, чтобы договорить."
        },
        {
          "speaker": "vlad",
          "text": "в следующий раз снова выберем столик у окна."
        }
      ],
      "next": "c8.r3.card"
    },
    "c8.r3.card": {
      "id": "c8.r3.card",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Close",
              "equals": "dance"
            }
          ],
          "next": "c8.r3.end.dance"
        },
        {
          "all": [
            {
              "key": "c8Close",
              "equals": "next"
            }
          ],
          "next": "c8.r3.end.next"
        }
      ],
      "fallback": "c8.r3.end.tea"
    },
    "c8.r3.end.dance": {
      "id": "c8.r3.end.dance",
      "kind": "end",
      "cardId": "c8.r3.dance",
      "endingId": "c8.r3.dance"
    },
    "c8.r3.end.tea": {
      "id": "c8.r3.end.tea",
      "kind": "end",
      "cardId": "c8.r3.tea",
      "endingId": "c8.r3.tea"
    },
    "c8.r3.end.next": {
      "id": "c8.r3.end.next",
      "kind": "end",
      "cardId": "c8.r3.next",
      "endingId": "c8.r3.next"
    },
    "c8.r3.home.habit": {
      "id": "c8.r3.home.habit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад замечает, что рядом с книгой осталась маленькая записка со списком покупок."
        },
        {
          "speaker": "heroine",
          "text": "Ты записываешь даже покупки к чаю?"
        },
        {
          "speaker": "vlad",
          "text": "иначе могу вернуться с чем-нибудь интересным, но без самого чая."
        },
        {
          "speaker": "narrator",
          "text": "Он разворачивает записку. Внизу отдельной строкой стоит «не забыть пакет»."
        },
        {
          "speaker": "heroine",
          "text": "И пакет забываешь?"
        },
        {
          "speaker": "vlad",
          "text": "регулярно. они, видимо, для меня слишком предсказуемые."
        },
        {
          "speaker": "heroine",
          "text": "Зато потом есть дополнительные."
        },
        {
          "speaker": "vlad",
          "text": "да. дома уже маленький архив моей невнимательности."
        },
        {
          "speaker": "narrator",
          "text": "Он складывает бумагу и убирает её под книгу."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, что сегодня можно это не прятать."
        },
        {
          "speaker": "heroine",
          "text": "А ты собирался?"
        },
        {
          "speaker": "vlad",
          "text": "просто хотел, чтобы всё выглядело уютно."
        },
        {
          "speaker": "heroine",
          "text": "По-моему, обычные вещи не мешают."
        },
        {
          "speaker": "vlad",
          "text": "рад. потому что идеальную квартиру я бы не смог долго изображать."
        },
        {
          "speaker": "narrator",
          "text": "Вы передаёте друг другу чайник, и Влад наконец устраивается удобнее."
        },
        {
          "speaker": "vlad",
          "text": "а что делает чужое место своим хотя бы на вечер?"
        },
        {
          "speaker": "heroine",
          "text": "Хороший вопрос."
        },
        {
          "speaker": "vlad",
          "text": "для меня иногда достаточно знать, где чашки, и не спрашивать разрешение на каждый шаг."
        },
        {
          "speaker": "heroine",
          "text": "Это уже серьёзный уровень."
        },
        {
          "speaker": "vlad",
          "text": "можно начать с того, чтобы не сидеть на краешке стула."
        },
        {
          "speaker": "narrator",
          "text": "Он отодвигает свою чашку и освобождает место для твоей."
        },
        {
          "speaker": "vlad",
          "text": "вот. на столе уже можно не тесниться."
        },
        {
          "speaker": "heroine",
          "text": "Ты всё-таки ещё раз переставил."
        },
        {
          "speaker": "vlad",
          "text": "последний. почти уверен."
        }
      ],
      "next": "c8.r3.home.habit.choice"
    },
    "c8.r3.home.habit.choice": {
      "id": "c8.r3.home.habit.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что тебе помогает чувствовать себя уютно?",
      "choices": [
        {
          "id": "tea",
          "text": "Когда можно спокойно попросить ещё чаю",
          "next": "c8.r3.home.habit.tea"
        },
        {
          "id": "laugh",
          "text": "Когда можно не бояться выглядеть смешно",
          "next": "c8.r3.home.habit.laugh"
        },
        {
          "id": "quiet",
          "text": "Когда не нужно всё время что-то говорить",
          "next": "c8.r3.home.habit.quiet"
        }
      ]
    },
    "c8.r3.home.habit.tea": {
      "id": "c8.r3.home.habit.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "с этим легко. чайник теперь знаешь где."
        },
        {
          "speaker": "heroine",
          "text": "А если окажется пустой?"
        },
        {
          "speaker": "vlad",
          "text": "поставим заново. это у меня уже отработано."
        },
        {
          "speaker": "narrator",
          "text": "Влад улыбается и оставляет чайник между вами."
        },
        {
          "speaker": "heroine",
          "text": "Тогда начнём с этого."
        },
        {
          "speaker": "vlad",
          "text": "отличный маленький план."
        }
      ],
      "next": "c8.r3.note"
    },
    "c8.r3.home.habit.laugh": {
      "id": "c8.r3.home.habit.laugh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "после нашего танца я бы сказал, что мы уже справились."
        },
        {
          "speaker": "heroine",
          "text": "Ты уверен?"
        },
        {
          "speaker": "vlad",
          "text": "нет. но мне понравилось."
        },
        {
          "speaker": "narrator",
          "text": "Он изображает начало неудачного поворота только плечами."
        },
        {
          "speaker": "heroine",
          "text": "Всё, вспомнила."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. значит, останется чем гордиться."
        }
      ],
      "next": "c8.r3.note"
    },
    "c8.r3.home.habit.quiet": {
      "id": "c8.r3.home.habit.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "да. с тобой я уже начинаю этому учиться."
        },
        {
          "speaker": "narrator",
          "text": "Он делает глоток и остаётся смотреть в окно."
        },
        {
          "speaker": "heroine",
          "text": "Сейчас тренируешься?"
        },
        {
          "speaker": "vlad",
          "text": "почти получилось."
        },
        {
          "speaker": "narrator",
          "text": "Вы улыбаетесь и ещё немного сидите без новой темы."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь получилось."
        }
      ],
      "next": "c8.r3.note"
    },
    "c8.r3.cafe.window": {
      "id": "c8.r3.cafe.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "За окном кафе кто-то пытается раскрыть зонт, хотя дождь ещё не начался."
        },
        {
          "speaker": "vlad",
          "text": "уважаю. человек готовится раньше погоды."
        },
        {
          "speaker": "heroine",
          "text": "Может, проверяет, работает ли."
        },
        {
          "speaker": "vlad",
          "text": "после моих историй про геймпад — особенно разумно."
        },
        {
          "speaker": "narrator",
          "text": "Зонт наконец раскрывается, и прохожий несколько секунд разглядывает его изнутри."
        },
        {
          "speaker": "heroine",
          "text": "Интересно, доволен результатом?"
        },
        {
          "speaker": "vlad",
          "text": "надеюсь. иначе этот маленький спектакль закончится грустно."
        },
        {
          "speaker": "narrator",
          "text": "Прохожий закрывает зонт и уходит. Вы возвращаетесь к своим чашкам."
        },
        {
          "speaker": "vlad",
          "text": "люблю столики у окна. всегда есть что посмотреть, если разговору нужна пауза."
        },
        {
          "speaker": "heroine",
          "text": "Ты заранее продумал даже паузу?"
        },
        {
          "speaker": "vlad",
          "text": "нет. просто сейчас понял, почему здесь хорошо сидеть."
        },
        {
          "speaker": "narrator",
          "text": "Влад отодвигает пустую тарелку к краю стола."
        },
        {
          "speaker": "vlad",
          "text": "а ты быстро привыкаешь к новому месту?"
        },
        {
          "speaker": "heroine",
          "text": "Смотря с кем пришла."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается и не пытается сразу превратить ответ в шутку."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится слышать это."
        },
        {
          "speaker": "heroine",
          "text": "Тут даже блюдце перестало качаться."
        },
        {
          "speaker": "vlad",
          "text": "значит, вечер складывается."
        },
        {
          "speaker": "narrator",
          "text": "За соседним столиком освобождается место; в кафе становится тише."
        },
        {
          "speaker": "vlad",
          "text": "можем не торопиться. у нас ещё есть чай."
        },
        {
          "speaker": "heroine",
          "text": "Ты теперь будешь продлевать вечер чайниками?"
        },
        {
          "speaker": "vlad",
          "text": "пока получается вполне убедительно."
        },
        {
          "speaker": "narrator",
          "text": "Он поворачивает чашку за ручку, чтобы тебе было удобнее её взять."
        },
        {
          "speaker": "vlad",
          "text": "только выбирать всё равно будем вместе."
        }
      ],
      "next": "c8.r3.cafe.window.choice"
    },
    "c8.r3.cafe.window.choice": {
      "id": "c8.r3.cafe.window.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что тебе помогает чувствовать себя уютно?",
      "choices": [
        {
          "id": "tea",
          "text": "Когда можно спокойно попросить ещё чаю",
          "next": "c8.r3.cafe.window.tea"
        },
        {
          "id": "laugh",
          "text": "Когда можно не бояться выглядеть смешно",
          "next": "c8.r3.cafe.window.laugh"
        },
        {
          "id": "quiet",
          "text": "Когда не нужно всё время что-то говорить",
          "next": "c8.r3.cafe.window.quiet"
        }
      ]
    },
    "c8.r3.cafe.window.tea": {
      "id": "c8.r3.cafe.window.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "с этим легко. можем заказать ещё."
        },
        {
          "speaker": "heroine",
          "text": "Только не прямо сейчас, а то я не успеваю."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. буду ждать сигнала."
        },
        {
          "speaker": "narrator",
          "text": "Он не тянется за меню и остаётся слушать тебя."
        },
        {
          "speaker": "heroine",
          "text": "Вот так гораздо лучше."
        },
        {
          "speaker": "vlad",
          "text": "запомнил."
        }
      ],
      "next": "c8.r3.note"
    },
    "c8.r3.cafe.window.laugh": {
      "id": "c8.r3.cafe.window.laugh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "после нашего танца я бы сказал, что мы уже справились."
        },
        {
          "speaker": "heroine",
          "text": "Ты уверен?"
        },
        {
          "speaker": "vlad",
          "text": "нет. но мне понравилось."
        },
        {
          "speaker": "narrator",
          "text": "Он изображает начало неудачного поворота только плечами."
        },
        {
          "speaker": "heroine",
          "text": "Всё, вспомнила."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. значит, останется чем гордиться."
        }
      ],
      "next": "c8.r3.note"
    },
    "c8.r3.cafe.window.quiet": {
      "id": "c8.r3.cafe.window.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "да. с тобой я уже начинаю этому учиться."
        },
        {
          "speaker": "narrator",
          "text": "Он делает глоток и остаётся смотреть в окно."
        },
        {
          "speaker": "heroine",
          "text": "Сейчас тренируешься?"
        },
        {
          "speaker": "vlad",
          "text": "почти получилось."
        },
        {
          "speaker": "narrator",
          "text": "Вы улыбаетесь и ещё немного сидите без новой темы."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь получилось."
        }
      ],
      "next": "c8.r3.note"
    }
  }
};
