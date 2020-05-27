var arr = [1,2,3,4,5];

//Map
var arrSqr = arr.map(function(i){
  return i * i;
});

//Custom map function
Array.prototype.myMap = function(callback) {
  var context = this;
  var newArr = [];

  for (var i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
}

var arrCubeMyMap = arr.myMap(function(i){
  return i * i * i;
});

console.log(arrSqr);
console.log(arrCubeMyMap);
// End Map

//Filter
var arrSqr2 = arr.filter(function(i){
  var sqr = i * i;
  if (sqr > 10) {
    return i;
  }
});

//Custom filter function
Array.prototype.myFilter = function(callback) {
  var context = this;
  var newArr = [];

  for (var i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

var arrCubeMyFilter = arr.myFilter(function(i){
  return i * i * i > 10;
});

console.log(arrSqr2);
console.log(arrCubeMyFilter);
// End Filter

//Reduce
var arrSum = arr.reduce(function(sum, currValue){
  return sum + currValue;
}, 0);

console.log(arrSum);

//Fold
function fold(initialValue, operation, list) {
  var accumulatedValue = initialValue;

  //Using map
  list.map(function(elem){
    accumulatedValue = operation(accumulatedValue, elem);
  });

  /*
  //Using loop
  for (var i = 0; i < list.length; i++) {
    accumulatedValue = operation(accumulatedValue, list[i]);
  }
  */

  return accumulatedValue;
}

//Sum
var sum = function(list) {
  function plus(a, b) {
    return a + b;
  }
  return fold(0, plus, list);
};

//Multiply
var multiply = function(list) {
  function mul(a, b) {
    return a * b;
  }
  return fold(1, mul, list);
};

//Find min or max
var findMin = function(list) {
  function getMin(a, b) {
    return a > b ? b : a;
  }
  return fold(list[0], getMin, list);
};

//Merge lists
var mergeLists = function(list) {
  function merge(a, b) {
    var newList = []
    for (var i = 0; i < a.length; i++) {
      newList.push(a[i]);
    }

    for (var j = 0; j < b.length; j++) {
      newList.push(b[j]);
    }
    return newList;
  }
  return fold([], merge, list);
}

console.log(sum([1,2,3,4,5]));
console.log(multiply([1,2,3,4,5]));
console.log(findMin([2,1,5,7,3,10]));
console.log(mergeLists([[1,2],[3,4],[5,6,7],[8],[9,10]]));