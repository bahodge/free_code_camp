const booWho = bool => {
    return typeof bool === "boolean";
};

console.log(booWho(null));
console.log(booWho(true));
