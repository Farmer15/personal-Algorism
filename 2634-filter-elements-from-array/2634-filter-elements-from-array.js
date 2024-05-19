/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const resultArray = [];

  arr.map((element, index) => {
    if (fn(element, index)) {
      resultArray.push(element);
    }
  });

  return resultArray;
};