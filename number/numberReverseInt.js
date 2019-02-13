// Problem: Given a 32-bit signed integer, reverse digits of an integer.  
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sum = 0;
    let negative = x < 0;
    const maxInt = 2**31 - 1;
    
    x = negative ? -x : x;
    
    while (x > 0) {
        let remainder = x % 10;
        sum = sum*10 + remainder;
        x = Math.floor(x / 10);
        
        if (sum > maxInt) {
            return 0;
        }
    
    }
    
    return negative ? -sum : sum;
};