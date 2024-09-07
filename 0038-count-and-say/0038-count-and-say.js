/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  const cached = ["1"];

  for (let i = 1; i < n; i++) {
    cached[i] = getCountAndSay(cached[i - 1]); 
  }

  return cached[n - 1];
};

function getCountAndSay(str) {
  if (str.length === 1) {
    return "1" + str;
  }

  let count = 1;
  let result = "";
  
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === str[i]) {
      count++;
    } else {
      result += count + str[i - 1];
      count = 1;
    }
  }

  return result;
}