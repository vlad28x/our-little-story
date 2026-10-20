import type { Chapter } from '../../engine/types';
// R3: outputs/SEASON_02_R3_SCRIPT_*.md
export const chapter10:Chapter={
  "id": 10,
  "contentVersion": 12,
  "scriptRevision": 3,
  "title": "Оставим свет?",
  "entry": "c10.r3.entry",
  "nodes": {
    "c10.r3.entry": {
      "id": "c10.r3.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад убирает телефон, когда замечает тебя."
        },
        {
          "speaker": "vlad",
          "text": "сегодня без хитрого приглашения. просто хотел увидеться."
        },
        {
          "speaker": "heroine",
          "text": "А программа?"
        },
        {
          "speaker": "vlad",
          "text": "побыть вместе. детали можем испортить по ходу."
        },
        {
          "speaker": "heroine",
          "text": "Смелый план."
        },
        {
          "speaker": "vlad",
          "text": "проверенный. лучшие вечера у нас всё равно немного не по плану."
        }
      ],
      "next": "c10.r3.place"
    },
    "c10.r3.place": {
      "id": "c10.r3.place",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Где проведём вечер?",
      "choices": [
        {
          "id": "home",
          "text": "Пойдём к тебе",
          "next": "c10.r3.arrival.home",
          "effects": [
            {
              "kind": "set",
              "key": "c10Place",
              "value": "home"
            },
            {
              "kind": "set",
              "key": "c10Venue",
              "value": "home"
            },
            {
              "kind": "set",
              "key": "c10LipKiss",
              "value": "no"
            },
            {
              "kind": "set",
              "key": "c10EveningKiss",
              "value": "no"
            }
          ]
        },
        {
          "id": "terrace",
          "text": "Посидим на террасе",
          "next": "c10.r3.arrival.terrace",
          "effects": [
            {
              "kind": "set",
              "key": "c10Place",
              "value": "terrace"
            },
            {
              "kind": "set",
              "key": "c10Venue",
              "value": "terrace"
            },
            {
              "kind": "set",
              "key": "c10LipKiss",
              "value": "no"
            },
            {
              "kind": "set",
              "key": "c10EveningKiss",
              "value": "no"
            }
          ]
        }
      ]
    },
    "c10.r3.arrival.home": {
      "id": "c10.r3.arrival.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "На столе лежит книга с чистой закладкой. Влад снимает с соседнего стула забытое полотенце."
        },
        {
          "speaker": "vlad",
          "text": "вот. теперь место свободно окончательно."
        },
        {
          "speaker": "heroine",
          "text": "Сколько вещей успел убрать до моего прихода?"
        },
        {
          "speaker": "vlad",
          "text": "достаточно, чтобы больше не отвечать на этот вопрос."
        },
        {
          "speaker": "vlad",
          "text": "помоги выбрать. чай сразу или сначала разберёмся с тем, что я назвал “что-нибудь к чаю”?"
        }
      ],
      "next": "c10.r3.prepare.home"
    },
    "c10.r3.arrival.terrace": {
      "id": "c10.r3.arrival.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы садитесь за стол у края террасы. Влад кладёт рядом книгу, чтобы она не мешала чашкам."
        },
        {
          "speaker": "heroine",
          "text": "Ты пришёл читать?"
        },
        {
          "speaker": "vlad",
          "text": "сначала хотел. потом решил, что мне больше хочется разговаривать с тобой."
        },
        {
          "speaker": "heroine",
          "text": "Книга не обидится?"
        },
        {
          "speaker": "vlad",
          "text": "у неё есть закладка. подождёт."
        },
        {
          "speaker": "vlad",
          "text": "возьмём что-нибудь к чаю вместе или каждый своё?"
        }
      ],
      "next": "c10.r3.prepare.terrace"
    },
    "c10.r3.prepare.home": {
      "id": "c10.r3.prepare.home",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "С чего начнём?",
      "choices": [
        {
          "id": "plate",
          "text": "Давай вместе соберём тарелку",
          "next": "c10.r3.prepare.plate"
        },
        {
          "id": "cups",
          "text": "Ты выбирай, а я поставлю чашки",
          "next": "c10.r3.prepare.cups"
        },
        {
          "id": "sit",
          "text": "Садись. Сегодня можно без подготовки",
          "next": "c10.r3.prepare.sit"
        }
      ]
    },
    "c10.r3.prepare.terrace": {
      "id": "c10.r3.prepare.terrace",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Выберем вместе?",
      "choices": [
        {
          "id": "share",
          "text": "Давай одну тарелку на двоих",
          "next": "c10.r3.prepare.share"
        },
        {
          "id": "choose",
          "text": "Выбирай ты. Хочу посмотреть, что предложишь",
          "next": "c10.r3.prepare.choose"
        },
        {
          "id": "tea",
          "text": "Мне пока хватит чая",
          "next": "c10.r3.prepare.tea"
        }
      ]
    },
    "c10.r3.prepare.plate": {
      "id": "c10.r3.prepare.plate",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад приносит печенье и фрукты. Ты раскладываешь их на тарелке, пока он ищет маленькие ложки."
        },
        {
          "speaker": "heroine",
          "text": "Опять ложки?"
        },
        {
          "speaker": "vlad",
          "text": "они живут интересной жизнью, мне не всё рассказывают."
        },
        {
          "speaker": "narrator",
          "text": "Одна находится рядом с чайником. Влад молча показывает её тебе."
        },
        {
          "speaker": "heroine",
          "text": "Серьёзное расследование."
        },
        {
          "speaker": "vlad",
          "text": "главное, не зря начали."
        }
      ],
      "next": "c10.r3.morning.preference.intro"
    },
    "c10.r3.prepare.cups": {
      "id": "c10.r3.prepare.cups",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Ты ставишь чашки, Влад приносит тарелку."
        },
        {
          "speaker": "vlad",
          "text": "удобно. вдвоём всё получается как-то без суеты."
        },
        {
          "speaker": "heroine",
          "text": "Потому что ты перестал всё переставлять."
        },
        {
          "speaker": "vlad",
          "text": "стараюсь расти."
        }
      ],
      "next": "c10.r3.morning.preference.intro"
    },
    "c10.r3.prepare.sit": {
      "id": "c10.r3.prepare.sit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад останавливается на полпути к кухне и возвращается."
        },
        {
          "speaker": "vlad",
          "text": "знаешь, мне нравится."
        },
        {
          "speaker": "heroine",
          "text": "Что именно?"
        },
        {
          "speaker": "vlad",
          "text": "что можно не придумывать, чем занять каждую минуту."
        },
        {
          "speaker": "narrator",
          "text": "Он садится; чайник можно поставить позже."
        }
      ],
      "next": "c10.r3.morning.preference.intro"
    },
    "c10.r3.prepare.share": {
      "id": "c10.r3.prepare.share",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы выбираете небольшую общую тарелку."
        },
        {
          "speaker": "vlad",
          "text": "оставим место для спора о последнем кусочке."
        },
        {
          "speaker": "heroine",
          "text": "Опять заранее готовишься."
        },
        {
          "speaker": "vlad",
          "text": "уже знаю, что с тобой интересно."
        }
      ],
      "next": "c10.r3.morning.preference.intro"
    },
    "c10.r3.prepare.choose": {
      "id": "c10.r3.prepare.choose",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "тогда что-нибудь простое. я сегодня не хочу производить впечатление названием десерта."
        },
        {
          "speaker": "heroine",
          "text": "Чем будешь?"
        },
        {
          "speaker": "vlad",
          "text": "пока рассчитываю на разговор."
        }
      ],
      "next": "c10.r3.morning.preference.intro"
    },
    "c10.r3.prepare.tea": {
      "id": "c10.r3.prepare.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Он закрывает меню и поворачивается к тебе."
        },
        {
          "speaker": "heroine",
          "text": "Ты так быстро согласился."
        },
        {
          "speaker": "vlad",
          "text": "мне не обязательно всё время усложнять."
        }
      ],
      "next": "c10.r3.morning.preference.intro"
    },
    "c10.r3.morning.preference.intro": {
      "id": "c10.r3.morning.preference.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "давай ещё один раунд нашей игры. идеальное утро без дел — ты сразу идёшь завтракать или сначала долго приходишь в себя?"
        }
      ],
      "next": "c10.r3.morning.preference"
    },
    "c10.r3.morning.preference": {
      "id": "c10.r3.morning.preference",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Какое утро тебе ближе?",
      "choices": [
        {
          "id": "breakfast",
          "text": "Сначала завтрак. Потом всё остальное",
          "next": "c10.r3.preference.breakfast",
          "effects": [
            {
              "kind": "set",
              "key": "c10MorningPreference",
              "value": "breakfast"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "Сначала тишина и что-нибудь тёплое",
          "next": "c10.r3.preference.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c10MorningPreference",
              "value": "quiet"
            }
          ]
        },
        {
          "id": "company",
          "text": "Зависит от компании",
          "next": "c10.r3.preference.company",
          "effects": [
            {
              "kind": "set",
              "key": "c10MorningPreference",
              "value": "company"
            }
          ]
        }
      ]
    },
    "c10.r3.preference.breakfast": {
      "id": "c10.r3.preference.breakfast",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "разумно. я без него могу очень задумчиво смотреть на пустую чашку."
        },
        {
          "speaker": "heroine",
          "text": "Главное — заметить, что она пустая."
        },
        {
          "speaker": "vlad",
          "text": "да. желательно до второго глотка."
        }
      ],
      "next": "c10.r3.preference.after"
    },
    "c10.r3.preference.quiet": {
      "id": "c10.r3.preference.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "понимаю. могу принести чашку и некоторое время не комментировать происходящее."
        },
        {
          "speaker": "heroine",
          "text": "Некоторое?"
        },
        {
          "speaker": "vlad",
          "text": "начну с реалистичных обещаний."
        }
      ],
      "next": "c10.r3.preference.after"
    },
    "c10.r3.preference.company": {
      "id": "c10.r3.preference.company",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад улыбается, но не отвечает сразу."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь я буду стараться быть хорошей компанией не только вечером."
        },
        {
          "speaker": "heroine",
          "text": "Ты сначала с вечером закончи."
        },
        {
          "speaker": "vlad",
          "text": "справедливо. возвращаюсь к текущему."
        }
      ],
      "next": "c10.r3.preference.after"
    },
    "c10.r3.preference.after": {
      "id": "c10.r3.preference.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "у меня чаще всего первый вариант. но иногда хочется просто посидеть у окна."
        },
        {
          "speaker": "heroine",
          "text": "Без телефона?"
        },
        {
          "speaker": "vlad",
          "text": "попробую. если рядом будет кому напомнить, что чай остывает."
        },
        {
          "speaker": "vlad",
          "text": "эта закладка всё ещё пустая. можно оставить на ней что-нибудь от наших встреч."
        },
        {
          "speaker": "heroine",
          "text": "Большую мудрую мысль?"
        },
        {
          "speaker": "vlad",
          "text": "нет. большую я точно буду придумывать до утра."
        }
      ],
      "next": "c10.r3.book"
    },
    "c10.r3.memory": {
      "id": "c10.r3.memory",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "На столе чистая закладка. Что оставишь на ней от этих встреч?",
      "choices": [
        {
          "id": "pause",
          "text": "Тихую паузу",
          "next": "c10.r3.memory.pause",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "pause"
            }
          ]
        },
        {
          "id": "laugh",
          "text": "Наши нелепые шутки",
          "next": "c10.r3.memory.laugh",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "laugh"
            }
          ]
        },
        {
          "id": "initiative",
          "text": "Мои неожиданные повороты",
          "next": "c10.r3.memory.initiative",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "initiative"
            }
          ]
        },
        {
          "id": "none",
          "text": "Пусть пока останется чистой",
          "next": "c10.r3.memory.none",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c10.r3.memory.pause": {
      "id": "c10.r3.memory.pause",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Тихую паузу."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, что с тобой можно замолчать и не начинать срочно спасать разговор."
        },
        {
          "speaker": "narrator",
          "text": "На закладке появляется маленькая чашка с паром."
        }
      ],
      "next": "c10.r3.light.intro"
    },
    "c10.r3.memory.laugh": {
      "id": "c10.r3.memory.laugh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Наши нелепые шутки."
        },
        {
          "speaker": "vlad",
          "text": "теперь буду считать, что тебе нравится мой юмор."
        },
        {
          "speaker": "heroine",
          "text": "Не все шутки."
        },
        {
          "speaker": "vlad",
          "text": "всё равно приятно."
        },
        {
          "speaker": "narrator",
          "text": "На закладке появляется кривоватая улыбающаяся звезда."
        }
      ],
      "next": "c10.r3.light.intro"
    },
    "c10.r3.memory.initiative": {
      "id": "c10.r3.memory.initiative",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Мои неожиданные повороты."
        },
        {
          "speaker": "vlad",
          "text": "нравится, когда ты сама меня удивляешь."
        },
        {
          "speaker": "heroine",
          "text": "Продолжать?"
        },
        {
          "speaker": "vlad",
          "text": "очень прошу."
        },
        {
          "speaker": "narrator",
          "text": "На закладке появляется стрелка с маленьким завитком."
        }
      ],
      "next": "c10.r3.light.intro"
    },
    "c10.r3.memory.none": {
      "id": "c10.r3.memory.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Пусть пока останется чистой."
        },
        {
          "speaker": "vlad",
          "text": "давай. можно просто оставить её на память об этом вечере."
        },
        {
          "speaker": "narrator",
          "text": "Влад кладёт закладку рядом с чашками."
        }
      ],
      "next": "c10.r3.light.intro"
    },
    "c10.r3.light.intro": {
      "id": "c10.r3.light.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад показывает на лампу."
        },
        {
          "speaker": "vlad",
          "text": "оставим так или сделаем свет мягче?"
        }
      ],
      "next": "c10.r3.light"
    },
    "c10.r3.light": {
      "id": "c10.r3.light",
      "kind": "minigame",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "game": "evening-light",
      "next": "c10.r3.aside"
    },
    "c10.r3.aside": {
      "id": "c10.r3.aside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Ну, мы можем ещё подсказать…"
        },
        {
          "speaker": "angel",
          "text": "По-моему, сегодня они и так справляются."
        }
      ],
      "next": "c10.r3.aside.reply",
      "presentation": "adviser-aside"
    },
    "c10.r3.aside.reply": {
      "id": "c10.r3.aside.reply",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что скажешь советчикам про себя?",
      "choices": [
        {
          "id": "self",
          "text": "Всё. Дальше я разберусь",
          "next": "c10.r3.aside.self",
          "effects": [
            {
              "kind": "set",
              "key": "c10Aside",
              "value": "self"
            }
          ]
        },
        {
          "id": "last",
          "text": "Ладно, один последний совет",
          "next": "c10.r3.aside.last",
          "effects": [
            {
              "kind": "set",
              "key": "c10Aside",
              "value": "last"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "Просто убрать подсказки",
          "next": "c10.r3.aside.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c10Aside",
              "value": "quiet"
            }
          ]
        }
      ]
    },
    "c10.r3.aside.self": {
      "id": "c10.r3.aside.self",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "speaker": "heroine-thought",
          "text": "Всё. Дальше я разберусь."
        },
        {
          "speaker": "devil",
          "text": "Мне нравится, как это прозвучало."
        },
        {
          "speaker": "angel",
          "text": "Пойдём."
        },
        {
          "speaker": "narrator",
          "text": "Советчики уходят за край. Больше в этом вечере они не появляются."
        }
      ],
      "next": "c10.r3.talk.intro",
      "presentation": "adviser-aside"
    },
    "c10.r3.aside.last": {
      "id": "c10.r3.aside.last",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "speaker": "heroine-thought",
          "text": "Ладно, один последний совет."
        },
        {
          "speaker": "angel",
          "text": "Скажи ему, чего хочешь сейчас."
        },
        {
          "speaker": "devil",
          "text": "И дай ответить. Нам тоже уже пора."
        },
        {
          "speaker": "narrator",
          "text": "Они складывают свои закладки и исчезают за краем кадра."
        }
      ],
      "next": "c10.r3.talk.intro",
      "presentation": "adviser-aside"
    },
    "c10.r3.aside.quiet": {
      "id": "c10.r3.aside.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Ты возвращаешь внимание к Владу. Нимб и рожки исчезают с края кадра."
        }
      ],
      "next": "c10.r3.talk.intro",
      "presentation": "adviser-aside"
    },
    "c10.r3.talk.intro": {
      "id": "c10.r3.talk.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад замечает, что ты улыбаешься."
        },
        {
          "speaker": "vlad",
          "text": "что?"
        },
        {
          "speaker": "heroine",
          "text": "Ничего. Продолжай."
        },
        {
          "speaker": "vlad",
          "text": "подозрительно, но приятно."
        },
        {
          "speaker": "vlad",
          "text": "знаешь, я иногда слишком стараюсь придумать хорошую реплику."
        },
        {
          "speaker": "heroine",
          "text": "Иногда?"
        },
        {
          "speaker": "vlad",
          "text": "ладно. чаще, чем стоит. а сказать обычно хочется простое."
        },
        {
          "speaker": "narrator",
          "text": "Он отставляет чашку, чтобы не держать её между вами."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится проводить с тобой время. даже когда мы просто решаем, куда деть ложки."
        }
      ],
      "next": "c10.r3.talk"
    },
    "c10.r3.talk": {
      "id": "c10.r3.talk",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как ответишь?",
      "choices": [
        {
          "id": "kind",
          "text": "Мне нравится и такой ты",
          "next": "c10.r3.talk.kind",
          "effects": [
            {
              "kind": "set",
              "key": "c10Talk",
              "value": "kind"
            }
          ]
        },
        {
          "id": "plain",
          "text": "Тогда сегодня без заготовок",
          "next": "c10.r3.talk.plain",
          "effects": [
            {
              "kind": "set",
              "key": "c10Talk",
              "value": "plain"
            }
          ]
        },
        {
          "id": "funny",
          "text": "И всё-таки расскажи ещё что-нибудь смешное",
          "next": "c10.r3.talk.funny",
          "effects": [
            {
              "kind": "set",
              "key": "c10Talk",
              "value": "funny"
            }
          ]
        }
      ]
    },
    "c10.r3.talk.kind": {
      "id": "c10.r3.talk.kind",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Мне нравится и такой ты."
        },
        {
          "speaker": "narrator",
          "text": "Влад улыбается уже без попытки придумать продолжение."
        },
        {
          "speaker": "vlad",
          "text": "спасибо. вот сейчас правда приятно."
        },
        {
          "speaker": "heroine",
          "text": "Можно иногда просто принимать."
        },
        {
          "speaker": "vlad",
          "text": "учусь."
        }
      ],
      "next": "c10.r3.moment.intro"
    },
    "c10.r3.talk.plain": {
      "id": "c10.r3.talk.plain",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "договорились. только если я вдруг замолчу, это не значит, что мне скучно."
        },
        {
          "speaker": "heroine",
          "text": "Буду считать, что думаешь."
        },
        {
          "speaker": "vlad",
          "text": "очень щедро с твоей стороны."
        }
      ],
      "next": "c10.r3.moment.intro"
    },
    "c10.r3.talk.funny": {
      "id": "c10.r3.talk.funny",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "однажды я так старался приготовить аккуратный завтрак, что остыло вообще всё."
        },
        {
          "speaker": "heroine",
          "text": "Зато красиво?"
        },
        {
          "speaker": "vlad",
          "text": "первые три секунды. потом я начал спасать."
        },
        {
          "speaker": "heroine",
          "text": "И чему научился?"
        },
        {
          "speaker": "vlad",
          "text": "подавать сразу. остальное можно обсудить с полным ртом, но лучше не надо."
        }
      ],
      "next": "c10.r3.moment.intro"
    },
    "c10.r3.moment.intro": {
      "id": "c10.r3.moment.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "За разговором проходит ещё немного времени. Окружающий шум становится тише."
        },
        {
          "speaker": "vlad",
          "text": "хочешь ближе? могу тебя обнять. или просто ещё поговорим."
        }
      ],
      "next": "c10.r3.moment"
    },
    "c10.r3.moment": {
      "id": "c10.r3.moment",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как хочется сейчас?",
      "choices": [
        {
          "id": "hug",
          "text": "Обними меня",
          "next": "c10.r3.moment.hug",
          "effects": [
            {
              "kind": "set",
              "key": "c10EveningMoment",
              "value": "hug"
            }
          ]
        },
        {
          "id": "kiss",
          "text": "Хочу тебя поцеловать",
          "next": "c10.r3.evening.kiss.her",
          "effects": [
            {
              "kind": "set",
              "key": "c10EveningMoment",
              "value": "kiss"
            },
            {
              "kind": "set",
              "key": "c10LipKiss",
              "value": "yes"
            },
            {
              "kind": "set",
              "key": "c10EveningKiss",
              "value": "yes"
            }
          ]
        },
        {
          "id": "talk",
          "text": "Давай ещё поговорим",
          "next": "c10.r3.moment.talk",
          "effects": [
            {
              "kind": "set",
              "key": "c10EveningMoment",
              "value": "talk"
            }
          ]
        }
      ]
    },
    "c10.r3.moment.hug": {
      "id": "c10.r3.moment.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Ты придвигаешься, и Влад обнимает тебя."
        },
        {
          "speaker": "vlad",
          "text": "вот так?"
        },
        {
          "speaker": "heroine",
          "text": "Да."
        },
        {
          "speaker": "narrator",
          "text": "Некоторое время вы остаётесь рядом."
        },
        {
          "speaker": "vlad",
          "text": "я бы ещё тебя поцеловал. можно?"
        }
      ],
      "next": "c10.r3.evening.kiss"
    },
    "c10.r3.evening.kiss": {
      "id": "c10.r3.evening.kiss",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как ответишь?",
      "choices": [
        {
          "id": "yes",
          "text": "Да",
          "next": "c10.r3.evening.kiss.ask",
          "effects": [
            {
              "kind": "set",
              "key": "c10LipKiss",
              "value": "yes"
            },
            {
              "kind": "set",
              "key": "c10EveningKiss",
              "value": "yes"
            }
          ]
        },
        {
          "id": "her",
          "text": "Я сама",
          "next": "c10.r3.evening.kiss.her",
          "effects": [
            {
              "kind": "set",
              "key": "c10LipKiss",
              "value": "yes"
            },
            {
              "kind": "set",
              "key": "c10EveningKiss",
              "value": "yes"
            }
          ]
        },
        {
          "id": "hug",
          "text": "Пока просто обнимемся",
          "next": "c10.r3.evening.hug"
        }
      ]
    },
    "c10.r3.evening.kiss.ask": {
      "id": "c10.r3.evening.kiss.ask",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
        }
      ],
      "next": "c10.r3.evening.kiss.past"
    },
    "c10.r3.evening.kiss.her": {
      "id": "c10.r3.evening.kiss.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Ты коротко целуешь его в губы."
        }
      ],
      "next": "c10.r3.evening.kiss.past"
    },
    "c10.r3.evening.kiss.past": {
      "id": "c10.r3.evening.kiss.past",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8LipKiss",
              "equals": "yes"
            }
          ],
          "next": "c10.r3.evening.kiss.repeat"
        },
        {
          "all": [
            {
              "key": "c9LipKiss",
              "equals": "yes"
            }
          ],
          "next": "c10.r3.evening.kiss.repeat"
        }
      ],
      "fallback": "c10.r3.evening.kiss.first"
    },
    "c10.r3.evening.kiss.repeat": {
      "id": "c10.r3.evening.kiss.repeat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "мне нравится, когда ты вот так решаешь."
        }
      ],
      "next": "c10.r3.refill.route"
    },
    "c10.r3.evening.kiss.first": {
      "id": "c10.r3.evening.kiss.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "я рад, что это случилось сейчас."
        }
      ],
      "next": "c10.r3.refill.route"
    },
    "c10.r3.evening.hug": {
      "id": "c10.r3.evening.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы остаётесь в объятии."
        }
      ],
      "next": "c10.r3.refill.route"
    },
    "c10.r3.moment.talk": {
      "id": "c10.r3.moment.talk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "давай. у меня есть вопрос, на который я сам пока не ответил."
        },
        {
          "speaker": "heroine",
          "text": "Какой?"
        },
        {
          "speaker": "vlad",
          "text": "почему домой обычно пора именно тогда, когда уже удобно устроился."
        },
        {
          "speaker": "heroine",
          "text": "Потому что ты поздно начинаешь устраиваться."
        },
        {
          "speaker": "vlad",
          "text": "хорошая версия. неудобная для меня, но хорошая."
        },
        {
          "speaker": "narrator",
          "text": "Влад рассказывает, как однажды ушёл не в ту сторону после долгого разговора."
        },
        {
          "speaker": "heroine",
          "text": "И долго шёл?"
        },
        {
          "speaker": "vlad",
          "text": "до первого незнакомого магазина."
        },
        {
          "speaker": "heroine",
          "text": "Зато новая прогулка."
        },
        {
          "speaker": "vlad",
          "text": "да. но лучше в следующий раз с компанией."
        }
      ],
      "next": "c10.r3.refill.route"
    },
    "c10.r3.refill.route": {
      "id": "c10.r3.refill.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Venue",
              "equals": "home"
            }
          ],
          "next": "c10.r3.refill.home"
        }
      ],
      "fallback": "c10.r3.refill.terrace"
    },
    "c10.r3.refill.home": {
      "id": "c10.r3.refill.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад ставит чайник на кухне."
        },
        {
          "speaker": "vlad",
          "text": "ещё по половине чашки? а то у меня есть ощущение, что мы только устроились."
        }
      ],
      "next": "c10.r3.refill"
    },
    "c10.r3.refill.terrace": {
      "id": "c10.r3.refill.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "На соседнем столе меняют свечу. Влад смотрит на вашу чашку, затем снова на тебя."
        },
        {
          "speaker": "vlad",
          "text": "ещё немного чая или просто посидим?"
        }
      ],
      "next": "c10.r3.refill"
    },
    "c10.r3.refill": {
      "id": "c10.r3.refill",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Есть время ещё на маленькую паузу",
      "choices": [
        {
          "id": "tea",
          "text": "Ещё немного чая",
          "next": "c10.r3.refill.tea.route"
        },
        {
          "id": "water",
          "text": "Давай воды",
          "next": "c10.r3.refill.water.route"
        },
        {
          "id": "sit",
          "text": "Пока просто посидим",
          "next": "c10.r3.refill.sit.route"
        }
      ]
    },
    "c10.r3.refill.tea.route": {
      "id": "c10.r3.refill.tea.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Venue",
              "equals": "home"
            }
          ],
          "next": "c10.r3.refill.tea.home"
        }
      ],
      "fallback": "c10.r3.refill.tea.terrace"
    },
    "c10.r3.refill.tea.home": {
      "id": "c10.r3.refill.tea.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад подливает чай."
        },
        {
          "speaker": "vlad",
          "text": "приятно, когда продолжение вечера помещается в такую маленькую просьбу."
        },
        {
          "speaker": "heroine",
          "text": "Ты опять придумал красивую фразу."
        },
        {
          "speaker": "vlad",
          "text": "эта случайно."
        }
      ],
      "next": "c10.r3.window.home"
    },
    "c10.r3.refill.tea.terrace": {
      "id": "c10.r3.refill.tea.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы заказываете ещё чай."
        },
        {
          "speaker": "vlad",
          "text": "приятно, когда продолжение вечера помещается в такую маленькую просьбу."
        },
        {
          "speaker": "heroine",
          "text": "Ты опять придумал красивую фразу."
        },
        {
          "speaker": "vlad",
          "text": "эта случайно."
        }
      ],
      "next": "c10.r3.window.terrace"
    },
    "c10.r3.refill.water.route": {
      "id": "c10.r3.refill.water.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Venue",
              "equals": "home"
            }
          ],
          "next": "c10.r3.refill.water.home"
        }
      ],
      "fallback": "c10.r3.refill.water.terrace"
    },
    "c10.r3.refill.water.home": {
      "id": "c10.r3.refill.water.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад приносит воду."
        },
        {
          "speaker": "heroine",
          "text": "Спасибо."
        },
        {
          "speaker": "vlad",
          "text": "пожалуйста."
        },
        {
          "speaker": "narrator",
          "text": "На этот раз он действительно не добавляет шутку."
        }
      ],
      "next": "c10.r3.window.home"
    },
    "c10.r3.refill.water.terrace": {
      "id": "c10.r3.refill.water.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад просит воды."
        },
        {
          "speaker": "heroine",
          "text": "Спасибо."
        },
        {
          "speaker": "vlad",
          "text": "пожалуйста."
        },
        {
          "speaker": "narrator",
          "text": "На этот раз он действительно не добавляет шутку."
        }
      ],
      "next": "c10.r3.window.terrace"
    },
    "c10.r3.refill.sit.route": {
      "id": "c10.r3.refill.sit.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Venue",
              "equals": "home"
            }
          ],
          "next": "c10.r3.refill.sit.home"
        }
      ],
      "fallback": "c10.r3.refill.sit.terrace"
    },
    "c10.r3.refill.sit.home": {
      "id": "c10.r3.refill.sit.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы ещё немного остаётесь рядом. Разговору больше не приходится бороться со спешкой."
        }
      ],
      "next": "c10.r3.window.home"
    },
    "c10.r3.refill.sit.terrace": {
      "id": "c10.r3.refill.sit.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы ещё немного остаётесь рядом. Разговору больше не приходится бороться со спешкой."
        }
      ],
      "next": "c10.r3.window.terrace"
    },
    "c10.r3.note": {
      "id": "c10.r3.note",
      "kind": "note",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "questionId": "s2.r3.q10",
      "maxCodePoints": 280,
      "prompt": "Какую маленькую привычку из этих вечеров хотелось бы сохранить?",
      "context": "У этих вечеров уже появились свои маленькие привычки.",
      "answerOptions": [
        {
          "id": "preset.1",
          "kind": "preset",
          "text": "Находить время друг для друга без большого повода."
        },
        {
          "id": "preset.2",
          "kind": "preset",
          "text": "Начинать следующее утро с чая или кофе вдвоём."
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
      "next": "c10.r3.offer.route"
    },
    "c10.r3.offer.route": {
      "id": "c10.r3.offer.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Venue",
              "equals": "home"
            }
          ],
          "next": "c10.r3.offer.home"
        }
      ],
      "fallback": "c10.r3.offer.terrace"
    },
    "c10.r3.offer.home": {
      "id": "c10.r3.offer.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад смотрит на время и снова убирает телефон."
        },
        {
          "speaker": "vlad",
          "text": "я могу тебя проводить. а если захочешь остаться — буду рад."
        }
      ],
      "next": "c10.r3.ending.home"
    },
    "c10.r3.offer.terrace": {
      "id": "c10.r3.offer.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад смотрит на время и снова убирает телефон."
        },
        {
          "speaker": "vlad",
          "text": "можем собираться. а можем поехать ко мне и ещё побыть вместе. как тебе хочется?"
        }
      ],
      "next": "c10.r3.ending.terrace"
    },
    "c10.r3.ending.home": {
      "id": "c10.r3.ending.home",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как хочется продолжить?",
      "choices": [
        {
          "id": "goodnight",
          "text": "Мне пора. Проводи меня",
          "next": "c10.r3.finish.goodnight.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "goodnight"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "goodnight"
            }
          ]
        },
        {
          "id": "stay",
          "text": "Ещё немного посидим",
          "next": "c10.r3.finish.stay.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "stay"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "stay"
            }
          ]
        },
        {
          "id": "overnight",
          "text": "Я хочу остаться до утра",
          "next": "c10.r3.night.intro",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "overnight"
            }
          ]
        },
        {
          "id": "private",
          "text": "Хочу продолжить этот вечер вдвоём",
          "next": "c10.r3.private",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "private"
            }
          ]
        }
      ]
    },
    "c10.r3.ending.terrace": {
      "id": "c10.r3.ending.terrace",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как хочется продолжить?",
      "choices": [
        {
          "id": "goodnight",
          "text": "Давай сегодня по домам",
          "next": "c10.r3.finish.goodnight.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "goodnight"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "goodnight"
            }
          ]
        },
        {
          "id": "stay",
          "text": "Останемся здесь ещё ненадолго",
          "next": "c10.r3.finish.stay.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "stay"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "stay"
            }
          ]
        },
        {
          "id": "overnight",
          "text": "Поедем к тебе. Хочу остаться до утра",
          "next": "c10.r3.move.offer",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "overnight"
            }
          ]
        },
        {
          "id": "private",
          "text": "Поедем к тебе, а там решим",
          "next": "c10.r3.move.offer",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "private"
            }
          ]
        }
      ]
    },
    "c10.r3.move.offer": {
      "id": "c10.r3.move.offer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "тогда поедем. а дома можно ещё раз решить, как хочется провести оставшееся время."
        }
      ],
      "next": "c10.r3.move"
    },
    "c10.r3.move": {
      "id": "c10.r3.move",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Поедем или останемся здесь?",
      "choices": [
        {
          "id": "home",
          "text": "Да, поехали",
          "next": "c10.r3.move.home",
          "effects": [
            {
              "kind": "set",
              "key": "c10Venue",
              "value": "home"
            },
            {
              "kind": "set",
              "key": "c10Move",
              "value": "home"
            }
          ]
        },
        {
          "id": "stay",
          "text": "Передумала. Останемся здесь",
          "next": "c10.r3.finish.stay.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "stay"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "stay"
            },
            {
              "kind": "set",
              "key": "c10Move",
              "value": "stay"
            }
          ]
        },
        {
          "id": "goodnight",
          "text": "Лучше проводи меня",
          "next": "c10.r3.finish.goodnight.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "goodnight"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "goodnight"
            },
            {
              "kind": "set",
              "key": "c10Move",
              "value": "stay"
            }
          ]
        }
      ]
    },
    "c10.r3.move.home": {
      "id": "c10.r3.move.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы забираете вещи и уходите с террасы. Позже Влад открывает дверь квартиры."
        },
        {
          "speaker": "vlad",
          "text": "проходи. вот теперь точно можно не спешить."
        }
      ],
      "next": "c10.r3.move.intent"
    },
    "c10.r3.move.intent": {
      "id": "c10.r3.move.intent",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Intent",
              "equals": "overnight"
            }
          ],
          "next": "c10.r3.night.intro"
        }
      ],
      "fallback": "c10.r3.private"
    },
    "c10.r3.private": {
      "id": "c10.r3.private",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "В квартире остаётся мягкий свет. Влад оставляет вещи у двери и подходит к столу."
        },
        {
          "speaker": "vlad",
          "text": "можем не торопиться. я никуда не собираюсь."
        }
      ],
      "next": "c10.r3.private.choice"
    },
    "c10.r3.private.choice": {
      "id": "c10.r3.private.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как тебе хочется?",
      "choices": [
        {
          "id": "overnight",
          "text": "Я тоже останусь до утра",
          "next": "c10.r3.night.intro",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "overnight"
            }
          ]
        },
        {
          "id": "private",
          "text": "Ещё побудем вдвоём. Утро пока не загадываю",
          "next": "c10.r3.private.fade",
          "effects": [
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "private"
            }
          ]
        },
        {
          "id": "stay",
          "text": "Давай просто посидим",
          "next": "c10.r3.finish.stay.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "stay"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "stay"
            }
          ]
        },
        {
          "id": "goodnight",
          "text": "Я передумала. Хочу домой",
          "next": "c10.r3.finish.goodnight.route",
          "effects": [
            {
              "kind": "set",
              "key": "c10Intent",
              "value": "goodnight"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "goodnight"
            }
          ]
        }
      ]
    },
    "c10.r3.private.fade": {
      "id": "c10.r3.private.fade",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад остаётся рядом. Разговор становится тише, и этот вечер получает ещё немного времени."
        }
      ],
      "next": "c10.r3.end.private",
      "fadeOnLastLine": true
    },
    "c10.r3.finish.stay.route": {
      "id": "c10.r3.finish.stay.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Venue",
              "equals": "home"
            }
          ],
          "next": "c10.r3.finish.stay.home"
        }
      ],
      "fallback": "c10.r3.finish.stay.terrace"
    },
    "c10.r3.finish.stay.home": {
      "id": "c10.r3.finish.stay.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад садится рядом. Несколько минут вы рассматриваете книгу с закладкой."
        },
        {
          "speaker": "vlad",
          "text": "можно было придумать что-нибудь грандиозное. а мне нравится вот это."
        },
        {
          "speaker": "heroine",
          "text": "Что именно?"
        },
        {
          "speaker": "vlad",
          "text": "что мы до сих пор разговариваем."
        },
        {
          "speaker": "narrator",
          "text": "Позже вы собираетесь, не торопя последние фразы."
        }
      ],
      "next": "c10.r3.end.stay"
    },
    "c10.r3.finish.stay.terrace": {
      "id": "c10.r3.finish.stay.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы остаётесь за столиком, пока во дворе становится немного тише."
        },
        {
          "speaker": "vlad",
          "text": "ещё одна маленькая пауза."
        },
        {
          "speaker": "heroine",
          "text": "Ты любишь их продлевать."
        },
        {
          "speaker": "vlad",
          "text": "когда есть с кем."
        },
        {
          "speaker": "narrator",
          "text": "Позже вы уходите вместе. Этот вечер остаётся законченным."
        }
      ],
      "next": "c10.r3.end.stay"
    },
    "c10.r3.finish.goodnight.route": {
      "id": "c10.r3.finish.goodnight.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Venue",
              "equals": "home"
            }
          ],
          "next": "c10.r3.finish.goodnight.home"
        }
      ],
      "fallback": "c10.r3.finish.goodnight.terrace"
    },
    "c10.r3.finish.goodnight.home": {
      "id": "c10.r3.finish.goodnight.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад помогает собрать вещи и провожает тебя к двери."
        },
        {
          "speaker": "vlad",
          "text": "рад, что ты сегодня была здесь."
        },
        {
          "speaker": "heroine",
          "text": "Даже с твоими ложками?"
        },
        {
          "speaker": "vlad",
          "text": "особенно. они теперь часть истории."
        },
        {
          "speaker": "narrator",
          "text": "Вы выходите вместе, чтобы он проводил тебя."
        }
      ],
      "next": "c10.r3.end.goodnight"
    },
    "c10.r3.finish.goodnight.terrace": {
      "id": "c10.r3.finish.goodnight.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Вы забираете вещи. Влад ждёт, пока ты удобно устроишь сумку."
        },
        {
          "speaker": "vlad",
          "text": "хороший получился вечер."
        },
        {
          "speaker": "heroine",
          "text": "Без большого плана."
        },
        {
          "speaker": "vlad",
          "text": "зато с тобой."
        },
        {
          "speaker": "narrator",
          "text": "Вы уходите с террасы и ещё немного разговариваете по дороге."
        }
      ],
      "next": "c10.r3.end.goodnight"
    },
    "c10.r3.night.intro": {
      "id": "c10.r3.night.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "тогда оставайся. полотенце принесу, а с завтраком разберёмся утром."
        },
        {
          "speaker": "heroine",
          "text": "По рецепту?"
        },
        {
          "speaker": "vlad",
          "text": "после прошлого опыта — обязательно."
        }
      ],
      "next": "c10.r3.night"
    },
    "c10.r3.night": {
      "id": "c10.r3.night",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Как устроимся?",
      "choices": [
        {
          "id": "hug",
          "text": "Хочу обняться и спокойно закончить вечер",
          "next": "c10.r3.night.hug",
          "effects": [
            {
              "kind": "set",
              "key": "c10Night",
              "value": "hug"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "overnight"
            }
          ]
        },
        {
          "id": "kiss",
          "text": "Поцелуй меня, а потом никуда не спешим",
          "next": "c10.r3.night.kiss",
          "effects": [
            {
              "kind": "set",
              "key": "c10Night",
              "value": "kiss"
            },
            {
              "kind": "set",
              "key": "c10LipKiss",
              "value": "yes"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "overnight"
            }
          ]
        },
        {
          "id": "talk",
          "text": "Давай устроимся и ещё немного поговорим",
          "next": "c10.r3.night.talk",
          "effects": [
            {
              "kind": "set",
              "key": "c10Night",
              "value": "talk"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "overnight"
            }
          ]
        }
      ]
    },
    "c10.r3.night.hug": {
      "id": "c10.r3.night.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Ты подходишь, и Влад обнимает тебя."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. сегодня можно просто так."
        },
        {
          "speaker": "narrator",
          "text": "Позже в квартире становится тихо. Повествование оставляет вечер здесь."
        }
      ],
      "next": "c10.r3.morning.intro",
      "fadeOnLastLine": true
    },
    "c10.r3.night.talk": {
      "id": "c10.r3.night.talk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад приносит воду и ставит стаканы так, чтобы до них было удобно дотянуться."
        },
        {
          "speaker": "vlad",
          "text": "расскажешь, о чём сегодня не успели?"
        },
        {
          "speaker": "heroine",
          "text": "С чего начать?"
        },
        {
          "speaker": "vlad",
          "text": "с чего хочется."
        },
        {
          "speaker": "narrator",
          "text": "Разговор продолжается. Позже история мягко переходит к утру."
        }
      ],
      "next": "c10.r3.morning.intro",
      "fadeOnLastLine": true
    },
    "c10.r3.night.kiss": {
      "id": "c10.r3.night.kiss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад коротко целует тебя. Затем вы возвращаетесь к разговору, который уже не нужно заканчивать у двери."
        }
      ],
      "next": "c10.r3.night.kiss.route"
    },
    "c10.r3.night.kiss.route": {
      "id": "c10.r3.night.kiss.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8LipKiss",
              "equals": "yes"
            }
          ],
          "next": "c10.r3.night.repeat"
        },
        {
          "all": [
            {
              "key": "c9LipKiss",
              "equals": "yes"
            }
          ],
          "next": "c10.r3.night.repeat"
        },
        {
          "all": [
            {
              "key": "c10EveningKiss",
              "equals": "yes"
            }
          ],
          "next": "c10.r3.night.repeat"
        }
      ],
      "fallback": "c10.r3.night.first"
    },
    "c10.r3.night.first": {
      "id": "c10.r3.night.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "хорошо, что мы не спешили."
        },
        {
          "speaker": "narrator",
          "text": "Свет в кухне гаснет позже. Ночь остаётся за кадром."
        }
      ],
      "next": "c10.r3.morning.intro",
      "fadeOnLastLine": true
    },
    "c10.r3.night.repeat": {
      "id": "c10.r3.night.repeat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "мне нравится этот вечер."
        },
        {
          "speaker": "narrator",
          "text": "Свет в кухне гаснет позже. Ночь остаётся за кадром."
        }
      ],
      "next": "c10.r3.morning.intro",
      "fadeOnLastLine": true
    },
    "c10.r3.morning.intro": {
      "id": "c10.r3.morning.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Утром на кухне светло. Влад стоит у стола с двумя чашками."
        },
        {
          "speaker": "vlad",
          "text": "доброе утро. решил сначала сделать чай, а потом уже пытаться быть обаятельным."
        },
        {
          "speaker": "heroine",
          "text": "И как успехи?"
        },
        {
          "speaker": "vlad",
          "text": "чай готов. по остальному жду обратной связи."
        }
      ],
      "next": "c10.r3.morning.preference.route"
    },
    "c10.r3.morning.preference.route": {
      "id": "c10.r3.morning.preference.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10MorningPreference",
              "equals": "breakfast"
            }
          ],
          "next": "c10.r3.morning.callback.breakfast"
        },
        {
          "all": [
            {
              "key": "c10MorningPreference",
              "equals": "quiet"
            }
          ],
          "next": "c10.r3.morning.callback.quiet"
        }
      ],
      "fallback": "c10.r3.morning.callback.company"
    },
    "c10.r3.morning.callback.breakfast": {
      "id": "c10.r3.morning.callback.breakfast",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "помню, ты за завтрак. сейчас всё будет."
        }
      ],
      "next": "c10.r3.morning.story.route"
    },
    "c10.r3.morning.callback.quiet": {
      "id": "c10.r3.morning.callback.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "помню про тихое утро. сначала чашка."
        }
      ],
      "next": "c10.r3.morning.story.route"
    },
    "c10.r3.morning.callback.company": {
      "id": "c10.r3.morning.callback.company",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "постараюсь и утром быть хорошей компанией."
        }
      ],
      "next": "c10.r3.morning.story.route"
    },
    "c10.r3.morning.story.route": {
      "id": "c10.r3.morning.story.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Talk",
              "equals": "funny"
            }
          ],
          "next": "c10.r3.morning.story"
        }
      ],
      "fallback": "c10.r3.morning.choice"
    },
    "c10.r3.morning.story": {
      "id": "c10.r3.morning.story",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "сегодня подаю сразу. видишь, выводы сделал."
        }
      ],
      "next": "c10.r3.morning.choice"
    },
    "c10.r3.morning.choice": {
      "id": "c10.r3.morning.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "prompt": "С чего начнём утро?",
      "choices": [
        {
          "id": "hug",
          "text": "Подойти и обнять",
          "next": "c10.r3.morning.hug",
          "effects": [
            {
              "kind": "set",
              "key": "c10Morning",
              "value": "hug"
            }
          ]
        },
        {
          "id": "breakfast",
          "text": "Спасти завтрак вместе",
          "next": "c10.r3.morning.breakfast",
          "effects": [
            {
              "kind": "set",
              "key": "c10Morning",
              "value": "breakfast"
            }
          ]
        },
        {
          "id": "coffee",
          "text": "Для начала мне нужен кофе",
          "next": "c10.r3.morning.coffee",
          "effects": [
            {
              "kind": "set",
              "key": "c10Morning",
              "value": "coffee"
            }
          ]
        }
      ]
    },
    "c10.r3.morning.hug": {
      "id": "c10.r3.morning.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты подходишь и обнимаешь Влада. Он откладывает лопатку и отвечает на объятие."
        },
        {
          "speaker": "vlad",
          "text": "я вообще-то уже хотел тебя позвать."
        },
        {
          "speaker": "heroine",
          "text": "На завтрак?"
        },
        {
          "speaker": "vlad",
          "text": "сначала вот так.",
          "emotion": "warm"
        },
        {
          "speaker": "narrator",
          "text": "Вы ещё немного стоите обнявшись. Потом Влад поворачивается проверить сковородку."
        }
      ],
      "next": "c10.r3.end.overnight"
    },
    "c10.r3.morning.breakfast": {
      "id": "c10.r3.morning.breakfast",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай сюда лопатку. Будем спасать завтрак вместе."
        },
        {
          "speaker": "vlad",
          "text": "а я тогда с тарелками."
        },
        {
          "speaker": "narrator",
          "text": "Ты занимаешь место у плиты. Влад ставит рядом две тарелки; к одной прилипла маленькая бумажная наклейка. Он замечает её раньше, чем успевает подать тебе."
        },
        {
          "speaker": "heroine",
          "text": "Красиво подаёшь."
        },
        {
          "speaker": "vlad",
          "text": "стараюсь произвести впечатление с самого утра."
        },
        {
          "speaker": "narrator",
          "text": "Ты показываешь, куда поставить чашки. Через минуту вы садитесь завтракать."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, что ты здесь."
        }
      ],
      "next": "c10.r3.end.overnight"
    },
    "c10.r3.morning.coffee": {
      "id": "c10.r3.morning.coffee",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.kitchen.morning",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Для начала мне нужен кофе."
        },
        {
          "speaker": "vlad",
          "text": "сделаю."
        },
        {
          "speaker": "narrator",
          "text": "Влад ставит перед тобой чашку и садится рядом, не начиная новый разговор."
        },
        {
          "speaker": "heroine",
          "text": "Спасибо. Вот так хорошо."
        },
        {
          "speaker": "vlad",
          "text": "тогда посидим. завтрак сегодня никуда не торопится."
        }
      ],
      "next": "c10.r3.end.overnight"
    },
    "c10.r3.end.goodnight": {
      "id": "c10.r3.end.goodnight",
      "kind": "end",
      "cardId": "c10.goodnight",
      "endingId": "c10.goodnight"
    },
    "c10.r3.end.stay": {
      "id": "c10.r3.end.stay",
      "kind": "end",
      "cardId": "c10.stay",
      "endingId": "c10.stay"
    },
    "c10.r3.end.private": {
      "id": "c10.r3.end.private",
      "kind": "end",
      "cardId": "c10.private",
      "endingId": "c10.private"
    },
    "c10.r3.end.overnight": {
      "id": "c10.r3.end.overnight",
      "kind": "end",
      "cardId": "c10.overnight",
      "endingId": "c10.overnight"
    },
    "c10.r3.book": {
      "id": "c10.r3.book",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Влад раскрывает книгу на странице с маленькой иллюстрацией окна."
        },
        {
          "speaker": "vlad",
          "text": "вот здесь я каждый раз забываю, что хотел прочитать дальше."
        },
        {
          "speaker": "heroine",
          "text": "Из-за картинки?"
        },
        {
          "speaker": "vlad",
          "text": "да. там ничего особенного, просто окно и человек с чашкой."
        },
        {
          "speaker": "heroine",
          "text": "Сегодня у тебя почти такая же сцена."
        },
        {
          "speaker": "vlad",
          "text": "только собеседница интереснее, чем в книге."
        },
        {
          "speaker": "heroine",
          "text": "Ты уже всё-таки начал делать комплименты предметам?"
        },
        {
          "speaker": "vlad",
          "text": "пока только честно оцениваю состав вечера."
        },
        {
          "speaker": "narrator",
          "text": "Он поворачивает книгу так, чтобы тебе было удобно посмотреть."
        },
        {
          "speaker": "vlad",
          "text": "я люблю такие мелочи. они не пытаются объяснить вообще всё сразу."
        },
        {
          "speaker": "heroine",
          "text": "А что тогда остаётся?"
        },
        {
          "speaker": "vlad",
          "text": "место додумать. почему он у окна, кого ждёт, что у него в чашке."
        },
        {
          "speaker": "heroine",
          "text": "Может, просто остыл чай."
        },
        {
          "speaker": "vlad",
          "text": "тоже очень человеческая история."
        },
        {
          "speaker": "narrator",
          "text": "Влад закрывает книгу пальцем на нужной странице, не захлопывая её."
        },
        {
          "speaker": "vlad",
          "text": "иногда хочется оставить хорошее место, чтобы вернуться к нему чуть позже."
        },
        {
          "speaker": "heroine",
          "text": "Как в городе?"
        },
        {
          "speaker": "vlad",
          "text": "да. и в разговоре тоже."
        },
        {
          "speaker": "heroine",
          "text": "Ты сейчас предлагаешь недоговорить?"
        },
        {
          "speaker": "vlad",
          "text": "не обязательно. просто не думать, что сегодня надо успеть абсолютно всё."
        },
        {
          "speaker": "narrator",
          "text": "Он вытаскивает чистую закладку и кладёт её рядом."
        },
        {
          "speaker": "vlad",
          "text": "например, следующему вечеру можно оставить одно совсем маленькое дело."
        },
        {
          "speaker": "heroine",
          "text": "И какое?"
        },
        {
          "speaker": "vlad",
          "text": "ещё не знаю. хочу выбрать вместе, когда до него дойдём."
        },
        {
          "speaker": "heroine",
          "text": "Удивительно мало подготовки."
        },
        {
          "speaker": "vlad",
          "text": "стараюсь не забывать, как нам хорошо бывает без большого сценария."
        },
        {
          "speaker": "narrator",
          "text": "Несколько секунд он смотрит на рисунок, затем снова на тебя."
        },
        {
          "speaker": "vlad",
          "text": "вот. это я и хотел показать. не мудрость, просто понравившуюся страницу."
        }
      ],
      "next": "c10.r3.book.choice"
    },
    "c10.r3.book.choice": {
      "id": "c10.r3.book.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "Что тебе хочется запомнить от этой страницы?",
      "choices": [
        {
          "id": "place",
          "text": "Место, куда хочется вернуться",
          "next": "c10.r3.book.place"
        },
        {
          "id": "ordinary",
          "text": "Что обычный момент тоже может быть хорошим",
          "next": "c10.r3.book.ordinary"
        },
        {
          "id": "open",
          "text": "Не хочу всё объяснять. Просто оставим её здесь",
          "next": "c10.r3.book.open"
        }
      ]
    },
    "c10.r3.book.place": {
      "id": "c10.r3.book.place",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "мне тоже. необязательно даже далеко ехать."
        },
        {
          "speaker": "heroine",
          "text": "Иногда достаточно того же столика."
        },
        {
          "speaker": "vlad",
          "text": "или кухни, где уже знаешь, в каком шкафу чашки."
        },
        {
          "speaker": "narrator",
          "text": "Он возвращает книгу на стол."
        },
        {
          "speaker": "heroine",
          "text": "А страницу отметим?"
        },
        {
          "speaker": "vlad",
          "text": "сейчас как раз выберем, чем."
        }
      ],
      "next": "c10.r3.memory"
    },
    "c10.r3.book.ordinary": {
      "id": "c10.r3.book.ordinary",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "да. мне нравится, что это не надо отдельно заслуживать."
        },
        {
          "speaker": "heroine",
          "text": "Можно просто сесть и выпить чай."
        },
        {
          "speaker": "vlad",
          "text": "и иногда не испортить всё попыткой красиво подвести итог."
        },
        {
          "speaker": "heroine",
          "text": "Вот сейчас остановись."
        },
        {
          "speaker": "narrator",
          "text": "Влад улыбается и закрывает рот."
        },
        {
          "speaker": "vlad",
          "text": "понял."
        }
      ],
      "next": "c10.r3.memory"
    },
    "c10.r3.book.open": {
      "id": "c10.r3.book.open",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "хорошо. иногда картинке достаточно понравиться."
        },
        {
          "speaker": "narrator",
          "text": "Он не просит придумать правильный ответ."
        },
        {
          "speaker": "heroine",
          "text": "Ты умеешь не задавать следующий вопрос?"
        },
        {
          "speaker": "vlad",
          "text": "оказывается, да."
        },
        {
          "speaker": "narrator",
          "text": "Книга остаётся между чашками, а чистая закладка — рядом."
        },
        {
          "speaker": "vlad",
          "text": "вот и договорились."
        }
      ],
      "next": "c10.r3.memory"
    },
    "c10.r3.window.home": {
      "id": "c10.r3.window.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "В квартире слышно, как на кухне остывает чайник. Влад ненадолго подходит к окну."
        },
        {
          "speaker": "vlad",
          "text": "иди посмотри. там в доме напротив на каждом этаже разный свет."
        },
        {
          "speaker": "narrator",
          "text": "Ты подходишь к окну. Влад освобождает место, не меняя выбранную дистанцию."
        },
        {
          "speaker": "heroine",
          "text": "А ты раньше не замечал?"
        },
        {
          "speaker": "vlad",
          "text": "замечал. просто одному обычно не рассказываешь про чужие лампы."
        },
        {
          "speaker": "heroine",
          "text": "Можно рассказывать коту."
        },
        {
          "speaker": "vlad",
          "text": "он бы решил, что я наконец собрался его кормить."
        },
        {
          "speaker": "narrator",
          "text": "На соседней улице медленно проезжает машина, и отражение проходит по стеклу."
        },
        {
          "speaker": "vlad",
          "text": "нравится, что ты сегодня здесь."
        },
        {
          "speaker": "heroine",
          "text": "Ты уже говорил."
        },
        {
          "speaker": "vlad",
          "text": "знаю. в этот раз без новой красивой формулировки."
        },
        {
          "speaker": "narrator",
          "text": "Он остаётся у окна ещё на несколько секунд."
        },
        {
          "speaker": "heroine",
          "text": "Мне нравится, что можно никуда специально не идти."
        },
        {
          "speaker": "vlad",
          "text": "мне тоже. хотя я всё ещё могу показать тебе очень интересный шкаф с чашками."
        },
        {
          "speaker": "heroine",
          "text": "Оставь что-нибудь следующему вечеру."
        },
        {
          "speaker": "vlad",
          "text": "договорились. нельзя раскрывать все сильные стороны сразу."
        },
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь к столу, где осталась книга."
        },
        {
          "speaker": "vlad",
          "text": "чай ещё есть. а время мы сейчас спокойно выберем."
        }
      ],
      "next": "c10.r3.window.home.choice"
    },
    "c10.r3.window.home.choice": {
      "id": "c10.r3.window.home.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "О чём ещё поговорим?",
      "choices": [
        {
          "id": "day",
          "text": "Как прошёл твой день до нашей встречи?",
          "next": "c10.r3.window.home.day"
        },
        {
          "id": "small",
          "text": "Расскажи что-нибудь маленькое, что тебя сегодня порадовало",
          "next": "c10.r3.window.home.small"
        },
        {
          "id": "here",
          "text": "Ни о чём. Давай ещё побудем здесь",
          "next": "c10.r3.window.home.here"
        }
      ]
    },
    "c10.r3.window.home.day": {
      "id": "c10.r3.window.home.day",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "вполне обычно. а потом я начал ждать вечера и стал проверять время чаще, чем нужно."
        },
        {
          "speaker": "heroine",
          "text": "Но ты же знал, во сколько встретимся."
        },
        {
          "speaker": "vlad",
          "text": "да. именно поэтому проверка была совершенно бесполезной."
        },
        {
          "speaker": "heroine",
          "text": "И всё равно проверял?"
        },
        {
          "speaker": "vlad",
          "text": "конечно. иногда я последовательный."
        },
        {
          "speaker": "narrator",
          "text": "Он смеётся и убирает телефон подальше."
        }
      ],
      "next": "c10.r3.note"
    },
    "c10.r3.window.home.small": {
      "id": "c10.r3.window.home.small",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "по дороге попался человек с собакой, которая несла очень большую палку."
        },
        {
          "speaker": "heroine",
          "text": "Насколько большую?"
        },
        {
          "speaker": "vlad",
          "text": "настолько, что им пришлось дважды договариваться с дверью."
        },
        {
          "speaker": "heroine",
          "text": "Кто победил?"
        },
        {
          "speaker": "vlad",
          "text": "собака. но дверь держалась достойно."
        },
        {
          "speaker": "narrator",
          "text": "Влад показывает размер палки руками и сам улыбается."
        }
      ],
      "next": "c10.r3.note"
    },
    "c10.r3.window.home.here": {
      "id": "c10.r3.window.home.here",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Он возвращается на своё место и не ищет новую тему."
        },
        {
          "speaker": "heroine",
          "text": "Вот теперь даже телефон не нужен."
        },
        {
          "speaker": "vlad",
          "text": "согласен. сейчас всё интересное уже здесь."
        },
        {
          "speaker": "narrator",
          "text": "Следующая пауза получается спокойной."
        },
        {
          "speaker": "vlad",
          "text": "хорошо сидим."
        }
      ],
      "next": "c10.r3.note"
    },
    "c10.r3.window.terrace": {
      "id": "c10.r3.window.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Со стороны улицы загорается вывеска, и на стол на секунду ложится её отражение."
        },
        {
          "speaker": "vlad",
          "text": "мы уже довольно долго здесь сидим. а я заметил её только сейчас."
        },
        {
          "speaker": "heroine",
          "text": "Отвлекался?"
        },
        {
          "speaker": "vlad",
          "text": "да. совершенно безуспешно пытался сосредоточиться на архитектуре."
        },
        {
          "speaker": "heroine",
          "text": "Не мучайся."
        },
        {
          "speaker": "narrator",
          "text": "Влад поворачивается обратно к тебе и улыбается."
        },
        {
          "speaker": "vlad",
          "text": "нравится, что мы сегодня никуда не торопились."
        },
        {
          "speaker": "heroine",
          "text": "Ты уже говорил."
        },
        {
          "speaker": "vlad",
          "text": "знаю. в этот раз без новой красивой формулировки."
        },
        {
          "speaker": "narrator",
          "text": "На дорожке мимо террасы проходят люди; ваш стол остаётся в стороне от суеты."
        },
        {
          "speaker": "heroine",
          "text": "Хорошее место выбрали."
        },
        {
          "speaker": "vlad",
          "text": "да. теперь есть ещё одно, куда хочется вернуться."
        },
        {
          "speaker": "heroine",
          "text": "Только не обязательно повторять всё по минутам."
        },
        {
          "speaker": "vlad",
          "text": "согласен. можно даже заказать другой чай."
        },
        {
          "speaker": "narrator",
          "text": "Он поворачивает чашку за ручку, пока вспоминает, как начинался вечер."
        },
        {
          "speaker": "vlad",
          "text": "интересно, сколько ещё таких маленьких мест мы найдём."
        },
        {
          "speaker": "heroine",
          "text": "Начнём с того, чтобы иногда замечать их по дороге."
        },
        {
          "speaker": "vlad",
          "text": "хорошая идея. и совсем не требует подробного плана."
        }
      ],
      "next": "c10.r3.window.terrace.choice"
    },
    "c10.r3.window.terrace.choice": {
      "id": "c10.r3.window.terrace.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "prompt": "О чём ещё поговорим?",
      "choices": [
        {
          "id": "day",
          "text": "Как прошёл твой день до нашей встречи?",
          "next": "c10.r3.window.terrace.day"
        },
        {
          "id": "small",
          "text": "Расскажи что-нибудь маленькое, что тебя сегодня порадовало",
          "next": "c10.r3.window.terrace.small"
        },
        {
          "id": "here",
          "text": "Ни о чём. Давай ещё побудем здесь",
          "next": "c10.r3.window.terrace.here"
        }
      ]
    },
    "c10.r3.window.terrace.day": {
      "id": "c10.r3.window.terrace.day",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "вполне обычно. а потом я начал ждать вечера и стал проверять время чаще, чем нужно."
        },
        {
          "speaker": "heroine",
          "text": "Но ты же знал, во сколько встретимся."
        },
        {
          "speaker": "vlad",
          "text": "да. именно поэтому проверка была совершенно бесполезной."
        },
        {
          "speaker": "heroine",
          "text": "И всё равно проверял?"
        },
        {
          "speaker": "vlad",
          "text": "конечно. иногда я последовательный."
        },
        {
          "speaker": "narrator",
          "text": "Он смеётся и убирает телефон подальше."
        }
      ],
      "next": "c10.r3.note"
    },
    "c10.r3.window.terrace.small": {
      "id": "c10.r3.window.terrace.small",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "по дороге попался человек с собакой, которая несла очень большую палку."
        },
        {
          "speaker": "heroine",
          "text": "Насколько большую?"
        },
        {
          "speaker": "vlad",
          "text": "настолько, что им пришлось дважды договариваться с дверью."
        },
        {
          "speaker": "heroine",
          "text": "Кто победил?"
        },
        {
          "speaker": "vlad",
          "text": "собака. но дверь держалась достойно."
        },
        {
          "speaker": "narrator",
          "text": "Влад показывает размер палки руками и сам улыбается."
        }
      ],
      "next": "c10.r3.note"
    },
    "c10.r3.window.terrace.here": {
      "id": "c10.r3.window.terrace.here",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.warm",
        "variants": [
          {
            "when": [
              {
                "key": "c10Venue",
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
          "text": "Он возвращается к своей чашке и не ищет новую тему."
        },
        {
          "speaker": "heroine",
          "text": "Вот теперь даже телефон не нужен."
        },
        {
          "speaker": "vlad",
          "text": "согласен. сейчас всё интересное уже здесь."
        },
        {
          "speaker": "narrator",
          "text": "Следующая пауза получается спокойной."
        },
        {
          "speaker": "vlad",
          "text": "хорошо сидим."
        }
      ],
      "next": "c10.r3.note"
    }
  }
};
