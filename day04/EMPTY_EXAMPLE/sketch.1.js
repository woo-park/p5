//set up a variable to hold a copy of a graphic
let scene
let flower1
let flower2
let flower3


//preload the artwork

function preload() {
    scene = loadImage('images/scene.jpg')
    flower1 = loadImage('images/flower-1.png')
    flower2 = loadImage('images/flower-2.png')
    flower3 = loadImage('images/flower-3.png')

}

// setup function - used for commands that need to run only once
function setup()
{
    createCanvas(800, 600)
    background(0)
    image(scene, 0, 0, 800, 600)      // two additional para - forces to new size - 
}

// draw function - used for commands that need to be repeated
function draw()
{
    

}

function mousePressed(){
    let chance = random(0, 10)
    if(chance <= 5) {
        image(flower1, mouseX,mouseY) //image can take multiple parameters
    } else{
    image(flower2, mouseX,mouseY) //image can take multiple parameters
    }
    imageMode()

}