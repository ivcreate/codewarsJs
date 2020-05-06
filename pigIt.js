function pigIt(str) {
    let sign = ',./?!\|';
    return str.split(" ").map(word => {
        return sign.indexOf(word) == -1 ? word.slice(1) + word.slice(0,1) + "ay" : word ;
    }).join(" ");
}

console.log(pigIt('Pig latin is cool'));

