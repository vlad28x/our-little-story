// Scenario reference: outputs/CHAPTER_02_SCRIPT.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter2:Chapter = {
  "id": 2,
  "contentVersion": CONTENT_VERSION,
  "title": "Свидание пошло не по плану",
  "entry": "c2.arrival",
  "nodes": {
    "c2.arrival": {
      "id": "c2.arrival",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На следующий день небо затянуто низкими облаками, а на тротуаре у «Паузы» блестят следы недавнего дождя."
        },
        {
          "speaker": "narrator",
          "text": "Влад уже ждёт под полосатым навесом. Заметив тебя, он сразу отлипает от витрины и делает шаг навстречу."
        },
        {
          "speaker": "vlad",
          "text": "привет. я пришёл чуть раньше — на всякий случай проверил дверь, сегодня она ведёт себя прилично."
        },
        {
          "speaker": "heroine",
          "text": "Привет. Значит, сегодня без летающих деталей?"
        },
        {
          "speaker": "vlad",
          "text": "пока держусь. но день только начинается, так что ни за что не ручаюсь."
        },
        {
          "speaker": "narrator",
          "text": "В голосе снова та самая живая самоирония, из-за которой вчера вообще захотелось остаться."
        }
      ],
      "next": "c2.pace.route"
    },
    "c2.pace.route": {
      "id": "c2.pace.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "pace",
              "equals": "quiet"
            }
          ],
          "next": "c2.pace.quiet"
        },
        {
          "all": [
            {
              "key": "pace",
              "equals": "flirt"
            }
          ],
          "next": "c2.pace.flirt"
        }
      ],
      "fallback": "c2.pace.playful"
    },
    "c2.pace.quiet": {
      "id": "c2.pace.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я прикинул тихий маршрут через сквер. без спешки и без толпы."
        },
        {
          "speaker": "narrator",
          "text": "Он убирает телефон глубоко в карман пальто, освобождая руки."
        },
        {
          "speaker": "heroine",
          "text": "Мне нравится. Особенно часть, где никуда не нужно бежать."
        },
        {
          "speaker": "vlad",
          "text": "мне тоже. вчера после того, как мы разошлись, я поймал себя на мысли, как спокойно с тобой было сидеть."
        }
      ],
      "next": "c2.plan.route"
    },
    "c2.pace.flirt": {
      "id": "c2.pace.flirt",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "рад, что ты пришла. честно говоря, с утра пару раз поглядывал на часы."
        },
        {
          "speaker": "heroine",
          "text": "Решила проверить, чем ты будешь удерживать внимание без падающей коробки."
        },
        {
          "speaker": "vlad",
          "text": "ну, ронять коробку второй день подряд было бы слишком очевидно. ты бы сразу раскусила план."
        },
        {
          "speaker": "narrator",
          "text": "Он чуть прищуривается, явно довольный тем, как легко вы подхватываете шутки друг друга."
        }
      ],
      "next": "c2.plan.route"
    },
    "c2.pace.playful": {
      "id": "c2.pace.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "синоптики обещали отличную погоду для прогулки. правда, со мной они почему-то не сверились."
        },
        {
          "speaker": "heroine",
          "text": "После вчерашнего я в вопросах планирования больше доверяю Пончику."
        },
        {
          "speaker": "vlad",
          "text": "справедливо. он хотя бы спит на одном месте и не придумывает приключений на ходу."
        },
        {
          "speaker": "narrator",
          "text": "Влад коротко смеётся, и сырой пасмурный день сразу кажется заметно веселее."
        }
      ],
      "next": "c2.plan.route"
    },
    "c2.plan.route": {
      "id": "c2.plan.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "plan",
              "equals": "tea"
            }
          ],
          "next": "c2.plan.tea"
        },
        {
          "all": [
            {
              "key": "plan",
              "equals": "coop"
            }
          ],
          "next": "c2.plan.coop"
        }
      ],
      "fallback": "c2.plan.banter"
    },
    "c2.plan.tea": {
      "id": "c2.plan.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад расстёгивает сумку и достаёт небольшой матовый термос и два бумажных стаканчика."
        },
        {
          "speaker": "vlad",
          "text": "взял чай с собой. подумал, вчерашняя идея согреться была слишком хорошей, чтобы оставлять её только внутри кафе."
        },
        {
          "speaker": "heroine",
          "text": "Выездная чайная пауза? Ты подготовился."
        },
        {
          "speaker": "vlad",
          "text": "старался. если у сквера поднимется ветер, пригодится."
        },
        {
          "speaker": "narrator",
          "text": "Он наливает горячий чай и протягивает стаканчик тебе; ваши пальцы на мгновение соприкасаются на тёплом картоне."
        },
        {
          "speaker": "narrator",
          "text": "Простая забота, без громких слов — но сразу приятно."
        }
      ],
      "next": "c2.rain.intro"
    },
    "c2.plan.coop": {
      "id": "c2.plan.coop",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад достаёт из сумки компактную дорожную коробочку игры, аккуратно перетянутую резинкой, и кладёт на столик под навесом."
        },
        {
          "speaker": "vlad",
          "text": "принёс карманную версию, как обещал. видишь резинку? учёл ошибки прошлого."
        },
        {
          "speaker": "heroine",
          "text": "Тренировался дома над ковром?"
        },
        {
          "speaker": "vlad",
          "text": "над диваном. я серьёзно отношусь к нашему кооперативу."
        },
        {
          "speaker": "narrator",
          "text": "На крышке нарисован всё тот же маленький мостик через реку."
        }
      ],
      "next": "c2.rain.intro"
    },
    "c2.plan.banter": {
      "id": "c2.plan.banter",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.awkward"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад с предельно серьёзным видом достаёт из кармана пальто сложенный вдвое плотный листок."
        },
        {
          "speaker": "vlad",
          "text": "составил официальный прогноз возможных нелепостей на сегодняшний вечер. нарисовал три тучки и стрелку."
        },
        {
          "speaker": "heroine",
          "text": "И какие у нас шансы уцелеть?"
        },
        {
          "speaker": "vlad",
          "text": "умеренная неловкость с моей стороны и высокая вероятность, что мы всё равно будем смеяться."
        },
        {
          "speaker": "narrator",
          "text": "На обороте от руки приписано: «Не является прогнозом погоды». Ты с усмешкой прячешь карточку в сумку."
        }
      ],
      "next": "c2.rain.intro"
    },
    "c2.rain.intro": {
      "id": "c2.rain.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.awkward"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Стоит вам сделать шаг к краю тротуара, как по асфальту часто и гулко бьют тяжёлые капли — редкая морось за секунды превращается в плотный ливень."
        },
        {
          "speaker": "vlad",
          "text": "так. вообще-то ровно для такого случая у меня есть большой зонт."
        },
        {
          "speaker": "narrator",
          "text": "Он приоткрывает сумку, заглядывает внутрь, замирает на секунду и медленно застёгивает молнию обратно."
        },
        {
          "speaker": "vlad",
          "text": "кажется, мой зонт сегодня решил остаться дома. точнее… не дома."
        },
        {
          "speaker": "heroine",
          "text": "Вчера у двери под котом?"
        },
        {
          "speaker": "vlad",
          "text": "именно там. ладно, признаю: как организатор прогулок я пока держусь исключительно на твоём терпении."
        },
        {
          "speaker": "narrator",
          "text": "Порыв ветра бросает под край козырька мелкие брызги, и Влад без лишних слов сдвигается с внешней стороны, прикрывая тебя от ветра."
        }
      ],
      "next": "c2.rain"
    },
    "c2.rain": {
      "id": "c2.rain",
      "kind": "choice",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.awkward"
      },
      "choices": [
        {
          "id": "shelter",
          "text": "Вернёмся под навес. Здесь вполне уютно",
          "next": "c2.rain.shelter",
          "effects": [
            {
              "kind": "set",
              "key": "rainRoute",
              "value": "shelter"
            }
          ]
        },
        {
          "id": "arcade",
          "text": "Давай добежим до соседней арки",
          "next": "c2.rain.arcade",
          "effects": [
            {
              "kind": "set",
              "key": "rainRoute",
              "value": "arcade"
            }
          ]
        }
      ]
    },
    "c2.rain.shelter": {
      "id": "c2.rain.shelter",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы отступаете глубже под полосатый навес. Снаружи стеной шумит вода, пахнет мокрым асфальтом, а сухой полосы у витрины хватает ровно на двоих."
        },
        {
          "speaker": "narrator",
          "text": "С бокового края до тебя всё равно долетает водяная пыль, и Влад сдвигается на полшага ближе к каплям, заслоняя тебя от ветра."
        },
        {
          "speaker": "heroine",
          "text": "Влад, ты же сам сейчас промокнешь."
        },
        {
          "speaker": "narrator",
          "text": "Из-за тесноты под козырьком вы стоите совсем рядом; под шум ливня его голос звучит ниже и спокойнее."
        },
        {
          "speaker": "vlad",
          "text": "переживу. главное, чтобы ты осталась сухой."
        },
        {
          "speaker": "narrator",
          "text": "Он стряхивает каплю с рукава и кивает на мокрую улицу."
        },
        {
          "speaker": "vlad",
          "text": "да и дождь, если честно, неплохой. когда есть крыша."
        },
        {
          "speaker": "narrator",
          "text": "В шуме воды и прохладном воздухе неожиданно уютно просто стоять рядом и никуда не спешить."
        },
        {
          "speaker": "nina",
          "text": "А я всё гадала, когда вы вспомните про своего серого пленника! Заходите внутрь, пока совсем не вымокли."
        }
      ],
      "next": "c2.return"
    },
    "c2.rain.arcade": {
      "id": "c2.rain.arcade",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.arcade",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад придерживает тебя за локоть, и за несколько быстрых шагов сквозь косые струи вы ныряете под свод соседней каменной арки."
        },
        {
          "speaker": "narrator",
          "text": "Под низким сводом гулко отдаётся шум ливня. Вы оба переводите дыхание, отряхивая капли с рукавов."
        },
        {
          "speaker": "vlad",
          "text": "ну вот. зато маршрут получился камерный. без посторонних."
        },
        {
          "speaker": "heroine",
          "text": "Потому что все нормальные люди посмотрели прогноз погоды?"
        },
        {
          "speaker": "vlad",
          "text": "потому что у них не было хорошего повода так спешить."
        },
        {
          "speaker": "narrator",
          "text": "Он замечает каплю дождя у тебя на щеке, на секунду тянется рукой, но вовремя останавливается и просто протягивает чистую салфетку из кармана."
        },
        {
          "speaker": "narrator",
          "text": "Ты усмехаешься, принимая салфетку — в этой сдержанности чувствуется больше уважения, чем в любом красивом жесте."
        },
        {
          "speaker": "narrator",
          "text": "Когда первый заряд ливня стихает до ровного дождя, вы по сухой кромке вдоль стены перебегаете обратно к двери «Паузы»."
        }
      ],
      "next": "c2.return"
    },
    "c2.return": {
      "id": "c2.return",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Внутри кафе после сырой улицы пахнет свежей выпечкой и корицей. У окна, целый и невредимый, стоит забытый вчера серый зонтик."
        },
        {
          "speaker": "vlad",
          "text": "вот и пропажа. провёл сутки в гораздо более комфортных условиях, чем его хозяин."
        },
        {
          "speaker": "narrator",
          "text": "На стуле рядом восседает Пончик, аккуратно обвив хвостом изогнутую ручку."
        },
        {
          "speaker": "heroine",
          "text": "Кажется, просто так имущество со склада не выдают."
        }
      ],
      "next": "c2.cat.route"
    },
    "c2.cat.route": {
      "id": "c2.cat.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "catNoticed",
              "equals": true
            }
          ],
          "next": "c2.cat.known"
        }
      ],
      "fallback": "c2.cat.new"
    },
    "c2.cat.known": {
      "id": "c2.cat.known",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "С нашим начальником охраны вы со вчерашнего вечера уже знакомы. Он этот зонтик всю ночь сторожил."
        },
        {
          "speaker": "vlad",
          "text": "ценю такую преданность делу. осталось выяснить, принимает ли он взятки поглаживанием."
        },
        {
          "speaker": "narrator",
          "text": "Пончик приоткрывает один глаз и лениво переводит взгляд с Влада на тебя."
        }
      ],
      "next": "c2.cat"
    },
    "c2.cat.new": {
      "id": "c2.cat.new",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Знакомьтесь, это Пончик. У него здесь личное кресло и полный контроль над забытыми вещами."
        },
        {
          "speaker": "vlad",
          "text": "очень приятно, Пончик. мы только заберём зонтик и на вашу территорию не претендуем."
        },
        {
          "speaker": "narrator",
          "text": "Кот лениво щурится, явно ожидая вашего следующего хода."
        }
      ],
      "next": "c2.cat"
    },
    "c2.cat": {
      "id": "c2.cat",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "wait",
          "text": "Пусть сам подойдёт. Подождём рядом",
          "next": "c2.cat.wait",
          "effects": [
            {
              "kind": "set",
              "key": "catApproach",
              "value": "wait"
            }
          ]
        },
        {
          "id": "help",
          "text": "Попросим Нину помочь",
          "next": "c2.cat.help",
          "effects": [
            {
              "kind": "set",
              "key": "catApproach",
              "value": "help"
            }
          ]
        }
      ]
    },
    "c2.cat.wait": {
      "id": "c2.cat.wait",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты присаживаешься на край соседнего стула и просто протягиваешь раскрытую ладонь, не торопя кота. Влад останавливается неподалёку, наблюдая за переговорами."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, как у тебя всё получается без давления. даже коты сразу доверяют."
        },
        {
          "speaker": "narrator",
          "text": "Через полминуты Пончик спрыгивает на пол, трётся лбом о твои пальцы и освобождает ручку зонтика."
        },
        {
          "speaker": "heroine",
          "text": "Переговоры прошли успешно."
        },
        {
          "speaker": "narrator",
          "text": "Влад забирает зонтик и сразу надёжно пристёгивает его к ремню сумки, чтобы больше не терять."
        }
      ],
      "next": "c2.umbrella.intro"
    },
    "c2.cat.help": {
      "id": "c2.cat.help",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Сейчас решим вопрос мирным путём. Пончик, смотри, твой плед у стойки освободился."
        },
        {
          "speaker": "narrator",
          "text": "Нина приносит корзинку с мягкой подстилкой, и кот с достоинством перебирается туда."
        },
        {
          "speaker": "heroine",
          "text": "Секрет был в правильной недвижимости."
        },
        {
          "speaker": "vlad",
          "text": "запишу себе на будущее: уютный плед решает половину вопросов. спасибо, Нина."
        },
        {
          "speaker": "narrator",
          "text": "Забрав зонтик, Влад пристёгивает его к сумке и кивает на окно."
        }
      ],
      "next": "c2.umbrella.intro"
    },
    "c2.umbrella.intro": {
      "id": "c2.umbrella.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На подоконнике лежит маленький декоративный зонтик для осенней витрины. В его куполе три аккуратных прорехи."
        },
        {
          "speaker": "nina",
          "text": "Хотела украсить окно к дождливой неделе, да всё руки не доходят подобрать заплатки по форме."
        },
        {
          "speaker": "vlad",
          "text": "наш зонт мы спасли. поможем и этому, пока дождь всё равно не пускает?"
        },
        {
          "speaker": "narrator",
          "text": "Нина выкладывает на подоконник пуговицу, треугольный лоскуток ткани и узкую ленту. Вы встаёте рядом у окна, склоняясь над маленьким куполом."
        },
        {
          "speaker": "heroine",
          "text": "Давай попробуем. Держи купол, чтобы не крутился."
        },
        {
          "speaker": "vlad",
          "text": "держу. командуй, мастер."
        }
      ],
      "next": "c2.umbrella"
    },
    "c2.umbrella": {
      "id": "c2.umbrella",
      "kind": "minigame",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.thinking"
      },
      "game": "umbrella-patch",
      "next": "c2.umbrella.route"
    },
    "c2.umbrella.route": {
      "id": "c2.umbrella.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "umbrella",
              "equals": "patched"
            }
          ],
          "next": "c2.umbrella.patched"
        },
        {
          "all": [
            {
              "key": "umbrella",
              "equals": "borrowed"
            }
          ],
          "next": "c2.umbrella.borrowed"
        }
      ],
      "fallback": "c2.umbrella.skipped"
    },
    "c2.umbrella.patched": {
      "id": "c2.umbrella.patched",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Последний лоскуток ложится точно на место. Когда ты разглаживаешь ленту, ладонь Влада изнутри купола оказывается прямо под твоей через тонкую ткань."
        },
        {
          "speaker": "nina",
          "text": "Красота какая! Вот, возьмите маленькую нашивку с облаком на память."
        },
        {
          "speaker": "narrator",
          "text": "Ты убираешь тканевую нашивку в кармашек сумки, а Влад с довольным видом осматривает вашу работу."
        },
        {
          "speaker": "vlad",
          "text": "с мелким ремонтом погоды мы справились. теперь можно и отдохнуть."
        }
      ],
      "next": "c2.pause.intro"
    },
    "c2.umbrella.borrowed": {
      "id": "c2.umbrella.borrowed",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Оставьте декорации мне, я вечером доклею. А вам за помощь с Пончиком — сухой чехол для вашего зонта, чтобы сумку не мочить."
        },
        {
          "speaker": "narrator",
          "text": "Влад помогает упаковать зонтик в чехол; ваши пальцы на секунду встречаются на завязке шнурка."
        },
        {
          "speaker": "heroine",
          "text": "Зато теперь твой зонт упакован лучше, чем мы сами."
        },
        {
          "speaker": "vlad",
          "text": "ничего, сейчас и нами займёмся."
        }
      ],
      "next": "c2.pause.intro"
    },
    "c2.umbrella.skipped": {
      "id": "c2.umbrella.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "знаешь, давай оставим витрину Нине. я сегодня пришёл поговорить с тобой, а не открывать мастерскую."
        },
        {
          "speaker": "nina",
          "text": "И правильно! Идите за столик, я сейчас сделаю вам горячего чая."
        },
        {
          "speaker": "narrator",
          "text": "Влад подхватывает твою сумку, чтобы перенести её к сухому столику у входа, и от этой простоты становится легко на душе."
        },
        {
          "speaker": "heroine",
          "text": "Мне нравится такое распределение обязанностей."
        }
      ],
      "next": "c2.pause.intro"
    },
    "c2.pause.intro": {
      "id": "c2.pause.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Дождь становится тише. Нина выносит две горячие чашки на сухой угловой столик под глубоким навесом."
        },
        {
          "speaker": "narrator",
          "text": "По мокрой брусчатке бегут ручьи, пахнет озоном и листвой, а от чашек поднимается пар."
        },
        {
          "speaker": "vlad",
          "text": "ну вот. прогулка сократилась до двух метров, зато чай настоящий."
        },
        {
          "speaker": "heroine",
          "text": "И никто не заставляет бежать по лужам ради галочки в маршруте."
        },
        {
          "speaker": "vlad",
          "text": "с тобой мне вообще никуда бежать не хочется. наоборот — хочется притормаживать."
        },
        {
          "speaker": "narrator",
          "text": "Он сдвигает твой стул подальше от влажного края навеса и ставит чашку перед тобой."
        }
      ],
      "next": "c2.cat.echo.route"
    },
    "c2.cat.echo.route": {
      "id": "c2.cat.echo.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "catApproach",
              "equals": "wait"
            }
          ],
          "next": "c2.cat.echo.wait"
        }
      ],
      "fallback": "c2.cat.echo.help"
    },
    "c2.cat.echo.wait": {
      "id": "c2.cat.echo.wait",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Из приоткрытой двери бесшумно выходит Пончик и сворачивается у сухой ножки твоего стула, мурлыча под стук капель."
        },
        {
          "speaker": "vlad",
          "text": "смотри-ка. окончательно перешёл на твою сторону."
        },
        {
          "speaker": "heroine",
          "text": "Он просто ценит спокойную компанию."
        }
      ],
      "next": "c2.pause"
    },
    "c2.cat.echo.help": {
      "id": "c2.cat.echo.help",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Нина переставляет корзинку с Пончиком на сухую лавку прямо у порога."
        },
        {
          "speaker": "nina",
          "text": "Пусть подышит свежим воздухом вместе с вами, ему отсюда весь тротуар видно."
        },
        {
          "speaker": "narrator",
          "text": "Кот сонно приоткрывает глаза, осматривает ваш столик и снова утыкается носом в лапу."
        }
      ],
      "next": "c2.pause"
    },
    "c2.pause": {
      "id": "c2.pause",
      "kind": "choice",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "quiet",
          "text": "Давай немного помолчим и послушаем дождь",
          "next": "c2.pause.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "eveningMood",
              "value": "quiet"
            }
          ]
        },
        {
          "id": "playful",
          "text": "Расскажи, что за игру ты хотел показать",
          "next": "c2.pause.playful",
          "effects": [
            {
              "kind": "set",
              "key": "eveningMood",
              "value": "playful"
            }
          ]
        }
      ]
    },
    "c2.pause.quiet": {
      "id": "c2.pause.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай. дождь сегодня так ровно шумит, что перебивать его жалко."
        },
        {
          "speaker": "narrator",
          "text": "Вы обхватываете ладонями горячие чашки и замолкаете. Капли мерно срываются с края навеса, разбиваясь об один и тот же блестящий лист на тротуаре."
        },
        {
          "speaker": "narrator",
          "text": "Влад не тянется к телефону, чтобы заполнить паузу — просто смотрит на улицу, а потом на твои руки у чашки."
        },
        {
          "speaker": "narrator",
          "text": "Через минуту его рука на столе чуть сдвигается, и кончик его пальца едва заметно касается твоего мизинца."
        },
        {
          "speaker": "narrator",
          "text": "Он не настаивает, но и не убирает руку сразу — оставляет решение за тобой, и в этой тихой точке соприкосновения нет ни капли неловкости."
        },
        {
          "speaker": "heroine",
          "text": "Удивительно. Обычно с новыми людьми в тишине неловко, а сейчас — совсем нет."
        },
        {
          "speaker": "vlad",
          "text": "потому что мне не нужно перед тобой кем-то казаться. просто хорошо сидеть рядом."
        },
        {
          "speaker": "narrator",
          "text": "Он говорит это тихо, опустив глаза в свою чашку, и пауза после этих слов звучит честнее любого комплимента."
        }
      ],
      "next": "c2.end"
    },
    "c2.pause.playful": {
      "id": "c2.pause.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "у меня дома есть ещё одна любимая игра на двоих — про двух безумных поваров на крошечной кухне."
        },
        {
          "speaker": "heroine",
          "text": "После вчерашней коробки и сегодняшнего зонта мы на кухне точно устроим пожар."
        },
        {
          "speaker": "vlad",
          "text": "там это почти поощряется. главное — вовремя передавать друг другу продукты и не путаться у плиты."
        },
        {
          "speaker": "narrator",
          "text": "Он достаёт телефон и показывает смешной набросок двух человечков в колпаках. Чтобы рассмотреть экран без бликов, ты чуть наклоняешься ближе."
        },
        {
          "speaker": "narrator",
          "text": "Влад вдруг замолкает на полуслове. Подняв глаза, ты замечаешь, что он смотрит уже не на экран, а на тебя."
        },
        {
          "speaker": "vlad",
          "text": "подожди… я забыл, какое там было второе правило."
        },
        {
          "speaker": "heroine",
          "text": "Наверное, не отвлекаться от плиты?"
        },
        {
          "speaker": "vlad",
          "text": "вот с этим, чувствую, будут серьёзные проблемы."
        },
        {
          "speaker": "narrator",
          "text": "Он хмыкает и убирает телефон в карман, чуть смущённо потирая переносицу."
        }
      ],
      "next": "c2.end"
    },
    "c2.end": {
      "id": "c2.end",
      "kind": "dialogue",
      "scene": {
        "background": "bg.rain.awning",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Дождь почти стихает, оставляя свежий воздух и светлую полосу за крышами, но с веток лип вдоль тротуара всё ещё срываются крупные капли."
        },
        {
          "speaker": "narrator",
          "text": "Вы поднимаетесь из-за столика. Влад отстёгивает от сумки серый зонт и раскрывает купол над твоей головой."
        },
        {
          "speaker": "heroine",
          "text": "Дождь ведь уже почти закончился."
        },
        {
          "speaker": "vlad",
          "text": "с деревьев ещё капает. да и должен же этот зонт сегодня хоть раз честно поработать."
        },
        {
          "speaker": "narrator",
          "text": "Под одним куполом приходится идти в одном темпе, совсем рядом — рукава пальто пару раз задевают друг друга над блестящим асфальтом."
        },
        {
          "speaker": "vlad",
          "text": "слушай… давай завтра вечером пойдём на набережную? обещают ясное небо. возьмём горячий чай и посидим у воды, без всяких крыш."
        },
        {
          "speaker": "heroine",
          "text": "Давай. Посмотрим, что у тебя за программа для хорошей погоды."
        },
        {
          "speaker": "vlad",
          "text": "договорились. буду ждать тебя у скамейки возле фонарей. до завтра."
        },
        {
          "speaker": "narrator",
          "text": "У поворота он ещё секунду держит зонт над тобой, пока ты не сворачиваешь к своему дому, и только потом опускает купол."
        }
      ],
      "next": "c2.end.route"
    },
    "c2.end.route": {
      "id": "c2.end.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "rainRoute",
              "equals": "arcade"
            }
          ],
          "next": "c2.finish.arcade"
        }
      ],
      "fallback": "c2.finish.shelter"
    },
    "c2.finish.shelter": {
      "id": "c2.finish.shelter",
      "kind": "end",
      "endingId": "c2.shelter",
      "cardId": "c2.shelter"
    },
    "c2.finish.arcade": {
      "id": "c2.finish.arcade",
      "kind": "end",
      "endingId": "c2.arcade",
      "cardId": "c2.arcade"
    }
  }
};
