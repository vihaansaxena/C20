var MovingRect,FixedRect;
function setup() {
  createCanvas(800,400);
  FixedRect= createSprite(200, 200, 50, 80);  
  FixedRect.shapeColor= "green";
  MovingRect = createSprite(400, 200, 80, 30);   
  MovingRect.shapeColor= "green";
}

function draw() {
  background(255,255,255);  
  MovingRect.x= World.mouseX;
  MovingRect.y= World.mouseY;
  console.log(MovingRect.x-FixedRect.x);
  //rightside collision
  if(MovingRect.x-FixedRect.x === MovingRect.width/2+FixedRect.width/2 
    || FixedRect.x-MovingRect.x === MovingRect.width/2+FixedRect.width/2
    || FixedRect.y-MovingRect.y === MovingRect.height/2+FixedRect.height/2
    || MovingRect.y-FixedRect.y === MovingRect.height/2+FixedRect.height/2)
  {
    FixedRect.shapeColor= "red";
    MovingRect.shapeColor= "red";
  }

else{
  FixedRect.shapeColor= "green";
    MovingRect.shapeColor= "green";
}

  drawSprites();
}
