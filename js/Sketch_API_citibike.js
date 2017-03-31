// ***** Global variables ***** //

var citibikeData;


// ***** Preload function ***** //

function preload(){
	citibikeData = loadJSON('../data/temp_citibike_station.json');
	console.log('The json file has been loaded ...');
	console.log(citibikeData);

}

// ***** Setup function ***** //

function setup(){
	createCanvas(800, 800);
	console.log(citibikeData.data.station);
}

// ***** Draw function ***** // 
function draw(){
	background(255);
}

// in the draw functino, create dots of stations //