function frankenSplice(arr1, arr2, n) {
    let left = [];
    let right = [];

    for (let i = 0; i < arr2.length; i++) {
        if (i < n) {
            left.push(arr2[i]);
        } else {
            right.push(arr2[i]);
        }
    }

    for (let j = 0; j < arr1.length; j++) {
        left.push(arr1[j]);
    }
    return left.concat(right);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
