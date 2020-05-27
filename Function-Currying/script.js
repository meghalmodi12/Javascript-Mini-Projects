//So, currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument.

let multiply = function(x, y) {
  console.log(x * y);
};

//Function currying using bind
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//Function currying using colusers
let multiply1 = function(x) {
  return function(y) {
    console.log(x * y);
  };
};

let multiplyByTwo1 = multiply1(2);
multiplyByTwo(3);

let multiplyByThree1 = multiply1(3);
multiplyByThree(5);

// OR

multiply1(2)(3);

// Using recursion
let multiply2 = function(x) {
  return function(y) {
    if (y) {
      return multiply2(x * y);
    }
    else {
      return x;
    }
  }
}

console.log(multiply2(1)(2)(3)(4)())

// Single line syntex unsing ES6 

let sumRec = (a) => (b) => b? sumRec(a + b) : a;

console.log(sumRec(1)(2)(3)(4)())

// Techsith
function myFunction(a, b, c) {
	if (a && b && c) {
		return (a + b) * c;
	}
	else if (a && b) {
		return function(c) {
			return (a + b) * c;
		}
	}
	else if (a) {
		return function(b) {
			return function(c) {
				return (a + b) * c;
			}
		}
	}
	else {
		return 0;
	}
}

console.log(myFunction(1)(2)(3));
console.log(myFunction(1, 2)(3));
console.log(myFunction(1, 2, 3));
console.log(myFunction());