/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const intervalArray = [];
  let result = 0;
  let maxResult = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    intervalArray[i] = prices[i + 1] - prices[i];
  }

  intervalArray.push(0);
  result += intervalArray[0];
  maxResult += intervalArray[0];

  for (let j = 0; j < intervalArray.length - 1; j++) {
    if (result + intervalArray[j + 1] >= intervalArray[j + 1]) {
      result += intervalArray[j + 1];
    } else {
      result = intervalArray[j + 1];
    }

    if (result > maxResult) {
      maxResult = result;
    }
  }

  return maxResult;
};