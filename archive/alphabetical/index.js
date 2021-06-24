const phabetic = (str) => {
  let result = false;
  let index = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] == vowels[j]) {
        if (index <= j) {
          index = j;
          result = true;
        } else {
          result = false;
        }
      }
    }
  }
  return result;
}

module.exports = phabetic;
