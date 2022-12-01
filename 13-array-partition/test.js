const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
}

const partition = (arr) => {

    let left = 0;
    let right = arr.length - 1;

    let pivot = arr[right];
    let index = left; 

    for (let i = 0; i < right; i++) {
        if (arr[i] <= pivot) {
            swap(arr, index, i);
            index++;
        }
    }
    swap(arr, index, right);
    index++;
    
    return { index, arr };
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 5, 6];
// const unsorted = [10, 1, 9];

let result = partition(unsorted);

console.log(result);