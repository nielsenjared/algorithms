const decimalToHex = (num) => {

    const digits = '0123456789ABCDEF';
  
    let result = '';
    
    while (num > 0) {
      result += digits[num % 16];
      num = Math.floor(num / 16);
    }
  
    return result.split('').reverse().join('');
}

let result = decimalToHex(2047);

console.log(result);

