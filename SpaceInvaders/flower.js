function Flower(x ,y){
  this.x = x;
  this.y = y;
  this.r = 10;

  this.xdir = 1;
  

  this.show = function(){
    fill(255,0,200);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r *2, this.r*2);
  }

  this.move = function(){
    this.x += this.xdir * 2;
  }

  this.shiftDown = function(){
    this.xdir *= -1;
    this.y += this.r;
  }

}