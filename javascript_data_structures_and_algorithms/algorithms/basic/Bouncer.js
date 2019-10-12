function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) newArray.push(arr[i]);
    }
    return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
