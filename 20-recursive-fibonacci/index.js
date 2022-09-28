const fibonaive = n => {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    };
  
    return fibonaive(n - 1) + fibonaive(n - 2);
 };



 const fibonot = n => {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    };
  
    return fibonot(n - 1) + fibonot(n - 1);
 };


 const fibDown = (n, memo=[]) => {
    if (n == 0 || n == 1) {
               return n;
         }
         if (memo[n] == undefined) {
               memo[n] = fibDown(n - 1, memo) + fibDown(n - 2, memo);
         }
         return memo[n];
    }



const fibottomUp = n => {
    if (n === 0) {
               return 0;
         }
         let x = 0;
         let y = 1;
         for (let i = 2; i < n; i++) {
               let tmp = x + y;
               x = y;
               y = tmp;
         }
         return x + y;
    }