'use strict'

const fibonacci = (arr = [0,1]) => {
    
    if (arr[arr.length-1] > 350){
        return arr;
    }
    else {
        arr.push(arr[arr.length-2] + arr[arr.length-1])
        return fibonacci(arr)
    }        
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
