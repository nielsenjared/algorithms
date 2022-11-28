// https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme

const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // [arr[left], arr[right]] = [arr[right], arr[left]];

    return arr;
}

const partition = (arr, left, right) => {
    let pivot = arr[ Math.floor((left + right) / 2)];

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
    return left;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {
            return;
        }
        let pivot = partition(arr, left, right);

        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot, right);
    return arr;
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

let result = quickSort(unsorted);

console.log(result);

