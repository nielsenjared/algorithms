const permutations = (n) => {
    const perms = [];

    let current, remainder;
    
    if (n.length <= 0) {
        return [];
    }
    
    if (n.length === 1) {
        return [n];
    }
    
    for (let i = 0; i < n.length; i++) {
        // current = n.slice(i, i + 1);
        current = [n[i]];

        let head = n.slice(0, i);
        let tail = n.slice(i + 1);
        let shorty = head.concat(tail);

        remainder = permutations(shorty);

        for (let j = 0; j < remainder.length; j++) {
            let perm = current.concat(remainder[j]);
        perms.push(perm);
        }
    }
    return perms;
}

const array = [1, 2];

let result = permutations(array);

console.log(result);