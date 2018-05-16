const reverseint = (int) => {
  return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
}

// console.log(reverseint(123456789));

module.exports = reverseint;
