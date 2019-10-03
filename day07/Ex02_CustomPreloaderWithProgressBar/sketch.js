// see the 'index.html' file in this sketch folder - it contains a
// div named '#p5_loading' - this div will be displayed while the
// preload() function is operating - once it completes the div will
// automatically be hidden

var counter = 0;
var maxCounter = 0;

function preload() {    //so if i have to load up a lot of images, and from different directory, i can use this method
  for (var j = 1; j < 6; j++) {
    for (var i = 0; i < 49; i++) {
      maxCounter++;
      var tempImage = loadImage('images'+j+'/' + i + '.png', updateCounter);  // its a callback 
    }
  }
}

// this function is called when a load request finishes
function updateCounter() {    // invoked inside the preload
  // increase our counter
  counter++;

  // use the counter to set the style on the '#progress_bar' div
  var progress_bar = select('#progress_bar');
  progress_bar.style('width', int(counter/maxCounter*100) + "%");
}

function setup() {
  // setup the canvas and center it horizontally
  var theCanvas = createCanvas(500,500);
  theCanvas.style('display', 'block');
  theCanvas.style('margin', 'auto');
  background(0);
}

function draw() {
  var s = random(10,30);
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), s, s);
}
