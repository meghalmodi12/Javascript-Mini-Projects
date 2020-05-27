function isBalanced(s) {
  let stack = [];
  s = s.split("");
  for (let i in s) {
    let elem = s[i];
    if(elem === '{' || elem === '}') {
      if (elem === '{') {
        stack.push(elem);
      }
      else {
        if(stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}