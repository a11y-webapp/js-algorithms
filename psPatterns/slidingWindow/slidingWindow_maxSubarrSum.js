//Naive approach
//Time: O(n^2) Space: O(1)
function maxSubarrSum(arr, n) {
    //check if arr has less elements than n
    if (n > arr.length) {
        return null;
    }

    let maxSum = 0;

    //loop trough arr, calc sum of every possible combinations
    for (let i = 0; i <= arr.length - n; i++) {
        let temp = 0;

        for (let j = i; j < i + n; j++) {
           temp += arr[j];
        }
        if (temp > maxSum) {
            maxSum = temp;    
        }
    }
    return maxSum;
}

//Sliding window approach
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


//maxSubarraySum([100, 200, 300, 400], 2) => 700
//maxSubarraySum([100, 200], 3) => null
//maxSubarraySum([2, -4, 5, 10, 9, -3], 3) => 24

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