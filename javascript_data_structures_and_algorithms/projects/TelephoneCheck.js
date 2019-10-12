const telephoneCheck = str => {
	const filteredWithParensNumber = str
		.split("")
		.filter(x => x.match(/[0-9()]/));
	const filteredNumber = filteredWithParensNumber.filter(x => x.match(/[0-9]/));

	// is a valid phone number
	if (filteredNumber.length < 10) return false;
	if (filteredNumber.length > 11) return false;
	if (filteredNumber.length === 11) {
		if (filteredNumber[0] !== "1") return false;
	}

	// check paren
	const parens = filteredWithParensNumber.filter(char => char.match(/[()]/));
	if (parens.length !== 2 && parens.length !== 0) return false;

	// check paren positions
	if (parens.length === 2) {
		if (parens[0] !== "(") return false;
		if (parens[1] !== ")") return false;
		let leftIdx = filteredWithParensNumber.indexOf("(");
		if (filteredWithParensNumber[leftIdx + 4] !== ")") return false;
	}

	// check edge cases
	const squishedNumber = str.split("").filter(x => x !== " ");
	if (!squishedNumber[0].match(/[0-9()]/)) return false;

	return true;
};

console.log(telephoneCheck("-1 (555) 555-5555"));
