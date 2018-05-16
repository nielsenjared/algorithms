function palindrome(str) {
  for (var i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("racecar"));
console.log(palindrome("racecars"));

//refactored + ES6
const palindromeFancy = str => {
  return str === str.split('').reverse().join('');
}

console.log(palindromeFancy("racecar"));
console.log(palindromeFancy("racecars"));

//alternatively
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - 1 - i];
//   });
// }
