function digital_root(n) {
    let sum = 0
    n.toString(10).split("").forEach(element => {
        sum += parseInt(element)
    });
    if(sum > 9)
        return digital_root(sum)
    else
        return sum
}
console.log( digital_root(16))
console.log( digital_root(456))