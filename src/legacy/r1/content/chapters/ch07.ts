import type { Chapter } from '../../engine/types';
export const chapter7:Chapter = {
  "id": 7,
  "contentVersion": 7,
  "title": "Между строк",
  "entry": "c7.entry",
  "nodes": {
    "c7.entry": {
      "id": "c7.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.past.route"
    },
    "c7.past.route": {
      "id": "c7.past.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Ending",
              "equals": "hand"
            }
          ],
          "next": "c7.past.hand"
        },
        {
          "all": [
            {
              "key": "c6Ending",
              "equals": "lap"
            }
          ],
          "next": "c7.past.lap"
        }
      ],
      "fallback": "c7.past.home"
    },
    "c7.past.hand": {
      "id": "c7.past.hand",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.place.route"
    },
    "c7.past.lap": {
      "id": "c7.past.lap",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.place.route"
    },
    "c7.past.home": {
      "id": "c7.past.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.place.route"
    },
    "c7.place.route": {
      "id": "c7.place.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c7PreviousStop",
              "equals": "water"
            }
          ],
          "next": "c7.place.water"
        },
        {
          "all": [
            {
              "key": "c7PreviousStop",
              "equals": "lights"
            }
          ],
          "next": "c7.place.lights"
        },
        {
          "all": [
            {
              "key": "c7PreviousStop",
              "equals": "window"
            }
          ],
          "next": "c7.place.window"
        }
      ],
      "fallback": "c7.place.skipped"
    },
    "c7.place.water": {
      "id": "c7.place.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.arrival"
    },
    "c7.place.lights": {
      "id": "c7.place.lights",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        },
        {
          "speaker": "heroine",
          "text": ""
        }
      ],
      "next": "c7.arrival"
    },
    "c7.place.window": {
      "id": "c7.place.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.arrival"
    },
    "c7.place.skipped": {
      "id": "c7.place.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.arrival"
    },
    "c7.arrival": {
      "id": "c7.arrival",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.advisers"
    },
    "c7.advisers": {
      "id": "c7.advisers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "devil",
          "text": ""
        },
        {
          "speaker": "angel",
          "text": ""
        }
      ],
      "next": "c7.guide"
    },
    "c7.guide": {
      "id": "c7.guide",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Кого послушаем сегодня?",
      "choices": [
        {
          "id": "angel",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Guide",
              "value": "angel"
            }
          ],
          "next": "c7.guide.angel"
        },
        {
          "id": "devil",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Guide",
              "value": "devil"
            }
          ],
          "next": "c7.guide.devil"
        },
        {
          "id": "none",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Guide",
              "value": "none"
            }
          ],
          "next": "c7.guide.none"
        }
      ]
    },
    "c7.guide.angel": {
      "id": "c7.guide.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c7.thought"
    },
    "c7.guide.devil": {
      "id": "c7.guide.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": ""
        },
        {
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c7.thought"
    },
    "c7.guide.none": {
      "id": "c7.guide.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": ""
        },
        {
          "speaker": "angel",
          "text": ""
        }
      ],
      "next": "c7.thought"
    },
    "c7.thought": {
      "id": "c7.thought",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Что остаётся у тебя в мыслях?",
      "choices": [
        {
          "id": "curious",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Thought",
              "value": "curious"
            }
          ],
          "next": "c7.thought.curious"
        },
        {
          "id": "playful",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Thought",
              "value": "playful"
            }
          ],
          "next": "c7.thought.playful"
        },
        {
          "id": "steady",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Thought",
              "value": "steady"
            }
          ],
          "next": "c7.thought.steady"
        }
      ]
    },
    "c7.thought.curious": {
      "id": "c7.thought.curious",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c7.game.intro"
    },
    "c7.thought.playful": {
      "id": "c7.thought.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c7.game.intro"
    },
    "c7.thought.steady": {
      "id": "c7.thought.steady",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c7.game.intro"
    },
    "c7.game.intro": {
      "id": "c7.game.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.council"
    },
    "c7.council": {
      "id": "c7.council",
      "kind": "minigame",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "game": "between-lines",
      "next": "c7.after.route"
    },
    "c7.after.route": {
      "id": "c7.after.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "council-answer",
              "slot": "tone",
              "equals": "direct"
            }
          ],
          "next": "c7.after.direct"
        },
        {
          "all": [
            {
              "kind": "council-answer",
              "slot": "tone",
              "equals": "playful"
            }
          ],
          "next": "c7.after.playful"
        },
        {
          "all": [
            {
              "kind": "council-answer",
              "slot": "tone",
              "equals": "quiet"
            }
          ],
          "next": "c7.after.quiet"
        }
      ],
      "fallback": "c7.after.skipped"
    },
    "c7.after.direct": {
      "id": "c7.after.direct",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.vlad.thought"
    },
    "c7.after.playful": {
      "id": "c7.after.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.vlad.thought"
    },
    "c7.after.quiet": {
      "id": "c7.after.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.vlad.thought"
    },
    "c7.after.skipped": {
      "id": "c7.after.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.vlad.thought"
    },
    "c7.vlad.thought": {
      "id": "c7.vlad.thought",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad-thought",
          "text": ""
        }
      ],
      "next": "c7.moment"
    },
    "c7.moment": {
      "id": "c7.moment",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
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
      ],
      "next": "c7.distance"
    },
    "c7.distance": {
      "id": "c7.distance",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Как тебе хочется остаться рядом?",
      "choices": [
        {
          "id": "arm",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Distance",
              "value": "arm"
            },
            {
              "kind": "spark",
              "id": "c7.spark.moment"
            }
          ],
          "next": "c7.distance.arm"
        },
        {
          "id": "near",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Distance",
              "value": "near"
            },
            {
              "kind": "spark",
              "id": "c7.spark.moment"
            }
          ],
          "next": "c7.distance.near"
        },
        {
          "id": "space",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Distance",
              "value": "space"
            },
            {
              "kind": "spark",
              "id": "c7.spark.moment"
            }
          ],
          "next": "c7.distance.space"
        }
      ]
    },
    "c7.distance.arm": {
      "id": "c7.distance.arm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
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
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.mission.route"
    },
    "c7.distance.near": {
      "id": "c7.distance.near",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
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
      ],
      "next": "c7.mission.route"
    },
    "c7.distance.space": {
      "id": "c7.distance.space",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
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
      ],
      "next": "c7.mission.route"
    },
    "c7.mission.route": {
      "id": "c7.mission.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c7Guide",
              "equals": "angel"
            },
            {
              "kind": "council-answer",
              "slot": "topic",
              "equals": "question"
            }
          ],
          "next": "c7.mission.angel.done"
        },
        {
          "all": [
            {
              "key": "c7Guide",
              "equals": "angel"
            }
          ],
          "next": "c7.mission.angel.other"
        },
        {
          "all": [
            {
              "key": "c7Guide",
              "equals": "devil"
            },
            {
              "kind": "council-answer",
              "slot": "place",
              "equals": "lead"
            }
          ],
          "next": "c7.mission.devil.done"
        },
        {
          "all": [
            {
              "key": "c7Guide",
              "equals": "devil"
            }
          ],
          "next": "c7.mission.devil.other"
        }
      ],
      "fallback": "c7.mission.none"
    },
    "c7.mission.angel.done": {
      "id": "c7.mission.angel.done",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": ""
        }
      ],
      "next": "c7.note.intro"
    },
    "c7.mission.angel.other": {
      "id": "c7.mission.angel.other",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": ""
        }
      ],
      "next": "c7.note.intro"
    },
    "c7.mission.devil.done": {
      "id": "c7.mission.devil.done",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c7.note.intro"
    },
    "c7.mission.devil.other": {
      "id": "c7.mission.devil.other",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c7.note.intro"
    },
    "c7.mission.none": {
      "id": "c7.mission.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": ""
        }
      ],
      "next": "c7.note.intro"
    },
    "c7.note.intro": {
      "id": "c7.note.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.note"
    },
    "c7.note": {
      "id": "c7.note",
      "kind": "note",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "questionId": "s2.q7",
      "prompt": "Что тебе хотелось бы спросить у меня, если бы я обещал ответить честно?",
      "maxCodePoints": 280,
      "next": "c7.note.after"
    },
    "c7.note.after": {
      "id": "c7.note.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.envelope.route"
    },
    "c7.envelope.route": {
      "id": "c7.envelope.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "all-sparks",
              "chapter": 7
            }
          ],
          "next": "c7.envelope.offer"
        }
      ],
      "fallback": "c7.closing"
    },
    "c7.envelope.offer": {
      "id": "c7.envelope.offer",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Три искры — маленькая сцена на полях",
      "choices": [
        {
          "id": "open",
          "text": "",
          "effects": [
            {
              "kind": "open-bonus"
            }
          ],
          "next": "c7.bonus.route"
        },
        {
          "id": "later",
          "text": "",
          "effects": [],
          "next": "c7.closing"
        }
      ]
    },
    "c7.bonus.route": {
      "id": "c7.bonus.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c7Guide",
              "equals": "angel"
            }
          ],
          "next": "c7.bonus.angel"
        },
        {
          "all": [
            {
              "key": "c7Guide",
              "equals": "devil"
            }
          ],
          "next": "c7.bonus.devil"
        }
      ],
      "fallback": "c7.bonus.none"
    },
    "c7.bonus.angel": {
      "id": "c7.bonus.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "devil",
          "text": ""
        },
        {
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.closing"
    },
    "c7.bonus.devil": {
      "id": "c7.bonus.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": ""
        },
        {
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "devil",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c7.closing"
    },
    "c7.bonus.none": {
      "id": "c7.bonus.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "devil",
          "text": ""
        },
        {
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c7.closing"
    },
    "c7.closing": {
      "id": "c7.closing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
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
      ],
      "next": "c7.ending"
    },
    "c7.ending": {
      "id": "c7.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Что скажешь ему сейчас?",
      "choices": [
        {
          "id": "open",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Ending",
              "value": "open"
            }
          ],
          "next": "c7.finish.open"
        },
        {
          "id": "promise",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Ending",
              "value": "promise"
            }
          ],
          "next": "c7.finish.promise"
        },
        {
          "id": "calm",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c7Ending",
              "value": "calm"
            }
          ],
          "next": "c7.finish.calm"
        }
      ]
    },
    "c7.finish.open": {
      "id": "c7.finish.open",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
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
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.end.open"
    },
    "c7.finish.promise": {
      "id": "c7.finish.promise",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c7.end.promise"
    },
    "c7.finish.calm": {
      "id": "c7.finish.calm",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.gallery.evening",
        "character": "vlad.city.smile"
      },
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
      ],
      "next": "c7.end.calm"
    },
    "c7.end.open": {
      "id": "c7.end.open",
      "kind": "end",
      "endingId": "c7.open",
      "cardId": "c7.open"
    },
    "c7.end.promise": {
      "id": "c7.end.promise",
      "kind": "end",
      "endingId": "c7.promise",
      "cardId": "c7.promise"
    },
    "c7.end.calm": {
      "id": "c7.end.calm",
      "kind": "end",
      "endingId": "c7.calm",
      "cardId": "c7.calm"
    }
  }
};
