## Grow the plant
Use `mousePressed()` to change the size when clicked.

<div class="c-project-callout c-project-callout--tip">

### Tip

`plantsize += 4` adds `4` to the current `plantsize`.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 14
line_highlights: 16
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

### Now run your code
The emoji should get bigger. You have grown a thing! Try changing the number in `mousePressed()` to make it grow faster.

<div class="c-project-output">

![Step 4 project output](images/step3.gif)

</div>
