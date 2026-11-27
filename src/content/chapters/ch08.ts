// Scenario reference: outputs/CHAPTER_08_SCRIPT.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter8:Chapter = {
  "id": 8,
  "contentVersion": CONTENT_VERSION,
  "scriptRevision": 8,
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
          "text": "Влад открывает дверь уже в тёмном кухонном фартуке. Поперёк кармана тянется белый след от муки, из колонки тихо играет спокойный lo-fi — как в уютной кофейне, — а с кухни пахнет печёным перцем и обжаренными грибами.",
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
          "emotion": "laugh",
          "text": "Смотрю, вопрос с единственным фартуком решён ещё до моего прихода."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
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
          "text": "Ты оставляешь сумку с фотоаппаратом у стены и моешь руки; Влад подаёт чистое сухое полотенце.",
          "variants": [
            {
              "when": [
                {
                  "key": "c7GalleryFarewell",
                  "equals": "cheek"
                }
              ],
              "text": "Ты оставляешь сумку с фотоаппаратом у стены и моешь руки; Влад подаёт чистое сухое полотенце и на секунду задерживает взгляд чуть теплее обычного — будто вчерашний перекрёсток у галереи всё ещё с вами."
            }
          ]
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
          "text": "На краю стола у сложенных салфеток стоит керамическая вазочка с ветками осенних сухоцветов, а посередине ждёт деревянная подставка под горячее.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "О, сухоцветы на кухне! Неожиданно.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "схватил по дороге в лавке у метро — показалось, без них стол совсем уж пустой.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Рядом, у края стола, стоит небольшая керамическая вазочка с осенними сухоцветами — Влад улыбается: купил по дороге, чтобы стол не выглядел пустым.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Рядом, у края стола, стоит небольшая керамическая вазочка с осенними сухоцветами — Влад улыбается: купил по дороге, чтобы стол не выглядел пустым.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "план на вечер такой: завернуть большую лепёшку с начинкой, подрумянить до хруста и разделить на двоих.",
          "variants": [
            {
              "when": [
                {
                  "key": "teamName",
                  "equals": "dumpling"
                }
              ],
              "text": "план на вечер такой: команда «Пельмень и партнёры» официально выходит из телевизора на настоящую кухню. завернём большую лепёшку с начинкой и подрумяним до хруста."
            },
            {
              "when": [
                {
                  "key": "teamName",
                  "equals": "calm"
                }
              ],
              "text": "план на вечер такой: бригада «Два спокойных человека» переходит от виртуальных бутербродов к настоящей плите. соберём большую хрустящую лепёшку на двоих."
            },
            {
              "when": [
                {
                  "key": "teamName",
                  "equals": "accident"
                }
              ],
              "text": "план на вечер такой: наш «Отдел случайных побед» открывает филиал на настоящей кухне. завернём большую лепёшку с начинкой и обжарим до корочки."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Звучит отлично! И начинку собираем в четыре руки."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "ради этого и звал. одному у этой доски стоять совсем не так интересно."
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
          "text": "Влад закатывает рукава футболки до середины предплечий и выставляет к широкой доске красный перец в масле, обжаренные грибы, сыр и пучок свежей зелени — движения у него точные и неторопливые."
        },
        {
          "speaker": "narrator",
          "text": "Когда он поворачивается к свету лампы, ты замечаешь у него на скуле небольшой белый мазок муки."
        },
        {
          "speaker": "heroine",
          "delivery": "с усмешкой",
          "text": "Подожди, шеф-повар. Замри на секунду."
        },
        {
          "speaker": "narrator",
          "emotion": "surprised",
          "text": "Ты шагаешь ближе и большим пальцем стираешь муку с его скулы. Влад усмехается с тёркой в руках, не отступая:",
          "variants": [
            {
              "when": [
                {
                  "key": "c7GalleryFarewell",
                  "equals": "cheek"
                }
              ],
              "text": "Ты шагаешь ближе и стираешь муку с его скулы — почти в том самом месте, где вчера коснулась его губами. Влад замирает с тёркой в руках и тепло улыбается:"
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Ты с улыбкой показываешь на свою скулу, подсказывая, где след; Влад стирает муку тыльной стороной ладони и только чуть размазывает её:"
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "так, ну всё — официально снимаю себя с конкурса на самого аккуратного шефа."
        },
        {
          "speaker": "heroine",
          "text": "Тогда ужин рискует переехать на завтрак. Кто отвечает за сыр?"
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "тёрку беру на себя, и тут у меня железный принцип — сыра жалеть нельзя. выбирай основу начинки."
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
          "text": "ой, перец без грибов — это почти салат. ладно, спасу положение двойной порцией сыра."
        },
        {
          "speaker": "narrator",
          "text": "Вы работаете у одной узкой столешницы: ты режешь перец тонкими полосками, Влад рядом натирает сыр."
        },
        {
          "speaker": "heroine",
          "emotion": "laugh",
          "text": "Кажется, сыра у тебя там уже на два ресторана."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "сыра много не бывает. вот расплавится — сама признаешь, что я был прав."
        },
        {
          "speaker": "narrator",
          "text": "Ты протягиваешь ему полоску сладкого перца на пробу; Влад пробует с видом строгого дегустатора и нехотя кивает: ладно, вкусно."
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
          "text": "эй, руки прочь от лучших кусков до сковороды! ладно, один на пробу — проверь шефа."
        },
        {
          "speaker": "narrator",
          "emotion": "smile",
          "text": "Он подносит к тебе поджаристый ломтик на кончике вилки, придерживая ладонью снизу, чтобы не капнуло; ты пробуешь — вкус насыщенный, и Влад с довольной усмешкой ждёт вердикта."
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
          "text": "спорим, мы сейчас жадно намешаем столько, что лепёшка просто не закроется?"
        },
        {
          "speaker": "narrator",
          "text": "Вы работаете плечом к плечу у одной доски: яркий перец, тёплые грибы и щедрая горка сыра собираются в общую миску."
        },
        {
          "speaker": "heroine",
          "emotion": "laugh",
          "text": "Не каркай, всё поместится."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "ладно, если развалится — официально записываю это на твою половину кухни."
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
          "text": "я полчаса жарил грибы, а она выбирает «просто сыр и зелень»! ладно, твоя половина кухни — твои правила."
        },
        {
          "speaker": "narrator",
          "text": "Ты рвёшь свежие листочки зелени, пока Влад натирает сыр прямо рядом с твоим плечом."
        },
        {
          "speaker": "heroine",
          "text": "Ты специально встал так близко, чтобы контролировать каждую веточку?"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "слежу, чтобы ты не сэкономила на зелени. ну и стоять рядом с тобой правда приятнее, чем тереть сыр в одиночку."
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
          "emotion": "surprised",
          "text": "Ты придерживаешь край доски, Влад разворачивает тонкий лист лепёшки — и сухой сгиб посередине расходится прямо в руках на две половины."
        },
        {
          "speaker": "narrator",
          "emotion": "laugh",
          "text": "Вы со смехом пытаетесь сложить края внахлёст, но шов снова раскрывается: один большой рулет на сковороде точно распадётся."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "ну вот. мой грандиозный план рухнул на глазах. зато теперь у каждого буквально своя половина кухни."
        },
        {
          "speaker": "heroine",
          "emotion": "thinking",
          "text": "Не спеши сдаваться. Разделим каждую половину ещё пополам — получится ровно четыре порции, по две на каждого. Так выйдет даже вкуснее."
        },
        {
          "speaker": "angel",
          "text": "Из четырёх аккуратных конвертиков на сковороде всё равно получится отличный горячий ужин."
        },
        {
          "speaker": "devil",
          "text": "Он наверняка планировал аккуратный рулет по учебнику! Предложи запечь открытыми с сырной корочкой — пусть выкручивается на ходу!"
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
        "character": "vlad.apron.thinking"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сложим четыре маленьких конвертика и обжарим до хруста. Поверни сковороду ручкой ко мне."
        },
        {
          "speaker": "narrator",
          "text": "Влад сдвигается чуть в сторону, поворачивает ручку сковороды к тебе и остаётся стоять совсем рядом — у маленькой плиты ваши плечи почти соприкасаются."
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
          "emotion": "smile",
          "text": "Не трогай его — там сейчас зажарится самое вкусное сырное ушко."
        },
        {
          "speaker": "narrator",
          "emotion": "surprised",
          "text": "Влад наклоняется ближе, заглядывая в сковороду через твоё плечо; на маленькой кухне его ладонь на секунду легко придерживает тебя за талию, пока он тянется свободной рукой за лопаткой.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Влад наклоняется ближе, заглядывая в сковороду через твоё плечо, и аккуратно тянется за лопаткой с края столешницы."
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "delivery": "вполголоса, с полуулыбкой",
          "text": "вообще-то я мог обойти стол с другой стороны. но рядом с тобой следить за сковородкой куда интереснее."
        },
        {
          "speaker": "narrator",
          "emotion": "smile",
          "text": "Расплавленный сыр у края схватывается золотистой корочкой, и по кухне расходится тёплый, пряный запах жареного теста. Влад аккуратно перекладывает все четыре румяных конвертика со сковороды на общее блюдо."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
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
        "character": "vlad.apron.thinking"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Разложим все четыре кусочка на противне открытыми — пусть сыр сверху запечётся золотистой шапкой."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "гениально. тогда каждый уголок будет хрустеть. сейчас разогрею духовку."
        },
        {
          "speaker": "narrator",
          "text": "Влад достаёт противень, проходя совсем близко за твоей спиной в узком проходе между столом и плитой — его ладонь на секунду легко касается твоего локтя, — и расстилает пергамент.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Влад достаёт противень, аккуратно проходит мимо узкого края стола и расстилает пергамент."
            }
          ]
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
          "emotion": "smile",
          "text": "Смотри, у этой порции сыр лёг прямо до самого уголка — запечётся до хруста."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "отлично. вот этот румяный край и будет нашим главным дегустационным укусом на двоих."
        },
        {
          "speaker": "narrator",
          "emotion": "warm",
          "text": "Пока сыр плавится в духовке, вы стоите рядом, прислонившись к столешнице. Жар от печки согревает маленькую кухню; Влад смотрит уже не на таймер, а прямо на тебя."
        },
        {
          "speaker": "heroine",
          "delivery": "тихо",
          "text": "Шеф, если совсем не смотреть на духовку, мы пропустим золотистую корочку."
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "text": "за корочку я спокоен, у меня все минуты посчитаны — я вообще не люблю суетиться у плиты. просто рядом с тобой даже ждать таймер приятно."
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
          "emotion": "thinking",
          "text": "осторожно, серединка ещё горячая."
        },
        {
          "speaker": "narrator",
          "text": "Первую порцию вы съедаете почти без пауз — тесто хрустит, расплавленный сыр тянется, и на маленькой кухне становится совсем по-домашнему."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "слушай… а хорошо, что лепёшка порвалась. в четырёх порциях хрустящих краёв оказалось в два раза больше."
        },
        {
          "speaker": "narrator",
          "emotion": "laugh",
          "text": "Ужин оказывается неожиданно вкусным — вы смеётесь, обсуждаете, какой кусок удался лучше, и незаметно съедаете половину. На общем блюде остаются две порции: одна целая и одна, которую вы только что разломили на двоих."
        },
        {
          "speaker": "narrator",
          "emotion": "thinking",
          "text": "Когда первый азарт стихает, на кухне наступает тёплая, тихая пауза — слышно только негромкий lo-fi из колонки и как остывает чайник. Влад смотрит на тебя через маленький стол уже без обычной шутки, удивительно серьёзно."
        },
        {
          "speaker": "heroine",
          "emotion": "thinking",
          "text": "Ты часто ужинаешь вот так, за этим столом?",
          "delivery": "тихо"
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "один — почти никогда. обычно перехватываю что-нибудь на ходу, включаю такую вот спокойную музыку как в кофейне и возвращаюсь к делам."
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "я раньше думал, что дома хорошо, когда просто тихо и никто не трогает. а сейчас смотрю на тебя и понимаю… мне просто не хватало здесь тебя."
        },
        {
          "speaker": "narrator",
          "emotion": "warm",
          "text": "Влад развязывает фартук, вешает его на спинку стула и задерживает на тебе тёплый, прямой взгляд."
        },
        {
          "speaker": "heroine",
          "text": "Мне тоже у тебя очень хорошо, Влад. На нашей половине кухни. И музыка эта прямо в настроение."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "она за тобой закреплена бессрочно — в любой вечер, когда захочешь прийти."
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
          "text": "Воздух за столом всё ещё держит это тихое тепло. На деревянной доске белеет мучной след, на блюде лежат оставшиеся две порции вашего ужина. Ты достаёшь из сумки плёночный аппарат — на счётчике «6»."
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
        "character": "vlad.casual.awkward"
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
          "text": "Ты передаёшь камеру Владу и придерживаешь край керамического блюда. Он ловит в видоискатель две румяные порции и твои ладони в тёплом свете абажура."
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
        "character": "vlad.casual.awkward"
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
          "text": "Влад принимает у тебя аппарат и склоняется над столешницей, выстраивая в рамке деревянную доску, ложку и белую мучную запятую у края."
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
          "emotion": "laugh",
          "text": "Пока Влад наливает по стаканам яблочный сидр, ты успеваешь поймать ещё один кадр — его самого у плиты, смеющегося с полотенцем через плечо. А потом, когда вы снова сидите под низким светом лампы и ты, подперев щёку ладонью с пылинкой муки на пальцах, ловишь его взгляд, Влад негромко поднимает аппарат и с коротким щелчком снимает тебя через стол — совсем близко."
        },
        {
          "speaker": "narrator",
          "text": "Поверх объектива он смотрит уже совсем без шутки. На счётчике остаётся «3»; ты кладёшь камеру на край стола, а Влад ставит перед вами стаканы и убирает лишние тарелки, освобождая пространство.",
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
        "character": "vlad.casual.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ужин давно закончен. Ты встаёшь из-за стола и делаешь пару шагов к тёмному окну, за которым глухо шумит вечерний город."
        },
        {
          "speaker": "narrator",
          "text": "На кухне горит только тёплая лампа над столом; её свет мягко ложится на пол и на твои плечи, а с полки тихо тянется неспешный кофейный lo-fi."
        },
        {
          "speaker": "narrator",
          "text": "Влад поднимается следом и останавливается прямо перед тобой — теперь между вами нет ни стола, ни тарелок. Он делает полшага ближе и открыто подаёт ладонь; голос звучит негромко и глубоко:",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Влад поднимается следом и останавливается в шаге от тебя — без спешки, с мягкой улыбкой:"
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "text": "не спеши собираться. потанцуешь со мной под эту музыку? мне весь вечер хотелось просто обнять тебя поближе.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "не спеши собираться. хочешь, потанцуем немного под эту музыку? или можем просто посидеть ещё у стола — как тебе спокойнее."
            }
          ]
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
        "character": "vlad.casual.warm",
        "variants": [
          {
            "when": [],
            "fromLine": 6,
            "background": "bg.supper8.kitchen",
            "character": "vlad.closeup.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Иди сюда. Веди."
        },
        {
          "speaker": "narrator",
          "text": "Ты вкладываешь ладонь в его руку и шагаешь вплотную. Вторая ладонь Влада мягко, но уверенно ложится тебе на талию, и он притягивает тебя чуть ближе."
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
          "text": "Вы почти не двигаетесь по маленькой кухне — просто медленно покачиваетесь под тёплой лампой. Сквозь тонкую футболку чувствуется, как часто и неровно бьётся его сердце, а рядом с шеей пахнет тем самым знакомым парфюмом."
        },
        {
          "speaker": "vlad",
          "text": "вот так… я бы простоял с тобой хоть до утра."
        },
        {
          "speaker": "narrator",
          "text": "Шаги сами собой замирают. Его ладонь на твоей спине притягивает тебя чуть плотнее, а вторая рука мягко ложится на твою щёку — давая секунду передумать или сделать последний шаг навстречу."
        },
        {
          "speaker": "narrator",
          "text": "Ты поднимаешь голову; Влад смотрит на твои губы, затем прямо в глаза и спрашивает почти шёпотом:"
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "delivery": "почти шёпотом",
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
        "character": "vlad.casual.warm",
        "variants": [
          {
            "when": [],
            "fromLine": 4,
            "background": "bg.supper8.kitchen",
            "character": "vlad.closeup.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Пойдём. Но сегодня вести буду я."
        },
        {
          "speaker": "narrator",
          "text": "Ты сама шагаешь к нему и кладёшь руки ему на плечи, уводя на свободный пятачок у окна. Ладони Влада ложатся тебе на талию, чуть задерживаясь на изгибе спины."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "я полностью в твоей власти. куда поворачиваем?"
        },
        {
          "speaker": "heroine",
          "text": "Не смотри под ноги. Смотри только на меня."
        },
        {
          "speaker": "narrator",
          "text": "Он поднимает глаза — и от того, насколько вы близко, медленный шаг затихает на одном месте. Ты чувствуешь его горячее дыхание у своей щеки."
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "delivery": "тихо",
          "text": "когда ты смотришь вот так в упор, все мои мысли разлетаются в одну секунду."
        },
        {
          "speaker": "narrator",
          "text": "Твои ладони скользят выше, к его затылку и мягким кудрям; Влад глухо выдыхает и замирает в одном вдохе от тебя, доверяя тебе решающий шаг."
        }
      ],
      "next": "c8.supper.initiative"
    },
    "c8.supper.play": {
      "id": "c8.supper.play",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.laugh",
        "variants": [
          {
            "when": [],
            "fromLine": 4,
            "background": "bg.supper8.kitchen",
            "character": "vlad.closeup.warm"
          }
        ]
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
          "emotion": "warm",
          "text": "На повороте ты чуть задеваешь край стула, и Влад инстинктивно притягивает тебя ближе, перехватывая обеими руками за талию, чтобы удержать. Расстояние между вами исчезает в одну секунду."
        },
        {
          "speaker": "narrator",
          "emotion": "warm",
          "text": "Смех застревает на полуслове и сам собой тает — слышно только, как вы оба переводите дыхание."
        },
        {
          "speaker": "heroine",
          "emotion": "warm",
          "text": "А дальше — уже без шуток.",
          "delivery": "тихо"
        },
        {
          "speaker": "narrator",
          "emotion": "warm",
          "text": "Усмешка сходит с его лица; ладонь на твоей спине становится теплее и увереннее, и вы замираете в полумраке на расстоянии одного вдоха."
        }
      ],
      "next": "c8.supper.initiative"
    },
    "c8.supper.sit": {
      "id": "c8.supper.sit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile",
        "variants": [
          {
            "when": [],
            "fromLine": 3,
            "background": "bg.supper8.kitchen",
            "character": "vlad.casual.warm"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Посиди со мной ещё немного здесь, у лампы. Мне так хорошо за твоим столом."
        },
        {
          "speaker": "vlad",
          "text": "с радостью. мне главное — просто быть рядом с тобой."
        },
        {
          "speaker": "narrator",
          "text": "Вместо того чтобы сесть обратно напротив, Влад придвигает свой стул совсем близко сбоку к твоему — так, что ваши колени почти соприкасаются под столом.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Вместо того чтобы сесть обратно напротив, Влад придвигает свой стул чуть ближе, сбоку от твоего, оставляя между вами удобное, спокойное пространство."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "На кухне наступает мягкая ночная тишина. Он поворачивается к тебе, осторожно накрывает твою ладонь своей и большим пальцем едва заметно проводит по костяшкам.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "На кухне наступает мягкая ночная тишина. Он кладёт ладонь на стол рядом с твоей и осторожно, словно спрашивая разрешения, касается кончиков твоих пальцев."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Кажется, я сегодня совсем не хочу, чтобы этот вечер заканчивался.",
          "delivery": "тихо"
        },
        {
          "speaker": "vlad",
          "text": "тогда не торопись. я бы вообще оставил нас в этом вечере подольше."
        },
        {
          "speaker": "narrator",
          "text": "Он чуть подаётся ближе, не торопя тебя — в этой тишине весь следующий шаг остаётся за тобой.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Он смотрит на тебя спокойно и тепло, не торопя и не навязывая шаг — в этой тишине ты сама решаешь, насколько близко хочется быть."
            }
          ]
        }
      ],
      "next": "c8.supper.sitRoute"
    },
    "c8.supper.sitRoute": {
      "id": "c8.supper.sitRoute",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Gesture",
              "equals": "none"
            },
            {
              "key": "c7GalleryFarewell",
              "equals": "words"
            }
          ],
          "next": "c8.supper.sitGentle"
        }
      ],
      "fallback": "c8.supper.initiative"
    },
    "c8.supper.sitGentle": {
      "id": "c8.supper.sitGentle",
      "kind": "choice",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "prompt": "Твой следующий шаг",
      "choices": [
        {
          "id": "sitCheek",
          "text": "Чуть податься ближе и мягко поцеловать его в щёку",
          "next": "c8.supper.sitCheek"
        },
        {
          "id": "sitQuiet",
          "text": "Положить голову ему на плечо у стола",
          "next": "c8.supper.quiet"
        },
        {
          "id": "sitHand",
          "text": "Просто вложить ладонь в его руку и посидеть рядом",
          "next": "c8.supper.sitHand"
        }
      ]
    },
    "c8.supper.sitCheek": {
      "id": "c8.supper.sitCheek",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты чуть наклоняешься к нему, на секунду касаешься его ладони на столе и мягко целуешь его в щёку — совсем легко, без спешки."
        },
        {
          "speaker": "narrator",
          "emotion": "surprised",
          "text": "Влад замирает на мгновение, чуть растерянный и явно тронутый, а потом тихо выдыхает и улыбается мягче прежнего."
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "delivery": "тихо",
          "text": "знаешь… кажется, сейчас я впервые за весь вечер правда забыл, что хотел сказать."
        },
        {
          "speaker": "heroine",
          "emotion": "smile",
          "text": "Ничего не говори. Мне просто захотелось поблагодарить тебя за этот вечер.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Он осторожно сжимает твои пальцы в ответ — без попытки ускорить момент, просто удерживая это тепло рядом."
        }
      ],
      "next": "c8.supper.air"
    },
    "c8.supper.sitHand": {
      "id": "c8.supper.sitHand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.supper8.kitchen",
        "character": "vlad.casual.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты поворачиваешь ладонь и спокойно вкладываешь её в его руку. Его пальцы смыкаются вокруг твоих мягко и бережно, не сжимая лишнего."
        },
        {
          "speaker": "heroine",
          "delivery": "тихо",
          "text": "Мне с тобой очень спокойно, Влад. Не хочу никуда торопиться."
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "text": "и не надо. у нас впереди ещё сколько угодно таких вечеров.",
          "effects": [
            {
              "kind": "set",
              "key": "c8LipKiss",
              "value": "no"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Вы ещё пару минут сидите плечом к плечу под тёплой лампой, слушая тихую музыку и никуда не спеша."
        }
      ],
      "next": "c8.supper.air"
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
        "character": "vlad.closeup.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Да…",
          "delivery": "почти шёпотом"
        },
        {
          "speaker": "narrator",
          "text": "Кухня вокруг будто отступает. Ты поднимаешь лицо, и Влад медленно наклоняется навстречу, на долю секунды замирая у самого уголка твоих губ — словно вспоминая вчерашний вечер у галереи и наконец доходя до конца.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "cheek"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Кухня вокруг будто отступает. Влад не торопится — на мгновение замирает в сантиметре от твоих губ, давая сердцу успеть за этим моментом, и ты сама едва заметно тянешься ему навстречу.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "words"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Его губы касаются твоих сначала осторожно, почти невесомо — как тихий вопрос. Но стоит тебе ответить и чуть сжать пальцами ткань его футболки, как Влад глухо выдыхает и притягивает тебя вплотную: поцелуй становится глубже, горячее и по-настоящему твоим — таким, от которого перехватывает дыхание и весь мир за стенами просто перестаёт существовать.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Его губы касаются твоих совсем осторожно, почти невесомо — словно он всё ещё проверяет, комфортно ли тебе. Когда ты тихо отвечаешь и кладёшь ладонь ему на плечо, поцелуй становится теплее и увереннее, но остаётся удивительно бережным — таким, от которого внутри не тревожно, а спокойно и горячо."
            }
          ],
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
          "text": "Когда вы медленно отстраняетесь, он не выпускает тебя из рук — прислоняется лбом к твоему, и ты чувствуешь его частый, горячий пульс."
        },
        {
          "speaker": "vlad",
          "emotion": "warm",
          "delivery": "низко, чуть сбившись с дыхания",
          "text": "я думал об этом куда дольше, чем готов признаться… даже не представляешь, как сильно хотелось."
        },
        {
          "speaker": "heroine",
          "text": "Теперь представляю. И я тоже."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается в ответ и ещё раз коротко, уже без тени сомнения, касается губами твоих, прежде чем вы отступаете на полшага."
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
        "character": "vlad.closeup.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты чуть подаёшься к нему, свободной ладонью осторожно касаясь его щеки; Влад на секунду прикрывает глаза от твоего прикосновения и сразу наклоняется навстречу.",
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Остановившись посреди кухни, ты не убираешь рук с его шеи, а мягко, не спеша тянешь его к себе, сокращая последний шаг между вами.",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Смех давно растаял в тишине кухни; ты кладёшь ладони ему на грудь, чувствуя частый стук сердца под футболкой, и поднимаешь лицо.",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Он останавливается в одном вдохе от тебя — вчера ты замерла у самого уголка его губ, а сегодня уже не отводишь взгляда.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "cheek"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Вы на секунду замираете так близко, что слышно сбившееся дыхание друг друга — и эта пауза говорит громче любых слов.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "words"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Иди ко мне, Влад…",
          "delivery": "тихо, почти на выдохе"
        },
        {
          "speaker": "narrator",
          "text": "Ты первой касаешься его губ — сначала легко, чуть нерешительно, пробуя эту близость на вкус. На долю секунды Влад замирает, а потом его губы встречают твои в ответ уже горячо и глубоко: одна рука крепко обнимает тебя за спину, прижимая ближе, вторая скользит к твоему затылку, запутываясь пальцами в волосах — и в этом первом поцелуе нет ни спешки, ни сомнений, только живой жар и облегчение, что вы наконец перестали держаться на расстоянии.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Ты первой касаешься его губ — мягко и без спешки, наконец сокращая эту долгую дистанцию. На долю секунды Влад замирает, а потом осторожно обнимает тебя за плечи и отвечает так же бережно и тепло — давая тебе самой задавать ритм и ни на секунду не торопя."
            }
          ],
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
          "delivery": "тихо, совсем рядом с твоими губами"
        },
        {
          "speaker": "heroine",
          "text": "Хорошо, что перестал держаться."
        },
        {
          "speaker": "narrator",
          "text": "Вы ещё несколько секунд стоите, не разжимая рук и переводя дыхание, пока пульс медленно возвращается на место."
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
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                },
                {
                  "key": "c7GalleryFarewell",
                  "equals": "words"
                }
              ],
              "text": "Ты кладёшь голову ему на плечо; Влад на секунду замирает, а потом спокойно приобнимает тебя за плечи, бережно и без спешки."
            }
          ],
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
          "text": "Влад приоткрывает створку окна, чтобы впустить на разогретую кухню свежий ночной воздух. С улицы сразу тянет прохладой.",
          "variants": [
            {
              "when": [
                {
                  "key": "c8LipKiss",
                  "equals": "yes"
                }
              ],
              "text": "На разогретой кухне вдруг становится совсем жарко; Влад приоткрывает створку окна, впуская прохладный ночной воздух, но всё равно не отходит от тебя далеко."
            }
          ]
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
          "emotion": "smile",
          "text": "Первый длинный рукав ты подворачиваешь сама, а за второй берётся Влад: аккуратно закатывает манжету на твоём запястье и на секунду задерживает твою руку в своей."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "вот теперь по размеру. знаешь… тебе оно идёт даже больше, чем мне."
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
          "emotion": "smile",
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
          "emotion": "laugh",
          "text": "Ты открываешь на экране афишу сеанса: на рисунке старый раскрытый чемодан, а поверх вещей с невозмутимым видом сидит пушистый кот."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
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
          "text": "Вы сверяете вечер показа; ты убираешь телефон и камеру в сумку."
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
              "text": "На пороге в полумраке прихожей Влад ещё раз притягивает тебя к себе — его ладонь мягко ложится тебе на талию, и он целует тебя на прощание тихо и чуть дольше, чем собирался, прежде чем наконец открыть дверь."
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
