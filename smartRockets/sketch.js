var lifespan = 200;
var population;
var count = 0;
var lifeP;
var target;
var rx = 150;
var ry = 150;
var rw = 100;
var rh = 10;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);

}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);
  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }

  ellipse(target.x, target.y, 10, 10);
  rect(rx, ry, rw, rh);
}
