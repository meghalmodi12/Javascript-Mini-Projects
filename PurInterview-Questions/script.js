// Q1 : What's the difference between undefined and not defined in JavaScript
// Will print undefined
var x;
console.log(x);

// Will throw error and break the execution : not defined
//console.log(y);

// Q2 : For which value of 'a' the results of the following statements are not the same?
var a;
if( a <= 100 ) { 
  console.log("loop");
}
if( !(a > 100) ) {
  console.log("loop");
}

// Q3 : What is the drawback of declaring methods directly in JavaScript objects?

// Q4 : What is “closure” in javascript? Can you provide an example?
/*

A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

The closure has access to the variable in three scopes:

Variable declared in his own scope
Variable declared in parent function scope
Variable declared in the global namespace

*/
var globalVar = 'a';

(function outer(outerArg) {
  var outerVar = 2;
  (function inner(innerArg) {
    var innerVar = 3;
    console.log(
      "Global " + globalVar + "\n" +
      "Outer Arg " + outerArg + " = " + outerVar + "\n" +
      "Inner Arg " + innerArg + " = " + innerVar + "\n"
    );    
  })('c');
})('b');

// Q5
function foo() {
  var a = 3;
  bar();  
}

function bar() {
  console.log(this.a);
}

foo();