function palindrome(str) {
  for (var i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - 1 - i];
//   });
// }

//refactored + ES6
const es6y = str => {
  return str === str.split('').reverse().join('');
}

module.exports = palindrome;
