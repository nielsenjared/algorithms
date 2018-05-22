const reverseint = (int) => {
  return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
}

module.exports = reverseint;
