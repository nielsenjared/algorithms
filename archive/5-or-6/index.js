//function declaration
function five6(num) {
  if (num == 5) {
    return true;
  } else if (num == 6) {
    return true;
  } else {
    return false;
  }
}

//function expression
// var five6 = function(num) {
//   if (num > 6 || num < 5) {
//       return false;
//     } else {
//       return true;
//     }
// }

//es6-y one-liner
// const five6 = num => {
//   return num == 5 || num == 6 ? true : false;
// }

module.exports = five6;
