const repeatString = function(str, repeatAmount) {
    if (repeatAmount < 0) {
        return "ERROR"
    }

    let arr = []
    for (i = 0; i < repeatAmount; i++) {
        arr.push(str)
    }
    return arr.join('')
};

console.log(repeatString('hey', 1.5))

// Do not edit below this line
module.exports = repeatString;
