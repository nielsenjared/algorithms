const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
}

const partition = (arr, pivot) => {
    let left = 0;
    let right = arr.length-1;

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

const quickSort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {
            return;
        }

        let pivot = Math.floor((left + right) / 2);

        let part = partition(arr, pivot);

        let index = part[pivot];

        quickSort(arr, left, index - 1);
        quickSort(arr, index, right);
    return arr;
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

let result = quickSort(unsorted);

console.log(result);

