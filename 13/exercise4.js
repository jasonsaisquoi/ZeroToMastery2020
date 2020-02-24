//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const sumTwo = (a,b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//returns 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//returns error if other sum has been defined, otherwise:
//returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//returns error if other variables have been defined
//otherwise returns 16

//What are the two elements of a pure function?

//1. no side effects. No external changes should affect the outcome of the function (API calls, altering file system, manipulation of inputs into another type, etc.)

//2. deterministic. always produces the same results given the same input. (input x always returns f(x)...and so on)
