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