function convertToRoman(num) {
	const romanList = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

	let str = "";

	for (let roman in romanList) {
		const a = Math.floor(num / romanList[roman]);

		for (let i = 0; i < a; i++) {
			str += roman;
		}

		num = num % romanList[roman];
	}

	return str;
}

console.log(convertToRoman(44));
