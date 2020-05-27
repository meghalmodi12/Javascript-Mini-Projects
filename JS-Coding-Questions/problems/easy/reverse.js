function reverse(s) {
  s = s.split("");
  for (let i = 0; i < parseInt(s.length / 2); i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s.join("");
}

function reverse2(s, newS) {
  if (s.length === 0) {
    return newS;
  }

  newS = newS + s.pop();
  return reverse2(s, newS);
}

function reverse3(s) {
  if(s === "") {
    return "";
  }
  return  reverse3(s.substr(1) + s.charAt(0));
}