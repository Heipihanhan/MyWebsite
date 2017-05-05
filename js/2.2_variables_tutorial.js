// 1. Declare  
//    declare variables and name them
// 2. Initialize
//    give initial values, assignment operation
//    Most times, step 1 and 2 are combined in one section setp()
// 3. Use 

var circleX = 0;
var circleY = 400;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(250, 250, 100);
	fill(250, 200, 200);
	ellipse(circleX, circleY, 80, 80);
	circleX = circleX + 1;
	circleY = circleY -1;
}