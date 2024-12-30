const user = {
  username: "Zohaib",
  age: 20,
  message: function () {
    console.log(`${this.username} , Welcome to our website.`);
    // console.log(this);
  },
};

// user.message();
// user.username = "Soldier boy";
// user.message();

////////// Arrow function

const aboutMe = () => {
  let username = "Zohaib";
  console.log(this);
};

// aboutMe()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Zohaib" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
