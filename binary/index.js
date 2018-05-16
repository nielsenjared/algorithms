const binary = num => {
  const str = num.toString();
  let sum = 0;
  let exp = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    sum += str[i] * 2**exp;
    exp++;
  }
  return sum;
}

module.exports = binary;
