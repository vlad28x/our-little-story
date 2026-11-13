import type { Chapter } from '../../engine/types';
// Exact authored text: outputs/CHAPTERS_07_08_RUNTIME_2026_11_13.md
export const chapter8:Chapter={
  "id": 8,
  "contentVersion": 17,
  "scriptRevision": 5,
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
          "text": "Влад открывает тебе дверь в фартуке. Поперёк кармана на животе тянется тонкая белая полоса муки.",
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
          "text": "Смотрю, вопрос с фартуком решён."
        },
        {
          "speaker": "vlad",
          "text": "как договаривались. я его только завязал, а у меня уже полный карман муки."
        },
        {
          "speaker": "heroine",
          "text": "Вот и хорошо. Теперь его уже не страшно испортить."
        },
        {
          "speaker": "vlad",
          "text": "ещё как. заходи, я тут подвинул чайник. теперь у нас кухня на целого человека больше."
        },
        {
          "speaker": "narrator",
          "text": "Ты ставишь сумку с общим фотоаппаратом у стены и моешь руки. Влад освобождает для тебя место у доски."
        },
        {
          "speaker": "narrator",
          "text": "На столе две тарелки, одна поверх другой. Ты снимаешь верхнюю, чтобы поставить её со своей стороны."
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
          "text": "За тарелкой, прислонённая к сахарнице, стоит открытка. Ты узнаёшь белую полосу с выбитым уголком и маленький зубец в тени.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Так вот куда ты его поставил. Прямо видно этот маленький скол.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "ага. с моего места оба видно. садись потом сюда, сама посмотришь.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты поворачиваешь сахарницу чуть в сторону, чтобы открытка осталась на виду, когда появится блюдо.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "За тарелкой, у сахарницы, стоит синяя открытка. При свете лампы внизу виден порог, а справа горит узкая щель двери.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Ты «Просвет» сюда поставил! Вечером он, кажется, даже светлее.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "утром тоже хорошо. пока ем, успеваю разглядеть весь этот синий.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты придвигаешь сахарницу к дальнему краю. Теперь для блюда есть место, а дверь по-прежнему видно.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "У лампы лежат две салфетки. Ты освобождаешь середину стола под горячее и ставишь туда деревянную подставку.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Сюда всё поместится?",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "я на всякий случай убрал цветок с подоконника. будет куда отступать.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "я хотел свернуть одну большую лепёшку с начинкой, подрумянить и нарезать поперёк. как тебе?"
        },
        {
          "speaker": "heroine",
          "text": "Согласна. Только я сама выберу, что туда пойдёт."
        },
        {
          "speaker": "vlad",
          "text": "на это и расчёт. иначе к твоему приходу здесь уже лежал бы рулет, а я делал бы вид, что мне нужен совет."
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
          "text": "Влад ставит рядом сладкий перец в масле, обжаренные грибы, сыр и зелень. Большой лист тонкой лепёшки пока сложен на доске."
        },
        {
          "speaker": "vlad",
          "text": "сыр у нас за клей. остальное — в вашем распоряжении."
        },
        {
          "speaker": "heroine",
          "text": "А ты в чьём распоряжении?"
        },
        {
          "speaker": "vlad",
          "text": "я с тёркой. мне лучше сразу дать работу."
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
          "text": "Соберём вместе",
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
          "text": "Пропустить мини-игру",
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
          "text": "Перец. Красного побольше, чтобы он и сквозь сыр был виден."
        },
        {
          "speaker": "vlad",
          "text": "одобрено человеком с тёркой."
        },
        {
          "speaker": "narrator",
          "text": "Ты режешь мягкий перец широкими полосками. Влад натирает сыр в миску, придерживая её локтем, чтобы не ездила по столу."
        },
        {
          "speaker": "heroine",
          "text": "Хватит? А то сыра уже на два ужина."
        },
        {
          "speaker": "vlad",
          "text": "это пока гора. нагреется — и будешь искать, куда я всё дел."
        },
        {
          "speaker": "narrator",
          "text": "Ты ссыпаешь перец в миску. Красная полоска прилипает к ложке, и ты снимаешь её о край."
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
          "text": "Грибы. Они так пахнут, что я их ещё из прихожей выбрала."
        },
        {
          "speaker": "vlad",
          "text": "значит, я мог с дверью не возиться. сама бы нашла по запаху."
        },
        {
          "speaker": "narrator",
          "text": "Ты режешь крупные ломтики пополам. Влад натирает сыр; ты подставляешь миску под последнюю белую горсть."
        },
        {
          "speaker": "heroine",
          "text": "Вот эти с поджаристым краем оставлю покрупнее."
        },
        {
          "speaker": "vlad",
          "text": "себе метишь?"
        },
        {
          "speaker": "heroine",
          "text": "Нет. Хочу за ужином хоть один узнать."
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
          "text": "Давай каждый положит что-нибудь своё. Я начну с перца."
        },
        {
          "speaker": "vlad",
          "text": "тогда с меня грибы. и сыр, от должности человека с тёркой я пока не освобождён."
        },
        {
          "speaker": "narrator",
          "text": "Ты нарезаешь перец и ставишь миску между вами. Влад добавляет грибы. Вы по очереди перемешиваете начинку, пока сыр не распределяется между ломтиками."
        },
        {
          "speaker": "heroine",
          "text": "У твоих грибов ещё есть шанс. Я думала, перец займёт вообще всё."
        },
        {
          "speaker": "vlad",
          "text": "погоди, нам ведь ещё нужно куда-то поместить хлеб."
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
          "text": "Давай сегодня попроще. Помогу тебе, а собирать по кусочку не хочу."
        },
        {
          "speaker": "vlad",
          "text": "тогда сыр с зеленью. держи миску, я натру."
        },
        {
          "speaker": "narrator",
          "text": "Ты ставишь миску поудобнее и отрываешь листья зелени со стеблей. Влад натирает сыр и смешивает начинку. Всё уже на доске."
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
          "text": "Ты придерживаешь доску. Влад разворачивает лепёшку, и она расходится вдоль сгиба. В одной руке у него длинная полоса, в другой — почти квадрат."
        },
        {
          "speaker": "narrator",
          "text": "Вы примеряете половины друг к другу. Когда Влад приподнимает край, шов расходится снова. Начинка для большого рулета осталась бы прямо на сковороде."
        },
        {
          "speaker": "vlad",
          "text": "вот и весь мой план. зато у тебя теперь буквально своя половина."
        },
        {
          "speaker": "heroine",
          "text": "Подожди, не убирай. С этим ещё можно поработать."
        },
        {
          "speaker": "angel",
          "text": "Завернуть уголки всё ещё можно."
        },
        {
          "speaker": "devil",
          "text": "А я бы оставил сыр сверху. Представь, какие будут края."
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
          "text": "Если сложить маленькие конверты, целый лист и не нужен. Поверни сковороду ручкой ко мне."
        },
        {
          "speaker": "narrator",
          "text": "Влад ставит сковороду на плиту. Кусочки лепёшки ложатся на доску в два коротких ряда."
        },
        {
          "speaker": "narrator",
          "text": "Ты кладёшь начинку на свой первый кусочек и закрываешь уголок. Влад подхватывает конверт лопаткой и опускает швом вниз.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "pepper"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты кладёшь начинку на свой первый кусочек и закрываешь уголок. Влад подхватывает конверт лопаткой и опускает швом вниз.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mushroom"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты придерживаешь края, Влад подгибает свободный уголок поверх начинки. Первый конверт вы переносите на сковороду вместе.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mix"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад складывает маленькие конверты. Ты ставишь рядом тарелку и снимаешь лопаткой первую готовую порцию.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "simple"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "смотрю, один всё-таки раскрылся."
        },
        {
          "speaker": "heroine",
          "text": "Оставь. У него получится хрустящее ухо."
        },
        {
          "speaker": "narrator",
          "text": "Сыр прихватывается у края, и от первого конверта отделяется тонкая румяная полоска. Следующие держатся крепче."
        },
        {
          "speaker": "vlad",
          "text": "всё. это будет угловая порция. уважаемая часть любого ужина."
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
          "text": "Разложим кусочки на противне. Начинка останется сверху, и ничего больше не надо сворачивать."
        },
        {
          "speaker": "vlad",
          "text": "тогда у нас будут съедобные углы любой формы. сейчас разогрею духовку."
        },
        {
          "speaker": "narrator",
          "text": "Влад достаёт низкий противень. Ты раскладываешь кусочки чуть поодаль друг от друга, чтобы между ними оставалось место для корочки."
        },
        {
          "speaker": "narrator",
          "text": "Ты распределяешь начинку по первой порции, оставляя тонкую кайму. Влад переставляет наполненные кусочки на середину противня.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "pepper"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты распределяешь начинку по первой порции, оставляя тонкую кайму. Влад переставляет наполненные кусочки на середину противня.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mushroom"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад кладёт начинку ложкой, ты распределяешь её до самых уголков. Вы по очереди собираете даже самый узкий кусочек.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mix"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад распределяет начинку сам. Ты освобождаешь подставку для горячего противня и расставляешь тарелки.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "simple"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Этот крошечный тоже запечём?"
        },
        {
          "speaker": "vlad",
          "text": "обязательно. на нём поместится ровно один укус."
        },
        {
          "speaker": "narrator",
          "text": "Через несколько минут Влад ставит горячий противень на подставку. Вокруг начинки поднялись сухие золотистые края."
        },
        {
          "speaker": "heroine",
          "text": "Один укус вон какой важный получился. Положи его в середину."
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
            "fromLine": 14,
            "background": "bg.supper8.kitchen",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад садится напротив. Ты кладёшь каждому по порции, а остальное оставляешь на общем блюде."
        },
        {
          "speaker": "narrator",
          "text": "Из первого конверта выглядывает румяное сырное ухо. Ты отламываешь его пополам и подвигаешь Владу его половину.",
          "when": [
            {
              "key": "c8Shape",
              "equals": "fold"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Крохотный кусочек лежит в середине блюда. Ты разламываешь его на двоих. Сыр тянется дальше, чем хватило самой лепёшки.",
          "when": [
            {
              "key": "c8Shape",
              "equals": "open"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Видишь красную полоску? Вот за этой я следила от доски до тарелки.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "pepper"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "А вот и гриб с поджаристым краем. Узнала.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mushroom"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Твои грибы и мой перец попали в один кусок. Давай нам именно его.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "mix"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "А зелень тут к месту. И сыр у края успел подрумяниться.",
          "when": [
            {
              "key": "c8Filling",
              "equals": "simple"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "попробуй с этого конца. здесь уже можно есть, а середина ещё обжигает."
        },
        {
          "speaker": "narrator",
          "text": "Первые несколько секунд вы оба заняты едой. Тонкий край хрустит так громко, что Влад слышит его с другого конца стола."
        },
        {
          "speaker": "heroine",
          "text": "Кто-то говорил про один большой рулет. У него бы такой корочки не было."
        },
        {
          "speaker": "vlad",
          "text": "и я бы всё пропустил. стоял бы резал его за столешницей, пока ты тут ужинаешь."
        },
        {
          "speaker": "heroine",
          "text": "Ты часто ешь прямо у плиты?"
        },
        {
          "speaker": "vlad",
          "text": "один — да. дотащу тарелку досюда, только если уже обе руки заняты. сегодня вот захотелось сесть напротив."
        },
        {
          "speaker": "narrator",
          "text": "Влад снимает фартук и вешает его на спинку соседнего стула. На чёрной ткани остался белый след от доски."
        },
        {
          "speaker": "heroine",
          "text": "Я думала, его совсем чистым не отдают."
        },
        {
          "speaker": "vlad",
          "text": "это была единственная вещь на кухне, которой мне разрешили распоряжаться самостоятельно."
        },
        {
          "speaker": "heroine",
          "text": "Ты ещё начинкой распоряжался. И очень хорошо распоряжался, если судить по тарелке."
        },
        {
          "speaker": "vlad",
          "text": "тогда оставляй мне край стола. во второй заход я хочу сам выбрать кусок."
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
          "text": "На доске остались крошки, на общем блюде ещё есть целые порции. Ты берёшь из сумки аппарат. На счётчике пятнадцать."
        },
        {
          "speaker": "heroine",
          "text": "Пока не съели всё. Мне нравится и то, что получилось, и то, во что мы превратили кухню."
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
          "text": "Блюдо. Придвинь его к лампе, а я сниму чуть сверху."
        },
        {
          "speaker": "narrator",
          "text": "Влад держит блюдо за дальний край. Ты оставляешь в видоискателе одну целую порцию и разломленный кусочек рядом."
        },
        {
          "speaker": "vlad",
          "text": "руки убирать?"
        },
        {
          "speaker": "heroine",
          "text": "Оставь пальцы на краю тарелки. Будет видно, кто помогал."
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
          "text": "Сними блюдо с твоей стороны. Оттуда лучше видно корочку."
        },
        {
          "speaker": "narrator",
          "text": "Ты передаёшь Владу аппарат и придерживаешь тарелку. Он оставляет в кадре край тарелки и две порции, одну целую, другую разломленную."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь узнаю наш ужин даже с закрытым ртом."
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
          "text": "За блюдом виден нижний край открытки с белой полосой. Зубец в тени оказывается прямо над тарелкой.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "chip"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "За блюдом видна маленькая синяя дверь. Полоска тёплого света оказывается прямо над тарелкой.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "blue"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "За блюдом виден белый край сахарницы под лампой.",
          "when": [
            {
              "key": "c7GalleryGift",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты нажимаешь на спуск и прокручиваешь колёсико.",
          "when": [
            {
              "key": "c8Frame",
              "equals": "foodHer"
            }
          ],
          "effects": [
            {
              "kind": "set",
              "key": "c8Film",
              "value": "key"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад нажимает на спуск, прокручивает колёсико и возвращает аппарат тебе.",
          "when": [
            {
              "key": "c8Frame",
              "equals": "foodVlad"
            }
          ],
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
          "text": "Я сниму доску. Поверни её вот этим углом к свету."
        },
        {
          "speaker": "narrator",
          "text": "Влад поворачивает доску с крошками. Ты оставляешь в кадре ложку и один мучной след от пальца, похожий на большую запятую."
        },
        {
          "speaker": "vlad",
          "text": "красивый почерк. твоё?"
        },
        {
          "speaker": "heroine",
          "text": "Теперь уже не узнаем."
        },
        {
          "speaker": "narrator",
          "text": "Ты нажимаешь на спуск и прокручиваешь колёсико.",
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
          "text": "Сними доску сам. Мне интересно, что ты из этого оставишь в кадре."
        },
        {
          "speaker": "narrator",
          "text": "Влад берёт аппарат и наклоняется к доске. В видоискатель попадают ложка, крошки и мучная запятая у края."
        },
        {
          "speaker": "vlad",
          "text": "тарелку держи за кадром. здесь у нас честная история приготовления."
        },
        {
          "speaker": "narrator",
          "text": "Он нажимает на спуск, прокручивает колёсико и возвращает аппарат тебе.",
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
          "text": "За ужином вы ещё несколько раз берёте аппарат: то смешная гора крошек, то пустеющее блюдо. Влад ловит тень от тёрки, а ты — край полотенца под лампой."
        },
        {
          "speaker": "narrator",
          "text": "В окошке остаётся девять. Ты убираешь аппарат в сумку. Влад собирает со стола крошки, а ты складываешь полотенце. Блюдо с оставшимися порциями вы сдвигаете к середине.",
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
          "text": "Ты возвращаешься за сумкой. Влад останавливается рядом, и на этот раз между вами нет ни доски, ни тарелок."
        },
        {
          "speaker": "vlad",
          "text": "подожди. пойдём потанцуем? мне весь вечер хочется оказаться к тебе поближе."
        },
        {
          "speaker": "narrator",
          "text": "Он протягивает ладонь. С улицы ещё слышно город, а в квартире после ужина стало совсем тихо."
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
          "text": "Давай. Показывай шаг",
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
          "text": "Пойдём, но вести буду я",
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
          "text": "Потанцуем. Только придумай смешной первый шаг",
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
          "text": "Давай. Показывай шаг."
        },
        {
          "speaker": "narrator",
          "text": "Ты берёшь Влада за руку. Он делает шаг вдоль края стола, ещё один — на свободное место. Ты подхватываешь его темп."
        },
        {
          "speaker": "vlad",
          "text": "вот так. шаг ко мне, теперь в сторону."
        },
        {
          "speaker": "heroine",
          "text": "Подожди, я ещё твой первый шаг догоняю."
        },
        {
          "speaker": "narrator",
          "text": "Влад замедляется. На следующем повороте вы уже двигаетесь одновременно. Ты поднимаешь голову и встречаешь его взгляд."
        },
        {
          "speaker": "vlad",
          "text": "вот так нравится. можно вообще никуда дальше не идти."
        },
        {
          "speaker": "heroine",
          "text": "Тогда ещё один круг здесь."
        },
        {
          "speaker": "narrator",
          "text": "На этот раз вы обходите свой маленький круг молча. Когда останавливаетесь, Влад всё ещё держит твою ладонь."
        },
        {
          "speaker": "vlad",
          "text": "я хочу тебя поцеловать."
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
          "text": "Пойдём, но вести буду я."
        },
        {
          "speaker": "narrator",
          "text": "Ты встаёшь и протягиваешь ему руку. Намечаешь шаг по диагонали, затем поворот к дивану. Влад сначала идёт шире и едва не выходит из твоего маленького круга."
        },
        {
          "speaker": "vlad",
          "text": "ага. понял. ты хочешь, чтобы я подождал на повороте."
        },
        {
          "speaker": "heroine",
          "text": "Я хочу, чтобы ты посмотрел на меня. Тогда увидишь, куда поворачивать."
        },
        {
          "speaker": "narrator",
          "text": "Он поднимает взгляд. Следующий поворот вы делаете одновременно, и ты ведёшь его обратно к свету от лампы."
        },
        {
          "speaker": "vlad",
          "text": "вот сейчас я увидел, куда ты ведёшь. ещё раз так же?"
        },
        {
          "speaker": "heroine",
          "text": "Ещё раз. Теперь уже не подсказываю."
        },
        {
          "speaker": "narrator",
          "text": "Ты замедляешь шаг и останавливаешься напротив него. Влад ждёт, что ты сделаешь дальше."
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
          "text": "Потанцуем. Только придумай смешной первый шаг."
        },
        {
          "speaker": "vlad",
          "text": "ладно. демонстрирую авторский шаг человека, который пытается незаметно обойти стул."
        },
        {
          "speaker": "narrator",
          "text": "Влад чинно обходит пустой стул боком и только потом подаёт тебе руку. Ты принимаешь её и повторяешь шаг зеркально."
        },
        {
          "speaker": "heroine",
          "text": "Слишком незаметно. Стул даже не понял, что сейчас был частью номера."
        },
        {
          "speaker": "vlad",
          "text": "тогда твоя очередь. я смотрю."
        },
        {
          "speaker": "narrator",
          "text": "Ты делаешь преувеличенно широкий шаг на свободном полу и крошечный на обратном пути. Влад повторяет оба. На третьем вы смеётесь и теряете счёт."
        },
        {
          "speaker": "heroine",
          "text": "Дальше без стула."
        },
        {
          "speaker": "narrator",
          "text": "Ты возвращаешься на удобное расстояние. Влад останавливается напротив и смеётся ещё секунду, хотя шаги вы уже закончили."
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
          "text": "Я останусь за столом. Посиди со мной."
        },
        {
          "speaker": "vlad",
          "text": "давай. я как раз хотел выяснить, кому достанется последний хрустящий край."
        },
        {
          "speaker": "narrator",
          "text": "Он возвращается на свой стул. Между вами осталось несколько порций. Ты придвигаешь блюдо к середине, откуда удобно дотянуться обоим."
        },
        {
          "speaker": "heroine",
          "text": "А если ужин всё-таки добрался до комнаты?"
        },
        {
          "speaker": "vlad",
          "text": "тогда ем за компьютером. а потом клавиатура хрустит дольше ужина."
        },
        {
          "speaker": "heroine",
          "text": "У меня для тебя сейчас будет контейнер с совершенно бесшумным завтрашним обедом."
        },
        {
          "speaker": "narrator",
          "text": "Влад достаёт контейнер. Ты откладываешь туда целые порции, а тот самый последний край оставляешь на блюде."
        },
        {
          "speaker": "vlad",
          "text": "это мне?"
        },
        {
          "speaker": "heroine",
          "text": "Тебе. Сегодня ты всё-таки поел за столом."
        },
        {
          "speaker": "narrator",
          "text": "Влад пробует край из твоей половины блюда. Ещё немного вы сидите напротив друг друга. Контейнер стоит на подставке, уже чуть тёплый."
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
          "id": "yes",
          "text": "Я тоже хочу",
          "next": "c8.supper.kissYes"
        },
        {
          "id": "no",
          "text": "Сейчас просто потанцуем",
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
          "text": "Я тоже хочу."
        },
        {
          "speaker": "narrator",
          "text": "Ты поднимаешь к нему лицо. Влад наклоняется навстречу твоему движению и задерживается совсем близко.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "cheek"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты сама делаешь последний полшага. Влад остаётся рядом, и ты встречаешь его взгляд.",
          "when": [
            {
              "key": "c7GalleryFarewell",
              "equals": "words"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Влад целует тебя в губы. На миг вы оба замираете, затем отпускаете руки.",
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
          "text": "а я ещё думал, какой следующий шаг тебе показать."
        },
        {
          "speaker": "heroine",
          "text": "Этот я запомнила."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается тебе. Ты ещё немного держишь его за руку, прежде чем вернуться за сумкой."
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
          "text": "Сейчас просто потанцуем. Мне так хорошо."
        },
        {
          "speaker": "vlad",
          "text": "тогда веду ещё круг."
        },
        {
          "speaker": "narrator",
          "text": "Вы делаете пару шагов по уже знакомому месту. В конце ты отпускаешь его руку. Влад возвращает стул к столу.",
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
          "text": "Скажу Владу, что хочу его поцеловать",
          "next": "c8.supper.kissHer"
        },
        {
          "id": "quiet",
          "text": "Завершить танец своим поворотом",
          "next": "c8.supper.quiet",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "id": "quiet-play",
          "text": "Закончить поклоном",
          "next": "c8.supper.quiet",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "id": "quiet-sit",
          "text": "Посидим ещё немного",
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
          "text": "Ты выходишь из-за стола и останавливаешься рядом с его стулом. Влад поднимает голову.",
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты отпускаешь его руку после своего поворота, но остаёшься близко.",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты перестаёшь считать шаги, и Влад тоже останавливается.",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Влад, я хочу тебя поцеловать."
        },
        {
          "speaker": "vlad",
          "text": "и я тебя."
        },
        {
          "speaker": "narrator",
          "text": "Ты целуешь его в губы. Он отвечает. Когда ты отстраняешься, Влад улыбается совсем близко.",
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
          "text": "мне давно хотелось."
        },
        {
          "speaker": "heroine",
          "text": "Мне тоже."
        },
        {
          "speaker": "narrator",
          "text": "Несколько секунд вы остаётесь рядом. Потом ты касаешься его ладони и идёшь за сумкой."
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
          "text": "Ты ведёшь его ещё на один поворот. В конце вы одновременно останавливаетесь, и ты отпускаешь его руку.",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Вот этот поворот оставим.",
          "when": [
            {
              "key": "c8Step",
              "equals": "lead"
            }
          ],
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
          "text": "Ты делаешь короткий поклон. Влад отвечает таким же, затем возвращает стул на место.",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "считаю, стулу особенно повезло с партнёрами.",
          "when": [
            {
              "key": "c8Step",
              "equals": "play"
            }
          ],
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
          "text": "Ты надеваешь крышку на контейнер. Влад освобождает для него место в холодильнике и возвращается к столу.",
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Ну вот. Завтра тоже можно будет сесть и поесть как следует.",
          "when": [
            {
              "key": "c8Step",
              "equals": "sit"
            }
          ],
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
          "text": "Ты проверяешь, на месте ли сумка с аппаратом. Влад приоткрывает окно выпустить кухонный жар. В комнату тянет прохладой."
        },
        {
          "speaker": "vlad",
          "text": "у меня тут худи на стуле. можно накинуть, пока окно открыто. если хочешь, бери до следующего раза."
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
          "text": "Накину, пока я здесь",
          "next": "c8.supper.wear"
        },
        {
          "id": "borrow",
          "text": "Возьму с собой до следующей встречи",
          "next": "c8.supper.borrow"
        },
        {
          "id": "pass",
          "text": "Спасибо, мне и так хорошо",
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
          "text": "Ты надеваешь худи и подворачиваешь длинный рукав. От открытого окна теперь тянет только по щиколоткам.",
          "effects": [
            {
              "kind": "set",
              "key": "c8Hoodie",
              "value": "evening"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Пока я здесь. У двери верну."
        },
        {
          "speaker": "vlad",
          "text": "идёт."
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
          "text": "Возьму до следующей встречи. На улице пригодится."
        },
        {
          "speaker": "narrator",
          "text": "Влад подаёт тебе худи. Ты складываешь его и убираешь в сумку рядом с аппаратом.",
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
          "text": "бери. в кармане, кажется, осталась салфетка. бонус к худи."
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
          "text": "Спасибо, мне и так хорошо."
        },
        {
          "speaker": "vlad",
          "text": "ладно. я уже прикрою окно.",
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
          "text": "Влад оставляет худи на стуле. Ты достаёшь из сумки телефон."
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
          "text": "Слушай, я нашла, куда хочу тебя позвать. В кинодворике будет вечерний показ под открытым небом."
        },
        {
          "speaker": "narrator",
          "text": "Ты открываешь сохранённую афишу. На ней раскрытый чемодан, а поверх аккуратно сложенной одежды сидит кот."
        },
        {
          "speaker": "vlad",
          "text": "вот у этого пассажира, я так понимаю, билета нет."
        },
        {
          "speaker": "heroine",
          "text": "Поэтому и хочу посмотреть. Пойдём со мной на этот сеанс?"
        },
        {
          "speaker": "vlad",
          "text": "пойдём. пришли время, я подойду к началу."
        },
        {
          "speaker": "narrator",
          "text": "Вы сверяете время показа. Ты убираешь телефон и берёшь сумку."
        },
        {
          "speaker": "narrator",
          "text": "У двери ты снимаешь худи и вешаешь обратно. Аппарат остаётся в твоей сумке.",
          "when": [
            {
              "key": "c8Hoodie",
              "equals": "evening"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "В сумке вместе с аппаратом лежит его худи. Ты застёгиваешь молнию.",
          "when": [
            {
              "key": "c8Hoodie",
              "equals": "borrowed"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты проходишь к двери с сумкой. Худи остаётся на стуле.",
          "when": [
            {
              "key": "c8Hoodie",
              "equals": "none"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Тогда до кино, Влад."
        },
        {
          "speaker": "vlad",
          "text": "до кино. свою половину кухни можешь считать забронированной."
        },
        {
          "speaker": "narrator",
          "text": "Ты прощаешься на пороге его квартиры. Влад придерживает дверь, пока ты выходишь.",
          "variants": [{"when": [{"key": "c8LipKiss", "equals": "yes"}], "text": "На пороге вы задерживаетесь, улыбаясь друг другу. Потом Влад открывает тебе дверь."}]
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
