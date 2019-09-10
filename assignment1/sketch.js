
let w = 1000;
let h = 1000;
// let x1, x2, y1, y2;
let point_color = 0;


let cx = [];
let cy = [];
let counter = 0;
let counting = 1;


function setup() {
 
    createCanvas(w, h);
    // noStroke();
    
    fill(255, 153);
    for(let i = 0; i < h; i += 10) {
        for(let j = 0; j < w; j+= 10) {
                point_color = 0;
                stroke(point_color);
                point(i,j)
        }}
}


// draw function - used for commands that need to be repeated
function draw() {
    
    // background(237, 34, 93);
    for(let i = 0; i < h; i += 10) {
        for(let j = 0; j < w; j+= 10) {
                // if(i == cx[counting] && j == cy[counting]) {
                    point_color = 222;
                    strokeWeight(4);
                    stroke(point_color);
                    point(cx[counting],cy[counting])
                    counting++;
                // } 
        }   
        // line(i, 0, i, h)
        counting = 0;
    }
    
}
function drawRect(x1,y1,x2,y2,x3,y3,x4,y4) {
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4);
    endShape(CLOSE);    
    console.log(x1,y1,x2,y2,x3,y3,x4,y4,'carteisan coord')
}
//cx[0], cy[0], cx[1], cy[1], cx[2], cy[2], cx[3], cy[3]


function mousePressed(event) {
    strokeCap(ROUND);
    rectMode(CORNERS);
    // console.log(counter, 'counter number for cx cy array')
    cx[counter] = event.clientX;
    cy[counter] = event.clientY;
    // console.log(cx[counter],cy[counter],`cx[${counter}],cy[${counter}]`)
    counter++;
    for(let i = 0; i < 100; i += 4){
        if(cx.length % 4 == 0){
            
                // console.log(cx);
                // console.log('We have 4 points now!')
                
                // console.log(`${cx[0+i],cy[0+i],cx[1+i],cy[1+i],cx[2+i],cy[2+i],cx[3+i],cy[3+i]}`);
                // for(let i = 0; i <= cx.length)
                // for(let i = 0; i < cx.length; i++){
                //     drawRect(cx[i],cy[i],cx[i+1],cy[i+1],cx[i+2],cy[i+2],cx[i+3],cy[i+3]);
                // }
                drawRect(cx[0+i],cy[0+i],cx[1+i],cy[1+i],cx[2+i],cy[2+i],cx[3+i],cy[3+i]);
            }
            
            // if(cx.length % 4 == 0 && cx.length / 4 == 2){
            //     console.log(cx);
            //     console.log('We have 4 points now!')
            //     // for(let i = 0; i <= cx.length)
            //     // for(let i = 0; i < cx.length; i++){
            //     //     drawRect(cx[i],cy[i],cx[i+1],cy[i+1],cx[i+2],cy[i+2],cx[i+3],cy[i+3]);
            //     // }
            //     drawRect(cx[4],cy[4],cx[5],cy[5],cx[6],cy[6],cx[7],cy[7]);
            // }

    }
    
    
    // for(let i = cx.length -1; i >= 0; i --){
    //     if(cx.length % 4 == 0 && cx.length / 4 == 1){
    //     drawRect(cx[i-3],cy[i-3],cx[i-2],cy[i-2],cx[i-1],cy[i-1],cx[i],cy[i]);
    //     }
    // }
    // console.log(event);
  }