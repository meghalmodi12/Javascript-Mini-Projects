function missing(nums) {
  let missingNum;
  let maxNum = 0;

  //Get Max value
  maxNum = Math.max(...nums);

  if (maxNum > nums.length) {
    let totalSum = 0;
    let actualSum = ((nums.length + 1) * (nums.length + 2)) / 2;
    for (let i = 0; i < nums.length; i++) {
      totalSum += nums[i]; 
    }
    missingNum = Math.abs(actualSum - totalSum);
  }

  return missingNum;
}