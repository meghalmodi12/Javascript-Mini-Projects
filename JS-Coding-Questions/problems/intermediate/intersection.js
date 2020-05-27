function intersection(nums1, nums2) {
  numObject = {};
  result = [];

  for (let i = 0; i < nums1.length; i++) {
    if(numObject[nums1[i]]) {
      numObject[nums1[i]]++;
    }
    else {
      numObject[nums1[i]] = 1;
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    if(numObject[nums2[j]] && numObject[nums2[j]] > 0) {
      numObject[nums2[j]]--;
      result.push(nums2[j]);
    }
  }
  return result;
}