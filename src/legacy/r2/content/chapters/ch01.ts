// Exact dialogue transfer from outputs/CHAPTER_01_SCRIPT.md. Edit content, not UI.
import type { Chapter } from '../../engine/types';
export const chapter1 = {
  "id": 1,
  "contentVersion": 1,
  "title": "Случайная встреча",
  "entry": "c1.entry",
  "nodes": {
    "c1.entry": {
      "id": "c1.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты подходишь к кафе как раз в тот момент, когда дверь открывается изнутри."
        },
        {
          "speaker": "vlad",
          "text": "ой, проходи. я сейчас…"
        },
        {
          "speaker": "narrator",
          "text": "Он придерживает дверь локтем. Коробка под другой рукой решает, что её тоже пригласили открыться."
        },
        {
          "speaker": "narrator",
          "text": "Три круглых жетона скользят на коврик. Один останавливается у твоей обуви."
        },
        {
          "speaker": "vlad",
          "text": "так. вход бесплатный. это не касса рассыпалась.",
          "emotion": "awkward"
        }
      ],
      "next": "c1.door"
    },
    "c1.door": {
      "id": "c1.door",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты останавливаешь последний жетон носком обуви. На нём две маленькие точки."
        },
        {
          "speaker": "vlad",
          "text": "спасибо. я думал, успею красиво придержать дверь."
        },
        {
          "speaker": "vlad",
          "text": "в целом придержал. остальные задачи обсуждаются."
        },
        {
          "speaker": "narrator",
          "text": "Из-под ближайшего стола появляется кот и внимательно смотрит на коврик."
        }
      ],
      "next": "c1.approach"
    },
    "c1.approach": {
      "id": "c1.approach",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "joke",
          "text": "Это настолка или эффектное знакомство?",
          "next": "c1.approach.joke",
          "effects": [
            {
              "kind": "set",
              "key": "approach",
              "value": "joke"
            }
          ]
        },
        {
          "id": "help",
          "text": "Держи коробку. Я помогу собрать",
          "next": "c1.approach.help",
          "effects": [
            {
              "kind": "set",
              "key": "approach",
              "value": "help"
            }
          ]
        },
        {
          "id": "space",
          "text": "Давай сначала освободим проход",
          "next": "c1.approach.space",
          "effects": [
            {
              "kind": "set",
              "key": "approach",
              "value": "space"
            }
          ]
        }
      ]
    },
    "c1.approach.joke": {
      "id": "c1.approach.joke",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.awkward"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "до этой секунды была настолка."
        },
        {
          "speaker": "vlad",
          "text": "теперь пытаюсь понять, можно ли оставить оба варианта."
        },
        {
          "speaker": "heroine",
          "text": "Сначала посмотрим, сколько деталей выжило."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается и переносит коробку на свободный край столика."
        },
        {
          "speaker": "vlad",
          "text": "справедливо. знакомство с проверкой комплектации."
        }
      ],
      "next": "c1.names"
    },
    "c1.approach.help": {
      "id": "c1.approach.help",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай. я тогда отвечаю за то, чтобы не высыпать вторую половину."
        },
        {
          "speaker": "narrator",
          "text": "Он ставит пустой стакан и крепко придерживает крышку."
        },
        {
          "speaker": "heroine",
          "text": "Сложная должность."
        },
        {
          "speaker": "vlad",
          "text": "пока испытательный срок. спасибо, что выручаешь."
        }
      ],
      "next": "c1.names"
    },
    "c1.approach.space": {
      "id": "c1.approach.space",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "да, конечно. я тут целый филиал открыл."
        },
        {
          "speaker": "narrator",
          "text": "Он отступает к столику и убирает сумку с прохода. Теперь дверь свободно закрывается."
        },
        {
          "speaker": "heroine",
          "text": "Вот. Уже гораздо лучше."
        },
        {
          "speaker": "vlad",
          "text": "согласен. сначала проход, потом моя маленькая катастрофа."
        }
      ],
      "next": "c1.names"
    },
    "c1.names": {
      "id": "c1.names",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я Влад, кстати. обычно знакомлюсь без инвентаря на полу."
        },
        {
          "speaker": "heroine",
          "text": "Приятно познакомиться. Хотя этот способ запоминается."
        },
        {
          "speaker": "vlad",
          "text": "хех. тогда пусть будет авторская методика."
        },
        {
          "speaker": "nina",
          "text": "Влад, если это новая игра, кот уже занял первое место."
        },
        {
          "speaker": "narrator",
          "text": "Кот укладывается на коврике рядом с зонтиком."
        },
        {
          "speaker": "vlad",
          "text": "у него очень сильная стартовая позиция."
        }
      ],
      "next": "c1.search.intro"
    },
    "c1.search.intro": {
      "id": "c1.search.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Под коробкой написано: «Три дорожных жетона». Все три сейчас где-то у входа."
        },
        {
          "speaker": "vlad",
          "text": "я придержу коробку. посмотришь вокруг?"
        },
        {
          "speaker": "heroine",
          "text": "А кота передвигать надо?"
        },
        {
          "speaker": "vlad",
          "text": "думаю, это отдельная платная механика. обойдём."
        }
      ],
      "next": "c1.search"
    },
    "c1.search": {
      "id": "c1.search",
      "kind": "minigame",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "game": "token-search",
      "next": "c1.search.route"
    },
    "c1.search.tidy": {
      "id": "c1.search.tidy",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.surprised"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Все три жетона возвращаются в коробку. Кот даже не успевает вмешаться."
        },
        {
          "speaker": "vlad",
          "text": "вот это быстро. ты раньше работала с убегающими настолками?"
        },
        {
          "speaker": "heroine",
          "text": "У меня просто хороший вид на пол."
        },
        {
          "speaker": "vlad",
          "text": "а я уже приготовился впечатляться. оставлю чуть-чуть."
        }
      ],
      "next": "c1.inside"
    },
    "c1.search.detour": {
      "id": "c1.search.detour",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Жетоны найдены. Заодно вы знаете почти всё о коврике."
        },
        {
          "speaker": "vlad",
          "text": "собрали игру и провели исследование помещения."
        },
        {
          "speaker": "heroine",
          "text": "Коврик подозрительный."
        },
        {
          "speaker": "vlad",
          "text": "да. слишком хорошо притворяется жетоном."
        }
      ],
      "next": "c1.inside"
    },
    "c1.search.skipped": {
      "id": "c1.search.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай я закончу. а ты придержи крышку, пожалуйста."
        },
        {
          "speaker": "narrator",
          "text": "Он собирает оставшиеся жетоны и закрывает коробку обеими руками."
        },
        {
          "speaker": "heroine",
          "text": "Вот теперь надёжно."
        },
        {
          "speaker": "vlad",
          "text": "командная работа. у коробки больше нет шансов."
        }
      ],
      "next": "c1.inside"
    },
    "c1.inside": {
      "id": "c1.inside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Можете поставить коробку сюда. И сами сесть, если хотите."
        },
        {
          "speaker": "narrator",
          "text": "У окна свободный столик. На улице кто-то торопится мимо, а здесь тихо звякает ложка."
        },
        {
          "speaker": "vlad",
          "text": "я как раз собирался сделать перерыв. только начал с физкультуры."
        },
        {
          "speaker": "vlad",
          "text": "если есть пять минут, можно посидеть. если нет — коробка всё равно благодарна."
        }
      ],
      "next": "c1.pace"
    },
    "c1.pace": {
      "id": "c1.pace",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "quiet",
          "text": "Есть пять минут. Только давай спокойно",
          "next": "c1.pace.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "pace",
              "value": "quiet"
            }
          ]
        },
        {
          "id": "playful",
          "text": "Ладно, рассказывай, что ещё умеет эта коробка",
          "next": "c1.pace.playful",
          "effects": [
            {
              "kind": "set",
              "key": "pace",
              "value": "playful"
            }
          ]
        },
        {
          "id": "flirt",
          "text": "Могу задержаться. Ты забавно знакомишься",
          "next": "c1.pace.flirt",
          "effects": [
            {
              "kind": "set",
              "key": "pace",
              "value": "flirt"
            }
          ]
        }
      ]
    },
    "c1.pace.quiet": {
      "id": "c1.pace.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай. без обязательной развлекательной программы."
        },
        {
          "speaker": "narrator",
          "text": "Он ставит коробку на соседний стул и садится напротив, оставив проход свободным."
        },
        {
          "speaker": "heroine",
          "text": "Вот так хорошо."
        },
        {
          "speaker": "vlad",
          "text": "угу. иногда лучший план — просто сесть."
        }
      ],
      "next": "c1.table"
    },
    "c1.pace.playful": {
      "id": "c1.pace.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "умеет делать вид, что правила короткие."
        },
        {
          "speaker": "heroine",
          "text": "А на самом деле?"
        },
        {
          "speaker": "vlad",
          "text": "сначала говорят «сейчас объясню». потом меняется время года."
        },
        {
          "speaker": "narrator",
          "text": "Он разворачивает коробку картинкой к тебе, но инструкцию пока не достаёт."
        }
      ],
      "next": "c1.table"
    },
    "c1.pace.flirt": {
      "id": "c1.pace.flirt",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.awkward"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда хорошо, что обычный способ сегодня не сработал."
        },
        {
          "speaker": "heroine",
          "text": "Не привыкай. Вторую коробку я ловить не обещала."
        },
        {
          "speaker": "vlad",
          "text": "понял. дальше попробую словами."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается и на секунду смотрит на шарф, будто там написана следующая реплика."
        }
      ],
      "next": "c1.table"
    },
    "c1.table": {
      "id": "c1.table",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Нина ставит на стол воду. Влад освобождает место, сдвинув коробку подальше от края."
        },
        {
          "speaker": "vlad",
          "text": "я сегодня весь день сидел над своим проектом. решил выйти и побыть нормальным человеком."
        },
        {
          "speaker": "heroine",
          "text": "И взял с собой инструкцию."
        },
        {
          "speaker": "vlad",
          "text": "привычка. я backend пишу. люблю, когда внутри понятно, что происходит."
        },
        {
          "speaker": "vlad",
          "text": "с коробкой, как видишь, пока есть вопросы."
        },
        {
          "speaker": "narrator",
          "text": "На крышке нарисованы маленькая дорожка, чайник и два флажка."
        }
      ],
      "next": "c1.detail"
    },
    "c1.detail": {
      "id": "c1.detail",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "box",
          "text": "Показать на два флажка: “Тут играют вместе?”",
          "next": "c1.detail.box"
        },
        {
          "id": "cat",
          "text": "Посмотреть, куда устроился кот",
          "next": "c1.detail.cat"
        },
        {
          "id": "window",
          "text": "На минуту отвлечься на окно",
          "next": "c1.detail.window"
        }
      ]
    },
    "c1.detail.box": {
      "id": "c1.detail.box",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "да. надо довести двух путешественников до домика."
        },
        {
          "speaker": "heroine",
          "text": "И никто никого не съедает?"
        },
        {
          "speaker": "vlad",
          "text": "только если очень голодный игрок. вообще тут помогают друг другу."
        },
        {
          "speaker": "narrator",
          "text": "Он показывает маленький деревянный мостик, затем аккуратно убирает его обратно."
        },
        {
          "speaker": "vlad",
          "text": "мне такие больше нравятся. можно спорить с игрой, а не между собой."
        },
        {
          "speaker": "heroine",
          "text": "Хотя про мостик мы ещё можем поспорить."
        }
      ],
      "next": "c1.pause"
    },
    "c1.detail.cat": {
      "id": "c1.detail.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Пончик ушёл с коврика и занял стул рядом с коробкой."
        },
        {
          "speaker": "heroine",
          "text": "Кажется, у вас уже есть второй игрок."
        },
        {
          "speaker": "vlad",
          "text": "он больше по управлению персоналом."
        },
        {
          "speaker": "nina",
          "text": "И по перерывам. Сейчас как раз работает."
        },
        {
          "speaker": "narrator",
          "text": "Кот зажмуривается. Влад тихо отодвигает коробку, чтобы ему было просторнее."
        },
        {
          "speaker": "vlad",
          "text": "сильный специалист. мне бы так закрывать рабочий день."
        }
      ],
      "next": "c1.pause"
    },
    "c1.detail.window": {
      "id": "c1.detail.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На стекле дрожит отражение лампы. Снаружи у остановки ветер выворачивает чей-то капюшон."
        },
        {
          "speaker": "heroine",
          "text": "Хорошо, что здесь тепло."
        },
        {
          "speaker": "vlad",
          "text": "да. я обычно в бассейн иду, когда надо голову проветрить."
        },
        {
          "speaker": "vlad",
          "text": "только звучит странно. голова в воде, а проветривается."
        },
        {
          "speaker": "heroine",
          "text": "Тут можно хотя бы без шапочки."
        },
        {
          "speaker": "narrator",
          "text": "Он кивает. Несколько секунд вы просто смотрите на улицу."
        }
      ],
      "next": "c1.pause"
    },
    "c1.pause": {
      "id": "c1.pause",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В телефоне Влада коротко загорается экран. Он переворачивает его, не начиная объяснять, насколько занят."
        },
        {
          "speaker": "vlad",
          "text": "я вообще шёл отдохнуть минут десять. пока что самая удачная часть дня."
        },
        {
          "speaker": "heroine",
          "text": "Даже с жетонами?"
        },
        {
          "speaker": "vlad",
          "text": "ну без них я бы уже ушёл. так что у меня к ним смешанные чувства."
        },
        {
          "speaker": "narrator",
          "text": "Нина кладёт у стойки меню. Кот вытягивает лапу, но до него не достаёт."
        }
      ],
      "next": "c1.plan"
    },
    "c1.plan": {
      "id": "c1.plan",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "tea",
          "text": "Давай всё-таки возьмём чай",
          "next": "c1.end.tea",
          "effects": [
            {
              "kind": "set",
              "key": "plan",
              "value": "tea"
            }
          ]
        },
        {
          "id": "banter",
          "text": "У меня ещё пять минут на твою авторскую методику",
          "next": "c1.end.banter",
          "effects": [
            {
              "kind": "set",
              "key": "plan",
              "value": "banter"
            }
          ]
        },
        {
          "id": "coop",
          "text": "В следующий раз покажешь эту игру?",
          "next": "c1.end.coop",
          "effects": [
            {
              "kind": "set",
              "key": "plan",
              "value": "coop"
            }
          ]
        }
      ]
    },
    "c1.end.tea": {
      "id": "c1.end.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай. чай я хотя бы могу удержать двумя руками."
        },
        {
          "speaker": "heroine",
          "text": "Коробку оставим на испытательном сроке."
        },
        {
          "speaker": "narrator",
          "text": "Вы выбираете чай по меню. Нина ставит на стол две чашки, оставив ручки с удобной стороны."
        },
        {
          "speaker": "vlad",
          "text": "спасибо, что задержалась."
        },
        {
          "speaker": "narrator",
          "text": "Разговор ненадолго стихает. Теперь тишина не кажется неловкой."
        },
        {
          "speaker": "vlad",
          "text": "можно как-нибудь повторить. уже без вступительного номера."
        },
        {
          "speaker": "narrator",
          "text": "У входа Пончик укладывается на серый зонтик. Влад смотрит в другую сторону."
        },
        {
          "speaker": "narrator",
          "text": "Кажется, у следующего плана уже появился маленький пушистый недостаток."
        }
      ],
      "next": "c1.finish.tea"
    },
    "c1.end.banter": {
      "id": "c1.end.banter",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда пункт второй: больше ничего не ронять."
        },
        {
          "speaker": "narrator",
          "text": "С соседнего стула падает его шарф."
        },
        {
          "speaker": "heroine",
          "text": "Сильная программа. Сразу практика."
        },
        {
          "speaker": "vlad",
          "text": "ладно. пункт второй перенесён на следующую встречу."
        },
        {
          "speaker": "narrator",
          "text": "Он поднимает шарф. Вы оба смеётесь, уже не стараясь выглядеть особенно собранными."
        },
        {
          "speaker": "vlad",
          "text": "хорошо посидели. неожиданно буквально."
        },
        {
          "speaker": "narrator",
          "text": "Пончик возвращается ко входу и ложится на серый зонтик."
        },
        {
          "speaker": "narrator",
          "text": "До следующего пункта программы зонтик, похоже, не доживёт незамеченным."
        }
      ],
      "next": "c1.finish.banter"
    },
    "c1.end.coop": {
      "id": "c1.end.coop",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "покажу. там как раз нужен второй человек, который замечает, что я делаю."
        },
        {
          "speaker": "heroine",
          "text": "То есть должность уже знакомая."
        },
        {
          "speaker": "vlad",
          "text": "опыт с коробкой засчитывается."
        },
        {
          "speaker": "narrator",
          "text": "Он кладёт на крышку жетон с двумя точками, затем убирает его в отдельный кармашек."
        },
        {
          "speaker": "vlad",
          "text": "сохраним место. у нас тут ещё мостик непостроенный."
        },
        {
          "speaker": "heroine",
          "text": "Главное, чтобы в следующий раз детали остались внутри."
        },
        {
          "speaker": "narrator",
          "text": "Пончик занимает забытый у двери зонтик. Влад проверяет только застёжку коробки."
        },
        {
          "speaker": "narrator",
          "text": "Одна проблема решена. Следующая пока уютно лежит под котом."
        }
      ],
      "next": "c1.finish.coop"
    },
    "c1.search.route": {
      "id": "c1.search.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "searchResult",
              "equals": "tidy"
            }
          ],
          "next": "c1.search.tidy"
        },
        {
          "all": [
            {
              "key": "searchResult",
              "equals": "detour"
            }
          ],
          "next": "c1.search.detour"
        }
      ],
      "fallback": "c1.search.skipped"
    },
    "c1.finish.tea": {
      "id": "c1.finish.tea",
      "kind": "end",
      "endingId": "c1.tea",
      "cardId": "c1.tea"
    },
    "c1.finish.banter": {
      "id": "c1.finish.banter",
      "kind": "end",
      "endingId": "c1.banter",
      "cardId": "c1.banter"
    },
    "c1.finish.coop": {
      "id": "c1.finish.coop",
      "kind": "end",
      "endingId": "c1.coop",
      "cardId": "c1.coop"
    }
  }
} satisfies Chapter;
