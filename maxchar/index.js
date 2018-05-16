const maxchar = str => {
   const chars = {};
   for (let char of str) {
     chars[char] = chars[char] + 1 || 1;
   }
   
   let max = '';
   let count = 0;

   for (let char in chars) {
      if (chars[char] > count) {
         count = chars[char];
         max = char;
      }
   }
   return max;
}

console.log(maxchar('apple'));
