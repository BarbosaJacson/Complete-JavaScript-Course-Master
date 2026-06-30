'use strict';
function logger() {
  console.log('My name is Jacson');
}

//calling

logger();   
logger();
logger();
logger();

function fruitProcess (apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcess(5, 0);

const appleJuice = fruitProcess(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcess(10, 40);
console.log(appleOrangeJuice);

//Declaration vs Expression

//Function Declaration
function calcAge1(birthYear) {
  return 2040 - birthYear;
}
const age1 = calcAge1(1978);
//Function Expression
const calcAge2 = function (birthYear) {
  return 2040 - birthYear;
};
const age2 = calcAge2(1978);
console.log(age1, age2);

//Arrow Function
const calcAge3 = birthYear => 2040 - birthYear; //Function with one parameter and one line of code, without the return statement and curly braces.
const age3 = calcAge3(1978);
console.log(age3);
//Arrow Function with multiple parameters and multiple lines of code, with the return statement and curly braces.

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1978, 'Jacson'));