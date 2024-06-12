/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let mostLongestLength = 0;

  for (let i = 0; i < s.length; i++) {
    const result = notDuplicatedLength(s, i);

    if (result > mostLongestLength) {
      mostLongestLength = result;
    }
  }

  return mostLongestLength;
};

function notDuplicatedLength(str, start) {
  let resultStr = "";
  
  for (let i = start; i < str.length; i++) {
    if (resultStr.includes(str[i])) {
      return resultStr.length;
    } else {
      resultStr += str[i];
    }
  }

  return resultStr.length;
}
