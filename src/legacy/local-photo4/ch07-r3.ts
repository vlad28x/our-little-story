import type { Chapter } from '../../engine/types';
// R3: outputs/SEASON_02_R3_SCRIPT_*.md
export const chapter7:Chapter={
  "id": 7,
  "contentVersion": 12,
  "scriptRevision": 3,
  "title": "Между строк",
  "entry": "c7.r3.entry",
  "nodes": {
    "c7.r3.entry": {
      "id": "c7.r3.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад встречает тебя у входа в крытую галерею. Зонт он держит под мышкой, будто не до конца верит прогнозу."
        },
        {
          "speaker": "vlad",
          "text": "сегодня у меня даже есть место, которое я хотел показать."
        },
        {
          "speaker": "heroine",
          "text": "Уже прогресс."
        },
        {
          "speaker": "vlad",
          "text": "подожди с оценкой. я ещё ни разу не пытался выглядеть знатоком искусства."
        },
        {
          "speaker": "narrator",
          "text": "За стеклом начинают появляться дождевые полосы."
        },
        {
          "speaker": "vlad",
          "text": "зато крышу выбрал отлично."
        }
      ],
      "next": "c7.r3.past.route"
    },
    "c7.r3.past.route": {
      "id": "c7.r3.past.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Moment",
              "equals": "hug"
            }
          ],
          "next": "c7.r3.past.hug"
        },
        {
          "all": [
            {
              "key": "c6Ending",
              "equals": "hand"
            }
          ],
          "next": "c7.r3.past.hand"
        },
        {
          "all": [
            {
              "key": "c6Moment",
              "equals": "hand"
            }
          ],
          "next": "c7.r3.past.hand"
        }
      ],
      "fallback": "c7.r3.past.walk"
    },
    "c7.r3.past.hug": {
      "id": "c7.r3.past.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "сегодня опять придётся устраивать экскурсию или ты сразу скажешь, если захочешь обняться?"
        },
        {
          "speaker": "heroine",
          "text": "Ты теперь будешь это вспоминать?"
        },
        {
          "speaker": "vlad",
          "text": "да. мне понравилось."
        }
      ],
      "next": "c7.r3.painting"
    },
    "c7.r3.past.hand": {
      "id": "c7.r3.past.hand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "в прошлый раз ты очень убедительно взяла меня за руку."
        },
        {
          "speaker": "heroine",
          "text": "И?"
        },
        {
          "speaker": "vlad",
          "text": "я запомнил. сегодня тоже можно без длинных объяснений."
        }
      ],
      "next": "c7.r3.painting"
    },
    "c7.r3.past.walk": {
      "id": "c7.r3.past.walk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я ждал этой встречи. решил сразу сказать, пока опять не начал рассказывать про витрины."
        },
        {
          "speaker": "heroine",
          "text": "Так гораздо лучше."
        }
      ],
      "next": "c7.r3.painting"
    },
    "c7.r3.painting": {
      "id": "c7.r3.painting",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У первой стены Влад останавливается перед абстрактным изображением. Несколько светлых пятен и одна очень решительная линия."
        },
        {
          "speaker": "vlad",
          "text": "предлагаю не читать название. сначала дадим своё."
        }
      ],
      "next": "c7.r3.painting.choice"
    },
    "c7.r3.painting.choice": {
      "id": "c7.r3.painting.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Как назовём?",
      "choices": [
        {
          "id": "cat",
          "text": "Кот опрокинул чай",
          "next": "c7.r3.painting.cat"
        },
        {
          "id": "monday",
          "text": "Планы на понедельник",
          "next": "c7.r3.painting.monday"
        },
        {
          "id": "like",
          "text": "Мне вообще нравится. Без шуток",
          "next": "c7.r3.painting.like"
        }
      ]
    },
    "c7.r3.painting.cat": {
      "id": "c7.r3.painting.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "вижу. а линия — хозяин, который уже всё понял."
        },
        {
          "speaker": "heroine",
          "text": "Может, просто ложка."
        },
        {
          "speaker": "vlad",
          "text": "у тебя версия заметно добрее."
        }
      ],
      "next": "c7.r3.painting.after"
    },
    "c7.r3.painting.monday": {
      "id": "c7.r3.painting.monday",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "особенно этот кусок, который куда-то убежал."
        },
        {
          "speaker": "heroine",
          "text": "Это ты?"
        },
        {
          "speaker": "vlad",
          "text": "я хотя бы предупредил."
        }
      ],
      "next": "c7.r3.painting.after"
    },
    "c7.r3.painting.like": {
      "id": "c7.r3.painting.like",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда расскажи, куда ты первым делом посмотрела."
        },
        {
          "speaker": "heroine",
          "text": "На светлое пятно в углу."
        },
        {
          "speaker": "narrator",
          "text": "Влад отходит на полшага, чтобы взглянуть с твоей стороны."
        },
        {
          "speaker": "vlad",
          "text": "да. отсюда оно действительно собирает всё остальное."
        }
      ],
      "next": "c7.r3.painting.after"
    },
    "c7.r3.painting.after": {
      "id": "c7.r3.painting.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы читаете подпись: «После дождя»."
        },
        {
          "speaker": "vlad",
          "text": "получается, почти документальное кино про наш вечер."
        },
        {
          "speaker": "heroine",
          "text": "Пока мы ещё до."
        },
        {
          "speaker": "vlad",
          "text": "тем более не будем спешить."
        },
        {
          "speaker": "vlad",
          "text": "хочу спросить тебя кое о чём. только давай по очереди, иначе я удобно спрячусь за вопросами."
        },
        {
          "speaker": "heroine",
          "text": "Начинай."
        },
        {
          "speaker": "vlad",
          "text": "а после твоих ответов один рассказ с меня."
        }
      ],
      "next": "c7.r3.details"
    },
    "c7.r3.conversation": {
      "id": "c7.r3.conversation",
      "kind": "minigame",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "game": "between-lines",
      "next": "c7.r3.story.intro"
    },
    "c7.r3.story.intro": {
      "id": "c7.r3.story.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы доходите до свободной скамьи под окном. Влад показывает на неё."
        },
        {
          "speaker": "vlad",
          "text": "обещанный рассказ. выбирай, чем мне себя выдать."
        }
      ],
      "next": "c7.r3.story"
    },
    "c7.r3.story": {
      "id": "c7.r3.story",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "О чём пусть расскажет?",
      "choices": [
        {
          "id": "weekend",
          "text": "Твоим идеальным выходным",
          "next": "c7.r3.story.weekend",
          "effects": [
            {
              "kind": "set",
              "key": "c7Story",
              "value": "weekend"
            }
          ]
        },
        {
          "id": "awkward",
          "text": "Неловким моментом",
          "next": "c7.r3.story.awkward",
          "effects": [
            {
              "kind": "set",
              "key": "c7Story",
              "value": "awkward"
            }
          ]
        },
        {
          "id": "hobby",
          "text": "Чем ты увлекаешься до потери времени?",
          "next": "c7.r3.story.hobby",
          "effects": [
            {
              "kind": "set",
              "key": "c7Story",
              "value": "hobby"
            }
          ]
        }
      ]
    },
    "c7.r3.story.weekend": {
      "id": "c7.r3.story.weekend",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "медленный завтрак. потом обязательно решить, что сегодня всё успею."
        },
        {
          "speaker": "heroine",
          "text": "И успеть?"
        },
        {
          "speaker": "vlad",
          "text": "купить еды и отлично погулять. остальные планы переношу с уважением."
        },
        {
          "speaker": "heroine",
          "text": "А вечером?"
        },
        {
          "speaker": "vlad",
          "text": "компания, которой не надо придумывать развлечение каждую минуту."
        },
        {
          "speaker": "heroine",
          "text": "Звучит довольно хорошо."
        },
        {
          "speaker": "vlad",
          "text": "вот я тоже всё чаще так думаю."
        }
      ],
      "next": "c7.r3.story.after"
    },
    "c7.r3.story.awkward": {
      "id": "c7.r3.story.awkward",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "как-то искал телефон, разговаривая по нему."
        },
        {
          "speaker": "heroine",
          "text": "Скажи, что недолго."
        },
        {
          "speaker": "vlad",
          "text": "мне даже помогали искать."
        },
        {
          "speaker": "heroine",
          "text": "Не верю."
        },
        {
          "speaker": "vlad",
          "text": "веришь. по лицу вижу, что уже представляешь."
        },
        {
          "speaker": "heroine",
          "text": "Главное, нашли?"
        },
        {
          "speaker": "vlad",
          "text": "да. отношения с техникой восстановлены."
        }
      ],
      "next": "c7.r3.story.after"
    },
    "c7.r3.story.hobby": {
      "id": "c7.r3.story.hobby",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "иногда включаю игру на полчаса. потом оказывается, что я придумал очень гибкое определение получаса."
        },
        {
          "speaker": "heroine",
          "text": "Хорошая компания может отвлечь?"
        },
        {
          "speaker": "vlad",
          "text": "может. особенно если не начинает с «а теперь выключай»."
        },
        {
          "speaker": "heroine",
          "text": "А с чего?"
        },
        {
          "speaker": "vlad",
          "text": "с «покажи, что там у тебя»."
        }
      ],
      "next": "c7.r3.story.after"
    },
    "c7.r3.story.after": {
      "id": "c7.r3.story.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад уже не подбирает красивую формулировку."
        },
        {
          "speaker": "vlad",
          "text": "нравится, что с тобой можно иногда выглядеть совершенно обычным."
        },
        {
          "speaker": "heroine",
          "text": "А ты кем собирался?"
        },
        {
          "speaker": "vlad",
          "text": "загадочным. плохо подготовился."
        }
      ],
      "next": "c7.r3.ordinary"
    },
    "c7.r3.aside.route": {
      "id": "c7.r3.aside.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c7Story",
              "equals": "awkward"
            }
          ],
          "next": "c7.r3.aside.phone"
        }
      ],
      "fallback": "c7.r3.aside.other"
    },
    "c7.r3.aside.phone": {
      "id": "c7.r3.aside.phone",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "Кажется, загадочный человек только что рассказал про потерянный телефон."
        },
        {
          "speaker": "angel",
          "text": "Зато теперь понятно, с кем гуляешь."
        }
      ],
      "next": "c7.r3.aside.reply",
      "presentation": "adviser-aside"
    },
    "c7.r3.aside.other": {
      "id": "c7.r3.aside.other",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": "Кажется, загадочный человек перестал притворяться загадочным."
        },
        {
          "speaker": "angel",
          "text": "Зато теперь понятно, с кем гуляешь."
        }
      ],
      "next": "c7.r3.aside.reply",
      "presentation": "adviser-aside"
    },
    "c7.r3.aside.reply": {
      "id": "c7.r3.aside.reply",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Советчики опять выглядывают сбоку. Как ответишь им про себя?",
      "choices": [
        {
          "id": "hush",
          "text": "Оба помолчите. Сейчас я сама",
          "next": "c7.r3.aside.hush",
          "effects": [
            {
              "kind": "set",
              "key": "c7Aside",
              "value": "hush"
            }
          ]
        },
        {
          "id": "joke",
          "text": "Вам билеты на первый ряд выдали?",
          "next": "c7.r3.aside.joke",
          "effects": [
            {
              "kind": "set",
              "key": "c7Aside",
              "value": "joke"
            }
          ]
        },
        {
          "id": "ignore",
          "text": "Вернуться к Владу без ответа",
          "next": "c7.r3.moment.intro",
          "effects": [
            {
              "kind": "set",
              "key": "c7Aside",
              "value": "ignore"
            }
          ]
        }
      ]
    },
    "c7.r3.aside.hush": {
      "id": "c7.r3.aside.hush",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": "Оба помолчите. Сейчас я сама."
        },
        {
          "speaker": "devil",
          "text": "Всё, нас выгоняют. Ухожу красиво."
        },
        {
          "speaker": "narrator",
          "text": "Закладки с нимбом и рожками складываются и исчезают с края кадра."
        }
      ],
      "next": "c7.r3.moment.intro",
      "presentation": "adviser-aside"
    },
    "c7.r3.aside.joke": {
      "id": "c7.r3.aside.joke",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": "Вам билеты на первый ряд выдали?"
        },
        {
          "speaker": "angel",
          "text": "Уже возвращаем."
        },
        {
          "speaker": "devil",
          "text": "Даже попкорн взять не успел."
        }
      ],
      "next": "c7.r3.moment.intro",
      "presentation": "adviser-aside"
    },
    "c7.r3.moment.intro": {
      "id": "c7.r3.moment.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У окна становится прохладнее. Влад отходит от стекла и оставляет место рядом."
        },
        {
          "speaker": "vlad",
          "text": "здесь меньше дует. встанешь со мной?"
        }
      ],
      "next": "c7.r3.gesture"
    },
    "c7.r3.gesture": {
      "id": "c7.r3.gesture",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Как продолжим?",
      "choices": [
        {
          "id": "near",
          "text": "Да. Подвинься немножко",
          "next": "c7.r3.gesture.near",
          "effects": [
            {
              "kind": "set",
              "key": "c7Moment",
              "value": "near"
            }
          ]
        },
        {
          "id": "collar",
          "text": "Сначала дай поправить тебе воротник",
          "next": "c7.r3.gesture.collar",
          "effects": [
            {
              "kind": "set",
              "key": "c7Moment",
              "value": "collar"
            }
          ]
        },
        {
          "id": "cheek",
          "text": "Наклонись. Хочу поцеловать тебя в щёку",
          "next": "c7.r3.gesture.cheek",
          "effects": [
            {
              "kind": "set",
              "key": "c7Moment",
              "value": "cheek"
            }
          ]
        },
        {
          "id": "space",
          "text": "Я пока досмотрю эту картину",
          "next": "c7.r3.gesture.space",
          "effects": [
            {
              "kind": "set",
              "key": "c7Moment",
              "value": "space"
            }
          ]
        }
      ]
    },
    "c7.r3.gesture.collar": {
      "id": "c7.r3.gesture.collar",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Стой. Я поправлю тебе воротник."
        },
        {
          "speaker": "narrator",
          "text": "Влад чуть наклоняется. Ты расправляешь край воротника и убираешь руку. Он начинает что-то говорить, но вместо этого улыбается."
        },
        {
          "speaker": "vlad",
          "text": "кажется, я сейчас скажу что-нибудь совершенно простое. мне очень нравится, когда ты рядом."
        }
      ],
      "next": "c7.r3.flustered"
    },
    "c7.r3.gesture.cheek": {
      "id": "c7.r3.gesture.cheek",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Наклонись. Я хочу поцеловать тебя в щёку."
        },
        {
          "speaker": "vlad",
          "text": "с удовольствием."
        },
        {
          "speaker": "narrator",
          "text": "Он наклоняется, и ты коротко целуешь его в щёку. Выпрямившись, Влад улыбается и не сразу продолжает разговор."
        },
        {
          "speaker": "vlad",
          "text": "у меня была очень хорошая реплика. теперь не вспомню.",
          "emotion": "awkward"
        }
      ],
      "next": "c7.r3.flustered"
    },
    "c7.r3.flustered": {
      "id": "c7.r3.flustered",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Влад на секунду растерялся. Как ответишь?",
      "choices": [
        {
          "id": "kind",
          "text": "Мне нравится, когда ты говоришь вот так. Без заготовок",
          "next": "c7.r3.flustered.kind",
          "effects": [
            {
              "kind": "set",
              "key": "c7Reply",
              "value": "kind"
            }
          ]
        },
        {
          "id": "hand",
          "text": "Протянуть ему руку: «Я тоже рада быть рядом»",
          "next": "c7.r3.flustered.hand",
          "effects": [
            {
              "kind": "set",
              "key": "c7Reply",
              "value": "hand"
            }
          ]
        },
        {
          "id": "pause",
          "text": "Улыбнуться и дать ему договорить",
          "next": "c7.r3.flustered.pause",
          "effects": [
            {
              "kind": "set",
              "key": "c7Reply",
              "value": "pause"
            }
          ]
        }
      ]
    },
    "c7.r3.flustered.kind": {
      "id": "c7.r3.flustered.kind",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Мне нравится, когда ты говоришь вот так. Без заготовок."
        },
        {
          "speaker": "vlad",
          "text": "тогда скажу ещё одну простую вещь. я очень ждал сегодняшний вечер."
        },
        {
          "speaker": "narrator",
          "text": "Он больше не пытается закончить признание шуткой."
        }
      ],
      "next": "c7.r3.rain"
    },
    "c7.r3.flustered.hand": {
      "id": "c7.r3.flustered.hand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты протягиваешь ладонь. Влад берёт тебя за руку."
        },
        {
          "speaker": "heroine",
          "text": "Я тоже рада быть рядом."
        },
        {
          "speaker": "vlad",
          "text": "тогда можно я ещё немного постою здесь с тобой?"
        },
        {
          "speaker": "heroine",
          "text": "Можно."
        },
        {
          "speaker": "narrator",
          "text": "Вы ненадолго замолкаете, держась за руки."
        }
      ],
      "next": "c7.r3.rain"
    },
    "c7.r3.flustered.pause": {
      "id": "c7.r3.flustered.pause",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты улыбаешься и остаёшься на месте. Влад не спешит заполнять паузу."
        },
        {
          "speaker": "vlad",
          "text": "я хотел сказать, что мне с тобой хорошо. вот. теперь договорил."
        },
        {
          "speaker": "narrator",
          "text": "За стеклом всё ещё идёт дождь."
        }
      ],
      "next": "c7.r3.rain"
    },
    "c7.r3.gesture.near": {
      "id": "c7.r3.gesture.near",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад освобождает место, и ты встаёшь рядом."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь мы хотя бы смотрим на дождь с одной стороны."
        },
        {
          "speaker": "narrator",
          "text": "Влад начинает фразу и останавливается, улыбнувшись."
        },
        {
          "speaker": "vlad",
          "text": "я хотел что-то остроумное сказать. но мне просто хорошо рядом с тобой."
        }
      ],
      "next": "c7.r3.flustered"
    },
    "c7.r3.gesture.space": {
      "id": "c7.r3.gesture.space",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "хорошо. я тоже вернусь к своему спору с этой линией."
        },
        {
          "speaker": "heroine",
          "text": "Может, всё-таки ложка?"
        },
        {
          "speaker": "vlad",
          "text": "ладно, я готов обсудить."
        },
        {
          "speaker": "narrator",
          "text": "Вы проходите дальше вдоль стены и находите картину с очень маленьким деревом."
        },
        {
          "speaker": "heroine",
          "text": "Вот этому названию я поверю."
        },
        {
          "speaker": "vlad",
          "text": "«дерево»?"
        },
        {
          "speaker": "heroine",
          "text": "Почти. «Маленькое дерево»."
        },
        {
          "speaker": "vlad",
          "text": "наконец-то автор, с которым легко договориться."
        }
      ],
      "next": "c7.r3.rain"
    },
    "c7.r3.rain": {
      "id": "c7.r3.rain",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Дождь становится тише. Влад замечает это первым, но не берётся за зонт."
        },
        {
          "speaker": "vlad",
          "text": "ещё немного здесь или проверим, насколько он закончился?"
        }
      ],
      "next": "c7.r3.rain.choice"
    },
    "c7.r3.rain.choice": {
      "id": "c7.r3.rain.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Чем займёмся?",
      "choices": [
        {
          "id": "sit",
          "text": "Давай ещё посидим",
          "next": "c7.r3.rain.sit",
          "effects": [
            {
              "kind": "set",
              "key": "c7Rain",
              "value": "sit"
            }
          ]
        },
        {
          "id": "out",
          "text": "Пойдём. Зонт же не зря носил",
          "next": "c7.r3.rain.out",
          "effects": [
            {
              "kind": "set",
              "key": "c7Rain",
              "value": "out"
            }
          ]
        },
        {
          "id": "art",
          "text": "Покажи свою любимую картину",
          "next": "c7.r3.rain.art",
          "effects": [
            {
              "kind": "set",
              "key": "c7Rain",
              "value": "art"
            }
          ]
        }
      ]
    },
    "c7.r3.rain.sit": {
      "id": "c7.r3.rain.sit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь на скамью. Влад садится рядом, не меняя выбранную дистанцию."
        },
        {
          "speaker": "vlad",
          "text": "я раньше думал, что в хороший вечер обязательно должно что-нибудь случиться."
        },
        {
          "speaker": "heroine",
          "text": "А сейчас?"
        },
        {
          "speaker": "vlad",
          "text": "сейчас мне нравится даже ждать, пока перестанет капать."
        },
        {
          "speaker": "heroine",
          "text": "Галерея помогает."
        },
        {
          "speaker": "vlad",
          "text": "ты тоже."
        }
      ],
      "next": "c7.r3.note"
    },
    "c7.r3.rain.out": {
      "id": "c7.r3.rain.out",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У входа Влад раскрывает зонт и проверяет, не задевает ли ткань дверной косяк."
        },
        {
          "speaker": "vlad",
          "text": "идём. у меня есть несколько метров очень убедительной крыши."
        },
        {
          "speaker": "heroine",
          "text": "Только не обещай сухую погоду."
        },
        {
          "speaker": "vlad",
          "text": "обещаю смотреть, куда ставлю ноги."
        },
        {
          "speaker": "narrator",
          "text": "На улице вы замедляетесь у лужи и выбираете дорогу под навесом."
        }
      ],
      "next": "c7.r3.note"
    },
    "c7.r3.rain.art": {
      "id": "c7.r3.rain.art",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад ведёт тебя обратно к первой стене."
        },
        {
          "speaker": "heroine",
          "text": "Серьёзно? К первой?"
        },
        {
          "speaker": "vlad",
          "text": "да. до тебя это была просто картина."
        },
        {
          "speaker": "heroine",
          "text": "Значит, я испортила тебе искусство."
        },
        {
          "speaker": "vlad",
          "text": "добавила сюжет. мне так интереснее."
        }
      ],
      "next": "c7.r3.note"
    },
    "c7.r3.note": {
      "id": "c7.r3.note",
      "kind": "note",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "questionId": "s2.r3.q7",
      "maxCodePoints": 280,
      "prompt": "Что тебе было бы интересно узнать обо мне за чашкой чая?",
      "context": "Осталось несколько тем, которые не успели обсудить.",
      "answerOptions": [
        {
          "id": "preset.1",
          "kind": "preset",
          "text": "Как выглядит твой обычный выходной, когда никуда не надо."
        },
        {
          "id": "preset.2",
          "kind": "preset",
          "text": "О чём ты можешь говорить дольше, чем собирался."
        },
        {
          "id": "custom",
          "kind": "custom",
          "text": "Своими словами ✎"
        }
      ],
      "placeholder": "Мне бы хотелось…",
      "submitLabel": "Сохранить ответ",
      "skipLabel": "Пропустить",
      "next": "c7.r3.exit.route"
    },
    "c7.r3.exit.route": {
      "id": "c7.r3.exit.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c7Rain",
              "equals": "out"
            }
          ],
          "next": "c7.r3.exit.out"
        }
      ],
      "fallback": "c7.r3.exit.inside"
    },
    "c7.r3.exit.out": {
      "id": "c7.r3.exit.out",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У перекрёстка дождь почти заканчивается."
        }
      ],
      "next": "c7.r3.closing"
    },
    "c7.r3.exit.inside": {
      "id": "c7.r3.exit.inside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У выхода вы видите, что дождь почти закончился."
        }
      ],
      "next": "c7.r3.closing"
    },
    "c7.r3.closing": {
      "id": "c7.r3.closing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "в следующий раз позову на чай. хочу продолжить этот разговор."
        },
        {
          "speaker": "heroine",
          "text": "С программой?"
        },
        {
          "speaker": "vlad",
          "text": "с десертом. он полезнее."
        }
      ],
      "next": "c7.r3.ending"
    },
    "c7.r3.ending": {
      "id": "c7.r3.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Что ответишь?",
      "choices": [
        {
          "id": "open",
          "text": "Позови. Я хочу провести с тобой ещё вечер",
          "next": "c7.r3.finish.open",
          "effects": [
            {
              "kind": "set",
              "key": "c7Ending",
              "value": "open"
            }
          ]
        },
        {
          "id": "promise",
          "text": "Только я выберу, над чем мы будем спорить",
          "next": "c7.r3.finish.promise",
          "effects": [
            {
              "kind": "set",
              "key": "c7Ending",
              "value": "promise"
            }
          ]
        },
        {
          "id": "calm",
          "text": "Хорошая идея. Давай договоримся потом",
          "next": "c7.r3.finish.calm",
          "effects": [
            {
              "kind": "set",
              "key": "c7Ending",
              "value": "calm"
            }
          ]
        }
      ]
    },
    "c7.r3.finish.open": {
      "id": "c7.r3.finish.open",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда договорились. я тоже хочу."
        },
        {
          "speaker": "narrator",
          "text": "Он смотрит на тебя уже без заготовленной шутки."
        }
      ],
      "next": "c7.r3.end.open"
    },
    "c7.r3.end.open": {
      "id": "c7.r3.end.open",
      "kind": "end",
      "cardId": "c7.open",
      "endingId": "c7.open"
    },
    "c7.r3.finish.promise": {
      "id": "c7.r3.finish.promise",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "принимается. но за десерт я поборюсь."
        },
        {
          "speaker": "heroine",
          "text": "Посмотрим."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь точно жду."
        }
      ],
      "next": "c7.r3.end.promise"
    },
    "c7.r3.end.promise": {
      "id": "c7.r3.end.promise",
      "kind": "end",
      "cardId": "c7.promise",
      "endingId": "c7.promise"
    },
    "c7.r3.finish.calm": {
      "id": "c7.r3.finish.calm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "давай. сегодня мне тоже было хорошо."
        },
        {
          "speaker": "heroine",
          "text": "Даже без сложного плана?"
        },
        {
          "speaker": "vlad",
          "text": "особенно."
        }
      ],
      "next": "c7.r3.end.calm"
    },
    "c7.r3.end.calm": {
      "id": "c7.r3.end.calm",
      "kind": "end",
      "cardId": "c7.calm",
      "endingId": "c7.calm"
    },
    "c7.r3.details": {
      "id": "c7.r3.details",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У следующей стены стоит небольшой деревянный макет лодки. Рядом — фотография той же лодки на воде."
        },
        {
          "speaker": "vlad",
          "text": "вот здесь у меня хотя бы есть шанс понять, что изображено."
        },
        {
          "speaker": "heroine",
          "text": "Не начинай слишком уверенно."
        },
        {
          "speaker": "narrator",
          "text": "На фотографии лодка кажется почти настоящей. На подставке помещается в две ладони."
        },
        {
          "speaker": "vlad",
          "text": "интересно, сколько раз автор уходил с ней к реке, пока получилось так снять."
        },
        {
          "speaker": "heroine",
          "text": "Или просто нашёл нужную лужу."
        },
        {
          "speaker": "vlad",
          "text": "ещё лучше. большая история с маленьким бюджетом."
        },
        {
          "speaker": "narrator",
          "text": "Вы рассматриваете края фотографии. Влад наклоняется, чтобы прочитать подпись, и потом выпрямляется."
        },
        {
          "speaker": "vlad",
          "text": "снято во дворе после дождя."
        },
        {
          "speaker": "heroine",
          "text": "Почти угадала."
        },
        {
          "speaker": "vlad",
          "text": "да. сегодня лучше доверю тебе объяснять экспонаты."
        },
        {
          "speaker": "heroine",
          "text": "Я тоже просто придумываю."
        },
        {
          "speaker": "vlad",
          "text": "но у тебя иногда получается правда."
        },
        {
          "speaker": "narrator",
          "text": "На деревянном борту видна маленькая неровность. Влад показывает на неё, не касаясь макета."
        },
        {
          "speaker": "vlad",
          "text": "смотри, её даже не стали скрывать."
        },
        {
          "speaker": "heroine",
          "text": "Может, оставили специально."
        },
        {
          "speaker": "vlad",
          "text": "мне нравится. видно, что кто-то это действительно делал руками."
        },
        {
          "speaker": "heroine",
          "text": "А ты бы оставил?"
        },
        {
          "speaker": "vlad",
          "text": "сначала долго пытался бы исправить. потом, надеюсь, всё-таки остановился."
        },
        {
          "speaker": "heroine",
          "text": "Иначе до фотографии не дошло бы."
        },
        {
          "speaker": "vlad",
          "text": "именно. у меня дома было бы очень тщательно недоделанное судно."
        },
        {
          "speaker": "narrator",
          "text": "Вы отходите, чтобы дать другим людям посмотреть макет."
        },
        {
          "speaker": "vlad",
          "text": "хорошо, что можно просто смотреть и обсуждать, а не делать вид, что обязательно разбираешься."
        },
        {
          "speaker": "heroine",
          "text": "Ты перестал пытаться довольно быстро."
        },
        {
          "speaker": "vlad",
          "text": "рядом с тобой было трудно поддерживать легенду."
        },
        {
          "speaker": "heroine",
          "text": "Это комплимент?"
        },
        {
          "speaker": "vlad",
          "text": "да. немного неуклюжий, но уже готовый."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается и показывает на следующую фотографию."
        },
        {
          "speaker": "vlad",
          "text": "давай и эту сначала без подписи."
        }
      ],
      "next": "c7.r3.details.choice"
    },
    "c7.r3.details.choice": {
      "id": "c7.r3.details.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "На что смотришь первым делом?",
      "choices": [
        {
          "id": "detail",
          "text": "На маленькую деталь, которую легко пропустить",
          "next": "c7.r3.details.detail"
        },
        {
          "id": "whole",
          "text": "Сначала на всё целиком",
          "next": "c7.r3.details.whole"
        },
        {
          "id": "him",
          "text": "На тебя. Ты смешно пытаешься не читать подпись",
          "next": "c7.r3.details.him"
        }
      ]
    },
    "c7.r3.details.detail": {
      "id": "c7.r3.details.detail",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда я пока не буду отвлекать."
        },
        {
          "speaker": "narrator",
          "text": "Вы рассматриваете снимок ещё несколько секунд."
        },
        {
          "speaker": "heroine",
          "text": "Видишь отражение в окне?"
        },
        {
          "speaker": "vlad",
          "text": "теперь вижу. а сначала вообще смотрел на дверь."
        },
        {
          "speaker": "heroine",
          "text": "Поэтому вдвоём интереснее."
        },
        {
          "speaker": "vlad",
          "text": "согласен. у фотографии внезапно стало больше содержимого."
        }
      ],
      "next": "c7.r3.conversation"
    },
    "c7.r3.details.whole": {
      "id": "c7.r3.details.whole",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "я тоже попробую не разбирать её сразу на части."
        },
        {
          "speaker": "narrator",
          "text": "Вы отходите на полшага."
        },
        {
          "speaker": "heroine",
          "text": "Так ведь совсем другое впечатление."
        },
        {
          "speaker": "vlad",
          "text": "да. и название пока даже не нужно."
        },
        {
          "speaker": "heroine",
          "text": "Оказывается, можно просто смотреть."
        },
        {
          "speaker": "vlad",
          "text": "запишу в свои редкие открытия на сегодня."
        }
      ],
      "next": "c7.r3.conversation"
    },
    "c7.r3.details.him": {
      "id": "c7.r3.details.him",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Влад убирает взгляд с таблички и смеётся."
        },
        {
          "speaker": "vlad",
          "text": "поймала. я хотел сначала подготовиться."
        },
        {
          "speaker": "heroine",
          "text": "Мы же договорились без проверки знаний."
        },
        {
          "speaker": "vlad",
          "text": "знаю. привычка."
        },
        {
          "speaker": "narrator",
          "text": "Он поворачивается обратно к фотографии, оставляя табличку непрочитанной."
        },
        {
          "speaker": "vlad",
          "text": "всё. теперь честно вместе смотрим."
        }
      ],
      "next": "c7.r3.conversation"
    },
    "c7.r3.ordinary": {
      "id": "c7.r3.ordinary",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У окна есть маленькая полка с буклетами. Влад берёт один и разворачивает слишком большую схему залов."
        },
        {
          "speaker": "vlad",
          "text": "вот теперь понятно, почему мы три раза прошли мимо одного окна."
        },
        {
          "speaker": "heroine",
          "text": "Ты всё-таки проверил маршрут."
        },
        {
          "speaker": "vlad",
          "text": "только чтобы красиво признать, что маршрута не было."
        },
        {
          "speaker": "narrator",
          "text": "Он складывает бумагу, но один угол всё время выворачивается обратно."
        },
        {
          "speaker": "heroine",
          "text": "Дай, попробую."
        },
        {
          "speaker": "narrator",
          "text": "Вы вдвоём находите линию сгиба и возвращаете схеме удобный размер."
        },
        {
          "speaker": "vlad",
          "text": "отличная команда. справились с бумажным прямоугольником."
        },
        {
          "speaker": "heroine",
          "text": "Не всем дано."
        },
        {
          "speaker": "vlad",
          "text": "особенно после попытки казаться загадочным."
        },
        {
          "speaker": "narrator",
          "text": "Бумагу он возвращает на полку, не забирая лишний буклет."
        },
        {
          "speaker": "vlad",
          "text": "а тебе нравится возвращаться в одно и то же место?"
        },
        {
          "speaker": "heroine",
          "text": "Смотря зачем."
        },
        {
          "speaker": "vlad",
          "text": "я иногда возвращаюсь просто проверить, что оно всё ещё такое же."
        },
        {
          "speaker": "heroine",
          "text": "И обычно такое же?"
        },
        {
          "speaker": "vlad",
          "text": "место — да. а вечер уже другой."
        },
        {
          "speaker": "narrator",
          "text": "За стеклом кто-то торопится под зонтом; здесь шагов почти не слышно."
        },
        {
          "speaker": "vlad",
          "text": "вот сюда уже можно было бы вернуться просто ради этого окна."
        },
        {
          "speaker": "heroine",
          "text": "Даже если выставку поменяют?"
        },
        {
          "speaker": "vlad",
          "text": "тогда у нас появятся новые неправильные названия."
        },
        {
          "speaker": "heroine",
          "text": "И лодки может не быть."
        },
        {
          "speaker": "vlad",
          "text": "жалко. но можно будет спросить, куда она уплыла."
        },
        {
          "speaker": "narrator",
          "text": "Влад делает паузу, будто сам проверяет, насколько глупо это прозвучало."
        },
        {
          "speaker": "heroine",
          "text": "Вот сейчас не надо ничего спасать."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. оставлю как получилось."
        },
        {
          "speaker": "narrator",
          "text": "Несколько секунд вы просто смотрите на дождь."
        },
        {
          "speaker": "vlad",
          "text": "мне понравилось, что ты спросила про обычную жизнь."
        },
        {
          "speaker": "heroine",
          "text": "Почему?"
        },
        {
          "speaker": "vlad",
          "text": "про красивую историю легко рассказывать. обычные мелочи почему-то больше выдают."
        },
        {
          "speaker": "heroine",
          "text": "Но сегодня ты справился."
        },
        {
          "speaker": "vlad",
          "text": "с бумагой — точно. остальное ещё подумаю."
        }
      ],
      "next": "c7.r3.ordinary.choice"
    },
    "c7.r3.ordinary.choice": {
      "id": "c7.r3.ordinary.choice",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "prompt": "Какой следующий повод встретиться тебе ближе?",
      "choices": [
        {
          "id": "walk",
          "text": "Показать друг другу любимое место в городе",
          "next": "c7.r3.ordinary.walk"
        },
        {
          "id": "home",
          "text": "Просто провести обычный вечер",
          "next": "c7.r3.ordinary.home"
        },
        {
          "id": "surprise",
          "text": "Каждый придумает по одному маленькому занятию",
          "next": "c7.r3.ordinary.surprise"
        }
      ]
    },
    "c7.r3.ordinary.walk": {
      "id": "c7.r3.ordinary.walk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "это мне нравится. только необязательно самое красивое."
        },
        {
          "speaker": "heroine",
          "text": "А какое?"
        },
        {
          "speaker": "vlad",
          "text": "куда самой хочется возвращаться."
        },
        {
          "speaker": "heroine",
          "text": "Можно без памятников и экскурсий."
        },
        {
          "speaker": "vlad",
          "text": "даже лучше. хочу узнать твою версию города."
        }
      ],
      "next": "c7.r3.aside.route"
    },
    "c7.r3.ordinary.home": {
      "id": "c7.r3.ordinary.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "тогда с меня чай и возможность ничего не объяснять."
        },
        {
          "speaker": "heroine",
          "text": "Ты только что объяснил план."
        },
        {
          "speaker": "vlad",
          "text": "это последнее. дальше буду показывать."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается и уже не добавляет ещё один пункт."
        },
        {
          "speaker": "heroine",
          "text": "Звучит хорошо."
        },
        {
          "speaker": "vlad",
          "text": "мне тоже нравится, как просто получилось."
        }
      ],
      "next": "c7.r3.aside.route"
    },
    "c7.r3.ordinary.surprise": {
      "id": "c7.r3.ordinary.surprise",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "договорились. сначала твоё или моё?"
        },
        {
          "speaker": "heroine",
          "text": "Решим на месте."
        },
        {
          "speaker": "vlad",
          "text": "хорошо. теперь главное не подготовить вместо одного сразу семь."
        },
        {
          "speaker": "heroine",
          "text": "Начни с одного."
        },
        {
          "speaker": "vlad",
          "text": "вот за это и ценю разумные ограничения."
        }
      ],
      "next": "c7.r3.aside.route"
    }
  }
};
