

var isPalindrome = function(x) {
    var newX = x
    var first = 0;
    var last = 0;
    var digits = (Math.floor(Math.log10(x)) + 1);

    if (x < 0) {
        return false;
    } else {
        while (digits > 1){
            first = parseInt(newX / Math.pow(10, (digits - 1)));
            last = newX % 10
            newX = ((newX - last) / 10) - first * (Math.pow(10,(digits - 2)));
            if (first === last) {
                digits -= 2;
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
};
