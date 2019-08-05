var longestSubStr = function (str) {
    let maxLength = 0;
    let chars = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
        let curr = str[i];

        if (chars[curr]) {
            start = Math.max(chars[curr], start);
        }

        maxLength = Math.max(maxLength, i - start + 1);
        chars[curr] = i + 1;
    }

    return maxLength;
}