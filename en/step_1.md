## Add a background colour.

## Step 1
Click on **Project file** tab and select `script.js`.

## Step 2
Add the code below to add the background.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 6
line_highlights: 7
---
function draw() {
  background(100, 80, 30);
}
--- /code ---
</div>

### Now run your code 
The **Preview window** should change colour. Experiment with `RGB` values until you have the colour you want.

<div class="c-project-callout c-project-callout--tip">

### Tip

The three numbers in `background(r, g, b)` are **r**ed, **g**reen, and **b**lue (**RGB**) values. All values need to be between 0 and 255.

</div>


<div class="c-project-output">

![A plain canvas filled with a brown background colour](images/step1.png)

</div>
