
console.log(["a", "b"] == ["a", "b"]); // false as two objects will be compared
console.log(["a", "b"] == ["a", "b"] + []); // true

// When we concate two array -> Javascript will convert array to to comma sperated string so ["a", "b"] + [] becomes "a,b"

console.log(["a", "b", "c"] == ["a", "b"] + []); // false
console.log(["a", "b"] == ["b", "a"]); // false as "a,b" != "b,a" 
console.log(["a", "b"] == "a,b"); // true as == uses coercion