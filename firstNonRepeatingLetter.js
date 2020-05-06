function firstNonRepeatingLetter(s) {
    let search_s = s.toLowerCase(),
    res = s.split("").find((item,i) => {
        if(search_s.indexOf(item.toLowerCase()) == i && search_s.lastIndexOf(item.toLowerCase()) == i)
            return true
    })
    return res ? res : "";
}

console.log(firstNonRepeatingLetter('sTress'));
console.log(firstNonRepeatingLetter(''));

