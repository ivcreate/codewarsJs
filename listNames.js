function listNames(names) {
    let res = "",
    sign = ", ";
    names.forEach((element,i) => {
        if(i == names.length - 2)
            sign = " & ";
        if(i == names.length-1)
            sign = '';
        res += element.name+sign;
    });
    return res;
}

console.log(listNames([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
console.log(listNames([]));

