function Firework() {
  this.hu = random(255);
  this.firework = new Particle(random(width), height, this.hu, true);
  this.particles = [];
  this.exploded = false;

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        for (var i = 0; i < 50; i++) {
          this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false));
        }
      }
    }

    for (var j = this.particles.length - 1; j >= 0; j--) {
      this.particles[j].applyForce(gravity);
      this.particles[j].update();
      if (this.particles[j].done()) {
        this.particles.splice(j, 1);
      }
    }
  };

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    } else {
      for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].show();
      }
    }
  };

  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  };
}
