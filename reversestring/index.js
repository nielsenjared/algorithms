function reverseString(str) {
  debugger;
  var newStr = '';
  for (var i = str.length-1; i >= 0; i-- ) {
    newStr += str[i];
  }

  return newStr;
}

console.log(reverseString("ES5 string"));

const reverseStringES6 = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '');
}

console.log(reverseStringES6("ES6 string"));
