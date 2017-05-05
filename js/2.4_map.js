// //  create a map when you move mouse left and right, the color of the map changes
// var col = 0;

// function setup() {
// 	createCanvas(600, 400);
// }

// function draw() {
// 	col = map(mouseX, 0, 600, 0, 255)
// 	background(col);
// 	// or simple-cut way col = mouseX/2;
// 	fill(250, 118, 222);
// 	ellipse(mouseX, 200, 64, 64);

// }

var r = 0;
var b = 255;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	// background
	r = map(mouseX, 0, 600, 0, 255);
	b = map(mouseX, 0, 600, 255, 0);
	background(r, 0, b);

	// ellipse
	fill(250, 118, 222);
	ellipse(mouseX, 200, 64, 64);
}
