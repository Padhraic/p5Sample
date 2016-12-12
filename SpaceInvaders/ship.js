function Ship(){
  this.x = width / 2;
  this.y = height - 20;

  this.xdir = 0;
  
  this.update = function(){

  }

  this.show = function(){
    fill(255,255,255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, 20, 20);
  }

  this.setDir = function(dir){
    this.xdir = dir;
  }

  this.move = function(){
    this.x += this.xdir * 5;
    this.x = constrain(this.x, 0, width);
  }

}