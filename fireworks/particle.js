function Particle(x, y, hu, firework) {

  this.lifespan = 255;
  this.pos = createVector(x, y);
  this.firework = firework;
  this.hu = hu;
  if (firework) {
    this.vel = createVector(0, random(-4, -6));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.3, 2));
  }
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.95);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.show = function() {
    if (this.firework) {
      stroke(this.hu, 255, 255, 255);
      strokeWeight(4);
    } else {
      stroke(this.hu, 255, 255, this.lifespan);
      strokeWeight(2);
    }
    point(this.pos.x, this.pos.y);
  };

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };
}
