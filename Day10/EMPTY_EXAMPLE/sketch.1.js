let offset = 1.0;

function setup() {
  createCanvas(800, 600);

  noiseDetail(24)
  // let num = noise(1.0)  //[0,1] 0 inclusive and 1 exclusive
}

function draw() {

  let num = noise( offset );
  
  console.log( num )
  

  // convert this noise value into bigger number
  // ellipse between 50px and 300px
  let size = map(num, 0, 1, 50, 300)

  ellipse(400, 300, size, size)
  offset += 0.01; 
}
