/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  return stones.split("").reduce((jewelCount, stone) => {
    if (jewels.includes(stone)) {
      return jewelCount + 1;
    } else {
      return jewelCount;
    }
  }, 0)
};