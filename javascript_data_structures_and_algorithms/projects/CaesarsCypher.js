const rot13 = str => {
	// LBH QVQ VG!

	const max = 90;
	const min = 65;

	const invalidCode = code => {
		return !(code >= min && code <= max);
	};

	const charCodes = str.split("").map(char => {
		return char.toUpperCase().charCodeAt(0);
	});

	const shiftedCodes = charCodes.map(code => {
		if (invalidCode(code)) return code;

		const rem = code - 13;
		if (rem < min) {
			const diff = min - rem;
			return max - diff + 1;
		}
		return code - 13;
	});

	const decodedStr = shiftedCodes
		.map(code => {
			return String.fromCharCode(code);
		})
		.join("");

	return decodedStr;
};

// Change the inputs below to test
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
