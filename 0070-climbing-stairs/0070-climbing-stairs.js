/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let r = 0;
  let total = 0;

  for (let i = n; i >= r; i--) {
    total += c(i, r);
    r++;
  }

  return total;

  function c(n, r) {
    return f(n) / (f(n - r) * f(r)); 
  }

  function f(n) {
    return n > 1 ? n * f(n - 1) : 1;
  }

};