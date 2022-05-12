const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
    return arr;
};

const sorted = selectionSort(unsorted);

console.log(sorted);