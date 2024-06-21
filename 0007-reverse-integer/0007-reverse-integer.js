/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const strX = x.toString();
  let result = "";

  for (let i = strX.length - 1; i > 0; i--) {
    result += strX[i];
  }
  const rev = strX[0] === "-" ? strX[0] + result : result + strX[0];
  if (parseInt(rev) > Math.pow(2,31) - 1   || parseInt(rev) < -(Math.pow(2,31) - 1)) return 0;
  
  return rev;
};