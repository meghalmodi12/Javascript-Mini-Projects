// create array of length with random value pre-populated

let arr1 = new Array(5).fill(null).map(function(elem){ 
  return Math.random(); 
});

console.log(arr1);