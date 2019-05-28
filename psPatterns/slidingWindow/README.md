## Sliding Window Pattern

Technic, which uses a window, depending on certain condition the window either increases or closes. It usually can be used in solving next problems:

Types of the problems:
* longest unique substring
* max subarray sum
in other words 
* when we need to find some continuous subset of the data

Examples:

1. Problem: [Given an array of integers and a number n, write a function to calculate the maximum sum of n consecutive elements in the array.](./slidingWindow_maxSubarrSum.js)

```javascript
Input/Output:

maxSubarrSum([1,2,5,7,9,1,3], 2); //16  [7+9]
maxSubarrSum([1,2,5,2,8,1,5], 2); //10  [2+8]
maxSubarrSum([1,2,5,2,8,1,5], 4); //17  [2+5+2+8]
maxSubarrSum([4,2,1,6], 1); //6 [6]
maxSubarrSum([4,2,1,6,2], 4);  //13 [4+2+1+6]
maxSubarrSum([], 2); //null
```

```javascript
Solution:

//Time: O(n) Space: O(1)

function maxSubarrSumSW(arr, n) {
    if (arr.length < n) return null;

    let temp = 0;
    let maxSum = 0;
    
    //calc the sum of the first n elements
    for (let i = 0; i < n; i++) {
        temp += arr[i];
    }

    maxSum = temp;

    //calc the sum of the next combination by extracting first el and adding next el
    for (let i = n; i < arr.length; i++) {
        temp = temp - arr[i - n] + arr[i];
        //compare the sums
        if (temp > maxSum) {
            maxSum = temp;
        }
    }

    return maxSum;
}
```

Tasks from leetcode which might be resolved with Sliding Window Pattern.
643. [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)