const fibonacci = (n) => {
  
  if (n == 1) {
    return 0;
  }
  
  if (n == 2) {
    return 1;
  }
  
  let x = 0;
  let y = 1; 
  let sum;
  
  for (let i = 2; i < n; i++) {
    sum = x + y;
    x = y;
    y = sum;
  }
  
  return sum;
}
  
// 0 1 1 2 3 5 8 13 21 34 55 89 144…
let result = fibonacci(5)

console.log(result);

const fiberative = n => {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n];
};
