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
line_number_start: 7
line_highlights: 8
---
function draw() {
  background(100, 80, 30);
  text("🌱",  width/2, height/2);
}
--- /code ---

</div>

### Now run your code
You should see the emoji text appear in the middle of the **Preview window**.

<div class="c-project-output">

![A brown background with a plant emoji in the middle of the screen](images/step2.png)

</div>
