const fs = require('fs');
let floor = 0;
let input = fs.readFileSync('./ElevatorInput.txt').toString();



//finding the floor at the end
for (let i=0; i< input.length; i++){
  if (input[i] === '('){
    floor++;
  } else {
    floor--;
  }
}
console.log(`Santa is on floor ${floor}`);

floor = 0;

//finding the index
let i = 0;
while (floor !== -1){
  if (input[i] === '('){
    floor++
    i++;
  } else {
    floor--;
    i++;
  }
}

console.log(`Santa went to -1 at index ${i}`)