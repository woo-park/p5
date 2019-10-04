let theWalkers = []

function setup() {
  createCanvas(800, 600);

  noiseDetail(24);

  for (let i = 0; i < 50; i ++){
    let temp = new NoiseWalker( random(width), random(height) )
    theWalkers.push( temp );
  }
}

function draw() {
  background(255, 30);

  theWalkers.forEach(each => {
    each.displayAndMove();
  })


}

class NoiseWalker {
  constructor(x,y){
    this.x = x;
    this.y = y;

    this.xOffset = random(0, 1000) //pick a spot on the curve to use when picking random values for movement
    this.yOffset = random(2000, 3000)

    this.red = random(100, 255);
    this.green = this.red
    this.blue = this.red

    this.size = 50;
  }

  displayAndMove(){
    noStroke()
    fill(this.red)
    ellipse(this.x, this.y, this.size, this.size)

    if (dist(this.x, this.y, mouseX, mouseY) < 50) {
      this.red = random(100, 255);
      this.green = random(100, 255);
      this.blue = random(100, 255);

      this.size -= 1;
      this.size = constrain(this.size, 0, 50)
    } else {
      this.size += 1
      this.size = constrain(this.size, 0, 50)
    }

    if(dist(this.x, this.y, mouseX, mouseY) < 150) {  // tip, i would even turn off the wander function and let it run
      if (mouseX < this.x) {  
        this.x += 2
      } 
      if (mouseX > this.x) {
        this.x -= 2
      }
      if (mouseY < this.y) {
        this.y +=2
      }
      if (mouseY > this.y) {
        this.y -=2 
      }
    }

    //step1 : pick a random value from the curve
    var value = noise( this.xOffset )   // [0, 1]

    //step2 : convert this into something meaningful
    // -2px up to 2px in speed
    var xMove = map( value, 0, 1, -2, 2 );

    //step3
    this.x += xMove

    // step4 : move on the noise curve so that the next time we pick a new related number
    this.xOffset += 0.01;

    //move up down
    let yNum = noise( this.yOffset )
    let yMove = map(yNum, 0, 1, -2, 2)
    this.y += yMove
    this.yOffset += 0.01

    this.x = constrain(this.x, 0, width)
    this.y = constrain(this.y, 0, height)
  }

  
  

}
