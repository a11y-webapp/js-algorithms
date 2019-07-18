
//maxSubarraySum([100, 200, 300, 400], 2) => 700
//maxSubarraySum([100, 200], 3) => null
//maxSubarraySum([2, -4, 5, 10, 9, -3], 3) => 24

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