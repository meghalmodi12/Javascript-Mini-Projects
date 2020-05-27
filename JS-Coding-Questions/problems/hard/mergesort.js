function mergeSort(arr) {
  let mid = arr.length / 2;
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid, arr.length);
  let sorted;

  if (arr.length < 2) {
    return arr;
  }
  else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return sorted;
}

function merge(firstSubArray, secondSubArray) {
  let result = [];

  while(firstSubArray.length !== 0 && secondSubArray.length !== 0) {
    if(firstSubArray[0] < secondSubArray[0]) {
      result.push(firstSubarray.shift());
    }
    else {
      result.push(secondSubArray.shift());
    }
  }

  return result.concat(firstSubArray).concat(secondSubArray);
}