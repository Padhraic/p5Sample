import peasy.*;
import peasy.org.apache.commons.math.*;
import peasy.org.apache.commons.math.geometry.*;

// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/kKT0v3qhIQY

Tree tree;
float min_dist = 5;
float max_dist = 100;
PeasyCam cam;

void setup() {
  size(600, 600,  P3D);
  cam = new PeasyCam(this,500);
  tree = new Tree();
}

void draw() {
  background(51);
  tree.show();
  tree.grow();
}