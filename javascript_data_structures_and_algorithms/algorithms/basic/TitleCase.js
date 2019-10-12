"use strict";
const titleCase = str => {
    let splitStr = str.split(" ");
    let newArray = [];

    for (let i = 0; i < splitStr.length; i++) {
        const word = splitStr[i];
        let newWord = "";
        for (let j = 0; j < word.length; j++) {
            if (j === 0) {
                newWord = newWord.concat(word[0].toUpperCase());
            } else {
                newWord = newWord.concat(word[j].toLowerCase());
            }
        }
        newArray.push(newWord);
    }
    return newArray.join(" ");
};

console.log(titleCase("I'm a little tea pot"));
