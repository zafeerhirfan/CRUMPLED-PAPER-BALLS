
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ball_options;
var left,right;




function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  ball = new Ball(200,300,10);
  wall = new Wall(350,500,800,10);
  left = new Wall(500,450,10,100);
  right = new Wall(650,450,10,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  ball.show();
  wall.show();
  left.show();
  right.show();
 
}
 function keyPressed(){
 
  if (keyCode === UP_ARROW){
    ball.force();
    //console.log(ball.position);
   //Matter.Body.applyForce(ball,{x:0,y:0},{x:600,y:0});

  }


 }


