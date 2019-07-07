//anyDuplicates(1,2,3) => false
//anyDuplicates(1,2,3,2) => true
//anyDuplicates('a', 'b', 'c', 'b') => true

//Time: O(n) Space: O(1)

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
