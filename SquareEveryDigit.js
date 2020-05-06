function squareDigits(num){
    let res = ""
    num.toString(10).split("").forEach(item => {
        res += Math.pow(parseInt(item),2);
    });
    return parseInt(res);
}
console.log(squareDigits(9119))

