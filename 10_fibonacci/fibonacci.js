const fibonacci = function(fibIndex) {

    if (fibIndex == 1 || fibIndex == 2) {
        return 1;
    }

    else if (fibIndex < 1) {
        return 'OOPS';
    }

    let prev = 1;
    let curr = 1;

    for (i = 3; i <= fibIndex; i++) {
        temp = prev;
        prev = curr;
        curr += temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
