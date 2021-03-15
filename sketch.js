var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(80,80,30,30);
  car.shapeColor = "yellow";

  wall = createSprite(240,80,20,60);
  wall.shapeColor= "brown";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  car.x = World.mouseX;
  car.y = World.mouseY;

 if (isTouching(movingRect , fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }

 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

 if(isTouching(car,wall)){
 car.shapeColor = "white";
 wall.shapeColor = "white";
 }
 else{
   car.shapeColor = "yellow";
   wall.shapeColor = "brown";
 }

  drawSprites();
}


