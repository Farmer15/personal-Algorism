/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, index = 0) {
  if (digits.length === 0 || index >= digits.length) return [];
  const numString = [null, null, ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]];

console.log(numString[digits[index]]);
  return combineString(numString[digits[index]], letterCombinations(digits, ++index));
};

const combineString = (array1, array2) => {
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const result = [];

  for (const str1 of array1) {
    for (const str2 of array2) {
      result.push(str1 + str2);
    }
  }

  return result;
};
