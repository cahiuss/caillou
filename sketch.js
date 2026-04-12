var canvas;

function setup() {
  canvas = createCanvas(700, 200);
  canvas.position(680, 700)
  background(220);
  strokeWeight(3);
}

function draw() {
 point(mouseX, mouseY);
}
