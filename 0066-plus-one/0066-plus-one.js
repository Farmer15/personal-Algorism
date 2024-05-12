/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 1 && digits[0] === 0) {
    return [1];
  }

  let index = digits.length - 1;
  
  while (digits[index] === 9) {
    index--;
  }
  while (index !== digits.length) {
    if (!digits[index] && digits[index] !== 0) {
      digits.unshift(0);
      index++;
    }

    digits[index] = +String(digits[index] + 1)[String(digits[index] + 1).length - 1];
    index++;
  }
  
  return digits;
};