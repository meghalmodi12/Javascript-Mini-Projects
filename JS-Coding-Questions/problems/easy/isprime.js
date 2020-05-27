function isPrime(num) {
  num = Math.abs(num);
  if (num < 2) {
    return false
  }
  numSqrt = Math.sqrt(num);
  for (var i = 2; i <= numSqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}