//Using classic for loop
function reverseString(str) {
  var rev = '';
  for (var i = str.length-1; i >= 0; i-- ) {
    rev += str[i];
  }
  return rev;
}

console.log(reverseString("String!"));

//Using ES6 of
function reverseStringOf(str) {
  let rev = '';

  for (let char of str) {
    rev = char + rev;
  }

  return rev;
}

//Using built-in methods
function reverseStringMethods(str){
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

//Refactored
function reverseStringMethodsRefactored(str){
  return str.split('').reverse().join('');
}

//Using ES6 reduce array method
function reverseStringReduce(str) {
  return str.split('').reduce((rev. char) => {
    return char + rev;
  }, '');
}

//Refactored
function reverseStringReduceRefactored(str) {
  return str.split('').reduce((rev, char)) => char + rev, '');
}
