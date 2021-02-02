
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobO1, bobO2, bobO3, bobO4, bobO5;  
var Roof;  
var r1, r2, r3, r4, r5;   

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	bobO1 = new bob(300,500,100);
	bobO2 = new bob(400,500,100);
	bobO3 = new bob(500,500,100);
	bobO4 = new bob(600,500,100);
	bobO5 = new bob(700,500,100);

	Roof = new roof(490,100,500,60);
	World.add(world, roof);

	r1 = new rope(bobO1.body, Roof.body, -180.5,0);
	World.add(world, r1);

	r2 = new rope(bobO2.body, Roof.body, -90.5,0);
	World.add(world, r2);

	r3 = new rope(bobO3.body, Roof.body,0.5,0);
	World.add(world, r3);

	r4 = new rope(bobO4.body, Roof.body,90.5,0);
	World.add(world, r4);

	r5 = new rope(bobO5.body, Roof.body, 180.5,0);
	World.add(world, r5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  bobO1.display();
  bobO2.display();
  bobO3.display();
  bobO4.display();
  bobO5.display();
	
  Roof.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobO1.body, bobO1.body.position,{x:-50, y:-45});
	}

}


