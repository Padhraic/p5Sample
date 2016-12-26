// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/kKT0v3qhIQY

class Leaf {
  PVector pos;
  boolean reached = false;

  Leaf() {
    pos = PVector.random3D();
    pos.mult(random(width/2));
    pos.y -= height/4;
    //pos = new PVector(random(10, width-10), random(10, height-40));
  }

  void reached() {
    reached = true;
  }

  void show() {
    fill(255);
    noStroke();
    pushMatrix();
    translate(pos.x, pos.y, pos.z);
    //sphere(4);
    ellipse(0, 0, 4, 4);
    
    popMatrix();
  }
}