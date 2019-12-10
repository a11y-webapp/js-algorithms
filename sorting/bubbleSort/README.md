## Bubble Sort

The **bubble sorting algorithm** is based on bubbling up the largest value to the top. Looping through the array compare the current value (i) with the next one (i+1), if it's bigger then swap them. Then compare the next element with the element after it, if it's bigger - swap, if not - leave as it is. After first iteration the biggest element will  be the last one.

### Disadvantage of Bubble sort
* It is very slow, runs in O(n^2) time in worst case.
* The loop continues to run even if the array is sorted.

### BigO of bubble sort

* Best: O(n). If the arrays is nearly sorted and version of implimination is optimized
* Average/Worst: O(n^2)

### Implementation of Bubble Sort

```javascript
Input/Output:

bubbleSort([34,56,77,2,1]); // [1,2,34,66,87]
```

```javascript
Solution:

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                //swap
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }    
    }
    return arr;
}
```


Problems with current solution:

1. Too many unnecessary comparison, for example in IF block on last iteration we compare arr[i] arr[i+1], where arr[i+1] is UNDEFINED, since we reached the end of the array.

2. Having both loops till the end of the array, we compare already sorted elements.

3. Problem with bubble sort in general if we have nearly sorted array, the function keeps going no matter if it does swaps or not, performing sorting on the already sorted array. If no swaps were made during one iteration, no further swaps needed, so we can stop the algorithm.


Solutions:

There are several solutions for problems 1&2. 
1. Cut the length of the inner loop from _i < arr.length_ to _i < arr.length - 1 - j_
2. OR start from the end of the array in first loop and move to the beginning

```javascript
for (let j = arr.length; j > 0; j--) {
        for (let i = 0; i < j - 1; i++) {
            ...
        }
}
```

3. To solve the 3rd problem we can introduce additional variable, which tracks if no swaps were made.


So optimized solution with the about mentioned remarks would look like this:

```javascript
Optimazed Solution:

function bubbleSort(arr) {
    let noSwaps;
    for (let j = arr.length; j > 0; j--) {
        noSwaps = true;
        for (let i = 0; i < j - 1; i++) {
            if(arr[i] > arr[i+1]) {
                //swap
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                noSwaps = false;
            }
        }    
        if (noSwaps) break;
    }
    return arr;
}
```