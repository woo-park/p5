var c
function setup() {
  c = createCanvas(500,500).id("zoobar")
}

function draw() {
  background(0)
}

function windowResized() {
  console.log("here")
  var x = int(windowWidth / 2 - 250)
  var y = int(windowHeight / 2 - 250)
  c.position(x,y)
}
