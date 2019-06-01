function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let obj1 = {};
    let str2 = num2.toString();
    let obj2 = {};
  
    if (str1.length !== str2.length) return false;
    
    for (let i of str1) {
        obj1[i] = (obj1[i] || 0) + 1;
    }
  
    for (let i of str2) {
        obj2[i] = (obj2[i] || 0) + 1;
    }
  
    for (let key in obj1) {
       if (!obj2[key] ||
            obj1[key] !== obj2[key] || 
            Object.keys(obj1).length !== Object.keys(obj2).length) {
                return false;
       }
    }
    return true;
}

sameFrequency(34,14)