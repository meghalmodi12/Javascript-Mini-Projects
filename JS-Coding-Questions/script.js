const log = console.log;

// Question 1
log(isPrime(0));
log(isPrime(1));                          
log(isPrime(17));                         
log(isPrime(10000000000000));   
log("-------------------");

// Question 2
log(factorial(0));
log(factorial(1));
log(factorial(6));
log("-------------------");

// Question 3
log(fibonacci(0));
log(fibonacci(1));
log(fibonacci(10));
log(fibonacci(20));
log("-------------------");

// Question 4
log(isSorted([]));
log(isSorted([-Infinity, -5, 0, 3, 9]));
log(isSorted([3, 9, -3, 10]));
log("-------------------");

// Question 5
function test(elem) {
  return elem > 2;
}
log([0,1,2,3,4].myFilter(test));
log("-------------------");

// Question 6
function test2(a, b) {
  return a * b;
}
log([1, 2, 3, 4].myReduce(test2, 1));
log("-------------------");

// Question 7
log(reverse(""));
log(reverse("jinal"));
log(reverse("meghal"));

var rString = "";
reverse2("helloworld".split(""), rString);
log(rString);
log("-------------------");

// Question 8
log([1, 2, 3].myIndexOf(1));
log([1, 2, 3].myIndexOf(3));
log("-------------------");

// Question 9
log(isPalindrome(''));
log(isPalindrome('abcdcba'));
log(isPalindrome('abcd'));
log(isPalindrome('A man a plan a canal Panama'));

log(isPalindrome2(''));
log(isPalindrome2('abcdcba'));
log(isPalindrome2('abcd'));
log(isPalindrome2('A man a plan a canal Panama'));

log("-------------------");

// Question 10
log(missing([]));
log(missing([1, 4, 3]));
log(missing([5, 1, 4, 2]));
log(missing([1, 2, 3, 4]));
log("-------------------");

// Question 11
log(isBalanced("}{"));
log(isBalanced("{{}"));
log(isBalanced("{}{}"));
log(isBalanced("foo { bar { baz } boo }"));
log(isBalanced("foo { bar } }"));
log("-------------------");

// Question 12

// Question 13

// Question 14
log(uniq([]));
log(uniq([1, 4, 2, 2, 3, 4, 8]));
log("-------------------");

// Question 15
log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
log(intersection([1, 5, 4, 2], [7, 12]));
log("-------------------");

// Question 16
log(isBalanced2('(foo { bar (baz) [boo] })'));
log(isBalanced2('foo { bar { baz }'));
log(isBalanced2('foo { (bar [baz] } )'));
log("-------------------");

// Question 17
let map = new HashMap();
log(map.set('abc', 123));
log(map.set('foo', 'bar'));
log(map.set('foo', 'baz'));
log(map.get('abc'));
log(map.get('foo'));
log(map.get('def'));
log("-------------------");

// Question 18
log(mergeSort([1,6,3,4,9,10,2,6,7,11]));