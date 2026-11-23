// Authoritative text: outputs/SEASON_01_02_POLISH_SPEC_2026_11_19.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter8:Chapter = {
  "id": 8,
  "contentVersion": CONTENT_VERSION,
  "scriptRevision": 6,
  "title": "Половина кухни",
  "entry": "c8.supper.entry",
  "nodes": {
    "c8.supper.entry": {
      "id": "c8.supper.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад открывает дверь уже в тёмном кухонном фартуке. Поперёк кармана тянется белый след от муки, а из кухни пахнет печёным перцем и обжаренными грибами.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Place",
              "value": "home"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Смотрю, вопрос с единственным фартуком решён ещё до моего прихода."
        },
        {
          "speaker": "vlad",
          "text": "я человек слова. правда, стоило его завязать и достать муку, как я тут же оставил на себе автограф."
        },
        {
          "speaker": "heroine",
          "text": "Зато теперь нам обоим не страшно испачкаться."
        },
        {
          "speaker": "vlad",
          "text": "на это я и рассчитывал. проходи, стол освободил — теперь моя маленькая кухня официально рассчитана на двоих."
        },
        {
          "speaker": "narrator",
          "text": "Ты оставляешь сумку с фотоаппаратом у стены и моешь руки; Влад подаёт чистое сухое полотенце."
        },
        {
          "speaker": "narrator",
          "text": "На столе уже ждут две тарелки — ты берёшь верхнюю и ставишь на свою сторону."
        }
      ],
      "next": "c8.supper.table"
    },
    "c8.supper.table": {
      "id": "c8.supper.table",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "За тарелкой, прислонённая к фарфоровой сахарнице, стоит твоя открытка из галереи — «Скол» повёрнут прямо к твоему стулу.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Ты поставил «Скол» прямо сюда! Под лампой каждую светлую крупинку видно.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "поставил напротив твоего места. утром пил кофе, смотрел на неё и вспоминал тот зал.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты чуть сдвигаешь сахарницу, чтобы открытка оставалась на виду.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "За тарелкой, у сахарницы, стоит подаренная тобой синяя открытка «Просвета» — в свете кухонной лампы полоска двери на ней будто светится.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Ты поставил «Просвет» прямо к нашему столу! Вечером под лампой эта дверь кажется ещё уютнее.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "утром она мне подняла настроение. пил кофе, смотрел на неё и думал, как ты сегодня придёшь.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты придвигаешь сахарницу чуть глубже, оставляя синюю дверь на виду.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Под кухонной лампой сложены две салфетки, а посередине стола Влад заранее поставил деревянную подставку под горячее.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Думаешь, наше будущее блюдо сюда поместится?",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "я ради тебя даже цветок с подоконника переселил — места хватит на любой кулинарный эксперимент.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "план был такой: завернуть одну большую лепёшку с начинкой, подрумянить до хруста и нарезать на двоих. одобряешь?"
        },
        {
          "speaker": "heroine",
          "text": "Одобряю. Только начинку собираем в четыре руки."
        },
        {
          "speaker": "vlad",
          "text": "ради этого и звал. одному у этой доски стоять совсем не то."
        }
      ],
      "next": "c8.supper.filling"
    },
    "c8.supper.filling": {
      "id": "c8.supper.filling",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад выставляет у разделочной доски красный перец в масле, обжаренные грибы, сыр и свежую зелень."
        },
        {
          "speaker": "narrator",
          "text": "Когда он поворачивается к свету, ты замечаешь у него на скуле небольшой белый мазок муки."
        },
        {
          "speaker": "heroine",
          "text": "Подожди, шеф-повар. Не двигайся секунду.",
          "delivery": "с усмешкой"
        },
        {
          "speaker": "narrator",
          "text": "Ты тянешься и аккуратно стираешь муку с его скулы. Влад на секунду замирает с тёркой в руках, чуть удивлённый твоим жестом, а потом тихо хмыкает:"
        },
        {
          "speaker": "vlad",
          "text": "спасибо… я бы так весь вечер и ходил. а если честно, можешь стирать её подольше."
        },
        {
          "speaker": "heroine",
          "text": "Тогда мы точно останемся без ужина. Кто у нас отвечает за сыр?"
        },
        {
          "speaker": "vlad",
          "text": "я и моя тёрка полностью в твоём распоряжении. выбирай, с чего начинаем."
        }
      ],
      "next": "c8.supper.fillChoice"
    },
    "c8.supper.fillChoice": {
      "id": "c8.supper.fillChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "prompt": "Чем наполним лепёшку?",
      "choices": [
        {
          "id": "pepper",
          "text": "Возьму перец и сыр",
          "next": "c8.supper.pepper",
          "effects": [
            {
              "kind": "set",
              "key": "c8Filling",
              "value": "pepper"
            }
          ]
        },
        {
          "id": "mushroom",
          "text": "Возьму грибы и сыр",
          "next": "c8.supper.mushroom",
          "effects": [
            {
              "kind": "set",
              "key": "c8Filling",
              "value": "mushroom"
            }
          ]
        },
        {
          "id": "mix",
          "text": "Смешаем перец, грибы и сыр",
          "next": "c8.supper.mix",
          "effects": [
            {
              "kind": "set",
              "key": "c8Filling",
              "value": "mix"
            }
          ]
        },
        {
          "id": "simple",
          "text": "Возьму просто сыр и зелень",
          "next": "c8.supper.simple",
          "effects": [
            {
              "kind": "set",
              "key": "c8Filling",
              "value": "simple"
            }
          ]
        }
      ]
    },
    "c8.supper.pepper": {
      "id": "c8.supper.pepper",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Берём сладкий перец. Побольше красного, чтобы он ярко смотрелся сквозь расплавленный сыр."
        },
        {
          "speaker": "vlad",
          "text": "отличный выбор. приступаю к обязанностям сырного ассистента."
        },
        {
          "speaker": "narrator",
          "text": "Вы работаете у одной узкой столешницы: ты режешь перец тонкими полосками, Влад рядом натирает сыр."
        },
        {
          "speaker": "heroine",
          "text": "Кажется, сыра у тебя там уже на два ресторана."
        },
        {
          "speaker": "vlad",
          "text": "сыра много не бывает. вот расплавится — сама скажешь спасибо."
        },
        {
          "speaker": "narrator",
          "text": "Ты протягиваешь ему полоску сладкого перца на пробу; Влад перехватывает её, кивает с видом критика и возвращается к тёрке."
        }
      ],
      "next": "c8.supper.tear"
    },
    "c8.supper.mushroom": {
      "id": "c8.supper.mushroom",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Конечно грибы. Они так пахли ещё с порога, что у меня не было шансов выбрать другое."
        },
        {
          "speaker": "vlad",
          "text": "знал, чем тебя заманить. специально обжарил их до корочки перед твоим приходом."
        },
        {
          "speaker": "narrator",
          "text": "У одной доски места немного — вы работаете слаженно, передавая миску и нож без лишних слов."
        },
        {
          "speaker": "heroine",
          "text": "Вот эти самые румяные кусочки оставлю на видном месте."
        },
        {
          "speaker": "vlad",
          "text": "попробуй один прямо сейчас — надо же проверить шеф-повара."
        },
        {
          "speaker": "narrator",
          "text": "Он подаёт тебе поджаристый ломтик на кончике вилки; получается действительно вкусно, и Влад явно доволен твоей оценкой."
        }
      ],
      "next": "c8.supper.tear"
    },
    "c8.supper.mix": {
      "id": "c8.supper.mix",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай соединим всё вместе: с меня красный перец, с тебя грибы и сыр."
        },
        {
          "speaker": "vlad",
          "text": "настоящий кооператив на кухне. мне нравится твой подход."
        },
        {
          "speaker": "narrator",
          "text": "Вы по очереди отправляете в общую миску яркий перец, грибы и горку сыра; на маленькой кухне руки то и дело пересекаются над одной доской."
        },
        {
          "speaker": "heroine",
          "text": "По-моему, получилось идеально."
        },
        {
          "speaker": "vlad",
          "text": "ещё бы. с таким напарником невкусно получиться не может."
        }
      ],
      "next": "c8.supper.tear"
    },
    "c8.supper.simple": {
      "id": "c8.supper.simple",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай сделаем простую классику — сыр и свежую зелень, без долгой нарезки."
        },
        {
          "speaker": "vlad",
          "text": "с радостью. быстрее управимся у доски — больше времени останется на сам вечер."
        },
        {
          "speaker": "narrator",
          "text": "Ты рвёшь ароматные листочки зелени, пока Влад натирает сыр и смешивает всё в одной миске."
        }
      ],
      "next": "c8.supper.tear"
    },
    "c8.supper.tear": {
      "id": "c8.supper.tear",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты придерживаешь край доски, Влад разворачивает тонкий лист лепёшки — и сухой сгиб посередине расходится прямо в руках на две половины."
        },
        {
          "speaker": "narrator",
          "text": "Вы со смехом пытаетесь сложить края внахлёст, но шов снова раскрывается: один большой рулет на сковороде точно распадётся."
        },
        {
          "speaker": "vlad",
          "text": "ну вот. мой грандиозный план рухнул на глазах. зато теперь у каждого буквально своя половина кухни."
        },
        {
          "speaker": "heroine",
          "text": "Не спеши сдаваться. Разделим каждую половину ещё пополам — получится ровно четыре порции, по две на каждого. Так выйдет даже вкуснее."
        },
        {
          "speaker": "angel",
          "text": "Из четырёх кусочков получатся аккуратные закрытые конвертики на сковороде."
        },
        {
          "speaker": "devil",
          "text": "А если запечь все четыре порции открытыми в духовке, сверху будет хрустящая золотистая корочка сыра!"
        }
      ],
      "next": "c8.supper.shapeChoice",
      "presentation": "adviser-aside"
    },
    "c8.supper.shapeChoice": {
      "id": "c8.supper.shapeChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "prompt": "Как изменим план?",
      "choices": [
        {
          "id": "fold",
          "text": "Сложим маленькие конверты и подрумяним на сковороде",
          "next": "c8.supper.fold",
          "effects": [
            {
              "kind": "set",
              "key": "c8Shape",
              "value": "fold"
            }
          ]
        },
        {
          "id": "open",
          "text": "Оставим порции открытыми и запечём",
          "next": "c8.supper.open",
          "effects": [
            {
              "kind": "set",
              "key": "c8Shape",
              "value": "open"
            }
          ]
        }
      ]
    },
    "c8.supper.fold": {
      "id": "c8.supper.fold",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сложим четыре маленьких конвертика и обжарим до хруста. Поверни сковороду ручкой ко мне."
        },
        {
          "speaker": "narrator",
          "text": "Влад сдвигается чуть в сторону, поворачивает ручку сковороды к тебе и освобождает место у плиты, чтобы тебе было удобно."
        },
        {
          "speaker": "narrator",
          "text": "Ты выкладываешь начинку с перцем на первый квадратик и подгибаешь край, а Влад подхватывает готовый конвертик лопаткой.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "pepper"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты выкладываешь грибы с сыром на первый кусочек и сворачиваешь уголки, а Влад аккуратно переносит конверт на сковороду.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mushroom"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты придерживаешь края лепёшки, Влад помогает загнуть непослушный уголок, и первый конвертик вы отправляете на сковороду вместе.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mix"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад быстро складывает сырные конвертики рядом, а ты снимаешь лопаткой первую подрумянившуюся порцию.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "simple"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "смотри, у самого первого уголок всё-таки приоткрылся."
        },
        {
          "speaker": "heroine",
          "text": "Не трогай его — там сейчас зажарится самое вкусное сырное ушко."
        },
        {
          "speaker": "narrator",
          "text": "Расплавленный сыр у края схватывается золотистой корочкой, и по кухне расходится такой домашний запах, что уходить от плиты не хочется. Влад аккуратно перекладывает все четыре румяных конвертика со сковороды на общее блюдо."
        },
        {
          "speaker": "vlad",
          "text": "чур это хрустящее ушко на первом делим строго пополам."
        }
      ],
      "next": "c8.supper.meal"
    },
    "c8.supper.open": {
      "id": "c8.supper.open",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Разложим все четыре кусочка на противне открытыми — пусть сыр сверху запечётся золотистой шапкой."
        },
        {
          "speaker": "vlad",
          "text": "гениально. тогда каждый уголок будет хрустеть. сейчас разогрею духовку."
        },
        {
          "speaker": "narrator",
          "text": "Влад достаёт противень, ловко обходя тебя в узком проходе между столом и плитой, и расстилает пергамент."
        },
        {
          "speaker": "narrator",
          "text": "Ты распределяешь перец с сыром по первой порции, а Влад переносит наполненные ломтики на противень.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "pepper"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты укладываешь грибы и сыр до самых краёв, а Влад рядом выравнивает порции на листе.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mushroom"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад кладёт начинку ложкой, а ты разравниваешь её до уголков — ваши руки двигаются над противнем почти синхронно.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mix"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад раскладывает сыр с зеленью по кусочкам, пока ты освобождаешь деревянную подставку на столе.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "simple"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Смотри, у этой порции сыр лёг прямо до самого уголка — запечётся до хруста."
        },
        {
          "speaker": "vlad",
          "text": "отлично. вот этот румяный край и будет нашим главным дегустационным укусом на двоих."
        },
        {
          "speaker": "narrator",
          "text": "Через несколько минут Влад достаёт горячий противень и аккуратно перекладывает все четыре запечённые порции на общее блюдо на подставке: вокруг расплавленного сыра поднялись румяные края."
        },
        {
          "speaker": "heroine",
          "text": "Тот самый уголок подрумянился лучше всех. Неси скорее к столу."
        }
      ],
      "next": "c8.supper.meal"
    },
    "c8.supper.meal": {
      "id": "c8.supper.meal",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.apron.smile",
        "variants": [
          {
            "when": [],
            "fromLine": 15,
            "background": "bg.supper8.kitchen",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы садитесь за маленький стол друг напротив друга. Посередине на блюде дымятся четыре горячие порции; под абажуром уютно и тихо, за окном уже совсем стемнело."
        },
        {
          "speaker": "narrator",
          "text": "Вы раскладываете по первому конвертику на тарелки. Ты отламываешь то самое хрустящее сырное ушко и передаёшь половину Владу через стол.",
          "when": [
            {
              "key": "c8Shape",
              "equals": "fold"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Вы берёте по первой порции на тарелки. Ты отламываешь тот самый румяный хрустящий край с сыром и передаёшь половину Владу через стол.",
          "when": [
            {
              "key": "c8Shape",
              "equals": "open"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Видишь эту яркую красную полоску перца? Я берегла её с самой доски.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "pepper"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "А вот и тот самый поджаристый гриб, который мы приметили.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mushroom"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Смотри, твои грибы и мой перец встретились в самом лучшем кусочке.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mix"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Сыр у края так вкусно подрумянился, и зелень здесь идеально к месту.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "simple"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "осторожно, серединка ещё горячая."
        },
        {
          "speaker": "narrator",
          "text": "Первую порцию вы съедаете почти без пауз — тесто хрустит, расплавленный сыр тянется, и на маленькой кухне становится совсем по-домашнему."
        },
        {
          "speaker": "vlad",
          "text": "слушай… а хорошо, что лепёшка порвалась. в четырёх порциях хрустящих краёв оказалось в два раза больше."
        },
        {
          "speaker": "narrator",
          "text": "Ужин оказывается неожиданно вкусным — вы смеётесь, обсуждаете, какой кусок удался лучше, и незаметно съедаете половину. На общем блюде остаются две порции: одна целая и одна, которую вы только что разломили на двоих."
        },
        {
          "speaker": "narrator",
          "text": "Когда первый азарт стихает, за столом наступает спокойная, домашняя пауза. Влад смотрит на тебя через стол — без обычной шутки, чуть серьёзнее."
        },
        {
          "speaker": "heroine",
          "text": "Ты часто ужинаешь вот так, за этим столом?",
          "delivery": "тихо"
        },
        {
          "speaker": "vlad",
          "text": "один — почти никогда. обычно перехватываю что-нибудь на ходу, потому что на пустой кухне слишком тихо."
        },
        {
          "speaker": "vlad",
          "text": "я раньше думал, что дома хорошо, когда просто тихо и никто не трогает. а сейчас смотрю на тебя и понимаю… мне просто не хватало здесь тебя."
        },
        {
          "speaker": "narrator",
          "text": "Сказано это так просто и беззащитно честно, что в комнате на секунду становится совсем тихо. Влад развязывает фартук и вешает его на спинку стула."
        },
        {
          "speaker": "heroine",
          "text": "Мне тоже здесь очень хорошо, Влад. На нашей половине кухни."
        },
        {
          "speaker": "vlad",
          "text": "она теперь твоя в любой вечер, когда захочешь прийти."
        }
      ],
      "next": "c8.supper.frame"
    },
    "c8.supper.frame": {
      "id": "c8.supper.frame",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На деревянной доске ещё белеет мучной след, на блюде лежат оставшиеся две порции вашего ужина. Ты достаёшь из сумки плёночный аппарат — на счётчике «6»."
        },
        {
          "speaker": "heroine",
          "text": "Давай сохраним эту кухню на плёнке, пока всё не съели. Хочу помнить этот стол таким."
        }
      ],
      "next": "c8.supper.frameChoice"
    },
    "c8.supper.frameChoice": {
      "id": "c8.supper.frameChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "prompt": "Что оставим на плёнке?",
      "choices": [
        {
          "id": "foodHer",
          "text": "Я сниму блюдо",
          "next": "c8.supper.foodHer",
          "effects": [
            {
              "kind": "set",
              "key": "c8Frame",
              "value": "foodHer"
            }
          ]
        },
        {
          "id": "foodVlad",
          "text": "Влад, сними блюдо",
          "next": "c8.supper.foodVlad",
          "effects": [
            {
              "kind": "set",
              "key": "c8Frame",
              "value": "foodVlad"
            }
          ]
        },
        {
          "id": "boardHer",
          "text": "Я сниму рабочий беспорядок",
          "next": "c8.supper.boardHer",
          "effects": [
            {
              "kind": "set",
              "key": "c8Frame",
              "value": "boardHer"
            }
          ]
        },
        {
          "id": "boardVlad",
          "text": "Влад, сними рабочий беспорядок",
          "next": "c8.supper.boardVlad",
          "effects": [
            {
              "kind": "set",
              "key": "c8Frame",
              "value": "boardVlad"
            }
          ]
        }
      ]
    },
    "c8.supper.foodHer": {
      "id": "c8.supper.foodHer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Придвинь блюдо чуть ближе к лампе, а я сниму сверху."
        },
        {
          "speaker": "narrator",
          "text": "Влад берётся за дальний край тарелки. В видоискателе остаются целая порция, разломленный на двоих кусочек и его пальцы на фарфоре."
        },
        {
          "speaker": "vlad",
          "text": "руки из кадра убрать?"
        },
        {
          "speaker": "heroine",
          "text": "Нет, оставь пальцы на тарелке. Хочу, чтобы на снимке были и твои руки."
        }
      ],
      "next": "c8.supper.foodClick"
    },
    "c8.supper.foodVlad": {
      "id": "c8.supper.foodVlad",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сними с твоей стороны стола — оттуда свет красиво ложится на золотистый край."
        },
        {
          "speaker": "narrator",
          "text": "Ты передаёшь камеру Владу и придерживаешь блюдо. Он ловит в видоискатель две порции и твои пальцы на краю тарелки."
        },
        {
          "speaker": "vlad",
          "text": "вот так идеально. наш ужин и твои руки в одном кадре."
        }
      ],
      "next": "c8.supper.foodClick"
    },
    "c8.supper.foodClick": {
      "id": "c8.supper.foodClick",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Позади тарелки в кадр попадает нижний край твоей открытки из галереи со светлой выемкой скола.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Позади тарелки в кадр попадает синяя открытка «Просвета» с полоской света.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Позади тарелки под лампой белеет фарфоровая сахарница.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты нажимаешь кнопку спуска и прокручиваешь колёсико.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Film",
              "value": "key"
            }
          ],
          "when": [
            {
              "key": "c8Frame",
              "equals": "foodHer"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад нажимает спуск, прокручивает колёсико и возвращает камеру тебе.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Film",
              "value": "key"
            }
          ],
          "when": [
            {
              "key": "c8Frame",
              "equals": "foodVlad"
            }
          ]
        }
      ],
      "next": "c8.supper.film"
    },
    "c8.supper.boardHer": {
      "id": "c8.supper.boardHer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я сниму нашу разделочную доску. Поверни её тем краем к лампе."
        },
        {
          "speaker": "narrator",
          "text": "Влад поворачивает доску: в кадре остаются ложка, крошки и белый мучной след от ваших пальцев, похожий на запятую."
        },
        {
          "speaker": "vlad",
          "text": "красивый росчерк. интересно, чей это след — твой или мой?"
        },
        {
          "speaker": "heroine",
          "text": "Теперь уже общий."
        },
        {
          "speaker": "narrator",
          "text": "Ты нажимаешь спуск и прокручиваешь колёсико плёнки.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c8.supper.film"
    },
    "c8.supper.boardVlad": {
      "id": "c8.supper.boardVlad",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сними нашу доску сам — хочу увидеть, как этот беспорядок выглядит твоими глазами."
        },
        {
          "speaker": "narrator",
          "text": "Ты передаёшь ему аппарат. Влад наклоняется с камерой над столешницей, ловя доску, ложку и мучную запятую у края."
        },
        {
          "speaker": "vlad",
          "text": "самая честная фотография вечера. сразу видно, что готовили с душой."
        },
        {
          "speaker": "narrator",
          "text": "Он нажимает спуск, прокручивает колёсико и возвращает аппарат тебе.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c8.supper.film"
    },
    "c8.supper.film": {
      "id": "c8.supper.film",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Пока Влад разливает по кружкам горячий чай, ты успеваешь поймать ещё один кадр — его самого у плиты, смеющегося с полотенцем через плечо. А потом, когда вы снова сидите под лампой и ты, подперев щёку ладонью с пылинкой муки на пальцах, слушаешь его, Влад неожиданно поднимает аппарат и с коротким щелчком снимает тебя через стол."
        },
        {
          "speaker": "narrator",
          "text": "У него такой довольный и чуть виноватый вид, что спорить не хочется. На счётчике остаётся «3»; ты убираешь камеру в сумку, а Влад сдвигает тарелки к краю.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Film",
              "value": "nine"
            }
          ]
        }
      ],
      "next": "c8.supper.dance"
    },
    "c8.supper.dance": {
      "id": "c8.supper.dance",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты встаёшь из-за стола, чтобы поправить сумку. Влад поднимается следом и останавливается прямо перед тобой — теперь между вами нет ни стола, ни тарелок."
        },
        {
          "speaker": "narrator",
          "text": "На кухне горит только лампа над столом; за окном глухо шумит вечерний город."
        },
        {
          "speaker": "narrator",
          "text": "Влад делает полшага ближе и протягивает раскрытую ладонь — голос звучит тихо и немного взволнованно:"
        },
        {
          "speaker": "vlad",
          "text": "подожди, не уходи к двери. потанцуешь со мной здесь, без всякой музыки? мне весь вечер хочется просто побыть к тебе поближе."
        }
      ],
      "next": "c8.supper.danceChoice"
    },
    "c8.supper.danceChoice": {
      "id": "c8.supper.danceChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "prompt": "Как тебе хочется продолжить вечер?",
      "choices": [
        {
          "id": "follow",
          "text": "Шагнуть в его объятия: “Веди”",
          "next": "c8.supper.follow",
          "effects": [
            {
              "kind": "set",
              "key": "c8Step",
              "value": "follow"
            }
          ]
        },
        {
          "id": "lead",
          "text": "Положить руки ему на плечи: “Вести буду я”",
          "next": "c8.supper.lead",
          "effects": [
            {
              "kind": "set",
              "key": "c8Step",
              "value": "lead"
            }
          ]
        },
        {
          "id": "play",
          "text": "Улыбнуться и начать с игривого шага",
          "next": "c8.supper.play",
          "effects": [
            {
              "kind": "set",
              "key": "c8Step",
              "value": "play"
            }
          ]
        },
        {
          "id": "sit",
          "text": "Я останусь за столом. Посиди со мной",
          "next": "c8.supper.sit",
          "effects": [
            {
              "kind": "set",
              "key": "c8Step",
              "value": "sit"
            }
          ]
        }
      ]
    },
    "c8.supper.follow": {
      "id": "c8.supper.follow",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Иди сюда. Веди."
        },
        {
          "speaker": "narrator",
          "text": "Ты вкладываешь ладонь в его руку и шагаешь ближе. Вторая рука Влада мягко ложится тебе на талию."
        },
        {
          "speaker": "vlad",
          "text": "здесь совсем мало места… так что шаги будут самыми медленными.",
          "delivery": "тихо"
        },
        {
          "speaker": "heroine",
          "text": "Мне большего места и не нужно."
        },
        {
          "speaker": "narrator",
          "text": "Вы почти не двигаетесь по маленькой кухне — просто медленно покачиваетесь под лампой. Сквозь тонкую футболку чувствуется, как часто бьётся его сердце."
        },
        {
          "speaker": "vlad",
          "text": "вот так… я бы простоял с тобой хоть до утра."
        },
        {
          "speaker": "narrator",
          "text": "Шаги сами собой замирают. Ты поднимаешь голову; Влад смотрит на тебя сверху вниз, не отрываясь, и тихо спрашивает:"
        },
        {
          "speaker": "vlad",
          "text": "можно я тебя поцелую?"
        }
      ],
      "next": "c8.supper.reply"
    },
    "c8.supper.lead": {
      "id": "c8.supper.lead",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Пойдём. Но сегодня вести буду я."
        },
        {
          "speaker": "narrator",
          "text": "Ты сама шагаешь к нему и кладёшь руки ему на плечи, уводя на свободный пятачок у окна. Ладони Влада ложатся тебе на талию."
        },
        {
          "speaker": "vlad",
          "text": "я полностью в твоей власти. куда поворачиваем?"
        },
        {
          "speaker": "heroine",
          "text": "Не смотри под ноги. Смотри только на меня."
        },
        {
          "speaker": "narrator",
          "text": "Он поднимает глаза — и от того, насколько вы близко, ваш медленный шаг сам собой затихает на одном месте."
        },
        {
          "speaker": "vlad",
          "text": "когда я смотрю на тебя с такого расстояния, я вообще забываю, как двигаться.",
          "delivery": "тихо"
        },
        {
          "speaker": "narrator",
          "text": "Он замирает на расстоянии одного вдоха, давая тебе самой решить, каким будет следующий шаг."
        }
      ],
      "next": "c8.supper.initiative"
    },
    "c8.supper.play": {
      "id": "c8.supper.play",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.laugh"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Потанцуем. Только начнём с твоего фирменного шага вокруг кухонного стула."
        },
        {
          "speaker": "vlad",
          "text": "демонстрирую высший пилотаж танцев на пяти квадратных метрах."
        },
        {
          "speaker": "narrator",
          "text": "Он галантно подаёт тебе руку, и первые несколько секунд вы с тихим смехом кружитесь на маленьком свободном пятачке у окна."
        },
        {
          "speaker": "narrator",
          "text": "Но когда на повороте ты оказываешься совсем близко к нему, смех вдруг сам собой стихает."
        },
        {
          "speaker": "heroine",
          "text": "А дальше — уже без шуток.",
          "delivery": "тихо"
        },
        {
          "speaker": "narrator",
          "text": "Влад перестаёт усмехаться; его рука на твоей спине становится чуть увереннее, и вы замираете в тишине на расстоянии одного вдоха."
        }
      ],
      "next": "c8.supper.initiative"
    },
    "c8.supper.sit": {
      "id": "c8.supper.sit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Посиди со мной ещё немного здесь, у лампы. Мне так уютно за твоим столом."
        },
        {
          "speaker": "vlad",
          "text": "с радостью. мне главное — просто быть рядом с тобой."
        },
        {
          "speaker": "narrator",
          "text": "Вместо того чтобы сесть обратно напротив, Влад придвигает свой стул сбоку к твоему."
        },
        {
          "speaker": "narrator",
          "text": "Он складывает оставшиеся порции в контейнер на завтра, а потом оборачивается к тебе и тихо накрывает твою ладонь своей на краю стола."
        },
        {
          "speaker": "heroine",
          "text": "Теперь завтра в обед у тебя тоже будет наш ужин."
        },
        {
          "speaker": "vlad",
          "text": "я бы предпочёл, чтобы и завтра за этим столом сидела ты."
        },
        {
          "speaker": "narrator",
          "text": "В тишине кухни он чуть подаётся ближе, не отпуская твоей руки и глядя прямо в глаза."
        }
      ],
      "next": "c8.supper.initiative"
    },
    "c8.supper.reply": {
      "id": "c8.supper.reply",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "prompt": "Что ответишь?",
      "choices": [
        {
          "id": "kissYes",
          "text": "Не отводить взгляд и потянуться к его губам",
          "next": "c8.supper.kissYes"
        },
        {
          "id": "danceOn",
          "text": "Прижаться щекой к его плечу и просто постоять так",
          "next": "c8.supper.danceOn"
        }
      ]
    },
    "c8.supper.kissYes": {
      "id": "c8.supper.kissYes",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Да…"
        },
        {
          "speaker": "narrator",
          "text": "Кухня вокруг будто отступает. Ты поднимаешь лицо, и Влад медленно наклоняется навстречу, на долю секунды замирая у твоих губ — словно вспоминая вчерашний вечер у галереи.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "cheek"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Вместо лишних слов ты сама сокращаешь последний сантиметр между вами, чувствуя, как его пальцы на твоей спине чуть вздрагивают.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "words"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Его губы касаются твоих сначала осторожно и почти невесомо, будто он проверяет, не спугнёт ли этот момент, а когда ты отвечаешь, Влад тихо выдыхает и притягивает тебя ближе — поцелуй становится глубже и спокойнее, таким настоящим, что забываешь обо всём вокруг.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "yes"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Когда вы наконец медленно отстраняетесь, он не разжимает объятий, на секунду прислоняясь лбом к твоему."
        },
        {
          "speaker": "vlad",
          "text": "я давно об этом думал… даже не представляешь, как сильно.",
          "delivery": "тихо, чуть сбившись с дыхания"
        },
        {
          "speaker": "heroine",
          "text": "И я."
        },
        {
          "speaker": "narrator",
          "text": "Он ещё раз коротко касается губами уголка твоих губ, прежде чем вы отступаете друг от друга."
        }
      ],
      "next": "c8.supper.air"
    },
    "c8.supper.danceOn": {
      "id": "c8.supper.danceOn",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай сейчас просто постоим вот так. Мне хорошо у тебя на плече."
        },
        {
          "speaker": "vlad",
          "text": "иди ко мне."
        },
        {
          "speaker": "narrator",
          "text": "Ты опускаешь голову ему на плечо, и Влад спокойно смыкает руки у тебя на спине. Вы ещё немного покачиваетесь в тишине кухни, никуда не спеша.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ]
        }
      ],
      "next": "c8.supper.air"
    },
    "c8.supper.initiative": {
      "id": "c8.supper.initiative",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "prompt": "Твой следующий шаг",
      "choices": [
        {
          "id": "kiss",
          "text": "Притянуть его ближе и поцеловать",
          "next": "c8.supper.kissHer"
        },
        {
          "id": "leadQuiet",
          "text": "Прижаться к его плечу, завершая танец",
          "next": "c8.supper.quiet",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "id": "playQuiet",
          "text": "Уткнуться ему в плечо и обнять",
          "next": "c8.supper.quiet",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "id": "sitQuiet",
          "text": "Положить голову ему на плечо у стола",
          "next": "c8.supper.quiet",
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ]
        }
      ]
    },
    "c8.supper.kissHer": {
      "id": "c8.supper.kissHer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты чуть приподнимаешься со стула и кладёшь ладонь на его щеку; Влад тут же придвигается навстречу.",
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Остановившись посреди кухни, ты не убираешь рук с его шеи, а мягко тянешь его к себе.",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Смех стихает в тишине кухни; ты кладёшь ладони ему на грудь и поднимаешь лицо.",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Влад… поцелуй меня.",
          "delivery": "тихо"
        },
        {
          "speaker": "vlad",
          "text": "иди ко мне."
        },
        {
          "speaker": "narrator",
          "text": "Ты тянешься к нему, и его губы встречают твои в долгом, по-настоящему искреннем первом поцелуе. Влад крепко обнимает тебя за спину, вторая рука скользит к твоему затылку — в этой близости нет ни капли спешки, только живое тепло.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "yes"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "мне так давно этого хотелось… я сегодня весь вечер еле держался.",
          "delivery": "тихо, совсем рядом"
        },
        {
          "speaker": "heroine",
          "text": "Мне тоже хотелось."
        },
        {
          "speaker": "narrator",
          "text": "Вы ещё пару секунд стоите, не разжимая рук и переводя дыхание, прежде чем медленно отстраниться."
        }
      ],
      "next": "c8.supper.air"
    },
    "c8.supper.quiet": {
      "id": "c8.supper.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты замедляешь шаг и прижимаешься щекой к его плечу; Влад спокойно обнимает тебя за спину.",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Вот так… самая лучшая точка в танце.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ],
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты обнимаешь его, и Влад сжимает тебя в ответ, коротко касаясь губами твоей макушки.",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "самый уютный танец в моей жизни.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ],
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты кладёшь голову ему на плечо, и Влад спокойно приобнимает тебя одной рукой, не выпуская твоих пальцев.",
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Как же у тебя дома спокойно.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ],
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ]
        }
      ],
      "next": "c8.supper.air"
    },
    "c8.supper.air": {
      "id": "c8.supper.air",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад приоткрывает створку окна, чтобы впустить на разогретую кухню свежий ночной воздух. С улицы сразу тянет прохладой."
        },
        {
          "speaker": "narrator",
          "text": "Заметив, как ты чуть поёжилась, он берёт со спинки стула своё мягкое объёмное худи:"
        },
        {
          "speaker": "vlad",
          "text": "накинь моё худи, а то продрогнешь у окна. а если хочешь — можешь прямо в нём сегодня поехать домой."
        }
      ],
      "next": "c8.supper.hoodieChoice"
    },
    "c8.supper.hoodieChoice": {
      "id": "c8.supper.hoodieChoice",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "prompt": "Возьмёшь худи?",
      "choices": [
        {
          "id": "wear",
          "text": "Надену сейчас, пока мы здесь",
          "next": "c8.supper.wear"
        },
        {
          "id": "borrow",
          "text": "Надену и поеду в нём домой",
          "next": "c8.supper.borrow"
        },
        {
          "id": "pass",
          "text": "Спасибо, мне рядом с тобой и так тепло",
          "next": "c8.supper.pass"
        }
      ]
    },
    "c8.supper.wear": {
      "id": "c8.supper.wear",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты надеваешь худи — мягкая ткань сразу укрывает тебя с запасом и едва уловимо пахнет тем самым свежим парфюмом и домом.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Hoodie",
              "value": "evening"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Первый длинный рукав ты подворачиваешь сама, а за второй берётся Влад: аккуратно закатывает манжету на твоём запястье и на секунду задерживает твою руку в своей."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь по размеру. знаешь… тебе в моих вещах идёт даже слишком сильно."
        },
        {
          "speaker": "heroine",
          "text": "Погреюсь в нём до выхода, а у двери верну."
        }
      ],
      "next": "c8.supper.courtyard"
    },
    "c8.supper.borrow": {
      "id": "c8.supper.borrow",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "С удовольствием надену и прямо в нём поеду домой — на улице уже прохладно."
        },
        {
          "speaker": "narrator",
          "text": "Ты надеваешь его объёмное худи поверх своей одежды — мягкая ткань сразу укрывает тебя и едва уловимо пахнет тем самым его парфюмом. Первый рукав подворачиваешь сама, а второй аккуратно закатывает Влад.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Hoodie",
              "value": "borrowed"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "тебе невероятно идёт. в кармане там, кажется, ничего лишнего нет — оставляй у себя до нашей следующей встречи."
        }
      ],
      "next": "c8.supper.courtyard"
    },
    "c8.supper.pass": {
      "id": "c8.supper.pass",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Спасибо, мне рядом с тобой и так совсем не холодно."
        },
        {
          "speaker": "vlad",
          "text": "тогда я просто прикрою окно.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Hoodie",
              "value": "none"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад закрывает створку и возвращается к столу, пока ты достаёшь из сумки телефон."
        }
      ],
      "next": "c8.supper.courtyard"
    },
    "c8.supper.courtyard": {
      "id": "c8.supper.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Слушай, Влад… в этот раз моя очередь звать тебя на свидание. Я нашла закрытый вечерний кинодворик — там крутят старое кино под открытым небом, в гирляндах."
        },
        {
          "speaker": "narrator",
          "text": "Ты открываешь на экране афишу сеанса: на рисунке старый раскрытый чемодан, а поверх вещей с невозмутимым видом сидит пушистый кот."
        },
        {
          "speaker": "vlad",
          "text": "судя по лицу этого кота, без него никто никуда не уедет."
        },
        {
          "speaker": "heroine",
          "text": "Вот и проверим. Пойдёшь со мной в этот дворик?"
        },
        {
          "speaker": "vlad",
          "text": "с тобой — куда угодно, а в кинодворик тем более. скинь время, я буду ждать у арки."
        },
        {
          "speaker": "narrator",
          "text": "Вы сверяете вечер показа, ты убираешь телефон и берёшь сумку с вашим фотоаппаратом."
        },
        {
          "speaker": "narrator",
          "text": "В прихожей ты снимаешь худи и отдаёшь Владу; он прижимает ткань к груди и усмехается: «теперь оно пахнет тобой».",
          "when": [
            {
              "key": "c8Hoodie",
              "equals": "evening"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты надеваешь пальто прямо поверх его худи — уходить в ночной город в нём удивительно уютно.",
          "when": [
            {
              "key": "c8Hoodie",
              "equals": "borrowed"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Вы выходите в полутёмную прихожую к двери.",
          "when": [
            {
              "key": "c8Hoodie",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Тогда до встречи в кинодворике, Влад."
        },
        {
          "speaker": "vlad",
          "text": "до кино. и помни: твоя половина моей кухни всегда тебя ждёт."
        },
        {
          "speaker": "narrator",
          "text": "У порога Влад придерживает дверь, провожая тебя взглядом.",
          "variants": [
            {
              "when": [
                {
                  "key": "c8LipKiss",
                  "equals": "yes"
                }
              ],
              "text": "На пороге в полумраке прихожей Влад ещё раз притягивает тебя к себе и коротко, нежно целует на прощание, прежде чем открыть дверь."
            }
          ]
        }
      ],
      "next": "c8.supper.end"
    },
    "c8.supper.end": {
      "id": "c8.supper.end",
      "kind": "end",
      "endingId": "c8.supper",
      "cardId": "c8.supper"
    }
  }
};
