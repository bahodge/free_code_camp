const sumPrimes = num => {
	const isPrime = x => {
		if (x === 1) return false;
		if (x === 2) return true;
		for (let i = 2; i < x; i++) {
			if (x % i === 0) return false;
		}
		return true;
	};

	let primes = [];
	let currentNum = 1;
	while (currentNum <= num) {
		if (isPrime(currentNum)) {
			primes.push(currentNum);
		}
		currentNum++;
	}

	return primes.reduce((acc, x) => acc + x, 0);
};

console.log(sumPrimes(10)); // 2 + 3 + 5 + 7 = 17
