import type { Chapter } from '../../engine/types';
export const chapter8:Chapter={
  "id": 8,
  "contentVersion": 8,
  "title": "На чай. Конечно",
  "entry": "c8.entry",
  "nodes": {
    "c8.entry": {
      "id": "c8.entry",
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
      "next": "c8.past.route"
    },
    "c8.past.route": {
      "id": "c8.past.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c7Ending",
              "equals": "open"
            }
          ],
          "next": "c8.past.open"
        },
        {
          "all": [
            {
              "key": "c7Ending",
              "equals": "promise"
            }
          ],
          "next": "c8.past.promise"
        }
      ],
      "fallback": "c8.past.calm"
    },
    "c8.past.open": {
      "id": "c8.past.open",
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
      "next": "c8.place"
    },
    "c8.past.promise": {
      "id": "c8.past.promise",
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
      "next": "c8.place"
    },
    "c8.past.calm": {
      "id": "c8.past.calm",
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
        }
      ],
      "next": "c8.place"
    },
    "c8.place": {
      "id": "c8.place",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Где тебе хочется провести этот вечер?",
      "choices": [
        {
          "id": "home",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Place",
              "value": "home"
            },
            {
              "kind": "spark",
              "id": "c8.spark.plan"
            }
          ],
          "next": "c8.arrival.home"
        },
        {
          "id": "cafe",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Place",
              "value": "cafe"
            },
            {
              "kind": "spark",
              "id": "c8.spark.plan"
            }
          ],
          "next": "c8.arrival.cafe"
        }
      ]
    },
    "c8.arrival.home": {
      "id": "c8.arrival.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.advisers"
    },
    "c8.arrival.cafe": {
      "id": "c8.arrival.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c8.advisers"
    },
    "c8.advisers": {
      "id": "c8.advisers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.guide"
    },
    "c8.guide": {
      "id": "c8.guide",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
              "key": "c8Guide",
              "value": "angel"
            }
          ],
          "next": "c8.guide.angel"
        },
        {
          "id": "devil",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Guide",
              "value": "devil"
            }
          ],
          "next": "c8.guide.devil"
        },
        {
          "id": "none",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Guide",
              "value": "none"
            }
          ],
          "next": "c8.guide.none"
        }
      ]
    },
    "c8.guide.angel": {
      "id": "c8.guide.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.thought"
    },
    "c8.guide.devil": {
      "id": "c8.guide.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.thought"
    },
    "c8.guide.none": {
      "id": "c8.guide.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.thought"
    },
    "c8.thought": {
      "id": "c8.thought",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
              "key": "c8Thought",
              "value": "curious"
            }
          ],
          "next": "c8.thought.curious"
        },
        {
          "id": "bold",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Thought",
              "value": "bold"
            }
          ],
          "next": "c8.thought.bold"
        },
        {
          "id": "slow",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Thought",
              "value": "slow"
            }
          ],
          "next": "c8.thought.slow"
        }
      ]
    },
    "c8.thought.curious": {
      "id": "c8.thought.curious",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.dessert.intro"
    },
    "c8.thought.bold": {
      "id": "c8.thought.bold",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.dessert.intro"
    },
    "c8.thought.slow": {
      "id": "c8.thought.slow",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.dessert.intro"
    },
    "c8.dessert.intro": {
      "id": "c8.dessert.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c8.dessert"
    },
    "c8.dessert": {
      "id": "c8.dessert",
      "kind": "minigame",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "game": "dessert",
      "next": "c8.dessert.after.route"
    },
    "c8.dessert.after.route": {
      "id": "c8.dessert.after.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "dessert-mode",
              "equals": "completed"
            }
          ],
          "next": "c8.dessert.own"
        },
        {
          "all": [
            {
              "kind": "dessert-mode",
              "equals": "shared"
            }
          ],
          "next": "c8.dessert.shared"
        }
      ],
      "fallback": "c8.dessert.skipped"
    },
    "c8.dessert.own": {
      "id": "c8.dessert.own",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.word"
    },
    "c8.dessert.shared": {
      "id": "c8.dessert.shared",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
        }
      ],
      "next": "c8.word"
    },
    "c8.dessert.skipped": {
      "id": "c8.dessert.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c8.word"
    },
    "c8.word": {
      "id": "c8.word",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Как назовём этот маленький перерыв?",
      "choices": [
        {
          "id": "minute",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "minute"
            },
            {
              "kind": "spark",
              "id": "c8.spark.voice"
            }
          ],
          "next": "c8.word.after"
        },
        {
          "id": "slow",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "slow"
            },
            {
              "kind": "spark",
              "id": "c8.spark.voice"
            }
          ],
          "next": "c8.word.after"
        },
        {
          "id": "taks",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "taks"
            },
            {
              "kind": "spark",
              "id": "c8.spark.voice"
            }
          ],
          "next": "c8.word.after"
        },
        {
          "id": "custom",
          "text": "",
          "effects": [],
          "next": "c8.word.custom"
        },
        {
          "id": "none",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Word",
              "value": "none"
            },
            {
              "kind": "spark",
              "id": "c8.spark.voice"
            }
          ],
          "next": "c8.word.after"
        }
      ]
    },
    "c8.word.custom": {
      "id": "c8.word.custom",
      "kind": "label",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "labelId": "s2.word8",
      "maxCodePoints": 24,
      "next": "c8.word.after"
    },
    "c8.word.after": {
      "id": "c8.word.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c8.private.route"
    },
    "c8.private.route": {
      "id": "c8.private.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            }
          ],
          "next": "c8.private.home"
        }
      ],
      "fallback": "c8.private.cafe"
    },
    "c8.private.home": {
      "id": "c8.private.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c8.dance.route"
    },
    "c8.private.cafe": {
      "id": "c8.private.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.dance.route"
    },
    "c8.dance.route": {
      "id": "c8.dance.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Place",
              "equals": "home"
            }
          ],
          "next": "c8.dance.home"
        }
      ],
      "fallback": "c8.dance.cafe"
    },
    "c8.dance.home": {
      "id": "c8.dance.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c8.dance"
    },
    "c8.dance.cafe": {
      "id": "c8.dance.cafe",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
          "speaker": "heroine",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c8.dance"
    },
    "c8.dance": {
      "id": "c8.dance",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Какой будет ваш маленький танец?",
      "choices": [
        {
          "id": "close",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Dance",
              "value": "close"
            }
          ],
          "next": "c8.dance.close"
        },
        {
          "id": "lead",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Dance",
              "value": "lead"
            }
          ],
          "next": "c8.dance.lead"
        },
        {
          "id": "playful",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Dance",
              "value": "playful"
            }
          ],
          "next": "c8.dance.playful"
        }
      ]
    },
    "c8.dance.close": {
      "id": "c8.dance.close",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c8.dance.after"
    },
    "c8.dance.lead": {
      "id": "c8.dance.lead",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.dance.after"
    },
    "c8.dance.playful": {
      "id": "c8.dance.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      ],
      "next": "c8.dance.after"
    },
    "c8.dance.after": {
      "id": "c8.dance.after",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
        }
      ],
      "next": "c8.vlad.thought"
    },
    "c8.vlad.thought": {
      "id": "c8.vlad.thought",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.note"
    },
    "c8.note": {
      "id": "c8.note",
      "kind": "note",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "questionId": "s2.q8",
      "prompt": "Как бы ты дала мне понять, что хочешь поцелуя?",
      "maxCodePoints": 280,
      "next": "c8.envelope.route"
    },
    "c8.envelope.route": {
      "id": "c8.envelope.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "all-sparks",
              "chapter": 8
            }
          ],
          "next": "c8.envelope.offer"
        }
      ],
      "fallback": "c8.closing"
    },
    "c8.envelope.offer": {
      "id": "c8.envelope.offer",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
          "next": "c8.bonus.route"
        },
        {
          "id": "later",
          "text": "",
          "effects": [],
          "next": "c8.closing"
        }
      ]
    },
    "c8.bonus.route": {
      "id": "c8.bonus.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Guide",
              "equals": "angel"
            }
          ],
          "next": "c8.bonus.angel"
        },
        {
          "all": [
            {
              "key": "c8Guide",
              "equals": "devil"
            }
          ],
          "next": "c8.bonus.devil"
        }
      ],
      "fallback": "c8.bonus.none"
    },
    "c8.bonus.angel": {
      "id": "c8.bonus.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.closing"
    },
    "c8.bonus.devil": {
      "id": "c8.bonus.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.closing"
    },
    "c8.bonus.none": {
      "id": "c8.bonus.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.closing"
    },
    "c8.closing": {
      "id": "c8.closing",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.ending"
    },
    "c8.ending": {
      "id": "c8.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Как хочется закончить этот момент?",
      "choices": [
        {
          "id": "kiss",
          "text": "",
          "effects": [],
          "next": "c8.kiss.initiative"
        },
        {
          "id": "near",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Approach",
              "value": "none"
            },
            {
              "kind": "set",
              "key": "c8Ending",
              "value": "near"
            }
          ],
          "next": "c8.finish.near"
        },
        {
          "id": "tea",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Approach",
              "value": "none"
            },
            {
              "kind": "set",
              "key": "c8Ending",
              "value": "tea"
            }
          ],
          "next": "c8.finish.tea"
        }
      ]
    },
    "c8.kiss.initiative": {
      "id": "c8.kiss.initiative",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Как ты это скажешь?",
      "choices": [
        {
          "id": "her",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Approach",
              "value": "her"
            },
            {
              "kind": "set",
              "key": "c8Ending",
              "value": "kiss"
            }
          ],
          "next": "c8.kiss.her"
        },
        {
          "id": "ask",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Approach",
              "value": "ask"
            },
            {
              "kind": "set",
              "key": "c8Ending",
              "value": "kiss"
            }
          ],
          "next": "c8.kiss.ask"
        },
        {
          "id": "back",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c8Approach",
              "value": "none"
            },
            {
              "kind": "set",
              "key": "c8Ending",
              "value": "near"
            }
          ],
          "next": "c8.finish.near"
        }
      ]
    },
    "c8.kiss.her": {
      "id": "c8.kiss.her",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c8.end.kiss"
    },
    "c8.kiss.ask": {
      "id": "c8.kiss.ask",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c8.end.kiss"
    },
    "c8.finish.near": {
      "id": "c8.finish.near",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.end.near"
    },
    "c8.finish.tea": {
      "id": "c8.finish.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.sunset",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c8Place",
                "equals": "home"
              }
            ],
            "background": "bg.s2.kitchen.evening",
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
      "next": "c8.end.tea"
    },
    "c8.end.kiss": {
      "id": "c8.end.kiss",
      "kind": "end",
      "endingId": "c8.kiss",
      "cardId": "c8.kiss"
    },
    "c8.end.near": {
      "id": "c8.end.near",
      "kind": "end",
      "endingId": "c8.near",
      "cardId": "c8.near"
    },
    "c8.end.tea": {
      "id": "c8.end.tea",
      "kind": "end",
      "endingId": "c8.tea",
      "cardId": "c8.tea"
    }
  }
};
