var paper1,ground , dustbin ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	paper1 = new Paper1(700,200,10);
	dustbin = new DustBin(500,600) ;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   drawSprites();

 
}
function display(){

	paper1.display();
	dustbin.display();
	
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.Body ,paper1.Body.position,{x :85 , y :-85});
	}
}
