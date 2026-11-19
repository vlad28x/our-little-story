// Authoritative text: outputs/SEASON_01_02_POLISH_SPEC_2026_11_19.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter1:Chapter = {
  "id": 1,
  "contentVersion": CONTENT_VERSION,
  "title": "Случайная встреча",
  "entry": "c1.prologue",
  "nodes": {
    "c1.prologue": {
      "id": "c1.prologue",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.approach"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Рабочий день наконец закончился. На улице свежо, и по дороге домой ты замедляешь шаг у светящегося окна небольшого кафе."
        },
        {
          "speaker": "narrator",
          "text": "На вывеске — «Пауза». У стекла пустует маленький столик, внутри негромко звенит посуда."
        },
        {
          "speaker": "narrator",
          "text": "Ты убираешь телефон в карман: возвращаться в пустую квартиру прямо сейчас не хочется. Пять минут с чем-нибудь горячим звучат куда лучше."
        }
      ],
      "next": "c1.before"
    },
    "c1.before": {
      "id": "c1.before",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "По ту сторону стекла Влад допивает остывший кофе. Сегодня он впервые за неделю закрыл ноутбук пораньше и выбрался забрать заказанную настолку."
        },
        {
          "speaker": "narrator",
          "text": "Зашёл к Нине на десять минут, не удержался, снял плёнку с коробки и разложил деревянные фигурки с маленьким мостиком."
        },
        {
          "speaker": "narrator",
          "text": "Теперь кофе закончился, а детали упрямо не помещаются обратно в ячейки. Влад прижимает крышку ладонью, подхватывает пустой стакан и идёт к выходу."
        }
      ],
      "next": "c1.entry"
    },
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
          "text": "Ты тянешься к ручке ровно в ту секунду, когда дверь распахивается изнутри и на улицу выплывает запах кофе и корицы."
        },
        {
          "speaker": "vlad",
          "text": "ой, проходи. я сейчас…"
        },
        {
          "speaker": "narrator",
          "text": "Он пытается придержать тяжёлую дверь локтем, чтобы не задеть тебя, но коробка под другой рукой решает открыться сама."
        },
        {
          "speaker": "narrator",
          "text": "Крышка съезжает, и три круглых деревянных жетона со стуком разбегаются по коврику. Один упирается прямо в носок твоей обуви."
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
        "character": "vlad.city.awkward"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты придерживаешь жетон и поднимаешь глаза. Перед тобой парень в сером пальто с непослушными кудрями: он одновременно удерживает дверь, стакан и непокорную коробку."
        },
        {
          "speaker": "vlad",
          "text": "спасибо. вообще-то план был просто красиво придержать тебе дверь."
        },
        {
          "speaker": "vlad",
          "text": "дверь, если что, придержал. по остальным пунктам есть вопросы."
        },
        {
          "speaker": "narrator",
          "text": "От его шарфа пахнет кофе, а в голосе слышится такая искренняя растерянность, что сдержать смешок трудно."
        },
        {
          "speaker": "narrator",
          "text": "Из-под ближайшего столика неспешно выходит рыжевато-кремовый кот и с видом ревизора смотрит на рассыпанные детали."
        }
      ],
      "next": "c1.approach"
    },
    "c1.approach": {
      "id": "c1.approach",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.awkward"
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
          "text": "но раз уж ты остановилась, я срочно пытаюсь понять, как засчитать оба варианта."
        },
        {
          "speaker": "heroine",
          "text": "Сначала посмотрим, сколько деталей пережило твоё вступление."
        },
        {
          "speaker": "narrator",
          "text": "Влад коротко усмехается, поправляет сползающий шарф и ставит коробку на край ближайшего столика."
        },
        {
          "speaker": "vlad",
          "text": "справедливо. начинаем с инвентаризации."
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
          "text": "давай. я тогда беру на себя обязательство не высыпать вторую половину."
        },
        {
          "speaker": "narrator",
          "text": "Он ставит пустой стакан на стол и приседает рядом у коврика. Когда ты поднимаешь первый жетон, вы одновременно тянетесь к маленькому деревянному мостику."
        },
        {
          "speaker": "narrator",
          "text": "Его пальцы на долю секунды задевают твои. Влад чуть дёргает руку назад, уступая деталь тебе."
        },
        {
          "speaker": "heroine",
          "text": "Ответственная у тебя должность."
        },
        {
          "speaker": "vlad",
          "text": "пока на испытательном сроке. спасибо, что выручаешь."
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
          "text": "да, точно. устроил пробку прямо на пороге."
        },
        {
          "speaker": "narrator",
          "text": "Он отступает к свободному столику, пропуская тебя внутрь. Дверь наконец захлопывается за спиной, отсекая уличный шум."
        },
        {
          "speaker": "heroine",
          "text": "Вот. Теперь хотя бы сквозняка нет."
        },
        {
          "speaker": "vlad",
          "text": "уже половина успеха. осталось разобраться с моей маленькой катастрофой."
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
          "text": "я Влад, кстати. обычно я знакомлюсь без спецэффектов и деталей на полу."
        },
        {
          "speaker": "heroine",
          "text": "Приятно познакомиться, Влад. Зато такой способ точно запомнится."
        },
        {
          "speaker": "vlad",
          "text": "хех. значит, не зря ронял."
        },
        {
          "speaker": "narrator",
          "text": "Он на секунду задерживает на тебе взгляд — чуть внимательнее, чем полагается простому прохожему, — и переводит глаза на коробку."
        },
        {
          "speaker": "nina",
          "text": "Влад, если ты открываешь здесь игровой клуб, Пончик уже записался первым."
        },
        {
          "speaker": "narrator",
          "text": "Кот чинно укладывается на коврике рядом с забытым у стены серым зонтиком."
        },
        {
          "speaker": "vlad",
          "text": "у него, как всегда, лучшие места в зале."
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
          "text": "Влад приоткрывает крышку. Внутри пустуют три круглых гнезда с подписью «Дорожные жетоны»."
        },
        {
          "speaker": "vlad",
          "text": "я придержу остальные детали, чтобы не разбежались. посмотришь со своей стороны?"
        },
        {
          "speaker": "heroine",
          "text": "А если один окажется под котом?"
        },
        {
          "speaker": "vlad",
          "text": "тогда придётся вести сложные переговоры. но давай сначала проверим вокруг."
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
          "text": "Ты вкладываешь третий жетон в ячейку на весу, пока Влад держит коробку открытой."
        },
        {
          "speaker": "vlad",
          "text": "ого. ты так быстро их нашла, будто сама эту игру прятала."
        },
        {
          "speaker": "heroine",
          "text": "Просто у меня сегодня хороший обзор."
        },
        {
          "speaker": "vlad",
          "text": "а я только настроился долго и вдумчиво искать вместе с тобой."
        },
        {
          "speaker": "narrator",
          "text": "Поймав смысл собственной фразы, он чуть тушуется, прокашливается и поспешно закрывает крышку."
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
          "text": "Все три жетона наконец на месте — за время поисков вы успели проверить каждый угол у входа."
        },
        {
          "speaker": "vlad",
          "text": "игру спасли, заодно изучили весь интерьер у двери."
        },
        {
          "speaker": "heroine",
          "text": "Коврик особенно старался запутать следы."
        },
        {
          "speaker": "vlad",
          "text": "да, он явно был в сговоре с коробкой. но искать с тобой оказалось веселее, чем одному."
        },
        {
          "speaker": "narrator",
          "text": "Он закрывает крышку, но не спешит отходить, будто прикидывает, как продлить разговор ещё на пару минут."
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
          "text": "давай я сам дотянусь до дальних. а ты придержи крышку, ладно?"
        },
        {
          "speaker": "narrator",
          "text": "Ты берёшь коробку, а Влад быстро собирает оставшиеся жетоны и аккуратно раскладывает их по ячейкам."
        },
        {
          "speaker": "heroine",
          "text": "Вот теперь все дома."
        },
        {
          "speaker": "vlad",
          "text": "да. вдвоём получилось куда быстрее, чем одному на пороге."
        },
        {
          "speaker": "narrator",
          "text": "Забирая коробку, он едва заметно задевает пальцами твою ладонь и кивает на свободный зал."
        }
      ],
      "next": "c1.inside"
    },
    "c1.inside": {
      "id": "c1.inside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Что ж вы у порога стоите? Ставьте свою спасённую коробку к окну, столик свободен."
        },
        {
          "speaker": "narrator",
          "text": "Внутри пахнет печёным яблоком, у стойки тихо звякает фарфор, а за окном уже сгустились сумерки."
        },
        {
          "speaker": "vlad",
          "text": "кот остался дежурить у входа. видимо, ждёт второй раунд."
        },
        {
          "speaker": "narrator",
          "text": "Влад перехватывает коробку поудобнее и на секунду заминается."
        },
        {
          "speaker": "vlad",
          "text": "слушай… я как раз хотел немного передохнуть перед дорогой. если у тебя есть пять минут — посидишь со мной?"
        },
        {
          "speaker": "narrator",
          "text": "Ты смотришь на спокойный столик у окна, потом на его открытое, чуть смущённое лицо — и понимаешь, что уходить прямо сейчас действительно не хочется."
        }
      ],
      "next": "c1.pace"
    },
    "c1.pace": {
      "id": "c1.pace",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
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
          "text": "договорились. никакой суеты и громких презентаций."
        },
        {
          "speaker": "narrator",
          "text": "Он отодвигает для тебя стул у окна, кладёт коробку на соседнее сиденье и садится напротив, снимая шарф."
        },
        {
          "speaker": "heroine",
          "text": "Вот так гораздо лучше. На улице сегодня слишком шумно."
        },
        {
          "speaker": "vlad",
          "text": "да. а тут время как будто замедляется."
        },
        {
          "speaker": "narrator",
          "text": "Он смотрит на меню перед собой, но пару секунд явно прислушивается не к залу, а к тишине за вашим столиком."
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
          "text": "о, она умеет притворяться простой семейной игрой на двадцать минут."
        },
        {
          "speaker": "heroine",
          "text": "А на практике?"
        },
        {
          "speaker": "vlad",
          "text": "на практике один человек говорит «сейчас быстренько разложим», а за окном уже другое время года."
        },
        {
          "speaker": "narrator",
          "text": "Он садится напротив и разворачивает коробку крышкой к тебе — его пальцы случайно касаются твоих на узком столике."
        },
        {
          "speaker": "narrator",
          "text": "Вы оба чуть замираете на долю секунды и почти одновременно усмехаетесь, будто ничего особенного не случилось."
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
          "text": "тогда я очень рад, что обычный скучный выход из кафе сегодня сорвался."
        },
        {
          "speaker": "heroine",
          "text": "Только не привыкай. Вторую коробку на лету я ловить не обещала."
        },
        {
          "speaker": "vlad",
          "text": "понял. значит, дальше придётся справляться без падающих предметов."
        },
        {
          "speaker": "narrator",
          "text": "Он отвечает вполне уверенно, почти с вызовом, но через секунду сам смущается собственной смелости и трёт затылок."
        },
        {
          "speaker": "narrator",
          "text": "Выглядит это неожиданно живо и по-настоящему искренне."
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
          "text": "Нина ставит на стол кувшин с водой и два стакана. Влад сразу придвигает один ближе к тебе."
        },
        {
          "speaker": "vlad",
          "text": "я сегодня весь день просидел за кодом. в какой-то момент понял, что если не выйду на улицу, начну разговаривать с монитором."
        },
        {
          "speaker": "heroine",
          "text": "И чтобы отвлечься от логики, купил коробку со схемами и правилами?"
        },
        {
          "speaker": "vlad",
          "text": "привычка. я бэкенд пишу — мне спокойно, когда внутри всё разложено по полочкам."
        },
        {
          "speaker": "vlad",
          "text": "правда, сегодня весь мой порядок рассыпался прямо на входе."
        },
        {
          "speaker": "narrator",
          "text": "Он говорит это без лишнего пафоса, чуть крутя в руках пустой стакан."
        },
        {
          "speaker": "narrator",
          "text": "На крышке коробки между вами нарисованы лесная тропа, два маленьких путешественника с флажками и домик с фонарём у крыльца."
        },
        {
          "speaker": "heroine",
          "text": "Ты, кажется, здесь свой человек. Нина даже не удивилась твоим полётам у входа."
        },
        {
          "speaker": "vlad",
          "text": "захожу иногда после работы. дома слишком легко сказать себе «ещё одну задачу» и очнуться глубокой ночью."
        },
        {
          "speaker": "heroine",
          "text": "Знакомое чувство. Я тоже шла домой, увидела свет в окне и решила сделать паузу."
        },
        {
          "speaker": "vlad",
          "text": "значит, мы оба вовремя свернули."
        },
        {
          "speaker": "narrator",
          "text": "За окном проезжает автобус, полоса света скользит по столу. Влад слушает не перебивая — спокойно и действительно внимательно."
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
          "text": "да, это кооператив. нужно провести двух путешественников через реку и старый карьер к одному домику до темноты."
        },
        {
          "speaker": "heroine",
          "text": "И никто не играет друг против друга?"
        },
        {
          "speaker": "vlad",
          "text": "в этом и смысл. тут либо дошли вдвоём, либо оба остались ночевать в лесу."
        },
        {
          "speaker": "narrator",
          "text": "Он достаёт из коробки тот самый деревянный мостик и ставит его на стол между вами."
        },
        {
          "speaker": "vlad",
          "text": "мне и в жизни больше нравится, когда люди на одной стороне, а не выясняют, кто кого переиграл."
        },
        {
          "speaker": "heroine",
          "text": "Звучит как хорошая стратегия. Хотя за право ставить мостик мы ещё поспорим."
        },
        {
          "speaker": "narrator",
          "text": "Влад хмыкает, глядя на крошечную деталь."
        },
        {
          "speaker": "vlad",
          "text": "с тобой я готов поспорить даже за мостик."
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
          "text": "Пончик бесшумно перебирается от двери и запрыгивает на свободный стул сбоку от стола, сворачиваясь клубком."
        },
        {
          "speaker": "heroine",
          "text": "Смотри. Второй игрок уже на месте."
        },
        {
          "speaker": "vlad",
          "text": "он у нас наблюдатель. следит, чтобы я опять чего-нибудь не уронил."
        },
        {
          "speaker": "nina",
          "text": "Он просто выбирает столики, где людям спокойно сидится. К шумным не подходит."
        },
        {
          "speaker": "narrator",
          "text": "После слов Нины Влад чуть отводит взгляд и сдвигает коробку, чтобы коту было просторнее."
        },
        {
          "speaker": "vlad",
          "text": "ну вот. даже у кота к нам никаких претензий."
        },
        {
          "speaker": "narrator",
          "text": "Ты легонько гладишь кошачью спинку — Пончик тут же отвечает тихим мурлыканьем."
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
          "text": "В тёмном стекле отражается ваш столик и лампа над ним, пока снаружи ветер гонит по тротуару сухие листья."
        },
        {
          "speaker": "heroine",
          "text": "Как хорошо, что здесь так тихо."
        },
        {
          "speaker": "vlad",
          "text": "да. я обычно хожу в бассейн, когда нужно вытряхнуть лишние мысли из головы."
        },
        {
          "speaker": "vlad",
          "text": "но посидеть вот так у окна оказалось ничуть не хуже заплыва."
        },
        {
          "speaker": "narrator",
          "text": "В отражении стекла ты ловишь его взгляд — когда ты смеёшься или просто молчишь, он смотрит с простым, неподдельным интересом."
        },
        {
          "speaker": "heroine",
          "text": "Здесь хотя бы шапочка для плавания не нужна."
        },
        {
          "speaker": "vlad",
          "text": "огромный плюс. в шапочке я бы точно не рискнул с тобой знакомиться."
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
          "text": "На столе коротко вспыхивает экран его телефона. Влад даже не смотрит, кто пишет — одним движением переворачивает телефон экраном вниз."
        },
        {
          "speaker": "vlad",
          "text": "знаешь… я ведь зашёл сюда буквально на десять минут. а в итоге это лучший кусок всей моей недели."
        },
        {
          "speaker": "heroine",
          "text": "Даже с учётом спасательной операции на коврике?"
        },
        {
          "speaker": "vlad",
          "text": "особенно с ней. без неё ты бы просто взяла кофе с собой и ушла."
        },
        {
          "speaker": "narrator",
          "text": "В этих словах нет дежурного подката — только простая констатация факта, от которой за столиком становится удивительно легко."
        },
        {
          "speaker": "narrator",
          "text": "У стойки Нина раскладывает вечернее меню, но никто вас не торопит."
        }
      ],
      "next": "c1.plan"
    },
    "c1.plan": {
      "id": "c1.plan",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.smile"
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
          "text": "давай. чашку чая я точно удержу обеими руками."
        },
        {
          "speaker": "heroine",
          "text": "А коробка пусть пока отдыхает."
        },
        {
          "speaker": "narrator",
          "text": "Нина приносит две керамические чашки. Вы сидите ещё полчаса, и разговор течёт легко, без единой неловкой паузы."
        },
        {
          "speaker": "vlad",
          "text": "спасибо, что осталась. правда не хотелось, чтобы ты сразу уходила."
        },
        {
          "speaker": "narrator",
          "text": "У выхода он подаёт тебе сумку и на секунду придерживает дверь."
        },
        {
          "speaker": "vlad",
          "text": "давай встретимся завтра здесь же? пройдёмся немного. дверь я беру на себя."
        },
        {
          "speaker": "heroine",
          "text": "Договорились. До завтра, Влад."
        },
        {
          "speaker": "narrator",
          "text": "На улице ты через пару шагов оборачиваешься к витрине: Влад всё ещё стоит у столика и, пойманный с поличным, неловко машет рукой."
        },
        {
          "speaker": "narrator",
          "text": "А у двери Пончик устраивается прямо поверх забытого Владом серого зонтика. Кажется, завтрашний повод для встречи уже готов."
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
          "text": "отлично. тогда правило номер два моей методики: до конца вечера больше ничего не ронять."
        },
        {
          "speaker": "narrator",
          "text": "Стоит ему это произнести, как со спинки соседнего стула бесшумно соскальзывает его шарф."
        },
        {
          "speaker": "heroine",
          "text": "Потрясающая выдержка. Почти три секунды продержался."
        },
        {
          "speaker": "vlad",
          "text": "ладно, сдаюсь. сегодня гравитация явно играет против меня."
        },
        {
          "speaker": "narrator",
          "text": "Он подбирает шарф, вы оба смеётесь, и последняя неловкость первого знакомства куда-то исчезает."
        },
        {
          "speaker": "vlad",
          "text": "давай завтра продолжим? встретимся у «Паузы» и пройдёмся — проверим, как я веду себя на открытой местности."
        },
        {
          "speaker": "heroine",
          "text": "Идёт. Посмотрим на твою методику при дневном свете."
        },
        {
          "speaker": "narrator",
          "text": "На улице ты оборачиваешься у витрины: через стекло видно, как Влад смотрит вслед и чуть растерянно качает головой, будто сам не ожидал такого удачного вечера."
        },
        {
          "speaker": "narrator",
          "text": "А в углу у двери Пончик тем временем сворачивается калачиком прямо на его забытом сером зонтике."
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
          "text": "обязательно покажу. там как раз нужен второй человек, с которым можно идти в одну сторону."
        },
        {
          "speaker": "heroine",
          "text": "Опыт спасения путешественников у меня уже есть."
        },
        {
          "speaker": "vlad",
          "text": "да, ты принята в команду без конкурса."
        },
        {
          "speaker": "narrator",
          "text": "Он убирает жетон с двумя точками во внутренний кармашек коробки и аккуратно закрывает крышку."
        },
        {
          "speaker": "vlad",
          "text": "тогда завтра встречаемся у «Паузы»? сначала немного прогуляемся, а коробку я захвачу с собой."
        },
        {
          "speaker": "heroine",
          "text": "Договорились. Главное — донести её целиком."
        },
        {
          "speaker": "narrator",
          "text": "Влад открывает перед тобой дверь, а когда ты через пару шагов оборачиваешься с тротуара, ловишь через стекло его спокойный, внимательный взгляд."
        },
        {
          "speaker": "narrator",
          "text": "Коробку он сегодня не забыл — зато его серый зонтик у входа уже прочно занят спящим Пончиком."
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
};
