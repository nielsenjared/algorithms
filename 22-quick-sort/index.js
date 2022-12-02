const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return arr;
    
// using Lomuto
// const partition = (arr, left = 0, right = arr.length - 1) => {

//     let pivot = arr[right];
//     let index = left; 

//     console.log( "party", { left, right} )


//     for (let i = left; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             swap(arr, index, i);
//             index++;
//         }
//     }
//     swap(arr, index, right);
    
//     return index;
// }

}
const partition = (arr) => {

    let pivot = arr[arr.length - 1];
    let index = 0; 

    console.log( "party", { left: index, right: (arr.length - 1)} )


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swap(arr, index, i);
            index++;
        }
    }
    swap(arr, index, arr.length - 1);
    
    return index;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {
            return;
        }

        console.log( "quick", { left, right} )

        let index = partition(arr);
        // let index = partition(arr, left, right);


        quickSort(arr, left, index - 1);
        quickSort(arr, index, right);
    return arr;
}

const unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

let result = quickSort(unsorted);

console.log(result);

