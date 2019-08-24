## Binary Search

The **Binary search algorithm** is based on determing chungs where searched value might be presented. But it only applicable for **sorted arrays**. Binary search is built on Divide and Conquer pattern. This algorithm is more efficient compared to Linear Search. 

### BigO of binary search

* Best: O(1)
* Average/Worst: O(log n)

### Implementation of Binary Search

Write a function which accepts an array and a value, and return the index of found value otherwise -1.

```javascript
Input/Output:

binarySearch([9, 8, 4, 17, 39], 17); // 3
```

```javascript
Solution:

function binarySearch(arr, val){
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = left + Math.floor(right/2 - left/2);
        
        if (arr[mid] === val) {
            return mid;
        } else if (arr[mid] < val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
  
    return -1;
}
```