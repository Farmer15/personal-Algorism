/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  let result;

  if (Array.isArray(obj)) {
    result = [];
  } else {
    result = {};
  }

  for (const key in obj) {
    if (obj[key]) {
      if (typeof obj[key] === "object") {
        result[key] = compactObject(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return Array.isArray(result) ? result.filter((element) => element) : result;
};