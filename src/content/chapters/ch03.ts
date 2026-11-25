// Scenario reference: outputs/CHAPTER_03_SCRIPT.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter3:Chapter = {
  "id": 3,
  "contentVersion": CONTENT_VERSION,
  "firstSeasonEdition": 2,
  "title": "Разговор под звёздами",
  "entry": "c3.walk",
  "nodes": {
    "c3.walk": {
      "id": "c3.walk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На следующий вечер вы встречаетесь на набережной. Над тёмной водой уже зажглись фонари, и их дорожки покачиваются на мелкой ряби."
        },
        {
          "speaker": "narrator",
          "text": "Влад встречает тебя у парапета с двумя высокими стаканчиками чая — ветер растрепал его кудри, а во взгляде читается открытая радость."
        },
        {
          "speaker": "vlad",
          "text": "привет. сегодня я сверил прогноз в трёх местах. за небо и горячий чай ручаюсь лично."
        },
        {
          "speaker": "heroine",
          "text": "Привет. Ты эти места у воды, кажется, знаешь наизусть?"
        },
        {
          "speaker": "vlad",
          "text": "ага. летом часто езжу здесь на велосипеде. за тем мостом обычно разворачиваюсь."
        },
        {
          "speaker": "narrator",
          "text": "Он передаёт тебе более горячий стаканчик, придерживая его снизу, пока ты обхватываешь картон."
        },
        {
          "speaker": "narrator",
          "text": "Вы идёте вдоль гранитной дорожки. С реки тянет вечерней прохладой; заметив, как ветер треплет полу твоего пальто, Влад без слов переходит со стороны воды, закрывая тебя от сквозняка."
        },
        {
          "speaker": "narrator",
          "text": "Он легко подстраивается под твой шаг — не торопит, но ведёт уверенно."
        },
        {
          "speaker": "vlad",
          "text": "вон там впереди тихая скамейка с отличным обзором на тот берег. присядем?"
        }
      ],
      "next": "c3.distance"
    },
    "c3.distance": {
      "id": "c3.distance",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Где тебе удобнее сесть?",
      "choices": [
        {
          "id": "near",
          "text": "Посижу рядом",
          "next": "c3.distance.near",
          "effects": [
            {
              "kind": "set",
              "key": "bench",
              "value": "near"
            }
          ]
        },
        {
          "id": "space",
          "text": "Мне удобнее с этого края",
          "next": "c3.distance.space",
          "effects": [
            {
              "kind": "set",
              "key": "bench",
              "value": "space"
            }
          ]
        }
      ]
    },
    "c3.distance.near": {
      "id": "c3.distance.near",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты садишься на скамейку совсем рядом с ним — так, что край твоего пальто ложится у его колена."
        },
        {
          "speaker": "narrator",
          "text": "Влад на мгновение замирает, затем сдвигает свой стаканчик, освобождая место, и поворачивается к тебе вполоборота."
        },
        {
          "speaker": "vlad",
          "text": "вот так гораздо лучше. и реку видно, и чай торопить некуда."
        },
        {
          "speaker": "heroine",
          "text": "Тогда никуда отсюда пока и не пойдём."
        },
        {
          "speaker": "narrator",
          "text": "От речной прохлады спасает горячий картон в руках и то, как спокойно он сидит рядом, не заполняя паузу пустой болтовнёй."
        }
      ],
      "next": "c3.stars.intro"
    },
    "c3.distance.space": {
      "id": "c3.distance.space",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты садишься у резного чугунного подлокотника с краю скамейки. Влад спокойно убирает сумку к своим ногам и устраивается вполоборота к тебе, опираясь локтем о спинку."
        },
        {
          "speaker": "vlad",
          "text": "отсюда, кстати, фонарь красивее всего в воде отражается."
        },
        {
          "speaker": "heroine",
          "text": "Да, мне здесь очень удобно."
        },
        {
          "speaker": "narrator",
          "text": "Даже на расстоянии вытянутой руки между вами нет ни капли скованности — наоборот, чувствуется, что он искренне уважает твой комфорт."
        }
      ],
      "next": "c3.stars.intro"
    },
    "c3.stars.intro": {
      "id": "c3.stars.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Над крышами на противоположном берегу проступают первые крупные звёзды. Влад поднимает голову, пару секунд вдумчиво смотрит в тёмное небо."
        },
        {
          "speaker": "vlad",
          "text": "каждый раз, когда вижу такое чистое небо, вспоминаю «Интерстеллар». обожаю хорошие драмы, но этот фильм готов пересматривать бесконечно."
        },
        {
          "speaker": "heroine",
          "text": "Из-за чёрных дыр и космической физики?"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "за физику и саундтрек Ханса Циммера я готов спорить часами, это святое. но на самом деле он цепляет другим: там за всем космосом и временем в центре остаётся простая человеческая связь и обещание вернуться."
        },
        {
          "speaker": "narrator",
          "text": "Чтобы ты увидела ту же линию, он чуть наклоняется в твою сторону:",
          "variants": [
            {
              "when": [
                {
                  "key": "bench",
                  "equals": "near"
                }
              ],
              "text": "Его рука вытянута над водой, и когда ты поворачиваешь голову, ваши взгляды встречаются на расстоянии полшага. Влад на секунду сбивается с мысли, коротко прокашливается и снова кивает на небо."
            },
            {
              "when": [
                {
                  "key": "bench",
                  "equals": "space"
                }
              ],
              "text": "Он подаётся чуть вперёд вдоль спинки скамейки, показывая направление ладонью, и когда ты оборачиваешься, на секунду забывает, куда именно указывал."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "в общем… там был ковш. но мы можем соединить их по-своему — на небе всё равно никто не проверяет названия."
        },
        {
          "speaker": "narrator",
          "text": "Выбери кота, геймпад или чайник и соедини подсвеченные звёзды в ваш собственный рисунок."
        }
      ],
      "next": "c3.stars"
    },
    "c3.stars": {
      "id": "c3.stars",
      "kind": "minigame",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.thinking"
      },
      "game": "constellation",
      "next": "c3.stars.route"
    },
    "c3.stars.route": {
      "id": "c3.stars.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "constellation",
              "equals": "cat"
            }
          ],
          "next": "c3.stars.cat"
        },
        {
          "all": [
            {
              "key": "constellation",
              "equals": "controllers"
            }
          ],
          "next": "c3.stars.controllers"
        }
      ],
      "fallback": "c3.stars.teapot"
    },
    "c3.stars.cat": {
      "id": "c3.stars.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Между звёздами складывается узнаваемый силуэт с острыми ушками и загнутым хвостом. Вы называете созвездие «Пончик»."
        },
        {
          "speaker": "vlad",
          "text": "по-моему, Пончик бы оценил. особенно то, что даже на небе его главная задача — просто красиво сидеть."
        },
        {
          "speaker": "heroine",
          "text": "И сверху присматривать за тем, где ты оставил свой зонтик."
        },
        {
          "speaker": "vlad",
          "text": "с такой высоты у меня вообще не останется от тебя секретов."
        },
        {
          "speaker": "narrator",
          "text": "Он качает головой и смотрит на тебя так открыто и весело, что ты невольно задерживаешь на нём взгляд."
        }
      ],
      "next": "c3.honest"
    },
    "c3.stars.controllers": {
      "id": "c3.stars.controllers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Линии над крышами складываются в контур геймпада с кнопками, и у созвездия появляется имя — «Наша команда»."
        },
        {
          "speaker": "heroine",
          "text": "Ну вот. Теперь второй игрок официально закреплён даже на небе."
        },
        {
          "speaker": "vlad",
          "text": "тогда земному второму игроку мне тем более нужно соответствовать."
        },
        {
          "speaker": "narrator",
          "text": "Влад прячет озябшие руки в карманы пальто и пару секунд смотрит не вверх, а на тебя в отблесках воды."
        }
      ],
      "next": "c3.honest"
    },
    "c3.stars.teapot": {
      "id": "c3.stars.teapot",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На ночном небе проступает пузатый чайник с носиком, наклонённым прямо к реке. Вы даёте ему имя «Ещё по чашке?»."
        },
        {
          "speaker": "vlad",
          "text": "вот это созвездие я теперь найду в любую погоду. самое нужное напоминание."
        },
        {
          "speaker": "heroine",
          "text": "Напоминание вовремя делать паузу?"
        },
        {
          "speaker": "vlad",
          "text": "напоминание о том, с кем именно эти паузы хочется делать."
        },
        {
          "speaker": "narrator",
          "text": "Сказав это, он чуть тушуется и переводит взгляд на свой стаканчик, но фраза успевает прозвучать удивительно просто и честно."
        }
      ],
      "next": "c3.honest"
    },
    "c3.honest": {
      "id": "c3.honest",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Чай в стаканчиках постепенно остывает. Вдалеке по мосту шуршит редкая машина, у гранита мерно плещется вода."
        },
        {
          "speaker": "narrator",
          "text": "Влад задумывается на несколько секунд, глядя на огни в реке — сосредоточенно, по-взрослому серьёзно."
        },
        {
          "speaker": "heroine",
          "emotion": "smile",
          "text": "У тебя сейчас такой взгляд, будто ты в голове сложную задачу на три хода вперёд решаешь."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "раскусила. я вообще человек рассудительный — привык всё по десять раз обдумывать и раскладывать по полочкам."
        },
        {
          "speaker": "vlad",
          "emotion": "neutral",
          "text": "у этой привычки есть смешной побочный эффект: я обычно не сразу впускаю новых людей близко. живу в своём ритме, много работаю и долго присматриваюсь."
        },
        {
          "speaker": "vlad",
          "text": "но у неё есть и плюс: я не бросаюсь словами просто ради красивого жеста. если уж я второй вечер подряд зову тебя гулять и ловлю себя днём на мысли «надо рассказать это тебе» — значит, я всё обдумал и точно знаю, чего хочу."
        },
        {
          "speaker": "narrator",
          "text": "В его голосе нет ни суеты, ни попытки произвести впечатление — только редкая мужская основательность, от которой внутри сразу становится тепло."
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "а ты сама какая в этом? быстро пускаешь людей в свой круг или тоже держишь дистанцию?"
        }
      ],
      "next": "c3.trust"
    },
    "c3.trust": {
      "id": "c3.trust",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.thinking"
      },
      "prompt": "Что ответишь о себе?",
      "choices": [
        {
          "id": "careful",
          "text": "Обычно долго присматриваюсь — ты редкое исключение",
          "next": "c3.trust.careful",
          "effects": [
            {
              "kind": "set",
              "key": "herTrust",
              "value": "careful"
            }
          ]
        },
        {
          "id": "intuition",
          "text": "Если человек свой, я чувствую это почти сразу",
          "next": "c3.trust.intuition",
          "effects": [
            {
              "kind": "set",
              "key": "herTrust",
              "value": "intuition"
            }
          ]
        },
        {
          "id": "humor",
          "text": "Сначала шучу и держусь легко, пока внутри присматриваюсь",
          "next": "c3.trust.humor",
          "effects": [
            {
              "kind": "set",
              "key": "herTrust",
              "value": "humor"
            }
          ]
        }
      ]
    },
    "c3.trust.careful": {
      "id": "c3.trust.careful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Если честно, я тоже не из тех, кто открывается первому встречному. Обычно держу дистанцию… так что ты и правда редкое исключение."
        },
        {
          "speaker": "narrator",
          "text": "Влад внимательно смотрит на тебя — видно, как много для него значат эти слова."
        },
        {
          "speaker": "vlad",
          "text": "тогда я тем более буду беречь этот кредит доверия."
        },
        {
          "speaker": "narrator",
          "text": "Он запускает руку во внутренний карман пальто и достаёт небольшую находку."
        }
      ],
      "next": "c3.wish.intro"
    },
    "c3.trust.intuition": {
      "id": "c3.trust.intuition",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я полагаюсь на внутреннее чутьё. Если рядом с человеком не нужно играть роль — я чувствую это с первых минут."
        },
        {
          "speaker": "vlad",
          "text": "смелый подход. завидую белой завистью, пока мой внутренний аналитик строит графики."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "и мне очень радостно, что твоё чутьё у двери кафе проголосовало в мою пользу."
        },
        {
          "speaker": "narrator",
          "text": "Он нащупывает что-то во внутреннем кармане пальто и достаёт на свет."
        }
      ],
      "next": "c3.wish.intro"
    },
    "c3.trust.humor": {
      "id": "c3.trust.humor",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я обычно сначала отшучиваюсь и держу лёгкую дистанцию, пока тихонько наблюдаю за человеком."
        },
        {
          "speaker": "vlad",
          "text": "ага, значит, все мои падающие коробки с первой минуты проходили строгую скрытую проверку."
        },
        {
          "speaker": "heroine",
          "text": "И ты её каким-то чудом сдал."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "лучший экзамен за этот год. кстати, о секретных материалах…"
        },
        {
          "speaker": "narrator",
          "text": "Он достаёт что-то из внутреннего кармана пальто."
        }
      ],
      "next": "c3.wish.intro"
    },
    "c3.wish.intro": {
      "id": "c3.wish.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На его ладони лежат два гладких деревянных жетона из той самой первой коробки и тонкая ручка. Один жетон с двумя точками тебе уже знаком, а второй — чистый."
        },
        {
          "speaker": "vlad",
          "text": "я вчера разбирал коробку и нашёл два запасных пустых жетона. подумал — давай оставим на обороте по паре слов от сегодняшнего вечера?"
        },
        {
          "speaker": "narrator",
          "text": "Он прикрывает свой жетон ладонью, склонившись к колену, и быстро выводит на дереве короткую строчку."
        },
        {
          "speaker": "narrator",
          "text": "Потом протягивает чистый жетон и ручку тебе. Когда ты поднимаешь глаза, обдумывая слова, то ловишь Влада на том, что он смотрит не на реку, а на тебя."
        },
        {
          "speaker": "heroine",
          "text": "Подглядываешь?"
        },
        {
          "speaker": "vlad",
          "text": "нет. просто… нравится, как серьёзно ты подходишь к секретным документам. пиши, чего тебе самой хочется побольше.",
          "emotion": "awkward"
        }
      ],
      "next": "c3.wish"
    },
    "c3.wish": {
      "id": "c3.wish",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.thinking"
      },
      "prompt": "Чего хочется побольше?",
      "choices": [
        {
          "id": "adventure",
          "text": "Больше маленьких приключений",
          "next": "c3.wish.adventure",
          "effects": [
            {
              "kind": "set",
              "key": "wish",
              "value": "adventure"
            }
          ]
        },
        {
          "id": "calm",
          "text": "Больше спокойных вечеров",
          "next": "c3.wish.calm",
          "effects": [
            {
              "kind": "set",
              "key": "wish",
              "value": "calm"
            }
          ]
        }
      ]
    },
    "c3.wish.adventure": {
      "id": "c3.wish.adventure",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты выводишь на светлом дереве: «Больше маленьких приключений» — таких, где не нужно спасать мир, а достаточно свернуть на новую улицу вдвоём."
        },
        {
          "speaker": "vlad",
          "text": "маленькие приключения — это моя специальность. особенно те, которые начинаются с забытого зонтика или рассыпанной коробки."
        },
        {
          "speaker": "heroine",
          "text": "Главное, чтобы после них оставалось время на чай у воды."
        },
        {
          "speaker": "vlad",
          "text": "это гарантирую."
        }
      ],
      "next": "c3.end"
    },
    "c3.wish.calm": {
      "id": "c3.wish.calm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты пишешь на чистой стороне: «Больше спокойных вечеров» — таких, как этот, где можно просто сидеть у реки и никуда не торопиться."
        },
        {
          "speaker": "vlad",
          "text": "подпишусь под каждым словом. без спешки и лишнего шума."
        },
        {
          "speaker": "heroine",
          "text": "Только фонари, река и горячий чай."
        },
        {
          "speaker": "vlad",
          "text": "и правильный человек на соседней половине скамейки."
        }
      ],
      "next": "c3.end"
    },
    "c3.end": {
      "id": "c3.end",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад достаёт крафтовый конверт и укладывает туда оба жетона, а ты рисуешь на уголке маленький значок вашего созвездия."
        },
        {
          "speaker": "heroine",
          "text": "А что ты написал на своём? Покажешь?"
        },
        {
          "speaker": "vlad",
          "text": "покажу. давай откроем конверт, когда снова сядем за наш столик в «Паузе»."
        },
        {
          "speaker": "narrator",
          "text": "Влад аккуратно запечатывает клапан конверта, будто прячет туда маленькое вещественное доказательство этого вечера."
        },
        {
          "speaker": "narrator",
          "text": "Вы нехотя поднимаетесь со скамейки и идёте к выходу с набережной. Влад выбрасывает пустые стаканчики у лестницы, и с каждым шагом к перекрёстку вы оба замедляетесь."
        },
        {
          "speaker": "narrator",
          "text": "У последнего фонаря перед улицей Влад останавливается и поворачивается к тебе."
        }
      ],
      "next": "c3.invite"
    },
    "c3.invite": {
      "id": "c3.invite",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "слушай… приходи ко мне завтра вечером в гости? устроим игровой вечер — у меня дома есть отличная игра на двоих про двух поваров на крошечной кухне.",
          "variants": [
            {
              "when": [
                {
                  "key": "eveningMood",
                  "equals": "playful"
                }
              ],
              "text": "слушай… приходи ко мне завтра вечером в гости? устроим тот самый игровой вечер, покажу тебе игру с двумя поварами, про которую рассказывал под дождём."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Приду. Только чур правила объясняешь по ходу дела."
        },
        {
          "speaker": "vlad",
          "text": "договорились. с меня горячий чай, плед и вкусняшки, которые точно не сгорят."
        }
      ],
      "next": "c3.goodbye.intro"
    },
    "c3.goodbye.intro": {
      "id": "c3.goodbye.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.awkward"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Он убирает конверт во внутренний карман пальто, делает полшага, будто собирается привычно помахать на прощание, — но останавливается."
        },
        {
          "speaker": "narrator",
          "text": "В свете фонаря видно, что он немного волнуется: запускает руку в кудри на затылке, делает короткий вдох и смотрит прямо на тебя."
        },
        {
          "speaker": "vlad",
          "text": "слушай… а обнять тебя напоследок можно?"
        }
      ],
      "next": "c3.goodbye"
    },
    "c3.goodbye": {
      "id": "c3.goodbye",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.awkward"
      },
      "prompt": "Как попрощаемся?",
      "choices": [
        {
          "id": "accept",
          "text": "Можно. Иди сюда",
          "next": "c3.goodbye.accept",
          "effects": [
            {
              "kind": "set",
              "key": "c4Goodbye",
              "value": "accept"
            }
          ]
        },
        {
          "id": "her",
          "text": "Я сама",
          "next": "c3.goodbye.her",
          "effects": [
            {
              "kind": "set",
              "key": "c4Goodbye",
              "value": "her"
            }
          ]
        },
        {
          "id": "none",
          "text": "Давай сегодня без объятий. До завтра",
          "next": "c3.goodbye.none",
          "effects": [
            {
              "kind": "set",
              "key": "c4Goodbye",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c3.goodbye.accept": {
      "id": "c3.goodbye.accept",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Можно. Иди сюда."
        },
        {
          "speaker": "narrator",
          "text": "Влад делает шаг навстречу и крепко, аккуратно обнимает тебя. От его пальто пахнет речным воздухом и кофе, а под прохладной шерстью сразу чувствуется живое тепло."
        },
        {
          "speaker": "narrator",
          "text": "Его ладонь ложится тебе на спину, и ты слышишь, как у твоего виска он тихо и с облегчением выдыхает."
        }
      ],
      "next": "c3.goodbye.hug"
    },
    "c3.goodbye.her": {
      "id": "c3.goodbye.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я сама."
        },
        {
          "speaker": "narrator",
          "text": "Не давая ему засомневаться, ты первой делаешь шаг и обнимаешь его."
        },
        {
          "speaker": "narrator",
          "text": "На долю секунды Влад замирает от неожиданности, а в следующее мгновение его руки смыкаются у тебя на спине — спокойно и надёжно."
        },
        {
          "speaker": "vlad",
          "text": "вот это… мне нравится ещё больше."
        }
      ],
      "next": "c3.goodbye.hug"
    },
    "c3.goodbye.hug": {
      "id": "c3.goodbye.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы не разжимаете рук сразу — стоите несколько спокойных секунд под фонарём, пока мимо по тротуару проходят редкие прохожие."
        },
        {
          "speaker": "narrator",
          "text": "Когда вы отстраняетесь, голос у Влада звучит чуть тише обычного:"
        },
        {
          "speaker": "vlad",
          "text": "до завтра?"
        },
        {
          "speaker": "heroine",
          "text": "До завтра, Влад."
        }
      ],
      "next": "c3.goodbye.end"
    },
    "c3.goodbye.none": {
      "id": "c3.goodbye.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай сегодня без объятий. До завтра."
        },
        {
          "speaker": "vlad",
          "text": "конечно. без проблем. спасибо тебе за этот вечер."
        },
        {
          "speaker": "narrator",
          "text": "В его лице нет ни тени обиды — всё та же спокойная лёгкость, с которой вы сидели у воды. Он машет рукой на прощание, и ты отвечаешь ему тем же."
        }
      ],
      "next": "c3.goodbye.end"
    },
    "c3.goodbye.end": {
      "id": "c3.goodbye.end",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На перекрёстке у спуска с набережной вы расходитесь каждый в свою сторону. Ветер приносит с реки прохладу и далёкий гудок теплохода."
        },
        {
          "speaker": "narrator",
          "text": "Ты идёшь к дому с лёгкой улыбкой на губах, понимая, что завтрашнего вечера ждёшь уже без всяких «случайностей»."
        }
      ],
      "next": "c3.finish.route"
    },
    "c3.finish.route": {
      "id": "c3.finish.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "wish",
              "equals": "adventure"
            }
          ],
          "next": "c3.finish.adventure"
        }
      ],
      "fallback": "c3.finish.calm"
    },
    "c3.finish.adventure": {
      "id": "c3.finish.adventure",
      "kind": "end",
      "endingId": "c4.adventure",
      "cardId": "c4.adventure"
    },
    "c3.finish.calm": {
      "id": "c3.finish.calm",
      "kind": "end",
      "endingId": "c4.calm",
      "cardId": "c4.calm"
    }
  }
};
