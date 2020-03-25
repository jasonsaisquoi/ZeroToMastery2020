const fs = require('fs');

//this code is asynchronous
fs.readFile('./hello.txt', (err,data) => {
  if (err) {
    console.log(err);
  }
  console.log('#1', data.toString());
});

//this ran first because this code is synchornous
const file = fs.readFileSync('./hello.txt');
console.log('#2', file.toString());


//Append

// fs.appendFile('./hello.txt', ' eat some ice cream', err => {
//   if (err) {
//     console.log(err);
//   }
// });

//Write 

// fs.writeFile('bye.txt', 'Sad to see you go!', err=> {
//   if (err) {
//     console.log(err);
//   }
// })

// Delete
fs.unlink('./bye.txt', err => {
  if (err) console.log(err);
});
//bye.txt is deleted