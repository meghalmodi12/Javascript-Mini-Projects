/**
 * What will the output of the following two loops be?
 */
const numbers = [1, 2, 3];
numbers[10] = 11;
// Above statemet will create 7 undefined elements and assign value 11 to 11th element

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

//forEach will get 4 elements to loop through after ignoring every undefined elements
numbers.forEach((num, idx) => {
  console.log(idx, num);
});