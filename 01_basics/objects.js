const myFullName = "Syed Zohaib Shah"
const mySymbol = Symbol("key")

const firstUser = {
    name: 'Zohaib',
    "full name" : myFullName,
    [mySymbol] : "key1",
    age: 21,
    isStudent: true,
    email: 'zohaibshah7@gmail.com',
    location: 'Neptune',
    isLoggedIn: false
}

// console.log(firstUser.email);
// console.log(firstUser["email"]);
// console.log(firstUser["full name"]);
// console.log(firstUser[mySymbol]);

// firstUser.email = 'soldierboy7@gmail.com'
// console.log(firstUser.email);

// Object.freeze(firstUser)

// firstUser.email = 'ghost7@gmail.com'
// console.log(firstUser);

firstUser.greeting = function() {
    console.log("Hello first user");
}

firstUser.greeting2 = function() {
    console.log(`Hello first user ${this.name}`);
}
console.log(firstUser.greeting());
console.log(firstUser.greeting2());
