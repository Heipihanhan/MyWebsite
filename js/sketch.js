var myFirstVariable = 20;
var secondVariable = 35;
var myName = "Hanhan";  // you can use single quote or double quote, or quote inside quote like "'Hanhan'"
var amIamerican = false;
var numbers = [12, 214, 523, 645, 86];
var myObject = {name: "Hanhan", lastname: "Li", age: 25, Chinese: true};

var cricleSize = 50;

function myFirstFunction (x1, x2, x3){
	//var x5 = "mistery values ..."; // it won't work as a local function ?
	var x4 = x1 * x2 * x3;
	return x4;
}

// load the data. preload force the javascript to run the data first 

//function preload(){}

// setup function always run at the begining 

function setup(){
	createCanvas(1000, 1000);
	//for (var i = 0; i < 100; i++){ //i++ could be written as i = i + 1 
	//	print(i);

	var i = 0;
	while (i < 100){
		print(i);
		i++;
	
	}


	//console.log(myFirstVariable);  //console is a great way of trouble shooting
    var thirdVariable = myFirstVariable + secondVariable + myName;  //javascript deal with it by the order, at first numbers, then texts
    print(thirdVariable);

    var fourthVariable = myName + myFirstVariable + secondVariable;  //javascript treats it as texts first and the rest follow suit. 
    print(fourthVariable);
    print(amIamerican);
    print(numbers[0]);
    print(myObject["name"]);   // ["name"] or ['name'] both works
    print(myFirstFunction(2, 4, 5));


} 



function draw(){
	// background(0, 100, 100);
	if (mouseIsPressed){
		fill(255);
	} else {
		fill(0);
	}

	stroke(200, 0, 50);
	strokeWeight(1);
	ellipse(mouseX, mouseY, cricleSize, cricleSize);


}

// ***** Global variables ***** //
var myData = [12, 43, 15, 25, 34];
var labels = ['Colombia', 'Peru', 'Venezuela', 'Chile', 'Argentina'];

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  textSize(18);
  console.log('Setup complete...');
}

// ***** Draw function ***** //
function draw(){
  background(255);
  fill(0);
  noStroke();
  // Drawing the bar chart
  for (var i = 0; i < myData.length; i++) {
    rect(100, 5 + 20*i, myData[i] * 10, 15);
  }
  // Drawing the labels
  for (var i = 0; i < labels.length; i++) {
    text(labels[i], 10, 20*i);
  }
}
