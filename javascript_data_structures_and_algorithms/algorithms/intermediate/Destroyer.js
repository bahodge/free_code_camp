const destroyer = (arr, ...args) => {
	let newArr = arr;

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		newArr = newArr.filter(x => x !== arg);
	}

	return newArr;
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
