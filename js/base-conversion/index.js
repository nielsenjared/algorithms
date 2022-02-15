
const decimalToBinary = (num) => {

    let result = '';
  
    while (num > 0){ 
      result += num % 2; 
      num = Math.floor(num / 2); 
    }
    
    return result.split('').reverse().join('');
}


const decimalToBinaryWithArray = (num) => {

    let result = [];

    while (num > 0){ 
        result.unshift(num % 2); 
        num = Math.floor(num / 2); 
    }

    return result.join('');
}


console.log(decimalToBinary(2));
console.log(decimalToBinary(3));
console.log(decimalToBinaryWithArray(4));
console.log(decimalToBinaryWithArray(8));