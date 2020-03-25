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