
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var groundObject;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(200, 300, 50);
	groundObject = new Ground(0, 380, width, 20);
	dustbin1 = new Dustbin(290, 610, 20, 100, { isStatic: true });
	dustbin2 = new Dustbin(400, 650, 200, 20, { isStatic: true });
	dustbin3 = new Dustbin(500, 610, 20, 100, { isStatic: true });

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	paperObject.display();
	groundObject.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	keyPressed();

	drawSprites();

}
function keyPressed() {
	if (keyCode === "UP_ARROW") {
		Matter.body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 })
	}
}



