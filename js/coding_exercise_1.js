function setup(){
    createCanvas(400, 400);
}

function draw(){
    colorMode(HSB, width);
    noStroke();
    for (var x = 0; x <= width; x = x + 10){
        for (var y = 0; y <= height; y = y + 10){
            fill(x, y, width);
            rect(x, y, 10, 10);
        }
    }
}