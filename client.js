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

let Bob = {
  name: 'Robert',
  employeeNumber: '26835',
  annualSalary: '66000',
  reviewRating: 5
}
/*
function calculateBonus (employeesArray){
  let newArray = [];
  for ( employee of employeesArray ){


    newArray.push(employee.name);
  }
  return newArray;
c*/

function numberCheck( employeeNumber ){
  if employeeNumber

}

function newObject( myName, myBonusPercentage, myTotalCompensation, myTotalBonus) {
  this.name = myName;
  this.bonusPercentage = myBonusPercentage;
  this.totalCompensation = myTotalCompensation;
  this.totalBonus = myTotalBonus;
}

let bonusPercentage = .1;

function calculateBonus( employee ){

  if( employee.reviewRating <= 2 ){
    let bonusPercentage = 0;
  }
  else if( employee.reviewRating === 3 ){
    let bonusPercentage = .04;
  }
  else if(employee.reviewRating === 4){
    let bonusPercentage = .06;
  } 
  else if(employee.reviewRating === 5 && employee.employeeNumber.length === 4 ){
    let bonusPercentage = .10;  
  }   
  let totalBonus = employee.annualSalary * bonusPercentage;
  let totalCompensation = Number(employee.annualSalary) + Number(totalBonus);
  const employeeObject = new newObject(employee.name, bonusPercentage, totalCompensation, totalBonus)
  return employeeObject;
}

/*
  function calculateBonus(employee) {
    if (employee.reviewRating <= 2) {
      let bonusPercentage = 0;
      let totalBonus = employee.annualSalary * bonusPercentage;
      let totalCompensation = Number(employee.annualSalary) + Number(totalBonus);
      const employeeObject = new newObject(employee.name, bonusPercentage, totalCompensation, totalBonus)
      return employeeObject;
    }
    else if (employee.reviewRating === 3) {
      let bonusPercentage = .04;
      let totalBonus = employee.annualSalary * bonusPercentage;
      let totalCompensation = Number(employee.annualSalary) + Number(totalBonus);
      const employeeObject = new newObject(employee.name, bonusPercentage, totalCompensation, totalBonus)
      return employeeObject;
    }
    else if (employee.reviewRating === 4) {
      let bonusPercentage = .06;
      let totalBonus = employee.annualSalary * bonusPercentage;
      let totalCompensation = Number(employee.annualSalary) + Number(totalBonus);
      const employeeObject = new newObject(employee.name, bonusPercentage, totalCompensation, totalBonus)
      return employeeObject;
    }
    else if (employee.reviewRating === 5) {
      let bonusPercentage = .10;
      let totalBonus = employee.annualSalary * bonusPercentage;
      let totalCompensation = Number(employee.annualSalary) + Number(totalBonus);
      const employeeObject = new newObject(employee.name, bonusPercentage, totalCompensation, totalBonus)
      return employeeObject;
    }   

}
*/
//end calculateBonus


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// console.log( employees );
// console.log(calculateBonus(employees));