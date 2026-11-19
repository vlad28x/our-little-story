// Authoritative text: outputs/SEASON_01_02_POLISH_SPEC_2026_11_19.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter9:Chapter = {
  "id": 9,
  "contentVersion": CONTENT_VERSION,
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
          "text": "Влад ждёт у старой кирпичной арки кинодворика с небольшим крафтовым пакетом из пекарни. Из глубины двора уже светятся жёлтые гирлянды.",
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
          "text": "привет. пришёл первым и проверил периметр: кот с афиши пока скрывается, зато пахнет здесь отлично."
        },
        {
          "speaker": "heroine",
          "text": "Привет. У кота подготовка к выходу на экран. Пойдём внутрь, я покажу тебе этот дворик."
        },
        {
          "speaker": "narrator",
          "text": "Вы проходите мимо маленького окошка кассы. Над деревянными рядами натянуты нити лампочек, у кирпичной стены белеет экран, сбоку стоят столики под навесом."
        },
        {
          "speaker": "heroine",
          "text": "Я влюбилась в это место, потому что сюда совсем не долетает шум дороги. Будто спрятались от города в старом саду."
        },
        {
          "speaker": "vlad",
          "text": "да… здесь сразу хочется говорить вполголоса."
        },
        {
          "speaker": "heroine",
          "text": "Билеты в наш тайный сад у меня в кармане."
        },
        {
          "speaker": "vlad",
          "text": "тогда с меня официальный кинопровиант. ещё тёплый."
        },
        {
          "speaker": "narrator",
          "text": "Он приоткрывает пакет: внутри пять крупных печений с шоколадом и корицей, одно с краю чуть надломилось по дороге."
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
          "text": "И кстати, твой главный согревающий артефакт с прошлого вечера вернулся к хозяину. Я тогда так в нём до дома и доехала."
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь из сумки аккуратно сложенное худи и протягиваешь Владу. Он принимает его и убирает в свою сумку с довольной усмешкой.",
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
          "text": "знаешь, после того как ты в нём ходила, оно мне нравится гораздо больше. спасибо."
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
          "text": "Под гирляндами держится сиреневый полумрак перед сеансом. Ты достаёшь из сумки ваш общий плёночный аппарат."
        },
        {
          "speaker": "heroine",
          "text": "Смотри, осталось последние девять кадров. Давай сегодня их доснимем и после фильма отдадим плёнку в проявку!"
        },
        {
          "speaker": "vlad",
          "text": "девять кадров до того, как мы увидим всю нашу историю… давай начнём прямо сейчас."
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
          "text": "Сниму тебя с этим пакетом под гирляндами",
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
          "text": "Давай снимем наши места до начала фильма",
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
          "text": "Хочу поймать в кадр весь этот дворик",
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
          "text": "Стой ровно там, под гирляндой, и пакет с печеньем не прячь."
        },
        {
          "speaker": "narrator",
          "text": "Влад останавливается на фоне кирпичной арки и светящихся лампочек."
        },
        {
          "speaker": "vlad",
          "text": "смотрю только на тебя. снимай."
        },
        {
          "speaker": "narrator",
          "text": "Ты нажимаешь спуск, ловя его живой, открытый взгляд в видоискателе.",
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
          "text": "Положи пакет на наш ряд. Хочу снять наши два стула, пока вокруг тихо."
        },
        {
          "speaker": "narrator",
          "text": "Два деревянных стула в последнем ряду стоят совсем рядом. Влад хочет выровнять их по линейке, но ты останавливаешь его."
        },
        {
          "speaker": "heroine",
          "text": "Оставь так, чуть развёрнутыми друг к другу. Видно, что это места для двоих."
        },
        {
          "speaker": "narrator",
          "text": "Ты снимаешь два стула под гирляндами и бумажный номерок ряда над ними.",
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
          "text": "Подержи секунду мою сумку — отсюда вся арка и гирлянды помещаются в один кадр."
        },
        {
          "speaker": "narrator",
          "text": "Ты снимаешь дворик от входа: старый плющ на кирпиче, нити лампочек и белый экран в глубине.",
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
          "text": "а меня искать в последнем ряду, рядом с твоим местом и печеньем."
        },
        {
          "speaker": "narrator",
          "text": "Ты опускаешь камеру и идёшь к нему."
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
          "text": "Пока дворик заполняется зрителями, вы доснимаете последние кадры — и когда ты садишься на стул, подняв глаза к огонькам гирлянд, Влад забирает камеру и тратит два последних кадра подряд на тебя."
        },
        {
          "speaker": "narrator",
          "text": "Колёсико проворачивается вхолостую: все двадцать семь кадров отсняты. Ты убираешь аппарат в сумку.",
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
          "text": "Всё… плёнка закончилась. И половину последних кадров ты опять потратил на меня!"
        },
        {
          "speaker": "vlad",
          "text": "и ни об одном кадре не жалею. скоро сама увидишь почему."
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
          "text": "Вы устраиваетесь в последнем, самом тихом ряду. Сотрудница напоминает, что у входа лежат пледы, и гасит боковые фонари."
        },
        {
          "speaker": "narrator",
          "text": "Влад раскрывает пакет с печеньем: то самое надломленное он без слов забирает себе, а пакет с четырьмя целыми пододвигает к тебе."
        },
        {
          "speaker": "narrator",
          "text": "Заметив эту маленькую хитрость, ты усмехаешься в темноте и чуть разворачиваешь свой стул к нему."
        },
        {
          "speaker": "heroine",
          "text": "Ну что, смотрим? Только чур не подсказывать коту на экране."
        },
        {
          "speaker": "vlad",
          "text": "договорились. хотя я планирую смотреть в основном на соседнее кресло."
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
          "text": "Гирлянды гаснут, и на экране вспыхивает луч проектора: человек укладывает в чемодан рубашку, но стоит ему отвернуться, как пушистый кот сталкивает её на пол и залезает внутрь сам."
        },
        {
          "speaker": "narrator",
          "text": "В темноте последнего ряда Влад поворачивает к тебе руку и переплетает свои пальцы с твоими.",
          "variants": [
            {
              "when": [
                {
                  "key": "c8LipKiss",
                  "equals": "no"
                },
                {
                  "key": "c6Gesture",
                  "equals": "none"
                }
              ],
              "text": "В темноте последнего ряда становится прохладнее; Влад кладёт раскрытую ладонь на подлокотник рядом с твоей, не торопя тебя."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты чуть прислоняешься к нему, и за сюжетом следится уже вполглаза — в этой тишине и так удивительно спокойно.",
          "variants": [
            {
              "when": [
                {
                  "key": "c8LipKiss",
                  "equals": "no"
                },
                {
                  "key": "c6Gesture",
                  "equals": "none"
                }
              ],
              "text": "Ты чуть разворачиваешься к экрану, чувствуя, как спокойно и надёжно сидится рядом с ним."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "На экране герой ставит на стол старую фотографию и кладёт рядом ключ от двери."
        },
        {
          "speaker": "narrator",
          "text": "И вдруг в тишине раздаётся глухой удар капли о полотно экрана, а следом прохладная тяжёлая капля падает прямо на руку."
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
          "text": "За секунды с ночного неба обрушивается шумный ливень. На экране замирает стоп-кадр с ключом, у стены включается дежурный фонарь, и зрители со смехом бегут под навес."
        },
        {
          "speaker": "attendant",
          "text": "Друзья, пожалуйста, укройтесь пока под навесом или у арки! Мы прикроем проектор плёнкой — если туча пройдёт быстро, досмотрим финал!"
        },
        {
          "speaker": "narrator",
          "text": "Влад первым делом прикрывает твою голову полой своего расстёгнутого пальто, пока ты подхватываешь сумку, а он забирает со стула свёрнутый пакет с последним печеньем."
        },
        {
          "speaker": "heroine",
          "text": "Влад, я так хотела устроить нам идеальный вечер в этом дворике… а тут опять ливень."
        },
        {
          "speaker": "narrator",
          "text": "Вы останавливаетесь у края кирпичной стены; он стряхивает воду с рукава и смотрит на тебя совершенно серьёзно:"
        },
        {
          "speaker": "vlad",
          "text": "эй. это уже идеальный вечер, потому что ты позвала меня сюда."
        },
        {
          "speaker": "heroine",
          "text": "В следующий раз буду выбирать места, где крыша входит в стоимость билета."
        },
        {
          "speaker": "vlad",
          "text": "выбирай любое место, которое тебе нравится. а с крышей для нас я всегда разберусь."
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
          "text": "Главное, что последнее печенье в пакете удалось спасти от потопа!"
        },
        {
          "speaker": "angel",
          "text": "А под шум такого дождя прятаться вдвоём под одной крышей ещё уютнее."
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
          "text": "Переждём под навесом. Хочу досмотреть с тобой",
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
          "text": "Спрячемся вдвоём под той тихой аркой у стены",
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
          "text": "Убежим отсюда вдвоём под дождь, к огням улицы",
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
          "text": "Вы отступаете к дальнему угловому столику под глубоким навесом. Влад кладёт пакет с печеньем на сухое дерево и усаживает тебя в самый защищённый угол у стены."
        },
        {
          "speaker": "heroine",
          "text": "Отсюда сквозь дождь как раз виден наш экран."
        },
        {
          "speaker": "vlad",
          "text": "сиди здесь, я через секунду вернусь с пледом."
        },
        {
          "speaker": "narrator",
          "text": "Он приносит большой плед из ящика у входа, разворачивает его и садится рядом, укрывая вас обоих от ночной сырости."
        },
        {
          "speaker": "heroine",
          "text": "Под одним пледом дождь сразу кажется в два раза тише."
        },
        {
          "speaker": "vlad",
          "text": "я бы на месте этого дождя вообще не торопился заканчиваться."
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
          "text": "Ты тянешь Влада за руку в полутёмную нишу под сводчатой кирпичной аркой, где стоят два складных стула и ящик с пледами. Спереди вас отрезает от дворика завеса ливня."
        },
        {
          "speaker": "heroine",
          "text": "Сотрудница кивнула — отсюда тоже можно смотреть, и мы здесь совсем одни."
        },
        {
          "speaker": "vlad",
          "text": "лучшее место во всём дворике. иди сюда."
        },
        {
          "speaker": "narrator",
          "text": "Влад сдвигает два стула к сухой стене, достаёт шерстяной плед и укрывает вас обоих."
        },
        {
          "speaker": "heroine",
          "text": "Теперь у нас и своя крыша, и свой отдельный кинозал."
        }
      ],
      "next": "c9.courtyard.hoodieRainRoute"
    },
    "c9.courtyard.leave": {
      "id": "c9.courtyard.leave",
      "kind": "dialogue",
      "scene": {
        "background": "bg.courtyard9.open",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Пойдём отсюда, Влад. Хочу просто пройтись с тобой по вечерним улицам, пока идёт дождь."
        },
        {
          "speaker": "vlad",
          "text": "пойдём. с этой стороны вдоль домов сухой козырёк."
        },
        {
          "speaker": "narrator",
          "text": "Вы выбегаете из арки на пустынный переулок и прячетесь под широким козырьком у светлой витрины маленькой булочной."
        },
        {
          "speaker": "narrator",
          "text": "В стекле отражаются огни улицы и вы двое — промокшие на бегу, с блестящими от дождя волосами и смеющимися глазами."
        },
        {
          "speaker": "heroine",
          "text": "Кот в фильме так и остался сидеть в чемодане, а мы сбежали."
        },
        {
          "speaker": "vlad",
          "text": "и правильно сделали. здесь мне ни на какой экран отвлекаться не надо."
        }
      ],
      "next": "c9.courtyard.hoodieRainRoute"
    },
    "c9.courtyard.hoodieRainRoute": {
      "id": "c9.courtyard.hoodieRainRoute",
      "kind": "route",
      "cases": [],
      "fallback": "c9.courtyard.warmth"
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
            "background": "bg.courtyard9.open",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ливень ровно барабанит по жестяному козырьку над вами, из-за чего под навесом приходится говорить почти вполголоса. Влажная от дождя прядь прилипла к твоей щеке; Влад осторожно убирает её тебе за ухо, и его пальцы на мгновение задерживаются у твоей скулы.",
          "variants": [
            {
              "when": [
                {
                  "key": "c9Rain",
                  "equals": "arch"
                }
              ],
              "text": "За пределами кирпичного свода сплошной стеной шумит вода. Под общим пледом сухо и тихо; заметив влажную от дождя прядь у твоей щеки, Влад осторожно убирает её тебе за ухо, и его пальцы на секунду задерживаются у твоей скулы."
            },
            {
              "when": [
                {
                  "key": "c9Rain",
                  "equals": "leave"
                }
              ],
              "text": "Ливень гулко стучит по козырьку над витриной. Влад встаёт с внешнего края, закрывая тебя от брызг, и осторожно убирает влажную от дождя прядь с твоей щеки тебе за ухо."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Вы переглядываетесь под ровный шум дождя — прохлада улицы остаётся где-то совсем снаружи."
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
            "background": "bg.courtyard9.open",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Знаешь, у нас ведь осталось одно незаконченное дело с самой первой встречи. Ты обещал показать, как довести тех двух путешественников до их домика."
        },
        {
          "speaker": "vlad",
          "text": "помню. та коробка на моей полке с первого вечера ждёт тебя."
        },
        {
          "speaker": "heroine",
          "text": "Тогда в следующий раз берём из проявки наши фотографии и идём доводить путешественников до дома."
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
            "background": "bg.courtyard9.open",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "слушай… давай в следующий раз наконец откроем ту самую настолку с двумя путешественниками, которую я уронил у твоих ног в первый вечер?"
        },
        {
          "speaker": "heroine",
          "text": "Ту, где нужно дойти вдвоём через реку до маленького домика?"
        },
        {
          "speaker": "vlad",
          "text": "да. доведём их до крыши — и заодно посмотрим готовые фотографии из проявки."
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
            "background": "bg.courtyard9.open",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Встретимся в «Паузе»? За нашим самым первым столиком у окна."
        },
        {
          "speaker": "vlad",
          "text": "да. я принесу коробку, а с тебя — конверт со снимками."
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь телефон, и прямо под шум дождя вы выбираете вечер для следующей встречи."
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
          "text": "В пакете между вами остаётся последнее большое печенье с корицей. Влад кивает на экран, который уже готовят к продолжению:"
        },
        {
          "speaker": "vlad",
          "text": "как думаешь, чем кончится фильм? мне кажется, герой никуда от своего кота не уедет — вернётся к ключу на столе."
        },
        {
          "speaker": "heroine",
          "text": "Ставим последнее печенье на кон?"
        },
        {
          "speaker": "vlad",
          "text": "легко. какая твоя ставка?"
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
          "text": "Не хочу спорить. Давай сразу разделим пополам",
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
          "text": "Я верю в счастливый финал: он поедет и обязательно заберёт кота с собой."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, как ты всегда выбираешь вариант «быть вместе». смотрим."
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
          "text": "Думаю, он уедет по делам, а кот будет ждать его возвращения дома."
        },
        {
          "speaker": "vlad",
          "text": "если промахнёмся оба — делим печенье пополам. хотя я в любом случае поделюсь."
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
          "text": "Влад разламывает последнее печенье пополам и протягивает большую половинку тебе."
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
          "text": "Дождь стихает до редких капель, и луч проектора снова оживает в темноте дворика."
        },
        {
          "speaker": "narrator",
          "text": "Вы не снимаете общего пледа — так и досматриваете картину под навесом, рядом друг с другом.",
          "variants": [
            {
              "when": [
                {
                  "key": "c9Rain",
                  "equals": "arch"
                }
              ],
              "text": "Вы остаётесь в своей тихой арке под общим пледом, досматривая финал прямо оттуда."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "На экране герой заворачивает рамку с фотографией в рубашку и ставит у двери открытую дорожную переноску с полотенцем внутри."
        },
        {
          "speaker": "narrator",
          "text": "Кот обнюхивает край и сам забирается внутрь. В следующем кадре за окном вагона бегут ночные огни — человек и кот едут вместе."
        },
        {
          "speaker": "narrator",
          "text": "Когда по экрану плывут титры, Влад коротко сжимает твои пальцы под пледом, и над двориком снова зажигаются гирлянды.",
          "variants": [
            {
              "when": [
                {
                  "key": "c8LipKiss",
                  "equals": "yes"
                }
              ],
              "text": "Когда по экрану плывут титры, Влад под пледом подносит твою руку к губам и коротко касается пальцев, пока над двориком снова зажигаются гирлянды."
            }
          ]
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
          "text": "сдаюсь. твоя ставка на «ехать вместе» победила вчистую."
        },
        {
          "speaker": "narrator",
          "text": "Он достаёт из пакета последнее печенье и торжественно вручает приз победителю."
        },
        {
          "speaker": "heroine",
          "text": "Откусывай половину. Победила ведь команда."
        },
        {
          "speaker": "vlad",
          "text": "с тобой даже проигрывать спор — одно удовольствие."
        },
        {
          "speaker": "narrator",
          "text": "Вы делите печенье пополам, пока вокруг понемногу расходятся зрители."
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
          "text": "Ты оставлял дома человека, я кота — а они взяли и уехали вдвоём."
        },
        {
          "speaker": "vlad",
          "text": "и правильно сделали. нечего расставаться, когда можно быть рядом."
        },
        {
          "speaker": "narrator",
          "text": "Ты разламываешь последнее печенье пополам и протягиваешь Владу его долю."
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
          "text": "как же хорошо, что мы остались и досмотрели этот финал под одним пледом."
        },
        {
          "speaker": "heroine",
          "text": "Да. Под дождём он получился даже уютнее."
        },
        {
          "speaker": "narrator",
          "text": "Влад снимает плед, относит его в ящик у входа и возвращается к тебе."
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
            "fromLine": 3,
            "background": "bg.courtyard9.books-closed",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У соседнего с булочной крыльца вы замечаете маленький деревянный шкафчик уличного книгообмена: дверца приоткрыта, и нижний край книг намокает от косых капель."
        },
        {
          "speaker": "heroine",
          "text": "Подожди секунду, Влад — давай закроем им дверцу, а то книги промокнут."
        },
        {
          "speaker": "narrator",
          "text": "Влад придерживает стеклянную створку, пока ты переставляешь две книги на сухую верхнюю полку и поворачиваешь деревянную щеколду."
        },
        {
          "speaker": "vlad",
          "text": "ну вот. этим путешественникам мы крышу тоже обеспечили."
        },
        {
          "speaker": "narrator",
          "text": "Под козырьком у книжного шкафа Влад достаёт последнее печенье, разламывает пополам и протягивает половину тебе."
        },
        {
          "speaker": "heroine",
          "text": "Фильм мы не досмотрели, зато получилась своя история под дождём."
        },
        {
          "speaker": "vlad",
          "text": "наша мне нравится гораздо больше любого кино. пойдём сдадим плёнку по дороге?"
        },
        {
          "speaker": "narrator",
          "text": "Дождь стихает до мелкой дымки, и вы идёте по блестящему тротуару на соседнюю улицу."
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
          "text": "За витриной маленькой фотолаборатории горит дежурная лампа. Дверь уже закрыта, но у входа висит деревянный бокс с конвертами для вечерней сдачи плёнок."
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь одноразовый аппарат. Влад держит плотный конверт раскрытым, пока ты вписываешь номер в квитанцию — перед тем как опустить камеру внутрь, вы оба на секунду задерживаетесь взглядом на потёртом корпусе."
        },
        {
          "speaker": "vlad",
          "text": "даже немного жалко с ним расставаться. он с нами четыре свидания прожил — от набережной до сегодняшнего ливня.",
          "delivery": "тихо"
        },
        {
          "speaker": "heroine",
          "text": "Зато совсем скоро он вернётся к нам живыми фотографиями."
        },
        {
          "speaker": "narrator",
          "text": "Ты заклеиваешь клапан, опускаешь пакет в ящик и прячешь квитанцию в кошелёк.",
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
          "text": "Как только напечатают — я сразу заберу конверт и принесу в «Паузу». Не буду открывать без тебя."
        },
        {
          "speaker": "vlad",
          "text": "договорились. откроем вместе за нашим столиком. очень хочу увидеть твоё лицо, когда ты посмотришь те кадры."
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
          "text": "Через пару шагов вы выходите к ночному перекрёстку. На мокром асфальте расплываются красные огни светофора, пахнет ночной свежестью."
        },
        {
          "speaker": "narrator",
          "text": "Вам в разные стороны, но Влад останавливается у кирпичной стены, явно не спеша прощаться."
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
          "text": "Не отпускать его руку и притянуть его к себе",
          "next": "c9.courtyard.kiss"
        },
        {
          "id": "hug",
          "text": "Крепко обнять его на прощание",
          "next": "c9.courtyard.hug"
        },
        {
          "id": "words",
          "text": "Улыбнуться ему: “До встречи в кафе, Влад”",
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
          "text": "На светофоре загорается зелёный и спустя полминуты снова сменяется красным — но ни ты, ни Влад не смотрите на переход."
        },
        {
          "speaker": "vlad",
          "text": "кажется, мы только что пропустили твой зелёный.",
          "delivery": "тихо"
        },
        {
          "speaker": "heroine",
          "text": "Я специально."
        },
        {
          "speaker": "narrator",
          "text": "Ты тянешь его за руку в полутень у стены. Влад обхватывает твоё лицо ладонями и целует тебя — спокойно, глубоко и уверенно, без прежней робости.",
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
          "speaker": "narrator",
          "text": "Когда вы наконец отстраняетесь на полшага, он ещё пару секунд держит твои руки в своих."
        },
        {
          "speaker": "heroine",
          "text": "Вот теперь — до нашей встречи в «Паузе».",
          "delivery": "тихо"
        },
        {
          "speaker": "vlad",
          "text": "теперь я точно не усну до этой встречи."
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
          "speaker": "narrator",
          "text": "На перекрёстке загорается и гаснет зелёный, но ты остаёшься на месте, держа его за руку."
        },
        {
          "speaker": "heroine",
          "text": "Влад… подожди. Я ещё не хочу уходить.",
          "delivery": "тихо"
        },
        {
          "speaker": "narrator",
          "text": "Влад поворачивается к тебе в полутени у кирпичной стены; его ладонь осторожно касается твоей щеки."
        },
        {
          "speaker": "narrator",
          "text": "Ты поднимаешь лицо, и он медленно наклоняется навстречу. Первый поцелуй на тихой мокрой улице получается долгим, удивительно нежным и спокойным — вторая его рука мягко притягивает тебя за талию.",
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
          "text": "как же хорошо, что ты меня остановила… я весь вечер под этим дождём думал только об этом.",
          "delivery": "тихо"
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
          "text": "Когда снова загорается зелёный, ты медленно переходишь блестящую от дождя улицу, а Влад остаётся стоять на своём углу, провожая тебя взглядом."
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
          "text": "Ты шагаешь ближе и крепко обнимаешь его. Влад тут же обнимает тебя в ответ, на секунду прижимаясь щекой к твоим волосам, прежде чем вы нехотя расходитесь у перехода.",
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
          "text": "До встречи за нашей настолкой, Влад."
        },
        {
          "speaker": "vlad",
          "text": "до встречи. буду ждать тебя и наши фотографии."
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
          "text": "Спасибо тебе за этот дождливый киновечер, Влад. До встречи в «Паузе»."
        },
        {
          "speaker": "vlad",
          "text": "спасибо, что позвала. с тобой даже ливень превращается в лучшее свидание."
        },
        {
          "speaker": "narrator",
          "text": "Он коротко сжимает твои пальцы на прощание и провожает тебя взглядом через мокрый перекрёсток.",
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
