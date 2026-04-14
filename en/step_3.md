## Change the plant size
Add `plantsize` at the top. This is used to change the size of the plant emoji in `draw()`.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 14
line_highlights: 16
---
let plantsize = 12;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
}

function draw() {
    background(100, 80, 30);
    textSize(plantsize);
    text("🌱",  width/2, height/2);
}
--- /code ---
</div>

### Now run your code
The emoji should change to the size it is set at the top of the code. Experiment with different sizes and run the code again.

<div class="c-project-output">

![ADD](images/step3.gif)

</div>
