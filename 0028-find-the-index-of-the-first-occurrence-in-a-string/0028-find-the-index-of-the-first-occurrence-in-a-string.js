/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let tempIndexArray = [];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      tempIndexArray.push(i);
    }
  }

  if (tempIndexArray.length === 0) {
    return -1;
  }

  for (const element of tempIndexArray) {
    if (needle === haystack.slice(element, element + needle.length)) {
      return element;
    }
  }

  return -1;
};