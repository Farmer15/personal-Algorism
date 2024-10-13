/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const resultArray = [];

  candidates.sort((a, b) => a - b)

  getCombinationSum(candidates, target, [], 0);

  return resultArray;
  
  function getCombinationSum(totalArray, currentTarget, combination, initial) {
    if (currentTarget === 0) {
        resultArray.push([...combination]);
        return;
    }

    for (let i = initial; i < totalArray.length; i++) {
      if (i !== initial && totalArray[i] === totalArray[i - 1]) {
        continue;
      }

      if (totalArray[i] > currentTarget) {
        break;
      }
      
      getCombinationSum(totalArray, currentTarget - totalArray[i], [...combination, totalArray[i]], i + 1)
    }
  }
};