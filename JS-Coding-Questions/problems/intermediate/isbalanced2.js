class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
      return this.items.pop();
  }
  peek() {
    if(this.items.length > 0) {
      return this.items[this.size() - 1];
    }
  }
  size() {
    return this.items.length;
  }
}

let parirs = {
  '(' : ')',
  '{' : '}',
  '[' : ']'
};

function findPair(val) {
  return parirs[val];
}

function isBalanced2(s) {
  stack = new Stack();
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    switch(s[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(s[i]);
        break;
      case ')':
      case '}':
      case ']':
        if(findPair(stack.peek()) === s[i]) {
          stack.pop();
        }
        else {
          return false;
        }
    }
  }
  return stack.size() === 0; 
}