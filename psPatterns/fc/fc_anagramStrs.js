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

//Time: O(n) Space: O(1) -  obj's size stays constant no matter how large n is
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s, t) {
    //check is amount of chars ===
    if (s.length !== t.length) {
        return false;
    }
    
    let objS = {};
    
    //create obj only for first str
    for (let i of s) {
        objS[i] = (objS[i] || 0) + 1;
    }
    
    //loop though second string
    //if char from second str exists in objS decrement counter by one
    for (let i of t) {
        if (!objS[i]) {
            return false;
        } else {
            objS[i] -= 1;
        }
    }
        
    return true;
};