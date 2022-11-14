const combinations = (n, k) => {
  const combos = [];
  
  let head, tail;
  
  // if (k > n.length || k < 1) { 
  //   return []; 
  // }
  
  // if (k === n.length) { 
  //   return [ n ]; 
  // }
  
  if (k === 1) {
    console.log(n);
    return n;
    // for (let i = 0; i < n.length; i++) {
    //   combos.push([n[i]]);
    // }
    // return combos;
  }


  for (let i = 0; i < n.length; i++) {
  // for (let i = 0; i < n.length - k + 1; i++) {
      head = n.slice(i, i + 1);

      tail = combinations(n.slice(i + 1), k - 1);

      for (let j = 0; j < tail.length; j++) {
        let combo = head.concat(tail[j]);
        combos.push(combo);
        // combos.push(head.concat(tail[j]));
      }
  }

  return combos; 
}



const array = [1, 2, 3, 4, 5]

let result = combinations(array, 3);

console.log(result);
