const students = [
  "Sameer",
  "Dean",
  "Christina",
  "Darwin",
  "Marcus",
  "Martina",
  "Abi",
  "Ian",
  "Katie",
  "Stanley",
  // "Cintia",
  "Sam",
  "Salma",
  "Emily",
  "Daniel",
  "Nima"
];

const shuffle = arr => {
  return arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
}

const grouper = (arr, n) => {
  const shuffled = shuffle(arr);
  const groups = [];
  let index = 0;

  while (index < shuffled.length - shuffled.length % n) {
    groups.push(shuffled.slice(index, index + n));
    index += n;
  }

  if (shuffled.length % n != 0) {
    shuffled.slice(shuffled.length - shuffled.length % n).forEach((e, i) => {
      groups[i].push(e);
    });
  }

  return groups;
}

// console.log("Pairs");
// console.log(grouper(students, 2));
console.log("Threes");
console.log(grouper(students, 3));
// console.log("Fours");
// console.log(grouper(students, 4));
