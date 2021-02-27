const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var box1

var engine,world,ground,ball

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world

 
  ground = new Ground (200,360,400,30)
 
  
box1=new Box(200,100,50,100)
box2=new Box(210,200,50,50)




}
function draw()
{
  background(0);
  Engine.update(engine)
  box1.display()
  box2.display()
  ground.display()
}
