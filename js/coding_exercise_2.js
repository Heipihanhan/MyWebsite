// ***** Global Variables ***** //
var distance;

// ***** Setup function ***** //

function setup(){
    createCanvas(400, 400);
    distance = dist(0, 0, width*1.5, height*1.5);
    }

function drawCircle(){
   background(255); 
     for (var x = 12.5; x <= width; x = x + 25) {
     for (var y = 12.5; y <= height; y = y + 25) {

       var size = dist(mouseX, mouseY, x, y);
       var s = size/distance*50;
       var a = (mouseX, mouseY);
       var b = map(size, 0, 500, 0, 225);
       fill(b);
       ellipse(x, y, s, s);
       }
   } 
}
// ***** Draw function ***** //
function draw(){
   noStroke();
   drawCircle(); 
}
