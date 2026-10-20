import type { Line,TopicAnswer,PlaceAnswer,ToneAnswer } from '../engine/types';
export type CouncilRound={title:string;staging:string;vlad:string;angel:string;devil:string;answers:{id:TopicAnswer|PlaceAnswer|ToneAnswer;label:string;lines:Line[]}[]};
export const councilRounds:CouncilRound[]=[
  {
    "title": "С чего начнём?",
    "staging": "Вы идёте вдоль витрин. Влад замедляет шаг, чтобы разговор не остался на ходу",
    "vlad": "ладно, честно: мне любопытно, что тебе хочется обо мне узнать",
    "angel": "спроси о конкретном моменте. так легче услышать настоящий ответ",
    "devil": "можешь и проверить его уверенность. только без экзамена на идеальность",
    "answers": [
      {
        "id": "question",
        "label": "Спросить, какой момент нашей прогулки он запомнил",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "warm"
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "warm"
          }
        ]
      },
      {
        "id": "challenge",
        "label": "Поддеть: «Ты со всеми такой уверенный?»",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "smile"
          },
          {
            "speaker": "narrator",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "warm"
          }
        ]
      },
      {
        "id": "ordinary",
        "label": "Спросить, как он отдыхает после тяжёлого дня",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "laugh"
          },
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "laugh"
          }
        ]
      }
    ]
  },
  {
    "title": "Маленький поворот",
    "staging": "С улицы под крышу приходит шумная компания. У боковой арки свободно; у стеклянной стены тоже есть тихое место",
    "vlad": "кажется, у нашей прогулки появились зрители. где продолжим?",
    "angel": "можно предложить место вместе. не обязательно всё решать одной",
    "devil": "видишь ту арку? выбери её и позови его за собой",
    "answers": [
      {
        "id": "lead",
        "label": "Самой предложить: «Пойдём под ту арку»",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "smile"
          },
          {
            "speaker": "narrator",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "smile"
          }
        ]
      },
      {
        "id": "invite",
        "label": "Предложить выбрать тихое место вместе",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "warm"
          },
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "narrator",
            "text": ""
          }
        ]
      },
      {
        "id": "stay",
        "label": "Остаться здесь, у стеклянной стены",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "smile"
          },
          {
            "speaker": "narrator",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "smile"
          }
        ]
      }
    ]
  },
  {
    "title": "Без мелкого шрифта",
    "staging": "Разговор становится тише. Влад убирает телефон поглубже в карман, даже не взглянув на экран",
    "vlad": "я иногда прячу серьёзное в шутку. удобно, конечно. но сегодня не хочется всё прятать",
    "angel": "можно попросить сказать прямо. а можно не торопить этот разговор",
    "devil": "если хочется флиртовать в ответ — сейчас очень подходящий момент",
    "answers": [
      {
        "id": "direct",
        "label": "Попросить: «Тогда скажи прямо»",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "warm"
          },
          {
            "speaker": "narrator",
            "text": ""
          }
        ]
      },
      {
        "id": "playful",
        "label": "Ответить: «Мне нравится, когда ты со мной флиртуешь»",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "smile"
          },
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "smile"
          }
        ]
      },
      {
        "id": "quiet",
        "label": "Предложить пока просто побыть рядом",
        "lines": [
          {
            "speaker": "heroine",
            "text": ""
          },
          {
            "speaker": "vlad",
            "text": "",
            "emotion": "warm"
          },
          {
            "speaker": "narrator",
            "text": ""
          }
        ]
      }
    ]
  }
];
