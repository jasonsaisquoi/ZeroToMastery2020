//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
const experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//#2 return value when moveCommand("forward");
//encounter a monster

//#3 return value when moveCommand("back");
//you arrived home

//#4 return value when moveCommand("right");
//you found a river

//#5 return value when moveCommand("left");
//you run into a troll

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function dayOfWeek(dayOfWeek) {
  switch (dayOfWeek) {
    case "Monday":
      return 1;
      break;
    case "Tuesday":
      return 2;
      break;
    case "Wednesday":
      return 3;
      break;
    case "Thursday":
      return 4;
      break;
    case "Friday":
      return 5;
      break;
    case "Saturday":
      return 6;
      break;
    case "Sunday":
      return 7;
      break;
  }
}
