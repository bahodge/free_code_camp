"use strict;";

const naiveFactorializeNumber = n => {
    let total = 1;
    for (let i = n; i > 1; i--) {
        total *= i;
    }
    return total;
};

const factorializeNumber = n => {
    if (n === 1) return 1;
    return n * factorializeNumber(n - 1);
};

console.log(naiveFactorializeNumber(10));
console.log(factorializeNumber(10));
