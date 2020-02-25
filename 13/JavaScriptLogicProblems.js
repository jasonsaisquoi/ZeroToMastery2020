// What is the Challenge?
// Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. Something that is useful not only in interviews when you get challenging problems, but also in your day to day work as a developer. First, start off by reading this article: https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const sortMe = [1,"2",4,"591",392,391,2,5,10,2,1,1,1,"20",20];

function sortArray(array){

  //making hash map to find count of numbers
  let hash = {};
  sortMe.forEach(index => {
    parseInt(index);
    if (!hash[index]) {
      hash[index] = 1;
    } else {
      hash[index]++;
    }
  })
  console.log(hash);
  //making array of sorted numbers;
  let sorted = [];

  //add the key value times to sorted array
  for (let [key, value] of Object.entries(hash)) {
    let subArray = [];
    for (let i = 1; i <= value; i++) {
      subArray.push(parseInt(key));
    }
    sorted.push(subArray);
  }
  return sorted;
};

sortArray(sortMe);
//should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const sumMe = [1,2,3];
function isThereSum(array){

};
isThereSum(sumMe ,4);

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
function rgbToHex(color){

}