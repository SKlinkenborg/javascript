// var sets a variable
var favoriteFood = 'pizza';
console.log(favoriteFood);
var numOfSlices = 8
console.log(numOfSlices)

// let keyword signals the variable can be assigned a different value (mutable)
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

// vars can be assigned without a value, will be 'undefined' ie
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// const sets a constant: variable that cannot be changed (immutable)
const entree = "Enchiladas"
console.log(entree)
entree = 'Tacos'
// results in TypeError

// Math assignment operators
    let levelUp = 10;
    let powerLevel = 9001;
    let multiplyMe = 32;
    let quarterMe = 1152;

    // Use the mathematical assignments in the space below:
    levelUp += 5
    powerLevel -= 100
    multiplyMe *= 11
    quarterMe /= 4
        /*
    
        Output:

        The value of levelUp: 15
        The value of powerLevel: 8901
        The value of multiplyMe: 352
        The value of quarterMe: 288
        */
    // Increment, Decrement
    let a = 10
    // a++ a--
    // a = 11 a = 9

// String concatentaion
let favoriteAnimal = 'oppossum'
console.log('My favorite animal: ' + favoriteAnimal)
// String interpolation
// uses 'template literals' (similar to python print formatted strings)
// designated w/ backticks `
const myName = 'Sham';
const myCity = 'Auckland';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

//typeof operator allows us to check an object's data type
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable)

// CC Concept Review
