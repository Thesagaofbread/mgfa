const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var bg, bgImg;
var bottomGround;
var topGround;
var mango, balloonImg;
var canvas;
var ground;
var sensor;


function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

 createCanvas( windowWidth, windowHeight); 
 edges = createEdgeSprites();

 engine = Engine.create();
 world = engine.world;

ground = new Platform(width, height, windowWidth*2 ,windowHeight/8);


obstacle1 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle1s = createSprite(width -1050, height - 81, windowWidth/7,windowHeight/7)
//obstacle1s.visible = false
obstacle1s.shapeColor ="brown";


obstacle2 = new Platform(width +300, height - 81, windowWidth/7,windowHeight/7) 
obstacle2s = createSprite(width - 1150, height - 81, windowWidth/7,windowHeight/7)
//obstacle2s.visible = false
obstacle2s.shapeColor ="blue";


obstacle3 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle3s = createSprite(0, height - 81, windowWidth/7,windowHeight/7)
//obstacle3s.visible = false
obstacle3s.shapeColor ="red";


obstacle4 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle4s = createSprite(0, height - 168, windowWidth/7,windowHeight/7)
//obstacle4s.visible = false
obstacle4s.shapeColor ="purple";

obstacle5 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle5s = createSprite(0, height - 255, windowWidth/7,windowHeight/7)
//obstacle5s.visible = false
obstacle5s.shapeColor ="yellow";


obstacle6 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle6s = createSprite(width - 1109, height - 168, windowWidth/14,windowHeight/7)
//obstacle6s.visible = false
obstacle6s.shapeColor ="white";


obstacle7 = new Platform(0, height - 100, windowWidth/7,windowHeight/2) 
obstacle7s = createSprite(width, height - 190, windowWidth*2 ,windowHeight/2)
//obstacle7s.visible = false
obstacle7s.shapeColor ="darkGrey";


//background image
/*bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3*/

//creating top and bottom grounds
bottomGround = createSprite(width,height,windowWidth*2,windowHeight/8);
bottomGround.visible = true;

chain1 = new Chain(4,{x:245,y:0});

ChainSensorBody = Bodies.rectangle(2,4,5,5,5);
World.add(world,ChainSensorBody);
sensorLink = new Link(chain1, ChainSensorBody)



      
mango = createSprite(500,200,20,20);

mangoBody = Bodies.rectangle(mango.x ,mango.y,20,20);
//Matter.Composite.add(mangoBody);
World.add(world,mangoBody);


mango.shapeColor = "red";
mango.setCollider("circle" ,0, 0, 20);
mango.debug = true;
mango.depth = 6
console.log(mango.depth);


//depth


obstacle7s.depth = mango.depth - 2
obstacle1s.depth = mango.depth;
bottomGround.depth = mango.depth;
ground.depth = mango.depth
mangoBody.depth = mango.depth
//Matter.Body.setPosition(mangoBody.body,{x: mango.x ,y: mango.y})


}

function draw() {

  

  
  background("grey");

  
        
          //making the hot air balloon jump
          if(keyDown("space")  ) {
            mango.y = mango.y -30 ;
            mangoBody.position.y = mango.y - 10
            

          }
          if(keyDown("D")){
            mango.x = mango.x + 10
            mangoBody.position.x = mango.x + 10

          }

          if(keyDown("A")){
            mango.x = mango.x - 10
            mangoBody.position.x = mango.x - 10
          }

          if(keyDown("W")){
          mango.depth = mango.depth - 1
          mangoBody.depth = mango.depth - 1

          }

          if(keyDown("S")){

         mango.depth = mango.depth + 1
          }

          if(keyDown("G")&&mango.isTouching(sensor)){

            link1 = new Link(chain1, mangoBody);
          
          }

          if(mango.depth <= obstacle7s.depth){
            mango.collide(obstacle7s);
          }

          

          ground.show();
          obstacle1.show();
        

          //adding gravity
           mango.velocityY = mango.velocityY + 2;
           mango.collide(bottomGround);
           mango.collide(edges);
           mango.collide(obstacle1s);
           mango.collide(obstacle2s);
           mango.collide(obstacle3s);
           mango.collide(obstacle4s);
           mango.collide(obstacle5s);
           mango.collide(obstacle6s);

           chain1.show();

         
        drawSprites();
        

        Engine.update(engine);

      rect(mangoBody.position.x, mangoBody.position.y, 20,20)
      rect(ChainSensorBody.position.x, ChainSensorBody.position.y, 5,20)


}


