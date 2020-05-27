const log = console.log;

// 1. How to empty an array
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;

log(clothes[0]); // => ???

// Note : Reducing the value of the length property has the side-effect of deleting own array elements whose array index is between the old and new length values.

// 2. What is the content of numbers array?
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1);
}

log(numbers); // => ???
// Do not ignore ; on line 14

// 3. What value is returned by arrayFromValue()?
function arrayFromValue(item) {
  return 
  [item];
}

log(arrayFromValue(10)); // => ???
// The newline makes the JavaScript automatically insert a semicolon between return and [item] expression.

// 4. What’s the result of the equality check?
log(0.1 + 0.2 === 0.3);
// 0.1 + 0.2 = 0.30000000000000004

// 5. What happens if you access myVar and myConst before declaration?
log(myVar);   // => undefined
log(myConst); // => reference error

var myVar = 'value';
const myConst = 3.14;
