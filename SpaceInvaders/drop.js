function Drop(x ,y){
  this.x = x;
  this.y = y;
  this.r = 5
  

  this.show = function(){
    noStroke();
    fill(100,100,255);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.move = function(){
    this.y -= 5;
  }

  this.hits = function(flower){
    if(dist(this.x, this.y, flower.x, flower.y) < (flower.r + this.r))
      return true;

    return false;
  }

  this.canMove = function(){
    if(this.y >= 0)
      return true;

    return false;
  }

}