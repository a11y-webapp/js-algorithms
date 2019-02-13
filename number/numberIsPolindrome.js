// Problem: Determine if an integer is a palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0,
        remainder,
        value = x;
    
    if (x < 0) {
        return false;
    }
    
    while (value) {
        remainder = value % 10;
        reverse = reverse * 10 + remainder;
        value = parseInt(value / 10); 
    }
    
    return x === reverse;
};