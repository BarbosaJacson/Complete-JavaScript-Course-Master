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
