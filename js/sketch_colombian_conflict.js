// ***** Global Variables ***** //
var = victimTable

// ***** Preload Function ***** //

function preload(){
  victimTable = loadTable('../data/Assignment_3_Data.xlsx', 'xlsx', 'header');
  console.log('Done loading table ...');
}