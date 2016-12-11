function Drop(){
  this.z = random(0, 20);
  this.length = map(this.z, 0, 20,2, 20 );
  this.x = floor(random(width));
  this.y = floor(random(height)) - height;
  this.yspeed = map(this.z, 0, 20, 5, 10);
  this.thickness = map(this.z, 0,20, 1,3);

  this.fall = function(){
    this.y += this.yspeed;
    if(this.y > this.length + height){
      this.x = floor(random(0,width));
      this.y = floor(random(height*-1, 0));
    }
  }
  

  this.show = function(){
    strokeWeight(this.thickness);
    stroke(138, 43,226)
    line(this.x ,this.y, this.x, this.y + this.length);
  }


}