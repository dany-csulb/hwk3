/*  Homework 3
    Exercise 1 Javascript Code
*/

console.log("Nguyen's Output from Homework 3 Exercise 1");

let firstName = prompt("Enter name: ");
let numUnits = prompt("Enter number of units completed: ");

if (Number(numUnits) >= 0) {
  // console.log("valid input");
  units = Number(numUnits);
  let grade;
  
  if (units <= 30) {
    grade = "Freshman";
  } else if (units <= 60) {
    grade = "Sophomore";
  } else if (units <= 90) {
    grade = "Junior";
  } else {
    grade = "Senior"
  }
  // Print output
  console.log(`Hello ${firstName}`);
  console.log(`Your grade standing is ${grade}`);

} else {
  console.log(`${firstName} you entered ${numUnits}. You must enter a number >= 0`);
}