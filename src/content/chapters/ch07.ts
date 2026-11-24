// Scenario reference: outputs/CHAPTER_07_SCRIPT.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter7:Chapter = {
  "id": 7,
  "contentVersion": CONTENT_VERSION,
  "scriptRevision": 5,
  "title": "На шаг левее",
  "entry": "c7.gallery.entry",
  "nodes": {
    "c7.gallery.entry": {
      "id": "c7.gallery.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На высокой стеклянной двери галереи висит та самая чёрно-белая афиша с набережной, только почти в человеческий рост."
        },
        {
          "speaker": "narrator",
          "text": "Влад уже ждёт у входа. Заметив тебя, он сразу отрывается от плаката и шагает навстречу."
        },
        {
          "speaker": "heroine",
          "text": "Ну что, разгадал наконец — лестница там или крыша?"
        },
        {
          "speaker": "vlad",
          "text": "десять минут тут кручу головой. сначала был уверен, что ступени, а потом ты подошла — и я потерял нить расследования."
        },
        {
          "speaker": "vlad",
          "text": "пришёл чуть раньше. хотелось встретить тебя здесь, у двери."
        },
        {
          "speaker": "narrator",
          "text": "От него пахнет вечерним воздухом и тем самым свежим, чуть древесным парфюмом."
        },
        {
          "speaker": "heroine",
          "text": "В тот раз с верхней дорожки тоже были видны одни края крыш. А стоило подойти ближе — совсем другой вид.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "В тот раз с верхней дорожки тоже были видны одни края крыш. А стоило подойти ближе — совсем другой вид."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "В тот раз у воды лестница в отражении тоже совсем на себя не походила. А здесь то же самое — только в свете и тени."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "хорошо, что ты вытащила нас сюда. один я бы просто прошёл мимо витрины."
        },
        {
          "speaker": "narrator",
          "text": "Влад открывает дверь; на стекле мелькает маленький значок перечёркнутого фотоаппарата."
        },
        {
          "speaker": "vlad",
          "text": "ага. значит, нашему аппарату внутри положен тихий час, а снимать будем уже на выходе."
        },
        {
          "speaker": "narrator",
          "text": "Ты проверяешь молнию сумки и шагаешь в приглушённый свет зала."
        }
      ],
      "next": "c7.gallery.first"
    },
    "c7.gallery.first": {
      "id": "c7.gallery.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В камерном зале стоит почти музейная тишина. Под лучами ламп висят три крупные работы, у дальней стены — одна узкая деревянная скамейка."
        },
        {
          "speaker": "heroine",
          "text": "Здесь так тихо, что даже шептаться хочется осторожно.",
          "delivery": "вполголоса"
        },
        {
          "speaker": "narrator",
          "text": "Чтобы не нарушать тишину, Влад наклоняется чуть ближе и говорит совсем тихо:"
        },
        {
          "speaker": "vlad",
          "text": "зато никто никуда не гонит."
        },
        {
          "speaker": "vlad",
          "text": "как пойдём смотреть?"
        }
      ],
      "next": "c7.gallery.route"
    },
    "c7.gallery.route": {
      "id": "c7.gallery.route",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "together",
          "text": "Пройдём всю серию вдвоём, слева направо",
          "next": "c7.gallery.together",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryRoute",
              "value": "together"
            }
          ]
        },
        {
          "id": "apart",
          "text": "Разойдёмся, а потом каждый проведёт другого к своей находке",
          "next": "c7.gallery.apart",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryRoute",
              "value": "apart"
            }
          ]
        }
      ]
    },
    "c7.gallery.together": {
      "id": "c7.gallery.together",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай пройдём всю серию вдвоём, не спеша."
        },
        {
          "speaker": "narrator",
          "text": "Вы неторопливо идёте вдоль первой перегородки — в полутени подсвечены только фотографии, и шаги звучат приглушённо."
        },
        {
          "speaker": "narrator",
          "text": "У центральной работы со сколотым краем ступени Влад замедляет шаг и легонько трогает тебя за рукав."
        },
        {
          "speaker": "vlad",
          "text": "вот эта сразу цепляет взгляд."
        },
        {
          "speaker": "heroine",
          "text": "Та, где на краю ступеньки треугольный скол?"
        },
        {
          "speaker": "vlad",
          "text": "да. среди всех прямых линий здесь вдруг что-то живое и настоящее."
        },
        {
          "speaker": "narrator",
          "text": "Внутри треугольной выемки в полосе падающего света белеют мелкие светлые камешки."
        },
        {
          "speaker": "narrator",
          "text": "Следом вы останавливаетесь у третьей работы — старой синей двери с узкой полоской света справа."
        }
      ],
      "next": "c7.gallery.pick"
    },
    "c7.gallery.apart": {
      "id": "c7.gallery.apart",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай на пару минут разойдёмся, а потом каждый приведёт другого к той работе, у которой захотелось остаться."
        },
        {
          "speaker": "vlad",
          "text": "идёт. встречаемся на скамейке в глубине — я займу место."
        },
        {
          "speaker": "heroine",
          "text": "Тут ведь всего одна скамейка на весь зал."
        },
        {
          "speaker": "vlad",
          "text": "вот поэтому я и не хочу делить её ни с кем, кроме тебя."
        },
        {
          "speaker": "narrator",
          "text": "Ты проходишь за перегородку к «Просвету» — синей двери с узкой полоской света у порога — и к соседнему снимку сколотой ступени."
        },
        {
          "speaker": "narrator",
          "text": "Но боковым зрением замечаешь в просвете между перегородками, что Влад у соседнего стенда смотрит совсем не на раму, а на тебя."
        },
        {
          "speaker": "narrator",
          "text": "Когда ты подходишь к скамейке, он сразу подвигается, освобождая место рядом:"
        },
        {
          "speaker": "vlad",
          "text": "меня больше всего зацепила ступенька со сколом. а куда поведёшь меня ты?"
        }
      ],
      "next": "c7.gallery.pick"
    },
    "c7.gallery.pick": {
      "id": "c7.gallery.pick",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "blue",
          "text": "Мне больше нравится «Просвет». Покажу синюю дверь",
          "next": "c7.gallery.blue",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryWork",
              "value": "blue"
            }
          ]
        },
        {
          "id": "chip",
          "text": "Мне тоже нравится «Скол». Покажу одну деталь",
          "next": "c7.gallery.chip",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryWork",
              "value": "chip"
            }
          ]
        }
      ]
    },
    "c7.gallery.blue": {
      "id": "c7.gallery.blue",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты подводишь Влада за узкую перегородку, к синей двери «Просвета»."
        },
        {
          "speaker": "heroine",
          "text": "Посмотри вот отсюда. Почти весь кадр в тени, а справа в этой узкой щели столько света."
        },
        {
          "speaker": "narrator",
          "text": "Чтобы поймать кадр без блика от софита, Влад делает шаг в узкий проход рядом с тобой."
        },
        {
          "speaker": "narrator",
          "text": "Ты поворачиваешь голову, чтобы показать на порог, — и он в ту же секунду наклоняется к тебе. В полутени за перегородкой ваши лица вдруг оказываются всего в паре сантиметров друг от друга."
        },
        {
          "speaker": "narrator",
          "text": "В тишине слышно, как сбивается его вдох. Влад на секунду опускает взгляд на твои губы, потом снова смотрит в глаза и говорит почти шёпотом:"
        },
        {
          "speaker": "vlad",
          "text": "знаешь… мне рядом с тобой очень трудно делать вид, что я смотрю на выставку."
        },
        {
          "speaker": "narrator",
          "text": "Секунду никто из вас не двигается — воздух между вами буквально звенит от недосказанности. Затем в зал входят люди, и Влад, тихо выдохнув, делает полшага назад."
        }
      ],
      "next": "c7.gallery.replay"
    },
    "c7.gallery.chip": {
      "id": "c7.gallery.chip",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы подходите в полутень к «Сколу». Пространства перед перегородкой немного, и вы встаёте совсем близко перед рамой."
        },
        {
          "speaker": "heroine",
          "text": "Мне тоже полюбилась эта работа. Смотри, как внутри тёмного скола светятся маленькие камешки."
        },
        {
          "speaker": "narrator",
          "text": "Поднимая руку, чтобы указать на выемку, ты замечаешь в тёмном стекле рамы отражение: Влад смотрит не на фотографию, а на тебя."
        },
        {
          "speaker": "narrator",
          "text": "Ты поворачиваешь голову — и вы оказываетесь глаза в глаза, на расстоянии одного вдоха. Его взгляд на мгновение скользит к твоим губам, а голос падает почти до шёпота:"
        },
        {
          "speaker": "vlad",
          "text": "я сначала смотрел только на тень… а сейчас вообще ничего, кроме тебя, здесь не вижу."
        },
        {
          "speaker": "narrator",
          "text": "Между вами остаётся буквально полшага — но у входа раздаются шаги смотрителя. Влад чуть хмыкает с досадой и кивает в сторону скамейки в глубине зала."
        }
      ],
      "next": "c7.gallery.replay"
    },
    "c7.gallery.replay": {
      "id": "c7.gallery.replay",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Кажется, на скамейке сейчас будет спокойнее."
        },
        {
          "speaker": "vlad",
          "text": "насчёт спокойствия не обещаю, но место в первом ряду всё ещё наше."
        },
        {
          "speaker": "narrator",
          "text": "Вы садитесь на узкую деревянную скамейку у дальней стены. Влад достаёт складной план зала с тремя прямоугольниками стендов и дверью выхода."
        },
        {
          "speaker": "vlad",
          "text": "эти перегородки расставлены прямо как моя любимая головоломка на два хода: пока двое идут поодиночке в обход — застревают, а стоит одному подождать второго — выходят вместе."
        },
        {
          "speaker": "heroine",
          "text": "И как бы ты провёл нас отсюда?"
        },
        {
          "speaker": "narrator",
          "text": "Вместо того чтобы чертить по бумаге, Влад откладывает листок и, чуть помедлив, протягивает руку к твоей ладони."
        },
        {
          "speaker": "narrator",
          "text": "Кончиком пальца он медленно проводит короткую воображаемую линию по твоей ладони — от запястья к центру."
        },
        {
          "speaker": "narrator",
          "text": "От этого спокойного, неожиданного жеста разговор про схему сразу теряет всякий смысл."
        },
        {
          "speaker": "vlad",
          "text": "вот здесь мы зашли… вот здесь задержались за перегородкой… а вот тут выходим вместе.",
          "delivery": "тихо"
        },
        {
          "speaker": "heroine",
          "text": "Кажется, на твоём маршруте была очень долгая остановка посередине."
        },
        {
          "speaker": "vlad",
          "text": "лучшая остановка. я бы её повторил."
        },
        {
          "speaker": "narrator",
          "text": "Он коротко сжимает твои пальцы, и вы поднимаетесь к выходу."
        }
      ],
      "next": "c7.gallery.rack"
    },
    "c7.gallery.rack": {
      "id": "c7.gallery.rack",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У выхода на поворотной стойке стоят матовые открытки с работами выставки: крупный треугольный скол со светлыми камешками и синяя дверь «Просвета»."
        },
        {
          "speaker": "narrator",
          "text": "На открытке «Просвета» внизу угадывается каменный порог, а на «Сколе» чётко видна светлая выемка в тени."
        },
        {
          "speaker": "narrator",
          "text": "Влад уже придерживает стеклянную дверь в двух шагах впереди, а стойка оказывается прямо у тебя под рукой."
        },
        {
          "speaker": "devil",
          "text": "Если крутануть барабан стойки посильнее, все выставки города смешаются в одну."
        },
        {
          "speaker": "angel",
          "text": "Лучше выбрать одну карточку, которая останется у него дома и будет напоминать о сегодняшнем вечере."
        }
      ],
      "next": "c7.gallery.card",
      "presentation": "adviser-aside"
    },
    "c7.gallery.card": {
      "id": "c7.gallery.card",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "chip",
          "text": "Подарю Владу «Скол»",
          "next": "c7.gallery.giveChip",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "chip"
            }
          ]
        },
        {
          "id": "blue",
          "text": "Подарю Владу «Просвет»",
          "next": "c7.gallery.giveBlue",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "blue"
            }
          ]
        },
        {
          "id": "none",
          "text": "Оставлю открытки на стойке",
          "next": "c7.gallery.leaveCards",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c7.gallery.giveChip": {
      "id": "c7.gallery.giveChip",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты берёшь открытку со «Сколом», оплачиваешь у входа и подходишь к Владу у двери."
        },
        {
          "speaker": "heroine",
          "text": "Это тебе. Забирай домой ту самую работу, к которой ты возвращался."
        },
        {
          "speaker": "vlad",
          "text": "подожди… ты купила её для меня?"
        },
        {
          "speaker": "narrator",
          "text": "Влад принимает карточку за белые поля и на секунду искренне теряет слова — видно, как его это тронуло.",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "chip"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "спасибо. поставлю её дома на видное место — чтобы вспоминать, как мы стояли перед ней в этом зале."
        },
        {
          "speaker": "narrator",
          "text": "Он аккуратно прячет открытку внутрь сложенного буклета во внутренний карман пальто."
        }
      ],
      "next": "c7.gallery.outside"
    },
    "c7.gallery.giveBlue": {
      "id": "c7.gallery.giveBlue",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты покупаешь синюю открытку «Просвета» и протягиваешь её Владу у распахнутой двери."
        },
        {
          "speaker": "heroine",
          "text": "Держи. Хочу, чтобы моя любимая работа с сегодняшнего вечера осталась у тебя."
        },
        {
          "speaker": "vlad",
          "text": "твоя любимая… значит, дома у неё будет особое место."
        },
        {
          "speaker": "heroine",
          "text": "Только не прячь её далеко за монитор."
        },
        {
          "speaker": "narrator",
          "text": "Влад рассматривает синюю карточку на свету и благодарно сжимает твои пальцы.",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "blue"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "ни за что не спрячу. буду смотреть на эту дверь и вспоминать то, что было за перегородкой. спасибо."
        },
        {
          "speaker": "narrator",
          "text": "Он убирает открытку в буклет и кладёт во внутренний карман."
        }
      ],
      "next": "c7.gallery.outside"
    },
    "c7.gallery.leaveCards": {
      "id": "c7.gallery.leaveCards",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты проходишь мимо стойки к Владу, который придерживает для тебя дверь на улицу.",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "none"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Кажется, после сегодняшнего вечера я и без открыток запомню каждую линию в этом зале."
        },
        {
          "speaker": "vlad",
          "text": "я тоже. особенно тот момент у перегородки. осторожно, здесь у порога ступенька."
        },
        {
          "speaker": "narrator",
          "text": "Он подаёт тебе руку, помогая спуститься с крыльца на вечерний тротуар."
        }
      ],
      "next": "c7.gallery.outside"
    },
    "c7.gallery.outside": {
      "id": "c7.gallery.outside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На улице свежо. Тёмное витринное стекло рядом с афишей отражает огни фасада напротив и вас двоих на крыльце."
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь из сумки плёночный аппарат. На счётчике по-прежнему цифра «9»."
        },
        {
          "speaker": "vlad",
          "text": "ну вот, тихий час для фотографов закончился. выбирай, каким будет наш главный кадр у галереи."
        }
      ],
      "next": "c7.gallery.frame"
    },
    "c7.gallery.frame": {
      "id": "c7.gallery.frame",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "vlad",
          "text": "Я сниму тебя у афиши",
          "next": "c7.gallery.shotVlad",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFrame",
              "value": "vlad"
            }
          ]
        },
        {
          "id": "her",
          "text": "Теперь ты меня. Силуэт на пороге",
          "next": "c7.gallery.shotHer",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFrame",
              "value": "her"
            }
          ]
        },
        {
          "id": "both",
          "text": "Давай сниму нас обоих в стекле",
          "next": "c7.gallery.shotBoth",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFrame",
              "value": "both"
            }
          ]
        }
      ]
    },
    "c7.gallery.shotVlad": {
      "id": "c7.gallery.shotVlad",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Встань на секунду у афиши — чуть левее, чтобы белая полоса на плакате шла прямо к твоему плечу."
        },
        {
          "speaker": "narrator",
          "text": "Влад прислоняется к краю витрины. Светлая диагональ на бумаге удивительно точно продолжает линию его воротника."
        },
        {
          "speaker": "vlad",
          "text": "вот так?"
        },
        {
          "speaker": "heroine",
          "text": "Да. И не двигайся секунду."
        },
        {
          "speaker": "vlad",
          "text": "замер. смотрю только на фотографа."
        },
        {
          "speaker": "narrator",
          "text": "Через видоискатель видно, как спокойно и прямо он смотрит сквозь объектив на тебя. Ты нажимаешь спуск и прокручиваешь колёсико.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c7.gallery.film"
    },
    "c7.gallery.shotHer": {
      "id": "c7.gallery.shotHer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сними лучше меня на пороге — там изнутри падает такая же полоса света, как на «Просвете»."
        },
        {
          "speaker": "narrator",
          "text": "Ты передаёшь камеру Владу и встаёшь на ступеньке у края приоткрытой двери.",
          "effects": [
            {
              "kind": "set",
              "key": "c7CameraHolder",
              "value": "vlad"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "стой ровно так… твой профиль в этой полосе света сейчас лучше всей выставки."
        },
        {
          "speaker": "heroine",
          "text": "Не смущай модель, снимай!"
        },
        {
          "speaker": "narrator",
          "text": "Влад с усмешкой нажимает спуск, прокручивает колёсико и подаёт тебе руку, помогая сойти со ступеньки.",
          "effects": [
            {
              "kind": "set",
              "key": "c7CameraHolder",
              "value": "her"
            },
            {
              "kind": "set",
              "key": "c7Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c7.gallery.film"
    },
    "c7.gallery.shotBoth": {
      "id": "c7.gallery.shotBoth",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай сниму наше отражение в тёмном стекле — если встанем близко, поместимся оба."
        },
        {
          "speaker": "narrator",
          "text": "Панель стекла узкая. Чтобы оба силуэта вошли в одну раму без бликов, Влад встаёт совсем близко сбоку за тобой и чуть наклоняет голову к твоему уровню."
        },
        {
          "speaker": "narrator",
          "text": "В тёмном отражении стекла хорошо видно, как легко вы смотритесь рядом."
        },
        {
          "speaker": "vlad",
          "text": "смотри, в отражении козырёк над нами похож на одну общую крышу.",
          "delivery": "тихо"
        },
        {
          "speaker": "heroine",
          "text": "Мне нравится эта крыша."
        },
        {
          "speaker": "narrator",
          "text": "За секунду до щелчка вы смотрите в стекле не на камеру, а друг на друга. Ты нажимаешь кнопку спуска.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c7.gallery.film"
    },
    "c7.gallery.film": {
      "id": "c7.gallery.film",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На счётчике восемь. По дороге к перекрёстку вы делаете ещё один кадр вечерней улицы в огнях витрин, а когда ты смеёшься его шутке у тёмного стекла, Влад перехватывает камеру и со словами «вот это упустить нельзя» снимает тебя врасплох."
        },
        {
          "speaker": "narrator",
          "text": "Когда он возвращает аппарат и ты убираешь его в сумку, на счётчике остаётся шесть кадров.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Film",
              "value": "six"
            },
            {
              "kind": "set",
              "key": "c7CameraHolder",
              "value": "her"
            }
          ]
        }
      ],
      "next": "c7.gallery.supper"
    },
    "c7.gallery.supper": {
      "id": "c7.gallery.supper",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Из приоткрытого окна маленького бистро на первом этаже тянет запахом жареного лука и свежего хлеба. Влад с интересом ведёт носом в сторону окна."
        },
        {
          "speaker": "vlad",
          "text": "вот эту экспозицию я понимаю вообще без буклетов."
        },
        {
          "speaker": "heroine",
          "text": "Так вот какие выставки тебя на самом деле вдохновляют."
        },
        {
          "speaker": "vlad",
          "text": "вообще-то у меня только что появилась идея получше любого бистро."
        },
        {
          "speaker": "narrator",
          "text": "Он останавливается напротив тебя под уличным фонарём — в голосе появляется лёгкое волнение:"
        },
        {
          "speaker": "vlad",
          "text": "приходи ко мне домой в следующий раз? хочу приготовить настоящий ужин вместе с тобой. на настоящей кухне, а не на экране телевизора."
        },
        {
          "speaker": "heroine",
          "text": "«Приготовить вместе» звучит очень заманчиво. Уступишь мне хотя бы половину кухни?"
        },
        {
          "speaker": "vlad",
          "text": "всю лучшую половину. у меня, правда, дома всего один фартук, но я готов торжественно носить его сам."
        },
        {
          "speaker": "heroine",
          "text": "Договорились, фартук твой. А начинку выберем уже на месте, у твоей плиты."
        },
        {
          "speaker": "vlad",
          "text": "ловлю на слове. продукты с меня — приходи к вечеру, буду ждать."
        },
        {
          "speaker": "narrator",
          "text": "На перекрёстке загорается зелёный. Владу прямо по бульвару, а тебе — через дорогу."
        }
      ],
      "next": "c7.gallery.farewell"
    },
    "c7.gallery.farewell": {
      "id": "c7.gallery.farewell",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "cheek",
          "text": "Задержать его руку и шагнуть к нему совсем близко",
          "next": "c7.gallery.cheek",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFarewell",
              "value": "cheek"
            }
          ]
        },
        {
          "id": "words",
          "text": "Улыбнуться ему и не спеша попрощаться",
          "next": "c7.gallery.words",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFarewell",
              "value": "words"
            }
          ]
        }
      ]
    },
    "c7.gallery.cheek": {
      "id": "c7.gallery.cheek",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Зелёный уже горит, но вместо шага на зебру ты берёшь Влада за руку и подходишь совсем близко."
        },
        {
          "speaker": "heroine",
          "text": "Подожди секунду, Влад.",
          "delivery": "тихо"
        },
        {
          "speaker": "narrator",
          "text": "Он сразу наклоняется навстречу. Ты приподнимаешься на носки, опираешься ладонью о его плечо и мягко целуешь его в щёку, совсем рядом с уголком губ.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Cheek",
              "value": true
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Когда ты отступаешь на полшага, Влад на секунду замирает совершенно обезоруженный, а его пальцы невольно сжимают твою ладонь крепче."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь стой секунду и никуда не беги. мне нужно успеть прийти в себя, пока ты не ушла через дорогу."
        },
        {
          "speaker": "narrator",
          "text": "Он наконец выдыхает и широко, немного растерянно усмехается."
        },
        {
          "speaker": "heroine",
          "text": "Успел. До встречи на нашей кухне, Влад."
        },
        {
          "speaker": "vlad",
          "text": "до встречи. теперь точно буду считать часы до этого ужина."
        },
        {
          "speaker": "narrator",
          "text": "Ты переходишь улицу под мигающий зелёный, чувствуя, что он не сдвинулся с места, пока ты не дошла до другого тротуара."
        }
      ],
      "next": "c7.gallery.end"
    },
    "c7.gallery.words": {
      "id": "c7.gallery.words",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Мне было очень хорошо с тобой в этом тихом зале. И приглашение на твою кухню я запомнила."
        },
        {
          "speaker": "vlad",
          "text": "я, кажется, весь остаток вечера буду вспоминать, как мы стояли за той перегородкой. спасибо, что позвала сюда."
        },
        {
          "speaker": "heroine",
          "text": "До скорой встречи, Влад."
        },
        {
          "speaker": "vlad",
          "text": "пока. увидимся у меня на кухне."
        },
        {
          "speaker": "narrator",
          "text": "Ты переходишь дорогу. Обернувшись с другого тротуара, видишь, что Влад ещё стоит на углу под фонарём и машет тебе на прощание."
        }
      ],
      "next": "c7.gallery.end"
    },
    "c7.gallery.end": {
      "id": "c7.gallery.end",
      "kind": "end",
      "endingId": "c7.gallery",
      "cardId": "c7.gallery"
    }
  }
};
