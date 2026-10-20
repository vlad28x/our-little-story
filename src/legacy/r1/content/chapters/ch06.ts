import type { Chapter } from '../../engine/types';

// Exact script: outputs/CHAPTER_06_SCRIPT.md. Keep dialogue and node IDs in sync.
export const chapter6:Chapter={
  "id": 6,
  "contentVersion": 6,
  "title": "Ещё пять минут",
  "entry": "c6.entry",
  "nodes": {
    "c6.entry": {
      "id": "c6.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.past.route"
    },
    "c6.past.route": {
      "id": "c6.past.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "ending",
              "equals": "friendly"
            }
          ],
          "next": "c6.past.friendly"
        }
      ],
      "fallback": "c6.past.open"
    },
    "c6.past.friendly": {
      "id": "c6.past.friendly",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.advisers"
    },
    "c6.past.open": {
      "id": "c6.past.open",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.advisers"
    },
    "c6.advisers": {
      "id": "c6.advisers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
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
          "speaker": "angel",
          "text": ""
        }
      ],
      "next": "c6.guide"
    },
    "c6.guide": {
      "id": "c6.guide",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "С кем пройдём этот вечер?",
      "choices": [
        {
          "id": "angel",
          "text": "",
          "next": "c6.guide.angel",
          "effects": [
            {
              "kind": "set",
              "key": "c6Guide",
              "value": "angel"
            }
          ]
        },
        {
          "id": "devil",
          "text": "",
          "next": "c6.guide.devil",
          "effects": [
            {
              "kind": "set",
              "key": "c6Guide",
              "value": "devil"
            }
          ]
        },
        {
          "id": "none",
          "text": "",
          "next": "c6.guide.none",
          "effects": [
            {
              "kind": "set",
              "key": "c6Guide",
              "value": "none"
            }
          ]
        }
      ]
    },
    "c6.guide.angel": {
      "id": "c6.guide.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "angel",
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
      "next": "c6.thought"
    },
    "c6.guide.devil": {
      "id": "c6.guide.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c6.thought"
    },
    "c6.guide.none": {
      "id": "c6.guide.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
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
      "next": "c6.thought"
    },
    "c6.thought": {
      "id": "c6.thought",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Что тебе сейчас ближе?",
      "choices": [
        {
          "id": "linger",
          "text": "",
          "next": "c6.thought.linger",
          "effects": [
            {
              "kind": "set",
              "key": "c6Thought",
              "value": "linger"
            }
          ]
        },
        {
          "id": "tease",
          "text": "",
          "next": "c6.thought.tease",
          "effects": [
            {
              "kind": "set",
              "key": "c6Thought",
              "value": "tease"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "",
          "next": "c6.thought.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c6Thought",
              "value": "quiet"
            }
          ]
        }
      ]
    },
    "c6.thought.linger": {
      "id": "c6.thought.linger",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c6.voice"
    },
    "c6.thought.tease": {
      "id": "c6.thought.tease",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c6.voice"
    },
    "c6.thought.quiet": {
      "id": "c6.thought.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c6.voice"
    },
    "c6.voice": {
      "id": "c6.voice",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "А что ты скажешь?",
      "choices": [
        {
          "id": "stay",
          "text": "",
          "next": "c6.voice.stay",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "stay"
            },
            {
              "kind": "spark",
              "id": "c6.spark.voice"
            }
          ]
        },
        {
          "id": "tease",
          "text": "",
          "next": "c6.voice.tease",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "tease"
            },
            {
              "kind": "spark",
              "id": "c6.spark.voice"
            }
          ]
        },
        {
          "id": "quiet",
          "text": "",
          "next": "c6.voice.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "c6Voice",
              "value": "quiet"
            },
            {
              "kind": "spark",
              "id": "c6.spark.voice"
            }
          ]
        }
      ]
    },
    "c6.voice.stay": {
      "id": "c6.voice.stay",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.vlad.thought"
    },
    "c6.voice.tease": {
      "id": "c6.voice.tease",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.vlad.thought"
    },
    "c6.voice.quiet": {
      "id": "c6.voice.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.vlad.thought"
    },
    "c6.vlad.thought": {
      "id": "c6.vlad.thought",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad-thought",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.map.intro"
    },
    "c6.map.intro": {
      "id": "c6.map.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.map"
    },
    "c6.map": {
      "id": "c6.map",
      "kind": "minigame",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "game": "evening-route",
      "next": "c6.map.route"
    },
    "c6.map.route": {
      "id": "c6.map.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "route-mode",
              "equals": "skipped"
            }
          ],
          "next": "c6.map.skipped"
        }
      ],
      "fallback": "c6.first.route"
    },
    "c6.map.skipped": {
      "id": "c6.map.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.first.route": {
      "id": "c6.first.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "water"
            }
          ],
          "next": "c6.first.water"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "lights"
            }
          ],
          "next": "c6.first.lights"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 0,
              "equals": "window"
            }
          ],
          "next": "c6.first.window"
        }
      ],
      "fallback": "c6.crossing"
    },
    "c6.first.water": {
      "id": "c6.first.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.second.route"
    },
    "c6.first.lights": {
      "id": "c6.first.lights",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.second.route"
    },
    "c6.first.window": {
      "id": "c6.first.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
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
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.second.route"
    },
    "c6.second.route": {
      "id": "c6.second.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "water"
            }
          ],
          "next": "c6.second.water"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "lights"
            }
          ],
          "next": "c6.second.lights"
        },
        {
          "all": [
            {
              "kind": "route-stop",
              "index": 1,
              "equals": "window"
            }
          ],
          "next": "c6.second.window"
        }
      ],
      "fallback": "c6.crossing"
    },
    "c6.second.water": {
      "id": "c6.second.water",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.second.lights": {
      "id": "c6.second.lights",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.second.window": {
      "id": "c6.second.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.window.evening",
        "character": "vlad.city.laugh"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.mission.route"
    },
    "c6.mission.route": {
      "id": "c6.mission.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "angel"
            },
            {
              "kind": "route-includes",
              "stop": "water"
            }
          ],
          "next": "c6.mission.angel.hit"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "angel"
            }
          ],
          "next": "c6.mission.angel.miss"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "devil"
            },
            {
              "kind": "route-mode",
              "equals": "own"
            }
          ],
          "next": "c6.mission.devil.hit"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "devil"
            }
          ],
          "next": "c6.mission.devil.miss"
        }
      ],
      "fallback": "c6.mission.none"
    },
    "c6.mission.angel.hit": {
      "id": "c6.mission.angel.hit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c6.crossing"
    },
    "c6.mission.angel.miss": {
      "id": "c6.mission.angel.miss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c6.crossing"
    },
    "c6.mission.devil.hit": {
      "id": "c6.mission.devil.hit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c6.crossing"
    },
    "c6.mission.devil.miss": {
      "id": "c6.mission.devil.miss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c6.crossing"
    },
    "c6.mission.none": {
      "id": "c6.mission.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c6.crossing"
    },
    "c6.crossing": {
      "id": "c6.crossing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.gesture"
    },
    "c6.gesture": {
      "id": "c6.gesture",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Как продолжим?",
      "choices": [
        {
          "id": "her",
          "text": "",
          "next": "c6.gesture.her",
          "effects": [
            {
              "kind": "set",
              "key": "c6Contact",
              "value": "her"
            },
            {
              "kind": "spark",
              "id": "c6.spark.moment"
            }
          ]
        },
        {
          "id": "asked",
          "text": "",
          "next": "c6.gesture.asked",
          "effects": [
            {
              "kind": "set",
              "key": "c6Contact",
              "value": "asked"
            },
            {
              "kind": "spark",
              "id": "c6.spark.moment"
            }
          ]
        },
        {
          "id": "none",
          "text": "",
          "next": "c6.gesture.none",
          "effects": [
            {
              "kind": "set",
              "key": "c6Contact",
              "value": "none"
            },
            {
              "kind": "spark",
              "id": "c6.spark.moment"
            }
          ]
        }
      ]
    },
    "c6.gesture.her": {
      "id": "c6.gesture.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.envelope.route"
    },
    "c6.gesture.asked": {
      "id": "c6.gesture.asked",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.envelope.route"
    },
    "c6.gesture.none": {
      "id": "c6.gesture.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.envelope.route"
    },
    "c6.envelope.route": {
      "id": "c6.envelope.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "all-sparks",
              "chapter": 6
            }
          ],
          "next": "c6.envelope.offer"
        }
      ],
      "fallback": "c6.note.intro"
    },
    "c6.envelope.offer": {
      "id": "c6.envelope.offer",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Три искры — маленький секрет вечера",
      "choices": [
        {
          "id": "open",
          "text": "",
          "next": "c6.envelope.variant",
          "effects": [
            {
              "kind": "open-bonus"
            }
          ]
        },
        {
          "id": "later",
          "text": "",
          "next": "c6.note.intro"
        }
      ]
    },
    "c6.envelope.variant": {
      "id": "c6.envelope.variant",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "angel"
            }
          ],
          "next": "c6.bonus.angel"
        },
        {
          "all": [
            {
              "key": "c6Guide",
              "equals": "devil"
            }
          ],
          "next": "c6.bonus.devil"
        }
      ],
      "fallback": "c6.bonus.none"
    },
    "c6.bonus.angel": {
      "id": "c6.bonus.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
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
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c6.note.intro"
    },
    "c6.bonus.devil": {
      "id": "c6.bonus.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
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
          "speaker": "angel",
          "text": ""
        },
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c6.note.intro"
    },
    "c6.bonus.none": {
      "id": "c6.bonus.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
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
      "next": "c6.note.intro"
    },
    "c6.note.intro": {
      "id": "c6.note.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.note"
    },
    "c6.note": {
      "id": "c6.note",
      "kind": "note",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "questionId": "s2.q6",
      "prompt": "Что могло бы заставить тебя задержаться со мной ещё немного?",
      "maxCodePoints": 280,
      "next": "c6.note.after"
    },
    "c6.note.after": {
      "id": "c6.note.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.ending"
    },
    "c6.ending": {
      "id": "c6.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Ещё немного или проводить тебя?",
      "choices": [
        {
          "id": "hand",
          "text": "",
          "next": "c6.ending.hand.route",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "hand"
            }
          ]
        },
        {
          "id": "lap",
          "text": "",
          "next": "c6.ending.lap.route",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "lap"
            }
          ]
        },
        {
          "id": "home",
          "text": "",
          "next": "c6.ending.home",
          "effects": [
            {
              "kind": "set",
              "key": "c6Ending",
              "value": "home"
            }
          ]
        }
      ]
    },
    "c6.ending.hand.route": {
      "id": "c6.ending.hand.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "her"
            }
          ],
          "next": "c6.ending.hand.already"
        },
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "asked"
            }
          ],
          "next": "c6.ending.hand.already"
        }
      ],
      "fallback": "c6.ending.hand.new"
    },
    "c6.ending.hand.already": {
      "id": "c6.ending.hand.already",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        }
      ],
      "next": "c6.end.hand"
    },
    "c6.ending.hand.new": {
      "id": "c6.ending.hand.new",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.warm"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
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
          "text": ""
        }
      ],
      "next": "c6.end.hand"
    },
    "c6.ending.lap.route": {
      "id": "c6.ending.lap.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "her"
            }
          ],
          "next": "c6.ending.lap.release"
        },
        {
          "all": [
            {
              "key": "c6Contact",
              "equals": "asked"
            }
          ],
          "next": "c6.ending.lap.release"
        }
      ],
      "fallback": "c6.ending.lap"
    },
    "c6.ending.lap.release": {
      "id": "c6.ending.lap.release",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.ending.lap"
    },
    "c6.ending.lap": {
      "id": "c6.ending.lap",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c6.end.lap"
    },
    "c6.ending.home": {
      "id": "c6.ending.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c6.end.home"
    },
    "c6.end.hand": {
      "id": "c6.end.hand",
      "kind": "end",
      "endingId": "c6.hand",
      "cardId": "c6.hand"
    },
    "c6.end.lap": {
      "id": "c6.end.lap",
      "kind": "end",
      "endingId": "c6.lap",
      "cardId": "c6.lap"
    },
    "c6.end.home": {
      "id": "c6.end.home",
      "kind": "end",
      "endingId": "c6.home",
      "cardId": "c6.home"
    }
  }
};
