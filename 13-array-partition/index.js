const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
}

// TODO
const partitionHoare = (arr, pivot) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return arr;
}

const partitionLomuto = (arr, left = 0, right = arr.length - 1) => {

    let pivot = arr[right];
    let index = left; 

    for (let i = left; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swap(arr, index, i);
            index++;
        }
    }
    swap(arr, index, right);
    
    return index;
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

let result = partitionLomuto(unsorted);

console.log(result);