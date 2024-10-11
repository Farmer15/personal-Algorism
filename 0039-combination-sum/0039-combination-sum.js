/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const resultArray = [];

  getCombinationArray(candidates, target, []);

  return resultArray;

  function getCombinationArray(candidates, restSum, currentCobination) {
    if (restSum === 0) {
      resultArray.push(currentCobination);
    }

    if (restSum < 0) {
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];

      getCombinationArray(candidates.slice(i), restSum - candidate, [...currentCobination, candidate]);
    }
  }
};
