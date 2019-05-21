const aeiou = ['a', 'e', 'i', 'o', 'u'];

// iterative approach #1
const vowels = (str) => {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (aeiou.includes(str[i])) {
      count++;
    }
  }
  return count;
};

// iterative approach #2
const vowels = (str) => {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (aeiou.includes(char)) {
      count++;
    }
  }
  return count;
};

// regex
const vowels = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// es6-y
const vowels = (str) => str.split('').reduce((acc, i) => {
  return ['a', 'e', 'i', 'o', 'u'].includes(i) ? acc+=1 : acc+=0;
}, 0);

// es6-y one-liner
const vowels = (str) => str.split('').reduce((acc, i) => ['a', 'e', 'i', 'o', 'u'].includes(i) ? acc+=1 : acc+=0, 0);

module.exports = vowels;
