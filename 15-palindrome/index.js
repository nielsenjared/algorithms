function palindrome(str) {
  for (var i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// function expression
// const palindrome = str => {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - 1 - i];
//   });
// }

//es6-y
// const palindrome = str => str === str.split('').reverse().join('');

module.exports = palindrome;
