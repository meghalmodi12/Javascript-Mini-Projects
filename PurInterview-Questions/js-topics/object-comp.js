/***
 * What will be the output of this code and why?
 */
let obj = { a: 1 };
let objb = { a: 1 };

if ({ a: 1 } === { a: 1 }) {
  // false
  // comparing two diff objects stored at diff locations
  console.log("Monday");
} else if ({ a: 1 } == { a: 1 }) {
  // false
  // same as if statement
  console.log("Tuesday");
} else if (obj == { a: 1 }) {
  // false
  console.log("Wednesday");
} else if (obj == objb) {
  // false
  console.log("Thursday");
} else if (Object.is(obj, objb)) {
  // false
  console.log("Friday");
} else {
  console.log("Saturday");
}