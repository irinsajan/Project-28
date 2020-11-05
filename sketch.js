const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;

var boy,boyImage;
var tree,treeImage;
var ground;
var stone;
var mango1,mango2,mango3,mango4,monkey5,mango6,mango7,mango8,mango9,mango10;
var sling;


function preload()
{
	boyImage = loadImage("PluckingMangoes/boy.png");
	treeImage = loadImage("PluckingMangoes/tree.png");

}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
  world = engine.world;
  
  mango1 = new Mangoes(700,200,40,40);
  mango2 = new Mangoes(600,250,40,40);
  mango3 = new Mangoes(650,340,30,30);
  mango4 = new Mangoes(550,350,40,40);
  mango5 = new Mangoes(620,380,40,30);
  mango6 = new Mangoes(730,270,30,30);
  mango7 = new Mangoes(720,340,45,45);
  mango8 = new Mangoes(660,250,30,30);
  mango9 = new Mangoes(610,310,30,40);
  mango10 = new Mangoes(650,220,40,40);


  ground = new Ground(0,680,1600,10);
  stone = new Stone(133,550,40,40);

  sling = new SlingShot(stone.body,{x:200, y:50});

  

 
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyImage,100,500,170,200);
  image(treeImage,500,140,300,550);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
 
  ground.display();
  stone.display();

  sling.display();

  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}



