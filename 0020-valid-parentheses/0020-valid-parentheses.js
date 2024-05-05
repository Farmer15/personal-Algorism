/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const confirmArray = [];
    const bracketsArray = ["(", "{", "[", ")", "}", "]"]

    for (let i = 0; i < s.length; i++) {
      if (s[i] === bracketsArray[0] || s[i] === bracketsArray[1] || s[i] === bracketsArray[2]) {
        confirmArray.push(s[i]);
      } else {
        if (bracketsArray.indexOf(s[i]) - bracketsArray.indexOf(confirmArray[confirmArray.length - 1]) === 3) {
          confirmArray.pop();
        } else {
          return false;
        }
      }
    }
  
    return confirmArray.length === 0;
};