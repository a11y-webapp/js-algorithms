## Frequency Counter

This pattern uses object or set to collect values and frequencies of values. It helps to avoing nested loops meaning avoid O(n^2) with array and string

1. Problem: Given two arrays, write a function to check if second array contains squared values of first array.
   
```javascript
Input/Output:

([1, 2, 3], [4, 9, 1]) => true;
([1, 2, 3], [4, 1]) => false;
([1, 2, 3], [1, 9, 1]) => false;
```

```javascript
Solution:

//Time: O(n) Space: O(n)
var sameFC = function (arr1, arr2) {
    let fcObj1 = {};
    let fcObj2 = {};

    //check if lengths are equal
    if (arr1.length !== arr2.length) {
        return false;
    }

    //fill in objs with val of arr as a key and freq as a value
    for (let val of arr1) {
        fcObj1[val] = (fcObj1[val] || 0) + 1;
    }

    for (let val of arr2) {
        fcObj2[val] = (fcObj2[val] || 0) + 1;
    }

    //check if squared val is in the second obj and their vals are ===
    for (let val in fcObj1) {
        if (!(val**2 in fcObj2) || fcObj1[val] !== fcObj2[val**2]) {
            return false;
        } 
    }

    return true;
}
```
