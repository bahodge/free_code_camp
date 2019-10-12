const binaryAgent = str => {
	const splitStr = str.split(" ");
	const powers = [7, 6, 5, 4, 3, 2, 1, 0];

	const convertToChar = decimal => String.fromCharCode(decimal);
	const convertToDecimal = byte => {
		let parsedByte = byte.split("").map(x => parseInt(x));
		let numbers = [];

		for (let i = parsedByte.length - 1; i >= 0; i--) {
			const bit = parsedByte[i];
			if (bit === 0) {
				numbers.push(0);
			} else {
				numbers.push(2 ** powers[i]);
			}
		}
		return numbers.reduce((acc, x) => acc + x);
	};

	let convertedDecimals = [];
	for (let i = 0; i < splitStr.length; i++) {
		const byte = splitStr[i];
		const result = convertToDecimal(byte);
		convertedDecimals.push(result);
	}

	return convertedDecimals.map(decimal => convertToChar(decimal)).join("");
};

console.log(binaryAgent("01000001"));

console.log(
	binaryAgent(
		"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
	)
);
