//averagePair([1, 2, 3], 2) => true
//averagePair([1, 5, 6, 9], 3.5) => true
//averagePair([1, 5, 6, 9], 4.9) => false

var averagePair = function(arr, target){
    if (!arr.length) return false;

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let arrAvrg = (arr[i] + arr[j]) / 2;

        if (arrAvrg === target) {
            return true;
        } else if (arrAvrg > target){
            j--;
        } else {
            i++;
        }
    }

    return false;
}