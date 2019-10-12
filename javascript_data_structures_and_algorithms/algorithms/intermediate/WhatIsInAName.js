const whatIsInAName = (collection, source) => {
	// Get all the keys
	let keys = Object.keys(source);

	// filter all collectioions to see if they have all the keys
	const filteredCollections = collection.filter(col => {
		let matchingKeys = [];
		// loop over the keys
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			// check if the key matches
			if (col[key] === source[key]) matchingKeys.push(keys[i]);
		}

		// see if the number of matches is equal the the number of keys
		return matchingKeys.length === keys.length;
	});

	// return
	return filteredCollections;
};

console.log(
	whatIsInAName(
		[
			{ first: "Romeo", last: "Montague" },
			{ first: "Mercutio", last: null },
			{ first: "Tybalt", last: "Capulet" }
		],
		{ last: "Capulet" }
	)
);
