const dropElements = (arr, func) => {
	// Drop them elements.
	let filtered = [];
	let met = false;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (!met) {
			if (func(element)) {
				met = true;
				filtered.push(element);
			}
		} else {
			filtered.push(element);
		}
	}

	if (!met) return [];

	return filtered;
};

console.log(
	dropElements([1, 2, 3, 4], function(n) {
		return n >= 3;
	})
);
console.log(
	dropElements([0, 1, 0, 1], function(n) {
		return n === 1;
	})
);
console.log(
	dropElements([1, 2, 3, 4], function(n) {
		return n > 5;
	})
);
console.log(
	dropElements([1, 2, 3, 7, 4], function(n) {
		return n > 3;
	})
);
console.log(
	dropElements([1, 2, 3, 9, 2], function(n) {
		return n > 2;
	})
);
