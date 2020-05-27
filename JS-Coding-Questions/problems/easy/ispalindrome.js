function isPalindrome(s) {
  if (s.length < 2) {
    return true;
  }
  
  s = s.split("");
  
  left = 0;
  right = s.length - 1;

  while(left < right) {
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    }
    else if (s[left] == " ") {
      left++;
    }
    else if (s[right] == " ") {
      right--;
    }
    else {
      return false;
    }
  }

  return true;
}

function isPalindrome2(s) {
  s = s.replace(/\W/g, '').toLowerCase();
  return s === s.split('').reverse().join('');
}