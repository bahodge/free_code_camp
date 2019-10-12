const getIndexToInsert = (arr, num) => {
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let a = 0; a < arr.length; a++) {
        if (arr[a] >= num) return a;
    }

    return arr.length;
};

console.log(getIndexToInsert([40, 44, 47, 60, 74, 99], 41));
