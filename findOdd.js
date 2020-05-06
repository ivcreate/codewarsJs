function findOdd(A) {
    let res,
    map = new Map();
    
    A.sort().forEach(item => {
        !map.has(item) ? map.set(item,1) : map.set(item, map.get(item)+1);
    })

    for(let key of map.keys()){
        if (map.get(key) % 2 != 0){
            res = key;
        }
    }
    
    return res;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

