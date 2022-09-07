const palindromes = function (string) {
    string = string.replace(/[^0-9a-z]/gi, '');
    string = string.toLowerCase();

    let stringArray = string.split('');
    stringArray = stringArray.reverse();
    const revString = stringArray.join('');

    return string == revString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
