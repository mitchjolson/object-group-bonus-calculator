const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

/*
function
  in employee
  out newobject w/ 
    name = employee.name
    bonus% = calculate (another function)
    totalcomp = employee.annualSalary + totalBonus
    totalbonus = employee.annualSalary * bonus% / 100
*/

// Start with a for loop to go acrross employee array and just log each one.
//Then I'm going to write a new function to return the new object for each employee.

for( let i = 0; i < employees.length; i++ ){
  let anEmployee = employees[i];
  // console.log( anEmployee )
  let bonusInfo = getBonusInfo( anEmployee );
  console.log( bonusInfo );
}

// This function takes in an employee and uses their review rating, employee number, and annual salary to return their bonus
// No bonus can be less than 0 or greater than 13
function bonusCalculation( employee ){
  let bonusPercent = 0;

  if( employee.reviewRating <= 2 ){
    bonusPercent = 0;
  } else if(employee.reviewRating === 3){
    bonusPercent = 4;
  } else if (employee.reviewRating === 4) {
    bonusPercent = 6;
  } else if (employee.reviewRating === 5) {
    bonusPercent = 10;
  }
  if( employee.employeeNumber.length === 4 ){
    bonusPercent += 5;
  }
  if( employee.annualSalary > 65000 ){
    bonusPercent -= 1;
  }
  if( bonusPercent < 0 ){
    bonusPercent = 0;
  } else if( bonusPercent > 13 ){
    bonusPercent = 13;
  }

  return bonusPercent;
}

// This function takes in an employee and returns information including their name, bonus percentage, total bonus, and total comp
function getBonusInfo( employee ){
  let bonusInfo = {};
  bonusInfo.name = employee.name;
  bonusInfo.bonusPercentage = bonusCalculation( employee );
  bonusInfo.totalBonus = Math.round(Number(employee.annualSalary) * ( bonusInfo.bonusPercentage / 100 ));
  bonusInfo.totalCompensation = Number(employee.annualSalary) + bonusInfo.totalBonus;

  return bonusInfo;
}


// Get an employee to test with
const Atticus = employees[0];
const atticusBonusInfo = getBonusInfo(Atticus)
console.log('Name should be "Atticus":', atticusBonusInfo.name);
console.log('Bonus should be 9:', atticusBonusInfo.bonusPercentage);
console.log('Total Bonus should be 4230:', atticusBonusInfo.totalBonus);
console.log('Total compensation should be 51230:', atticusBonusInfo.totalCompensation);



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// console.log( employees );
