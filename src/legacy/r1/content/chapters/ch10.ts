import type { Chapter } from '../../engine/types';
export const chapter10:Chapter={
  "id": 10,
  "contentVersion": 10,
  "title": "Оставим свет?",
  "entry": "c10.entry",
  "nodes": {
    "c10.entry": {
      "id": "c10.entry",
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
      "next": "c10.past.route"
    },
    "c10.past.route": {
      "id": "c10.past.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c9Ending",
              "equals": "kiss"
            }
          ],
          "next": "c10.past.kiss"
        },
        {
          "all": [
            {
              "key": "c9Ending",
              "equals": "hug"
            }
          ],
          "next": "c10.past.hug"
        }
      ],
      "fallback": "c10.past.film"
    },
    "c10.past.kiss": {
      "id": "c10.past.kiss",
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
      "next": "c10.place"
    },
    "c10.past.hug": {
      "id": "c10.past.hug",
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
      "next": "c10.place"
    },
    "c10.past.film": {
      "id": "c10.past.film",
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
      "next": "c10.place"
    },
    "c10.place": {
      "id": "c10.place",
      "kind": "choice",
      "scene": {
        "background": "bg.river.evening",
        "character": "vlad.city.smile"
      },
      "prompt": "Где тебе хочется встретиться?",
      "choices": [
        {
          "id": "home",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Place",
              "value": "home"
            },
            {
              "kind": "spark",
              "id": "c10.spark.plan"
            }
          ],
          "next": "c10.arrival.home"
        },
        {
          "id": "terrace",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Place",
              "value": "terrace"
            },
            {
              "kind": "spark",
              "id": "c10.spark.plan"
            }
          ],
          "next": "c10.arrival.terrace"
        }
      ]
    },
    "c10.arrival.home": {
      "id": "c10.arrival.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.advisers"
    },
    "c10.arrival.terrace": {
      "id": "c10.arrival.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.advisers"
    },
    "c10.advisers": {
      "id": "c10.advisers",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.guide"
    },
    "c10.guide": {
      "id": "c10.guide",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
              "key": "c10Guide",
              "value": "angel"
            }
          ],
          "next": "c10.guide.angel"
        },
        {
          "id": "devil",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Guide",
              "value": "devil"
            }
          ],
          "next": "c10.guide.devil"
        },
        {
          "id": "none",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Guide",
              "value": "none"
            }
          ],
          "next": "c10.guide.none"
        }
      ]
    },
    "c10.guide.angel": {
      "id": "c10.guide.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.thought"
    },
    "c10.guide.devil": {
      "id": "c10.guide.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.thought"
    },
    "c10.guide.none": {
      "id": "c10.guide.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.thought"
    },
    "c10.thought": {
      "id": "c10.thought",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
              "key": "c10Thought",
              "value": "curious"
            }
          ],
          "next": "c10.thought.curious"
        },
        {
          "id": "bold",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Thought",
              "value": "bold"
            }
          ],
          "next": "c10.thought.bold"
        },
        {
          "id": "slow",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Thought",
              "value": "slow"
            }
          ],
          "next": "c10.thought.slow"
        }
      ]
    },
    "c10.thought.curious": {
      "id": "c10.thought.curious",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.memory.intro"
    },
    "c10.thought.bold": {
      "id": "c10.thought.bold",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.memory.intro"
    },
    "c10.thought.slow": {
      "id": "c10.thought.slow",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.memory.intro"
    },
    "c10.memory.intro": {
      "id": "c10.memory.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.memory"
    },
    "c10.memory": {
      "id": "c10.memory",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Какой знак останется на закладке?",
      "choices": [
        {
          "id": "pause",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "pause"
            },
            {
              "kind": "spark",
              "id": "c10.spark.memory"
            }
          ],
          "next": "c10.memory.pause"
        },
        {
          "id": "laugh",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "laugh"
            },
            {
              "kind": "spark",
              "id": "c10.spark.memory"
            }
          ],
          "next": "c10.memory.laugh"
        },
        {
          "id": "initiative",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "initiative"
            },
            {
              "kind": "spark",
              "id": "c10.spark.memory"
            }
          ],
          "next": "c10.memory.initiative"
        },
        {
          "id": "none",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Memory",
              "value": "none"
            }
          ],
          "next": "c10.memory.none"
        }
      ]
    },
    "c10.memory.pause": {
      "id": "c10.memory.pause",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.light.intro"
    },
    "c10.memory.laugh": {
      "id": "c10.memory.laugh",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c10.light.intro"
    },
    "c10.memory.initiative": {
      "id": "c10.memory.initiative",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c10.light.intro"
    },
    "c10.memory.none": {
      "id": "c10.memory.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.light.intro"
    },
    "c10.light.intro": {
      "id": "c10.light.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.light"
    },
    "c10.light": {
      "id": "c10.light",
      "kind": "minigame",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "game": "evening-light",
      "next": "c10.vlad.thought"
    },
    "c10.vlad.thought": {
      "id": "c10.vlad.thought",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.note"
    },
    "c10.note": {
      "id": "c10.note",
      "kind": "note",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "questionId": "s2.q10",
      "prompt": "Что тебе хотелось бы оставить за кадром этой истории?",
      "maxCodePoints": 280,
      "next": "c10.envelope.route"
    },
    "c10.envelope.route": {
      "id": "c10.envelope.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "kind": "all-sparks",
              "chapter": 10
            }
          ],
          "next": "c10.envelope.offer"
        }
      ],
      "fallback": "c10.advisers.exit"
    },
    "c10.envelope.offer": {
      "id": "c10.envelope.offer",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
          "next": "c10.bonus.route"
        },
        {
          "id": "later",
          "text": "",
          "effects": [],
          "next": "c10.advisers.exit"
        }
      ]
    },
    "c10.bonus.route": {
      "id": "c10.bonus.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Guide",
              "equals": "angel"
            }
          ],
          "next": "c10.bonus.angel"
        },
        {
          "all": [
            {
              "key": "c10Guide",
              "equals": "devil"
            }
          ],
          "next": "c10.bonus.devil"
        }
      ],
      "fallback": "c10.bonus.none"
    },
    "c10.bonus.angel": {
      "id": "c10.bonus.angel",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.advisers.exit"
    },
    "c10.bonus.devil": {
      "id": "c10.bonus.devil",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.advisers.exit"
    },
    "c10.bonus.none": {
      "id": "c10.bonus.none",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
        },
        {
          "speaker": "devil",
          "text": ""
        }
      ],
      "next": "c10.advisers.exit"
    },
    "c10.advisers.exit": {
      "id": "c10.advisers.exit",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c10.private.talk"
    },
    "c10.private.talk": {
      "id": "c10.private.talk",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c10.ending"
    },
    "c10.ending": {
      "id": "c10.ending",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Чего хочется тебе сейчас?",
      "choices": [
        {
          "id": "goodnight",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "goodnight"
            }
          ],
          "next": "c10.goodnight.route"
        },
        {
          "id": "stay",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "stay"
            }
          ],
          "next": "c10.stay.route"
        },
        {
          "id": "private",
          "text": "",
          "effects": [],
          "next": "c10.private.place.route"
        }
      ]
    },
    "c10.private.place.route": {
      "id": "c10.private.place.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Place",
              "equals": "home"
            }
          ],
          "next": "c10.private.confirm"
        }
      ],
      "fallback": "c10.move.offer"
    },
    "c10.move.offer": {
      "id": "c10.move.offer",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.move"
    },
    "c10.move": {
      "id": "c10.move",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Как продолжим?",
      "choices": [
        {
          "id": "home",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Move",
              "value": "home"
            }
          ],
          "next": "c10.move.home"
        },
        {
          "id": "stay",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Move",
              "value": "stay"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "stay"
            }
          ],
          "next": "c10.stay.terrace"
        },
        {
          "id": "goodnight",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Move",
              "value": "stay"
            },
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "goodnight"
            }
          ],
          "next": "c10.goodnight.terrace"
        }
      ]
    },
    "c10.move.home": {
      "id": "c10.move.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.private.confirm"
    },
    "c10.private.confirm": {
      "id": "c10.private.confirm",
      "kind": "choice",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          }
        ]
      },
      "prompt": "Как тебе хочется продолжить?",
      "choices": [
        {
          "id": "yes",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "private"
            }
          ],
          "next": "c10.kiss.history"
        },
        {
          "id": "quiet",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "stay"
            }
          ],
          "next": "c10.stay.home"
        },
        {
          "id": "leave",
          "text": "",
          "effects": [
            {
              "kind": "set",
              "key": "c10Ending",
              "value": "goodnight"
            }
          ],
          "next": "c10.goodnight.home"
        }
      ]
    },
    "c10.kiss.history": {
      "id": "c10.kiss.history",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c8Ending",
              "equals": "kiss"
            }
          ],
          "next": "c10.kiss.again"
        },
        {
          "all": [
            {
              "key": "c9Ending",
              "equals": "kiss"
            }
          ],
          "next": "c10.kiss.again"
        }
      ],
      "fallback": "c10.kiss.first"
    },
    "c10.kiss.first": {
      "id": "c10.kiss.first",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.private.fade"
    },
    "c10.kiss.again": {
      "id": "c10.kiss.again",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.private.fade"
    },
    "c10.private.fade": {
      "id": "c10.private.fade",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c10.end.private"
    },
    "c10.goodnight.route": {
      "id": "c10.goodnight.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Place",
              "equals": "home"
            }
          ],
          "next": "c10.goodnight.home"
        },
        {
          "all": [
            {
              "key": "c10Move",
              "equals": "home"
            }
          ],
          "next": "c10.goodnight.home"
        }
      ],
      "fallback": "c10.goodnight.terrace"
    },
    "c10.goodnight.home": {
      "id": "c10.goodnight.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c10.end.goodnight"
    },
    "c10.goodnight.terrace": {
      "id": "c10.goodnight.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "warm"
        }
      ],
      "next": "c10.end.goodnight"
    },
    "c10.stay.route": {
      "id": "c10.stay.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "c10Place",
              "equals": "home"
            }
          ],
          "next": "c10.stay.home"
        },
        {
          "all": [
            {
              "key": "c10Move",
              "equals": "home"
            }
          ],
          "next": "c10.stay.home"
        }
      ],
      "fallback": "c10.stay.terrace"
    },
    "c10.stay.home": {
      "id": "c10.stay.home",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.end.stay"
    },
    "c10.stay.terrace": {
      "id": "c10.stay.terrace",
      "kind": "dialogue",
      "scene": {
        "background": "bg.s2.cafe.terrace",
        "character": "vlad.city.smile",
        "variants": [
          {
            "when": [
              {
                "key": "c10Place",
                "equals": "home"
              }
            ],
            "background": "bg.home.living",
            "character": "vlad.casual.smile"
          },
          {
            "when": [
              {
                "key": "c10Move",
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
      "next": "c10.end.stay"
    },
    "c10.end.goodnight": {
      "id": "c10.end.goodnight",
      "kind": "end",
      "endingId": "c10.goodnight",
      "cardId": "c10.goodnight"
    },
    "c10.end.stay": {
      "id": "c10.end.stay",
      "kind": "end",
      "endingId": "c10.stay",
      "cardId": "c10.stay"
    },
    "c10.end.private": {
      "id": "c10.end.private",
      "kind": "end",
      "endingId": "c10.private",
      "cardId": "c10.private"
    }
  }
};
