/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function(word) {
  const obj = {};

  for (const char of word) {
    obj[char] ? obj[char]++ : obj[char] = 1;
  }

  for (const char in obj) {
    obj[char]--;

    if(confirmObj(obj)) {
      return true
    }
    obj[char]++;
  }

  return false
    
  function confirmObj(object) {
    for (const key1 in object) {
      for (const key2 in object) {
        if (object[key1] === 0 || object[key2] === 0) {
          continue;
        }

        const isConfirm = object[key1] !== object[key2];
        if (isConfirm) {
          return false
        } 
      }
    }

    return true
    }
}