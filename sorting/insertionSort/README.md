## Insertion Sort

The **insertion sorting algorithm** is based on picking up an element, string from index 1, and compare it to the previouse elements, than insert the element to the correct place.

### Disadvantage of Insertion sort
* Big time complexity. 

### Advantages of Insertion sort 
* It's efficient to use on nearly sorted array
* Good to use when data is coming online and needs to be sorted right away


### BigO of Insertion sort

* Best: O(n^2)
* Average/Worst: O(n^2)

### Implementation of Insertion Sort

```javascript
Input/Output:

insertionSort([34,56,77,2,1]); // [1,2,34,66,87]
```

```javascript
Solution:

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i-1;
        let curVal = arr[i];

        while (curVal < arr[j] && j >= 0) {
            arr[j+1] = arr[j];
            j--;
        }
        if (j !== i - 1) {
            arr[j+1] = curVal;
        }
    }

    return arr;
}

```