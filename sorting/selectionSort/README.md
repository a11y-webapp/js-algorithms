## Selection Sort

The **selection sorting algorithm** is based on location the minimun value in the array and position it in the beginig. The logic of the algorithm is: start from the begining, take the first element compare it with the rest of the array, find the minimum value, than swap the minimum value with the first element, or leave the first element if it is already a minimum. At this stage the minimum value of the array is sorted, we do not need to touch it anymore. Move to the next value, repeat the algorithm. 

### Disadvantage of Selection sort
* It is a bit better than Bubble Sort, but still quit slow and runs in O(n^2) time in worst case. The improvement from Bubble Sort is less swaping. 


### BigO of Selection sort

* Best: O(2) Same as Buuble Sort. if the arrays is nearly sorted and version of implimination is optimized
* Average/Worst: O(n^2)

### Implementation of Selection Sort

```javascript
Input/Output:

selectionSort([34,56,77,2,1]); // [1,2,34,66,87]
```

```javascript
Solution:

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }


    for (let j = 0; j < arr.length; j++) {
        let minValIdx = j;
        
        for (let i = j + 1; i < arr.length; i++) {
            if (arr[i] < arr[minValIdx]) {
                minValIdx = i;
            }    
        }

        if (j !== minValIdx) {
            swap(arr, j, minValIdx); 
        }
        
    }
    
    return arr;
}

```