function isInt(num) {
  return !isNaN(num) && num % 1 === 0 
}

console.log(isInt(3));
console.log(isInt(3.5));
console.log(isInt(0.0001));
console.log(isInt(1.0000));
