// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const exclamation = []; 
array.forEach(user => {
  exclamation.push(`${user.username}!`);
});
console.log(exclamation);

//Create an array using map that has all the usernames with a "? to each of the usernames

let question  = array.map(user => `${user.username}?`);
console.log(question);

//Filter the array to only include users who are on team: red
let red = array.filter(user => user.team == "red");
console.log(red);

//Find out the total score of all users using reduce
const reduceFunction = (accumulator, currentValue) => accumulator + currentValue.score;

//the reduce function syntax is .reduce(func, initialValue);
let allScores = array.reduce(reduceFunction, 0);
console.log(allScores);
//the correct answer is 71

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  //these lines produce Side Effects. Console prints out values
  //and alert displays a pop-up
  //neither is returning the value as the same type as input

  // console.log(num, i);
	// alert(num);
	return num * 2;
});

//the value of i is the index number in the array;

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let newList = array.map(user => {
  user.items = user.items.map(item => `${item}!`);
  return user;
});

console.log(newList);