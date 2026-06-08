const palindromes = function (str) {
  const strTable = str.toLowerCase().split("");

  const filteredTable = strTable.filter(
    (item) => item !== "," && item !== "." && item !== "!" && item !== " ",
  );
  const newStr = filteredTable.join("");
  const reversedStr = filteredTable.reverse().join("");

  console.log(newStr, "|||");
  return reversedStr === newStr;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
