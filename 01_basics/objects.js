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
// console.log(firstUser.greeting());
// console.log(firstUser.greeting2());

const insta = {}

insta.id = "123456";
insta.name = "Soldier boy";
insta.isLoggedIn = false;

// console.log(insta);

const googleUser = {
    userEmail: 'soldierboy@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'Soldier',
            lastName: 'boy'
        }
    }
};

// console.log(googleUser.fullName.userFullName.firstName);

const obj1 = {'a' : 1, 'b' : 2}
const obj2 = {'c' : 3, 'd' : 4}
const obj3 = {'e' : 5, 'f' : 6}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    { id: 1, name: "Ali", email: "ali@example.com", age: 20 },
    { id: 2, name: "Aisha", email: "aisha@example.com", age: 22 },
    { id: 3, name: "Ahmed", email: "ahmed@example.com", age: 25 },
    { id: 4, name: "Sara", email: "sara@example.com", age: 23 },
    { id: 5, name: "Zain", email: "zain@example.com", age: 24 },
    { id: 6, name: "Fatima", email: "fatima@example.com", age: 21 },
    { id: 7, name: "Hassan", email: "hassan@example.com", age: 27 },
    { id: 8, name: "Noor", email: "noor@example.com", age: 26 },
    { id: 9, name: "Bilal", email: "bilal@example.com", age: 28 },
    { id: 10, name: "Maria", email: "maria@example.com", age: 22 },
];
// console.log(users[1].name);
// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));

// console.log(insta.hasOwnProperty('isLoggedIn'));
