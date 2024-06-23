/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const copiedS = s.trim();
  let result = "";

  for (let i = 0; i < copiedS.length; i++) {
    if (!result && (copiedS[i] === "+" || copiedS[i] === "-")) {
      result += copiedS[i]
    } else if (copiedS[i] === " " || typeof Number(copiedS[i]) !== "number" || Number(copiedS[i]) !== Number(copiedS[i])) {
      result === "+" || result === "-" ? 0 : break;
    } else {
      result += copiedS[i];
    }
  }
  
  if (Number(result) >= 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }

  if (Number(result) <= (-2) ** 31) {
    return (-2) ** 31;
  }

  return result === "+" || result === "-" ? 0 : result;
};