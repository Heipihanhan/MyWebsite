// declare object circle 

var circle = {
	x: 0,
	y: 200,
	diameter: 50
}

function setup() {
	createCanvas(600, 400);
}
function draw() {
	background(218, 160, 221);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
    circle.x = circle.x + 1;
}

