const smallestCommons = arr => {
	let range = [];
	arr.sort((x, y) => x - y);

	if (arr[0] < arr[1]) {
		let currentNumber = arr[0] === 1 ? 2 : arr[0];
		while (currentNumber <= arr[1]) {
			range.push(currentNumber);
			currentNumber++;
		}
	}

	const testResult = test => {
		for (let i = 0; i < range.length; i++) {
			const value = range[i];
			if (test % value !== 0) return false;
		}

		return true;
	};

	let multiple = 2;
	let result = range[0];

	while (!testResult(result)) {
		multiple++;
		result = range[0] * multiple;
	}

	return result;
};

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.time("Common");
console.log(smallestCommons([23, 18]));
console.timeEnd("Common");
