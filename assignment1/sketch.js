
console.log(window.screen.width);
console.log(window.screen.height);

let w = window.screen.width;
let h = window.screen.height;
// let x1, x2, y1, y2;
let point_color = 0;


let cx = [];
let cy = [];
let counter = 0;
let counting = 1;

let rect_toggle = false;
let line_toggle = false;
let tri_toggle = false;


// let plane_array = [];
function setup() {
 
    createCanvas(w, h);
    // noStroke();
    
    // fill(255, 153);
    for(let i = 0; i < h; i += 10) {
        for(let j = 0; j < w; j+= 10) {
                point_color = 0;
                stroke(point_color);
                point(i,j)
        }
    }
    // for(let i = 0; i < 100; i ++) {
        
    // }
    Plane = new PlaneDrawing(290, 304, 639, 260, 638, 407, 337, 441);
    Plane1 = new PlaneDrawing(290, 304, 639, 260, 638, 407, 337, 441);
    Plane2 = new PlaneDrawing(290, 304, 639, 260, 638, 407, 337, 441);
    
    console.log('press R to draw rect \n press L to draw line \n press T to draw triangle \n BUT make sure to turn OFF before switching!!')
}


// draw function - used for commands that need to be repeated
function draw() {
    // Plane.displayRect(); // class method

    // background(237, 34, 93);
    for(let i = 0; i < h; i += 10) {
        for(let j = 0; j < w; j+= 10) {
                // if(i == cx[counting] && j == cy[counting]) {
                    point_color = 222;
                    strokeWeight(1);
                    stroke(point_color);
                    point(cx[counting],cy[counting])
                    counting++;
                // } 
        }   
        // line(i, 0, i, h)
        counting = 0;
    }

    
}


class PlaneDrawing {
    constructor(x1,y1,x2,y2,x3,y3,x4,y4 = 'null') {
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.x4 = x4;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
        this.y4 = y4;
    }
    show() {
        console.log(this.x1, this.y1, this.y4);
    }
    displayRect() {
        beginShape();
        vertex(this.x1, this.y1);
        vertex(this.x2, this.y2);
        vertex(this.x3, this.y3);
        vertex(this.x4, this.y4);
        endShape(CLOSE);    
    }
    
}




let coords_triangle = [];

function drawTriangle(x1,y1,x2,y2,x3,y3) {
    let newarray = [];
    for(let i = 0; i < 6; i ++) {
        newarray.push(arguments[i]);   
    }
    coords_triangle.push(newarray);
    beginShape(TRIANGLES);
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    endShape();
}

let coords_line = [];

function drawLine(x1,y1,x2,y2) {
    let newarray = [];
    for(let i = 0; i < 4; i ++) {
        newarray.push(arguments[i]);
    }
    coords_line.push(newarray);
    console.log(coords_line, 'coords_line array!')
    // line(x1, y1, x2, y2);
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    endShape(CLOSE);  
}


let coords_rect = [];
// let demo = "34 343 343 22 11 55 112 333"
// let newarray
function drawRect(x1,y1,x2,y2,x3,y3,x4,y4) {
    let newarray = [];
    for(let i = 0; i < 8; i++){
        newarray.push(arguments[i])
        // coords_rect.push(arguments[i]);
        // console.log(newarray,'new hurray!');
    }
    coords_rect.push(newarray);
    // console.log(newarray,'newarray!')
    console.log(coords_rect,'looped thru array!');

    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4);
    endShape(CLOSE);    
}

let mousePressedCounter = 0;
function mousePressed(event) {
    // console.log(event)
    
    if(event.returnValue == true){
        // console.log('true it is pressed!');
        mousePressedCounter += 1;
    }
    // console.log(mousePressedCounter);
    strokeCap(ROUND);
    rectMode(CORNERS);
    // console.log(counter, 'counter number for cx cy array')
    cx[counter] = event.clientX;
    cy[counter] = event.clientY;
    // console.log(cx[counter],cy[counter],`cx[${counter}],cy[${counter}]`)
    counter += 1;

    if(rect_toggle == true) {
        
        rect();
    }
    if(line_toggle == true) {
        line();
    }
    if(tri_toggle == true) {
        triangle();
    }
    
}

let triangle = () => {
    for(let i = 0; i < mousePressedCounter + 1; i += 3) {  // 0 , 2, 4, 6
        if(cx.length % 3 == 0 && cx.length == i + 3) {
            drawTriangle(cx[0+i],cy[0+i],cx[1+i],cy[1+i],cx[2+i],cy[2+i]);
        }
    }
}

let line = () => {
    for(let i = 0; i < mousePressedCounter + 1; i += 2) {  // 0 , 2, 4, 6
        if(cx.length % 2 == 0 && cx.length == i + 2) {
            drawLine(cx[0+i],cy[0+i],cx[1+i],cy[1+i]);
        }
    }
}


let rect = () => {
    for(let i = 0; i < mousePressedCounter+1; i += 4){
        if(cx.length % 4 == 0 && cx.length == i + 4){
            fill(66, 245, 242, 160);
            drawRect(cx[0+i],cy[0+i],cx[1+i],cy[1+i],cx[2+i],cy[2+i],cx[3+i],cy[3+i]);
        }
    }
}

function keyPressed(){
    if (key == 'S' || key == 's') {
      save("masterpiece.png")
    }
    if (key == 'R' || key == 'r') {
        rect_toggle = !rect_toggle; 
        if(rect_toggle) {
            console.log('rect mode on!', rect_toggle)
        } else if (!rect_toggle){
            console.log('rect mode off!', rect_toggle)
        }
        
    }
    if (key == 'T' || key == 't') {
        tri_toggle = !tri_toggle; 
        if(tri_toggle) {
            console.log('tri mode on!')
        } else if (!tri_toggle){
            console.log('tri mode off!')
        }
        
    }
    if (key == 'L' || key == 'l') {
        line_toggle = !line_toggle; 
        if(line_toggle) {
            console.log('line mode on!')
        } else if (!line_toggle){
            console.log('line mode off!')
        }
    }
    // console.log(counter,'counter number!')
}








//cx[0], cy[0], cx[1], cy[1], cx[2], cy[2], cx[3], cy[3]

// function parseString(arg){
//     // console.log(arguments[0]);
//     // para = arguments[0];
//     // para.split('');

//     // console.log(para);
//     // // para.replace(' ', ',')
    

//     // console.log(typeof(para),'this is argument');
// }
// console.log(para,'para splitted');
// need a function
// takes console log coords as input