## Sliding Window Pattern

Technic, which uses a window, depending on certain condition the window either increases or closes. It usually can be used in solving next problems:

Helps to solve next types of the problems:
* longest unique substring
* max subarray sum
in other words 
* when we need to find some continuous subset of the data

Examples:

1. Problem: [Given an array of integers and a number n, write a function to calculate the maximum sum of n consecutive elements in the array.](#problem-1)

2. Problem: [Write a function which takes in two params - an array of positive integers and a positive integer. It should return the minimum length of a subarray sum, where sum is equal or grater than second arguments or 0](#problem-2)

3. Problem: [Write a function which takes in a string - find longest substring with distinct characters](#problem-3)

#### Problem 1

1. [Given an array of integers and a number n, write a function to calculate the maximum sum of n consecutive elements in the array.](./slidingWindow_maxSubarrSum.js)

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

```javascript
Input/Output:

//maxSubarraySum([100, 200, 300, 400], 2) => 700
//maxSubarraySum([100, 200], 3) => null
//maxSubarraySum([2, -4, 5, 10, 9, -3], 3) => 24
```

```javascript
Solution:
//Time: O(n) Space: O(1)
var maxSubarraySum = function (arr, subLength) {
    if (arr.length < subLength) return null;

    var initSum = 0;
    
    for (let i = 0; i < subLength; i++) {
        initSum += arr[i];
    }

    let currentSum = initSum;
    let maxSum = initSum;

    for (let i = subLength; i <= arr.length - subLength + 1; i++) {
        currentSum += arr[i] - arr[i - subLength];
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
}
```

#### Problem 2
2. [Write a function which takes in two params - an array of positive integers and a positive integer. It should return the minimum length of a subarray sum, where sum is equal or grater than second arguments or 0](./)

```javascript
Input/Output:

minSubArray([2,3,1,2,4,3], 7)
minSubArray([2,1,6,5,4], 9)
minSubArray([3,1,7,11,2,9,8,21,62,33,19], 52)
minSubArray([1,4,16,22,5,7,8,9,10], 39)
minSubArray([1,4,16,22,5,7,8,9,10], 55)
minSubArray([4,3,3,8,1,2,3], 11)
minSubArray([1,4,16,22,5,7,8,9,10], 95)
```

```javascript
Solution:
//Time: O(n) Space: O(1)
function minSubArrayLen(arr, target){
    let sum = arr[0];
    let start = 0;
    let end = 0;
    let minSubArrayLength = Infinity;
    let tempLength;

    while (start < arr.length && end < arr.length) {
        if (sum < target) {
            end++;
            sum += arr[end];
        } else {
            tempLength = end - start + 1;
            minSubArrayLength = Math.min(tempLength, minSubArrayLength);
            sum -= arr[start];
            start++;
        }

    }
    if (minSubArrayLength === Infinity) {
        return 0;
    }
    return minSubArrayLength;
}
```


Tasks from leetcode which might be resolved with Sliding Window Pattern.


#### Problem 3
3. [Write a function which takes in a string - find longest substring with distinct characters](./slidingWindow_logestSubstr.js)

```javascript
Input/Output:
("helloworld") => 5
("keepcalmandwork") => 9
("aaa") => 1
```

```javascript
Solution:
//Time: O(n) Space: O(1)

var longestSubStr = function (str) {
    let maxLength = 0;
    let chars = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
        let curr = str[i];

        if (chars[curr]) {
            start = Math.max(chars[curr], start);
        }

        maxLength = Math.max(maxLength, i - start + 1);
        chars[curr] = i + 1;
    }

    return maxLength;
}
```



643. [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)