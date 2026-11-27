// Scenario reference: outputs/CHAPTER_06_SCRIPT.md
import type { Chapter } from '../../engine/types';
import { CONTENT_VERSION } from '../version';
export const chapter6:Chapter = {
  "id": 6,
  "contentVersion": CONTENT_VERSION,
  "scriptRevision": 6,
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
          "text": "Прошло несколько дней тёплых вечерних переписок и того лёгкого предвкушения, когда среди рабочего дня ловишь себя на улыбке экрану телефона."
        },
        {
          "speaker": "narrator",
          "text": "У входа на набережную вы подходите к каменным перилам почти секунда в секунду — Влад идёт быстрым шагом со стороны проспекта, ветер растрепал его кудри, а во взгляде ещё светится энергия насыщенного дня."
        },
        {
          "speaker": "vlad",
          "text": "привет. вот это синхронность — закрыл сложную задачу ровно за минуту до выхода и летел сюда на одном дыхании."
        },
        {
          "speaker": "narrator",
          "text": "Он останавливается в шаге от тебя, переводя дух, и улыбается чуть виновато."
        },
        {
          "speaker": "heroine",
          "text": "Привет, Влад. Люблю, когда рабочая неделя заканчивается у воды. Пойдём по нижней дорожке?"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "пойдём. я до тебя уже добежал, дальше можно не спешить."
        },
        {
          "speaker": "narrator",
          "text": "Вы спускаетесь на нижнюю дорожку у воды. От реки тянет осенней свежестью; ты замедляешь шаг у парапета."
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
          "text": "В тёмной воде у берега дрожит яркий золотой прямоугольник — отражение освещённого окна с противоположного берега."
        },
        {
          "speaker": "heroine",
          "text": "Подожди, Влад. Смотри — будто кто-то зажёг окно прямо под водой."
        },
        {
          "speaker": "narrator",
          "emotion": "surprised",
          "text": "Влад возвращается на шаг и наклоняется над парапетом рядом с тобой, чтобы увидеть тот же угол."
        },
        {
          "speaker": "vlad",
          "emotion": "surprised",
          "text": "и правда. только ручку забыли приделать."
        },
        {
          "speaker": "heroine",
          "emotion": "laugh",
          "text": "Ты уже собирался его открывать?"
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "сначала тихонько постучать. вдруг там кто-то уже ужинает."
        },
        {
          "speaker": "narrator",
          "text": "По воде пробегает рябь, размывая отражение. Ты тянешься за телефоном, но замечаешь витрину маленького киоска у лестницы."
        },
        {
          "speaker": "heroine",
          "text": "Смотри, там на полке зелёные картонные коробочки… это ведь плёночные фотоаппараты?"
        },
        {
          "speaker": "vlad",
          "text": "да, одноразовые. те самые, где нужно крутить колёсико пальцем."
        },
        {
          "speaker": "heroine",
          "text": "Давай возьмём один на двоих! Будем снимать наши прогулки, пока плёнка не закончится."
        },
        {
          "speaker": "vlad",
          "text": "мне очень нравится это «наши прогулки». берём. твоё окно в воде будет первым кадром?"
        },
        {
          "speaker": "heroine",
          "text": "Если оно нас дождётся!"
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
          "text": "Вы берёте один лёгкий аппарат на двоих. Влад снимает шуршащую плёнку упаковки, пока ты разворачиваешь бумажный вкладыш.",
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
          "text": "Двенадцать кадров. И ни одного экрана, чтобы проверить и удалить."
        },
        {
          "speaker": "vlad",
          "emotion": "awkward",
          "text": "да, я уже по привычке чуть не перевернул его посмотреть, где тут предпросмотр."
        },
        {
          "speaker": "heroine",
          "text": "Зато с телефоном я бы сделала двадцать дублей подряд, а здесь каждый щелчок — настоящий."
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "и до самой проявки придётся помнить этот вечер по памяти, а не по галерее."
        },
        {
          "speaker": "narrator",
          "text": "Ты убираешь вкладыш в сумку. Влад с сухим треском прокручивает колёсико взвода до упора и протягивает аппарат тебе.",
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
          "text": "заряжен. пойдём ловить твоё окно."
        }
      ],
      "next": "c6.photo.missed"
    },
    "c6.photo.missed": {
      "id": "c6.photo.missed",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Вы возвращаетесь к парапету, но солнце за эти две минуты уже скользнуло за карниз на том берегу. Золотой прямоугольник погас, осталась только синяя тень."
        },
        {
          "speaker": "heroine",
          "text": "Опоздали… окно закрылось."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "ничего. значит, этот кадр останется только для нас двоих — без свидетелей на плёнке."
        },
        {
          "speaker": "narrator",
          "text": "Ты делаешь пару шагов влево вдоль перил. Влад подходит рядом и кивает наверх:"
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "смотри, на верхнем ярусе солнце ещё держится на крышах — можем подняться туда за светом."
        },
        {
          "speaker": "heroine",
          "emotion": "thinking",
          "text": "Или остаться здесь, у воды: в ней сейчас так необычно отражается лестница."
        },
        {
          "speaker": "angel",
          "text": "У самой воды сейчас глубокие тени и тихие отражения — никто не помешает вам двоим."
        },
        {
          "speaker": "devil",
          "text": "А наверху закатный свет ложится прямо на лицо! Тащи его к солнцу — устроим внеплановую фотосессию, пока он не начал высчитывать углы!"
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
        "character": "vlad.city.thinking",
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
          "text": "Поднимемся наверх. Хочу поймать последний закатный свет."
        },
        {
          "speaker": "narrator",
          "text": "Вы поднимаетесь по каменным ступеням; Влад придерживает кованую калитку на верхней площадке, пропуская тебя вперёд."
        },
        {
          "speaker": "narrator",
          "text": "Наверху ветер мягче, а над крышами тянется узкая розовая полоса неба."
        },
        {
          "speaker": "narrator",
          "text": "Ты подносишь аппарат к глазу, пытаясь поймать линию крыш без яркой уличной вывески."
        },
        {
          "speaker": "vlad",
          "text": "дай гляну, куда она лезет."
        },
        {
          "speaker": "narrator",
          "text": "Влад встаёт рядом с тобой у перил, чуть наклоняется, чтобы посмотреть вдоль корпуса камеры, и легонько касается края аппарата, поправляя угол."
        },
        {
          "speaker": "narrator",
          "text": "Слышно его спокойный голос совсем близко:"
        },
        {
          "speaker": "vlad",
          "text": "вот так… если чуть сместить сюда, вывеска уйдёт, а свет останется. видишь?"
        },
        {
          "speaker": "heroine",
          "emotion": "smile",
          "text": "Вижу… только теперь у тебя за спиной будет фонарь."
        },
        {
          "speaker": "narrator",
          "emotion": "smile",
          "text": "Влад усмехается и отступает на шаг к перилам, уступая тебе пространство для кадра."
        },
        {
          "speaker": "narrator",
          "text": "С этой точки можно снять самого Влада в полосе света, свой силуэт на фоне неба или уходящие вдаль крыши."
        }
      ],
      "next": "c6.photo.subject"
    },
    "c6.photo.water": {
      "id": "c6.photo.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.thinking"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Останемся у воды. Здесь сейчас такая тишина."
        },
        {
          "speaker": "narrator",
          "text": "Вы проходите к широкому просвету у парапета, где в тёмной воде опрокинулись ступени лестницы и светлая полоска неба."
        },
        {
          "speaker": "narrator",
          "text": "Ты поворачиваешь камеру вертикально; Влад склоняется рядом к перилам, разглядывая отражение под тем же углом."
        },
        {
          "speaker": "heroine",
          "text": "Смотри, настоящая лестница ведёт вниз, а в воде она уходит куда-то в глубину."
        },
        {
          "speaker": "narrator",
          "text": "Он прикидывает рамку ладонью, чуть прищурившись:"
        },
        {
          "speaker": "vlad",
          "text": "а если срезать верхний край берега, вообще не поймёшь, где кончается воздух и начинается вода. можно я посмотрю?"
        },
        {
          "speaker": "narrator",
          "text": "Ты протягиваешь ему лёгкий зелёный аппарат за ремешок.",
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
          "emotion": "smile",
          "text": "Влад заглядывает в видоискатель, одобрительно кивает и возвращает камеру тебе.",
          "effects": [
            {
              "kind": "set",
              "key": "c6CameraHolder",
              "value": "her"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "Вода у парапета затихает. Отсюда можно снять Влада у просвета перил, свой силуэт в отражении или саму опрокинутую лестницу."
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
          "text": "Влад, оставайся у перил. Первым на нашей плёнке будешь ты."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "так и знал. позвали гулять на набережную, а в итоге заставили работать фотомоделью."
        },
        {
          "speaker": "heroine",
          "text": "Причём совершенно бесплатно. Повернись ко мне чуть вполоборота."
        },
        {
          "speaker": "narrator",
          "text": "Он опирается локтем на перила и поворачивает голову к тебе."
        },
        {
          "speaker": "narrator",
          "emotion": "thinking",
          "text": "Мягкий вечерний свет ложится ему на скулу; за его спиной видны крыши, а фонарь остаётся чуть сбоку.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Мягкий вечерний свет ложится ему на скулу; за его спиной видны крыши, а фонарь остаётся чуть сбоку."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "За ним открывается просвет к воде, где в глубине дрожат линии отражённой лестницы."
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "ну что, мне делать серьёзное и загадочное лицо?"
        },
        {
          "speaker": "heroine",
          "text": "Нет. Просто смотри на меня вот так, как сейчас."
        },
        {
          "speaker": "narrator",
          "emotion": "neutral",
          "text": "В маленьком окошке видоискателя видно, как он перестаёт позировать и смотрит прямо на тебя — открыто и спокойно. Ты нажимаешь спуск.",
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
          "emotion": "awkward",
          "text": "и теперь ты мне даже не расскажешь, какое у меня там было лицо?"
        },
        {
          "speaker": "heroine",
          "text": "Увидишь, когда проявим плёнку."
        },
        {
          "speaker": "vlad",
          "text": "ладно. но имей в виду: следующий кадр с тобой — за мной."
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
          "text": "Сними лучше ты меня. Только со спины, силуэтом на фоне неба.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Сними лучше ты меня. Только со спины, силуэтом на фоне неба."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Сними лучше ты меня. Только со спины, силуэтом у воды."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "с удовольствием. давай камеру."
        },
        {
          "speaker": "narrator",
          "emotion": "thinking",
          "text": "Ты передаёшь ему аппарат и подходишь к самым перилам.",
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
          "emotion": "thinking",
          "text": "Ты останавливаешься лицом к светлой полосе неба над крышами, а Влад отступает на пару шагов, поднимая камеру.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Ты останавливаешься лицом к светлой полосе неба над крышами, а Влад отступает на пару шагов, поднимая камеру."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Ты становишься у просвета в перилах над самой водой, где вокруг твоего силуэта сходятся отражённые ступени."
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "красиво… ты и полгорода вокруг.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "красиво… ты и полгорода вокруг."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "красиво… ты и опрокинутая в воду лестница."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Только не проси меня поворачиваться и позировать."
        },
        {
          "speaker": "vlad",
          "text": "даже не думал. мне нравится просто ловить момент, когда ты задумалась."
        },
        {
          "speaker": "narrator",
          "emotion": "neutral",
          "text": "За спиной раздаётся тихий щелчок затвора, но когда ты оборачиваешься, Влад ещё секунду не опускает камеру, будто досматривает кадр уже просто так.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "key"
            }
          ]
        },
        {
          "speaker": "heroine",
          "emotion": "neutral",
          "text": "Снял?"
        },
        {
          "speaker": "vlad",
          "text": "снял. и этот кадр я жду из проявки больше остальных."
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
          "text": "Давай сначала сниму само это место — пока свет ещё держится."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "понял, уступаю сцену архитектуре."
        },
        {
          "speaker": "narrator",
          "text": "Влад делает шаг в сторону, но смотрит больше не на пейзаж, а на то, как сосредоточенно ты прищуриваешься у видоискателя."
        },
        {
          "speaker": "narrator",
          "text": "Между тёмными крышами остаётся чистая полоса неба; ты выравниваешь кадр, убирая лишнюю вывеску.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Между тёмными крышами остаётся чистая полоса неба; ты выравниваешь кадр, убирая лишнюю вывеску."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Ты оставляешь в рамке только тёмную воду и опрокинутую лестницу, так что верх и низ почти меняются местами."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Вот так. Совсем ничего лишнего.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Вот так. Совсем ничего лишнего."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Вот так. Потом даже не сразу угадаешь, где здесь верх."
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "neutral",
          "text": "я бы один прошёл мимо и не заметил. а рядом с тобой начинаешь видеть такие вещи.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "я бы один прошёл мимо и не заметил. а рядом с тобой начинаешь видеть такие вещи."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "с тобой даже обычная лестница превращается в загадку."
            }
          ]
        },
        {
          "speaker": "narrator",
          "emotion": "neutral",
          "text": "Ты нажимаешь спуск и опускаешь лёгкий аппарат.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "key"
            }
          ]
        },
        {
          "speaker": "narrator",
          "emotion": "neutral",
          "text": "Влад подходит к перилам, и вы несколько секунд молча смотрите на темнеющую реку."
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
          "emotion": "surprised",
          "text": "Ты прокручиваешь колёсико к следующему кадру и протягиваешь аппарат Владу. Ваши пальцы накладываются на корпус одновременно — и кнопка спуска случайно щёлкает сама, пока объектив смотрит вниз.",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "accidental"
            }
          ],
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoSubject",
                  "equals": "her"
                }
              ],
              "text": "Влад прокручивает колёсико к следующему кадру, вы оба тянетесь к аппарату одновременно — ваши пальцы сталкиваются на корпусе, и кнопка спуска случайно щёлкает сама, пока объектив смотрит вниз."
            }
          ]
        },
        {
          "speaker": "heroine",
          "emotion": "surprised",
          "text": "Ой… кажется, мы только что сфотографировали землю?"
        },
        {
          "speaker": "vlad",
          "text": "зато нажали кнопку вдвоём. куда он смотрел?"
        },
        {
          "speaker": "heroine",
          "emotion": "laugh",
          "text": "Прямо на наши ботинки."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "значит, будет мой любимый документальный кадр — официальный отчёт о прогулке."
        },
        {
          "speaker": "narrator",
          "text": "Вы делаете ещё пару шагов вдоль перил. Ты отворачиваешься к воде, убирая с лица растрёпанные ветром волосы, — и вдруг за спиной раздаётся короткий «щёлк».",
          "effects": [
            {
              "kind": "set",
              "key": "c6Film",
              "value": "six"
            }
          ],
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Вы делаете ещё пару шагов вдоль верхних перил. Ты отворачиваешься к темнеющим крышам, убирая с лица растрёпанные ветром волосы, — и вдруг за спиной раздаётся короткий «щёлк»."
            }
          ]
        },
        {
          "speaker": "narrator",
          "emotion": "awkward",
          "text": "Ты оборачиваешься: Влад только что опустил камеру, вид у него виноватый и при этом совершенно довольный."
        },
        {
          "speaker": "heroine",
          "emotion": "awkward",
          "text": "Влад! Ты сейчас меня снял без предупреждения?"
        },
        {
          "speaker": "vlad",
          "emotion": "awkward",
          "text": "прости, не удержался. очень уж хороший был момент — жалко было не сохранить."
        },
        {
          "speaker": "narrator",
          "text": "В окошке счётчика остаётся цифра «9». Влад возвращает аппарат тебе, ты прячешь его в сумку, а он выбрасывает обёртку в урну у дорожки.",
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
          "text": "Вы неспешно идёте дальше по вечерней аллее. За спиной остаются лестница и парапет, сумерки над рекой густеют.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "Вы идёте дальше по верхней дорожке. За спиной остаются лестница и перила, где вы только что снимали."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Вы идёте дальше вдоль воды. Отражённая лестница остаётся позади, аллея под фонарями становится тише."
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "а то золотое окно в воде мы всё-таки упустили."
        },
        {
          "speaker": "heroine",
          "text": "Зато у нас теперь есть общий фотоаппарат и кадр наших ног.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "Зато на плёнке есть перевёрнутая лестница и кадр наших ног."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "и один секретный портрет, которым я горжусь.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "и секретный кадр у воды, ради которого вообще стоило покупать эту плёнку."
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "слушай, мы сегодня так вовремя сбежали от всей этой суеты… а если бы у тебя завтра вдруг освободились три дня без единого дела — куда бы ты сорвалась?"
        },
        {
          "speaker": "narrator",
          "text": "Он чуть замедляет шаг рядом с тобой — видно, что ему правда интересно, как ты представляешь свой идеальный отдых."
        }
      ],
      "next": "c6.photo.escape"
    },
    "c6.photo.escape": {
      "id": "c6.photo.escape",
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
      "prompt": "Куда бы ты сорвалась на три свободных дня?",
      "choices": [
        {
          "id": "sea",
          "text": "К холодному морю — дышать ветром и слушать воду",
          "next": "c6.photo.escape.sea",
          "effects": [
            {
              "kind": "set",
              "key": "c6HerEscape",
              "value": "sea"
            }
          ]
        },
        {
          "id": "oldtown",
          "text": "В старый тихий город — бродить по улочкам без карты",
          "next": "c6.photo.escape.oldtown",
          "effects": [
            {
              "kind": "set",
              "key": "c6HerEscape",
              "value": "oldtown"
            }
          ]
        },
        {
          "id": "cabin",
          "text": "В тихий домик у леса — к природе и полному спокойствию",
          "next": "c6.photo.escape.cabin",
          "effects": [
            {
              "kind": "set",
              "key": "c6HerEscape",
              "value": "cabin"
            }
          ]
        }
      ]
    },
    "c6.photo.escape.sea": {
      "id": "c6.photo.escape.sea",
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
          "text": "К морю. Даже не в сезон — в тёплом пальто, идти вдоль пустого берега и слушать воду."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "красиво. я сам путешественник так себе — меня скорее тянет в тихий домик у леса, где природа и никакой суеты. но пустой берег без толпы я точно понимаю."
        },
        {
          "speaker": "narrator",
          "text": "Впереди аллея уходит под кроны старых клёнов. Влад поворачивается к тебе и протягивает раскрытую ладонь:"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "пойдём дальше за руку?"
        }
      ],
      "next": "c6.photo.touch"
    },
    "c6.photo.escape.oldtown": {
      "id": "c6.photo.escape.oldtown",
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
          "text": "В небольшой старый город с узкими улочками и маленькими пекарнями — чтобы бродить без плана и карты."
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "смело. я в поездках человек редкий, мне ближе тихий домик у леса и природа, но с тобой бы рискнул потеряться в незнакомых переулках. хотя без карты мне сначала было бы непривычно."
        },
        {
          "speaker": "narrator",
          "text": "Впереди аллея уходит под кроны старых клёнов. Влад поворачивается к тебе и протягивает раскрытую ладонь:"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "пойдём дальше за руку?"
        }
      ],
      "next": "c6.photo.touch"
    },
    "c6.photo.escape.cabin": {
      "id": "c6.photo.escape.cabin",
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
          "text": "В тихий домик где-нибудь у леса: природа, тёплый свет вечером, никуда не спешить и никакой суеты."
        },
        {
          "speaker": "vlad",
          "emotion": "surprised",
          "text": "подожди… серьёзно? ты буквально описала мой идеальный вариант. я сам не фанат дальних поездок, а вот сбежать в домик у леса, где тихо и вокруг природа — это сто процентов моё."
        },
        {
          "speaker": "narrator",
          "text": "Впереди аллея уходит под кроны старых клёнов. Влад смотрит на тебя с открытой, тёплой улыбкой и протягивает раскрытую ладонь:"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "пойдём дальше за руку?"
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
          "emotion": "neutral",
          "text": "Ты вкладываешь свою ладонь в его руку. Его пальцы смыкаются вокруг твоих спокойно и уверенно, без лишней суеты."
        },
        {
          "speaker": "narrator",
          "emotion": "neutral",
          "text": "Влад коротко выдыхает и большим пальцем легко проводит по костяшкам твоей руки."
        },
        {
          "speaker": "vlad",
          "text": "вот так… совсем хорошо."
        },
        {
          "speaker": "narrator",
          "text": "На повороте аллеи вы идёте в одном темпе, уже не разжимая рук."
        }
      ],
      "next": "c6.photo.askLead"
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
          "emotion": "surprised",
          "text": "Лучше обниму тебя."
        },
        {
          "speaker": "narrator",
          "emotion": "surprised",
          "text": "Ты останавливаешься на дорожке и шагаешь в его объятия. Влад отводит сумку в сторону и крепко обнимает тебя."
        },
        {
          "speaker": "narrator",
          "emotion": "smile",
          "text": "Пару секунд вы стоите посреди тихой аллеи — под пальто чувствуется, как сильно и ровно бьётся его сердце."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "вот такой поворот маршрута мне нравится гораздо больше."
        },
        {
          "speaker": "narrator",
          "text": "Когда вы отстраняетесь, Влад мягко перехватывает твою ладонь, и дальше по аллее вы идёте уже за руку."
        }
      ],
      "next": "c6.photo.askLead"
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
          "emotion": "neutral",
          "text": "Давай пока просто пойдём рядом."
        },
        {
          "speaker": "vlad",
          "text": "давай. мне и так хорошо с тобой идти."
        },
        {
          "speaker": "narrator",
          "text": "Он спокойно убирает руку в карман без тени неловкости, и когда на повороте попадается лужа, просто придерживает край прохода, пропуская тебя по сухому месту."
        }
      ],
      "next": "c6.photo.askLead"
    },
    "c6.photo.askLead": {
      "id": "c6.photo.askLead",
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
          "text": "Аллея под фонарями пустеет, шаги звучат тише. Хочется узнать про Влада ещё что-нибудь настоящее — вне обычных разговоров."
        },
        {
          "speaker": "heroine",
          "text": "Влад, можно внезапный вопрос — просто чтобы узнать тебя получше?"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "конечно. спрашивай что угодно, скрывать мне от тебя нечего."
        }
      ],
      "next": "c6.photo.askVlad"
    },
    "c6.photo.askVlad": {
      "id": "c6.photo.askVlad",
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
      "prompt": "О чём спросишь Влада?",
      "choices": [
        {
          "id": "game",
          "text": "Чем занимаешься вечером, когда закрываешь рабочие задачи?",
          "next": "c6.photo.ask.game",
          "effects": [
            {
              "kind": "set",
              "key": "c6AskVlad",
              "value": "game"
            }
          ]
        },
        {
          "id": "routine",
          "text": "Как устроены твои обычные будни вне работы?",
          "next": "c6.photo.ask.routine",
          "effects": [
            {
              "kind": "set",
              "key": "c6AskVlad",
              "value": "routine"
            }
          ]
        },
        {
          "id": "quirk",
          "text": "Признавайся: есть за тобой смешная бытовая привычка?",
          "next": "c6.photo.ask.quirk",
          "effects": [
            {
              "kind": "set",
              "key": "c6AskVlad",
              "value": "quirk"
            }
          ]
        }
      ]
    },
    "c6.photo.ask.game": {
      "id": "c6.photo.ask.game",
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
          "text": "Ты говорил, что легко залипаешь в код. А когда рабочие задачи закрыты — чем занимаешься для души?"
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "иногда пишу свою небольшую игру или ковыряю пет-проекты. нравится сам момент, когда из пустого файла потихоньку собирается что-то живое, своё."
        },
        {
          "speaker": "heroine",
          "text": "Свою игру с нуля? Вот это неожиданно. Покажешь когда-нибудь?"
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "обязательно. только предупреждаю: потом я ещё долго буду расспрашивать, где именно ты улыбнулась, а где захотелось переделать."
        }
      ],
      "next": "c6.photo.gallery"
    },
    "c6.photo.ask.routine": {
      "id": "c6.photo.ask.routine",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.thinking",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.thinking"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Как ты держишь баланс вне работы? Кроме прогулок — на что у тебя ещё хватает сил?"
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "занимаюсь дома тренировками, чтобы спина не забыла, как двигаться, и потихоньку учу английский. ничего пафосного — просто люблю понятный ритм без лишней суеты."
        },
        {
          "speaker": "heroine",
          "text": "Звучит на удивление собрано. И ты правда никогда не отлыниваешь?"
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "отлыниваю, конечно. но мне проще чуть напрячься вечером и лечь со спокойной головой, чем потом суетиться и всё наверстывать в последний момент."
        }
      ],
      "next": "c6.photo.gallery"
    },
    "c6.photo.ask.quirk": {
      "id": "c6.photo.ask.quirk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.laugh",
        "variants": [
          {
            "when": [
              {
                "key": "c6PhotoPlace",
                "equals": "upper"
              }
            ],
            "background": "bg.photo6.upper",
            "character": "vlad.city.laugh"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Ты всё время такой собранный. Признавайся честно: какая у тебя есть смешная бытовая слабость?"
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "самая честная — я могу сорок минут выбирать фильм на вечер. перебираю описания, трейлеры, отзывы… а потом в итоге уже пора спать."
        },
        {
          "speaker": "heroine",
          "emotion": "laugh",
          "text": "Значит, пульт в киновечера я забираю себе."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "с радостью уступлю. зато в одном я точно надёжен: терпеть не могу опаздывать и суетиться, так что ждать меня на холоде тебе никогда не придётся."
        }
      ],
      "next": "c6.photo.gallery"
    },
    "c6.photo.gallery": {
      "id": "c6.photo.gallery",
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
          "text": "У выхода с аллеи ты останавливаешься перед подсвеченной тумбой с афишей: чёрно-белые фотографии, косые полосы света, край стены и ступени."
        },
        {
          "speaker": "heroine",
          "emotion": "thinking",
          "text": "Смотри, Влад: фотовыставка «Линии и свет» в камерной галерее."
        },
        {
          "speaker": "vlad",
          "emotion": "thinking",
          "text": "интересно… это там лестница на снимке или край крыши?"
        },
        {
          "speaker": "heroine",
          "text": "По плакату не угадаешь. Давай сходим туда вдвоём в следующий раз и разглядим вживую?"
        },
        {
          "speaker": "vlad",
          "emotion": "laugh",
          "text": "давай. я с тобой хоть на выставку геометрии пойду. когда ты свободна?"
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь из кармана телефон одной рукой, не выпуская его ладони, а Влад заглядывает в календарь через твоё плечо, пока вы выбираете свободный вечер.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                }
              ],
              "text": "Ты достаёшь из кармана телефон, и Влад склоняется рядом к экрану календаря, пока вы выбираете свободный вечер."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Тогда в следующий раз встречаемся у дверей этой галереи."
        },
        {
          "speaker": "vlad",
          "text": "договорились. и наш фотоаппарат бери с собой."
        },
        {
          "speaker": "heroine",
          "text": "Он до следующей встречи остаётся у меня на хранении?"
        },
        {
          "speaker": "vlad",
          "text": "конечно. у тебя в сумке наш общий архив."
        },
        {
          "speaker": "heroine",
          "text": "Буду беречь каждый кадр."
        },
        {
          "speaker": "narrator",
          "text": "Ты убираешь телефон. На афише светится белая диагональ, а вокруг уже совсем стемнело."
        }
      ],
      "next": "c6.photo.goodbye"
    },
    "c6.photo.goodbye": {
      "id": "c6.photo.goodbye",
      "kind": "dialogue",
      "scene": {
        "background": "bg.photo6.shade",
        "character": "vlad.city.neutral",
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
          "text": "У выхода к улице ты останавливаешься. Влад поворачивается к тебе, всё ещё держа твою ладонь в своей.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hand"
                }
              ],
              "text": "У выхода к улице ты останавливаешься. Влад поворачивается к тебе, всё ещё держа твою ладонь в своей."
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hug"
                }
              ],
              "text": "У выхода к улице вы останавливаетесь рядом; Влад всё ещё держит тебя за руку после вашего объятия."
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "none"
                }
              ],
              "text": "У выхода к улице вы останавливаетесь под фонарём, в шаге друг от друга."
            }
          ]
        },
        {
          "speaker": "vlad",
          "emotion": "awkward",
          "text": "ну что… до встречи в галерее?"
        },
        {
          "speaker": "heroine",
          "emotion": "smile",
          "text": "До галереи, Влад."
        },
        {
          "speaker": "vlad",
          "emotion": "smile",
          "text": "хорошего тебе вечера. я уже жду следующего раза."
        },
        {
          "speaker": "narrator",
          "text": "Ты машешь ему на прощание и сворачиваешь к переходу.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hand"
                }
              ],
              "text": "Прежде чем разжать руки, Влад коротко сжимает твои пальцы и отпускает тебя только на самом шаге к переходу."
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hug"
                }
              ],
              "text": "На прощание ты легко касаешься его рукава; Влад на секунду накрывает твою руку своей и только потом отпускает."
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "В сумке лежит ваш общий плёночный аппарат — ни одного кадра ещё не видно, но этот спокойный вечер точно хочется продолжить.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hand"
                }
              ],
              "text": "В сумке лежит ваш общий плёночный аппарат — ни одного кадра ещё не видно, но ощущение его руки остаётся с тобой всю дорогу до дома."
            },
            {
              "when": [
                {
                  "key": "c6Gesture",
                  "equals": "hug"
                }
              ],
              "text": "В сумке лежит ваш общий плёночный аппарат — ни одного кадра ещё не видно, но после его объятия дорога до дома кажется вдвое короче."
            }
          ]
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
