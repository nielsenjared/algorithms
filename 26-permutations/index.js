const permutations = (n) => {
    const perms = [];

    let head, tail;
    
    if (n.length === 0) {
        return [];
    }
    
    if (n.length === 1) {
        return [n];
    }
    
    for (let i = 0; i < n.length; i++) {
        head = n.slice(i, i + 1);
        tail = permutations(n.slice(0, i).concat(n.slice(i + 1)));

        for (let j = 0; j < tail.length; j++) {
            let perm = head.concat(tail[j]);
        perms.push(perm);
        }
    }
    return perms;
}

const array = [1, 2, 3];

let result = permutations(array);

console.log(result);