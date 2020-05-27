  /**
 * What will the value of the three log statements be?
 */
let n1 = 111; //primitive
let n2 = new Number(123); //object
let n3 = Number(123); //primitive

// can not assign properties to primitive
n1.prop = true;
n2.prop = true; //works
n3.prop = true;

console.log(n1.prop);
console.log(n2.prop);
console.log(n3.prop);