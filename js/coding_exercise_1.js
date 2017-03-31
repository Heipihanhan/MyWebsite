function setup(){
    createCanvas(800, 800);
}

function draw(){
    colorMode(HSB, width);
    noStroke();
    for (var x = 0; x <= width; x = x + 20){
        for (var y = 0; y <= height; y = y + 20){
            fill(x, y, width);
            rect(x, y, 20, 20);
        }
    }
}