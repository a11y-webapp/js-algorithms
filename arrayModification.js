/**
 * 
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /* brut force
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let complIndex = nums.indexOf(complement, i+1);
         if (complIndex !== -1) {
             return [i, complIndex];
          }
        
     }
     */
    
    let hashTable = {};
    
    for (let i = 0; i < nums.length; i++) {
        hashTable[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (hashTable[complement] !== undefined && hashTable[complement] !== i) {
            return [i, hashTable[complement]];
        }
    }
    
    
};