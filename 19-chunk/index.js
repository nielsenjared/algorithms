const chunk = (arr, n) => {
  let chunked = [];
  let index = 0;

  while (index < arr.length) {
      chunked.push(arr.slice(index, n + index));
      index += n;
  }
  return chunked;
}


// const chunk = (arr, n) => {
//   // create an empty Array
//   let chunked = [];
//   // for each element in the original array
//   for (let element of arr) {
//     let last = chunked[chunked.length-1];
//
//     if (!last || last.length === n) {
//         chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//     return chunked;
// }

module.exports = chunk;
