// forecast for today in kelvin. Won't change.
const kelvin = 293;
// convert kelvin to celsius
const celsius = kelvin - 273;
// convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round temp down to nearest int
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// xtra practice
// convert Celsius to Newton and round down to nearest int.
let newton = Math.floor(celsius * (33/100))
console.log(`The temperature is ${newton} degrees Newton.`)