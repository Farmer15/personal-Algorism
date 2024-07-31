/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const keyboardRow = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  return words.filter((string) => {
    const stringRow = keyboardRow.find((rowString) => rowString.includes(string[0].toLowerCase()));
    
    return string.toLowerCase().split("").every((char) => stringRow.includes(char));
  });
};