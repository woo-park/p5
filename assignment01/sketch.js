let coordinate = [
    [null, 536, 520, 630, 419, 708, 278, 568],
    [278, 569, 385, 536, 377, 420, 254, 438],
    [255, 440, 377, 420, 450, 319, 342, 304],
    [340, 305, 450, 319, 537, 281, 421, 222],
    [421, 223, 368, 140, 200, 292, 342, 306],
    [341, 307, 256, 439, 133, 448, 201, 291],
    [254, 440, 279, 569, 174, 627, 133, 448],
    [279, 571, 419, 708, 359, 806, 174, 627],
    [174, 628, 45, 684, 281, 918, 358, 805],
    [134, 448, 12, 444, 45, 684, 174, 628],
    [201, 292, 93, 207, 13, 445, 132, 447],
    [201, 290, 367, 139, 308, 32, 93, 207],
    [537, 280, 539, 367, 457, 370, 451, 320],
    [451, 319, 378, 418, 409, 436, 458, 370],
    [408, 435, 414, 527, 385, 534, 378, 418],
    [414, 526, 522, 605, 520, 627, 385, 536],
    [414, 526, 469, 500, 544, 553, 521, 605],
    [470, 500, 462, 445, 408, 436, 413, 528],
    [461, 445, 409, 437, 458, 371, 476, 400],
    [476, 398, 459, 370, 538, 368, 531, 395],
    [531, 395, 632, 446, 653, 415, 537, 367],
    [539, 367, 537, 281, 687, 348, 652, 414],
    [686, 348, 696, 214, 601, 195, 535, 282],
    [600, 194, 508, 166, 422, 221, 535, 283],
    [509, 165, 508, 60, 369, 140, 422, 222],
    [509, 166, 508, 60, 600, 74, 598, 193],
    [600, 194, 695, 213, 694, 115, 600, 74],
    [693, 115, 786, 138, 775, 217, 696, 213],
    [775, 217, 853, 222, 851, 189, 786, 137],
    [852, 190, 940, 195, 938, 226, 853, 221],
    [940, 196, 992, 160, 993, 227, 937, 225],
    [776, 217, 807, 357, 685, 349, 696, 213],
    [777, 218, 855, 222, 888, 359, 807, 357],
    [888, 358, 944, 431, 939, 225, 854, 222],
    [944, 429, 955, 526, 990, 228, 938, 226],
    [955, 524, 957, 608, 992, 511, 991, 227],
    [957, 606, 861, 659, 968, 728, 991, 655],
    [956, 605, 990, 652, 1007, 602, 992, 513],      
    [861, 659, 695, 684, 744, 788, 968, 727],
    [745, 788, 711, 817, 940, 779, 967, 728],
    [965, 728, 991, 736, 995, 801, 939, 779],
    [991, 734, 968, 728, 1000, 626, 997, 686],
    [696, 687, 664, 699, 710, 816, 745, 786],
    [664, 701, 644, 784, 681, 860, 709, 814],
    [643, 784, 562, 747, 599, 674, 664, 700],
    [695, 685, 695, 621, 656, 625, 663, 700],
    [655, 626, 522, 604, 519, 627, 598, 673],
    [597, 673, 562, 747, 420, 707, 519, 628],
    [419, 707, 358, 806, 559, 855, 562, 747],
    [562, 748, 643, 785, 609, 873, 559, 853],
    [558, 853, 522, 931, 282, 916, 357, 807],
    [522, 930, 663, 936, 609, 872, 558, 854],
    [610, 872, 643, 785, 680, 859, 662, 933],
    [680, 860, 771, 863, 762, 932, 663, 934],
    [770, 863, 924, 868, 940, 777, 710, 816],
    [924, 866, 989, 955, 995, 801, 940, 780],
    [923, 867, 771, 863, 761, 932, 988, 956],
    [279, 915, 74, 973, 5, 737, 45, 685],
    [74, 972, 322, 989, 521, 930, 279, 915],
    [522, 929, 321, 988, 619, 987, 661, 935],
    [660, 935, 619, 986, 775, 983, 761, 933],
    [774, 980, 986, 982, 990, 955, 761, 934],
    [73, 971, 4, 972, 4, 740, 49, 890],
    [43, 686, 4, 740, 5, 446, 11, 446],
    [14, 446, 5, 447, 6, 211, 92, 208],
    [92, 207, 61, 79, 246, 6, 306, 31],
    [60, 83, 6, 86, 7, 211, 90, 205],
    [309, 33, 496, 9, 506, 59, 367, 142],
    [505, 60, 600, 73, 624, 11, 497, 10],
    [600, 74, 694, 114, 751, 77, 623, 12],
    [784, 136, 826, 121, 749, 77, 693, 114],
    [786, 139, 824, 120, 861, 173, 853, 189],
    [862, 171, 940, 173, 939, 193, 853, 190],
    [941, 172, 990, 125, 990, 159, 938, 193],
    [939, 172, 936, 77, 862, 80, 861, 169],
    [860, 172, 826, 121, 825, 42, 862, 82],
    [825, 42, 754, 32, 748, 77, 825, 122],
    [754, 33, 697, 9, 624, 11, 747, 78],
    [701, 9, 835, 12, 824, 41, 755, 31],
    [862, 81, 866, 16, 833, 14, 825, 41],
    [863, 80, 933, 76, 937, 11, 865, 16],
    [936, 76, 938, 172, 988, 124, 992, 8],
    [991, 9, 937, 11, 933, 75, 965, 41],
    [544, 551, 552, 516, 521, 500, 469, 502],
    [522, 499, 517, 476, 464, 446, 471, 502],
    [519, 476, 519, 456, 475, 399, 463, 442],
    [519, 451, 529, 450, 529, 396, 477, 398],
    [528, 448, 529, 397, 631, 445, 562, 480],
    [561, 480, 573, 504, 642, 490, 631, 445],
    [642, 488, 671, 475, 651, 415, 630, 443],
    [642, 490, 646, 534, 586, 542, 573, 503],
    [551, 515, 543, 491, 523, 498, 551, 514],
    [542, 492, 561, 479, 573, 502, 550, 512],
    [541, 491, 534, 474, 517, 475, 523, 496],
    [535, 474, 529, 448, 517, 450, 518, 475],
    [542, 492, 560, 479, 529, 449, 534, 473],
    [551, 515, 542, 552, 587, 542, 575, 503],
    [542, 553, 520, 604, 656, 625, 586, 541],
    [586, 543, 646, 534, 670, 590, 654, 623],
    [670, 590, 709, 585, 694, 620, 652, 625],
    [708, 584, 754, 519, 645, 533, 670, 591],   
    [645, 532, 642, 488, 671, 474, 753, 518],
    [754, 517, 780, 465, 692, 424, 669, 474],
    [690, 423, 686, 350, 650, 416, 671, 472],
    [690, 424, 780, 462, 794, 451, 687, 349],
    [687, 348, 808, 356, 817, 445, 793, 450],
    [816, 445, 857, 471, 888, 359, 806, 357],
    [858, 469, 842, 531, 788, 529, 815, 445],
    [787, 530, 745, 597, 814, 623, 842, 530],
    [813, 623, 858, 658, 694, 688, 746, 595],
    [745, 595, 708, 585, 692, 622, 697, 682],
    [745, 594, 707, 585, 752, 518, 786, 528],
    [779, 462, 752, 520, 785, 527, 806, 472],
    [859, 469, 953, 603, 863, 658, 814, 626],
    [954, 604, 858, 467, 887, 359, 945, 430],
    [806, 469, 780, 462, 794, 451, 819, 446],
    [656, 626, 596, 672, 628, 684, 667, 699],
    [708, 817, 679, 859, 770, 864, 740, 839],
    [241, 4, 10, 10, 6, 83, 62, 81],
    [248, 6, 484, 6, 309, 33, 242, 5],
    [1000, 626, 1006, 978, 984, 978, 1000, 625],
    [0, 79, 64, 79, 95, 210, 6, 97]
];

//sample here

// console.log(window.availWidth);
// console.log(window.windowHeight);

// let w = window.screen.width;
// let h = window.screen.height;

let w = 1000;
let h = 1000;
let point_color = 0;

let cx = [];
let cy = [];
let counter = 0;
let counting = 1;

let rect_toggle = false;
let line_toggle = false;
let tri_toggle = false;


let coords_array = [
    
];
let Plane = [];

let turnOff;

/**********************             setup Class       **********************/
function setup() {
    createCanvas(w, h);
    frameRate(20);
    // fill(255, 153);
    for(let i = 0; i < h; i += 10) {
        for(let j = 0; j < w; j+= 10) {
                point_color = 0;
                stroke(point_color);
                // strokeWeight(10);
                point(i,j)
        }
    }
    
    //need another array
    // for(let i = 0; i < coords_array.length; i++) {
    //     let converted = coords_array.map(Number);
    //     console.log(converted);
    //     console.log(coords_array[i],'i');
    //     let string = coords_array[i].toString();
    //     console.log(string);
    //     console.log(parseInt(string),'parseint');
    //     console.log(typeof(string));
    //     // let splitted = string.split('');
    //     // console.log(splitted)

    //     Plane[i] = new PlaneDrawing(converted[i]);
    // }
    // Plane = new PlaneDrawing(coords_array[i]);
    let empty_string
    for(let i = 0; i < coordinate.length; i++) {
        // for(let j = 0; j < 8; j++) {
        // //     console.log(coordinate[i][j])
        // // }
        //     empty_string = '';
        // coordinate[0].forEach((item, index) => {
        //     // console.log(index)
        //     empty_string += item
        //     if(index < 7) {
        //         empty_string += ','
        //     }
            
        // })
        // console.log(coordinate[i], 'line on ' + i)
        
        Plane[i] = new PlaneDrawing(coordinate[i]);
    }
    // console.log(empty_string)
    // console.log(Plane)
    
    console.log(coordinate);
    console.log('press R to draw rect \n press L to draw line \n press T to draw triangle \n BUT make sure to turn OFF before switching!!')
}


/**********************                Perlin Noise          **********************/

let noise_color;
let perlin_noise = 0.0;
let perlin = () => {
    perlin_noise = perlin_noise + .01;
    noise_color = noise(perlin_noise) * 250;
    return noise_color;
}




/**********************                  Draw func on loop              **********************/
function draw() {
    turnOff = false;
    
    // Plane.displayRect(); // class method
    // Plane1.displayRect();
    // Plane2.displayRect();
    // for(let i = 0; i < coords_array.length; i++) {
    //     // console.log('hi')
    //     Plane[i].displayRect();
    // }
    
    if(turnOff == false) {
        Grid();
        // background(0)
        for(let i = 0; i < Plane.length; i++) {
            
            Plane[i].displayRect();
        }
    } else if(turnOff == true) {
        Grid();
    }

    Grid();
}
/**********************               For Grid                    **********************/


let Grid = () => {
    for(let i = 0; i < h; i += 10) {
        for(let j = 0; j < w; j+= 10) {
                
                    point_color = 'rgb(240)';
                    strokeWeight(noise_color/90);
                    stroke(point_color);
                    point(cx[counting],cy[counting])
                    counting++;
        }   
        counting = 0;
    }   
    perlin();
    // console.log(noise_color)

    fill(62, noise_color, 242);
}

// console.log(Plane)

/**********************               For Display                    **********************/

class PlaneDrawing {

    constructor(arg){
        this.x1 = arg[0];
        this.x2 = arg[2];
        this.x3 = arg[4];
        this.x4 = arg[6];
        this.y1 = arg[1];
        this.y2 = arg[3];
        this.y3 = arg[5];
        this.y4 = arg[7];
    }
    // constructor(x1,y1,x2,y2,x3 = 'null',y3 = 'null',x4 = 'null',y4 = 'null') {  //setting up default values
    //     this.x1 = x1;
    //     this.x2 = x2;
    //     this.x3 = x3;
    //     this.x4 = x4;
    //     this.y1 = y1;
    //     this.y2 = y2;
    //     this.y3 = y3;
    //     this.y4 = y4;
    // }

    // erase() {
    //     // for(let i = 0; i < 7; i++){
    //     //     this.arguments = null;
    //     // }
    //     // console.log(this.arguments)
        
    // }
    static erase() {
        turnOff = !turnOff;
        // background(255);
        // Grid();
        coordinate.forEach(item => {
            return item.forEach( (one) => {
                console.log(one,'one');
                return one += 1000
                
            })

        })
        console.log(coordinate)


    }

    show() {
        console.log(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
    displayRect() {
        beginShape();
        vertex(this.x1, this.y1);
        vertex(this.x2, this.y2);
        vertex(this.x3, this.y3);
        vertex(this.x4, this.y4);
        endShape(CLOSE);    
    }
    displayLine() {
        beginShape();
        vertex(this.x1, this.y1);
        vertex(this.x2, this.y2);
        endShape(CLOSE);
    }
    displayTri() {
        beginShape();
        vertex(this.x1, this.y1);
        vertex(this.x2, this.y2);
        vertex(this.x3, this.y3);
        endShape(CLOSE);    
    }
    
}


/**********************       For Drawing on the Cartesian plane            **********************/

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
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    endShape(CLOSE);  
}

let coords_rect = [];

function drawRect(x1,y1,x2,y2,x3,y3,x4,y4) {
    let newarray = [];
    for(let i = 0; i < 8; i++){
        newarray.push(arguments[i])
    }
    coords_rect.push(newarray);
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4);
    endShape(CLOSE);    
}

let triangle = () => {
    for(let i = 0; i < mousePressedCounter + 1; i += 3) {
        if(cx.length % 3 == 0 && cx.length == i + 3) {
            fill(62, noise_color, 242, noise_color+50);
            drawTriangle(cx[0+i],cy[0+i],cx[1+i],cy[1+i],cx[2+i],cy[2+i]);
        }
    }
}

let line = () => {
    for(let i = 0; i < mousePressedCounter + 1; i += 2) {  
        if(cx.length % 2 == 0 && cx.length == i + 2) {      //no fill bc line
            drawLine(cx[0+i],cy[0+i],cx[1+i],cy[1+i]);
        }
    }
}

let rect = () => {
    for(let i = 0; i < mousePressedCounter+1; i += 4){
        if(cx.length % 4 == 0 && cx.length == i + 4){
            fill(62, noise_color, 242, noise_color+50);
            drawRect(cx[0+i],cy[0+i],cx[1+i],cy[1+i],cx[2+i],cy[2+i],cx[3+i],cy[3+i]);
        }
    }
}


/**********************       Mouse pressed triggers rect,tri,line func        **********************/


let mousePressedCounter = 0;
function mousePressed(event) {

    if(event.returnValue == true){
        mousePressedCounter += 1;
    }

    // strokeCap(ROUND);
    // rectMode(CORNERS);

    cx[counter] = event.pageX;
    cy[counter] = event.pageY;
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


/**********************       For console && diff modes           **********************/

function keyPressed(){
    if (key == 'S' || key == 's') {
      save("masterpiece.png")
    }
    if (key == 'R' || key == 'r') {
        rect_toggle = !rect_toggle; 
        if(rect_toggle) {
            console.log('rect mode on!')
        } else if (!rect_toggle){
            console.log('rect mode off!')
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
    if (key == 'C' || key == 'c') {
        console.log(counter,'counter number!')
        console.log(coords_rect,'looped thru array!');
        // console.log(coords_rect[0],'type')
    }

    if (key == 'E' || key == 'e') {         // need to do better job here
        console.log(turnOff,'e for erase!')
        // for(let i = 0; i < Plane.length; i ++){
        //     Plane[i].erase();
        // }
        PlaneDrawing.erase();
        // background(255);
    }
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