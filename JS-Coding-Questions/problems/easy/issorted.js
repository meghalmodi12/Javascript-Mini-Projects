function isSorted(nums) {
  if (nums.length < 2) {
    return true;
  }
  else {
    for (var i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        return false;
      }
    }
    return true;
  }
}