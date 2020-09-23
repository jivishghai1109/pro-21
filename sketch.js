var bullet,speed,weight;
var wall,thickness;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet = createSprite(500, 200, 50, 10);
  wall = createSprite(1200,200,thickness,height/2);
 

  
}

function draw() {
  background("black");  
  bullet.velocityX = speed;

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX = 0;
var def = 0.5*weight*speed*speed/22500;
if(def>180){

  bullet.shapeColor = color("white");

}

if(def<180 && def>100){
  bullet.shapeColor = color(230,230,0);

}
if(def<100){
  bullet.shapeColor=color(0,255,0);
}

  }
  


  drawSprites();
}