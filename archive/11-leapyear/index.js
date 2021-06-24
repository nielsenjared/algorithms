const isLeap = input => {
  if (input % 4 === 0 && input % 400 === 0) {
    return true;
  } else if (input % 4 === 0 && input % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};

// one liner
// return input % 4 + input % 400 === 0 || input % 4 + input % 100 !== 0;

// with ternary
// return input % 4 === 0 ? input % 400 === 0 : input % 100 !== 0;

module.exports = isLeap;
