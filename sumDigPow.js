function sumDigPow(a, b) {
    let res = [];
    for(;a<b;a++){
        a==eval(a.toString().split("").map((val,index) => Math.pow(val,index+1)).join("+")) ? res.push(a) : "" ;
    }
    return res;
}

console.log(sumDigPow(1, 100));


