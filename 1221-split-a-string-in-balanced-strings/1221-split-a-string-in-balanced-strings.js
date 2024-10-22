/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lCount = 0;
    let rCount = 0;
    let maxCount = 0;

    for(const char of s) {
        if(char === "L") lCount++;
        else rCount++;
        
        if(lCount === rCount) maxCount++;
    }
    
    return maxCount;
};