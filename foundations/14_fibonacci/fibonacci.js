const fibonacci = function (num) {
  if (num < 0) return "OOPS";

  const newNum = Number(num) - 1;
  let fArray = [1, 1, 2];
  let initLength = fArray.length;

  fArray[-1] = 0;
  for (let i = initLength; i <= newNum; i++) {
    fArray[i] = fArray[i - 1] + fArray[i - 2];
  }
  return fArray[newNum];
};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
