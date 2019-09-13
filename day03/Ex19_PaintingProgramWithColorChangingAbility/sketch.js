// store our current color values
var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0);

  // draw our color indicator label
  fill(255);
  text("Color:", 25, 25);

  // draw our current color block
  fill(r,g,b);
  rect(75, 10, 25, 25);
}

function draw() {

  // only draw an ellipse when the mouse is pressed
  if (mouseIsPressed == true) {

    // draw using our defined color
    fill(r,g,b);

    // draw the ellipse
    ellipse(mouseX, mouseY, 10, 10);
  }

}

function keyPressed() {
  // if the 'C' key is pressed we should pick a random color
  if (key == 'C' || c == 'c') {
    r = random(255);
    g = random(255);
    b = random(255);

    // redraw our color indicator
    fill(r,g,b);
    rect(75, 10, 25, 25);
  }
}
