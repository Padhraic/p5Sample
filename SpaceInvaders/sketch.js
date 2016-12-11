
var ship;
var flowers = [];
var drops = [];

function setup() {
  //frameRate(5);
  createCanvas(600,400);
  ship = new Ship();
  for(var i = 0; i<6; i++){
    flowers[i] = new Flower( i*80 + 80, 30);
  }
}

function draw() {
  background(51);
  ship.move();
  ship.show();
  for(var d = drops.length -1; d>=0; d--){
      if(!drops[d].canMove()){
         drops.splice(d, 1);
         break;
      }
      var hit = false;
      for(var f = flowers.length -1; f>=0; f--){
        if(drops[d].hits(flowers[f])){
          flowers.splice(f,1);
          drops.splice(d,1);
          hit = true;
          break;
        }
      }
      if(hit)
        break;
      
      drops[d].move();
      drops[d].show();
  }
  var edge = false;
  for(var i = 0; i< flowers.length; i++){
    flowers[i].move();
    flowers[i].show();
    if(flowers[i].x > width || flowers[i].x < 0){
      edge = true;
    }
  }
  if(edge){
    for(var i = 0; i<flowers.length;i++){
      flowers[i].shiftDown();
    }
  }
}

function keyReleased(){
  if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW){
    ship.setDir(0);
  }
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    ship.setDir(-1);
  }
  else
  if(keyCode == RIGHT_ARROW){
    ship.setDir(1);
  }
  else
  if(keyCode == 32){//SPACE BAR
    var d = new Drop(ship.x,ship.y);
    drops.push(d);
  }
}



