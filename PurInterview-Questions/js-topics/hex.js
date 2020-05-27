//Generate random hex-color
function color() {
  return "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
}

console.log(color());