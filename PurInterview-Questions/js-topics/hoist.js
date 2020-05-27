// var hoisting vs let hoisting

function f() {
  //name is undefined at this point
  if (name !== undefined) {
    console.log("Name : ", name);
  }
  //area is not defined at this point, the code will throw reference error
  //simple undefined check will not do 
  //need to use try - catch
  try {
    console.log("Area : ", area);
  }
  catch(err) {
    console.log(err.name);
    console.log(err.message);
    //throw Error(e);
  }
  var name = "Meghal";
  let area = "Edison";
}

f();