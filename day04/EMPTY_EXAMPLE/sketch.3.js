let x = 250
let y = 250

function preload() {

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
    ellipse(x, y, 50, 50)

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
    if(key == 'A') {
        x -= 5;
    }
    if(key == 'D') {
        x += 5 
    }
}