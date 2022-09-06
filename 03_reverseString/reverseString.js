const reverseString = function(string) {

    let stringArray = string.split('');
    stringArray = stringArray.reverse();
    const revString = stringArray.join('')
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
