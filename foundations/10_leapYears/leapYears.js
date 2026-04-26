const leapYears = function(year) {

    console.log(year / 4)
    if (Number.isInteger(year / 4) &&
        !Number.isInteger(year / 100)
    ) 
        return true
    else if (Number.isInteger(year / 400))
        return true
    else 
        return false
};

console.log(leapYears(1600))

/*    if (Number.isInteger(year / 4) && 
        !Number.isInteger(year / 100) &&
        Number.isInteger(year / 400)
    ) 
        return true
    else 
        return false*/

// Do not edit below this line
module.exports = leapYears;
