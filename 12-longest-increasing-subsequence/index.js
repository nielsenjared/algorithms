const longestIncreasingSubsequence = (n) => {
    const tally = [1];
    let result = 1;
    
    for (let i = 1; i < n.length; i++) {
        tally[i] = 1;
        for (let j = 0; j < i; j++) {
            let current = tally[j] + 1;
            
            if (n[j] < n[i] && current > tally[i]) {
                tally[i] = current
                if (current > result) {
                    result = current;
                }
            }
        }
    }
    return result; 
}

const arr = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2];

let result = longestIncreasingSubsequence(arr);

console.log(result);