class Bug{
  constructor(x,y,z){
    this.z = z;
    this.dz = 0.075;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#bug");
    this.obj.setAttribute("animation-mixer",{timeScale: 2.0});
    this.obj.setAttribute("position",{x:x,y:y,z:this.z});
    scene.append(this.obj);    
  }
  walk(){
    this.z += this.dz;
    this.obj.object3D.position.z = this.z; 
    if(this.z > 0){
      this.respawn();
    }
  }
  attack(){
    health -= 10;
    this.respawn();
  }
  die(){
    health += 5;
    this.respawn();
  }
  respawn(){
    let x = rnd(-3,3);
    this.z = -240 + rnd(-5, 5);
    this.obj.setAttribute("position",{x:x,y:0.5,z:this.z});
  }

  kill(){
    bug_killed++;
    this.obj.setAttribute("opacity",0)
  }

}