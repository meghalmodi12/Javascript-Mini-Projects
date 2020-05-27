function uniq(nums) {
  numSet = new Set(nums);
  return Array.from(numSet);
}