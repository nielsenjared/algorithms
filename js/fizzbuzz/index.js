// const fizzBuzz = (n) => {
//     for (let i = 1; i <= n; i++){
//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             console.log(i, "Fizz Buzz");
//         }
//         else if (i % 3 === 0) {
//             console.log(i, "Fizz");
//         }
//         else if (i % 5 === 0) {
//             console.log(i, "Buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(20);

const fB = (n) => {
    for(let i = 0; i < n;) {
        console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
    }
}

fB(20);

