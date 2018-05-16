const reverseString = str => {
  let newStr = '';
  for (let i = str.length-1; i >= 0; i-- ) {
    newStr += str[i];
  }
  return newStr;
}

//one liner
//return str.split('').reduce((rev, char) => char + rev, '');

module.exports = reverseString;
