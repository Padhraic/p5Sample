
var drops = [];

function setup() {
  createCanvas(640, 360);
  for(var i =0; i < 400; i++)
    this.drops.push( new Drop());
}

function draw() {
  background(230,230,250);
  for(var i =0; i < 100; i++){
    drops[i].fall();
    drops[i].show();
  }
}



