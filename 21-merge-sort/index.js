const mergeSort = (arr) =>{
    
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

    if(arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr.length / 2 ;
    const left = arr.slice(0, pivot);
    const right = arr.slice(pivot, arr.length);
    
    return merge(mergeSort(left), mergeSort(right));
};

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

let result = mergeSort(unsorted);

console.log(result);