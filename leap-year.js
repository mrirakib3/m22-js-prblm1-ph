/*
What is a leap year?
Leap year is a year having 366 days.
The extra day is the 29th February.
Leap year arrives after every four years.

Note: every year that is exactly divisible by 4 is a leap year, except the centurial year that is exactly divisible by 100. But these centurial years are leap years if they are exactly divisible by 400
*/

/*
function leapYear(input){
  if (input % 400 === 0){
    result = "Leap Year";
  }
  else if (input % 100 === 0) {
    result = "Not Leap Year";
  }
  else if (input % 4 === 0){
    result = "Leap Year";
  }
  else {
    result = "Not Leap Year";
  }
    
  return result;
}
console.log(leapYear(1900));
*/

// another way:
function leapYear(input){
  if (input % 4 === 0 && input % 100 !== 0){
    result = "Leap Year";
  }
  else if (input % 100 === 0 && input % 400 === 0){
    result = "Leap Year";
  }
  else {
    result = "Not Leap Year";
  }
  return result;
}
console.log(leapYear(1900));