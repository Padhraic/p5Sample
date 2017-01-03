var inc = 0.1;
var scl = 10;
var cols;
var rows;
var zoff = 0;
var ft = 0;
var particles = [];
var flowField;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  ft = createP('');
  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }
  flowField = new Array(cols * rows);
  background(255);
}

function draw() {
  //  background(255);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var index = x + y * cols;
      var v = p5.Vector.fromAngle(angle);
      //v.setMag(0.7);
      flowField[index] = v;
      xoff += inc;
      //stroke(0, 100);
      //strokeWeight(1);
      //push();
      //translate(x * scl, y * scl);
      //rotate(v.heading());
      //line(0, 0, scl, 0);
      //pop();
    }
    yoff += inc;
  }
  zoff += 0.005;
  ft.html(floor(frameRate()));
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].show();
    particles[i].edges();

  }

}
