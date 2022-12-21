const longestIncreasingSubsequence = (n) => {
    const lengths = new Array(n.length).fill(1);
    let result = 0;
    
    for (let i = 1; i < n.length; i++) {
        for (let j = 0; j < i; j++) {
            let current = lengths[j] + 1;
            
            if (n[j] < n[i] && current > lengths[i]) {
                lengths[i] = current
                if (current > result) {
                    
                    result = current;
                }
            }
        }
    }
    // return Math.max(...lengths);
    return result; 
}

const arr = [1, 4, 1, 5, 9, 2, 6, 5], 3, 5, 8, 9, 7, 9, 3, 2];

let result = longestIncreasingSubsequence(arr);

console.log(result);