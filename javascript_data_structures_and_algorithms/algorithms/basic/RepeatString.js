const repeatString = (str, times) => {
    let newString = "";
    let i = 0;
    while (i < times) {
        newString = newString.concat(str);
        i++;
    }

    return newString;
};

console.log(repeatString("x", 3));
