import peasy.*;
import peasy.org.apache.commons.math.*;
import peasy.org.apache.commons.math.geometry.*;

Plannet sun;
PeasyCam cam;
PImage sunTexture;
PImage[] textures = new PImage[4];

void setup(){
  size(600,600, P3D);
  sunTexture = loadImage("sun.jpg");
  textures[0] = loadImage("mars.jpg");
  textures[1] = loadImage("earth.jpg");
  textures[2] = loadImage("mercury.jpg");
  textures[3] = loadImage("venus.jpg");
  cam = new PeasyCam(this,500);
  sun = new Plannet(50, 0, 0, sunTexture);
  sun.spawnMoons(3, 1);
}

void draw(){
  background(0);
  lights();
  pointLight(255,255,255,0,0,0);
  sun.show();
  sun.orbit();
}