const largestOfFour = arr => {
    let newArray = [];
    arr.forEach(subArray => {
        let largestNumber;
        for (let i = 0; i < subArray.length; i++) {
            if (!largestNumber) {
                largestNumber = subArray[i];
                continue;
            }
            if (subArray[i] > largestNumber) {
                largestNumber = subArray[i];
            }
        }
        newArray.push(largestNumber);
    });

    return newArray;
};

console.log(
    largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ])
);
