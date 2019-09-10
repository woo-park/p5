// setup function - used for commands that need to run only once
let num = 60;       
let mx = [];
let my = [];

function setup() {
    // createCanvas(500,500)
    // background(128)

    // strokeWeight(10);

    // fill(123);
    // point(100, 100)
    // line(100,200,300,200);  //x1,x2,y1,y2
    // strokeWeight(1);
    // ellipse(250,200,50,50); 

    frameRate(5);       //refreshing 5 times a sec


    createCanvas(720, 400);
    noStroke();
    fill(255, 153);
    for (let i = 0; i < num; i++) {
        mx.push(i);
        my.push(i);
    }
    console.log(mx,'mx');
}

// draw function - used for commands that need to be repeated
function draw() {
    // strokeWeight(3)
    // stroke(0,255,128)
    // ellipse(mouseX,mouseY,100,100)
    // line(250,250,mouseX,mouseY);
//   print('llll');

    // noStroke();
    // fill(0,0,255,10);
    // ellipse(mouseX, mouseY, 50, 50)

    // ellipse(500-mouseX, mouseY, 50, 50)
    // ellipse(mouseX, mouseY, 50, 50)
    background(237, 34, 93);

  // Cycle through the array, using a different entry on each frame.
    // Using modulo (%) like this is faster than moving all the values over.
    // print(frameCount % num,'framecount % module num'); // 0 - 60 always 
    let which = frameCount % num; //ticks from 0 to 59      // 0 1st draw // 1 = 2nd draw // 2 = 3rd draw // 3 = 4th draw
    mx[which] = mouseX;         // mx[0] = mouseX from 1st draw // mx[1] = mouseX from 2nd draw // mx[2] = mouseX from 3rd draw
    my[which] = mouseY;         // my[0] = mouseY from 1st draw // my[1] = mouseY from 2nd draw // my[2] = mouseY from 3rd draw

    for (let i = 0; i < num; i++) {                 // !important -- draws from 'which' + 1
        // which+1 is the smallest (the oldest in the array)
        // let index = (which + 1 + i) % num;
        let index = (which+1+i) % num;
        console.log(index,'index');
        ellipse(mx[index], my[index], i, i);
    }
}

