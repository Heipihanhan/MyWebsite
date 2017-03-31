

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(0);
    strokeWeight(4);
    stroke(255);

    for (var x = 0; x <= width; x += 20){
        for (var y = 0; y <= height; y += 20){
            fill(random(255), random(255), random(255));
            ellipse(x, y, 25, 25);
        }
    }

}