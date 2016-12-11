function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.update = function(){
    this.tail.push( new createVector(this.x, this.y));
    while(this.tail.length > this.total)
      this.tail.shift();
    

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);

  }
  
  this.death = function(){
    for(var i = 0; i < this.tail.length; i++){
      var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
      if(d < 1){
        this.total = 0;
        return true;
      }
    }
    return false;
  }

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if(d < 1){
      this.total++;
      return true;
    }
    return false;
  }

  this.show = function(){
    fill(255, 255,255)
    rect(this.x, this.y, scl,scl)

    //show the tail
    for(var i =0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
  }

  
  this.dir = function(xdir, ydir){
    this.xspeed = xdir;
    this.yspeed = ydir;
  }
}