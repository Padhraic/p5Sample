var bird;
var pipes = [];
var gapBetweenPipes = 200;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.update();
  bird.show();
  var maxX = 0;
  for (var i = pipes.length - 1; i >= 0; i--) {
    if (pipes[i].x > maxX) {
      maxX = pipes[i].x;
    }
    if (pipes[i].x < -pipes[i].w) {
      pipes.splice(i, 1);
    } else {
      if (!bird.crashed) {
        pipes[i].update();
      }
      pipes[i].show();
    }
    if (pipes[i].hits(bird)) {
      bird.crashed = true;
    }
  }
  if (maxX < width - gapBetweenPipes) {
    pipes.push(new Pipe());
  }

}

function keyPressed() {
  if (key == ' ') {
    console.log('space');
    bird.up();
  }
}
