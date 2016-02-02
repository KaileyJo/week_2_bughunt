// ! ! !
// Three Bugs
// BUG #1: Fixed calculateSTI function to reference items in the nested array, 
//  rather than continuously referencing the first item in the first array over
//  over (arrayAtticus)

// BUG #2: Fixed getBaseSTI function to return a simply basePercent instead of a negative #. 
//  (basePercent instead of basePercent - 1)

// BUG #3: Added Math.round to newArray[3] to come up with a round answer.

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array1) {
  var newArray = [];
  newArray[0] = ' ' + array1[i][0];

  var employeeNumber = array1[i][1];
  var baseSalary = array1[i][2];
  var reviewScore = array1[i][3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = ' ' + bonus;
  newArray[2] = ' $' + Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = ' $' + Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;

}

function getBaseSTI(reviewScore) {
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
}

function getYearAdjustment(employeeNumber) {
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(baseSalary) {
  var incomeAdjustment = 0;
  baseSalary = parseInt(baseSalary);
  if (baseSalary > 65000) {
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}