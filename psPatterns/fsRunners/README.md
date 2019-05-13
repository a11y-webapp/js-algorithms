## Fast/Slow Runners

Technic, which uses several pointers associated with a certain position, pointers can move forward to beginning, end or to the middle, depending on the task.

Examples with a sorted order.

1. Problem: [Given an array of sorted integers, write a function to find the first pair where the sum is 0.](./fc_sumInSortedArray.js)
   
```javascript
Input/Output:

([-5, -3, -3, 0, 1, 2, 3, 8, 9]) => [-3, 3];
([-6, -3, 0]) => undefined;
([1, 2, 3]) => undefined;
```

```javascript
Solution:

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
```

2. Problem: [Given an array of sorted integers, write a function to count all unique values.](./fc_uniqueValsInSortedArray.js)
   
```javascript
Input/Output:

([5, 5, 6, 6]) => 2;
([1, 3, 4, 6, 7]) => 5;
([]) => 0;
```

```javascript
Solution:
```
