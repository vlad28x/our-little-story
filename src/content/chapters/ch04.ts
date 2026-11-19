// Authoritative text: outputs/SEASON_01_02_POLISH_SPEC_2026_11_19.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter4:Chapter = {
  "id": 4,
  "contentVersion": CONTENT_VERSION,
  "title": "Игровой вечер",
  "entry": "c4.sofa",
  "nodes": {
    "c4.sofa": {
      "id": "c4.sofa",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вечером следующего дня ты поднимаешься к квартире Влада. Из открытой двери сразу пахнет свежезаваренным чаем и домашним уютом."
        },
        {
          "speaker": "narrator",
          "text": "Влад встречает тебя в домашней футболке, чуть взъерошенный, и помогает снять пальто в прихожей."
        },
        {
          "speaker": "vlad",
          "text": "привет. проходи, я тут всё подготовил. честно признаюсь, три раза переставлял подушки на диване, пока тебя ждал."
        },
        {
          "speaker": "narrator",
          "text": "В комнате приглушён свет, горит торшер у дивана, а на книжной полке на самом видном месте стоит та самая коробка с двумя путешественниками из первой встречи."
        },
        {
          "speaker": "narrator",
          "text": "По всему этому порядку до мелочей сразу видно, как серьёзно он отнёсся к твоему приходу."
        },
        {
          "speaker": "vlad",
          "text": "располагайся где удобнее. чайник только вскипел, печенье на столике, плед тоже в твоём распоряжении."
        },
        {
          "speaker": "heroine",
          "text": "У пледа сегодня нет других планов на вечер?"
        },
        {
          "speaker": "vlad",
          "text": "сказал, что никуда не уйдёт, пока ты не согреешься с улицы."
        }
      ],
      "next": "c4.mood.route"
    },
    "c4.mood.route": {
      "id": "c4.mood.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "eveningMood",
              "equals": "quiet"
            }
          ],
          "next": "c4.mood.quiet"
        }
      ],
      "fallback": "c4.mood.playful"
    },
    "c4.mood.quiet": {
      "id": "c4.mood.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад убавляет звук телевизора почти до шёпота. За окном в тёмном дворе качаются ветви деревьев, а в комнате тихо и спокойно."
        },
        {
          "speaker": "vlad",
          "text": "можем вообще никуда не спешить. сначала попьём чаю, а уже потом решим судьбу виртуального ресторана."
        },
        {
          "speaker": "heroine",
          "text": "Мне нравится, когда ужин умеет подождать."
        },
        {
          "speaker": "vlad",
          "text": "особенно когда компания важнее любого расписания."
        }
      ],
      "next": "c4.pad.setup"
    },
    "c4.mood.playful": {
      "id": "c4.mood.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "ну что, ты тогда под дождём хотела посмотреть на эту кулинарную игру. сразу предупреждаю: шеф-повара из нас получатся сомнительные."
        },
        {
          "speaker": "heroine",
          "text": "Главное, чтобы настоящий чай и печенье не зависели от наших игровых талантов."
        },
        {
          "speaker": "vlad",
          "text": "о настоящей еде я позаботился заранее — открыл коробки и разложил по мискам. это мой самый надёжный рецепт, без риска спалить кухню."
        }
      ],
      "next": "c4.pad.setup"
    },
    "c4.pad.setup": {
      "id": "c4.pad.setup",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На экране светится мультяшная кухня. На столике дымятся две чашки, а на правый геймпад наклеен маленький бумажный стикер с нарисованным от руки вашим вчерашним созвездием."
        },
        {
          "speaker": "heroine",
          "text": "Подожди… это наше созвездие с набережной?"
        },
        {
          "speaker": "vlad",
          "text": "ага. нарисовал перед твоим приходом. чтобы второй игрок сразу видел, какой геймпад здесь его по праву.",
          "emotion": "awkward"
        },
        {
          "speaker": "narrator",
          "text": "Он садится на диван рядом и с лёгкой гордостью кивает на экран:"
        },
        {
          "speaker": "vlad",
          "text": "такс, всё на месте, игру запустил, два геймпада наготове. в этот раз я предусмотрел вообще всё."
        }
      ],
      "next": "c4.pad.press"
    },
    "c4.pad.press": {
      "id": "c4.pad.press",
      "kind": "choice",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "prompt": "Проверим второго игрока",
      "choices": [
        {
          "id": "press",
          "text": "Нажать кнопку второго геймпада",
          "next": "c4.pad.dead"
        }
      ]
    },
    "c4.pad.dead": {
      "id": "c4.pad.dead",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.awkward"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты берёшь геймпад со стикером-созвездием и нажимаешь центральную кнопку. У Влада послушно загорается белый огонёк, а твой остаётся тёмным."
        },
        {
          "speaker": "vlad",
          "text": "так."
        },
        {
          "speaker": "vlad",
          "text": "беру свои слова обратно. кажется, я подготовил ровно полтора геймпада."
        },
        {
          "speaker": "narrator",
          "text": "Он смотрит на погасший индикатор с таким комичным отчаянием, что сдержать смех невозможно."
        }
      ],
      "next": "c4.pad.reaction"
    },
    "c4.pad.reaction": {
      "id": "c4.pad.reaction",
      "kind": "choice",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.awkward"
      },
      "prompt": "Как отреагируешь?",
      "choices": [
        {
          "id": "tease",
          "text": "Вторую половину вечера тоже потом подготовишь?",
          "next": "c4.pad.tease",
          "effects": [
            {
              "kind": "set",
              "key": "controllerReaction",
              "value": "tease"
            }
          ]
        },
        {
          "id": "help",
          "text": "Запасные батарейки есть? Давай поменяем",
          "next": "c4.pad.help",
          "effects": [
            {
              "kind": "set",
              "key": "controllerReaction",
              "value": "help"
            }
          ]
        },
        {
          "id": "absurd",
          "text": "Посадим его на скамейку запасных. Пусть подумает",
          "next": "c4.pad.absurd",
          "effects": [
            {
              "kind": "set",
              "key": "controllerReaction",
              "value": "absurd"
            }
          ]
        }
      ]
    },
    "c4.pad.tease": {
      "id": "c4.pad.tease",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.awkward"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "вторую половину вечера я оставил на живую импровизацию. со мной она работает надёжнее техники."
        },
        {
          "speaker": "heroine",
          "text": "Очень удобное оправдание, Влад."
        },
        {
          "speaker": "vlad",
          "text": "ладно, раскусила. я так ждал звонка в дверь, что забыл проверить заряд. батарейки в тумбочке, одна секунда."
        },
        {
          "speaker": "narrator",
          "text": "Он достаёт свежую пару батареек и быстро меняет их прямо на диване, время от времени поглядывая на тебя с виноватой усмешкой."
        }
      ],
      "next": "c4.pad.ready"
    },
    "c4.pad.help": {
      "id": "c4.pad.help",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "есть, в верхнем ящике у торшера. сейчас достану."
        },
        {
          "speaker": "narrator",
          "text": "Влад протягивает две новые батарейки. Ты вставляешь их в отсек, а он придерживает пластиковую крышку, помогая её защёлкнуть."
        },
        {
          "speaker": "narrator",
          "text": "Ваши пальцы на секунду сталкиваются на корпусе геймпада — Влад коротко хмыкает и возвращает джойстик тебе."
        },
        {
          "speaker": "heroine",
          "text": "Готово. Проверяем?"
        },
        {
          "speaker": "vlad",
          "text": "спасибо. у нас с тобой даже замена батареек превращается в командную работу."
        }
      ],
      "next": "c4.pad.ready"
    },
    "c4.pad.absurd": {
      "id": "c4.pad.absurd",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты с серьёзным видом откладываешь провинившийся геймпад на дальний край диванной подушки."
        },
        {
          "speaker": "vlad",
          "text": "суровый подход. мне тоже стоит бояться попасть на скамейку запасных, если уроню чашку?"
        },
        {
          "speaker": "heroine",
          "text": "У тебя иммунитет хозяина квартиры. Но батарейки ему всё-таки принеси."
        },
        {
          "speaker": "narrator",
          "text": "Влад со смехом достаёт из ящика новую пару, возвращает геймпад к жизни и вкладывает его обратно в твои руки."
        }
      ],
      "next": "c4.pad.ready"
    },
    "c4.pad.ready": {
      "id": "c4.pad.ready",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Белый индикатор рядом со стикером созвездия загорается, и на экране бок о бок появляются два маленьких повара."
        },
        {
          "speaker": "vlad",
          "text": "ура. комплект полный, оба игрока в строю. осталось дать имя нашей кулинарной бригаде."
        }
      ],
      "next": "c4.team"
    },
    "c4.team": {
      "id": "c4.team",
      "kind": "choice",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "prompt": "Как назовём команду?",
      "choices": [
        {
          "id": "dumpling",
          "text": "Пельмень и партнёры",
          "next": "c4.team.dumpling",
          "effects": [
            {
              "kind": "set",
              "key": "teamName",
              "value": "dumpling"
            }
          ]
        },
        {
          "id": "calm",
          "text": "Два спокойных человека",
          "next": "c4.team.calm",
          "effects": [
            {
              "kind": "set",
              "key": "teamName",
              "value": "calm"
            }
          ]
        },
        {
          "id": "accident",
          "text": "Отдел случайных побед",
          "next": "c4.team.accident",
          "effects": [
            {
              "kind": "set",
              "key": "teamName",
              "value": "accident"
            }
          ]
        }
      ]
    },
    "c4.team.dumpling": {
      "id": "c4.team.dumpling",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "роль пельменя скромно беру на себя. а партнёрам по уставу полагается горячий чай и лучшее место на диване."
        },
        {
          "speaker": "heroine",
          "text": "Мне нравятся такие условия труда."
        },
        {
          "speaker": "vlad",
          "text": "перерыв на чай и разговоры — по первому требованию."
        }
      ],
      "next": "c4.role"
    },
    "c4.team.calm": {
      "id": "c4.team.calm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "идеальное название. сразу снимает обязательство куда-то суетиться и бежать."
        },
        {
          "speaker": "heroine",
          "text": "Мы просто сохраняем достоинство на кухне."
        },
        {
          "speaker": "vlad",
          "text": "и уют на диване. придвигайся чуть ближе, чтобы экран было видно под одним углом."
        }
      ],
      "next": "c4.role"
    },
    "c4.team.accident": {
      "id": "c4.team.accident",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "о, у всех наших совпадений с первой встречи наконец-то появилось собственное название."
        },
        {
          "speaker": "heroine",
          "text": "Причём самая главная случайная победа была ещё у двери кафе."
        },
        {
          "speaker": "vlad",
          "text": "с этим согласен на все сто."
        },
        {
          "speaker": "narrator",
          "text": "Влад качает головой и подтверждает название на экране — кажется, оно действительно попало в точку."
        }
      ],
      "next": "c4.role"
    },
    "c4.role": {
      "id": "c4.role",
      "kind": "choice",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "prompt": "Как будем готовить?",
      "choices": [
        {
          "id": "planner",
          "text": "Давай распределим работу",
          "next": "c4.pad.echo.route",
          "effects": [
            {
              "kind": "set",
              "key": "kitchenStyle",
              "value": "planner"
            }
          ]
        },
        {
          "id": "improv",
          "text": "Будем меняться и импровизировать",
          "next": "c4.pad.echo.route",
          "effects": [
            {
              "kind": "set",
              "key": "kitchenStyle",
              "value": "improv"
            }
          ]
        }
      ]
    },
    "c4.pad.echo.route": {
      "id": "c4.pad.echo.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "controllerReaction",
              "equals": "tease"
            }
          ],
          "next": "c4.pad.echo.tease"
        },
        {
          "all": [
            {
              "key": "controllerReaction",
              "equals": "help"
            }
          ],
          "next": "c4.pad.echo.help"
        }
      ],
      "fallback": "c4.pad.echo.absurd"
    },
    "c4.pad.echo.tease": {
      "id": "c4.pad.echo.tease",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ещё раз шутливо проверяет огонёк на твоём геймпаде и удобнее устраивается на подушках."
        },
        {
          "speaker": "vlad",
          "text": "техника больше не подведёт. выбирай наш первый заказ."
        }
      ],
      "next": "c4.tutorial"
    },
    "c4.pad.echo.help": {
      "id": "c4.pad.echo.help",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Он убирает упаковку от батареек со столика и пододвигает твою чашку чая поближе к краю."
        },
        {
          "speaker": "vlad",
          "text": "ты спасла мой геймпад, а я слежу, чтобы у тебя не остыл чай. честный обмен."
        }
      ],
      "next": "c4.tutorial"
    },
    "c4.pad.echo.absurd": {
      "id": "c4.pad.echo.absurd",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты освобождаешь на столике маленькое блюдце для «штрафников», а Влад с серьёзным видом кладёт туда пульт от телевизора."
        },
        {
          "speaker": "vlad",
          "text": "пульт наказан до конца вечера, а мы переходим к практике."
        }
      ],
      "next": "c4.tutorial"
    },
    "c4.tutorial": {
      "id": "c4.tutorial",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На экране крошечная кухня: один повар в высоком колпаке — твой, а второй, в полосатом фартуке, — Влада."
        },
        {
          "speaker": "vlad",
          "text": "смотри: ты берёшь заказ и кладёшь на стойку первый ингредиент, потом передаёшь эстафету мне, я добавляю второй — и подаём."
        },
        {
          "speaker": "narrator",
          "text": "Он наклоняется чуть ближе, показывая нужную кнопку на твоём геймпаде, и сразу откидывается обратно на спинку дивана."
        },
        {
          "speaker": "heroine",
          "text": "То есть главное — не съесть настоящие печеньки раньше, чем мы подадим виртуальные?"
        },
        {
          "speaker": "vlad",
          "text": "вот тут я за себя не ручаюсь. поехали!"
        },
        {
          "speaker": "narrator",
          "text": "Сначала два пробных заказа без таймера, затем можно выбрать быстрый режим или спокойную готовку."
        }
      ],
      "next": "c4.kitchen"
    },
    "c4.kitchen": {
      "id": "c4.kitchen",
      "kind": "minigame",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "game": "kitchen",
      "next": "c4.debrief"
    },
    "c4.debrief": {
      "id": "c4.debrief",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "kitchenResult",
              "equals": "feast"
            }
          ],
          "next": "c4.debrief.feast"
        },
        {
          "all": [
            {
              "key": "kitchenResult",
              "equals": "snack"
            }
          ],
          "next": "c4.debrief.snack"
        },
        {
          "all": [
            {
              "key": "kitchenResult",
              "equals": "chaos"
            }
          ],
          "next": "c4.debrief.chaos"
        }
      ],
      "fallback": "c4.debrief.skipped"
    },
    "c4.debrief.feast": {
      "id": "c4.debrief.feast",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На последнем заказе вы оба так увлекаетесь, что подаётесь вперёд на край дивана, смеясь в унисон. Виртуальный стол на экране ломится от готовых блюд."
        },
        {
          "speaker": "narrator",
          "text": "Таймер останавливается, в комнате снова тихо — вы откидываетесь на подушки и переводите дыхание."
        },
        {
          "speaker": "vlad",
          "text": "ничего себе. мы накормили целый ресторан и даже ни разу не поссорились у плиты."
        },
        {
          "speaker": "heroine",
          "text": "Из нас получилась отличная команда."
        },
        {
          "speaker": "vlad",
          "text": "я бы этот состав не менял."
        }
      ],
      "next": "c4.support"
    },
    "c4.debrief.snack": {
      "id": "c4.debrief.snack",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В финале раунда на виртуальной стойке красуется один-единственный, но очень гордый бутерброд."
        },
        {
          "speaker": "narrator",
          "text": "Игра встаёт на паузу; Влад откладывает геймпад и со смехом указывает на экран."
        },
        {
          "speaker": "vlad",
          "text": "ну, по крайней мере, голодным никто не уйдёт. если разделить этот шедевр поровну."
        },
        {
          "speaker": "heroine",
          "text": "По половинке бутерброда на повара?"
        },
        {
          "speaker": "vlad",
          "text": "и по горсти настоящего печенья здесь, на диване."
        }
      ],
      "next": "c4.support"
    },
    "c4.debrief.chaos": {
      "id": "c4.debrief.chaos",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.awkward"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Пытаясь спасти последний заказ, вы оба смеётесь до слёз, пока виртуальные повара торжественно выносят совершенно пустые тарелки."
        },
        {
          "speaker": "narrator",
          "text": "Смех постепенно стихает; Влад откладывает геймпад и пододвигает к тебе миску с настоящим печеньем."
        },
        {
          "speaker": "vlad",
          "text": "скажем так: мы проявили максимальную бережность к виртуальным продуктам. ни один помидор не пострадал."
        },
        {
          "speaker": "heroine",
          "text": "Зато подача была очень уверенной."
        },
        {
          "speaker": "vlad",
          "text": "именно. а настоящие вкусняшки, к счастью, готовил не наш ресторан."
        }
      ],
      "next": "c4.support"
    },
    "c4.debrief.skipped": {
      "id": "c4.debrief.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ставит игру на паузу и откладывает геймпад на столик. Комната сразу кажется ещё спокойнее."
        },
        {
          "speaker": "vlad",
          "text": "ну её, эту виртуальную суету. мне гораздо больше хочется просто посидеть и поговорить с тобой."
        },
        {
          "speaker": "heroine",
          "text": "И перейти сразу к настоящему чаю с печеньем?"
        },
        {
          "speaker": "vlad",
          "text": "с этим раундом мы справимся идеально."
        }
      ],
      "next": "c4.support"
    },
    "c4.support": {
      "id": "c4.support",
      "kind": "choice",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "prompt": "Влад: «мне нравится с тобой играть. даже когда ужин виртуальный»",
      "choices": [
        {
          "id": "team",
          "text": "Ты был хорошим напарником",
          "next": "c4.support.team",
          "effects": [
            {
              "kind": "set",
              "key": "gameAftercare",
              "value": "team"
            }
          ]
        },
        {
          "id": "rematch",
          "text": "Я хочу реванш",
          "next": "c4.support.rematch",
          "effects": [
            {
              "kind": "set",
              "key": "gameAftercare",
              "value": "rematch"
            }
          ]
        }
      ]
    },
    "c4.support.team": {
      "id": "c4.support.team",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "спасибо. с тобой вообще всё получается как-то удивительно легко — даже когда всё идёт не по правилам."
        },
        {
          "speaker": "narrator",
          "text": "Он не запускает новый раунд: берёт со спинки дивана мягкий плед и разворачивает его, укрывая тебя и край своих колен.",
          "variants": [
            {
              "when": [
                {
                  "key": "c4Goodbye",
                  "equals": "none"
                }
              ],
              "text": "Он не запускает новый раунд: берёт со спинки дивана мягкий плед и протягивает тебе, чтобы ты могла укутаться с ногами."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "В спокойном свете торшера совсем не хочется смотреть ни на экран, ни на часы."
        }
      ],
      "next": "c4.end"
    },
    "c4.support.rematch": {
      "id": "c4.support.rematch",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "реванш официально принят. только сначала устроим перерыв для шеф-поваров."
        },
        {
          "speaker": "narrator",
          "text": "Он откладывает оба геймпада, достаёт со спинки дивана большой плед и накидывает его на двоих, придвигая поближе чашки с чаем.",
          "variants": [
            {
              "when": [
                {
                  "key": "c4Goodbye",
                  "equals": "none"
                }
              ],
              "text": "Он откладывает оба геймпада, передаёт тебе большой плед со спинки дивана и пододвигает поближе чашки с чаем."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Главное — к реваншу не забыть название нашей команды."
        },
        {
          "speaker": "vlad",
          "text": "его я теперь точно не забуду."
        }
      ],
      "next": "c4.end"
    },
    "c4.end": {
      "id": "c4.end",
      "kind": "dialogue",
      "scene": {
        "background": "bg.home.living",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Телевизор уходит в спящий режим, оставляя в комнате только мягкий свет торшера. Вы ещё долго сидите на диване, допивая чай и разговаривая вполголоса."
        },
        {
          "speaker": "vlad",
          "text": "замёрзла?"
        },
        {
          "speaker": "heroine",
          "text": "Нет. Просто под пледом гораздо уютнее.",
          "variants": [
            {
              "when": [
                {
                  "key": "c4Goodbye",
                  "equals": "none"
                }
              ],
              "text": "Нет, в пледе самое то."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад чуть поворачивается к тебе и говорит тихо, без обычной шутки в голосе:"
        },
        {
          "speaker": "vlad",
          "text": "знаешь, если ты и дальше будешь так уютно здесь сидеть, я в следующем раунде вообще забуду, на какие кнопки нажимать."
        },
        {
          "speaker": "narrator",
          "text": "В этой тихой комнате игра действительно давно ушла на второй план — прощаться совершенно не хочется."
        },
        {
          "speaker": "narrator",
          "text": "Когда за окном становится поздно, вы всё-таки поднимаетесь. В прихожей Влад снимает с вешалки твоё пальто и помогает одеться."
        },
        {
          "speaker": "narrator",
          "text": "У закрытой двери вы на секунду останавливаетесь друг напротив друга: Никто не спрашивает разрешения, как вчера на набережной: Влад просто шагает ближе и крепко обнимает тебя — спокойнее и увереннее, чем в первый раз.",
          "variants": [
            {
              "when": [
                {
                  "key": "c4Goodbye",
                  "equals": "none"
                }
              ],
              "text": "У закрытой двери вы на секунду останавливаетесь друг напротив друга: Влад аккуратно поправляет воротник твоего пальто и включает свет на лестничной площадке, чтобы тебе не пришлось спускаться в темноте."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "давай завтра вечером встретимся в «Паузе»? там, где всё началось. на этот раз доверим кухню Нине, а я принесу наш конверт с набережной."
        },
        {
          "speaker": "heroine",
          "text": "Давай. До завтра, Влад."
        },
        {
          "speaker": "vlad",
          "text": "до завтра. напиши мне, когда дойдёшь, ладно? буду ждать."
        }
      ],
      "next": "c4.finish"
    },
    "c4.finish": {
      "id": "c4.finish",
      "kind": "end",
      "cardId": "c3.dinner",
      "endingId": "c3.dinner"
    }
  }
};
