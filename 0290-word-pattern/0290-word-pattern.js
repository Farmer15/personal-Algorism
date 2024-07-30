/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sObj = {};
  const sArray = s.split(" ");

  if (pattern.length !== sArray.length) return false;

  return sArray.every((element, index) => {
    const sObjArray = Object.values(sObj);
    if (sObj[element+"@"]) {
      return pattern[index] === sObj[element+"@"] ? true : false;
    } else {
      if (sObjArray.includes(pattern[index])) {
        return false;
      }
      sObj[element+"@"] = pattern[index];
      return true;
    }
  });
};