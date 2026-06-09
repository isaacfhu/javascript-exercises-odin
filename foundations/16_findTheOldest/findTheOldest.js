const findTheOldest = function (arr) {
  let newArr = arr.sort((previous, current) => {
    if (current.yearOfDeath === undefined) {
      current.yearOfDeath = new Date().getFullYear();
    }
    return (
      current.yearOfDeath -
      current.yearOfBirth -
      (previous.yearOfDeath - previous.yearOfBirth)
    );
  });
  return newArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
