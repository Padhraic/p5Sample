function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 2;
  this.prevPos = this.pos.copy();

  this.update = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.follow = function(field) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var i = x + y * cols;
    this.applyForce(field[i]);
  };

  this.show = function() {
    stroke(0, 4);
    strokeWeight(1);
    line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
  };

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }
  };

}
