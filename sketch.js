var bullet, wall, speed, weight, thickness;


function setup() {
  createCanvas(900,400);
  bullet = createSprite(100, 200, 27, 7);
   bullet.velocityX=speed=random(223, 321);
  

  wall = createSprite(800, 200, thickness=random(40, 70), height/2)
wall.shapeColor=color(80, 80, 80)
speed=random(223,321)
weight=random(30, 52)
thickness=random(40, 70)
}

function draw() {
  background("black");  
  
 



      

     if (hasCollided(bullet, wall)) {
bullet.velocityX=0
var damage=0.5*weight* speed* speed/(thickness*thickness*thickness)
    if (damage>10) {
   wall . shapeColor = ("red")

    }
     }

     if (damage<10) {
      wall . shapeColor = ("green")
   
       }
        




  
  
  
    
  
  
  
  
  
  
  
  
  
  drawSprites();
}


function hasCollided() {
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x
if (bulletRightEdge>=wallLeftEdge) {
return true


}

false

}



