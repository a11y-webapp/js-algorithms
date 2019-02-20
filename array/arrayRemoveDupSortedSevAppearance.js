/**
 * 
 * 
 * Logic:
 * Variables:
 *   j - so-called slow runner, shows index in the array where the value should be changed (exmp.: duplicates appeared)
 *   k - counter of the duplicates
 * 1. Go through each element in the array starting from index 1
 * 2. Check if current value doesn't equal the previous one
 *  2.1 If TRUE: rewrite value for elements with j index with the current array value.
 * After that increase the slow runner counter (j) and reset k to initial value 1, 
 * due to the fact if the condition is true current value is not a duplicate with the previous one.
 *  2.2 if FALSE: current value IS a duplicate with the previous value (do not need to check it, since the first condition failed).
 * In this case, we need to check how many duplicates already appeared. If more duplicate appeared than allowed (in task description is 2) 
 * do nothing and wait for non-duplicate, otherwise rewrite value for elements with j index, then increase j index and counter for duplicates k.
 * 3. Splice the array starting from index j. This operation is not necessary just for easier debugging.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //Define index in the array which value should be overwritten
    let j = 1;
    //Count the amount of duplicated values
    let k = 1;

    const maxRepeat = 2;     
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[j++] = nums[i];
            k = 1;
        } else if (k < maxRepeat) {
            nums[j++] = nums[i];
            k++;
        }
    }
    
    nums.splice(j);
    
    return j;
};