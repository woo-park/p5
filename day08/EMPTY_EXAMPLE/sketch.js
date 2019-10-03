let c = [];
function setup() {
  createCanvas(500,500);

  for(let i = 0; i < 20; i ++) {
    let randomX = random(0, 500)
    let randomY = random(0, 500)
    c[i] = new circle(20, randomX, randomY, 3,3)
  }
  
}

function draw() {
  background(0);
  for(let i = 0; i < 20; i ++) {
    c[i].display()
    c[i].move()
  }
  
}

class circle {

  constructor(size, xpos, ypos, xspeed, yspeed){
    this.size = size;
    this.xpos = xpos;
    this.ypos = ypos;
    this.xspeed = xspeed;
    this.yspeed = yspeed;

    this.red = random(0, 255)
    this.blue = random(0, 255)
    this.green = random(0, 255)
  }

  display = function () {

    if(dist(mouseX, mouseY, this.x, this.y) < 25 ) {    //propagating the rule to the entire stuff // see how far the mouse is from each circle
      this.red = random(0,255)
      this.green = random(0,255)
      this.blue = random(0,255)

    }

    fill( this.red, this.green, this.blue )
    ellipse( this.xpos, this.ypos, this.size, this.size);
    
  }
  move() {
    this.xpos += this.xspeed;
    this.ypos += this.yspeed;

    if(this.xpos > width || this.xpos < 0) {
      this.xspeed *= -1;
    }

    if(this.ypos > height || this.ypos < 0) {
      this.yspeed *= -1;
    }
  }



}

