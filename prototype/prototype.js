let myName = "zohaib     "

// console.log(myName.trueLength);


// let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.zohaib = function(){
    console.log(`zohaib is present in all objects`);
}

Array.prototype.heyZohaib = function(){
    console.log(`Zohaib says hello`);
}

heroPower.zohaib()
// myHeros.zohaib()
// myHeros.heyZohaib()
// heroPower.heyZohaib()

// inheritance

const User = {
    name: "zohaib",
    email: "zohaib@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SoldierBoy     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"zohaib".trueLength()
"iceTea".trueLength()