class Plannet{
  float radius;
  float angle;
  float distance;
  float orbitSpeed;
  PVector v;
  Plannet[] plannets;
  PShape globe;
  
  Plannet(float r, float d, float o, PImage p){
    v = PVector.random3D();
    radius = r;
    distance = d;
    v.mult(distance);
    angle = random(TWO_PI);
    orbitSpeed = o;
    
    noStroke();
    noFill();
    //fill(255,0,0);
    globe = createShape(SPHERE, radius); 
    globe.setTexture(p);
  }
  
  void show(){
    pushMatrix();
    noStroke();
    
    //rotate(angle);
    PVector v2 = new PVector(1,0.1);
    PVector p = v.cross(v2);
    rotate(angle, p.x,p.y,p.z);
    //stroke(255);
    //line(0,0,0,v.x*10,v.y*10,v.z*10);
    //line(0,0,0,p.x*10,p.y*10,p.z*10);
    //noStroke();
    //fill(255);
    translate(v.x,v.y,v.z);
    shape(globe);
    //sphere(radius);
    //ellipse(0, 0, radius*2, radius*2);
    if(plannets != null){
      for(int i =0; i<plannets.length;i++){
        plannets[i].show();
      }
    }
    popMatrix();
  }
  
  void orbit(){
    angle += orbitSpeed;
    if(plannets != null){
      for(int i = 0; i<plannets.length;i++){
        plannets[i].orbit();
      }
    }
  }
  
  void spawnMoons(int total, int level){
    if(level < 3){
      plannets = new Plannet[total];
      for(int i = 0; i<plannets.length; i++){
        float r = radius / (level*1.5);
        float d = random(radius + r, (radius + r)*2);// (random(75,300) / level) + radius + r;
        float o = random(0.02,0.06);
        int index = int(random(0,textures.length));
        plannets[i] = new Plannet(r, d, o,textures[index]);
        int p = int(random(0,4));
        plannets[i].spawnMoons(p, level + 1);
      }
    }
  }
    
  
}