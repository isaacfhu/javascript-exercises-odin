let targetArr = [1, 2, 2, 4]

const removeFromArray = function(arr, ...target) {

    for (targetIndex = 0; targetIndex < target.length; targetIndex++) {
        for (arrIndex = 0; arrIndex < arr.length; arrIndex++) {
            if (targetIndex === arrIndex) arr.splice(arr[arrIndex], 1)
        }
    }

    return arr
};

/*        arr.splice(arr.indexOf(target[i]), 1) */
console.log(removeFromArray(targetArr, 2))

// Do not edit below this line
module.exports = removeFromArray;
