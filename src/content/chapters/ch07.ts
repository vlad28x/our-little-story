import type {Chapter} from '../../engine/types';
// Exact text: outputs/CHAPTER_07_GALLERY_SCRIPT_2026_11_04.md
export const chapter7:Chapter={
  "id": 7,
  "contentVersion": 16,
  "scriptRevision": 5,
  "title": "На шаг левее",
  "entry": "c7.gallery.entry",
  "nodes": {
    "c7.gallery.entry": {
      "id": "c7.gallery.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На стеклянной двери галереи та самая афиша, мимо которой вы шли по набережной. Здесь она почти во всю дверь."
        },
        {
          "speaker": "narrator",
          "text": "Влад стоит чуть поодаль. Когда ты подходишь, он наклоняет голову набок, будто пытается прочитать афишу с торца."
        },
        {
          "speaker": "heroine",
          "text": "И что это в конце концов — лестница или крыша?"
        },
        {
          "speaker": "vlad",
          "text": "десять минут тут стою. был уверен, что лестница. теперь вижу гармошку."
        },
        {
          "speaker": "vlad",
          "text": "я пораньше пришёл. хотелось встретить тебя здесь."
        },
        {
          "speaker": "narrator",
          "text": "Вблизи на белой полосе проступают песчинки."
        },
        {
          "speaker": "heroine",
          "text": "Если это гармошка, на ней давно не играли."
        },
        {
          "speaker": "vlad",
          "text": "проверим?"
        },
        {
          "speaker": "heroine",
          "text": "С верхней дорожки в тот раз тоже были одни края крыш. А стоило спуститься — обычные дома.",
          "variants": [
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "upper"
                }
              ],
              "text": "С верхней дорожки в тот раз тоже были одни края крыш. А стоило спуститься — обычные дома."
            },
            {
              "when": [
                {
                  "key": "c6PhotoPlace",
                  "equals": "water"
                }
              ],
              "text": "У воды в тот раз лестница в отражении совсем на себя не походила. Тут то же самое без воды."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "хорошо, что ты нас сюда вытащила. я бы по афише так и решил, что уже всё видел."
        },
        {
          "speaker": "narrator",
          "text": "Ты берёшься за ручку. На уровне глаз, рядом с названием выставки, наклеена маленькая перечёркнутая камера."
        },
        {
          "speaker": "vlad",
          "text": "вот и выяснили, кому сегодня в галерее выходной."
        },
        {
          "speaker": "narrator",
          "text": "Ты застёгиваешь сумку с аппаратом. До конца зала он остаётся там."
        }
      ],
      "next": "c7.gallery.first"
    },
    "c7.gallery.first": {
      "id": "c7.gallery.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Внутри всего три фотографии. С порога их края сходятся так аккуратно, что на секунду перед тобой оказывается одна длинная лестница."
        },
        {
          "speaker": "narrator",
          "text": "Стоит Владу пройти чуть вперёд, как лестница у него за плечом распадается на три отдельных листа."
        },
        {
          "speaker": "heroine",
          "text": "Подожди. Вернись на шаг."
        },
        {
          "speaker": "vlad",
          "text": "я уже что-то пропустил?"
        },
        {
          "speaker": "heroine",
          "text": "Встань сюда, где я стою. Посмотри поверх моей головы… Нет, лучше я отойду."
        },
        {
          "speaker": "narrator",
          "text": "Ты уступаешь ему место. Он делает полшага влево, и полосы снова сходятся."
        },
        {
          "speaker": "vlad",
          "text": "о. а я бы пошёл читать подписи."
        },
        {
          "speaker": "heroine",
          "text": "Я их пока даже не вижу."
        },
        {
          "speaker": "vlad",
          "text": "тем лучше. сейчас скажу глупость, а опровергнуть меня нечем."
        },
        {
          "speaker": "narrator",
          "text": "Он показывает на среднюю фотографию, где у одной из полос выкрошился край."
        },
        {
          "speaker": "vlad",
          "text": "мне вот эта нравится. глаз до дырки доходит и останавливается."
        },
        {
          "speaker": "heroine",
          "text": "А я ещё хочу понять, что там справа. Сюда синего почти не видно."
        },
        {
          "speaker": "vlad",
          "text": "у нас целый зал. как пойдём?"
        }
      ],
      "next": "c7.gallery.route"
    },
    "c7.gallery.route": {
      "id": "c7.gallery.route",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "together",
          "text": "Пройдём всю серию вдвоём, слева направо",
          "next": "c7.gallery.together",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryRoute",
              "value": "together"
            }
          ]
        },
        {
          "id": "apart",
          "text": "Разойдёмся, а потом каждый проведёт другого к своей находке",
          "next": "c7.gallery.apart",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryRoute",
              "value": "apart"
            }
          ]
        }
      ]
    },
    "c7.gallery.together": {
      "id": "c7.gallery.together",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай вдвоём. Сначала туда, где полосы ещё целые."
        },
        {
          "speaker": "narrator",
          "text": "Вы идёте вдоль первой перегородки. На снимке «Ряд» светлеют кромки ступеней. Две линии почти касаются, а между остальными много серого."
        },
        {
          "speaker": "vlad",
          "text": "странная лестница. на третьей ступеньке колено до подбородка поднимешь."
        },
        {
          "speaker": "heroine",
          "text": "Давай посмотрим сбоку."
        },
        {
          "speaker": "narrator",
          "text": "Ты подходишь с узкого края. Влад остаётся посередине и по одному загибает пальцы."
        },
        {
          "speaker": "vlad",
          "text": "у меня пять полос."
        },
        {
          "speaker": "heroine",
          "text": "У меня четыре. Вот отойди немного к стене."
        },
        {
          "speaker": "narrator",
          "text": "Он становится рядом. Край соседней перегородки закрывает пятую полосу. Влад разгибает один палец."
        },
        {
          "speaker": "vlad",
          "text": "беру одну ступеньку обратно."
        },
        {
          "speaker": "heroine",
          "text": "А ты быстро уступил."
        },
        {
          "speaker": "vlad",
          "text": "только ступеньку. среднюю фотографию я пока никому не уступаю."
        },
        {
          "speaker": "narrator",
          "text": "У «Скола» видно, из чего сделана лестница. В белой кромке торчат крупинки щебня. Там, где выбит кусочек, светлая линия обрывается."
        },
        {
          "speaker": "vlad",
          "text": "вот сюда я всё время возвращаюсь взглядом. до скола идёшь как по линейке. а дальше сам достраиваешь."
        },
        {
          "speaker": "heroine",
          "text": "Ты достраиваешь прямо?"
        },
        {
          "speaker": "vlad",
          "text": "конечно."
        },
        {
          "speaker": "heroine",
          "text": "А мне теперь хочется чуть-чуть наискосок. Чтобы край на другом конце не сошёлся."
        },
        {
          "speaker": "narrator",
          "text": "Влад пробует провести в воздухе такую линию. Получается крохотная ступенька там, где на бумаге пусто."
        },
        {
          "speaker": "vlad",
          "text": "вот за эту я бы точно зацепился."
        },
        {
          "speaker": "narrator",
          "text": "Вы доходите до последнего листа. Вблизи «Просвет» оказывается почти весь синим. Внизу проступает порог."
        },
        {
          "speaker": "heroine",
          "text": "У этого последнего снимка свои условия. Пока идёшь мимо, там просто полоса."
        },
        {
          "speaker": "vlad",
          "text": "тогда постоим."
        }
      ],
      "next": "c7.gallery.pick"
    },
    "c7.gallery.apart": {
      "id": "c7.gallery.apart",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Давай ненадолго разойдёмся. Каждый что-нибудь найдёт, а потом сам покажет другому."
        },
        {
          "speaker": "vlad",
          "text": "встречаемся на скамейке. только место в первом ряду мне оставь."
        },
        {
          "speaker": "heroine",
          "text": "Тут всего одна скамейка."
        },
        {
          "speaker": "vlad",
          "text": "поэтому я так рано бронирую."
        },
        {
          "speaker": "narrator",
          "text": "Ты обходишь перегородку справа. Отсюда не видно Влада. Наедине с последним листом можно задержаться сколько хочется."
        },
        {
          "speaker": "narrator",
          "text": "Синее на «Просвете» сначала кажется ровным. Постепенно различаются старая краска и нижний порог. Тёплая щель оказывается дверным проёмом."
        },
        {
          "speaker": "narrator",
          "text": "От правой работы ты подходишь к средней. Вблизи у белой полосы видны каменные крупинки. Одна линия обрывается зазубриной."
        },
        {
          "speaker": "narrator",
          "text": "Если смотреть с этой стороны, синий лист остаётся позади. Теперь лестница на «Сколе» словно ведёт из двери, а не в неё."
        },
        {
          "speaker": "narrator",
          "text": "Когда ты доходишь до скамейки, Влад уже там. Он оставил для тебя место с краю, откуда видны оба прохода."
        },
        {
          "speaker": "vlad",
          "text": "у меня маршрут длиной в шесть шагов. один придётся сделать задом."
        },
        {
          "speaker": "heroine",
          "text": "Обратная дорога включена?"
        },
        {
          "speaker": "vlad",
          "text": "да. и персональный показ без очереди."
        },
        {
          "speaker": "narrator",
          "text": "Влад поднимается и уступает тебе дорогу. Из-за перегородки торчит узкая белая полоса первой работы."
        },
        {
          "speaker": "vlad",
          "text": "я сначала решил, что смотрю на стену. подошёл ближе — а это краешек фотографии. так и нашёл свою."
        },
        {
          "speaker": "heroine",
          "text": "Значит, назад надо было отступить, чтобы её увидеть?"
        },
        {
          "speaker": "vlad",
          "text": "это уже половина моей экскурсии. теперь ты веди."
        },
        {
          "speaker": "narrator",
          "text": "Вы останавливаетесь там, откуда расходятся два прохода. Ты можешь отвести его к синей двери или показать скол со своей стороны."
        }
      ],
      "next": "c7.gallery.pick"
    },
    "c7.gallery.pick": {
      "id": "c7.gallery.pick",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "blue",
          "text": "Выбираю «Просвет». Покажу, что видно в синем",
          "next": "c7.gallery.blue",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryWork",
              "value": "blue"
            }
          ]
        },
        {
          "id": "chip",
          "text": "Мне тоже интереснее «Скол». Покажу свою деталь",
          "next": "c7.gallery.chip",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryWork",
              "value": "chip"
            }
          ]
        }
      ]
    },
    "c7.gallery.blue": {
      "id": "c7.gallery.blue",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты остаёшься у последнего листа, когда Влад уже собрался идти обратно. Он возвращается к тебе.",
          "variants": [
            {
              "when": [
                {
                  "key": "c7GalleryRoute",
                  "equals": "together"
                }
              ],
              "text": "Ты остаёшься у последнего листа, когда Влад уже собрался идти обратно. Он возвращается к тебе."
            },
            {
              "when": [
                {
                  "key": "c7GalleryRoute",
                  "equals": "apart"
                }
              ],
              "text": "Ты проводишь Влада правым проходом и ставишь напротив синего листа. На этот раз он пришёл сюда с твоей стороны."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Посмотри сначала вниз. Видишь порог?"
        },
        {
          "speaker": "narrator",
          "text": "Влад наклоняется к подписи, потом выпрямляется. На уровне его пояса из тени проступает тонкая полоска пола."
        },
        {
          "speaker": "vlad",
          "text": "вижу. а я только щель и заметил. на ней столько света, что я мысленно остальное уже обрезал."
        },
        {
          "speaker": "heroine",
          "text": "Если обрезать, дверь будет открыта настежь. А мне нравится, что она еле-еле приоткрыта."
        },
        {
          "speaker": "vlad",
          "text": "я бы всё-таки оставил света побольше."
        },
        {
          "speaker": "heroine",
          "text": "А я бы тебе ножницы не дала."
        },
        {
          "speaker": "vlad",
          "text": "правильно. я уже приготовился испортить твою любимую фотографию."
        },
        {
          "speaker": "narrator",
          "text": "Влад ещё немного смотрит на лист, затем отходит к средней перегородке и приглашает тебя на своё место.",
          "variants": [
            {
              "when": [
                {
                  "key": "c7GalleryRoute",
                  "equals": "together"
                }
              ],
              "text": "Влад ещё немного смотрит на лист, затем отходит к средней перегородке и приглашает тебя на своё место."
            },
            {
              "when": [
                {
                  "key": "c7GalleryRoute",
                  "equals": "apart"
                }
              ],
              "text": "Влад ведёт тебя к средней перегородке. Пять шагов вперёд, обещанный шестой назад. Он уступает тебе место между двумя работами."
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "теперь попробуй отсюда. у меня этот угол синего торчит рядом со сколом. видишь?"
        },
        {
          "speaker": "heroine",
          "text": "Как будто кусочек отсюда выпал и туда попал."
        },
        {
          "speaker": "vlad",
          "text": "да. и вот его я как раз не стал бы трогать."
        },
        {
          "speaker": "narrator",
          "text": "Ты отходишь, и синий угол исчезает. Влад по-прежнему стоит у средней фотографии, ты видишь свою поверх его плеча."
        }
      ],
      "next": "c7.gallery.replay"
    },
    "c7.gallery.chip": {
      "id": "c7.gallery.chip",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты возвращаешься от синего листа к среднему и заходишь с другой стороны. Влад обходит перегородку следом.",
          "variants": [
            {
              "when": [
                {
                  "key": "c7GalleryRoute",
                  "equals": "together"
                }
              ],
              "text": "Ты возвращаешься от синего листа к среднему и заходишь с другой стороны. Влад обходит перегородку следом."
            },
            {
              "when": [
                {
                  "key": "c7GalleryRoute",
                  "equals": "apart"
                }
              ],
              "text": "Ты ведёшь Влада к «Сколу» со стороны синей двери. С его скамейки сюда нужно было бы обойти перегородку по кругу."
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Выбираю твою. Только ты смотришь, где край оборвался, а я вот куда."
        },
        {
          "speaker": "narrator",
          "text": "Ты показываешь на целую полоску ниже скола. На неё от верхней ступени падает тень с маленьким зубцом."
        },
        {
          "speaker": "vlad",
          "text": "так у скола есть ещё один скол. ниже этажом."
        },
        {
          "speaker": "heroine",
          "text": "Он мне больше нравится. Ничего не откололось, а там всё равно дыра."
        },
        {
          "speaker": "vlad",
          "text": "подвинься на шаг левее. хочу посмотреть ровно оттуда, откуда ты."
        },
        {
          "speaker": "narrator",
          "text": "Ты освобождаешь место. Влад встаёт рядом с рамой. Теперь обе зазубрины оказываются одна над другой."
        },
        {
          "speaker": "vlad",
          "text": "интересно. основную я нашёл за секунду, а эту бы вообще не увидел."
        },
        {
          "speaker": "heroine",
          "text": "Ну что, моя лучше?"
        },
        {
          "speaker": "vlad",
          "text": "моя заметнее. а твою приятно кому-нибудь показывать. это разные удовольствия."
        },
        {
          "speaker": "heroine",
          "text": "Ладно. Тогда давай обратно моё место."
        },
        {
          "speaker": "narrator",
          "text": "Он отступает с полушутливым поклоном. Ты задерживаешься перед листом, пока Влад у соседнего края ищет тень ещё раз."
        },
        {
          "speaker": "narrator",
          "text": "Влад ведёт тебя к торцу перегородки. Пятый шаг вперёд, шестой назад. Отсюда в скол как раз попадает край белой стены.",
          "when": [
            {
              "key": "c7GalleryRoute",
              "equals": "apart"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "видишь, как заделали? а если ещё шаг назад — снова дыра.",
          "when": [
            {
              "key": "c7GalleryRoute",
              "equals": "apart"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Теперь понятно, зачем ты забронировал место именно на этой скамейке.",
          "when": [
            {
              "key": "c7GalleryRoute",
              "equals": "apart"
            }
          ]
        }
      ],
      "next": "c7.gallery.replay"
    },
    "c7.gallery.replay": {
      "id": "c7.gallery.replay",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "мне понравилось, как ты у двери обернулась. сам бы стоял и читал подпись, а тут захотелось встать на твоё место."
        },
        {
          "speaker": "heroine",
          "text": "А ты смотришь, куда я показываю, или на меня?"
        },
        {
          "speaker": "vlad",
          "text": "по очереди. теперь никуда не тороплюсь."
        },
        {
          "speaker": "narrator",
          "text": "Со скамейки у выхода Влад берёт складной план выставки. Три прямоугольника и дверь."
        },
        {
          "speaker": "narrator",
          "text": "На обороте ряд из трёх миниатюр. Он прикрывает пальцем первую, потом открывает обратно."
        },
        {
          "speaker": "heroine",
          "text": "Ты что проверяешь?"
        },
        {
          "speaker": "vlad",
          "text": "интересно, заметил бы я скол, если бы перед ним не было этих ровных ступенек."
        },
        {
          "speaker": "heroine",
          "text": "Ты часто так делаешь? Возвращаешься на одно место, хотя уже всё прошёл?"
        },
        {
          "speaker": "vlad",
          "text": "ага. у меня на компьютере до сих пор лежит одно сохранение на два хода."
        },
        {
          "speaker": "vlad",
          "text": "играл один, управлял двумя фишками. жёлтая ближе к выходу, синяя в обходном коридоре. я всё гнал жёлтую вперёд."
        },
        {
          "speaker": "heroine",
          "text": "А синяя?"
        },
        {
          "speaker": "vlad",
          "text": "добиралась в объезд. я выиграл, выключил игру, пошёл чистить зубы. стою со щёткой и вдруг вспоминаю, где стояла жёлтая."
        },
        {
          "speaker": "heroine",
          "text": "Ты всё-таки доиграл со щёткой во рту?"
        },
        {
          "speaker": "vlad",
          "text": "я хотя бы рот прополоскал."
        },
        {
          "speaker": "narrator",
          "text": "Он расправляет листок схемой вверх и ставит два пальца на разные углы."
        },
        {
          "speaker": "vlad",
          "text": "вернулся ровно на тот ход. оставил жёлтую на плите. пока она там, для синей открыта боковая дверь."
        },
        {
          "speaker": "narrator",
          "text": "Он ведёт вторым пальцем через край листа. Первый палец остаётся на месте."
        },
        {
          "speaker": "vlad",
          "text": "синяя вышла сразу. жёлтая — следом. всё это время я ей мешал тем, что слишком быстро играл за первую."
        },
        {
          "speaker": "heroine",
          "text": "И сохранил именно это место?"
        },
        {
          "speaker": "vlad",
          "text": "да. мне весь уровень ни к чему. люблю вот эту секунду, когда старый ход вдруг видишь по-другому."
        },
        {
          "speaker": "heroine",
          "text": "Покажи ещё раз. Теперь я за синюю."
        },
        {
          "speaker": "narrator",
          "text": "Ты ставишь палец на угол листка. Влад удерживает свой на сгибе, пока твой проскальзывает через нарисованный дверной проём."
        },
        {
          "speaker": "heroine",
          "text": "Всё. Можешь сходить с плиты."
        },
        {
          "speaker": "vlad",
          "text": "подожди. ты мне отдавила бумажный выход."
        },
        {
          "speaker": "narrator",
          "text": "Ты расправляешь загнувшийся угол. Влад доводит свою фишку до края и складывает план по прежним сгибам."
        }
      ],
      "next": "c7.gallery.rack"
    },
    "c7.gallery.rack": {
      "id": "c7.gallery.rack",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Внизу на поворотной стойке продаются открытки с выставки. Поперёк одной идёт ломаная белая полоса. С соседней смотрит синяя дверь."
        },
        {
          "speaker": "narrator",
          "text": "На маленькой синей открытке всё-таки различим порог. На белой даже в таком размере остаётся зубец в тени."
        },
        {
          "speaker": "narrator",
          "text": "Влад придерживает стеклянную дверь чуть дальше по проходу. Стойка и обе открытки у тебя под рукой."
        },
        {
          "speaker": "devil",
          "text": "Если очень быстро крутануть стойку, обе картинки сольются в одну."
        },
        {
          "speaker": "angel",
          "text": "Получится третья. Смазанная."
        }
      ],
      "next": "c7.gallery.card",
      "presentation": "adviser-aside"
    },
    "c7.gallery.card": {
      "id": "c7.gallery.card",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "chip",
          "text": "Подарю Владу «Скол»",
          "next": "c7.gallery.giveChip"
        },
        {
          "id": "blue",
          "text": "Подарю Владу «Просвет»",
          "next": "c7.gallery.giveBlue"
        },
        {
          "id": "none",
          "text": "Оставлю открытки на стойке",
          "next": "c7.gallery.leaveCards"
        }
      ]
    },
    "c7.gallery.giveChip": {
      "id": "c7.gallery.giveChip",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты покупаешь «Скол» и догоняешь Влада у двери."
        },
        {
          "speaker": "heroine",
          "text": "Это тебе. Твой любимый кусочек лестницы."
        },
        {
          "speaker": "vlad",
          "text": "ух ты. даже тень на месте."
        },
        {
          "speaker": "narrator",
          "text": "Влад берёт открытку за белые края. Большим пальцем убирает с них бумажную соринку.",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "chip"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "спасибо. у меня есть отличный карман, куда я ещё не успел напихать ключей."
        },
        {
          "speaker": "narrator",
          "text": "Он вкладывает открытку между половинками плана выставки и убирает в карман."
        }
      ],
      "next": "c7.gallery.outside"
    },
    "c7.gallery.giveBlue": {
      "id": "c7.gallery.giveBlue",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты покупаешь «Просвет». Когда подходишь к Владу, он ещё придерживает дверь. Ты протягиваешь ему открытку."
        },
        {
          "speaker": "heroine",
          "text": "Держи. Здесь уже в самый раз синего."
        },
        {
          "speaker": "vlad",
          "text": "ты мне доверяешь столько свободного места?"
        },
        {
          "speaker": "heroine",
          "text": "Справишься."
        },
        {
          "speaker": "narrator",
          "text": "Влад подносит открытку ближе к свету. На ней проступает крошечный порог.",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "blue"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "слушай, её как раз хорошо смотреть с расстояния в одну руку. спасибо."
        },
        {
          "speaker": "narrator",
          "text": "Он прикрывает лицевую сторону сложенным планом выставки и кладёт карточку в карман."
        }
      ],
      "next": "c7.gallery.outside"
    },
    "c7.gallery.leaveCards": {
      "id": "c7.gallery.leaveCards",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.hall",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "Ты проходишь мимо стойки. Влад придерживает дверь. За ней поперёк тротуара лежит белая полоса.",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryGift",
              "value": "none"
            }
          ]
        },
        {
          "speaker": "heroine",
          "text": "Вот уж теперь я везде буду видеть эту лестницу."
        },
        {
          "speaker": "vlad",
          "text": "осторожно, эта настоящая."
        },
        {
          "speaker": "narrator",
          "text": "У двери действительно одна невысокая ступенька. Вы спускаетесь на тротуар."
        }
      ],
      "next": "c7.gallery.outside"
    },
    "c7.gallery.outside": {
      "id": "c7.gallery.outside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "За дверью светлее. Рядом с афишей тёмное стекло отражает фасад напротив, край козырька и кусок тротуара под вашими ногами."
        },
        {
          "speaker": "narrator",
          "text": "Ты достаёшь общий аппарат. На счётчике двадцать один."
        },
        {
          "speaker": "vlad",
          "text": "теперь можно. твой кадр."
        }
      ],
      "next": "c7.gallery.frame"
    },
    "c7.gallery.frame": {
      "id": "c7.gallery.frame",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "vlad",
          "text": "Я сниму тебя у афиши",
          "next": "c7.gallery.shotVlad",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFrame",
              "value": "vlad"
            }
          ]
        },
        {
          "id": "her",
          "text": "Теперь ты меня. Силуэт на пороге",
          "next": "c7.gallery.shotHer",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFrame",
              "value": "her"
            }
          ]
        },
        {
          "id": "both",
          "text": "Давай сниму нас обоих в стекле",
          "next": "c7.gallery.shotBoth",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFrame",
              "value": "both"
            }
          ]
        }
      ]
    },
    "c7.gallery.shotVlad": {
      "id": "c7.gallery.shotVlad",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Останься у афиши. Чуть левее, чтобы и полоса влезла."
        },
        {
          "speaker": "narrator",
          "text": "Влад встаёт рядом с плакатом. Белая полоса на бумаге оказывается продолжением линии его плеча."
        },
        {
          "speaker": "vlad",
          "text": "так?"
        },
        {
          "speaker": "heroine",
          "text": "Да. Теперь сиди смирно, лестница."
        },
        {
          "speaker": "vlad",
          "text": "стою смирно. это моя лучшая роль сегодня."
        },
        {
          "speaker": "narrator",
          "text": "Он смотрит прямо в объектив. Ты нажимаешь кнопку и прокручиваешь колёсико.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c7.gallery.film"
    },
    "c7.gallery.shotHer": {
      "id": "c7.gallery.shotHer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Лучше сними меня. Я встану на пороге, лицом к улице."
        },
        {
          "speaker": "narrator",
          "text": "Ты передаёшь аппарат Владу и остаёшься за внешним краем двери. От козырька падает тень, за спиной светлая стена.",
          "effects": [
            {
              "kind": "set",
              "key": "c7CameraHolder",
              "value": "vlad"
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "я вижу твой силуэт и узкую полоску двери. пойдёт?"
        },
        {
          "speaker": "heroine",
          "text": "Именно. Снимай."
        },
        {
          "speaker": "narrator",
          "text": "Влад нажимает кнопку и прокручивает колёсико. Ты сходишь со ступеньки и забираешь аппарат.",
          "effects": [
            {
              "kind": "set",
              "key": "c7CameraHolder",
              "value": "her"
            },
            {
              "kind": "set",
              "key": "c7Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c7.gallery.film"
    },
    "c7.gallery.shotBoth": {
      "id": "c7.gallery.shotBoth",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Я сниму стекло. Встань рядом, там мы оба помещаемся."
        },
        {
          "speaker": "narrator",
          "text": "Влад поворачивается к отражению. Между вашими силуэтами в стекле остаётся тонкая вертикальная линия рамы."
        },
        {
          "speaker": "vlad",
          "text": "у меня от козырька выросла шляпа."
        },
        {
          "speaker": "heroine",
          "text": "Оставь. Тебе идёт."
        },
        {
          "speaker": "narrator",
          "text": "Вы стоите рядом, глядя в стекло. Ты нажимаешь кнопку и прокручиваешь колёсико.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Film",
              "value": "key"
            }
          ]
        }
      ],
      "next": "c7.gallery.film"
    },
    "c7.gallery.film": {
      "id": "c7.gallery.film",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "На счётчике двадцать. Не отходя от двери, вы по очереди снимаете пять коротких деталей улицы."
        },
        {
          "speaker": "narrator",
          "text": "Узкая ступенька. Тень козырька. Винт в старой ручке. Светлый край афиши. Узоры краски на раме."
        },
        {
          "speaker": "narrator",
          "text": "Ты убираешь общий аппарат в сумку. Свободно пятнадцать кадров. В стекле ещё видно галерею, но с тротуара названий работ уже не разобрать.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Film",
              "value": "six"
            },
            {
              "kind": "set",
              "key": "c7CameraHolder",
              "value": "her"
            }
          ]
        }
      ],
      "next": "c7.gallery.supper"
    },
    "c7.gallery.supper": {
      "id": "c7.gallery.supper",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": "По тротуару тянет жареным луком. Влад оборачивается на открытое окно."
        },
        {
          "speaker": "vlad",
          "text": "вот эту выставку мне даже объяснять не надо."
        },
        {
          "speaker": "heroine",
          "text": "Так вот куда тебя теперь водить."
        },
        {
          "speaker": "vlad",
          "text": "вообще-то у меня есть идея получше."
        },
        {
          "speaker": "vlad",
          "text": "приходи ко мне в следующий раз. хочу что-нибудь приготовить с тобой. чтобы мы потом это сами и съели."
        },
        {
          "speaker": "heroine",
          "text": "Вот это «приготовить с тобой» мне нравится. Оставь мне хотя бы половину кухни."
        },
        {
          "speaker": "vlad",
          "text": "договорились. у меня там один фартук, но это решаемо."
        },
        {
          "speaker": "heroine",
          "text": "Фартук твой. А что готовить, давай решим уже на месте."
        },
        {
          "speaker": "vlad",
          "text": "идёт. с меня продукты. приходи к ужину, успеем проголодаться."
        },
        {
          "speaker": "narrator",
          "text": "У пешеходного перехода зажигается зелёный. Владу дальше прямо, тебе — через дорогу."
        }
      ],
      "next": "c7.gallery.farewell"
    },
    "c7.gallery.farewell": {
      "id": "c7.gallery.farewell",
      "kind": "choice",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "choices": [
        {
          "id": "cheek",
          "text": "Хочу поцеловать его в щёку",
          "next": "c7.gallery.cheek",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFarewell",
              "value": "cheek"
            }
          ]
        },
        {
          "id": "words",
          "text": "Попрощаюсь словами",
          "next": "c7.gallery.words",
          "effects": [
            {
              "kind": "set",
              "key": "c7GalleryFarewell",
              "value": "words"
            }
          ]
        }
      ]
    },
    "c7.gallery.cheek": {
      "id": "c7.gallery.cheek",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Влад, наклонись на секунду."
        },
        {
          "speaker": "narrator",
          "text": "Влад чуть наклоняется к тебе. Ты целуешь его в щёку и отступаешь, чтобы увидеть его лицо.",
          "effects": [
            {
              "kind": "set",
              "key": "c7Cheek",
              "value": true
            }
          ]
        },
        {
          "speaker": "vlad",
          "text": "вот теперь стой. мне надо успеть улыбнуться тебе, пока ты не перешла дорогу."
        },
        {
          "speaker": "narrator",
          "text": "Он улыбается. Ты замечаешь у него на щеке короткую складку, которой не было секунду назад."
        },
        {
          "speaker": "heroine",
          "text": "Успел. Пока, Влад."
        },
        {
          "speaker": "vlad",
          "text": "пока. увидимся на кухне."
        },
        {
          "speaker": "narrator",
          "text": "Ты переходишь дорогу. Когда зелёный начинает мигать, ты уже на другой стороне."
        }
      ],
      "next": "c7.gallery.end"
    },
    "c7.gallery.words": {
      "id": "c7.gallery.words",
      "kind": "dialogue",
      "scene": {
        "background": "bg.gallery7.outside",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": "Мне понравилось гулять с тобой по этому залу. И ужин я запомнила."
        },
        {
          "speaker": "vlad",
          "text": "а я, кажется, весь вечер буду переступать на шаг влево. хорошее ты нашла место."
        },
        {
          "speaker": "heroine",
          "text": "Буду знать, где тебя искать. Пока, Влад."
        },
        {
          "speaker": "vlad",
          "text": "пока. увидимся на кухне."
        },
        {
          "speaker": "narrator",
          "text": "Ты переходишь дорогу. С другой стороны видно, что Влад ещё ждёт на углу. Ты машешь ему, и он машет в ответ."
        }
      ],
      "next": "c7.gallery.end"
    },
    "c7.gallery.end": {
      "id": "c7.gallery.end",
      "kind": "end",
      "endingId": "c7.gallery",
      "cardId": "c7.gallery"
    }
  }
};
