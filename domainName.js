function domainName(url) {
    if(url.indexOf("www.") != -1)
        return url.split(".")[1];
    let match = url.match(/([^\/\.]+)/g)
    if(match[0].indexOf(":") == -1)
        return match[0]
    else
        return match[1]
}


console.log(domainName("http://http.co.jp"), "google")
console.log(domainName("www.xakep.ru"), "xakep")
console.log(domainName("http://www.zombie-bites.com"))

