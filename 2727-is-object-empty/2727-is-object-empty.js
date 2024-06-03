/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  const jsonObj = JSON.stringify(obj);

  if (jsonObj === "{}" || jsonObj === "[]") {
    return true;
  }

  return false;
};