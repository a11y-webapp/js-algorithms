## Fast/Slow Runners

Technic, which uses several pointers associated with a certain position, pointers can move forward to beginning, end or to the middle, depending on the task.

Examples with a *sorted* order.

1. Problem: [Given an array of sorted integers, write a function to find the first pair where the sum is 0.](#problem-1)

2. Problem: [Given an array of sorted integers and a target value, find if there is a pair of values in the array which equals the target average.](#problem-2)

3. Problem: [Write a function which takes in two strings and checks if first string is a subsequence of a second one.](#problem-3)


#### Problem 1

1. [Given an array of sorted integers, write a function to find the first pair where the sum is 0.](./fc_sumInSortedArray.js)
   
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

#### Problem 2

2. [Given an array of sorted integers and a target value, find if there is a pair of values in the array which equals the target average](./fsRun_averagePair)

```javascript
Input/Output:

([1, 2, 3]) => true;
([1, 3, 4, 6, 7], 7) => false;
([], 7) => false;
```

```javascript
Solution:

//Time: O(n) Space:O(1)
var averagePair = function(arr, target){
    if (!arr.length) return false;

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let arrAvrg = (arr[i] + arr[j]) / 2;

        if (arrAvrg === target) {
            return true;
        } else if (arrAvrg > target){
            j--;
        } else {
            i++;
        }
    }

    return false;
}
```

#### Problem 3

3. Problem: [Write a function which takes in two strings and checks if first string is a subsequence of a second one.](./fsRun_isSubsequence.js)

```javascript
Input/Output:

("hello", "hello world") => true;
("sing", "sting") => true;
("abc", "bca") => false;
("abc", "abeeeec") => true;
```

```javascript
Solution:

var isSubsequence = function(str1, str2){
    if (!str1.length || !str2.length) return false;

    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j] && i === str1.length - 1) {
            return true;
        } else if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return false;
}

```


#### Problem 5
5. Problem: [Given an array of sorted integers, write a function to count all unique values.](./fc_uniqueValsInSortedArray.js)
   
```javascript
Input/Output:

([5, 5, 6, 6]) => 2;
([1, 3, 4, 6, 7]) => 5;
([]) => 0;
```

```javascript
Solution:
```
