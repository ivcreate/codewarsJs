function sortWord(word){
    return word.split("").sort().join("");
}
function anagrams(word, words) {
    word = sortWord(word)
    console.log(word)
    return words.filter(item => {
        if(sortWord(item) === word)
            return true;
    });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
