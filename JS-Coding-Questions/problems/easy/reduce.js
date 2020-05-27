Array.prototype.myReduce = function(callBack, initialValue) {
  let result =  initialValue;
  let context = this;
  context.map(function(element){
    result = callBack(result, element);
  });
  return result;
}