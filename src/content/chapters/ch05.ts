// Scenario reference: outputs/CHAPTER_05_SCRIPT.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter5:Chapter = {
  "id": 5,
  "contentVersion": CONTENT_VERSION,
  "firstSeasonEdition": 3,
  "title": "А что, если это не конец?",
  "entry": "c5.return",
  "nodes": {
    "c5.return": {
      "id": "c5.return",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "К пятой встрече вы возвращаетесь в «Паузу». За высоким окном садится солнце, и в зале особенно тихо перед вечерним часом."
        },
        {
          "speaker": "narrator",
          "text": "Влад уже ждёт за вашим столиком. Сегодня на нём тёмно-синий бархатный костюм с водолазкой в тон — непривычно собранный вид, и только кудри на висках остались всё такими же непослушными."
        },
        {
          "speaker": "narrator",
          "text": "Увидев тебя в дверях, он сразу встаёт навстречу."
        },
        {
          "speaker": "vlad",
          "text": "привет. сегодня я пришёл совсем без коробок и зонтиков. решил не отвлекать внимание от главного."
        },
        {
          "speaker": "heroine",
          "text": "А бархатный пиджак разве не считается спецэффектом? Тебе очень идёт."
        },
        {
          "speaker": "narrator",
          "text": "От комплимента Влад на секунду тушуется, чуть поводит плечами, но смотрит прямо на тебя:"
        },
        {
          "speaker": "vlad",
          "text": "хотел выглядеть достойно рядом с тобой за нашим столиком. ты сегодня очень красивая."
        },
        {
          "speaker": "narrator",
          "text": "Он произносит это просто, без тени шутки, и отодвигает для тебя стул. Когда Влад на секунду наклоняется ближе, ты ловишь чистый свежий запах его парфюма — лёгкий цитрус с едва заметной древесной нотой."
        },
        {
          "speaker": "heroine",
          "text": "Кстати, отличный парфюм. Очень тебе подходит."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "рад, что угадал с настроением. сегодня хотелось, чтобы у этого вечера запомнилась каждая деталь."
        }
      ],
      "next": "c5.hug.route"
    },
    "c5.hug.route": {
      "id": "c5.hug.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c4Goodbye",
              "equals": "her"
            }
          ],
          "next": "c5.hug.her"
        },
        {
          "all": [
            {
              "key": "c4Goodbye",
              "equals": "accept"
            }
          ],
          "next": "c5.hug.accept"
        }
      ],
      "fallback": "c5.cat.route"
    },
    "c5.hug.her": {
      "id": "c5.hug.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.laugh"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "знаешь, я всё вспоминал, как ты тогда на набережной обняла меня первой. я потом полдороги до дома шёл и улыбался как дурак."
        },
        {
          "speaker": "heroine",
          "text": "Только полдороги?"
        },
        {
          "speaker": "vlad",
          "text": "вторую половину тоже. просто там уже люди на светофоре начали оглядываться."
        }
      ],
      "next": "c5.cat.route"
    },
    "c5.hug.accept": {
      "id": "c5.hug.accept",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "после вечера на набережной и вчерашних посиделок под пледом я всё время ловил себя на том, что мне ужасно не хочется прощаться с тобой у двери."
        },
        {
          "speaker": "heroine",
          "text": "Поэтому сегодня пришёл в «Паузу» раньше времени?"
        },
        {
          "speaker": "vlad",
          "text": "поэтому. хотелось украсть для нас лишние пять минут."
        }
      ],
      "next": "c5.cat.route"
    },
    "c5.cat.route": {
      "id": "c5.cat.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "catApproach",
              "equals": "wait"
            }
          ],
          "next": "c5.cat.wait"
        }
      ],
      "fallback": "c5.cat.help"
    },
    "c5.cat.wait": {
      "id": "c5.cat.wait",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Из-за барной стойки выходит Пончик, узнаёт вас и с тихим мурлыканьем запрыгивает на край вашего столика. Ты сдвигаешь сумку, уступая ему солнечное пятно."
        },
        {
          "speaker": "nina",
          "text": "О, моя любимая команда снова на своём месте! Сейчас подойду, не разбегайтесь."
        }
      ],
      "next": "c5.drink.offer"
    },
    "c5.cat.help": {
      "id": "c5.cat.help",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Ваш пушистый знакомый уже дремлет на вашем столике. А я как раз ждала, когда вы придёте!"
        },
        {
          "speaker": "narrator",
          "text": "Влад помогает тебе снять пальто, вешает его на спинку свободного стула и садится напротив."
        }
      ],
      "next": "c5.drink.offer"
    },
    "c5.drink.offer": {
      "id": "c5.drink.offer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.thinking"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Слушайте, я тут колдую над новым осенним чаем для вечернего меню — печёное яблоко и ваниль. Дадите честный совет, если налью вам на пробу?"
        },
        {
          "speaker": "heroine",
          "text": "С удовольствием. Только мы эксперты исключительно по спокойным паузам."
        },
        {
          "speaker": "nina",
          "text": "Вот именно такие люди мне и нужны!"
        },
        {
          "speaker": "narrator",
          "text": "Нина ставит между вами две небольшие фарфоровые чашки — над столом сразу поднимается запах ванили, корицы и печёного яблока."
        },
        {
          "speaker": "vlad",
          "text": "пахнет так, будто здесь только что вытащили из духовки домашний пирог."
        },
        {
          "speaker": "narrator",
          "text": "Он делает первый глоток и поворачивает чашку ручкой к тебе."
        },
        {
          "speaker": "vlad",
          "text": "попробуй. интересно, совпадут ли у нас впечатления."
        }
      ],
      "next": "c5.drink.first"
    },
    "c5.drink.first": {
      "id": "c5.drink.first",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.thinking"
      },
      "prompt": "Как тебе первая проба?",
      "choices": [
        {
          "id": "vanilla",
          "text": "Мне тоже нравится. Я бы оставила так",
          "next": "c5.drink.first.vanilla",
          "effects": [
            {
              "kind": "set",
              "key": "c5FirstTaste",
              "value": "vanilla"
            }
          ]
        },
        {
          "id": "sweet",
          "text": "Для меня сладковато",
          "next": "c5.drink.first.sweet",
          "effects": [
            {
              "kind": "set",
              "key": "c5FirstTaste",
              "value": "sweet"
            }
          ]
        },
        {
          "id": "compare",
          "text": "Давай сравним с менее сладким вариантом",
          "next": "c5.drink.first.compare",
          "effects": [
            {
              "kind": "set",
              "key": "c5FirstTaste",
              "value": "compare"
            }
          ]
        }
      ]
    },
    "c5.drink.first.vanilla": {
      "id": "c5.drink.first.vanilla",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Мне очень нравится. Ваниль мягкая, и вкус яблока совсем не теряется."
        },
        {
          "speaker": "vlad",
          "text": "вот. значит, вкусы к осенним вещам у нас совпадают."
        },
        {
          "speaker": "nina",
          "text": "А у меня есть ещё вторая версия — с кислинкой лимона и меньшей сладостью. Принести для сравнения?"
        },
        {
          "speaker": "heroine",
          "text": "Давайте! Проверим оба варианта."
        }
      ],
      "next": "c5.drink.compare"
    },
    "c5.drink.first.sweet": {
      "id": "c5.drink.first.sweet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.laugh"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Вкусно, но для меня чуть сладковато — за ванилью почти не слышно самого яблока."
        },
        {
          "speaker": "vlad",
          "text": "а мне эта мягкая сладость как раз по душе. люблю, когда у вечера такой оттенок."
        },
        {
          "speaker": "nina",
          "text": "Тогда сейчас принесу вторую пробу — там меньше сиропа и добавлена долька лимона!"
        },
        {
          "speaker": "heroine",
          "text": "Отлично, устроим честное сравнение."
        }
      ],
      "next": "c5.drink.compare"
    },
    "c5.drink.first.compare": {
      "id": "c5.drink.first.compare",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.thinking"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "А можно попробовать рядом менее сладкую версию, чтобы почувствовать разницу?"
        },
        {
          "speaker": "nina",
          "text": "Конечно! Сейчас сделаю вам вариант с лимонной цедрой."
        },
        {
          "speaker": "vlad",
          "text": "я всё равно ставлю на ванильную. она сразу задаёт настроение."
        },
        {
          "speaker": "heroine",
          "text": "Подожди защищать свой пирог, сначала попробуем вторую."
        }
      ],
      "next": "c5.drink.compare"
    },
    "c5.drink.compare": {
      "id": "c5.drink.compare",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Нина приносит вторую пару проб с тонкой долькой лимона и оставляет вас вдвоём у окна."
        },
        {
          "speaker": "narrator",
          "text": "Ты делаешь глоток лимонной версии, а Влад неожиданно подвигает свою первую, ванильную чашку через середину столика прямо к тебе:"
        },
        {
          "speaker": "vlad",
          "text": "сравни сразу — глоток из твоей и глоток из моей. вдруг в моей чашке ваниль убедительнее?"
        },
        {
          "speaker": "narrator",
          "text": "Ты берёшь его чашку и делаешь маленький глоток. Влад на секунду замолкает, наблюдая за твоей реакцией так сосредоточенно, словно от этого зависит судьба кафе."
        },
        {
          "speaker": "heroine",
          "text": "Во второй яблоко свежее, и лимон совсем не резкий. Но твоя ванильная и правда очень уютная."
        },
        {
          "speaker": "vlad",
          "text": "да… я же говорил. очень уютная.",
          "emotion": "awkward"
        }
      ],
      "next": "c5.drink.work.route"
    },
    "c5.drink.work.route": {
      "id": "c5.drink.work.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "kitchenStyle",
              "equals": "planner"
            }
          ],
          "next": "c5.drink.work.planner"
        }
      ],
      "fallback": "c5.drink.work.improv"
    },
    "c5.drink.work.planner": {
      "id": "c5.drink.work.planner",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты аккуратно выстраиваешь чашки попарно и кладёшь между вами карточку для отзыва — так же слаженно, как вчера вы делили заказы на диване."
        },
        {
          "speaker": "heroine",
          "text": "Сначала решим, за какой вкус голосуем, а потом напишем Нине записку."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится, как мы с тобой уже понимаем друг друга с полуслова."
        }
      ],
      "next": "c5.drink.recommend"
    },
    "c5.drink.work.improv": {
      "id": "c5.drink.work.improv",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад подвигает карточку на середину стола и галантно разворачивает ручку колпачком к тебе, уступая право главного критика."
        },
        {
          "speaker": "heroine",
          "text": "Писать буду я, иначе ты просто нарисуешь на весь листок яблочный пирог."
        },
        {
          "speaker": "vlad",
          "text": "нарисую. и рядом подпишу, что пробовал его в лучшей компании."
        }
      ],
      "next": "c5.drink.recommend"
    },
    "c5.drink.recommend": {
      "id": "c5.drink.recommend",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "prompt": "Что предложим Нине после сравнения?",
      "choices": [
        {
          "id": "vanilla",
          "text": "Оставить исходный ванильный вариант",
          "next": "c5.drink.reason.route",
          "effects": [
            {
              "kind": "set",
              "key": "c5Recommendation",
              "value": "vanilla"
            }
          ]
        },
        {
          "id": "fresh",
          "text": "Предложить менее сладкий вариант",
          "next": "c5.drink.reason.route",
          "effects": [
            {
              "kind": "set",
              "key": "c5Recommendation",
              "value": "fresh"
            }
          ]
        },
        {
          "id": "both",
          "text": "Попробовать в меню оба",
          "next": "c5.drink.reason.route",
          "effects": [
            {
              "kind": "set",
              "key": "c5Recommendation",
              "value": "both"
            }
          ]
        }
      ]
    },
    "c5.drink.reason.vanilla.vanilla": {
      "id": "c5.drink.reason.vanilla.vanilla",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "После сравнения с твоей чашкой я точно за первую. У ванили здесь самый правильный вечерний вкус."
        },
        {
          "speaker": "vlad",
          "text": "знал, что моя чашка тебя убедит. оставляем наш уютный вариант."
        }
      ],
      "next": "c5.drink.result.vanilla"
    },
    "c5.drink.reason.vanilla.fresh": {
      "id": "c5.drink.reason.vanilla.fresh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Первая мягкая, но в сравнении вторая раскрылась ярче — там так свежо чувствуется яблоко. Предложу её."
        },
        {
          "speaker": "vlad",
          "text": "а я останусь верен ванили. зато теперь у каждого за этим столиком свой любимый вкус."
        }
      ],
      "next": "c5.drink.result.fresh"
    },
    "c5.drink.reason.vanilla.both": {
      "id": "c5.drink.reason.vanilla.both",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Мне близка первая, но обе версии хороши под разное настроение. Давай предложим Нине оставить обе."
        },
        {
          "speaker": "vlad",
          "text": "мудрое решение. главное, что мою ванильную никто не отменяет."
        }
      ],
      "next": "c5.drink.result.both"
    },
    "c5.drink.reason.sweet.vanilla": {
      "id": "c5.drink.reason.sweet.vanilla",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сначала показалось сладко, но когда попробовала после лимонной из твоей чашки — поняла, что именно ваниль делает этот чай особенным."
        },
        {
          "speaker": "vlad",
          "text": "она просто ждала второго шанса. рад, что ты её распробовала."
        }
      ],
      "next": "c5.drink.result.vanilla"
    },
    "c5.drink.reason.sweet.fresh": {
      "id": "c5.drink.reason.sweet.fresh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Да, вторая с лимоном — точно моя. Лёгкая, свежая, и сладость не перебивает яблоко."
        },
        {
          "speaker": "vlad",
          "text": "тебе она и правда подходит. а я буду брать ванильную, чтобы у тебя всегда был повод попробовать из моей чашки."
        }
      ],
      "next": "c5.drink.result.fresh"
    },
    "c5.drink.reason.sweet.both": {
      "id": "c5.drink.reason.sweet.both",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Себе буду заказывать лимонную, но в меню нужно дать шанс обеим — ты ведь свою ваниль ни за что не отдашь."
        },
        {
          "speaker": "vlad",
          "text": "ни за что. тем более теперь с ней связаны хорошие воспоминания."
        }
      ],
      "next": "c5.drink.result.both"
    },
    "c5.drink.reason.compare.vanilla": {
      "id": "c5.drink.reason.compare.vanilla",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сравнение всё расставило по местам: первая мягче и спокойнее. Голосую за ваниль."
        },
        {
          "speaker": "vlad",
          "text": "победа яблочного пирога. я в тебе не сомневался."
        }
      ],
      "next": "c5.drink.result.vanilla"
    },
    "c5.drink.reason.compare.fresh": {
      "id": "c5.drink.reason.compare.fresh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Хорошо, что сравнили рядом: вторая с лимоном звучит интереснее и тоньше. Предложу её."
        },
        {
          "speaker": "vlad",
          "text": "принимается. люблю, когда ты так уверенно выбираешь то, что тебе по душе."
        }
      ],
      "next": "c5.drink.result.fresh"
    },
    "c5.drink.reason.compare.both": {
      "id": "c5.drink.reason.compare.both",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Они такие разные, что выбирать одну даже жалко. Давай предложим Нине сделать пробный день с двумя вкусами."
        },
        {
          "speaker": "vlad",
          "text": "отлично. значит, будет законный повод вернуться сюда и проверить, какая победила."
        }
      ],
      "next": "c5.drink.result.both"
    },
    "c5.drink.reason.route": {
      "id": "c5.drink.reason.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "vanilla"
            },
            {
              "key": "c5Recommendation",
              "equals": "vanilla"
            }
          ],
          "next": "c5.drink.reason.vanilla.vanilla"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "vanilla"
            },
            {
              "key": "c5Recommendation",
              "equals": "fresh"
            }
          ],
          "next": "c5.drink.reason.vanilla.fresh"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "vanilla"
            },
            {
              "key": "c5Recommendation",
              "equals": "both"
            }
          ],
          "next": "c5.drink.reason.vanilla.both"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "sweet"
            },
            {
              "key": "c5Recommendation",
              "equals": "vanilla"
            }
          ],
          "next": "c5.drink.reason.sweet.vanilla"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "sweet"
            },
            {
              "key": "c5Recommendation",
              "equals": "fresh"
            }
          ],
          "next": "c5.drink.reason.sweet.fresh"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "sweet"
            },
            {
              "key": "c5Recommendation",
              "equals": "both"
            }
          ],
          "next": "c5.drink.reason.sweet.both"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "compare"
            },
            {
              "key": "c5Recommendation",
              "equals": "vanilla"
            }
          ],
          "next": "c5.drink.reason.compare.vanilla"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "compare"
            },
            {
              "key": "c5Recommendation",
              "equals": "fresh"
            }
          ],
          "next": "c5.drink.reason.compare.fresh"
        },
        {
          "all": [
            {
              "key": "c5FirstTaste",
              "equals": "compare"
            },
            {
              "key": "c5Recommendation",
              "equals": "both"
            }
          ],
          "next": "c5.drink.reason.compare.both"
        }
      ],
      "fallback": "c5.drink.reason.compare.both"
    },
    "c5.drink.result.vanilla": {
      "id": "c5.drink.result.vanilla",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Нина, мы единогласно за первую, ванильную версию. Я сейчас напишу на карточке почему."
        },
        {
          "speaker": "nina",
          "text": "Так и знала, что вам захочется уюта! Запишу эту пропорцию сиропа на завтрашний вечер."
        },
        {
          "speaker": "narrator",
          "text": "Нина делает пометку в блокноте, а ты склоняешься над карточкой, чтобы написать короткий отзыв."
        }
      ],
      "next": "c5.drink.team.route"
    },
    "c5.drink.result.fresh": {
      "id": "c5.drink.result.fresh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Нина, мне больше полюбилась вторая, с лимоном, а Влад защищает ванильную."
        },
        {
          "speaker": "nina",
          "text": "Тогда завтра запущу лимонную первой партией — проверим, сколько ещё гостей выберут свежесть!"
        },
        {
          "speaker": "narrator",
          "text": "Нина записывает рецепт в блокнот, а ты берёшь ручку, чтобы оставить короткую записку."
        }
      ],
      "next": "c5.drink.team.route"
    },
    "c5.drink.result.both": {
      "id": "c5.drink.result.both",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Нина, а что если на один вечер поставить в меню обе версии и посмотреть, какую гости выберут чаще?"
        },
        {
          "speaker": "nina",
          "text": "А это отличная мысль! Сделаю завтра две небольшие партии, посмотрим на характер гостей."
        },
        {
          "speaker": "narrator",
          "text": "Ты рисуешь на уголке карточки две маленькие чашки рядом — совсем как ваши на этом столе."
        }
      ],
      "next": "c5.drink.team.route"
    },
    "c5.drink.team.route": {
      "id": "c5.drink.team.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "teamName",
              "equals": "dumpling"
            }
          ],
          "next": "c5.drink.team.dumpling"
        },
        {
          "all": [
            {
              "key": "teamName",
              "equals": "calm"
            }
          ],
          "next": "c5.drink.team.calm"
        }
      ],
      "fallback": "c5.drink.team.accident"
    },
    "c5.drink.team.dumpling": {
      "id": "c5.drink.team.dumpling",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В самом низу карточки ты выводишь подпись вашей вчерашней команды: «Пельмень и партнёры»."
        },
        {
          "speaker": "vlad",
          "text": "звучит гордо. вчера спасали виртуальную кухню, сегодня влияем на чайную карту города."
        }
      ],
      "next": "c5.drink.sky.route"
    },
    "c5.drink.team.calm": {
      "id": "c5.drink.team.calm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В самом низу карточки ты выводишь подпись вашей вчерашней команды: «Два спокойных человека»."
        },
        {
          "speaker": "vlad",
          "text": "два спокойных человека, которые за пять встреч успели пережить дождь, звёзды и кулинарный аврал."
        }
      ],
      "next": "c5.drink.sky.route"
    },
    "c5.drink.team.accident": {
      "id": "c5.drink.team.accident",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В самом низу карточки ты выводишь подпись вашей вчерашней команды: «Отдел случайных побед»."
        },
        {
          "speaker": "vlad",
          "text": "для отдела случайных побед мы с тобой подозрительно стабильно оказываемся за одним столиком."
        }
      ],
      "next": "c5.drink.sky.route"
    },
    "c5.drink.sky.route": {
      "id": "c5.drink.sky.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "constellation",
              "equals": "cat"
            }
          ],
          "next": "c5.drink.sky.cat"
        },
        {
          "all": [
            {
              "key": "constellation",
              "equals": "controllers"
            }
          ],
          "next": "c5.drink.sky.controllers"
        }
      ],
      "fallback": "c5.drink.sky.teapot"
    },
    "c5.drink.sky.cat": {
      "id": "c5.drink.sky.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В свободном углу карточки ты быстро дорисовываешь крошечный силуэт кота из вашего созвездия и кладёшь записку рядом с чашками."
        }
      ],
      "next": "c5.album.intro"
    },
    "c5.drink.sky.controllers": {
      "id": "c5.drink.sky.controllers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В свободном углу карточки ты дорисовываешь крошечный геймпад с вашего неба на набережной и кладёшь записку на край стола."
        }
      ],
      "next": "c5.album.intro"
    },
    "c5.drink.sky.teapot": {
      "id": "c5.drink.sky.teapot",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В свободном углу карточки ты дорисовываешь маленький пузатый чайник из вашего созвездия и кладёшь записку рядом с чашками."
        }
      ],
      "next": "c5.album.intro"
    },
    "c5.album.intro": {
      "id": "c5.album.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Нина забирает вашу записку к стойке и приглушает дальний свет в зале. За столиком у окна становится совсем спокойно."
        },
        {
          "speaker": "narrator",
          "text": "Влад освобождает середину стола и выкладывает небольшой альбом, три деревянных жетона с первой встречи и крафтовый конверт с набережной."
        },
        {
          "speaker": "vlad",
          "text": "ну вот. а теперь главная часть вечера. я носил этот конверт во внутреннем кармане с самой набережной."
        },
        {
          "speaker": "heroine",
          "text": "Пришло время рассекретить наши записи?"
        },
        {
          "speaker": "vlad",
          "text": "да. и собрать всё, что успело появиться у нас за эти пять дней."
        }
      ],
      "next": "c5.album"
    },
    "c5.album": {
      "id": "c5.album",
      "kind": "minigame",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "game": "memories",
      "next": "c5.letter"
    },
    "c5.letter": {
      "id": "c5.letter",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты распечатываешь крафтовый конверт. Внутри рядом с рисунком созвездия лежат два гладких деревянных жетона."
        },
        {
          "speaker": "narrator",
          "text": "Влад не отводит взгляда — в нём чувствуется сдержанное волнение, — переворачивает свой жетон надписью вверх и кладёт перед тобой."
        },
        {
          "speaker": "narrator",
          "text": "На светлом дереве его почерком, чуть неровно от того, что он писал на весу у реки, выведено: «ещё не один такой вечер»."
        },
        {
          "speaker": "narrator",
          "text": "Ты проводишь пальцем по буквам и поднимаешь глаза. Влад не отшучивается — смотрит прямо и очень серьёзно."
        },
        {
          "speaker": "heroine",
          "text": "Какое точное желание… без единого лишнего слова."
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "на дерево длинный текст не поместишь — пришлось оставить самую суть.",
          "variants": [
            {
              "when": [
                {
                  "key": "herTrust",
                  "equals": "careful"
                }
              ],
              "text": "ты тогда у воды сказала, что обычно долго присматриваешься и редко кого подпускаешь. для меня очень ценно, что ты дала нам эти пять вечеров."
            },
            {
              "when": [
                {
                  "key": "herTrust",
                  "equals": "intuition"
                }
              ],
              "text": "ты тогда у воды сказала, что сразу чувствуешь своего человека. кажется, со мной на том коврике у двери случилось ровно то же самое."
            },
            {
              "when": [
                {
                  "key": "herTrust",
                  "equals": "humor"
                }
              ],
              "text": "ты тогда у воды призналась, что за шутками обычно присматриваешься к человеку. надеюсь, за эти пять встреч твоя проверка пройдена."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Он открыто протягивает руку через стол и тепло накрывает твои пальцы рядом с деревянным жетоном. Пауза между вами становится весомой и очень честной."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "я ещё на набережной понял одну простую вещь — мне совсем не хочется, чтобы наши пять случайных встреч заканчивались на пятой."
        },
        {
          "speaker": "heroine",
          "text": "Мне тоже этого не хочется, Влад."
        }
      ],
      "next": "c5.close"
    },
    "c5.close": {
      "id": "c5.close",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Несколько секунд вы сидите молча, пока закат за окном переходит в сумерки."
        },
        {
          "speaker": "narrator",
          "text": "Затем ты закрываешь альбом, а Влад убирает оба жетона обратно в конверт и прячет его во внутренний карман пиджака."
        },
        {
          "speaker": "heroine",
          "text": "Нашу карточку для чая оставляем Нине?"
        },
        {
          "speaker": "vlad",
          "text": "конечно. пусть в «Паузе» теперь будет и наш общий рецепт."
        }
      ],
      "next": "c5.drink.echo.route"
    },
    "c5.drink.echo.route": {
      "id": "c5.drink.echo.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c5Recommendation",
              "equals": "vanilla"
            }
          ],
          "next": "c5.drink.echo.vanilla"
        },
        {
          "all": [
            {
              "key": "c5Recommendation",
              "equals": "fresh"
            }
          ],
          "next": "c5.drink.echo.fresh"
        }
      ],
      "fallback": "c5.drink.echo.both"
    },
    "c5.drink.echo.vanilla": {
      "id": "c5.drink.echo.vanilla",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Вашу карточку уже прикрепила над стойкой! Завтра сварю первую партию вашего ванильного чая."
        },
        {
          "speaker": "heroine",
          "text": "Значит, обязательно зайдём проверить, как он прижился в меню."
        }
      ],
      "next": "c5.exit"
    },
    "c5.drink.echo.fresh": {
      "id": "c5.drink.echo.fresh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Лимонную версию записала на завтрашний вечер, а про любимую ваниль Влада тоже запомнила!"
        },
        {
          "speaker": "vlad",
          "text": "спасибо, Нина. мы обязательно проверим обе."
        }
      ],
      "next": "c5.exit"
    },
    "c5.drink.echo.both": {
      "id": "c5.drink.echo.both",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile"
      },
      "lines": [
        {
          "speaker": "nina",
          "text": "Завтра устрою день двух вкусов по вашему совету — посмотрим, что гости разберут быстрее!"
        },
        {
          "speaker": "heroine",
          "text": "Тогда за нами ещё один визит за результатами."
        }
      ],
      "next": "c5.exit"
    },
    "c5.exit": {
      "id": "c5.exit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.elegant.smile",
        "variants": [
          {
            "when": [],
            "fromLine": 2,
            "background": "bg.cafe.exterior",
            "character": "vlad.elegant.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Спасибо за этот чудесный вечер, Нина. До свидания!"
        },
        {
          "speaker": "nina",
          "text": "Доброго вам вечера, ребята. Заходите почаще — Пончик и ваш столик у окна всегда вас ждут."
        },
        {
          "speaker": "narrator",
          "text": "Вы выходите из «Паузы» на вечернюю улицу. Колокольчик над дверью тихо звякает за спиной, на тротуаре уже зажглись фонари."
        },
        {
          "speaker": "heroine",
          "text": "Ну и как тебе наш пятый вечер?"
        },
        {
          "speaker": "vlad",
          "text": "кажется, это первый случай в моей жизни, когда рассыпанная у двери коробка привела к чему-то настолько хорошему."
        },
        {
          "speaker": "narrator",
          "text": "У привычной развилки, где пора расходиться в разные стороны, Влад не останавливается, а спокойно сворачивает на твою улицу."
        },
        {
          "speaker": "heroine",
          "text": "Подожди. Тебе ведь в другую сторону."
        },
        {
          "speaker": "vlad",
          "text": "до следующего угла мне совершенно точно по пути с тобой."
        },
        {
          "speaker": "narrator",
          "text": "Вы идёте медленно вдоль вечерних витрин, в одном шаге, изредка задевая друг друга тыльной стороной ладони — так легко, будто знаете друг друга уже давно."
        },
        {
          "speaker": "narrator",
          "text": "У твоего поворота вы останавливаетесь. Влад смотрит на тебя в свете фонаря без спешки — с тем самым чувством, что самое интересное между вами только начинается, а в конце улицы всё ещё светится окно «Паузы»."
        }
      ],
      "next": "c5.finish.story"
    },
    "c5.finish.story": {
      "id": "c5.finish.story",
      "kind": "end",
      "endingId": "c5.story",
      "cardId": "c5.story"
    }
  }
};
