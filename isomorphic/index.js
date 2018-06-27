const isomorphic = (a, b) => {
  const comparer = str => {
    let arr = Array(str.length).fill(0);
    for (let i = 0; i < str.length; i++) {
      arr[i] = str.indexOf(str[i]);
    }
    return arr.join();
  }
  return a.length === b.length ? comparer(a) == comparer(b) : false;
}

// refactored
// const isomorphic = (a, b) => {
//   const comparer = str => {
//     return str.split('').map(e => {
//       return str.indexOf(e);
//     }).join();
//   }
//   return a.length === b.length ? comparer(a) == comparer(b) : false;
// }

// one-liner

// const isomorphic = (a, b) => a.length == b.length ? a.split('').map(e => a.indexOf(e)).join() == b.split('').map(e => b.indexOf(e)).join() : false;

module.exports = isomorphic;
