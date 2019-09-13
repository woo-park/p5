function setup() {
  createCanvas(500, 500);
  
  // no strokes on our shapes
  noStroke();
}

function draw() {
  // pick a random spot on the screen
  // note that we are adding in a bit of a "margin" to the screen here
  // so that ellipses are not partically drawn along the edges of the screen
  var xPos = random(25, width-25);
  var yPos = random(25, height-25);
  
  // also pick a random size for this ellipse
  var size = random(5,25);
  
  // also pick some random colors for this ellipse
  var r = random(255);
  var g = random(255);
  var b = random(255);
  
  // transparency (we want all ellipses to be visible so the range changes a bit)
  var a = random(25,255);
  
  // set up our new color
  fill(r,g,b,a);
  
  // draw an ellipse here
  ellipse(xPos, yPos, size, size);
}