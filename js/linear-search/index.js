const bruteSearch = (arr, num) => {
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return `Found ${num} at ${i}`;
        }
    }
 }