/*  Homework 3
    Exercise 2 Javascript Code
*/

console.log("Nguyen's Output from Homework 3 Exercise 2");

let dayEntered = prompt("Enter a day of the week: ");

console.log(`You enetered: ${dayEntered}`);

switch (dayEntered.toLowerCase()) {
  case "mon":
    nextDay = "tue";
    break;
  case "tue":
    nextDay = "wed";
    break;
  case "wed":
    nextDay = "thu";
    break;
  case "thu":
    nextDay = "fri";
    break;
  case "fri":
    nextDay = "sat"
    break;
  case "sat":
    nextDay = "sun";
    break;
  case "sun":
    nextDay = "mon";
    break;
}
console.log(`The following day is: ${nextDay}.`);

