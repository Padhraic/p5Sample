// for red, green, and blue color values
var rows, cols;
var w = 10;
var grid =  [];
var stack = [];
var current;

function setup() {
  
  createCanvas(400, 400);
  rows = floor(height/w);
  cols = floor(width/w);
  //frameRate(5);

  for(var j =0; j<rows;j++){
    for(var i=0; i<cols;i++){
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }

  current = grid[0];

}

function draw() {
  background(51);
  
  for(var i =0; i<grid.length;i++){
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  //step 1
  var next = current.checkNeigbors();
  if(next){
    next.visited = true;

    //step 2
    stack.push(current); 
    //step 3
    removeWalls(current, next);

    //step 4
    current = next;
  } else if(stack.length > 0){
    current = stack.pop();
  }
}


function removeWalls(a,b){

  var x = a.i - b.i;
  var y = a.j - b.j;
  if(x === 1){
    a.walls[3] = false;
    b.walls[1] = false;
  } else if( x === -1){
    a.walls[1] = false;
    b.walls[3] = false;
  } else if(y == 1){
    a.walls[0] = false;
    b.walls[2] = false;
  } else if(y == -1){
    a.walls[2] = false;
    b.walls[0] = false;
  }


}