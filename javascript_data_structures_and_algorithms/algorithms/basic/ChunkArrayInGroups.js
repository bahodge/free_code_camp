const chunkArrayInGroups = (arr, size) => {
    return chunk(arr, size, []);
};

const chunk = (arr, size, acc) => {
    if (arr.length <= size) {
        acc.push(arr);
        return acc;
    }
    let i = 0;
    let grouping = [];
    while (i < size) {
        grouping.push(arr.shift());
        i++;
    }
    acc.push(grouping);
    return chunk(arr, size, acc);
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
