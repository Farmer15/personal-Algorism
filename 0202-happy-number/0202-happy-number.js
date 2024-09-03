/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const resultHistory = [];
  
  return sumSquaresDigit(n);

  function sumSquaresDigit(num) {
    const numArray = String(num).split("");
    const sumSquares = numArray.reduce((sum, digit) => sum + Number(digit) ** 2, 0)
    
    if (resultHistory.includes(sumSquares)) {
      return false;
    }

    resultHistory.push(sumSquares);

    return sumSquares === 1 ? true : sumSquaresDigit(sumSquares);
  }
};