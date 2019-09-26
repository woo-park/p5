var c
let ref;
function setup() {
  // c = createCanvas(500,500).id("zoobar")
  ref = createCanvas(200,200)
  console.log( windowWidth, windowHeight )
  centerItAll()
}

function draw() {
  background(0)
}

function windowResized() {    //execute whenever window is resized
  centerItAll()
}

// function windowResized() {
//   console.log("here")
//   var x = int(windowWidth / 2 - 250)
//   var y = int(windowHeight / 2 - 250)
//   c.position(x,y)
// }

function centerItAll() {
  ref.position(windowWidth/2 - (width/2), windowHeight/2 - (height/2))
}


//!important
// // instance mode -- review again
// let sketch1 = function(p) {
//   p.setup = function() {
//     p.createCanvas(200,200)
//   }
//   p.draw = function() {
//     p.fill()
//     p.ellipse()
//   }
// }