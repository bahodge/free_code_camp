const steamrollArray = arr => {
	// I'm a steamroller, baby
	let newArr = [].concat.apply([], arr);
	if (newArr.some(element => Array.isArray(element))) {
		newArr = steamrollArray(newArr);
	}

	return newArr;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));
