Array.prototype.myIndexOf = function(elem) {
  let context = this;
  for (let i = 0; i < context.length; i++) {
    if (context[i] === elem) {
      return i;
    }
  }
  return -1;
}