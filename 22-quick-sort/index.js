const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
}
// using Lomuto
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

const quickSort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {
            return;
        }

        let part = partition(arr);

        let index = part.index;

        left = part.arr[0];

        right = part.arr[part.arr.length - 1];

        quickSort(arr, left, index - 1);
        quickSort(arr, index, right);
    return arr;
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

let result = quickSort(unsorted);

console.log(result);

