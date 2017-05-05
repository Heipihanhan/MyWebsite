// setup() happen only once
function setup() {
	createCanvas(600, 400);
	background(250, 250, 100); //creates shadows

}

// draw() loops over and over again
function draw() {
	noStroke();
	// background(250, 250, 100); static
	fill(250, 200, 200, 50);
	ellipse(mouseX, mouseY, 25, 25);
	fill(200, 250, 200);
	// rect(400, 100, 50, 50);
}

function mousePressed() {
	background(250, 250, 100);
}

