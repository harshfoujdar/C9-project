
function setup() {
  createCanvas(1350,600);

}

function draw() 
{
  if (keyIsDown(DOWN_ARROW))
  background("red");

  if (keyIsDown(UP_ARROW))
  background("yellow")

  if (keyIsDown(RIGHT_ARROW))
  background("blue")

  if (keyIsDown(LEFT_ARROW))
  background("green")

}



