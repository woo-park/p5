let desiredX = 250
let desiredY = 250

let characterX = 100
let characterY = 0

//preload the artwork

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
    // if(mouseIsPressed == true) {
    //     line(mouseX, mouseY, pmouseX, pmouseY)
    // }
    background(0, 30)

    fill(255)
    ellipse(characterX,characterY, 50, 50)

    fill(0,255,0)
    ellipse(desiredX,desiredY, 20, 20)

    //figure out the x distance between the chars
    let xDist = desiredX - characterX
    let yDist = desiredY - characterY

    //move the caracter %5 of the way towards its destination

    characterX += xDist * 0.05
    characterY += yDist * 0.05

    if(mouseIsPressed == true) {
        desiredX = mouseX
        desiredY = mouseY
    }

}

function mousePressed(){

}