import type { Chapter } from '../../engine/types';
// Approved local draft: outputs/CHAPTER_09_COURTYARD_DRAFT_2026_11_14.md, revised November 15.
export const chapter9:Chapter={
  "id": 9,
  "contentVersion": 18,
  "scriptRevision": 5,
  "title": "С крышей разберёмся",
  "entry": "c9.courtyard.entry",
  "nodes": {
    "c9.courtyard.entry": {
      "id": "c9.courtyard.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ждёт у кирпичной арки. В руках у него маленький бумажный пакет. Из дворика доносится скрежет стульев.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Place",
              "value": "courtyard"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "привет. я правильно пришёл? кот с афиши пока не встретил."
        },
        {
          "speaker": "heroine",
          "text": "У него подготовка к главной роли. Пойдём, я покажу."
        },
        {
          "speaker": "narrator",
          "text": "Ты проводишь Влада мимо кассы. Над рядами стульев натянуты гирлянды, у стены белеет экран. Сбоку стоят столики под широким навесом."
        },
        {
          "speaker": "heroine",
          "text": "Я выбрала этот дворик, потому что отсюда не видно дороги. Будто зашла в чей-то большой двор."
        },
        {
          "speaker": "vlad",
          "text": "и сразу села смотреть телевизор хозяевам."
        },
        {
          "speaker": "heroine",
          "text": "Билеты я всё-таки купила."
        },
        {
          "speaker": "vlad",
          "text": "тогда официально. угощение к просмотру."
        },
        {
          "speaker": "narrator",
          "text": "Он приоткрывает пакет. Внутри пять круглых печений, одно чуть надломлено."
        }
      ],
      "next": "c9.courtyard.hoodieRoute"
    },
    "c9.courtyard.hoodieRoute": {
      "id": "c9.courtyard.hoodieRoute",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Hoodie",
              "equals": "borrowed"
            }
          ],
          "next": "c9.courtyard.hoodie"
        }
      ],
      "fallback": "c9.courtyard.camera"
    },
    "c9.courtyard.hoodie": {
      "id": "c9.courtyard.hoodie",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "И твой карман с бонусной салфеткой тоже приехал."
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь сложенное худи. Влад берёт его и перебрасывает через руку.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Hoodie",
              "value": "returned"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "салфетка цела?"
        },
        {
          "speaker": "heroine",
          "text": "Уехала раньше. Отдельным рейсом."
        },
        {
          "speaker": "vlad",
          "text": "ладно. одежду принимаю без комплектации."
        }
      ],
      "next": "c9.courtyard.camera"
    },
    "c9.courtyard.camera": {
      "id": "c9.courtyard.camera",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "До начала ещё светло. Ты достаёшь аппарат. Влад придерживает край пакета, чтобы тот не попал перед объективом."
        },
        {
          "speaker": "heroine",
          "text": "Девять осталось. Хочу сегодня сдать аппарат в проявку. Тут как раз есть на что потратить."
        },
        {
          "speaker": "vlad",
          "text": "вон на третьем стуле уже сидит чужая сумка. тоже пришла заранее."
        }
      ],
      "next": "c9.courtyard.frameChoice"
    },
    "c9.courtyard.frameChoice": {
      "id": "c9.courtyard.frameChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "prompt": "Какой кадр оставишь с этого вечера?",
      "choices": [
        {
          "id": "vlad",
          "text": "Сниму тебя с этим пакетом",
          "next": "c9.courtyard.frameVlad",
          "effects": [
            {
              "kind": "set",
              "key": "c9Frame",
              "value": "vlad"
            }
          ]
        },
        {
          "id": "seats",
          "text": "Давай наши места до начала фильма",
          "next": "c9.courtyard.frameSeats",
          "effects": [
            {
              "kind": "set",
              "key": "c9Frame",
              "value": "seats"
            }
          ]
        },
        {
          "id": "yard",
          "text": "Хочу поймать весь дворик",
          "next": "c9.courtyard.frameYard",
          "effects": [
            {
              "kind": "set",
              "key": "c9Frame",
              "value": "yard"
            }
          ]
        }
      ]
    },
    "c9.courtyard.frameVlad": {
      "id": "c9.courtyard.frameVlad",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Не прячь печенье. Оно тоже приглашено."
        },
        {
          "speaker": "narrator",
          "text": "Влад держит пакет на уровне груди. За плечом видны арка и ещё пустой край экрана."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь точно официальный состав."
        },
        {
          "speaker": "narrator",
          "text": "Ты нажимаешь кнопку. Он опускает пакет и заглядывает внутрь: всё ли пережило съёмку.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c9.courtyard.cameraEnd"
    },
    "c9.courtyard.frameSeats": {
      "id": "c9.courtyard.frameSeats",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Положи пакет между стульями. Пока у нас всё целое и никто не шуршит."
        },
        {
          "speaker": "narrator",
          "text": "Два соседних стула стоят чуть неровно. Влад поправляет один, но ты поднимаешь ладонь."
        },
        {
          "speaker": "heroine",
          "text": "Оставь. Так видно, что мы уже пришли."
        },
        {
          "speaker": "narrator",
          "text": "Ты снимаешь два стула с пакетом между ними. В верхнем углу остаётся верёвка с бумажным номером ряда.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c9.courtyard.cameraEnd"
    },
    "c9.courtyard.frameYard": {
      "id": "c9.courtyard.frameYard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Подержи секунду сумку. Отсюда арка вся помещается."
        },
        {
          "speaker": "narrator",
          "text": "Ты снимаешь дворик от входа: ряды стульев, край навеса и белый экран между стенами.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Film",
              "value": "key"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "меня, если что, искать возле печенья."
        },
        {
          "speaker": "narrator",
          "text": "Ты опускаешь аппарат. Влад уже занялся разворачиванием пакета."
        }
      ],
      "next": "c9.courtyard.cameraEnd"
    },
    "c9.courtyard.cameraEnd": {
      "id": "c9.courtyard.cameraEnd",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Пока дворик заполняется, вы доснимаете оставшиеся восемь: номер ряда, гирлянду, плющ на кирпиче, кассовое окошко. Аппарат ещё несколько раз переходит из рук в руки."
        },
        {
          "speaker": "narrator",
          "text": "Последним Влад снимает тень решётки на светлой стене. Колёсико проворачивается до конца. Ты убираешь аппарат в сумку.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Film",
              "value": "empty"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Всё. Теперь уже точно не подглядишь."
        },
        {
          "speaker": "vlad",
          "text": "придётся доверять фотографам."
        }
      ],
      "next": "c9.courtyard.seats"
    },
    "c9.courtyard.seats": {
      "id": "c9.courtyard.seats",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы садитесь. Сотрудница проходит вдоль рядов, просит убрать телефоны и предупреждает, что у выхода лежат пледы."
        },
        {
          "speaker": "narrator",
          "text": "Вы съедаете по печенью. Тебе достаётся надломленное; оставшиеся три Влад прикрывает краем пакета."
        },
        {
          "speaker": "heroine",
          "text": "Давай сначала посмотрим. А то я сейчас сама всё придумаю вместо фильма."
        },
        {
          "speaker": "vlad",
          "text": "договорились. пока кот с афиши удерживает пассажира до выяснения обстоятельств."
        }
      ],
      "next": "c9.courtyard.filmStart"
    },
    "c9.courtyard.filmStart": {
      "id": "c9.courtyard.filmStart",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Гирлянды гаснут. На экране человек кладёт в чемодан рубашку. Стоит ему отвернуться за другой, как первая оказывается на полу."
        },
        {
          "speaker": "narrator",
          "text": "Кот устраивается на освободившемся месте. Человек достаёт его, поворачивается за рубашкой — и кот снова лежит в чемодане."
        },
        {
          "speaker": "narrator",
          "text": "Влад молча подвигает к тебе открытый пакет. Вы берёте ещё по печенью; в глубине остаётся последнее."
        },
        {
          "speaker": "narrator",
          "text": "На столе возле чемодана стоит фотография: тот же человек гораздо моложе, рядом женщина с этим котом ещё маленьким. Человек выпрямляет рамку и кладёт на стол ключ."
        },
        {
          "speaker": "narrator",
          "text": "Раздаётся глухой стук. Ты сначала ищешь его на экране, но следующая капля падает тебе на запястье."
        }
      ],
      "next": "c9.courtyard.rain"
    },
    "c9.courtyard.rain": {
      "id": "c9.courtyard.rain",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "По рядам раскрываются первые зонты. На белом экране застывает рука с ключом. У стены загорается рабочий свет."
        },
        {
          "speaker": "attendant",
          "text": "Пожалуйста, пройдите под навес. Технику сейчас прикроем. Если дождь не усилится, продолжим через несколько минут."
        },
        {
          "speaker": "narrator",
          "text": "Ты подхватываешь сумку. Влад складывает пакет и забирает его со стула. Под навесом уже тесно; у соседней арки ещё свободно."
        },
        {
          "speaker": "heroine",
          "text": "Я так хотела показать тебе этот дворик. Чтобы тебе тоже здесь понравилось."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится. дождь у вас тут, конечно, с размахом."
        },
        {
          "speaker": "heroine",
          "text": "В следующий раз проверю, есть ли крыша."
        },
        {
          "speaker": "vlad",
          "text": "бери место, которое тебе нравится. с крышей разберёмся."
        },
        {
          "speaker": "narrator",
          "text": "Он стряхивает капли с пакета и ждёт, пока ты оглядываешь дворик."
        }
      ],
      "next": "c9.courtyard.rainAside"
    },
    "c9.courtyard.rainAside": {
      "id": "c9.courtyard.rainAside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "Хорошо хоть печенье без электричества работает."
        },
        {
          "speaker": "angel",
          "text": "Но крыша ему тоже нужна."
        }
      ],
      "next": "c9.courtyard.rainChoice",
      "presentation": "adviser-aside"
    },
    "c9.courtyard.rainChoice": {
      "id": "c9.courtyard.rainChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "prompt": "Как продолжим вечер?",
      "choices": [
        {
          "id": "canopy",
          "text": "Переждём здесь. Хочу досмотреть",
          "next": "c9.courtyard.canopy",
          "effects": [
            {
              "kind": "set",
              "key": "c9Rain",
              "value": "canopy"
            }
          ]
        },
        {
          "id": "arch",
          "text": "Давай проверим ту арку — отсюда экран почти не видно",
          "next": "c9.courtyard.arch",
          "effects": [
            {
              "kind": "set",
              "key": "c9Rain",
              "value": "arch"
            }
          ]
        },
        {
          "id": "leave",
          "text": "Не хочу ждать под дождём. Давай уйдём",
          "next": "c9.courtyard.leave",
          "effects": [
            {
              "kind": "set",
              "key": "c9Rain",
              "value": "leave"
            }
          ]
        }
      ]
    },
    "c9.courtyard.canopy": {
      "id": "c9.courtyard.canopy",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты находишь место у высокого столика. Влад становится рядом и кладёт пакет в сухую середину."
        },
        {
          "speaker": "heroine",
          "text": "Смотри, оттуда хотя бы край экрана видно. Когда начнут, подвинемся."
        },
        {
          "speaker": "vlad",
          "text": "я пока покараулю это место. сходишь за пледом?"
        },
        {
          "speaker": "narrator",
          "text": "Ты берёшь один из пледов у выхода. Когда возвращаешься, Влад уже освободил тебе место у стены, куда не достают брызги."
        },
        {
          "speaker": "heroine",
          "text": "Нам достался весь столик."
        },
        {
          "speaker": "vlad",
          "text": "за него пока никто не внёс печенье."
        }
      ],
      "next": "c9.courtyard.hoodieRainRoute"
    },
    "c9.courtyard.arch": {
      "id": "c9.courtyard.arch",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.arch",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты показываешь Владу на сухую полосу вдоль стены. Под аркой стоят два складных стула и ящик с пледами."
        },
        {
          "speaker": "heroine",
          "text": "Подержи сумку. Я спрошу, сюда можно."
        },
        {
          "speaker": "narrator",
          "text": "Ты подходишь к сотруднице. Она кивает на стулья: отсюда тоже разрешают смотреть. Вернувшись, ты забираешь сумку у Влада."
        },
        {
          "speaker": "heroine",
          "text": "Можно. Только левый качается."
        },
        {
          "speaker": "vlad",
          "text": "тогда мой левый. у стены устоит."
        },
        {
          "speaker": "narrator",
          "text": "Он ставит качающийся стул вплотную к стене. Ты разворачиваешь второй к экрану. Сбоку виден весь прямоугольник, а над головой больше не капает."
        },
        {
          "speaker": "narrator",
          "text": "Ты берёшь из ящика плед и кладёшь на спинку своего стула."
        },
        {
          "speaker": "heroine",
          "text": "Вот. И возвращаться никуда не надо."
        }
      ],
      "next": "c9.courtyard.hoodieRainRoute"
    },
    "c9.courtyard.leave": {
      "id": "c9.courtyard.leave",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [],
            "fromLine": 2,
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Не хочу ждать под дождём. Давай уйдём."
        },
        {
          "speaker": "vlad",
          "text": "пойдём. с этой стороны выход сухой."
        },
        {
          "speaker": "narrator",
          "text": "Вы обходите ряды вдоль стены. За аркой дождь стучит по жестяному козырьку, а на углу светится витрина булочной."
        },
        {
          "speaker": "narrator",
          "text": "Ты становишься у витрины. Между булками и отражением улицы видны ваши два мокрых плеча."
        },
        {
          "speaker": "heroine",
          "text": "А кот так и остался в чемодане."
        },
        {
          "speaker": "vlad",
          "text": "у него хотя бы сухо."
        }
      ],
      "next": "c9.courtyard.hoodieRainRoute"
    },
    "c9.courtyard.hoodieRainRoute": {
      "id": "c9.courtyard.hoodieRainRoute",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Hoodie",
              "equals": "borrowed"
            }
          ],
          "next": "c9.courtyard.hoodieRain"
        }
      ],
      "fallback": "c9.courtyard.warmth"
    },
    "c9.courtyard.hoodieRain": {
      "id": "c9.courtyard.hoodieRain",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад снимает с руки худи и протягивает тебе. У твоего плеча промок край рукава."
        },
        {
          "speaker": "vlad",
          "text": "его мы пока никуда не сдаём. накинь."
        }
      ],
      "next": "c9.courtyard.hoodieChoiceRoute"
    },
    "c9.courtyard.hoodieChoiceRoute": {
      "id": "c9.courtyard.hoodieChoiceRoute",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Rain",
              "equals": "leave"
            }
          ],
          "next": "c9.courtyard.hoodieChoiceLeave"
        }
      ],
      "fallback": "c9.courtyard.hoodieChoice"
    },
    "c9.courtyard.hoodieChoice": {
      "id": "c9.courtyard.hoodieChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "prompt": "Худи снова пригодилось. Возьмёшь?",
      "choices": [
        {
          "id": "keep",
          "text": "Возьму ещё до следующего раза",
          "next": "c9.courtyard.hoodieKeep"
        },
        {
          "id": "return",
          "text": "Я лучше укроюсь пледом, худи забирай",
          "next": "c9.courtyard.hoodieReturn"
        }
      ]
    },
    "c9.courtyard.hoodieChoiceLeave": {
      "id": "c9.courtyard.hoodieChoiceLeave",
      "kind": "choice",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "prompt": "Худи снова пригодилось. Возьмёшь?",
      "choices": [
        {
          "id": "keep",
          "text": "Возьму ещё до следующего раза",
          "next": "c9.courtyard.hoodieKeep"
        },
        {
          "id": "return",
          "text": "Я лучше застегнусь, худи забирай",
          "next": "c9.courtyard.hoodieReturn"
        }
      ]
    },
    "c9.courtyard.hoodieKeep": {
      "id": "c9.courtyard.hoodieKeep",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты надеваешь худи поверх своей одежды. Мокрый край рукава прячется в сухую манжету.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Hoodie",
              "value": "kept"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Тогда ещё немного побудет у меня."
        },
        {
          "speaker": "vlad",
          "text": "бери."
        }
      ],
      "next": "c9.courtyard.next"
    },
    "c9.courtyard.hoodieReturn": {
      "id": "c9.courtyard.hoodieReturn",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я лучше укроюсь пледом, худи забирай.",
          "variants": [
            {
              "when": [
                {
                  "key": "c9Rain",
                  "equals": "leave"
                }
              ],
              "text": "Я лучше застегнусь, худи забирай."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад убирает худи к себе; ты подтягиваешь плед к плечам.",
          "variants": [
            {
              "when": [
                {
                  "key": "c9Rain",
                  "equals": "leave"
                }
              ],
              "text": "Ты застёгиваешь свою куртку. Влад убирает худи к себе."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "ладно."
        }
      ],
      "next": "c9.courtyard.next"
    },
    "c9.courtyard.warmth": {
      "id": "c9.courtyard.warmth",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты подтягиваешь плед к плечам. Влад пододвигает пакет подальше от края, куда долетают капли.",
          "variants": [
            {
              "when": [
                {
                  "key": "c9Rain",
                  "equals": "leave"
                }
              ],
              "text": "Ты застёгиваешь куртку. Влад становится с краю козырька, оставляя тебе сухое место у витрины."
            }
          ]
        }
      ],
      "next": "c9.courtyard.next"
    },
    "c9.courtyard.next": {
      "id": "c9.courtyard.next",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "plan",
              "equals": "coop"
            }
          ],
          "next": "c9.courtyard.nextCoop"
        }
      ],
      "fallback": "c9.courtyard.nextOther"
    },
    "c9.courtyard.nextCoop": {
      "id": "c9.courtyard.nextCoop",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Кстати, есть ещё одно место, куда мы так и не добрались. Ты обещал показать, как довести двух путешественников до домика."
        },
        {
          "speaker": "vlad",
          "text": "помню. коробка всё ещё ждёт второго человека."
        },
        {
          "speaker": "heroine",
          "text": "Тогда в следующий раз приноси. Посмотрим, кто у тебя там всё время теряется."
        }
      ],
      "next": "c9.courtyard.nextDate"
    },
    "c9.courtyard.nextOther": {
      "id": "c9.courtyard.nextOther",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай в следующий раз достанем ту настолку, с которой я в первый вечер пришёл в кафе. с двумя путешественниками."
        },
        {
          "speaker": "heroine",
          "text": "Которым надо добраться до домика?"
        },
        {
          "speaker": "vlad",
          "text": "да. хотя бы у них крыша в комплекте."
        }
      ],
      "next": "c9.courtyard.nextDate"
    },
    "c9.courtyard.nextDate": {
      "id": "c9.courtyard.nextDate",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "В «Паузе»? За тем столом у окна."
        },
        {
          "speaker": "vlad",
          "text": "давай. я принесу коробку."
        },
        {
          "speaker": "narrator",
          "text": "Укрыв телефон от брызг, ты сверяешь с Владом свободный вечер и сохраняешь время."
        }
      ],
      "next": "c9.courtyard.afterPause"
    },
    "c9.courtyard.afterPause": {
      "id": "c9.courtyard.afterPause",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Rain",
              "equals": "leave"
            }
          ],
          "next": "c9.courtyard.earlyWalk"
        }
      ],
      "fallback": "c9.courtyard.bet"
    },
    "c9.courtyard.bet": {
      "id": "c9.courtyard.bet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В пакете остаётся одно печенье. Влад вытряхивает с края несколько крошек и загибает бумагу, чтобы оно не отсырело."
        },
        {
          "speaker": "vlad",
          "text": "я думаю, он никуда не уедет. ключ положил — и сам же к нему вернётся."
        },
        {
          "speaker": "heroine",
          "text": "Последнее печенье на кон?"
        },
        {
          "speaker": "vlad",
          "text": "принимается. какая у тебя версия?"
        }
      ],
      "next": "c9.courtyard.betChoice"
    },
    "c9.courtyard.betChoice": {
      "id": "c9.courtyard.betChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "prompt": "Какая у тебя версия?",
      "choices": [
        {
          "id": "together",
          "text": "Он поедет и возьмёт кота с собой",
          "next": "c9.courtyard.betTogether",
          "effects": [
            {
              "kind": "set",
              "key": "c9Bet",
              "value": "together"
            }
          ]
        },
        {
          "id": "alone",
          "text": "Он уедет один, а кот останется ждать",
          "next": "c9.courtyard.betAlone",
          "effects": [
            {
              "kind": "set",
              "key": "c9Bet",
              "value": "alone"
            }
          ]
        },
        {
          "id": "skip",
          "text": "Не хочу спорить. Давай сразу пополам",
          "next": "c9.courtyard.betSkip",
          "effects": [
            {
              "kind": "set",
              "key": "c9Bet",
              "value": "skip"
            }
          ]
        }
      ]
    },
    "c9.courtyard.betTogether": {
      "id": "c9.courtyard.betTogether",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Он поедет и возьмёт кота с собой."
        },
        {
          "speaker": "vlad",
          "text": "тогда печенье пока под охраной."
        }
      ],
      "next": "c9.courtyard.resume"
    },
    "c9.courtyard.betAlone": {
      "id": "c9.courtyard.betAlone",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Он уедет один, а кот останется ждать."
        },
        {
          "speaker": "vlad",
          "text": "тогда у нас две разные дороги. если оба промахнёмся, делим."
        }
      ],
      "next": "c9.courtyard.resume"
    },
    "c9.courtyard.betSkip": {
      "id": "c9.courtyard.betSkip",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.canopy",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад разламывает печенье. Вы берёте по половине, пока он придерживает пакет под крошками."
        }
      ],
      "next": "c9.courtyard.resume"
    },
    "c9.courtyard.resume": {
      "id": "c9.courtyard.resume",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Дождь редеет. Сотрудница поднимает руку у экрана: показ продолжается. Человек с ключом снова двигается, и разговоры под навесом стихают."
        },
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь в ряд. Сотрудница вытирает сиденья, а ты раскладываешь плед поперёк колен.",
          "variants": [
            {
              "when": [
                {
                  "key": "c9Rain",
                  "equals": "arch"
                }
              ],
              "text": "Ты разворачиваешься на своём стуле. Влад придвигается к стене; из-под арки виден весь экран."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Человек возвращается за рамкой с фотографией. Он заворачивает её в рубашку и устраивает между вещами."
        },
        {
          "speaker": "narrator",
          "text": "Кот впервые выбирается из чемодана сам. Человек закрывает крышку, берёт ключ и стоит перед дверью. На несколько секунд кот остаётся один в комнате."
        },
        {
          "speaker": "narrator",
          "text": "Дверь открывается снова. Внизу появляется переноска. Кот обнюхивает дверцу, заглядывает на оставленное внутри полотенце и забирается сам."
        },
        {
          "speaker": "narrator",
          "text": "Последний план — окно поезда. Рядом с человеком стоит переноска, а в стекле отражаются два силуэта. Кот трогает лапой бегущую за окном полосу света."
        },
        {
          "speaker": "narrator",
          "text": "На экране появляются титры. Во дворике снова загораются гирлянды."
        }
      ],
      "next": "c9.courtyard.betResult"
    },
    "c9.courtyard.betResult": {
      "id": "c9.courtyard.betResult",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Bet",
              "equals": "together"
            }
          ],
          "next": "c9.courtyard.won"
        },
        {
          "all": [
            {
              "key": "c9Bet",
              "equals": "alone"
            }
          ],
          "next": "c9.courtyard.bothMissed"
        }
      ],
      "fallback": "c9.courtyard.afterFilm"
    },
    "c9.courtyard.won": {
      "id": "c9.courtyard.won",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "ладно. пассажира всё-таки зарегистрировали."
        },
        {
          "speaker": "narrator",
          "text": "Он подаёт тебе пакет с последним печеньем."
        },
        {
          "speaker": "heroine",
          "text": "Можешь откусить. Но сначала признай, что кот сам собрался."
        },
        {
          "speaker": "vlad",
          "text": "кот сам собрался. человек только донёс багаж."
        },
        {
          "speaker": "narrator",
          "text": "Ты откусываешь первой и передаёшь остаток Владу. Он доедает печенье и складывает пустой пакет."
        }
      ],
      "next": "c9.courtyard.afterFilm"
    },
    "c9.courtyard.bothMissed": {
      "id": "c9.courtyard.bothMissed",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я кота оставила, ты человека. Оба мимо."
        },
        {
          "speaker": "vlad",
          "text": "а они уехали, пока мы тут делили имущество."
        },
        {
          "speaker": "narrator",
          "text": "Ты разламываешь печенье пополам. Вы съедаете по половине; Влад ловит крошки пакетом."
        },
        {
          "speaker": "heroine",
          "text": "Тогда обоим по половине."
        }
      ],
      "next": "c9.courtyard.afterFilm"
    },
    "c9.courtyard.afterFilm": {
      "id": "c9.courtyard.afterFilm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "arch"
              }
            ],
            "background": "bg.courtyard9.arch",
            "character": "vlad.city.smile"
          },
          {
            "when": [
              {
                "key": "c9Rain",
                "equals": "leave"
              }
            ],
            "background": "bg.courtyard9.books",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "хорошо, что дождались."
        },
        {
          "speaker": "heroine",
          "text": "Да. Я уже думала, так и останемся с этим ключом в руке."
        },
        {
          "speaker": "narrator",
          "text": "Ты складываешь плед. Влад относит его в ящик, затем возвращается за тобой к арке."
        }
      ],
      "next": "c9.courtyard.lab"
    },
    "c9.courtyard.earlyWalk": {
      "id": "c9.courtyard.earlyWalk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.books",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [],
            "fromLine": 7,
            "background": "bg.courtyard9.books-closed",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты замечаешь рядом с булочной маленький уличный шкаф с надписью «Обмен книгами». Дверца приоткрыта. Из нижней полки торчит книга, по её обложке стекает вода."
        },
        {
          "speaker": "heroine",
          "text": "Подожди. Там сейчас всё зальёт."
        },
        {
          "speaker": "narrator",
          "text": "Ты подхватываешь книгу. Влад кладёт пакет с печеньем на сухой подоконник и придерживает дверцу, пока ты освобождаешь зажатый угол."
        },
        {
          "speaker": "vlad",
          "text": "вот кто тут не давал закрыться."
        },
        {
          "speaker": "narrator",
          "text": "На нижней полке уже собралась вода. Влад поднимает оставшиеся книги, а ты освобождаешь для них верхнюю. Последняя не помещается корешком наружу; ты поворачиваешь её боком."
        },
        {
          "speaker": "heroine",
          "text": "Теперь пробуй."
        },
        {
          "speaker": "narrator",
          "text": "Дверца закрывается. Влад поворачивает деревянную щеколду. Вы на секунду остаётесь перед стеклом: книги теперь выше мокрой полки, капли бегут по дверце снаружи."
        },
        {
          "speaker": "vlad",
          "text": "крыша есть. жильцов расселили."
        },
        {
          "speaker": "narrator",
          "text": "Он забирает с подоконника пакет и разламывает последнее печенье. Вы съедаете по половине под козырьком."
        },
        {
          "speaker": "heroine",
          "text": "Кота так и не проводили. Зато этих устроили."
        },
        {
          "speaker": "vlad",
          "text": "целую полку. идём сдавать аппарат?"
        },
        {
          "speaker": "narrator",
          "text": "Ты выбираешь дорогу вдоль домов. Дождь становится мельче; на перекрёстке уже светлеет край неба."
        }
      ],
      "next": "c9.courtyard.lab"
    },
    "c9.courtyard.lab": {
      "id": "c9.courtyard.lab",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.lab",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На соседней улице за стеклом фотолаборатории горит небольшая лампа. Дверь уже закрыта, но рядом с ней устроен приёмный ящик. Над ним лежат бумажные пакеты и бланки."
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь аппарат. Влад берёт с полочки пакет для проявки и держит его раскрытым, пока ты заполняешь короткий бланк. Затем ты кладёшь аппарат внутрь и заклеиваешь край."
        },
        {
          "speaker": "narrator",
          "text": "Ты опускаешь пакет в ящик и убираешь отрывную квитанцию в кошелёк.",
          "effects": [
            {
              "kind": "set",
              "key": "c9Film",
              "value": "submitted"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Когда будут готовы, заберу. Принесу тебе посмотреть."
        },
        {
          "speaker": "vlad",
          "text": "вместе посмотрим. я хочу узнать, что у нас там с первой прогулки."
        }
      ],
      "next": "c9.courtyard.goodbye"
    },
    "c9.courtyard.goodbye": {
      "id": "c9.courtyard.goodbye",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.lab-red",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На перекрёстке вам в разные стороны. На мокром бордюре дрожат огни светофора."
        },
        {
          "speaker": "narrator",
          "text": "Влад убирает телефон, на котором проверял дорогу домой. До зелёного ещё есть несколько секунд."
        }
      ],
      "next": "c9.courtyard.goodbyeChoice"
    },
    "c9.courtyard.goodbyeChoice": {
      "id": "c9.courtyard.goodbyeChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.courtyard9.lab-red",
        "character": "vlad.city.smile"
      },
      "prompt": "Как попрощаешься?",
      "choices": [
        {
          "id": "kiss",
          "text": "Поцеловать его первой",
          "next": "c9.courtyard.kiss"
        },
        {
          "id": "hug",
          "text": "Обнять на прощание",
          "next": "c9.courtyard.hug"
        },
        {
          "id": "words",
          "text": "До следующей встречи, Влад",
          "next": "c9.courtyard.words"
        }
      ]
    },
    "c9.courtyard.kiss": {
      "id": "c9.courtyard.kiss",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8LipKiss",
              "equals": "yes"
            }
          ],
          "next": "c9.courtyard.kissAgain"
        }
      ],
      "fallback": "c9.courtyard.kissFirst"
    },
    "c9.courtyard.kissAgain": {
      "id": "c9.courtyard.kissAgain",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.lab-red",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты ловишь его ладонь, когда он собирается отступить к своему углу. Влад поворачивается к тебе; ты тянешь его чуть ближе и целуешь. Он отвечает, придерживая тебя за спину.",
          "effects": [
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "yes"
            },
            {
              "kind": "set",
              "key": "c9Goodbye",
              "value": "kiss"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Теперь до настолки."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь до настолки."
        }
      ],
      "next": "c9.courtyard.kissEnd"
    },
    "c9.courtyard.kissFirst": {
      "id": "c9.courtyard.kissFirst",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.lab-red",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Влад, подожди."
        },
        {
          "speaker": "narrator",
          "text": "Ты касаешься его руки и подходишь ближе. Он остаётся напротив, глядя на тебя."
        },
        {
          "speaker": "heroine",
          "text": "Я ещё не попрощалась."
        },
        {
          "speaker": "narrator",
          "text": "Ты поднимаешь лицо к нему. Влад наклоняется навстречу; ты целуешь его в губы. Он отвечает и осторожно обнимает тебя за спину.",
          "effects": [
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "yes"
            },
            {
              "kind": "set",
              "key": "c9Goodbye",
              "value": "kiss"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "хорошо, что остановила."
        }
      ],
      "next": "c9.courtyard.kissEnd"
    },
    "c9.courtyard.kissEnd": {
      "id": "c9.courtyard.kissEnd",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.lab",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы отпускаете друг друга. Когда загорается зелёный, ты переходишь улицу; Влад остаётся на своём углу."
        }
      ],
      "next": "c9.courtyard.end"
    },
    "c9.courtyard.hug": {
      "id": "c9.courtyard.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.lab-red",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты обнимаешь Влада. Он прижимает тебя к себе в ответ, затем отступает, чтобы пропустить к переходу.",
          "effects": [
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "no"
            },
            {
              "kind": "set",
              "key": "c9Goodbye",
              "value": "hug"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "До настолки."
        },
        {
          "speaker": "vlad",
          "text": "до настолки."
        }
      ],
      "next": "c9.courtyard.end"
    },
    "c9.courtyard.words": {
      "id": "c9.courtyard.words",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.lab-red",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "До следующей встречи, Влад."
        },
        {
          "speaker": "vlad",
          "text": "до встречи. спасибо, что позвала."
        },
        {
          "speaker": "narrator",
          "text": "Ты поднимаешь ладонь, отойдя к переходу. Он машет тебе в ответ.",
          "effects": [
            {
              "kind": "set",
              "key": "c9LipKiss",
              "value": "no"
            },
            {
              "kind": "set",
              "key": "c9Goodbye",
              "value": "words"
            }
          ]
        }
      ],
      "next": "c9.courtyard.end"
    },
    "c9.courtyard.end": {
      "id": "c9.courtyard.end",
      "kind": "end",
      "endingId": "c9.courtyard",
      "cardId": "c9.courtyard"
    }
  }
};
