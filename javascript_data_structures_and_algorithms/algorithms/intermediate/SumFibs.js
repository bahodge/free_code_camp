const sumFibs = num => {
	if (num === 1 || num === 0) return 1;

	const fib = x => {
		let fibArray = [1, 1];
		for (let i = 2; i < x; i++) {
			fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
		}
		return fibArray;
	};

	const fibResult = fib(num);

	return fibResult
		.filter(val => val % 2 !== 0 && val <= num)
		.reduce((acc, val) => acc + val);
};

console.log(sumFibs(1000));
