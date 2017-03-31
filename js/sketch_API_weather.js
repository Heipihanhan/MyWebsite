// ***** Global variables ***** //

var apiKey = 'c42764416e57102a80ebfba7dbf84ede';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Fairbanks';
var units = 'metric';
var weatherData;
var temperature;
var humidity;
var button;



// ***** Setup function ***** //

function setup(){
	createCanvas(800, 800);
	button = select('#submit');
	city = select('#city');
	button.mousePressed(queryAPI);
	
}

function queryAPI(){
	var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units;
	loadJSON(query, getWeatherData); // use the query function to get the results and pass them to the getWeatherData function
}

function getWeatherData(apiData){
	weatherData = apiData;  // getWeatherdata function assigns results to weatherData. apiData is just a pseudo term. 
	console.log(weatherData);
	temperature = weatherData.main.temp;
	humidity = weatherData.main.humidity;
}




// ***** Draw function ***** // 
function draw(){
	background(255);
	fill(0);
	noStroke();
	if (weatherData){ // if weatherData = True or weatherData = False. this is a "true or false" if statement. 
	    ellipse(200, 200, temperature * 10, temperature * 10);
	}
	
}