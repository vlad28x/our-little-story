# Synthetic input before swapping meetings3/4

`states.json` was generated before the swap from the working content20 runtime, using test helpers and an isolated in-memory state. It contains no player/browser/Telegram exports.

Fixtures cover completed2/3/4/5/10, active10, trials3/4/5/10, all49 visible game3 cursors,55 sky4 cursors and52 fifth cursors. Input is kept in its original order and version; tests use the real frozen validator plus migration. Do not relabel a current21 save as20 to simulate an old client.

`tests/legacySave.ts:order20Input` is a test-only inverse for independent older-version importer checks. It never runs in the application or writes user storage.
