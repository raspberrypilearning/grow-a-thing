## Grow the plant
Use `mousePressed()` to change the size when clicked.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 8
line_highlights: 14-16
---
function draw() {
  background(100, 80, 30);
  textSize(plantsize);
  text("🌱",  width/2, height/2);
}

function mousePressed() {
  plantsize += 4;
}
--- /code ---
</div>

<div class="c-project-callout c-project-callout--tip">

### Tip

`plantsize += 4` adds `4` to the current `plantsize`.

</div>

### Now run your code
The emoji should get bigger. You have grown a thing! Try changing the number in `mousePressed()` to make it grow faster.

<div class="c-project-output">

![A brown background with a plant emoji in the middle growing bigger when clicked](images/step4.gif)

</div>
