var victimTable; 
var maxLength = 750; 
var maxValue = 0;

function preload(){
	refugeeTable = loadTable('../data/03_Assignment_3_Data', 'xlsx', 'header');
	
}

// ***** Setup function ***** //
function setup(){
  createCanvas(1000, 2000);
  textAlign(RIGHT, TOP);
  print(refugeeTable.getRowCount());
  print(refugeeTable.getColumnCount());
  for (var i = 0; i < refugeeTable.getRowCount(); i++){
  	maxValue = max(maxValue, refugeeTable.getNum(i, 'Total'));
  }
  print(maxValue);

}

// ***** Draw function ***** //
function draw(){
	background(255);
	for (var i = 0; i < refugeeTable.getRowCount(); i++){
		var rectLength = map(refugeeTable.getNum(i, 'Total'), 0, maxValue, 0, maxLength); //map(value, min, max, min, max) convert scale, super useful 
		rect(100, 50 + 20 * i, rectLength, 15);
	}
}