const palindrome = str => {
	const splitChars = str
		.split("")
		.filter(char => char.match(/[a-zA-Z0-9]/))
		.map(x => x.toLowerCase());

	const fixedStr = splitChars.join("");
	const reverseStr = splitChars
		.map(x => x)
		.reverse()
		.join("");

	return fixedStr === reverseStr;
};

console.log(palindrome("1eye2"));
console.log(palindrome("_ey ,e"));
