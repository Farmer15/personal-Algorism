/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
    return strs[0];
  }


  let index = 0;
  while (confirmCommonString(strs, index) && index <= strs[0].length) {
    index++;
  }

  return strs[0].slice(0, index - 1);

  function confirmCommonString(array, index) {
    if (!array[0]) {
      return false;
    }

    for (let i = 1; i < array.length; i++) {
      if (array[0].slice(0, index) !== array[i].slice(0, index)) {
        return false;
      }
    }
  
    return true;
  } 
};