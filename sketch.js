
function preload()
{}

function setup() {
  createCanvas(9000, 668);

  var xValue=0
  var gap=random([30,60,80])
  for(var i=0;i<6;i++){
    platform1=new Platform(xValue);
    xValue=xValue +platform1.rw +gap
  }
  
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

