const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
}

const partition = (arr, left = 0, right = arr.length - 1) => {

    let pivot = arr[right];
    let index = left; 

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            swap(arr, index, i);
            index++;
        }
    }
    swap(arr, index, right);
    
    return index;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {
            return;
        }

        let index = partition(arr, left, right);

        quickSort(arr, left, index - 1);
        quickSort(arr, index, right);
    return arr;
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

let result = quickSort(unsorted);

console.log(result);

