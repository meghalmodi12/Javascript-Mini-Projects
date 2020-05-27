//Difference between dot notation and square brackets syntax

let info1 = {
  name: "meghal"
};

let info2 = {
  name: "Jinal",
  address: {
    street: "3 Pheasant Run",
    city: "Edison",
    zip: "08820"
  },
  meghal: "Husband"
};

//Dot
console.log(info2[info1.name]);
//console.log(info2.info1.name);

//Square bracket
console.log(info2[info1["name"]]);
console.log(info2[info1[name]]);