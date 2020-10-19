var bullet;
var wall;
var weight;
var speed;
var Damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200, 200, thickness, height/2);
  speed=random(223,321); 
  weight=random(30,52);
  
}

function draw() {
  background(0,255,255);
  bullet.shapeColor = rgb(255,255,255);
  wall.shapeColor = rgb(80,80,80);
  if(keyDown("space")){
    bullet.velocityX = speed;
  }
    
  if(wall.x - bullet.x <(bullet.width + wall.width)/2) {
    bullet.velocityX= 0;
    Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness) ;
  }
  if(Damage < 10){
    wall.shapeColor = rgb(0,255,0);
  }
  if(Damage > 10){
    wall.shapeColor = rgb(255,0,0);
  }
  drawSprites();
}

