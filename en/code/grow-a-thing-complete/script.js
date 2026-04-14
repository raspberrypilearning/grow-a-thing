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

function mousePressed() {
  plantsize += 4;
}
