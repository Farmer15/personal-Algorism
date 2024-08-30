/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 1) {
    if (dividend > (2 ** 31) - 1) {
      return (2 ** 31) - 1;
    };

    if (dividend < -(2 ** 31)) {
      return -(2 ** 31);
    }

    return dividend
  }

  if (divisor === -1) {
    dividend = -dividend;

    if (dividend > (2 ** 31) - 1) {
      return (2 ** 31) - 1;
    };

    if (dividend < -(2 ** 31)) {
      return -(2 ** 31);
    }

    return dividend;
  }

  let sign = 1;

  if (dividend < 0) {
    dividend = Math.abs(dividend);
    sign *= -1;
  }

  if (divisor < 0) {
    divisor = Math.abs(divisor);
    sign *= -1;
  }

  let count = 0;
  let result = dividend;

  while (result >= 0) {
    result -= divisor;
    result -= divisor;
    count += 2;
  }
  
  count = result + divisor >= 0 ? count - 1 : count -2;

  if (sign < 0) {
    count = -count;
  }

  count = Math.min((2 ** 31) - 1, count);
  count = Math.max(-(2 ** 31), count);

  return count;
};