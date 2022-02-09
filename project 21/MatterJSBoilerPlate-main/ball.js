class Ball
{ 
    constructor(x, y, r)
     { let options = 
        {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2             
             }; 
             
      this.body = Bodies.circle(x, y, r, options); 
       this.r = r;
     World.add(world, this.body);
     } 
     show()
      { var pos = this.body.position; 
        push();
        ellipseMode(CENTER);
         stroke(255);
         fill("white"); 
         ellipse(pos.x, pos.y, this.r); 
        pop();
          }
        force(){

          Matter . Body.applyForce(this.body,this.body.position,{x:10,y:-15});
        } 
    }