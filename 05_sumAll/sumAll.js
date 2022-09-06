const sumAll = function(int1, int2) {

    if (int1 < 0 || int2 < 0 || typeof int1 != 'number' || typeof int2 != 'number') {
        return 'ERROR'
    }

    let temp = int1;
    int1 = Math.min(int1, int2);
    int2 = Math.max(temp, int2);

    let sum = int1;

    for (i = int1 +1; i <= int2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
