var fireworks = [];
var gravity;

function setup() {
  createCanvas(800, 500);
  gravity = createVector(0, 0.06);

  colorMode(HSB, 255);
  background(0);
}

function draw() {
  background(0, 20);
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
