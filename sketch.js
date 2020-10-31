var fixedRectangle, movingRectangle;




function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.debug = true;
  movingRectangle = createSprite(200,100,50,50);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;
}

function draw() {
  background(255,255,255);
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  
  if(movingRectangle.x - fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
    fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
    movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2 &&
    fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2){
      movingRectangle.shapeColor = "red";
      fixedRectangle.shapeColor = "red";
    }
    else
  {
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "green";
  }

  
  drawSprites();
}

