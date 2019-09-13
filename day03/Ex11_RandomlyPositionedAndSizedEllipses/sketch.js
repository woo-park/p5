function setup() {
  createCanvas(500, 500);
}

function draw() {
  // pick a random spot on the screen
  // note that we are adding in a bit of a "margin" to the screen here
  // so that ellipses are not partically drawn along the edges of the screen
  var xPos = random(25, width-25);
  var yPos = random(25, height-25);
  
  // also pick a random size for this ellipse
  var size = random(5,25);
  
  // draw an ellipse here
  ellipse(xPos, yPos, size, size);
}