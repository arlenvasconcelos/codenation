'use strict'

const fibonacci = () => {
    
    const arr = [0, 1];
    let sum = 0;
    while (sum < 350) {
        sum = arr[arr.length-1] + arr[arr.length-2];
        arr.push(sum);
    }
    
    return arr;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
