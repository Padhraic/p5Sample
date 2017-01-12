function Pipe() {
  this.x = width;
  this.w = 30;
  this.gap = random(80, 150);
  this.top = random(40, height - this.gap - 40);


  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.top + this.gap, this.w, height - this.gap - this.top);
  };

  this.update = function() {
    this.x -= 2;
  };

  this.hits = function(bird) {
    if (bird.x > this.x && bird.x < this.x + this.w && (bird.y < this.top || bird.y > this.top + this.gap)) {
      return true;
    } else {
      return false;
    }
  };
}
