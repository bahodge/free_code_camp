function mutation(arr) {
    let availableLetters = arr[0].split("");
    let comparisonLetters = arr[1].split("");
    let goodChars = [];

    for (let i = 0; i < comparisonLetters.length; i++) {
        const char = comparisonLetters[i].toLowerCase();

        for (let j = 0; j < availableLetters.length; j++) {
            if (availableLetters[j].toLowerCase() === char) {
                goodChars.push(char);
                break;
            }
        }
    }

    return comparisonLetters.length === goodChars.length;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "hel"]));
