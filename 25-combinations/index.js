const combinations = (n, k) => {
  const combos = [];
  
  let head, tails;
  
  if (k > n.length || k < 1) { 
    return []; 
  }
  
  if (k === n.length) { 
    return [ n ]; 
  }
  
  if (k === 1) {
    for (let i = 0; i < n.length; i++) {
      combos.push([n[i]]);
    }
    return combos;
  }

  console.log(n.length-k)

  for (let i = 0; i < n.length; i++) {
  // for (let i = 0; i < n.length - k + 1; i++) {
      head = n.slice(i, i + 1);

      console.log(head);

      console.log(n.slice(i + 1), k - 1)

      tails = combinations(n.slice(i + 1), k - 1);

      console.log("tails " + tails);

      for (let j = 0; j < tails.length; j++) {
        let combo = head.concat(tails[j]);
        combos.push(combo);
        // combos.push(head.concat(tails[j]));
      }
  }

  return combos; 
}

const array = [1, 2, 3, 4, 5]

let result = combinations(array, 3);

console.log(result);
