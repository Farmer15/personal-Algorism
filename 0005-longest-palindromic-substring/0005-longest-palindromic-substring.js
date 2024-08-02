/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0;
  let end = s.length;
  let count = s.length - 1;

  while(start < s.length) {
    if (isPalindrome(s.slice(start, end))) {
      return s.slice(start, end);
    }

    if (end === s.length) {
      start = 0;
      end = start + count;
      count--;
      continue;
    }
    start++;
    end++;
  }
};

function isPalindrome (str) {
  for (let i = 0; i <= str.length / 2 - 1; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}