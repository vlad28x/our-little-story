import type { Chapter } from '../../engine/types';
// R3: outputs/SEASON_02_R3_SCRIPT_*.md
export const chapter9:Chapter={
  "id": 9,
  "contentVersion": 12,
  "scriptRevision": 3,
  "title": "Фильм подождёт",
  "entry": "c9.r3.entry",
  "nodes": {
    "c9.r3.entry": {
      "id": "c9.r3.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад присылает название короткого фильма."
        },
        {
          "speaker": "vlad",
          "text": "нашёл кино. человек собирается в поездку, кот явно не согласен."
        },
        {
          "speaker": "heroine",
          "text": "И чью сторону ты выбрал?"
        },
        {
          "speaker": "vlad",
          "text": "посмотрим. кот пока убедительнее в трейлере."
        },
        {
          "speaker": "heroine",
          "text": "Ты всё-таки посмотрел трейлер."
        },
        {
          "speaker": "vlad",
          "text": "целиком. подготовка серьёзная."
        }
      ],
      "next": "c9.r3.place"
    },
    "c9.r3.place": {
      "id": "c9.r3.place",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Где будем смотреть?",
      "choices": [
        {
          "id": "home",
          "text": "Посмотрим у тебя",
          "next": "c9.r3.arrival.home",
          "effects": [
            {
              "kind": "set",
              "key": "c9Place",
              "value": "home"
            },
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "no"
            }
          ]
        },
        {
          "id": "courtyard",
          "text": "Пойдём в кинодворик",
          "next": "c9.r3.arrival.courtyard",
          "effects": [
            {
              "kind": "set",
              "key": "c9Place",
              "value": "courtyard"
            },
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "no"
            }
          ]
        }
      ]
    },
    "c9.r3.arrival.home": {
      "id": "c9.r3.arrival.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На столике уже стоят две пустые чашки. Влад держит пульт, но экран пока не включён."
        },
        {
          "speaker": "vlad",
          "text": "в этот раз сначала удобно устроимся. потом буду изображать кинокритика."
        },
        {
          "speaker": "heroine",
          "text": "Рецензию подготовил?"
        },
        {
          "speaker": "vlad",
          "text": "три очень уверенных слова. постараюсь распределить на весь фильм."
        }
      ],
      "next": "c9.r3.hoodie.route"
    },
    "c9.r3.arrival.courtyard": {
      "id": "c9.r3.arrival.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы приходите чуть раньше показа. Во дворе загораются небольшие лампы."
        },
        {
          "speaker": "vlad",
          "text": "успели выбрать места. это уже половина моего хорошего плана."
        },
        {
          "speaker": "heroine",
          "text": "А вторая?"
        },
        {
          "speaker": "vlad",
          "text": "не съесть всё до начала."
        }
      ],
      "next": "c9.r3.hoodie.route"
    },
    "c9.r3.hoodie.route": {
      "id": "c9.r3.hoodie.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Hoodie",
              "equals": "borrowed"
            }
          ],
          "next": "c9.r3.hoodie.callback"
        }
      ],
      "fallback": "c9.r3.setup.intro"
    },
    "c9.r3.hoodie.callback": {
      "id": "c9.r3.hoodie.callback",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "кстати, как там моё худи?"
        },
        {
          "speaker": "heroine",
          "text": "Ты по нему соскучился?"
        },
        {
          "speaker": "vlad",
          "text": "я по тебе соскучился. худи просто удачно вспомнилось."
        }
      ],
      "next": "c9.r3.hoodie"
    },
    "c9.r3.hoodie": {
      "id": "c9.r3.hoodie",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что скажешь про худи?",
      "choices": [
        {
          "id": "return",
          "text": "Вернуть: «На чай я всё равно ещё приду»",
          "next": "c9.r3.hoodie.return",
          "effects": [
            {
              "kind": "set",
              "key": "c9Hoodie",
              "value": "returned"
            }
          ]
        },
        {
          "id": "keep",
          "text": "Можно я пока оставлю? Мне в нём уютно",
          "next": "c9.r3.hoodie.keep",
          "effects": [
            {
              "kind": "set",
              "key": "c9Hoodie",
              "value": "kept"
            }
          ]
        }
      ]
    },
    "c9.r3.hoodie.return": {
      "id": "c9.r3.hoodie.return",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты протягиваешь Владу сложенное худи."
        },
        {
          "speaker": "heroine",
          "text": "На чай я всё равно ещё приду."
        },
        {
          "speaker": "vlad",
          "text": "приходи. я тебя и без обмена вещами рад видеть."
        },
        {
          "speaker": "narrator",
          "text": "Он откладывает худи и возвращается к столу."
        }
      ],
      "next": "c9.r3.setup.intro"
    },
    "c9.r3.hoodie.keep": {
      "id": "c9.r3.hoodie.keep",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Можно я пока оставлю? Мне в нём уютно."
        },
        {
          "speaker": "vlad",
          "text": "оставь. мне приятно, что тебе в нём хорошо."
        },
        {
          "speaker": "narrator",
          "text": "Влад подаёт тебе чашку. Больше возвращать худи сегодня никто не предлагает."
        }
      ],
      "next": "c9.r3.setup.intro"
    },
    "c9.r3.setup.intro": {
      "id": "c9.r3.setup.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я рад тебя видеть."
        },
        {
          "speaker": "heroine",
          "text": "Даже раньше начала фильма?"
        },
        {
          "speaker": "vlad",
          "text": "особенно. успеем поговорить до того, как кот начнёт спорить за нас."
        }
      ],
      "next": "c9.r3.before.screen"
    },
    "c9.r3.setup": {
      "id": "c9.r3.setup",
      "kind": "minigame",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "game": "movie-setup",
      "next": "c9.r3.aside"
    },
    "c9.r3.aside": {
      "id": "c9.r3.aside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "Пульт у него. Посмотрим, надолго ли."
        },
        {
          "speaker": "angel",
          "text": "Пусть сначала включит."
        }
      ],
      "next": "c9.r3.start.route",
      "presentation": "adviser-aside"
    },
    "c9.r3.start.route": {
      "id": "c9.r3.start.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.start.home"
        }
      ],
      "fallback": "c9.r3.start.courtyard"
    },
    "c9.r3.start.home": {
      "id": "c9.r3.start.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Когда всё готово, Влад убирает упаковку со столика."
        },
        {
          "speaker": "vlad",
          "text": "всё. теперь можно делать вид, что мы собрались именно смотреть."
        },
        {
          "speaker": "heroine",
          "text": "А ты?"
        },
        {
          "speaker": "vlad",
          "text": "я правда хочу узнать, уедет ли этот человек."
        },
        {
          "speaker": "narrator",
          "text": "Пульт не сразу реагирует. Влад проверяет, куда его направил."
        },
        {
          "speaker": "heroine",
          "text": "На чашку не действует?"
        },
        {
          "speaker": "vlad",
          "text": "пока нет. хотя полезная была бы функция."
        },
        {
          "speaker": "narrator",
          "text": "Экран наконец загорается."
        }
      ],
      "next": "c9.r3.film.first"
    },
    "c9.r3.start.courtyard": {
      "id": "c9.r3.start.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Когда всё готово, Влад убирает упаковку с соседнего места."
        },
        {
          "speaker": "vlad",
          "text": "я правда хочу узнать, уедет ли этот человек."
        },
        {
          "speaker": "narrator",
          "text": "Экран загорается раньше, чем Влад заканчивает фразу."
        },
        {
          "speaker": "vlad",
          "text": "всё, меня опередили."
        },
        {
          "speaker": "heroine",
          "text": "Попробуй досказать после."
        },
        {
          "speaker": "vlad",
          "text": "если вспомню."
        }
      ],
      "next": "c9.r3.film.first"
    },
    "c9.r3.film.first": {
      "id": "c9.r3.film.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На экране человек складывает вещи в чемодан. Кот по очереди вытаскивает их обратно и садится внутрь."
        },
        {
          "speaker": "vlad",
          "text": "ну всё. поездка отменяется."
        },
        {
          "speaker": "heroine",
          "text": "Он ещё даже билет не показал."
        },
        {
          "speaker": "vlad",
          "text": "кот уже принял решение."
        }
      ],
      "next": "c9.r3.debate"
    },
    "c9.r3.debate": {
      "id": "c9.r3.debate",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "На чьей ты стороне?",
      "choices": [
        {
          "id": "cat",
          "text": "Я за кота. Человек плохо объяснил план",
          "next": "c9.r3.debate.cat"
        },
        {
          "id": "human",
          "text": "Дайте человеку хоть раз спокойно собраться",
          "next": "c9.r3.debate.human"
        },
        {
          "id": "both",
          "text": "Они оба делают вид, что не понимают друг друга",
          "next": "c9.r3.debate.both"
        }
      ]
    },
    "c9.r3.debate.cat": {
      "id": "c9.r3.debate.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "согласен. никаких обсуждений, сразу чемодан."
        },
        {
          "speaker": "heroine",
          "text": "А кот явно рассчитывал на вечер дома."
        },
        {
          "speaker": "vlad",
          "text": "узнаю твою способность найти сильный аргумент у того, кто молчит."
        }
      ],
      "next": "c9.r3.closeness.route"
    },
    "c9.r3.debate.human": {
      "id": "c9.r3.debate.human",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "наконец-то у него появился адвокат."
        },
        {
          "speaker": "heroine",
          "text": "Ты попробуй собраться, когда тебе всё вытаскивают."
        },
        {
          "speaker": "vlad",
          "text": "ладно, признаю. хотя кот играет лучше."
        }
      ],
      "next": "c9.r3.closeness.route"
    },
    "c9.r3.debate.both": {
      "id": "c9.r3.debate.both",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "вот это, кажется, точнее всего."
        },
        {
          "speaker": "heroine",
          "text": "Один мог бы открыть вторую сумку."
        },
        {
          "speaker": "vlad",
          "text": "другой — хотя бы один раз из неё выйти."
        },
        {
          "speaker": "narrator",
          "text": "На экране кот как раз выбирается и тут же залезает обратно."
        }
      ],
      "next": "c9.r3.closeness.route"
    },
    "c9.r3.closeness.route": {
      "id": "c9.r3.closeness.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.closeness.home"
        }
      ],
      "fallback": "c9.r3.closeness.courtyard"
    },
    "c9.r3.closeness.home": {
      "id": "c9.r3.closeness.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "ладно. досмотрим аргументы обеих сторон."
        },
        {
          "speaker": "narrator",
          "text": "Следующие несколько кадров вы смотрите молча. Человек ставит возле чемодана маленькую переноску."
        },
        {
          "speaker": "narrator",
          "text": "Влад немного отодвигает чашки и поворачивается к тебе."
        },
        {
          "speaker": "vlad",
          "text": "хочешь ко мне под руку? так удобнее смотреть вдвоём."
        }
      ],
      "next": "c9.r3.closeness"
    },
    "c9.r3.closeness.courtyard": {
      "id": "c9.r3.closeness.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "ладно. досмотрим аргументы обеих сторон."
        },
        {
          "speaker": "narrator",
          "text": "Следующие несколько кадров вы смотрите молча. Человек ставит возле чемодана маленькую переноску."
        },
        {
          "speaker": "narrator",
          "text": "Влад поправляет край своего пледа, не натягивая его на тебя."
        },
        {
          "speaker": "vlad",
          "text": "если хочешь, можно устроиться ближе. плед большой."
        }
      ],
      "next": "c9.r3.closeness"
    },
    "c9.r3.closeness": {
      "id": "c9.r3.closeness",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как устроишься?",
      "choices": [
        {
          "id": "shoulder",
          "text": "Давай. Я на плечо устроюсь",
          "next": "c9.r3.closeness.shoulder",
          "effects": [
            {
              "kind": "set",
              "key": "c9Closeness",
              "value": "shoulder"
            },
            {
              "kind": "set",
              "key": "c9Moment",
              "value": "shoulder"
            }
          ]
        },
        {
          "id": "near",
          "text": "Сяду ближе, но пока без объятий",
          "next": "c9.r3.closeness.near",
          "effects": [
            {
              "kind": "set",
              "key": "c9Closeness",
              "value": "near"
            },
            {
              "kind": "set",
              "key": "c9Moment",
              "value": "watch"
            }
          ]
        },
        {
          "id": "separate",
          "text": "Мне удобно здесь",
          "next": "c9.r3.closeness.separate",
          "effects": [
            {
              "kind": "set",
              "key": "c9Closeness",
              "value": "separate"
            },
            {
              "kind": "set",
              "key": "c9Moment",
              "value": "watch"
            }
          ]
        }
      ]
    },
    "c9.r3.closeness.shoulder": {
      "id": "c9.r3.closeness.shoulder",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты придвигаешься и опираешься на его плечо. Влад обнимает тебя так, чтобы экран оставался виден."
        },
        {
          "speaker": "vlad",
          "text": "вот. теперь можно даже переживать за чемодан с удобством."
        }
      ],
      "next": "c9.r3.prediction.intro"
    },
    "c9.r3.closeness.near": {
      "id": "c9.r3.closeness.near",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты пересаживаешься ближе. Влад оставляет руки при себе."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. отсюда кот ещё убедительнее."
        }
      ],
      "next": "c9.r3.prediction.intro"
    },
    "c9.r3.closeness.separate": {
      "id": "c9.r3.closeness.separate",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда отлично."
        },
        {
          "speaker": "narrator",
          "text": "Он возвращается к экрану и пододвигает свой напиток ближе к себе."
        }
      ],
      "next": "c9.r3.prediction.intro"
    },
    "c9.r3.prediction.intro": {
      "id": "c9.r3.prediction.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Человек закрывает чемодан, уходит за курткой и оставляет на столе билет. Кот смотрит на билет слишком внимательно."
        },
        {
          "speaker": "vlad",
          "text": "маленькое пари. что он сейчас сделает?"
        }
      ],
      "next": "c9.r3.prediction"
    },
    "c9.r3.prediction": {
      "id": "c9.r3.prediction",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Твоя версия?",
      "choices": [
        {
          "id": "ticket",
          "text": "Спрячет билет",
          "next": "c9.r3.prediction.ticket"
        },
        {
          "id": "follow",
          "text": "Пойдёт за хозяином",
          "next": "c9.r3.prediction.follow"
        },
        {
          "id": "case",
          "text": "Ляжет на чемодан. Классика",
          "next": "c9.r3.prediction.case"
        }
      ]
    },
    "c9.r3.prediction.ticket": {
      "id": "c9.r3.prediction.ticket",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Кот сталкивает билет за стол, после чего спокойно садится на закрытый чемодан."
        },
        {
          "speaker": "vlad",
          "text": "угадала. буду осторожнее оставлять при тебе сюжетные подсказки."
        },
        {
          "speaker": "heroine",
          "text": "Просто он слишком явно смотрел."
        },
        {
          "speaker": "vlad",
          "text": "всё равно красиво."
        }
      ],
      "next": "c9.r3.prediction.after"
    },
    "c9.r3.prediction.follow": {
      "id": "c9.r3.prediction.follow",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Кот сталкивает билет за стол, после чего спокойно садится на закрытый чемодан."
        },
        {
          "speaker": "vlad",
          "text": "я тоже думал, что он передумает."
        },
        {
          "speaker": "heroine",
          "text": "Может, ещё пойдёт."
        },
        {
          "speaker": "vlad",
          "text": "давай дадим ему шанс исправиться."
        }
      ],
      "next": "c9.r3.prediction.after"
    },
    "c9.r3.prediction.case": {
      "id": "c9.r3.prediction.case",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Кот сталкивает билет за стол, после чего спокойно садится на закрытый чемодан."
        },
        {
          "speaker": "vlad",
          "text": "технически ты тоже права."
        },
        {
          "speaker": "heroine",
          "text": "Именно. Про билет я просто не стала спойлерить."
        },
        {
          "speaker": "vlad",
          "text": "принимается. очень удобно споришь."
        }
      ],
      "next": "c9.r3.prediction.after"
    },
    "c9.r3.prediction.after": {
      "id": "c9.r3.prediction.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "А ты что загадал?"
        },
        {
          "speaker": "vlad",
          "text": "что он сядет в переноску. кажется, я слишком оптимистично думаю о котах."
        },
        {
          "speaker": "narrator",
          "text": "На экране человек возвращается и начинает искать билет."
        },
        {
          "speaker": "narrator",
          "text": "Вы уже какое-то время сидите перед экраном. Влад замечает, что сам так и не притронулся к напитку."
        },
        {
          "speaker": "vlad",
          "text": "подожди. предлагаю вспомнить, что мы его вообще выбрали."
        }
      ],
      "next": "c9.r3.break"
    },
    "c9.r3.break": {
      "id": "c9.r3.break",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Небольшой перерыв?",
      "choices": [
        {
          "id": "stretch",
          "text": "Давай немного прервёмся и разомнёмся",
          "next": "c9.r3.break.route",
          "effects": [
            {
              "kind": "set",
              "key": "c9Break",
              "value": "stretch"
            },
            {
              "kind": "set",
              "key": "c9Moment",
              "value": "pause"
            }
          ]
        },
        {
          "id": "drink",
          "text": "Подай, пожалуйста, мой напиток",
          "next": "c9.r3.break.drink",
          "effects": [
            {
              "kind": "set",
              "key": "c9Break",
              "value": "drink"
            }
          ]
        },
        {
          "id": "watch",
          "text": "Сначала досмотрим эту сцену",
          "next": "c9.r3.break.watch",
          "effects": [
            {
              "kind": "set",
              "key": "c9Break",
              "value": "watch"
            }
          ]
        }
      ]
    },
    "c9.r3.break.route": {
      "id": "c9.r3.break.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.break.home"
        }
      ],
      "fallback": "c9.r3.break.courtyard"
    },
    "c9.r3.break.home": {
      "id": "c9.r3.break.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ставит фильм на паузу. Вы встаёте и проходите до кухни."
        },
        {
          "speaker": "vlad",
          "text": "кажется, кот наконец получил то, чего хотел. мы тоже никуда не уезжаем."
        },
        {
          "speaker": "heroine",
          "text": "Но у нас хотя бы добровольно."
        }
      ],
      "next": "c9.r3.second.intro"
    },
    "c9.r3.break.courtyard": {
      "id": "c9.r3.break.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы тихо выходите из ряда к столику сбоку. Фильм продолжает идти."
        },
        {
          "speaker": "vlad",
          "text": "надеюсь, он не найдёт билет именно сейчас."
        },
        {
          "speaker": "heroine",
          "text": "Успеем понять по довольному лицу."
        }
      ],
      "next": "c9.r3.second.intro"
    },
    "c9.r3.break.drink": {
      "id": "c9.r3.break.drink",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад передаёт тебе выбранный напиток, проверив, что ты удобно взяла его."
        },
        {
          "speaker": "vlad",
          "text": "держи."
        },
        {
          "speaker": "heroine",
          "text": "Спасибо."
        },
        {
          "speaker": "narrator",
          "text": "Он возвращается к экрану; в следующем кадре кот делает вид, что спит."
        }
      ],
      "next": "c9.r3.second.intro"
    },
    "c9.r3.break.watch": {
      "id": "c9.r3.break.watch",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
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
          "text": "Вы смотрите, как человек находит билет под столом и победно поднимает его перед котом."
        },
        {
          "speaker": "heroine",
          "text": "Ну наконец-то."
        },
        {
          "speaker": "vlad",
          "text": "я бы пока не праздновал."
        }
      ],
      "next": "c9.r3.second.intro"
    },
    "c9.r3.second.intro": {
      "id": "c9.r3.second.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы снова удобно устраиваетесь перед экраном."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится смотреть с тобой. даже когда спорим больше, чем смотрим."
        }
      ],
      "next": "c9.r3.second"
    },
    "c9.r3.second": {
      "id": "c9.r3.second",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как продолжим?",
      "choices": [
        {
          "id": "hug",
          "text": "Обними меня. Хочу ещё немного так посидеть",
          "next": "c9.r3.second.hug.route",
          "effects": [
            {
              "kind": "set",
              "key": "c9SecondMoment",
              "value": "hug"
            }
          ]
        },
        {
          "id": "banter",
          "text": "Скажи честно: ты бы поехал без кота?",
          "next": "c9.r3.second.banter.route",
          "effects": [
            {
              "kind": "set",
              "key": "c9SecondMoment",
              "value": "banter"
            },
            {
              "kind": "set",
              "key": "c9Moment",
              "value": "banter"
            }
          ]
        },
        {
          "id": "watch",
          "text": "Давай досмотрим. Я уже переживаю",
          "next": "c9.r3.second.watch",
          "effects": [
            {
              "kind": "set",
              "key": "c9SecondMoment",
              "value": "watch"
            }
          ]
        }
      ]
    },
    "c9.r3.second.hug.route": {
      "id": "c9.r3.second.hug.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.pause.hug"
        }
      ],
      "fallback": "c9.r3.second.hug"
    },
    "c9.r3.pause.hug": {
      "id": "c9.r3.pause.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ставит фильм на паузу, чтобы вы могли отвлечься."
        }
      ],
      "next": "c9.r3.second.hug"
    },
    "c9.r3.second.banter.route": {
      "id": "c9.r3.second.banter.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.pause.banter"
        }
      ],
      "fallback": "c9.r3.second.banter"
    },
    "c9.r3.pause.banter": {
      "id": "c9.r3.pause.banter",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ставит фильм на паузу, чтобы вы могли отвлечься."
        }
      ],
      "next": "c9.r3.second.banter"
    },
    "c9.r3.second.hug": {
      "id": "c9.r3.second.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "иди сюда."
        },
        {
          "speaker": "narrator",
          "text": "Ты придвигаешься, и Влад обнимает тебя."
        },
        {
          "speaker": "heroine",
          "text": "Хорошо устроились."
        },
        {
          "speaker": "vlad",
          "text": "да. претензий к фильму стало меньше."
        },
        {
          "speaker": "narrator",
          "text": "Влад смотрит на тебя и чуть поворачивается, не притягивая ближе."
        },
        {
          "speaker": "vlad",
          "text": "можно я тебя поцелую?"
        }
      ],
      "next": "c9.r3.kiss"
    },
    "c9.r3.kiss": {
      "id": "c9.r3.kiss",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что ответишь?",
      "choices": [
        {
          "id": "yes",
          "text": "Да",
          "next": "c9.r3.kiss.yes",
          "effects": [
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "yes"
            }
          ]
        },
        {
          "id": "her",
          "text": "Я сама хочу",
          "next": "c9.r3.kiss.her.route",
          "effects": [
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "yes"
            }
          ]
        },
        {
          "id": "hug",
          "text": "Давай пока просто обниматься",
          "next": "c9.r3.kiss.hug"
        }
      ]
    },
    "c9.r3.kiss.yes": {
      "id": "c9.r3.kiss.yes",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад коротко целует тебя в губы."
        },
        {
          "speaker": "vlad",
          "text": "рад, что у этого вечера есть паузы."
        }
      ],
      "next": "c9.r3.kiss.past"
    },
    "c9.r3.kiss.her.route": {
      "id": "c9.r3.kiss.her.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.kiss.her.home"
        }
      ],
      "fallback": "c9.r3.kiss.her.courtyard"
    },
    "c9.r3.kiss.her.home": {
      "id": "c9.r3.kiss.her.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "иди ко мне."
        },
        {
          "speaker": "narrator",
          "text": "Ты целуешь его, и Влад улыбается."
        },
        {
          "speaker": "heroine",
          "text": "Хорошо, что поставили на паузу."
        }
      ],
      "next": "c9.r3.kiss.past"
    },
    "c9.r3.kiss.her.courtyard": {
      "id": "c9.r3.kiss.her.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "иди ко мне."
        },
        {
          "speaker": "narrator",
          "text": "Ты целуешь его, и Влад улыбается."
        },
        {
          "speaker": "heroine",
          "text": "Теперь точно пропустили кадр."
        }
      ],
      "next": "c9.r3.kiss.past"
    },
    "c9.r3.kiss.past": {
      "id": "c9.r3.kiss.past",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8LipKiss",
              "equals": "yes"
            }
          ],
          "next": "c9.r3.kiss.repeat"
        }
      ],
      "fallback": "c9.r3.kiss.first"
    },
    "c9.r3.kiss.repeat": {
      "id": "c9.r3.kiss.repeat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "нравится снова быть с тобой вот так рядом."
        }
      ],
      "next": "c9.r3.resume.route"
    },
    "c9.r3.kiss.first": {
      "id": "c9.r3.kiss.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы ещё ненадолго остаётесь рядом, не торопясь возвращаться к экрану."
        }
      ],
      "next": "c9.r3.resume.route"
    },
    "c9.r3.kiss.hug": {
      "id": "c9.r3.kiss.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
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
          "text": "Вы остаётесь в объятии. Влад снова смотрит на экран."
        }
      ],
      "next": "c9.r3.resume.route"
    },
    "c9.r3.second.banter": {
      "id": "c9.r3.second.banter",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "сначала попытался бы договориться."
        },
        {
          "speaker": "heroine",
          "text": "Он же кот."
        },
        {
          "speaker": "vlad",
          "text": "вот поэтому разговор был бы коротким."
        },
        {
          "speaker": "heroine",
          "text": "А потом?"
        },
        {
          "speaker": "vlad",
          "text": "искал бы место, куда можно с ним. я уже на его стороне, да?"
        }
      ],
      "next": "c9.r3.resume.route"
    },
    "c9.r3.second.watch": {
      "id": "c9.r3.second.watch",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда я пока помолчу."
        },
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь к фильму."
        }
      ],
      "next": "c9.r3.resume.route"
    },
    "c9.r3.resume.route": {
      "id": "c9.r3.resume.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.resume.home"
        }
      ],
      "fallback": "c9.r3.resume.courtyard"
    },
    "c9.r3.resume.home": {
      "id": "c9.r3.resume.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "продолжим? хочу проверить, кто кого всё-таки уговорил."
        },
        {
          "speaker": "narrator",
          "text": "Влад проверяет, что фильм идёт, и возвращает пульт на столик."
        }
      ],
      "next": "c9.r3.film.end"
    },
    "c9.r3.resume.courtyard": {
      "id": "c9.r3.resume.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На экране начинается последняя сцена. Вы снова смотрите вперёд."
        }
      ],
      "next": "c9.r3.film.end"
    },
    "c9.r3.film.end": {
      "id": "c9.r3.film.end",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Человек открывает дверь. Кот сам заходит в переноску, но только после того, как туда кладут его маленький плед."
        },
        {
          "speaker": "heroine",
          "text": "Всё это было из-за пледа?"
        },
        {
          "speaker": "vlad",
          "text": "хочется верить, что ещё немного из-за любви."
        },
        {
          "speaker": "heroine",
          "text": "К пледу."
        },
        {
          "speaker": "vlad",
          "text": "сильное чувство. не буду спорить."
        },
        {
          "speaker": "narrator",
          "text": "В последнем кадре чемодан стоит у другого окна, а кот всё так же сидит рядом."
        }
      ],
      "next": "c9.r3.after.screen"
    },
    "c9.r3.film.discuss": {
      "id": "c9.r3.film.discuss",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как тебе развязка?",
      "choices": [
        {
          "id": "together",
          "text": "Он просто хотел ехать вместе",
          "next": "c9.r3.film.together"
        },
        {
          "id": "human",
          "text": "Нет, это человек наконец научился собираться",
          "next": "c9.r3.film.human"
        },
        {
          "id": "both",
          "text": "Мне нравится, что никто никого не победил",
          "next": "c9.r3.film.both"
        }
      ]
    },
    "c9.r3.film.together": {
      "id": "c9.r3.film.together",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "да. а сказать нормально не мог."
        },
        {
          "speaker": "heroine",
          "text": "Кот."
        },
        {
          "speaker": "vlad",
          "text": "прекрасное оправдание."
        }
      ],
      "next": "c9.r3.note"
    },
    "c9.r3.film.human": {
      "id": "c9.r3.film.human",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "согласен. плед в списке теперь навсегда."
        },
        {
          "speaker": "heroine",
          "text": "И немного терпения."
        },
        {
          "speaker": "vlad",
          "text": "его лучше взять с запасом."
        }
      ],
      "next": "c9.r3.note"
    },
    "c9.r3.film.both": {
      "id": "c9.r3.film.both",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "вот поэтому я и хотел это посмотреть."
        },
        {
          "speaker": "heroine",
          "text": "Без злодея?"
        },
        {
          "speaker": "vlad",
          "text": "и без необходимости кого-нибудь перевоспитывать."
        }
      ],
      "next": "c9.r3.note"
    },
    "c9.r3.note": {
      "id": "c9.r3.note",
      "kind": "note",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "questionId": "s2.r3.q9",
      "maxCodePoints": 280,
      "prompt": "Что делает обычный киновечер хорошим именно для тебя?",
      "context": "Фильм закончился, а разговор о нём продолжается.",
      "answerOptions": [
        {
          "id": "preset.1",
          "kind": "preset",
          "text": "Когда можно спорить о героях и смеяться вместе."
        },
        {
          "id": "preset.2",
          "kind": "preset",
          "text": "Когда удобно устроились и никто никуда не торопится."
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
      "next": "c9.r3.closing"
    },
    "c9.r3.closing": {
      "id": "c9.r3.closing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "на следующий показ ты выбираешь. интересно, за кого мы будем спорить там."
        },
        {
          "speaker": "heroine",
          "text": "Сразу готовишься?"
        },
        {
          "speaker": "vlad",
          "text": "да. но победить не обещаю."
        }
      ],
      "next": "c9.r3.ending"
    },
    "c9.r3.ending": {
      "id": "c9.r3.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как закончить этот киновечер?",
      "choices": [
        {
          "id": "talk",
          "text": "Давай ещё обсудим концовку",
          "next": "c9.r3.finish.talk",
          "effects": [
            {
              "kind": "set",
              "key": "c9Close",
              "value": "talk"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "Посидим немного без разговоров",
          "next": "c9.r3.finish.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c9Close",
              "value": "quiet"
            }
          ]
        },
        {
          "id": "credits",
          "text": "Давай собираться. Следующий фильм с меня",
          "next": "c9.r3.finish.credits",
          "effects": [
            {
              "kind": "set",
              "key": "c9Close",
              "value": "credits"
            }
          ]
        }
      ]
    },
    "c9.r3.finish.talk": {
      "id": "c9.r3.finish.talk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я всё ещё считаю, что кот с самого начала хотел поехать."
        },
        {
          "speaker": "heroine",
          "text": "Тогда зачем прятал билет?"
        },
        {
          "speaker": "vlad",
          "text": "не одобрил сборы."
        },
        {
          "speaker": "narrator",
          "text": "Вы придумываете ещё одну версию и смеётесь, когда она окончательно перестаёт совпадать с фильмом."
        }
      ],
      "next": "c9.r3.outro.route"
    },
    "c9.r3.finish.quiet": {
      "id": "c9.r3.finish.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад кивает. Вы остаётесь рядом, пока экран гаснет."
        },
        {
          "speaker": "vlad",
          "text": "мне хорошо."
        },
        {
          "speaker": "narrator",
          "text": "Он говорит это негромко и не пытается заполнить следующую паузу."
        }
      ],
      "next": "c9.r3.outro.route"
    },
    "c9.r3.finish.credits": {
      "id": "c9.r3.finish.credits",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "запомнил."
        },
        {
          "speaker": "heroine",
          "text": "Только не изучай заранее."
        },
        {
          "speaker": "vlad",
          "text": "ладно. хотя бы постараюсь удивляться честно."
        }
      ],
      "next": "c9.r3.outro.route"
    },
    "c9.r3.outro.route": {
      "id": "c9.r3.outro.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.r3.outro.home"
        }
      ],
      "fallback": "c9.r3.outro.courtyard"
    },
    "c9.r3.outro.home": {
      "id": "c9.r3.outro.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад собирает чашки. У телевизора оказывается забытая упаковка."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь всё выглядит как настоящий киновечер."
        },
        {
          "speaker": "heroine",
          "text": "А до этого?"
        },
        {
          "speaker": "vlad",
          "text": "слишком аккуратно."
        },
        {
          "speaker": "narrator",
          "text": "У двери вы возвращаетесь к спору о коте ещё на пару фраз."
        }
      ],
      "next": "c9.r3.card"
    },
    "c9.r3.outro.courtyard": {
      "id": "c9.r3.outro.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы выходите из ряда, пока другие зрители тоже собираются."
        },
        {
          "speaker": "vlad",
          "text": "теперь по дороге буду замечать все чемоданы."
        },
        {
          "speaker": "heroine",
          "text": "И проверять, нет ли рядом кота?"
        },
        {
          "speaker": "vlad",
          "text": "обязательно."
        },
        {
          "speaker": "narrator",
          "text": "Вы идёте к выходу из дворика, продолжая разговор."
        }
      ],
      "next": "c9.r3.card"
    },
    "c9.r3.card": {
      "id": "c9.r3.card",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Close",
              "equals": "talk"
            }
          ],
          "next": "c9.r3.end.talk"
        },
        {
          "all": [
            {
              "key": "c9Close",
              "equals": "quiet"
            }
          ],
          "next": "c9.r3.end.quiet"
        }
      ],
      "fallback": "c9.r3.end.credits"
    },
    "c9.r3.end.talk": {
      "id": "c9.r3.end.talk",
      "kind": "end",
      "cardId": "c9.r3.talk",
      "endingId": "c9.r3.talk"
    },
    "c9.r3.end.quiet": {
      "id": "c9.r3.end.quiet",
      "kind": "end",
      "cardId": "c9.r3.quiet",
      "endingId": "c9.r3.quiet"
    },
    "c9.r3.end.credits": {
      "id": "c9.r3.end.credits",
      "kind": "end",
      "cardId": "c9.r3.credits",
      "endingId": "c9.r3.credits"
    },
    "c9.r3.before.screen": {
      "id": "c9.r3.before.screen",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "До начала фильма остаётся немного времени. Влад переворачивает карточку с его названием."
        },
        {
          "speaker": "vlad",
          "text": "смешно, как иногда описание обещает совсем не то, что потом показывают."
        },
        {
          "speaker": "heroine",
          "text": "С этим будет так же?"
        },
        {
          "speaker": "vlad",
          "text": "надеюсь, хотя бы кот останется."
        },
        {
          "speaker": "heroine",
          "text": "А если окажется, что весь сюжет про чемодан?"
        },
        {
          "speaker": "vlad",
          "text": "тогда я буду защищать чемодан. надо же держать слово про интересный вечер."
        },
        {
          "speaker": "narrator",
          "text": "Он смеётся и возвращает карточку на место."
        },
        {
          "speaker": "heroine",
          "text": "Ты вообще умеешь смотреть фильм без комментариев?"
        },
        {
          "speaker": "vlad",
          "text": "умею. если никто не сидит рядом и не делает очень убедительное лицо."
        },
        {
          "speaker": "heroine",
          "text": "Какое?"
        },
        {
          "speaker": "vlad",
          "text": "“ты тоже это заметил?”"
        },
        {
          "speaker": "narrator",
          "text": "Влад показывает это выражение, затем сам первым не выдерживает серьёзного вида."
        },
        {
          "speaker": "heroine",
          "text": "Всё. Теперь буду узнавать."
        },
        {
          "speaker": "vlad",
          "text": "только не заставляй меня повторять в самый важный момент."
        },
        {
          "speaker": "narrator",
          "text": "Вы ещё раз проверяете, удобно ли стоят напитки."
        },
        {
          "speaker": "vlad",
          "text": "а что тебя обычно цепляет в историях?"
        },
        {
          "speaker": "heroine",
          "text": "Хороший персонаж хотя бы."
        },
        {
          "speaker": "vlad",
          "text": "да. мне хочется понять, зачем он делает свою глупость."
        },
        {
          "speaker": "heroine",
          "text": "Даже если всё равно глупость?"
        },
        {
          "speaker": "vlad",
          "text": "особенно тогда. просто идеального человека интересно смотреть недолго."
        },
        {
          "speaker": "narrator",
          "text": "На экране появляется первый неподвижный кадр: дверь и один оставленный у неё ботинок."
        },
        {
          "speaker": "heroine",
          "text": "Уже похоже, что кто-то торопился."
        },
        {
          "speaker": "vlad",
          "text": "или второй ботинок у кота."
        },
        {
          "speaker": "heroine",
          "text": "Ты его ещё даже не видел."
        },
        {
          "speaker": "vlad",
          "text": "а репутацию уже построил."
        },
        {
          "speaker": "narrator",
          "text": "Влад устраивается на своём месте и возвращает карточку с названием на стол."
        },
        {
          "speaker": "vlad",
          "text": "ладно. сегодня попробую хотя бы иногда давать фильму объяснить себя самому."
        },
        {
          "speaker": "heroine",
          "text": "Это обещание?"
        },
        {
          "speaker": "vlad",
          "text": "предложение, которое мы можем вместе нарушить."
        }
      ],
      "next": "c9.r3.before.screen.choice"
    },
    "c9.r3.before.screen.choice": {
      "id": "c9.r3.before.screen.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как будем смотреть?",
      "choices": [
        {
          "id": "comment",
          "text": "Комментарии разрешены. Особенно смешные",
          "next": "c9.r3.before.screen.comment"
        },
        {
          "id": "pause",
          "text": "Если захочется обсудить — найдём удобный момент",
          "next": "c9.r3.before.screen.pause"
        },
        {
          "id": "watch",
          "text": "Сначала посмотрим. Потом вынесем приговор",
          "next": "c9.r3.before.screen.watch"
        }
      ]
    },
    "c9.r3.before.screen.comment": {
      "id": "c9.r3.before.screen.comment",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда постараюсь различать смешные и просто мои."
        },
        {
          "speaker": "heroine",
          "text": "Можно проверять на мне."
        },
        {
          "speaker": "vlad",
          "text": "опасное предложение, мне нравится."
        },
        {
          "speaker": "narrator",
          "text": "Он поворачивает карточку с названием к тебе."
        },
        {
          "speaker": "heroine",
          "text": "Но сюжет всё-таки не пропускаем."
        },
        {
          "speaker": "vlad",
          "text": "договорились."
        }
      ],
      "next": "c9.r3.setup"
    },
    "c9.r3.before.screen.pause": {
      "id": "c9.r3.before.screen.pause",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "хорошо. не будем перекрикивать экран."
        },
        {
          "speaker": "heroine",
          "text": "И заставлять друг друга срочно всё объяснять."
        },
        {
          "speaker": "vlad",
          "text": "да. иногда достаточно дождаться следующей сцены."
        },
        {
          "speaker": "narrator",
          "text": "Влад кивает и снова смотрит вперёд."
        },
        {
          "speaker": "heroine",
          "text": "Звучит как рабочий план."
        },
        {
          "speaker": "vlad",
          "text": "неожиданно взрослый для вечера с котом."
        }
      ],
      "next": "c9.r3.setup"
    },
    "c9.r3.before.screen.watch": {
      "id": "c9.r3.before.screen.watch",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "принимается. временно убираю уверенные три слова."
        },
        {
          "speaker": "heroine",
          "text": "Оставь на финал."
        },
        {
          "speaker": "vlad",
          "text": "главное, не потратить их на заставку."
        },
        {
          "speaker": "narrator",
          "text": "Он делает серьёзное лицо и демонстративно замолкает."
        },
        {
          "speaker": "heroine",
          "text": "Пока получается."
        },
        {
          "speaker": "vlad",
          "text": "не сбивай."
        }
      ],
      "next": "c9.r3.setup"
    },
    "c9.r3.after.screen": {
      "id": "c9.r3.after.screen",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Начинаются титры. Влад не сразу поднимает взгляд от экрана."
        },
        {
          "speaker": "vlad",
          "text": "мне понравилось, что человек в конце просто подождал."
        },
        {
          "speaker": "heroine",
          "text": "Вместо того чтобы снова прятать переноску?"
        },
        {
          "speaker": "vlad",
          "text": "да. понял, что у кота тоже есть маленькая версия происходящего."
        },
        {
          "speaker": "heroine",
          "text": "Теперь ты совсем на его стороне."
        },
        {
          "speaker": "vlad",
          "text": "я с самого начала был ненадёжным судьёй."
        },
        {
          "speaker": "narrator",
          "text": "На экране ещё раз показывают двор из первой сцены, теперь уже пустой."
        },
        {
          "speaker": "heroine",
          "text": "А это зачем оставили?"
        },
        {
          "speaker": "vlad",
          "text": "может, чтобы было видно, что они всё-таки уехали."
        },
        {
          "speaker": "heroine",
          "text": "Или просто красивый кадр."
        },
        {
          "speaker": "vlad",
          "text": "тоже достаточная причина."
        },
        {
          "speaker": "narrator",
          "text": "Последняя строчка титров сменяется тёмным экраном."
        },
        {
          "speaker": "vlad",
          "text": "люблю, когда после фильма ещё пару минут не хочется включать другой."
        },
        {
          "speaker": "heroine",
          "text": "Нужно спор закончить?"
        },
        {
          "speaker": "vlad",
          "text": "иногда. а иногда просто дать истории немного остаться."
        },
        {
          "speaker": "narrator",
          "text": "Он переводит взгляд на тебя."
        },
        {
          "speaker": "vlad",
          "text": "интересно, ты вообще за какой жанр будешь в следующий раз?"
        },
        {
          "speaker": "heroine",
          "text": "Уже пытаешься подготовиться?"
        },
        {
          "speaker": "vlad",
          "text": "пытаюсь понять, насколько мне страшно."
        },
        {
          "speaker": "heroine",
          "text": "Ужасы выдержишь?"
        },
        {
          "speaker": "vlad",
          "text": "выдержу. но буду очень убедительно объяснять персонажам, куда не надо идти."
        },
        {
          "speaker": "heroine",
          "text": "Они тебя не послушают."
        },
        {
          "speaker": "vlad",
          "text": "вот поэтому жанр и напряжённый."
        },
        {
          "speaker": "narrator",
          "text": "Влад улыбается и наконец отставляет свой напиток."
        }
      ],
      "next": "c9.r3.after.screen.choice"
    },
    "c9.r3.after.screen.choice": {
      "id": "c9.r3.after.screen.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что тебе ближе для следующего раза?",
      "choices": [
        {
          "id": "comedy",
          "text": "Что-нибудь смешное. Мне нравится обсуждать с тобой глупости",
          "next": "c9.r3.after.screen.comedy"
        },
        {
          "id": "surprise",
          "text": "Я выберу и пока не скажу",
          "next": "c9.r3.after.screen.surprise"
        },
        {
          "id": "different",
          "text": "А можно в следующий раз вообще без фильма?",
          "next": "c9.r3.after.screen.different"
        }
      ]
    },
    "c9.r3.after.screen.comedy": {
      "id": "c9.r3.after.screen.comedy",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда постараюсь выбрать глупости хорошего качества."
        },
        {
          "speaker": "heroine",
          "text": "В этот раз справился."
        },
        {
          "speaker": "vlad",
          "text": "приятно. даже кот не подвёл."
        },
        {
          "speaker": "narrator",
          "text": "Он смотрит на погасший экран ещё раз."
        },
        {
          "speaker": "heroine",
          "text": "Только без второй части прямо сегодня."
        },
        {
          "speaker": "vlad",
          "text": "согласен. эту мы ещё не закончили обсуждать."
        }
      ],
      "next": "c9.r3.film.discuss"
    },
    "c9.r3.after.screen.surprise": {
      "id": "c9.r3.after.screen.surprise",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "хорошо. приду без подготовки."
        },
        {
          "speaker": "heroine",
          "text": "И без трейлера."
        },
        {
          "speaker": "vlad",
          "text": "вот это уже серьёзное условие."
        },
        {
          "speaker": "heroine",
          "text": "Справишься?"
        },
        {
          "speaker": "vlad",
          "text": "попробую довериться интересной компании."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается и не задаёт следующего вопроса о названии."
        }
      ],
      "next": "c9.r3.film.discuss"
    },
    "c9.r3.after.screen.different": {
      "id": "c9.r3.after.screen.different",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "конечно. найдём другое занятие."
        },
        {
          "speaker": "heroine",
          "text": "Ты быстро отпустил свою идею."
        },
        {
          "speaker": "vlad",
          "text": "я ведь хотел вечер с тобой, а не победу телевизора."
        },
        {
          "speaker": "narrator",
          "text": "Влад пожимает плечами, будто это самая простая часть договорённости."
        },
        {
          "speaker": "heroine",
          "text": "Тогда придумаем."
        },
        {
          "speaker": "vlad",
          "text": "да. и мне уже интересно."
        }
      ],
      "next": "c9.r3.film.discuss"
    }
  }
};
