// generate an array of n arrays
// iterate over n


// declare an Array(
// iterate over n
// if i modulo n = 0
// de

// iteratie over first row
// then iterate down first column
// decrement column count
// then decrement throughh last row
// decrement row count
// then decrement through first column
// increment column count
// 



const matrix = (n) => {
  if (n < 2) return "Enter a number greater than 2";
  // (n - 1) * 4
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let count = 1;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      result[row].push(count);
      count++;
    }
  }

  console.log(result);
}
matrix(3);
matrix(4);
module.exports = matrix;
