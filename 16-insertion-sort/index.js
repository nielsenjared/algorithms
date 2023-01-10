const insertionSort = (arr) => {
    for (let curr = 1; curr < arr.length; curr++) {
        let temp = arr[curr];
        let prev = curr - 1;    
 
        while(prev >= 0) {
            if (arr[prev] > temp) {
                arr[prev + 1] = arr[prev];
                arr[prev] = temp;
            }
            prev = prev - 1;
        }
    }
    return arr;
};