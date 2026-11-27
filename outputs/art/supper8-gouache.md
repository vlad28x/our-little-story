# Глава 8 · «Гуашь»

24 ноября 2026 года. Встроенный imagegen создал отдельный фон кухни и три спрайта Влада. Внешность взята из первого пробного кадра с 26-летним Владом. Ориентир для пропорций — 182 см. Для кухни использована композиция обычного игрового фона, для фартука — его существующий игровой рисунок.

| Слой | Файл игры | PNG из imagegen |
| --- | --- | --- |
| Кухня | [supper8-kitchen-gouache.webp](../../public/assets/backgrounds/supper8-kitchen-gouache.webp) | `exec-303dda93-0daf-4eba-a525-d2477c60550e.png` |
| Влад в футболке | [supper8-gouache-smile.webp](../../public/assets/characters/vlad/supper8-gouache-smile.webp) | `exec-953dc743-de9d-42f5-bbeb-415209fd39c8.png` |
| Влад в фартуке | [supper8-gouache-apron.webp](../../public/assets/characters/vlad/supper8-gouache-apron.webp) | `exec-0493eb95-6695-4760-97ba-1d13bb4cdd09.png` |
| Смех | [supper8-gouache-laugh.webp](../../public/assets/characters/vlad/supper8-gouache-laugh.webp) | `exec-fe3ff568-f4d8-4dbc-a31c-523c2e565b0d.png` |

PNG лежат в каталоге Codex `generated_images/01a20a2a-0089-7da3-b652-901def941b1f/`. Пробный референс — `exec-e9997d85-ae94-4ea9-b0db-42fea0889dd2.png`. В игру перенесены WebP в исходном размере с прозрачностью спрайтов.

## Промпты

### Кухня

```text
Use case: style-transfer. Generate a clean empty game background for an existing point-and-click visual novel. Reference image 1 is the EXACT EMPTY KITCHEN GEOMETRY to retain, and reference 2 is the painted style target only. Repaint image 1 carefully in the style of image 2's matte gouache over pencil, slightly grainy warm painterly textures, velvet blue-violet dusk outside the window and amber lamp light inside, restrained lighting. Preserve image 1's 3:2 landscape framing, position of the foreground table and chairs, exact position of the table surface and its unobstructed working area, the sugar bowl, hanging utensils, kettle, fridge, lamp and the bay of clear floor at center-right. In particular the sugar bowl is centered near x=37.4%, y=59%; utensils near x=19%, y=25%; kettle near x=24%, y=33%; fridge near x=85%, y=42%; lamp near x=92%, y=27%. Keep these where they appear in reference 1 because the illustration is an existing clickable stage. Do not add any figures from reference 2, no people at all, no mugs, no plates/food/boards/apron, no text, no interface. Keep image 1's framing and relative scale; this is a layer behind sprites and interactive props. One image, 3:2 landscape.
```

### Влад в футболке

```text
Use case: illustration-story. Create one standalone FULL-BODY transparent RGBA character sprite of the exact 26-year-old adult Vlad depicted in reference 1, for use on top of a kitchen background in the same visual novel. Use reference 1 for face, recognizable voluminous swept light-brown curly hair and brows, gray-green eyes, half-smile, nuanced warm lighting and textured matte gouache and pencil illustration style. Reference 2 establishes the clothing and standalone sprite layout only; do not copy its chibi face or proportions and do not copy its visual shading. Respect the adult head, neck and shoulders and naturally stylized 5.5-6 head-length physique of reference 1. Full figure, centered 2:3 portrait canvas, head has a little top air and both feet are included close to the bottom; visible figure occupies 95% image height. Casual cream crewneck T-shirt, dark charcoal relaxed trousers, gray socks, no shoes. Natural relaxed pose, one hand in pocket and other arm hangs relaxed with soft bent elbow so there is no need for furniture, soft gently crooked closed-mouth smile toward viewer. No furniture, no objects, no scenery, no shadows on backdrop, no cues of transparent grid, actual transparent background. Matching illustration finish and same recognizable face as reference 1, do not idealize or embellish. One figure, no text, no labels.
```

### Фартук

```text
Use case: identity-preserve. Edit reference 1, the exact 26-year-old adult Vlad (182 cm tall) full-body transparent sprite. Add only a simple matte black charcoal kitchen apron over the existing cream shirt in the exact same standing pose, image placement, facing angle, adult 182 cm body proportions and full-body portrait canvas. It has a neck strap, waist tie and a single front pocket with a small soft flour smudge as seen in reference 2; use reference 2 only for the apron itself. Keep the gold-brown curls and soft face pixel-close, closed-mouth half smile, dark relaxed trousers, gray socks, same arm positions, one hand in pocket, same painterly gouache pencil texture and restrained warm light. The apron runs just above knees. Maintain the same 1024x1536 2:3 full-height framing and transparency on all areas outside the figure. No scenery, shadow, halo, props, furniture, text, outlines around the full body or checker pattern. The final sprite must switch seamlessly with reference 1 during the same game dialogue.
```

### Смех

```text
Use case: identity-preserve. Make exactly one seamless alternate facial-expression sprite for the attached actual-alpha 2:3 full-body sprite. The same 26-year-old adult Vlad, 182 cm tall, in the same clothes and pose. Change only the expression to a warm spontaneous laugh: relaxed upturned brows, slightly crinkling eyes, natural small open mouth with a hint of upper teeth. Preserve the hairstyle almost pixel exactly, head pose, facial features apart from this expression, skin tone, all adult body proportions, body pose, arm and hand positions, clothing, canvas scale and placement, lighting, linework, and textured gouache-paint finish. Keep the identical true transparent background, 2:3 portrait framing, entire head and both feet included. No props, no backdrop, no off-body shadow, no text or checkers. It should jump seamlessly from the reference image in a visual-novel dialog.
```
