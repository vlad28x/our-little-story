// Exact dialogue transfer from outputs/CHAPTER_01_SCRIPT.md. Edit content, not UI.
import type { Chapter } from '../../engine/types';
export const chapter1 = {
  "id": 1,
  "contentVersion": 1,
  "title": "Случайная встреча",
  "entry": "c1.entry",
  "nodes": {
    "c1.entry": {
      "id": "c1.entry",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
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
        },
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": "",
          "emotion": "awkward"
        }
      ],
      "next": "c1.door"
    },
    "c1.door": {
      "id": "c1.door",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
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
          "speaker": "vlad",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c1.approach"
    },
    "c1.approach": {
      "id": "c1.approach",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "joke",
          "text": "",
          "next": "c1.approach.joke",
          "effects": [
            {
              "kind": "set",
              "key": "approach",
              "value": "joke"
            }
          ]
        },
        {
          "id": "help",
          "text": "",
          "next": "c1.approach.help",
          "effects": [
            {
              "kind": "set",
              "key": "approach",
              "value": "help"
            }
          ]
        },
        {
          "id": "space",
          "text": "",
          "next": "c1.approach.space",
          "effects": [
            {
              "kind": "set",
              "key": "approach",
              "value": "space"
            }
          ]
        }
      ]
    },
    "c1.approach.joke": {
      "id": "c1.approach.joke",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.awkward"
      },
      "lines": [
        {
          "speaker": "vlad",
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
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c1.names"
    },
    "c1.approach.help": {
      "id": "c1.approach.help",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
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
      "next": "c1.names"
    },
    "c1.approach.space": {
      "id": "c1.approach.space",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "lines": [
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
      "next": "c1.names"
    },
    "c1.names": {
      "id": "c1.names",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
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
          "speaker": "nina",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c1.search.intro"
    },
    "c1.search.intro": {
      "id": "c1.search.intro",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.thinking"
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
      "next": "c1.search"
    },
    "c1.search": {
      "id": "c1.search",
      "kind": "minigame",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "game": "token-search",
      "next": "c1.search.route"
    },
    "c1.search.tidy": {
      "id": "c1.search.tidy",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.surprised"
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
      "next": "c1.inside"
    },
    "c1.search.detour": {
      "id": "c1.search.detour",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
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
      "next": "c1.inside"
    },
    "c1.search.skipped": {
      "id": "c1.search.skipped",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.entry",
        "character": "vlad.city.neutral"
      },
      "lines": [
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
      "next": "c1.inside"
    },
    "c1.inside": {
      "id": "c1.inside",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
        {
          "speaker": "nina",
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
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c1.pace"
    },
    "c1.pace": {
      "id": "c1.pace",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "quiet",
          "text": "",
          "next": "c1.pace.quiet",
          "effects": [
            {
              "kind": "set",
              "key": "pace",
              "value": "quiet"
            }
          ]
        },
        {
          "id": "playful",
          "text": "",
          "next": "c1.pace.playful",
          "effects": [
            {
              "kind": "set",
              "key": "pace",
              "value": "playful"
            }
          ]
        },
        {
          "id": "flirt",
          "text": "",
          "next": "c1.pace.flirt",
          "effects": [
            {
              "kind": "set",
              "key": "pace",
              "value": "flirt"
            }
          ]
        }
      ]
    },
    "c1.pace.quiet": {
      "id": "c1.pace.quiet",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "lines": [
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
      "next": "c1.table"
    },
    "c1.pace.playful": {
      "id": "c1.pace.playful",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
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
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c1.table"
    },
    "c1.pace.flirt": {
      "id": "c1.pace.flirt",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.awkward"
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
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c1.table"
    },
    "c1.table": {
      "id": "c1.table",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
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
      "next": "c1.detail"
    },
    "c1.detail": {
      "id": "c1.detail",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "box",
          "text": "",
          "next": "c1.detail.box"
        },
        {
          "id": "cat",
          "text": "",
          "next": "c1.detail.cat"
        },
        {
          "id": "window",
          "text": "",
          "next": "c1.detail.window"
        }
      ]
    },
    "c1.detail.box": {
      "id": "c1.detail.box",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.thinking"
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
      "next": "c1.pause"
    },
    "c1.detail.cat": {
      "id": "c1.detail.cat",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
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
          "speaker": "nina",
          "text": ""
        },
        {
          "speaker": "narrator",
          "text": ""
        },
        {
          "speaker": "vlad",
          "text": ""
        }
      ],
      "next": "c1.pause"
    },
    "c1.detail.window": {
      "id": "c1.detail.window",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
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
      "next": "c1.pause"
    },
    "c1.pause": {
      "id": "c1.pause",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
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
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c1.plan"
    },
    "c1.plan": {
      "id": "c1.plan",
      "kind": "choice",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.neutral"
      },
      "choices": [
        {
          "id": "tea",
          "text": "",
          "next": "c1.end.tea",
          "effects": [
            {
              "kind": "set",
              "key": "plan",
              "value": "tea"
            }
          ]
        },
        {
          "id": "banter",
          "text": "",
          "next": "c1.end.banter",
          "effects": [
            {
              "kind": "set",
              "key": "plan",
              "value": "banter"
            }
          ]
        },
        {
          "id": "coop",
          "text": "",
          "next": "c1.end.coop",
          "effects": [
            {
              "kind": "set",
              "key": "plan",
              "value": "coop"
            }
          ]
        }
      ]
    },
    "c1.end.tea": {
      "id": "c1.end.tea",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
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
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c1.finish.tea"
    },
    "c1.end.banter": {
      "id": "c1.end.banter",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
        "character": "vlad.city.laugh"
      },
      "lines": [
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
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c1.finish.banter"
    },
    "c1.end.coop": {
      "id": "c1.end.coop",
      "kind": "dialogue",
      "scene": {
        "background": "bg.cafe.window",
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
        },
        {
          "speaker": "narrator",
          "text": ""
        }
      ],
      "next": "c1.finish.coop"
    },
    "c1.search.route": {
      "id": "c1.search.route",
      "kind": "route",
      "cases": [
        {
          "all": [
            {
              "key": "searchResult",
              "equals": "tidy"
            }
          ],
          "next": "c1.search.tidy"
        },
        {
          "all": [
            {
              "key": "searchResult",
              "equals": "detour"
            }
          ],
          "next": "c1.search.detour"
        }
      ],
      "fallback": "c1.search.skipped"
    },
    "c1.finish.tea": {
      "id": "c1.finish.tea",
      "kind": "end",
      "endingId": "c1.tea",
      "cardId": "c1.tea"
    },
    "c1.finish.banter": {
      "id": "c1.finish.banter",
      "kind": "end",
      "endingId": "c1.banter",
      "cardId": "c1.banter"
    },
    "c1.finish.coop": {
      "id": "c1.finish.coop",
      "kind": "end",
      "endingId": "c1.coop",
      "cardId": "c1.coop"
    }
  }
} satisfies Chapter;
