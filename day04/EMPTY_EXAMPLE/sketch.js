x= 250
y = 250
let chicken
let chickenX = 50
let chickenY = 50

function preload() {
    chicken = loadImage('images/chicken.png')
}

// setup function - used for commands that need to run only once
function setup()
{
    createCanvas(500,500)
    noStroke()

}

// draw function - used for commands that need to be repeated
function draw()
{
    background(0, 30)

    fill(250)
    text("Points: " + point, 50, 50)

    imageMode(center)
    image(chicken, chickenX, chickenY)

    ellipse(x, y, 50, 50)

    let d = dist(x,y,chickenX, chickenY)
    console.log(d)

    if(d < 50) {
        chickenX = random(50, 450)
        chickenY = random(50, 450)
    }

    if( keyIsDown(65) ) {
        x -= 3
    }
    if(keyIsDown(68)) {
        x +=3
    }
    if(keyIsDown(87)) {
        y -=3
    }
    if(keyIsDown(83)) {
        y += 3
    }
    
    x= constrain(x, 0, width)           //neat
    y= constrain(y, 0, width)

    console.log( keyCode )
}

function mousePressed(){

}

function keyPressed() {
   
}