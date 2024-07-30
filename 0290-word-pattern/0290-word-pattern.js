/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sObj = {};
  const sArray = s.split(" ");
  
  if (pattern.length !== sArray.length) return false;

  return sArray.every((str, index) => {
    const sObjArray = Object.values(sObj);
    if (sObj[str]) {
      return pattern[index] === sObj[str] ? true : false;
    } else {
      if (sObjArray.includes(pattern[index])) {
        return false;
      }
      sObj[str] = pattern[index];
      return true;
    }
  });
};