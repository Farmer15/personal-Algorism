/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const parenthesesObj = {
    "1": n,
    "-1": n,
  };
  const result = [];

  constructParentheses(parenthesesObj, []);
  
  return result;

  function constructParentheses(parenthesesObj, array) {
    let totalSum = 0;
    
    for (let i = 0; i < array.length; i++) {
      totalSum += array[i];

      if (totalSum < 0) {
        return;
      }
    }

    if (array.length === n * 2) {
      return result.push(array.map((element) => {
        if (element === 1) {
          return "(";
        } else {
          return ")";
        }
      }).join(""));
    }
    
    if (parenthesesObj[1]) {
      const copiedObj = structuredClone(parenthesesObj);
      copiedObj[1]--;
      constructParentheses(copiedObj, array.concat(1));
    }

    if (parenthesesObj[-1]--) {
      constructParentheses(parenthesesObj, array.concat(-1));
    }
  }
};