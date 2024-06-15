/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const numsObj = {};
  let result = 0;

  for (const num of nums) {
    if (numsObj[num]) {
      numsObj[num]++;
    } else {
      numsObj[num] = 1;
    }
  }
  
  for (const num in numsObj) {
    if (numsObj[num] >= 2) {
      result += Combination(numsObj[num], 2);
    }
  }

  return result;
};

function Factorial(num) {
  return num > 1 ? num * Factorial(num - 1) : 1
}

function Combination(num1, num2) {
  return Factorial(num1) / (Factorial(num2) * Factorial(num1 - num2));
}
