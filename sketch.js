var speed,weight,thickness
var bullet,wall,damage

function setup() {
  createCanvas(860,400);
  weight=random(30,52)
  speed=random(223,321)
  thickness=random(22,83)

  bullet = createSprite(10, 200, 50, 50);
  bullet.velocityX=random(50,200)
  bullet.shapeColor=("white")
  wall = createSprite(830, 200, thickness, height/2);
  wall.shapeColor=("white")

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
 console.log(damage)
}

function draw() {
  background("black");
  

  if(damage<10 && bullet.isTouching(wall)){
  wall.shapeColor=color("green") 
  bullet.velocity=0
  }
  if(damage > 10 && bullet.isTouching(wall)){
    wall.shapeColor=color("red") 
    bullet.velocity=0
    }
  
   
  
    
  
  drawSprites();
}

