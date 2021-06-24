const anagram = (a, b) => {
  return a.split('').sort().join() == b.split('').sort().join();
}

module.exports = anagram;

// BONUS
// const cleaner = (str) => {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }
//
// const anagram = (a, b) => {
//   return cleaner(a) === cleaner(b);
// }
