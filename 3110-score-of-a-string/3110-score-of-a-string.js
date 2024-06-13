/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let tatalSum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const interval = Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
    
    tatalSum += interval;
  }

  return tatalSum;
};