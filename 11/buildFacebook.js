let database = [
    {
        username: "jason",
        password: "supersecret"
    },
];

const newsFeed = [
    {
        username: "Andrei",
        timeline: "New course out next week!"
    },
    {
        username: "Colt",
        timeline: "Learn yer DS and Algos!"
    }
]

let userNamePrompt = prompt("what's your username?");
let passwordPrompt = prompt("What's your password?");

function signIn(user, pass){
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed)
    } else {
        alert("Wrong password! Access denied!");
    }
}

signIn(userNamePrompt, passwordPrompt);