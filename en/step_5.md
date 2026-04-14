## Challenges
Use `random()` to choose where the scoop appears across the screen.

## Shrink a thing
Try using and `if` and `-=` to make the plant smaller.

Here is some code to help get started. 

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
---
function mousePressed() {
  if (plantsize > 10) { // only shrink if it is still big enough
    plantsize -= 4; // make the plant smaller
  }
}
--- /code ---
</div>

<div class="c-project-callout c-project-callout--tip">

### Tip

You will need another `if` to make the plant bigger again after it gets too small.

</div>

## Grow lots of things
Add more things to grow and shrink!

Try adding more emojis or text and make them grow and shrink in different ways. They could have different growing speeds.

<div class="c-project-callout c-project-callout--tip">

### Tip

You could use a new name like `plantsize2` to keep track of its size.

</div>
