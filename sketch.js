var bullet,wall;
var speed,height;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";
  bullet.velocityX=speed;
  thickness=random(22,83);
 
}
function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0)
    };

    if(damage<10)[
      wall.shapeColor="green"
    ]
  }
  drawSprites();
}

function hasCollided(lBullet,lWall){
  bulletRihtEdge=lBullet.x+lBullet.width;
  wallLeftEdge=lWall.x;
  if(bulletRihtEdge>=wallLeftEdge){
    return true;
  }
    return false;
  
  
}
