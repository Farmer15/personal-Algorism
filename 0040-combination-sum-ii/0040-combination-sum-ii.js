/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const resultArray = [];

  getCombinationSum(candidates.sort((a, b) => a - b), target, []);

  return resultArray;
  
  function getCombinationSum(totalArray, currentTarget, combination) {
    if (currentTarget === 0) {
        if (!JSON.stringify(resultArray).includes(JSON.stringify(combination.sort((a, b) => a - b)))) {
          resultArray.push(combination);
        }
        return;
    }

    if (currentTarget < 0) {
      return;
    }

    for (let i = 0; i < totalArray.length; i++) {
      if (totalArray[i] === totalArray[i - 1]) {
        continue;
      }

      getCombinationSum(totalArray.slice(i + 1), currentTarget - totalArray[i], [...combination, totalArray[i]])
    }
  }
};