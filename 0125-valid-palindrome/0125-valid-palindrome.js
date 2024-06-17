/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const lowerCaseS = s.toLowerCase();
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  let resultStr = "";

  for (let i = 0; i < lowerCaseS.length; i++) {
    if (alphabet.includes(lowerCaseS[i])) {
      resultStr += lowerCaseS[i];
    }
  }

  for (let j = 0; j <= resultStr.length / 2 - 1 ;j++) {
    if (resultStr[j] !== resultStr[resultStr.length - 1 - j]) return false;
  }

  return true;
};