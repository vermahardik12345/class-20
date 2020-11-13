var frect,mrect;


function setup() {
  createCanvas(800,400);
  frect=createSprite(400,250,20,80);
  mrect=createSprite(200,250,80,20);

}

function draw() {
  background("black");
  mrect.shapeColor="green";
  frect.shapeColor="green";
  mrect.x=World.mouseX;  
  mrect.y=World.mouseY;
  console.log(mrect.x-frect.x);
  if(mrect.x-frect.x<frect.width/2+mrect.width/2&& frect.x-mrect.x<frect.width/2+mrect.width/2&&mrect.y-frect.y<frect.height/2+mrect.height/2&&frect.y-mrect.y<frect.height/2+mrect.height/2){
    frect.shapeColor="red";
    mrect.shapeColor="red";

  }else {
    mrect.shapeColor="yellow";
    frect.shapeColor="yellow";
  }


  drawSprites();
}