let country = "Brazil";
let continent = "South America";
let population = 213000000;

console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);

/*CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
3. Log the value of BMIMark and BMIJohn to the console.
4. BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.

OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

//Write your code here for Challenge #1
/* Write your code below. Good luck! 🙂 */

// BMI = (mass / (height * height))
let massMark = 78;
let massJohn = 92;
let heightJohn = 1.95;
let heightMark = 1.69;

//TEST DATA 1 

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn*heightJohn);

console.log("BMI of Mark is"+ " "+ BMIMark);
console.log("BMI of John is"+ " "+ BMIJohn);

//TEST DATA 2 Inibido para não sobrescrever os dados do teste 1, caso queira testar o teste 2, basta comentar os dados do teste 1 e descomentar os dados do teste 2
//massMark = 95;
//massJohn = 85;
//heightJohn = 1.76;
//heightMark = 1.88;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn*heightJohn);

console.log("BMI of Mark is"+ " "+ BMIMark);
console.log("BMI of John is"+ " "+ BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
/*CHALLENGE #2


Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.


👉 OPTIONAL: You can watch my solution in video format in the next lecture


IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

*/


/* Write your code below. Good luck! 🙂 */

if(BMIMark > BMIJohn){ console.log("Mark's BMI is higher than John's!")
} else { console.log("John's BMI is higher than Mark's!")}

BMIMarkNew = 28.3;
BMIJohnNew = 29.1;

if(BMIMark > BMIJohn){ console.log("Mark's BMI " + (BMIMarkNew) + " is higher than John's!")
} else { console.log("John's BMI " + (BMIJohnNew) + " is higher than Mark's!")}

/*CHALLENGE #3
Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.


TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


👉 OPTIONAL: You can watch my solution in video format in the next lecture


This topic is covered in
Lecture 18: Taking Decisions: if / else Statements
Lecture 23: Boolean Logic
Lecture 24: Logical Operators


*/

let scoreDolphins = (96 + 108 + 89)/3;
let scoreKoalas = (88+91+110)/3;


if (scoreDolphins > scoreKoalas) {console.log("Dolphins win the trophy")} else if (scoreDolphins === scoreKoalas) {console.log("Both win the trophy")} else {
 console.log("Koalas win the trophy")   
}
/* Exercise 4 - /switch statement
1. Use a switch statement to log the following string for the given day variable:

- "Plan course structure" for Monday
- "Go to coding meetup" for Tuesday
- "Prepare theory videos" for Wednesday
- "Write code examples" for Thursday
- "Record videos" for Friday
- "Enjoy the weekend" for Saturday and Sunday
- "Not a valid day!" for all other days
Bonus: Use if/else statements with days wednesday or thursday to replace the operator switch statement.
*/

const day = 'monday';

switch (day) {
    case 'monday':
        console.log("Plan course structure");
        break;
    case 'tuesday':
        console.log("Go to coding meetup");
        break;
    case 'wednesday':
        console.log("Prepare theory videos");
        break;  
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day!");
}

//Bonus: Use if/else statements with days wednesday or thursday to replace the operator switch statement.

if (day === 'wednesday') {
    console.log("Prepare theory videos");
} else if (day === 'thursday') 
        {
    console.log("Write code examples");
}
else if (day === 'monday') {
    console.log("Plan course structure");
}
else if (day === 'tuesday') {
    console.log("Go to coding meetup");
}
else if (day === 'friday') {
    console.log("Record videos");
}
else if (day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekend");
}
else {
    console.log("Not a valid day!");
}

//Exrcise 5 - /Ternary Operator
//1. Use the ternary operator to log a string to the console saying whether the person is old enough to drive (18 or older). 
//If they are, the message should say: "Sarah is old enough to drive". If they are not, the message should say: "Sarah is not old enough to drive".

const age = 19;
const message = age >= 18 ? "Sarah is old enough to drive" : "Sarah is not old enough to drive";
console.log(message);

const age2 = 18;
const message2 = age2 >= 18 ? "wine 🍷" : "water 🥤";
console.log(message2);

