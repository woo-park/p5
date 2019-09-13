function setup() {
  createCanvas(500, 500);
  
  // no strokes on our shapes
  noStroke();
}

function draw() {
  // pick a random size for this ellipse
  var size = random(5,25);
  
  // also pick some random colors for this ellipse
  var r = random(255);
  var g = random(255);
  var b = random(255);
  
  // transparency (we want all ellipses to be visible so the range changes a bit)
  var a = random(25,255);
  
  // set up our new color
  fill(r,g,b,a);
  
  // pick a position near the mouse
  var xPos = random(mouseX-20, mouseX+20);
  var yPos = random(mouseY-20, mouseY+20);
  
  // draw an ellipse here
  ellipse(xPos, yPos, size, size);
}