const uniteUnique = (...arrays) => {
	// flattens all arrays
	const flatArray = [].concat(...arrays);

	return [...new Set(flatArray)];
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
