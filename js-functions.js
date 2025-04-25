// Multiple ways to create functions.
// Note javascript uses function "hoisting": functions can be used before declaration
// 1. Function declaration:
greetInSpanish();
  
function greetInSpanish() {
console.log('Buenas Tardes');
}

// Default Values
function sayThanks(name = 'Bob') {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole')
// Output:
// Thank you for your purchase Cole! We appreciate your business.

// Return
function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
}

function rectangleArea(width, height) {
    let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

// Helper Functions
/*
We can also use the return value of a function inside another function. These
Preview: Docs Loading link description
functions
being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
*/

function monitorCount(rows, columns) {
	return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
	return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);

// Function Expressions
/*
Another way to define a function is to use a function expression.
To define a function inside an expression, we can use the function keyword.
In a function expression, the function name is usually omitted.
A function with no name is called an anonymous function.
A function expression is often stored in a variable in order to refer to it.

To declare a function expression:

    Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

    Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

variableName(argument1, argument2)

Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.
*/
const plantNeedsWater= function(day) {
	if (day === 'Wednesday') {
	  return true;
	} else {
	  return false;
	}
  }
  
  console.log(plantNeedsWater('Tuesday'))

// Arrow Functions
/*
ES6 introduced arrow function syntax, a shorter way to write
Preview: Docs Functions are reusable pieces of code that perform tasks, process data, and possibly return values.
functions
by using the special “fat arrow” () => notation.

Preview: Docs Arrow function expressions were introduced in ES6. These expressions are a clean and concise alternative to the traditional function syntax.
Arrow functions
remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
*/
const plantNeedsWaterArrowFunction = (day) => {
	if (day === 'Wednesday') {
	  return true;
	} else {
	  return false;
	}
  };

// Concise Body Arrow Functions
/*
1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses.
However, if a function takes zero or multiple parameters, parentheses are required.
===
ZERO PARAMETERS
const functionName = () => {};

ONE PARAMETER
const functionName = paramOne => {};

TWO+ PARAMETERS
const functionName = (paramOne, paramTwo, ...) => {};
===

2. A function body composed of a single-line block does not need curly braces.
Without the curly braces, whatever that line evaluates will be automatically returned. 
The contents of the block should immediately follow the arrow => and the return keyword can be removed. 
This is referred to as implicit return.

===
SINGLE-LINE BLOCK
const sumNumbers = number => number + number;
same as
MULTI-LINE BLOCK
const sumNumbers = number => {
	const sum = number + number;
	return sum;
}
*/

const plantNeedsWaterConciseBodyArrow = day => day === 'Wednesday' ? true : false;
