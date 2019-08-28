## Naive algorithm for Pattern Search

The **Naive algorithm** is based on checking if a pattern appears in a string by comparing the first value in pattern with values in a string, if the match is found, move to the comparison of second value in the pattern with next element from the match, etc..

### BigO of Naive algorithm

* Best: **O(n)**, when the first character of the pattern is not found, loop through the string to check all characters
* Average/Worst: **O(m*(n-m+1))**, when all characters of the text and pattern are same or only the last character is different.

### Implementation of Naive Search

Write a function which accepts a string and a substring, and return the amount of occurance the substr in a string.

```javascript
Input/Output:

stringSearch("lollylo","lo"); // 2
```

```javascript
Solution:

function stringSearch(str, substr) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < substr.length; j++) {
            if (str[i] !== substr[j]) {
                break;
            } else {
                i++;
            }

            if (j === substr.length - 1) {
                count++;
            }
        }
    }

    return count;
}

```