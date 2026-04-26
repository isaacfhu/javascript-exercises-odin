const sumAll = function(value1, value2) {
    if (
        value1 < 0 | value2 < 0 |
        !Number.isInteger(value1) | !Number.isInteger(value2) |
        isNaN(value1) | isNaN(value2)
    ) 
        return 'ERROR'

    let sum = 0
    let smallValue
    let bigValue

    if (value1 > value2) {
        smallValue = value2
        bigValue = value1
    } else {
        smallValue = value1
        bigValue = value2
    }

    for (smallValue; bigValue >= smallValue; smallValue++) {
        sum += smallValue
    }

    return sum
};

sumAll(1, 5)

// Do not edit below this line
module.exports = sumAll;
