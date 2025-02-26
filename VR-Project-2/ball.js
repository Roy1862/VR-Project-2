class Ball{
  constructor(){
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.1);
    this.obj.setAttribute("position",{x:0, y:-5, z:0});
    scene.append(this.obj)
  }
  move(){
    if(this.fire){
      this.x += this.dx;
      this.z += this.dz;
      this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }else{
      this.obj.setAttribute("opacity",0);
    }

  }
  shoot(){
    this.fire = true;
    this.obj.setAttribute("opacity",1);
    this.x = camera.object3D.position.x;
    this.y = 1;
    this.z = camera.object3D.position.z;

    let angle = camera.object3D.rotation.y + Math.PI;
    this.dx = Math.sin(angle) / 2;
    this.dz = Math.cos(angle) / 2;
  }
}