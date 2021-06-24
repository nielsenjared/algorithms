const primeFactor = num => {
  if (num <= 1) return 1; //recursion

  const factors = [];
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
      return primeFactor(num / i);
    } else {
      return 1;
    }
  }
}

console.log(primeFactor(60));

module.exports = primeFactor;
