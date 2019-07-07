## Frequency Counter

This pattern uses object or set to collect values and frequencies of values. It helps to avoid nested loops meaning avoid O(n^2). It is usually applied with arrays or strings.

List of problems:

1. [Given two arrays, write a function to check if the second array contains squared values of the first array.](#problem-1)

2. [Given two strings s and t , write a function to determine if t is an anagram of s. You may assume the string contains only lowercase alphabets.](#problem-2)

3. [Given two positive integers num1 and num2, write a function to determine if numbers have the same frequency of the digist.](#problem-3)

4. [Given variable number of arguments, find if there are any dplicates.](#problem-4)

#### Problem 1
[Given two arrays, write a function to check if the second array contains squared values of the first array.](./fc_squaredArrs.js)
   
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
#### Problem 2
[Given two strings s and t , write a function to determine if t is an anagram of s. You may assume the string contains only lowercase alphabets.](./fc_anagramStrs.js)

```javascript
Input/Output:

("anagram", "nagaram") => true;
("rat", "cat") => false;
("ssk", "skk") => false;
```

```javascript
Solution:

//Time: O(n) Space: O(1) -  obj's size stays constant no matter how large n is
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //check is amount of chars ===
    if (s.length !== t.length) {
        return false;
    }
    
    let objS = {};
    let objT = {};
    
    //create two objs with char as key and freq as value
    for (let i of s) {
        objS[i] = (objS[i] || 0) + 1;
    }
    
    for (let i of t) {
        objT[i] = (objT[i] || 0) + 1;
    }
        
    //loop thought first obj and check the key in the second obj and compare freq
    for (let key in objS) {
        if (!objT[key] || objS[key] !== objT[key]) {
            return false;
        }
    }
    
    return true;
};
```

#### Problem 3
[Given two positive integers num1 and num2, write a function to determine if numbers have the same frequency of the digist.](./fc_sameFrequencyInt.js)

```javascript
Input/Output:

("anagram", "nagaram") => true;
("rat", "cat") => false;
("ssk", "skk") => false;
```

```javascript
```

#### Problem 4
[Given variable number of arguments, find if there are any dplicates.](./fc_anyDuplicates.js)

```javascript
Input/Output:

anyDuplicates(1,2,3) => false
anyDuplicates(1,2,3,2) => true
anyDuplicates('a', 'b', 'c', 'b') => true
```

```javascript
var anyDuplicates = function (...args) {
    let argsFC = {};

    for (let vals of args) {
        if (!argsFC[vals]) {
          argsFC[vals] = 1;
        } else {
          return false;
        }
    }
    
    return true;
}
```
