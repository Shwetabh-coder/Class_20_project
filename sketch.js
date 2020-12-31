var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  // createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = (400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  // background(black);  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>80){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<80){
      car.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}

// function isTouching(object1, object2) {
//   if (object1.x - object2.x <= object2.width / 2 + object1.width / 2
//     && object2.x - object1.x <= object2.width / 2 + object1.width / 2) {
//          return true;
//   }
//   else {
//          return false;
//   }
// }