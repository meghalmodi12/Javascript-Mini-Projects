let f = function(a, b) {
  // arguments.length = total number of arguments passed
  // functionName.length = total number of arguments function is expecting 
  if (arguments.length == f.length) {
    console.log("We have a match");
  }
  else {
    console.log("We don't have a match");
  }
}

//determine if function received number of params it is expecting
f(1);
f(1,2);
f(1,2,3);