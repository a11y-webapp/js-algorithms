//Find a pair of values in sorted array where sum is 0
//Time: O(n) Space:O(1)
var sumInSortedArr = function (arr) {
    //create two pointers moving to the middle
    let left = 0;
    let right = arr.length - 1;

    //loop until the left pointer is strictly less than the right one
    //if sum === 0 return the values
    //if sum > 0 decrease right pointer
    //else increase left pointer
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (!sum) {
            return [arr[left], arr[right]];
        } 
        
        sum > 0 ? right-- : left++;
    }
}