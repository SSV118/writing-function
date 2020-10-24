function setup() {
  createCanvas(800,400);
 box1= createSprite(400, 200, 100, 100);
 box1.shapeColor="orange";
 box2=createSprite( 300, 200, 50, 50);
 box2.shapeColor="black";
}

function draw() {
  background("blue"); 
   box2.x=mouseX;
   box2.y = mouseY;
   box()
  drawSprites();
}
function box(){
  if (box2.x - box1.x<box1.width/2+box2.width/2
    &&box1.x-box2.x<box1.width/2+box2.width/2
    &&box2.y-box1.y<box1.height/2+box2.height/2
    &&box1.y-box2.y<box1.height/2+box2.height/2){
box1.shapeColor="yellow";
box2.shapeColor="green";
   }
   else{
    box1.shapeColor="orange"; 
    box2.shapeColor="black";
   }
}