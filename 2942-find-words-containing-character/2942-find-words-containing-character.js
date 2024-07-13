/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  return words.map((string, index) => {
    if (string.includes(x)) {
      return index;
    } else {
      return null;
    }
  }).filter((element) => element !== null);
};