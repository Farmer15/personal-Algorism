/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  return hours.reduce((count, element) => {
    if (element >= target) {
      return count + 1;
    } else {
      return count;
    }
  },0)
};