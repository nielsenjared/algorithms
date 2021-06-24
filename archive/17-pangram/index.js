const pangram = str => {
  const arr = str.toUpperCase().split(' ').join('').split('').map(e => {
    return e.charCodeAt(0);
  }).sort();

  for (let i = 1; i < arr.length; i++){
    if (arr[i] - arr[i - 1] >= 2) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = pangram;
