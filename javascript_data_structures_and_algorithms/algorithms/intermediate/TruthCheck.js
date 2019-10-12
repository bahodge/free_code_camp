const truthCheck = (collection, pre) => {
	const filteredObjects = collection.filter(obj => {
		if (obj[pre]) return true;
	});

	return filteredObjects.length === collection.length;
};

console.log(
	truthCheck(
		[
			{ user: "Tinky-Winky", sex: "male" },
			{ user: "Dipsy", sex: "male" },
			{ user: "Laa-Laa", sex: "female" },
			{ user: "Po", sex: "female" }
		],
		"sex"
	)
);
