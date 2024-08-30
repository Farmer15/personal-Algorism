/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let result = 0;

for (const account of accounts) {
  result = Math.max(result, account.reduce((sum, element) => sum + element,0));
}

return result;
};