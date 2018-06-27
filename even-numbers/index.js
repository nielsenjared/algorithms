// const even = n => {
//   const res = [];
//
//   for (let i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }

//recursive
const evens = [];
const even = n => {
  if (n % 2 != 0) {
    n--;
  } else if(n == 0) {
      return 0;
  } else {
    evens.push(n);
    console.log(evens);
    return even(n - 2);
  }
}

even(101);
console.log(evens);
