// for red, green, and blue color values
var  cells = [];

function setup() {
  createCanvas(600, 400);
  cell = new Cell();
  cells.push(cell);
}

function draw() {
  background(127);
  for(var i = 0; i < cells.length; i++){
    cells[i].move();
    cells[i].show();
  }
}

function mousePressed(){
  for(var i = cells.length -1; i >= 0; i--){
    if(cells[i].clicked(mouseX, mouseY)){
      //console.log("CLICKED");
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i,1);
    }
  }
}
