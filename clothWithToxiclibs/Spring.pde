class Spring extends VerletSpring{
  
  Spring(Particle a, Particle b, float len, float str){
    super(a,b,len,str);
  }
  
  void display(){
    stroke(255);
    strokeWeight(2);
    line(a.x,a.y, a.z,b.x,b.y, b.z);
  }
}