// Write a function that swaps two numbers without using a temporary variable.

const swap = (a, b) => {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a, b];
}

module.exports = swap;
