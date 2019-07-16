// ("hello", "hello world") => true;
// ("sing", "sting") => true;
// ("abc", "bca") => false;
// ("abc", "abeeeec") => true;

var isSubsequence = function(str1, str2){
    if (!str1.length || !str2.length) return false;

    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j] && i === str1.length - 1) {
            return true;
        } else if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return false;
}