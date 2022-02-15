// recursive
const factorial = num => {
    if (num == 0 || num === 1) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
 };


// iterative
const factorial = num => {
   if (num === 0 || num === 1) {
       return 1;
   }
 
   for (let i = num - 1; i >= 1; i--) {
     num *= i;
   }
   return num;
};
