var countUniqueValsSortedArr = function (arr) {
    let j = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    console.log(arr.splice(0,j+1), j)
}