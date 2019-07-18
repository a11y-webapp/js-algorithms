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
