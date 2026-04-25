let targetArr = [1, 2, 2, 4]

const removeFromArray = function(arr, ...targets) {

    return arr.filter(item => !targets.includes(item))
};

console.log(removeFromArray(targetArr, 2))

// Do not edit below this line
module.exports = removeFromArray;
