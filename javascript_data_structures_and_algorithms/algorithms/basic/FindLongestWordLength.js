const findLongestWordLength = str => {
    const splitStr = str.split(" ");
    let longestWord;
    for (let i = 0; i < splitStr.length; i++) {
        if (!longestWord) {
            longestWord = splitStr[i];
            continue;
        }
        if (splitStr[i].length > longestWord.length) {
            longestWord = splitStr[i];
        }
    }
    return longestWord.length;
};

console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
