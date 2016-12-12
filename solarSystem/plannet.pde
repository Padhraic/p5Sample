class Plannet{
  float radius;
  float angle;
  float distance;
  float orbitSpeed;
  Plannet[] plannets;
  
  Plannet(float r, float d, float o){
    radius = r;
    distance = d;
    angle = random(TWO_PI);
    orbitSpeed = o;
  }
  
  void show(){
    pushMatrix();
    fill(255,255,255, 100);
    rotate(angle);
    translate(distance,0);
    ellipse(0, 0, radius*2, radius*2);
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
    if(total > 0 && level < total){
      plannets = new Plannet[total];
      for(int i = 0; i<plannets.length; i++){
        float r = radius / (level*1.5);
        float d = (random(75,300) / level) + radius + r;
        float o = random(0.02,0.06);
        plannets[i] = new Plannet(r, d/level, o);
        plannets[i].spawnMoons(total, level + 1);
      }
    }
  }
    
  
}