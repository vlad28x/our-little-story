import type {Chapter} from '../../engine/types';
// Exact text: outputs/CHAPTER_06_WALK_SCRIPT_2026_11_04.md
export const chapter6:Chapter={
  "id": 6,
  "contentVersion": 16,
  "scriptRevision": 5,
  "title": "Пока светло",
  "entry": "c6.photo.entry",
  "nodes": {
    "c6.photo.entry": {
      "id": "c6.photo.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.sun",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Прошло несколько дней."
        },
        {
          "speaker": "narrator",
          "text": "У входа на набережную Влад замечает тебя и отходит от перил."
        },
        {
          "speaker": "vlad",
          "text": "привет. рад тебя видеть."
        },
        {
          "speaker": "heroine",
          "text": "Привет. Вдоль воды пойдём?"
        },
        {
          "speaker": "vlad",
          "text": "пойдём. там ещё солнце."
        },
        {
          "speaker": "narrator",
          "text": "Вы выходите на нижнюю дорожку. Влад уже миновал лестницу, когда ты останавливаешься у воды."
        }
      ],
      "next": "c6.photo.light"
    },
    "c6.photo.light": {
      "id": "c6.photo.light",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.sun",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "В воде дрожит золотой прямоугольник — отражение стены на противоположном берегу."
        },
        {
          "speaker": "heroine",
          "text": "Подожди. Смотри, будто окно прямо в воде."
        },
        {
          "speaker": "narrator",
          "text": "Влад возвращается на шаг и смотрит туда, куда ты показываешь."
        },
        {
          "speaker": "vlad",
          "text": "вижу. только ручку не приделали."
        },
        {
          "speaker": "heroine",
          "text": "Ты уже собрался открывать?"
        },
        {
          "speaker": "vlad",
          "text": "сначала постучать. вдруг занято."
        },
        {
          "speaker": "narrator",
          "text": "По отражению проходит мелкая рябь. Ты достаёшь телефон, но отвлекаешься на витрину киоска у лестницы."
        },
        {
          "speaker": "heroine",
          "text": "Там фотоаппараты? Те, которые с плёнкой?"
        },
        {
          "speaker": "vlad",
          "text": "похоже. одноразовые."
        },
        {
          "speaker": "heroine",
          "text": "Давай возьмём один на двоих."
        },
        {
          "speaker": "vlad",
          "text": "давай. это отражение будет первым?"
        },
        {
          "speaker": "heroine",
          "text": "Если успеем."
        }
      ],
      "next": "c6.photo.purchase"
    },
    "c6.photo.purchase": {
      "id": "c6.photo.purchase",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.sun",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы складываетесь на один аппарат. Влад снимает упаковку, а ты разворачиваешь маленький листок инструкции.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "loaded"
            },
            {
              "kind": "set",
              "key": "c6CameraHolder",
              "value": "vlad"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Двадцать семь кадров."
        },
        {
          "speaker": "vlad",
          "text": "и ни одного экрана. я уже почти потянулся посмотреть, что там."
        },
        {
          "speaker": "heroine",
          "text": "Вот это мне и нравится. С телефоном я бы сейчас сделала десять одинаковых и выбирала."
        },
        {
          "speaker": "vlad",
          "text": "а тут выберешь один и будешь ходить довольная до проявки."
        },
        {
          "speaker": "heroine",
          "text": "Почему сразу довольная?"
        },
        {
          "speaker": "vlad",
          "text": "пока не доказано обратное."
        },
        {
          "speaker": "narrator",
          "text": "Ты складываешь инструкцию в сумку. Влад поворачивает колёсико до упора и передаёт тебе аппарат, держась за боковые стороны.",
          "effects": [
            {
              "kind": "set",
              "key": "c6CameraHolder",
              "value": "her"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "готов. идём за твоим окном."
        }
      ],
      "next": "c6.photo.missed"
    },
    "c6.photo.missed": {
      "id": "c6.photo.missed",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь к перилам. Стена на другом берегу уже в тени. Вместо золотого прямоугольника по воде тянется серая полоса."
        },
        {
          "speaker": "heroine",
          "text": "Всё. Закрылось."
        },
        {
          "speaker": "vlad",
          "text": "даже без таблички с расписанием."
        },
        {
          "speaker": "narrator",
          "text": "Ты проверяешь отражение чуть левее. Влад отходит вправо, заглядывает за выступ перил и возвращается."
        },
        {
          "speaker": "vlad",
          "text": "отсюда тоже нет. наверху ещё светлые крыши. можно подняться."
        },
        {
          "speaker": "heroine",
          "text": "Или остаться здесь. В воде уже другое получается."
        },
        {
          "speaker": "angel",
          "text": "Внизу теперь видна лестница."
        },
        {
          "speaker": "devil",
          "text": "А наверху ещё можно догнать солнце. Я за погоню."
        }
      ],
      "next": "c6.photo.place",
      "presentation": "adviser-aside"
    },
    "c6.photo.place": {
      "id": "c6.photo.place",
      "kind": "choice",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile"
      },
      "prompt": "Где найдём новый кадр?",
      "choices": [
        {
          "id": "upper",
          "text": "Поднимемся. Хочу поймать оставшийся свет",
          "next": "c6.photo.upper",
          "effects": [
            {
              "kind": "set",
              "key": "c6PhotoPlace",
              "value": "upper"
            }
          ]
        },
        {
          "id": "water",
          "text": "Останемся у воды. Поищем отражение",
          "next": "c6.photo.water",
          "effects": [
            {
              "kind": "set",
              "key": "c6PhotoPlace",
              "value": "water"
            }
          ]
        }
      ]
    },
    "c6.photo.upper": {
      "id": "c6.photo.upper",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [],
            "fromLine": 2,
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Поднимемся. Хочу поймать оставшийся свет."
        },
        {
          "speaker": "narrator",
          "text": "Ты идёшь к лестнице. Влад придерживает лёгкую калитку у её начала, пока ты проходишь."
        },
        {
          "speaker": "narrator",
          "text": "Наверху вода почти скрывается за перилами. Зато над крышами остаётся широкая светлая полоса неба."
        },
        {
          "speaker": "vlad",
          "text": "здесь лучше. только вывеска лезет прямо в середину."
        },
        {
          "speaker": "narrator",
          "text": "Он встаёт напротив перил. Ты смотришь в видоискатель и делаешь два шага в сторону."
        },
        {
          "speaker": "heroine",
          "text": "А если отсюда?"
        },
        {
          "speaker": "vlad",
          "text": "вывеска ушла?"
        },
        {
          "speaker": "heroine",
          "text": "Да. Теперь у тебя из головы торчит фонарь."
        },
        {
          "speaker": "narrator",
          "text": "Влад смещается на шаг. Фонарь остаётся позади его плеча."
        },
        {
          "speaker": "vlad",
          "text": "так я хотя бы отдельно от освещения?"
        },
        {
          "speaker": "heroine",
          "text": "Теперь отдельно."
        },
        {
          "speaker": "narrator",
          "text": "Ты опускаешь аппарат. С этого места можно снять Влада у перил, силуэт на фоне неба или сами крыши."
        }
      ],
      "next": "c6.photo.subject"
    },
    "c6.photo.water": {
      "id": "c6.photo.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Останемся у воды. Поищем отражение."
        },
        {
          "speaker": "narrator",
          "text": "Вы проходите вдоль перил до широкого просвета. В воде отражаются лестница и тонкая полоска неба."
        },
        {
          "speaker": "narrator",
          "text": "Влад останавливается сбоку, чтобы не перекрывать тебе вид. Ты поворачиваешь аппарат вертикально."
        },
        {
          "speaker": "heroine",
          "text": "Здесь лестница идёт прямо вниз, а в воде — куда-то вбок."
        },
        {
          "speaker": "vlad",
          "text": "можно спуститься и сразу передумать."
        },
        {
          "speaker": "heroine",
          "text": "Посмотри отсюда."
        },
        {
          "speaker": "narrator",
          "text": "Ты показываешь место и передаёшь ему аппарат. Влад смотрит в видоискатель, не нажимая кнопку.",
          "effects": [
            {
              "kind": "set",
              "key": "c6CameraHolder",
              "value": "vlad"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "а если убрать верхний край, вообще непонятно, где вода."
        },
        {
          "speaker": "heroine",
          "text": "Вот. Оставим только то, что отражается."
        },
        {
          "speaker": "narrator",
          "text": "Он возвращает аппарат. По воде проходит рябь, и прямые линии ненадолго складываются в зигзаг.",
          "effects": [
            {
              "kind": "set",
              "key": "c6CameraHolder",
              "value": "her"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "сейчас ещё чуть-чуть подождать — лестница сама себя завяжет."
        },
        {
          "speaker": "narrator",
          "text": "Ты ждёшь, пока вода успокоится. Здесь можно снять Влада у просвета, свой силуэт в отражении или саму лестницу в воде."
        }
      ],
      "next": "c6.photo.subject"
    },
    "c6.photo.subject": {
      "id": "c6.photo.subject",
      "kind": "choice",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "prompt": "Что снимем первым?",
      "choices": [
        {
          "id": "vlad",
          "text": "Влад, оставайся в кадре",
          "next": "c6.photo.shot.vlad",
          "effects": [
            {
              "kind": "set",
              "key": "c6PhotoSubject",
              "value": "vlad"
            }
          ]
        },
        {
          "id": "her",
          "text": "Теперь ты меня. Только силуэтом",
          "next": "c6.photo.shot.her",
          "effects": [
            {
              "kind": "set",
              "key": "c6PhotoSubject",
              "value": "her"
            }
          ]
        },
        {
          "id": "place",
          "text": "Сниму само место",
          "next": "c6.photo.shot.place",
          "effects": [
            {
              "kind": "set",
              "key": "c6PhotoSubject",
              "value": "place"
            }
          ]
        }
      ]
    },
    "c6.photo.shot.vlad": {
      "id": "c6.photo.shot.vlad",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Влад, оставайся в кадре."
        },
        {
          "speaker": "vlad",
          "text": "так и знал. вышел погулять, теперь работаю моделью."
        },
        {
          "speaker": "heroine",
          "text": "Пока бесплатно. Повернись немного."
        },
        {
          "speaker": "narrator",
          "text": "Он поворачивается к тебе вполоборота и опирается локтем на перила."
        },
        {
          "speaker": "narrator",
          "text": "Свет остаётся у него на щеке. В видоискателе за плечом видны крыши, а фонарь теперь сбоку.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Свет остаётся у него на щеке. В видоискателе за плечом видны крыши, а фонарь теперь сбоку."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "За его плечом виден просвет между перилами. Внизу дрожат линии отражённой лестницы."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "серьёзное лицо делать?"
        },
        {
          "speaker": "heroine",
          "text": "Нет. Вот это оставь."
        },
        {
          "speaker": "narrator",
          "text": "Он успевает усмехнуться. Ты нажимаешь кнопку.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "key"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "теперь я не узнаю, что ты там поймала?"
        },
        {
          "speaker": "heroine",
          "text": "Пока нет."
        },
        {
          "speaker": "vlad",
          "text": "ладно. живу с этой улыбкой до проявки."
        }
      ],
      "next": "c6.photo.roll"
    },
    "c6.photo.shot.her": {
      "id": "c6.photo.shot.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Теперь ты меня. Только силуэтом."
        },
        {
          "speaker": "vlad",
          "text": "давай сюда."
        },
        {
          "speaker": "narrator",
          "text": "Ты передаёшь ему аппарат и выбираешь место у перил.",
          "effects": [
            {
              "kind": "set",
              "key": "c6CameraHolder",
              "value": "vlad"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты становишься спиной к камере, лицом к светлому небу. Влад отходит к лестнице, оставляя вокруг силуэта больше пространства.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Ты становишься спиной к камере, лицом к светлому небу. Влад отходит к лестнице, оставляя вокруг силуэта больше пространства."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Ты становишься у просвета в перилах. Влад направляет аппарат на воду: в кадре будет твой тёмный силуэт среди отражённых линий."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "так? ты и полгорода.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "так? ты и полгорода."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "так? ты и лестница вверх ногами."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Да. Только не командуй улыбаться."
        },
        {
          "speaker": "vlad",
          "text": "даже не собирался. я с этой стороны всё равно не проверю."
        },
        {
          "speaker": "narrator",
          "text": "Ты остаёшься на выбранном месте. Влад чуть меняет угол и нажимает кнопку.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "key"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "есть."
        },
        {
          "speaker": "heroine",
          "text": "Уже можно обернуться?"
        },
        {
          "speaker": "vlad",
          "text": "можно. теперь моя очередь не показывать фотографию."
        }
      ],
      "next": "c6.photo.roll"
    },
    "c6.photo.shot.place": {
      "id": "c6.photo.shot.place",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Сниму само место."
        },
        {
          "speaker": "vlad",
          "text": "тогда отойду."
        },
        {
          "speaker": "narrator",
          "text": "Влад выходит из кадра. Ты снова поднимаешь аппарат."
        },
        {
          "speaker": "narrator",
          "text": "Между тёмными крышами остаётся светлая щель. Ты поворачиваешь аппарат, чтобы убрать из кадра вывеску и оставить эту полоску неба.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Между тёмными крышами остаётся светлая щель. Ты поворачиваешь аппарат, чтобы убрать из кадра вывеску и оставить эту полоску неба."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Ты убираешь из кадра берег. Остаются отражённая лестница и полосы воды; верх и низ почти не различить."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Вот так. Почти одни края.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Вот так. Почти одни края."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Вот так. Будет непонятно, как держать фотографию."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "я бы прошёл и не посмотрел туда второй раз.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "я бы прошёл и не посмотрел туда второй раз."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "придётся каждый раз выбирать новую сторону."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Ты нажимаешь кнопку и опускаешь аппарат.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "key"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "сняла?"
        },
        {
          "speaker": "heroine",
          "text": "Сняла."
        },
        {
          "speaker": "narrator",
          "text": "Он возвращается к перилам и смотрит на то место, которое ты выбрала. Несколько секунд вы стоите молча."
        }
      ],
      "next": "c6.photo.roll"
    },
    "c6.photo.roll": {
      "id": "c6.photo.roll",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы перематываете плёнку к следующему кадру. При передаче аппарата палец задевает кнопку раньше, чем камера успевает подняться от земли.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "accidental"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Подожди. Он сейчас снял?"
        },
        {
          "speaker": "vlad",
          "text": "кажется, да. куда смотрел?"
        },
        {
          "speaker": "heroine",
          "text": "Вниз. Там наши ноги были."
        },
        {
          "speaker": "vlad",
          "text": "значит, у прогулки теперь есть доказательства."
        },
        {
          "speaker": "heroine",
          "text": "Главное, что оба пришли."
        },
        {
          "speaker": "narrator",
          "text": "Вы снимаете ещё несколько деталей рядом: перила, воду, край крыши, лампы на противоположном берегу. Аппарат переходит из рук в руки.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "six"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "После последней перемотки в окошке счётчика остаётся двадцать один кадр."
        },
        {
          "speaker": "heroine",
          "text": "Всё, убираю. А то к концу прогулки останется одна упаковка."
        },
        {
          "speaker": "vlad",
          "text": "согласен. у меня ещё весь город в очереди."
        },
        {
          "speaker": "narrator",
          "text": "Ты кладёшь аппарат в сумку отдельно от ключей. Влад сворачивает пустую упаковку и убирает в ближайшую урну.",
          "effects": [
            {
              "kind": "set",
              "key": "c6CameraHolder",
              "value": "her"
            }
          ]
        }
      ],
      "next": "c6.photo.walk.on"
    },
    "c6.photo.walk.on": {
      "id": "c6.photo.walk.on",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы проходите дальше по верхней дорожке. За спиной остаются лестница и место у перил, где вы снимали.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Вы проходите дальше по верхней дорожке. За спиной остаются лестница и место у перил, где вы снимали."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Вы идёте дальше вдоль воды. Отражённая лестница остаётся позади, и дорожка становится шире."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "а окно всё-таки упустили."
        },
        {
          "speaker": "heroine",
          "text": "Зато перестали стоять у одного столба."
        },
        {
          "speaker": "vlad",
          "text": "да. мы с ним уже почти познакомились."
        },
        {
          "speaker": "narrator",
          "text": "Впереди дорожка делает широкий поворот. Влад идёт рядом, потом поворачивает к тебе открытую ладонь."
        },
        {
          "speaker": "vlad",
          "text": "дашь руку?"
        }
      ],
      "next": "c6.photo.touch"
    },
    "c6.photo.touch": {
      "id": "c6.photo.touch",
      "kind": "choice",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "prompt": "Как тебе хочется продолжить прогулку?",
      "choices": [
        {
          "id": "hand",
          "text": "Взять его за руку",
          "next": "c6.photo.touch.hand",
          "effects": [
            {
              "kind": "set",
              "key": "c6Gesture",
              "value": "hand"
            }
          ]
        },
        {
          "id": "hug",
          "text": "Лучше обниму тебя",
          "next": "c6.photo.touch.hug",
          "effects": [
            {
              "kind": "set",
              "key": "c6Gesture",
              "value": "hug"
            }
          ]
        },
        {
          "id": "none",
          "text": "Давай просто рядом",
          "next": "c6.photo.touch.none",
          "effects": [
            {
              "kind": "set",
              "key": "c6Gesture",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c6.photo.touch.hand": {
      "id": "c6.photo.touch.hand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты вкладываешь ладонь в его. Влад смыкает пальцы и продолжает идти рядом с тобой."
        },
        {
          "speaker": "vlad",
          "text": "вот так хорошо."
        },
        {
          "speaker": "narrator",
          "text": "На повороте он подстраивает шаг. Вы проходите мимо свободной скамейки, не останавливаясь."
        }
      ],
      "next": "c6.photo.gallery"
    },
    "c6.photo.touch.hug": {
      "id": "c6.photo.touch.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Лучше обниму тебя."
        },
        {
          "speaker": "narrator",
          "text": "Ты останавливаешься и подходишь ближе. Влад обнимает тебя в ответ, оставляя сумку с аппаратом сбоку."
        },
        {
          "speaker": "vlad",
          "text": "такой вариант тоже очень подходит."
        },
        {
          "speaker": "narrator",
          "text": "Ты отпускаешь его, и вы возвращаетесь на дорожку."
        }
      ],
      "next": "c6.photo.gallery"
    },
    "c6.photo.touch.none": {
      "id": "c6.photo.touch.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай просто рядом."
        },
        {
          "speaker": "vlad",
          "text": "давай."
        },
        {
          "speaker": "narrator",
          "text": "Он опускает руку. На повороте вы обходите лужицу с разных сторон и снова оказываетесь рядом."
        }
      ],
      "next": "c6.photo.gallery"
    },
    "c6.photo.gallery": {
      "id": "c6.photo.gallery",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Возле киоска ты останавливаешься у афиши. На ней несколько фотографий: полосы света, край стены, ступени без начала и конца."
        },
        {
          "speaker": "heroine",
          "text": "Смотри. «Линии и свет». Это в галерее."
        },
        {
          "speaker": "vlad",
          "text": "тут лестница или крыша?"
        },
        {
          "speaker": "heroine",
          "text": "Не знаю. Давай сходим и посмотрим поближе."
        },
        {
          "speaker": "vlad",
          "text": "давай. когда тебе удобно?"
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь телефон и открываешь расписание галереи. Вы выбираете время, когда оба свободны."
        },
        {
          "speaker": "heroine",
          "text": "Тогда в следующий раз сюда. Только внутрь, а не опять мимо афиши."
        },
        {
          "speaker": "vlad",
          "text": "договорились. аппарат тоже бери."
        },
        {
          "speaker": "heroine",
          "text": "Он пока побудет у меня?"
        },
        {
          "speaker": "vlad",
          "text": "да. в следующий раз принесёшь наш фотоаппарат."
        },
        {
          "speaker": "heroine",
          "text": "Принесу."
        },
        {
          "speaker": "narrator",
          "text": "Ты сохраняешь адрес и убираешь телефон. На афише остаётся яркая полоса; на настоящей стене свет уже погас."
        }
      ],
      "next": "c6.photo.goodbye"
    },
    "c6.photo.goodbye": {
      "id": "c6.photo.goodbye",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "У выхода ты останавливаешься, и вы размыкаете руки. Влад остаётся напротив тебя.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hand"
                }
              ],
              "text": "У выхода ты останавливаешься, и вы размыкаете руки. Влад остаётся напротив тебя."
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hug"
                }
              ],
              "text": "У выхода вы останавливаетесь. Влад поворачивается к тебе, засунув руки в карманы."
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                }
              ],
              "text": "У выхода дорожка расходится. Вы останавливаетесь рядом с указателем, каждый со своей стороны."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "до галереи?",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hand"
                }
              ],
              "text": "до галереи?"
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hug"
                }
              ],
              "text": "до галереи?"
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                }
              ],
              "text": "до галереи?"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "До галереи."
        },
        {
          "speaker": "vlad",
          "text": "пока."
        },
        {
          "speaker": "narrator",
          "text": "Ты поднимаешь ладонь на прощание. Влад отвечает и сворачивает к улице."
        },
        {
          "speaker": "narrator",
          "text": "В сумке лежит общий фотоаппарат. Пока в нём только плёнка — ни один сегодняшний снимок ещё нельзя увидеть."
        }
      ],
      "next": "c6.photo.end.walk"
    },
    "c6.photo.end.walk": {
      "id": "c6.photo.end.walk",
      "kind": "end",
      "endingId": "c6.photo.walk",
      "cardId": "c6.photo.walk"
    }
  }
};
