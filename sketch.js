
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,tree,boy, stone, mango1,mango2,mango3,mango4,mango5;
var sling;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,600,800,15);
    tree = new Tree(600,360);
    boy = new Boy(200,470);
    stone = new Stone(145,450);
    mango1 = new Mango(500,300);
    mango2= new Mango(550,200);
    mango3= new Mango(680,340);
    mango4 = new Mango(600,330);
    mango5 = new Mango(650,270);
    sling = new Slingshot(stone.body,{x:145,y:450});
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.displayground();
  tree.displaytree();
  boy.displayboy();
  stone.displaystone();
  mango1.displaymango();
  mango2.displaymango();
  mango3.displaymango();
  mango4.displaymango();
  mango5.displaymango();
  sling.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged(){
     Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  sling.fly();
}

function detectCollision(stone1,Mango1){

mangoBodyPosition = Mango1.body.position;
stoneBodyPosition = stone1.body.position;
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=Mango1.r + stone1.r){
  Matter.Body.setStatic(Mango1.body,false);
}


}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:145,y:450});
    launcher.attach(stone.body);
  }
}