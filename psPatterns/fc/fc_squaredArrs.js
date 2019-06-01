// Problem: check if the second array contains squared values of the first array
// First naive approach
// Time: O(n^2) Space: O(1) 
var same = function (arr1, arr2) {
    //check if lengths are equal
    if (arr1.length !== arr2.length) {
        return false;
    }

    //take each val from the first arr1
    //loop though the arr2
    //if val*val is in the arr2
    //replace the val*val from arr2 with some char to avoid deleting
    for (let val of arr1) {
        let valIndx = arr2.indexOf(val*val);
        if (valIndx > -1) {
            arr2[valIndx] = "a";
        } else {
            return false;
        }
    }

    //use function every to check is all val in arr2 === char
    return arr2.every((val) => val === "a");
};

// Solution using sums
// Time: O(n) Space:O(1)
var sameSum = function (arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;

    //check if lengths are equal
    if (arr1.length !== arr2.length) {
        return false;
    }

    //loop thought arr1 
    //square all elements in arr1 and sum up them
    for (let val of arr1) {
        sum1 += val**2;
    }

    //loop arr2
    //sum all elements in arr2
    for (let val2 of arr2) {
        sum2 += val2;
    }

    //compare results
    return sum1 === sum2;
};

// Frequency Counter solution
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
};