function Tree() {
  this.leaves = [];
  this.branches = [];
  for (var i = 0; i < 500; i++) {
    this.leaves.push(new Leaf());
  }

  var pos = createVector(width / 2, height);
  var dir = createVector(0, -1);
  this.root = new Branch(null, pos, dir);
  this.branches.push(this.root);
  var current = this.root;

  var found = false;
  while (!found) {
    for (var x = 0; x < this.leaves.length; x++) {
      var d = p5.Vector.dist(current.pos, this.leaves[x].pos);
      if (d < max_dist) {
        found = true;
        break;
      }
    }
    if (!found) {
      var branch = current.next();
      current = branch;
      this.branches.push(current);
    }
  }

  this.show = function() {
    for (var i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show();
    }
    for (i = 0; i < this.branches.length; i++) {
      this.branches[i].show();
    }
  };
  this.grow = function() {
    for (var i = 0; i < this.leaves.length; i++) {
      var leaf = this.leaves[i];

      var closestBranch = null;
      var record = 100000000000000;
      for (var j = 0; j < this.branches.length; j++) {
        var branch = this.branches[j];
        var d = p5.Vector.dist(leaf.pos, branch.pos);
        if (d < min_dist) {
          leaf.reached = true;
          closestBranch = null;
          break;

        } else if (d > max_dist) {} else if (closestBranch === null || d < record) {
          closestBranch = branch;
          record = d;
        }

      }

      if (closestBranch !== null) {
        var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;


      }
    }
    //remove leaves that are within min dist to a branch
    for (i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1);
      }
    }
    //for every branch moved towards a leave, extend the branch in that direction
    for (i = this.branches.length - 1; i >= 0; i--) {
      var b = this.branches[i];
      if (b.count > 0) {
        b.dir.div(b.count);
        this.branches.push(b.next());
        //var newPos = p5.Vector.add(b.pos, b.dir);
        //var newBranch = new Branch(b, newPos, b.dir);
        //this.branches.push(newBranch);
      }
      b.reset();
    }
  };
}
