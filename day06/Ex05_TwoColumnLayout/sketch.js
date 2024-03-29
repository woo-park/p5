// NOTE: this demo showcases how a p5 sketch can be used in conjunction with an 
// HTML document.  Please open up the 'index.html' file and refer to it as necessary

function setup() {
  // create our canvas & store a reference
  var canvas = createCanvas(250, 250);
  
  // set the parent of the canvas element to the element in the DOM with 
  // an ID of "left"
  canvas.parent("#left");
  
  // erase the background
  background(255);
}

function draw() {
  // just draw some random ellipses
  fill(random(255));
  ellipse(random(25,width-25), random(25,height-25), 25, 25);
}