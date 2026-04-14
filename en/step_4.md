## Make the scoop random
Use `random()` to choose where the scoop appears across the screen.

## Step 1
Set `scoopX` to a random number in `setup()`.

<div class="c-project-callout c-project-callout--tip">

### Tip

`random(0, width)` chooses a number from the width of the canvas.

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
Start and stop the code. The scoop of ice-cream should appear in a different position every time you start again.

<div class="c-project-output">

![ADD](images/step3.gif)

</div>
