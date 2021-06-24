// const capitalize = str => {
//   let caps = str.split(' ');
//
//   for (let i = 0; i < caps.length; i++) {
//     let x = caps[i][0].toUpperCase();
//     let y = caps[i].slice(1);
//     caps[i] = x + y;
//   }
//
//   return caps.join(' ');
// }
//
// const capitalize = str => {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

//es6-y one-liner
const capitalize = str => {
  return str.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
}

module.exports = capitalize;
