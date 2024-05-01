/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringX = x.toString();

    for(let i = 0; i < stringX.length; i++) {
      const isSameStr = stringX[i] === stringX[stringX.length - i - 1];

      if(!isSameStr) return false
    }

    return true;
};