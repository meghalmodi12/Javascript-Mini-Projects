Array.prototype.myFilter = function(callBack) {
  let result = [];
  let context = this;
  for (let i = 0; i < context.length; i++) {
    if (callBack(context[i])) {
      result.push(context[i]);
    }
  }
  return result;
};