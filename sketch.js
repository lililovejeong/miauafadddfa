const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, worldMilanesa, world;
var ground, Sally;
var bolita, Screech;
var box, box1, box2;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  worldMilanesa = engine.world;

  ground = new Ground(400,height,800,20);
  /*box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);*/

  var Screech_options ={
    restitution: 1.0
  }

  Screech = Bodies.circle(600,30,20, Screech_options);
  World.add(worldMilanesa, Screech);

}

function draw() {
  background(205,205,205);
  Engine.update(engine);
  
  ground.display()
  //box.display()

  ellipseMode(RADIUS)
  ellipse(Screech.position.x, Screech.position.y, 20, 20);

  drawSprites();
}