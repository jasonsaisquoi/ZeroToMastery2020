let database = [
    {
        username: "jason",
        password: "supersecret"
    },
    {
        username: "andrei",
        password: "ztm"
    }, 
    {
        username: "ingrid",
        password: "777"
    }
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

    for (let i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
            console.log(newsFeed)
        } else {
            alert("Wrong password! Access denied!");
        }
    }
}

signIn(userNamePrompt, passwordPrompt);