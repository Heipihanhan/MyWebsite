// ***** Global Variables ***** //
var = victimTable
var = headers = ['TIPO DE VICTIM', ]
// ***** Preload Function ***** //

function preload(){
  victimTable = loadTable('../data/Assignment_3_Data.xlsx', 'xlsx', 'header');
  console.log('Done loading table ...');
}

