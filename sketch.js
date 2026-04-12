var canvas;

function setup() {
  canvas = createCanvas(700, 200);
  canvas.position(610, 800)
  background(220);
  strokeWeight(3);
}

function draw() {
 point(mouseX, mouseY);
}
