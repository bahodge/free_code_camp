const celsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / (9 / 5);

console.log(celsiusToFahrenheit(-30)); // -22
console.log(fahrenheitToCelsius(-22)); // -30
