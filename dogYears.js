// a script to find your age in dog years
// declare myAge, the age to convert to dog years
let myAge = 36;
// Early years are calculate different ( * 10.5 instead of 4)
let earlyYears = 2;
earlyYears *= 10.5;
// Fix age to account for earlyYears
let laterYears = myAge - 2;
// laterYears will be multiplied by 4
laterYears *= 4;
// find your dog age by adding earlyYears to laterYears
let myAgeInDogYears = earlyYears + laterYears;
// declare my name, and convert to all lower case
const myName = 'Sam'.toLowerCase()
// use string interpolation to print the results
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
