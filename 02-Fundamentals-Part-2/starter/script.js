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


//Function calling other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(5, 20));

/* CHALLENGE #1  

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.  

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).  

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!  

Your tasks:  

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).  

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).  

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).  

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.  

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.  

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);  
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgKoalas, avgDolphins) {
  if (avgKoalas > avgDolphins) {
    console.log("Koalas win (" + avgKoalas + " vs. " + avgDolphins + ")");
  } else if (avgDolphins > avgKoalas) {
    console.log("Dolphins win (" + avgDolphins + " vs. " + avgKoalas + ")");
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreKoalas, scoreDolphins);
