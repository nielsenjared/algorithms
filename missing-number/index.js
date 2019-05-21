const missing = (arr) => {
  let sum = 0;

  for (let i = arr.sort()[0]; i <= arr.length + 1; i++) {
    sum += i;
  }

  return sum - arr.reduce((i, acc) => acc += i, 0);
}

console.log(missing([5, 2, 6, 1, 3, 4]))
module.exports = missing;
