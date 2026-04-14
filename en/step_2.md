## Draw a thing

Use `text()` to draw an thing to grow. The code below uses a 🌱, but you can choose other emojis or text.

<div class="c-project-callout c-project-callout--tip">

### Tip

`width / 2` is halfway across the canvas, and `height / 2` is halfway down, so this draws the thing in the middle.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 22
line_highlights: 24
---
function draw() {
    background(100, 80, 30);
    text("🌱",  width/2, height/2);
}
--- /code ---

</div>

### Now run your code
You should see the emoji text appear in the middle of the output screen.

<div class="c-project-output">

![Step 2 project output](images/step2.gif)

</div>
