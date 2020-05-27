/**
 * What will the output from the console.log be and why?
 */
let box = {};
let bag = {
  prop: "bag",
  can: "box"
};
let can = {
  prop: "can",
  bag: "box"
};
box[bag] = "Monday"; 
// In above statement we are using bag object as key
// Javascript will try to convert object into string and the new key will be bag.toString() => "[object Object]"

box[can] = "Tuesday";
// In above statement we are redoing (overwriting) the same thing

console.log(box[bag]);
// Tuesday
// as we are reading box["[object Object]"]