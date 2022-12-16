const merge = (left, right) => {
    
    let result = [];
    
    while(left.length || right.length) {
        
        if(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        } else if(left.length) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result;
};

const odds = [1, 3, 5, 7, 9];

const eves = [2, 4, 6, 8, 10];

let result = merge(odds, eves);

console.log(result);