// ***** Global variables ***** //
var distance;

// ***** Setup function ***** //

function setup(){
    createCanvas(400, 400);
    distance = dist(0, 0, width*1.5, height*1.5);
}

// ***** Draw function ***** //
function draw(){
    background(255); 
    noStroke();
    for (var x = 10; x <= width; x = x + 20){
        for (var y = 10; y <= height; y = y + 20){
            var size = dist(mouseX, mouseY, x, y);
            var s = size/distance*50;
            var b = map(size, 0, 500, 0, 225);
            fill(b);
            ellipse(x, y, s, s);
        }
    } 
}

