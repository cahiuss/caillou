var canvas;

function setup() {
  canvas = createCanvas(700, 200);
  canvas.position(620, 720)
  background(220);
  strokeWeight(3);
}

function draw() {
 point(mouseX, mouseY);
}
