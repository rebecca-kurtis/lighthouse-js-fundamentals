function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("5 is odd: " + isOdd(5));
console.log("16 is odd: " + isOdd(16));