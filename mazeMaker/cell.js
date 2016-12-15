function index(i, j){
    if(i<0 || i > cols-1 || j < 0 || j > rows-1){
        return -1;
    }
    return i + j * cols;
}

function Cell(i, j){

    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.highlight = function(){
        var x = this.i*w;
        var y = this.j*w;

        noStroke();
        fill(255,255,0,100);
        rect(x,y,w,w);
    }

    this.show = function(){
        var x = this.i *w;
        var y = this.j *w;
        stroke(255);
        if(this.walls[0]){//top
            line(x,y,x+w,y);
        }
        if(this.walls[1]){//right
            line(x+w,y,x+w,y+w);
        }
        if(this.walls[2]){//bottom
            line(x,y+w,x+w,y+w);
        }
        if(this.walls[3]){//left
            line(x,y,x,y+w);
        }


        if(this.visited){
            noStroke();
            fill(255,0,255,100);
            rect(x, y, w,w);
        }

    }

    this.checkNeigbors = function(){
        var neigbors = [];
        var top = grid[index(this.i,this.j-1)];
        var right = grid[index(this.i+1,this.j)];
        var bottom = grid[index(this.i,this.j+1)];
        var left = grid[index(this.i-1,this.j)];
        
        if(top && !top.visited){
            neigbors.push(top);
        }
        if(right && !right.visited){
            neigbors.push(right);
        }
        if(bottom && !bottom.visited){
            neigbors.push(bottom);
        }
        if(left && !left.visited){
            neigbors.push(left);
        }

        if(neigbors.length  > 0){
            var i = floor(random(0, neigbors.length));
            return neigbors[i];
        }
        else{
            return undefined;
        }
    }
}