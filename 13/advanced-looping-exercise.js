const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

//objets
for (item in detailedBasket) {
  console.log(item);
}

//arrays
for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i=0; i <arr.length; i++) {
    if (arr[i]>highest){
      highest = arr[i];
    }
  }
}

function biggestNumberInArray2(arr) {
  let highest = 0;
  for (index in arr) {
    if (index > highest) {
      highest = index
    }
  }
}

function biggestNumberInArray3(arr) {
  let highest = 0;
  arr.forEach(index => {
    if (index > highest) {
      highest = index;
    }
  })
}

biggestNumberInArray(array);
biggestNumberInArray2(array);
biggestNumberInArray3(array);