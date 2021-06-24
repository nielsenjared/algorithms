@sam-pop

function reverseint (num){
    let neg = (num < 0) ? true : false;
    let temp = parseInt((num.toString()).split("").reverse().join(""));
    if (neg)
        temp = -temp;
    return temp;
}
    
