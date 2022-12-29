const max = (arr) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}


const minMax = (arr, m="max") => {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (m == "min" && arr[i] < result) {
            result = arr[i];
        }

        if (m == "max" && arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];

let result = minMax(arr, "min");

console.log(result);