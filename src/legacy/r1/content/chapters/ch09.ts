import type { Chapter } from '../../engine/types';
export const chapter9:Chapter={
  "id": 9,
  "contentVersion": 9,
  "title": "Фильм подождёт",
  "entry": "c9.entry",
  "nodes": {
    "c9.entry": {
      "id": "c9.entry",
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
      "next": "c9.past.route"
    },
    "c9.past.route": {
      "id": "c9.past.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Ending",
              "equals": "kiss"
            }
          ],
          "next": "c9.past.kiss"
        },
        {
          "all": [
            {
              "key": "c8Ending",
              "equals": "near"
            }
          ],
          "next": "c9.past.near"
        }
      ],
      "fallback": "c9.past.tea"
    },
    "c9.past.kiss": {
      "id": "c9.past.kiss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c9.place"
    },
    "c9.past.near": {
      "id": "c9.past.near",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c9.place"
    },
    "c9.past.tea": {
      "id": "c9.past.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.river.evening",
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
      "next": "c9.place"
    },
    "c9.place": {
      "id": "c9.place",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Где устроим киновечер?",
      "choices": [
        {
          "id": "home",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Place",
              "value": "home"
            },
            {
              "kind": "spark",
              "id": "c9.spark.plan"
            }
          ],
          "next": "c9.arrival.home"
        },
        {
          "id": "courtyard",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Place",
              "value": "courtyard"
            },
            {
              "kind": "spark",
              "id": "c9.spark.plan"
            }
          ],
          "next": "c9.arrival.courtyard"
        }
      ]
    },
    "c9.arrival.home": {
      "id": "c9.arrival.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.advisers"
    },
    "c9.arrival.courtyard": {
      "id": "c9.arrival.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.advisers"
    },
    "c9.advisers": {
      "id": "c9.advisers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.guide"
    },
    "c9.guide": {
      "id": "c9.guide",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Чью идею возьмём?",
      "choices": [
        {
          "id": "angel",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Guide",
              "value": "angel"
            }
          ],
          "next": "c9.guide.angel"
        },
        {
          "id": "devil",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Guide",
              "value": "devil"
            }
          ],
          "next": "c9.guide.devil"
        },
        {
          "id": "none",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Guide",
              "value": "none"
            }
          ],
          "next": "c9.guide.none"
        }
      ]
    },
    "c9.guide.angel": {
      "id": "c9.guide.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "angel",
          "text": ""
        }
      ],
      "next": "c9.thought"
    },
    "c9.guide.devil": {
      "id": "c9.guide.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c9.thought"
    },
    "c9.guide.none": {
      "id": "c9.guide.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.thought"
    },
    "c9.thought": {
      "id": "c9.thought",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Какая мысль сейчас твоя?",
      "choices": [
        {
          "id": "curious",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Thought",
              "value": "curious"
            }
          ],
          "next": "c9.thought.curious"
        },
        {
          "id": "bold",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Thought",
              "value": "bold"
            }
          ],
          "next": "c9.thought.bold"
        },
        {
          "id": "slow",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Thought",
              "value": "slow"
            }
          ],
          "next": "c9.thought.slow"
        }
      ]
    },
    "c9.thought.curious": {
      "id": "c9.thought.curious",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c9.setup.intro"
    },
    "c9.thought.bold": {
      "id": "c9.thought.bold",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c9.setup.intro"
    },
    "c9.thought.slow": {
      "id": "c9.thought.slow",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine-thought",
          "text": ""
        }
      ],
      "next": "c9.setup.intro"
    },
    "c9.setup.intro": {
      "id": "c9.setup.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.setup"
    },
    "c9.setup": {
      "id": "c9.setup",
      "kind": "minigame",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "game": "movie-setup",
      "next": "c9.glitch.route"
    },
    "c9.glitch.route": {
      "id": "c9.glitch.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Place",
              "equals": "home"
            }
          ],
          "next": "c9.glitch.home"
        }
      ],
      "fallback": "c9.glitch.courtyard"
    },
    "c9.glitch.home": {
      "id": "c9.glitch.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.pause"
    },
    "c9.glitch.courtyard": {
      "id": "c9.glitch.courtyard",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.pause"
    },
    "c9.pause": {
      "id": "c9.pause",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.memory"
    },
    "c9.memory": {
      "id": "c9.memory",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Какую его фразу хочется вернуть в разговор?",
      "choices": [
        {
          "id": "place",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Memory",
              "value": "place"
            },
            {
              "kind": "spark",
              "id": "c9.spark.memory"
            }
          ],
          "next": "c9.memory.place"
        },
        {
          "id": "idea",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Memory",
              "value": "idea"
            },
            {
              "kind": "spark",
              "id": "c9.spark.memory"
            }
          ],
          "next": "c9.memory.idea"
        },
        {
          "id": "wait",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Memory",
              "value": "wait"
            },
            {
              "kind": "spark",
              "id": "c9.spark.memory"
            }
          ],
          "next": "c9.memory.wait"
        },
        {
          "id": "none",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Memory",
              "value": "none"
            }
          ],
          "next": "c9.memory.none"
        }
      ]
    },
    "c9.memory.place": {
      "id": "c9.memory.place",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c9.vlad.thought"
    },
    "c9.memory.idea": {
      "id": "c9.memory.idea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.vlad.thought"
    },
    "c9.memory.wait": {
      "id": "c9.memory.wait",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.vlad.thought"
    },
    "c9.memory.none": {
      "id": "c9.memory.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.vlad.thought"
    },
    "c9.vlad.thought": {
      "id": "c9.vlad.thought",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "vlad-thought",
          "text": ""
        }
      ],
      "next": "c9.note"
    },
    "c9.note": {
      "id": "c9.note",
      "kind": "note",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "questionId": "s2.q9",
      "prompt": "Какой момент этого вечера ты бы захотела продлить?",
      "maxCodePoints": 280,
      "next": "c9.envelope.route"
    },
    "c9.envelope.route": {
      "id": "c9.envelope.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "all-sparks",
              "chapter": 9
            }
          ],
          "next": "c9.envelope.offer"
        }
      ],
      "fallback": "c9.closing"
    },
    "c9.envelope.offer": {
      "id": "c9.envelope.offer",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Маленький секрет вечера",
      "choices": [
        {
          "id": "open",
          "text": "",
          "effects": [
            {
              "kind": "open-bonus"
            }
          ],
          "next": "c9.bonus.route"
        },
        {
          "id": "later",
          "text": "",
          "effects": [],
          "next": "c9.closing"
        }
      ]
    },
    "c9.bonus.route": {
      "id": "c9.bonus.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Guide",
              "equals": "angel"
            }
          ],
          "next": "c9.bonus.angel"
        },
        {
          "all": [
            {
              "key": "c9Guide",
              "equals": "devil"
            }
          ],
          "next": "c9.bonus.devil"
        }
      ],
      "fallback": "c9.bonus.none"
    },
    "c9.bonus.angel": {
      "id": "c9.bonus.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.closing"
    },
    "c9.bonus.devil": {
      "id": "c9.bonus.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.closing"
    },
    "c9.bonus.none": {
      "id": "c9.bonus.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.closing"
    },
    "c9.closing": {
      "id": "c9.closing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.ending"
    },
    "c9.ending": {
      "id": "c9.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Что тебе хочется сейчас?",
      "choices": [
        {
          "id": "kiss",
          "text": "",
          "effects": [],
          "next": "c9.kiss.initiative"
        },
        {
          "id": "hug",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Approach",
              "value": "none"
            },
            {
              "kind": "set",
              "key": "c9Ending",
              "value": "hug"
            }
          ],
          "next": "c9.finish.hug"
        },
        {
          "id": "film",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Approach",
              "value": "none"
            },
            {
              "kind": "set",
              "key": "c9Ending",
              "value": "film"
            }
          ],
          "next": "c9.finish.film"
        }
      ]
    },
    "c9.kiss.initiative": {
      "id": "c9.kiss.initiative",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Как ты начнёшь?",
      "choices": [
        {
          "id": "her",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Approach",
              "value": "her"
            },
            {
              "kind": "set",
              "key": "c9Ending",
              "value": "kiss"
            }
          ],
          "next": "c9.kiss.her"
        },
        {
          "id": "ask",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Approach",
              "value": "ask"
            },
            {
              "kind": "set",
              "key": "c9Ending",
              "value": "kiss"
            }
          ],
          "next": "c9.kiss.ask"
        },
        {
          "id": "back",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c9Approach",
              "value": "none"
            },
            {
              "kind": "set",
              "key": "c9Ending",
              "value": "film"
            }
          ],
          "next": "c9.finish.film"
        }
      ]
    },
    "c9.kiss.her": {
      "id": "c9.kiss.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
        }
      ],
      "next": "c9.kiss.history"
    },
    "c9.kiss.ask": {
      "id": "c9.kiss.ask",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
        }
      ],
      "next": "c9.kiss.history"
    },
    "c9.kiss.history": {
      "id": "c9.kiss.history",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Ending",
              "equals": "kiss"
            }
          ],
          "next": "c9.kiss.again"
        }
      ],
      "fallback": "c9.kiss.first"
    },
    "c9.kiss.first": {
      "id": "c9.kiss.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.finish.kiss"
    },
    "c9.kiss.again": {
      "id": "c9.kiss.again",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.finish.kiss"
    },
    "c9.finish.kiss": {
      "id": "c9.finish.kiss",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "lines": [
        {
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c9.end.kiss"
    },
    "c9.finish.hug": {
      "id": "c9.finish.hug",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.end.hug"
    },
    "c9.finish.film": {
      "id": "c9.finish.film",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cinema.courtyard",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c9Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
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
      "next": "c9.end.film"
    },
    "c9.end.kiss": {
      "id": "c9.end.kiss",
      "kind": "end",
      "endingId": "c9.kiss",
      "cardId": "c9.kiss"
    },
    "c9.end.hug": {
      "id": "c9.end.hug",
      "kind": "end",
      "endingId": "c9.hug",
      "cardId": "c9.hug"
    },
    "c9.end.film": {
      "id": "c9.end.film",
      "kind": "end",
      "endingId": "c9.film",
      "cardId": "c9.film"
    }
  }
};
