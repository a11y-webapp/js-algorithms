/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;
    
    const length = nums.length;
    
    if (length < 1) {
        return 0;
    }
    
    
    for (let i = 0; i < length; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    return j;
};