const linearSearch = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return `Found ${n} at arr[${i}]`;
        }
    }
    return "Not found...";
}

const arr = [1, 2, 3, 4, 5, 9];

let result = linearSearch(arr, 9);

console.log(result)